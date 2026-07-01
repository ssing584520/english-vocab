"""
词库批量审核工具
扫描 wordBank-1000.ts 中的可疑数据，输出审核报告。
用法: python tools/audit_bank.py
"""

import re
import json
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent / "src" / "wordBank-1000.ts"
REPORT_DIR = Path(__file__).resolve().parent.parent / "audit-reports"

# ===== 不可数名词（不应有复数） =====
# ===== 明确不可数的名词（小学阶段不应有复数） =====
STRICT_UNCOUNTABLE = {
    "air", "weather", "advice", "traffic", "music", "milk", "bread",
    "rice", "sugar", "salt", "butter", "cheese", "honey", "cream",
    "furniture", "luggage", "baggage", "equipment", "homework",
    "housework", "rubbish", "garbage", "trash", "litter", "dust",
    "electricity", "steam", "oxygen", "hydrogen", "nitrogen",
    "news", "information", "knowledge", "progress", "research",
}

# ===== 有争议的名词（语境中可作可数，小学阶段保留意见） =====
DEBATABLE_UNCOUNTABLE = {
    "fruit", "fish", "food", "meat", "time", "money", "water", "tea",
    "juice", "coffee", "soup", "ice", "oil", "paper", "stone",
    "wood", "glass", "metal", "iron", "steel", "cotton", "silk",
    "hair", "sand", "snow", "rain", "wind", "light", "sound",
    "noise", "space", "power", "energy", "nature", "art", "music",
    "health", "wealth", "luck", "peace", "love", "happiness",
    "beef", "pork", "chicken",
    "work", "fun", "help", "support",
}

UNCOUNTABLE_NOUNS = STRICT_UNCOUNTABLE | DEBATABLE_UNCOUNTABLE

# ===== 不规则动词 (word -> expected pastTense) =====
IRREGULAR_VERBS = {
    "be": ("was/were", "been"),
    "begin": ("began", "begun"),
    "break": ("broke", "broken"),
    "bring": ("brought", "brought"),
    "build": ("built", "built"),
    "buy": ("bought", "bought"),
    "catch": ("caught", "caught"),
    "choose": ("chose", "chosen"),
    "come": ("came", "come"),
    "cost": ("cost", "cost"),
    "cut": ("cut", "cut"),
    "do": ("did", "done"),
    "draw": ("drew", "drawn"),
    "drink": ("drank", "drunk"),
    "drive": ("drove", "driven"),
    "eat": ("ate", "eaten"),
    "fall": ("fell", "fallen"),
    "feel": ("felt", "felt"),
    "find": ("found", "found"),
    "fly": ("flew", "flown"),
    "forget": ("forgot", "forgotten"),
    "get": ("got", "got/gotten"),
    "give": ("gave", "given"),
    "go": ("went", "gone"),
    "grow": ("grew", "grown"),
    "have": ("had", "had"),
    "hear": ("heard", "heard"),
    "hide": ("hid", "hidden"),
    "hit": ("hit", "hit"),
    "hold": ("held", "held"),
    "hurt": ("hurt", "hurt"),
    "keep": ("kept", "kept"),
    "know": ("knew", "known"),
    "lead": ("led", "led"),
    "learn": ("learned/learnt", "learned/learnt"),
    "leave": ("left", "left"),
    "lend": ("lent", "lent"),
    "let": ("let", "let"),
    "lie": ("lay", "lain"),
    "lose": ("lost", "lost"),
    "make": ("made", "made"),
    "mean": ("meant", "meant"),
    "meet": ("met", "met"),
    "pay": ("paid", "paid"),
    "put": ("put", "put"),
    "read": ("read", "read"),
    "ride": ("rode", "ridden"),
    "ring": ("rang", "rung"),
    "rise": ("rose", "risen"),
    "run": ("ran", "run"),
    "say": ("said", "said"),
    "see": ("saw", "seen"),
    "sell": ("sold", "sold"),
    "send": ("sent", "sent"),
    "set": ("set", "set"),
    "show": ("showed", "shown"),
    "shut": ("shut", "shut"),
    "sing": ("sang", "sung"),
    "sink": ("sank", "sunk"),
    "sit": ("sat", "sat"),
    "sleep": ("slept", "slept"),
    "speak": ("spoke", "spoken"),
    "spend": ("spent", "spent"),
    "stand": ("stood", "stood"),
    "steal": ("stole", "stolen"),
    "swim": ("swam", "swum"),
    "take": ("took", "taken"),
    "teach": ("taught", "taught"),
    "tell": ("told", "told"),
    "think": ("thought", "thought"),
    "throw": ("threw", "thrown"),
    "understand": ("understood", "understood"),
    "wake": ("woke", "woken"),
    "wear": ("wore", "worn"),
    "win": ("won", "won"),
    "write": ("wrote", "written"),
}

# ===== 专有名词 / 地名 / 大洲（不应有复数、比较级） =====
PROPER_NOUNS = {
    "china", "japan", "korea", "india", "canada", "australia", "brazil",
    "russia", "france", "germany", "italy", "spain", "england",
    "america", "africa", "europe", "asia",
    "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
    "january", "february", "march", "april", "may", "june", "july",
    "august", "september", "october", "november", "december",
    "spring", "summer", "autumn", "winter",
}

# ===== 方向词（不应有复数、比较级） =====
DIRECTION_WORDS = {"north", "south", "east", "west", "northeast", "northwest", "southeast", "southwest"}

# ===== 情态/助动词（不应有时态变形） =====
MODAL_VERBS = {"can", "could", "may", "might", "must", "shall", "should", "will", "would"}


def extract_words(filepath: Path) -> list[dict]:
    """简陋但实用的 JSON 解析：提取所有 Word 对象"""
    text = filepath.read_text(encoding="utf-8")
    # 找到 export defaultWords 部分
    start = text.find("export const defaultWords: Word[] = [")
    if start == -1:
        raise ValueError("找不到 defaultWords 定义")
    start = text.index("= [", start) + 2  # skip past "= [" to the array content
    # 找到匹配的 ] 结尾（粗略：找数组结束）
    depth = 0
    end = start
    for i in range(start, len(text)):
        if text[i] == "[":
            depth += 1
        elif text[i] == "]":
            depth -= 1
            if depth == 0:
                end = i + 1
                break

    array_text = text[start:end]
    # 用 JSON 解析每个对象
    # 先按 },\n{ 分割
    # 加外 [] 包装为 JSON 数组
    json_text = array_text.replace("'", "\"")
    # 去尾随逗号
    json_text = re.sub(r",\s*\n\s*\]", "\n]", json_text)
    # 去除 trailing comma in objects
    json_text = re.sub(r",\s*\n\s*\}", "\n}", json_text)
    # 去除注释
    json_text = re.sub(r"//.*", "", json_text)

    return parse_words_by_regex(text)


def parse_words_by_regex(text: str) -> list[dict]:
    """当 JSON 解析失败时，用正则提取每个词条"""
    words = []
    # 找到 defaultWords 数组
    start = text.find("export const defaultWords: Word[] = [")
    start = text.index("= [", start) + 2

    # 逐个提取 {} 对象
    i = start
    while i < len(text):
        if text[i] == "{":
            depth = 1
            j = i + 1
            while j < len(text) and depth > 0:
                if text[j] == "{": depth += 1
                elif text[j] == "}": depth -= 1
                j += 1
            obj_text = text[i:j]
            words.append(parse_single_word(obj_text))
            i = j
        elif text[i] == "]":
            break
        else:
            i += 1

    return [w for w in words if w is not None]


def parse_single_word(text: str) -> dict | None:
    """用正则从对象文本中提取关键字段"""
    w = {}
    m = re.search(r'word:\s*"([^"]+)"', text)
    if not m: return None
    w["word"] = m.group(1)

    m = re.search(r'partOfSpeech:\s*"([^"]+)"', text)
    if m: w["partOfSpeech"] = m.group(1)

    # definitions
    defs = re.findall(r'zh:\s*"([^"]*)"', text)
    w["definitions"] = [{"zh": d} for d in defs]

    # inflections
    inf = {}
    for key in ["plural", "pastTense", "pastParticiple", "thirdPerson",
                 "presentParticiple", "comparative", "superlative"]:
        m = re.search(rf'{key}:\s*"([^"]+)"', text)
        if m: inf[key] = m.group(1)
    if inf: w["inflections"] = inf

    # synonyms — keys are quoted: {"word": "xxx", "zh": "xxx"}
    syn_match = re.search(r'synonyms:\s*\[(.*?)\]', text, re.DOTALL)
    if syn_match:
        syn_items = re.findall(r'\{\s*"word":\s*"([^"]+)"[^}]*?"zh":\s*"([^"]*)"', syn_match.group(1))
        if syn_items:
            w["synonyms"] = [{"word": s[0], "zh": s[1]} for s in syn_items]

    # similarWords — keys are quoted: {"word": "xxx", "reason": "xxx", "zh": "xxx"}
    sim_match = re.search(r'similarWords:\s*\[(.*?)\]', text, re.DOTALL)
    if sim_match:
        sim_items = re.findall(r'"word":\s*"([^"]+)"[^}]*?"reason":\s*"([^"]*)"[^}]*?"zh":\s*"([^"]*)"', sim_match.group(1))
        if sim_items:
            w["similarWords"] = [{"word": s[0], "reason": s[1], "zh": s[2]} for s in sim_items]

    # antonyms — supports both quoted and unquoted keys
    ant_match = re.search(r'antonyms:\s*\[(.*?)\]', text, re.DOTALL)
    if ant_match:
        ant_items = re.findall(r'\{"word":\s*"([^"]+)"[^}]*?"zh":\s*"([^"]*)"', ant_match.group(1))
        if not ant_items:
            ant_items = re.findall(r'\{\s*word:\s*"([^"]+)"[^}]*?zh:\s*"([^"]*)"', ant_match.group(1))
        if ant_items:
            w["antonyms"] = [{"word": s[0], "zh": s[1]} for s in ant_items]

    # phrases — keys are unquoted: { phrase: "xxx", meaning: "xxx" }
    phr_match = re.search(r'phrases:\s*\[(.*?)\]', text, re.DOTALL)
    if phr_match:
        phr_count = len(re.findall(r'\{\s*phrase:', phr_match.group(1)))
        w["phraseCount"] = phr_count

    # mnemonics
    if re.search(r'mnemonics:', text):
        w["hasMnemonics"] = True

    # rootAffix
    if re.search(r'rootAffix:', text):
        w["hasRootAffix"] = True

    return w


def analyze_coverage(words: list[dict]) -> dict:
    """统计每个单词的"富化"覆盖面"""
    stats = {
        "total": len(words),
        "hasSynonyms": 0,    # 有近义词
        "hasExtension": 0,   # 有派生词(reason=拓展)
        "hasAntonym": 0,     # 有反义词(reason=反义)
        "hasSimilar": 0,     # 有形近词(reason=形近)
        "hasPhrases": 0,     # 有短语
        "hasMnemonics": 0,   # 有助记
        "hasRootAffix": 0,   # 有词根词缀
        "bareWords": [],     # 什么富化都没有的
    }

    for word in words:
        w = word.get("word", "")
        synonyms = word.get("synonyms", [])
        similar = word.get("similarWords", [])
        antonyms = word.get("antonyms", [])
        phrase_count = word.get("phraseCount", 0)
        has_mnemonics = word.get("hasMnemonics", False)
        has_ra = word.get("hasRootAffix", False)

        has_syn = len(synonyms) > 0
        has_ext = any(s.get("reason", "") in ("\\u62d3\\u5c55", "拓展") for s in similar)
        has_ant = len(antonyms) > 0
        has_sim = any(s.get("reason", "") in ("\\u5f62\\u8fd1", "形近") for s in similar)
        has_phr = phrase_count > 0

        if has_syn: stats["hasSynonyms"] += 1
        if has_ext: stats["hasExtension"] += 1
        if has_ant: stats["hasAntonym"] += 1
        if has_sim: stats["hasSimilar"] += 1
        if has_phr: stats["hasPhrases"] += 1
        if has_mnemonics: stats["hasMnemonics"] += 1
        if has_ra: stats["hasRootAffix"] += 1

        if not (has_syn or has_ext or has_ant or has_sim or has_phr or has_mnemonics or has_ra):
            stats["bareWords"].append(w)

    return stats


def audit(words: list[dict]) -> list[str]:
    issues = []

    for word in words:
        w = word.get("word", "")
        pos = word.get("partOfSpeech", "")
        inflections = word.get("inflections", {})
        synonyms = word.get("synonyms", [])
        similar = word.get("similarWords", [])

        # 1. 不可数名词有复数
        wl = w.lower()
        if wl in UNCOUNTABLE_NOUNS and "plural" in inflections:
            tag = "建议删除" if wl in STRICT_UNCOUNTABLE else "需人工判断"
            issues.append(f"[复数不当][{tag}] {w} ({pos}) 有复数 '{inflections['plural']}'")

        # 2. 专有名词有复数 / 比较级
        if w.lower() in PROPER_NOUNS:
            if "plural" in inflections:
                issues.append(f"[复数不当] {w} ({pos}) 专有名词不应有复数 '{inflections['plural']}'")
            if "comparative" in inflections or "superlative" in inflections:
                issues.append(f"[比较级不当] {w} ({pos}) 专有名词不应有比较级/最高级")

        # 3. 方向词有不必要变形
        if w.lower() in DIRECTION_WORDS:
            if "plural" in inflections:
                issues.append(f"[复数冗余] {w} 方向词复数 '{inflections['plural']}' 极少使用")

        # 4. 情态/助动词有时态
        if w.lower() in MODAL_VERBS:
            for key in ["pastTense", "pastParticiple", "thirdPerson", "presentParticiple"]:
                if key in inflections:
                    issues.append(f"[时态不当] {w} 情态动词不应有 {key}='{inflections[key]}'")

        # 5. 不规则动词过去式错误
        if w.lower() in IRREGULAR_VERBS:
            expected_past, expected_pp = IRREGULAR_VERBS[w.lower()]
            def split_values(v: str) -> set[str]:
                return {s.strip() for s in v.replace("，", "/").replace(", ", "/").split("/")}
            if "pastTense" in inflections:
                actual_set = split_values(inflections["pastTense"])
                expected_set = split_values(expected_past)
                if not actual_set & expected_set:
                    issues.append(f"[动词变形] {w} 过去式 '{inflections['pastTense']}'，预期应为 '{expected_past}'")
            if "pastParticiple" in inflections:
                actual_set = split_values(inflections["pastParticiple"])
                expected_set = split_values(expected_pp)
                if not actual_set & expected_set:
                    issues.append(f"[动词变形] {w} 过去分词 '{inflections['pastParticiple']}'，预期应为 '{expected_pp}'")

        # 6. 同义词 / 形近词空 zh
        for syn in synonyms:
            if not syn.get("zh", "").strip():
                issues.append(f"[空释义] {w} 的近义词 '{syn['word']}' 缺少中文释义")
        for sim in similar:
            if not sim.get("zh", "").strip():
                issues.append(f"[空释义] {w} 的形近词 '{sim['word']}' 缺少中文释义")

        # 7. person 的复数检查
        if w.lower() == "person" and "plural" in inflections:
            if inflections["plural"] != "people":
                issues.append(f"[person复数] person 复数应为 'people'，实际为 '{inflections['plural']}'")

        # 8. 非形容词有比较级/最高级
        if pos and pos.startswith("n") and ("comparative" in inflections or "superlative" in inflections):
            issues.append(f"[比较级不当] {w} ({pos}) 名词不应有比较级/最高级")
        if pos and pos.startswith("v") and ("comparative" in inflections or "superlative" in inflections):
            issues.append(f"[比较级不当] {w} ({pos}) 动词不应有比较级/最高级")

        # 9. 缺少 definition
        if not word.get("definitions") or all(d.get("zh") == "" for d in word["definitions"]):
            issues.append(f"[缺释义] {w} 缺少中文释义")

    return issues


def main():
    print(f"读取词库: {SRC}")
    if not SRC.exists():
        print("文件不存在，检查路径是否正确")
        return

    words = extract_words(SRC)
    if not words:
        print("未能解析出任何单词，请检查脚本")
        return

    print(f"成功解析 {len(words)} 个单词\n")

    issues = audit(words)
    coverage = analyze_coverage(words)
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    report_path = REPORT_DIR / "audit-1000.txt"
    pct = lambda n: f"{n/coverage['total']*100:.1f}%"

    with open(report_path, "w", encoding="utf-8") as f:
        f.write(f"=== 1000词词库审核报告 ===\n")
        f.write(f"总词数: {len(words)}\n\n")

        f.write("--- 富化覆盖率 ---\n")
        f.write(f"  近义词:     {coverage['hasSynonyms']:>4} 词 ({pct(coverage['hasSynonyms'])})\n")
        f.write(f"  派生词:     {coverage['hasExtension']:>4} 词 ({pct(coverage['hasExtension'])})\n")
        f.write(f"  反义词:     {coverage['hasAntonym']:>4} 词 ({pct(coverage['hasAntonym'])})\n")
        f.write(f"  形近词:     {coverage['hasSimilar']:>4} 词 ({pct(coverage['hasSimilar'])})\n")
        f.write(f"  短语:       {coverage['hasPhrases']:>4} 词 ({pct(coverage['hasPhrases'])})\n")
        f.write(f"  助记:       {coverage['hasMnemonics']:>4} 词 ({pct(coverage['hasMnemonics'])})\n")
        f.write(f"  词根词缀:   {coverage['hasRootAffix']:>4} 词 ({pct(coverage['hasRootAffix'])})\n")

        bare = coverage["bareWords"]
        if bare:
            f.write(f"\n  完全无富化 ({(len(bare))} 个):\n")
            for w in bare:
                f.write(f"    {w}\n")

        f.write(f"\n--- 数据问题 ({len(issues)} 个) ---\n")
        categories = {}
        for issue in issues:
            cat = issue.split("]")[0] + "]" if "]" in issue else "其他"
            categories.setdefault(cat, []).append(issue)
        for cat, items in sorted(categories.items()):
            f.write(f"\n{cat} ({len(items)} 处)\n")
            for item in items:
                f.write(f"  {item}\n")

    print(f"审核完成。报告已写入: {report_path}")
    print(f"\n富化覆盖率:")
    print(f"  近义词:   {coverage['hasSynonyms']:>4}/{coverage['total']} ({pct(coverage['hasSynonyms'])})")
    print(f"  派生词:   {coverage['hasExtension']:>4}/{coverage['total']} ({pct(coverage['hasExtension'])})")
    print(f"  反义词:   {coverage['hasAntonym']:>4}/{coverage['total']} ({pct(coverage['hasAntonym'])})")
    print(f"  形近词:   {coverage['hasSimilar']:>4}/{coverage['total']} ({pct(coverage['hasSimilar'])})")
    print(f"  短语:     {coverage['hasPhrases']:>4}/{coverage['total']} ({pct(coverage['hasPhrases'])})")
    print(f"  助记:     {coverage['hasMnemonics']:>4}/{coverage['total']} ({pct(coverage['hasMnemonics'])})")
    print(f"  词根词缀: {coverage['hasRootAffix']:>4}/{coverage['total']} ({pct(coverage['hasRootAffix'])})")
    print(f"\n  完全无富化: {len(bare)} 个")
    if bare:
        print(f"  示例: {', '.join(bare[:10])}{'...' if len(bare) > 10 else ''}")
    print(f"\n数据问题: {len(issues)} 个")


if __name__ == "__main__":
    main()
