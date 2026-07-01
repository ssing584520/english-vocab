import type { Word } from "./types"

// ===== 五上英语 (Grade 5) =====

export const grade4Words: Word[] = [
  {
    id: "go_jogging",
    word: "go jogging",
    syllables: ["go jogging"],
    partOfSpeech: "phr v",
    definitions: [{ en: "run slowly for health", zh: "去慢跑" }],
    examples: [{ sentence: "I go jogging every morning." }],
  },
  {
    id: "go_fishing",
    word: "go fishing",
    syllables: ["go fishing"],
    partOfSpeech: "phr v",
    definitions: [{ en: "go to catch fish for fun", zh: "去钓鱼" }],
    examples: [{ sentence: "My dad goes fishing on weekends." }],
  },
  {
    id: "do_chores",
    word: "do chores",
    syllables: ["do chores"],
    partOfSpeech: "phr v",
    definitions: [{ en: "do housework at home", zh: "做家务" }],
    examples: [{ sentence: "I help mom do chores after school." }],
    synonyms: [{"word": "do housework", "zh": "做家务"}],
  },
  {
    id: "watch_tv",
    word: "watch TV",
    syllables: ["watch tv"],
    partOfSpeech: "phr v",
    definitions: [{ en: "watch TV shows", zh: "看电视" }],
    examples: [{ sentence: "I watch TV after homework." }],
  },
  {
    id: "play_with_friends",
    word: "play with friends",
    syllables: ["play with friends"],
    partOfSpeech: "phr v",
    definitions: [{ en: "play games with friends", zh: "和朋友一起玩" }],
    examples: [{ sentence: "I play with friends in the park." }],
  },
  {
    id: "have_a_picnic",
    word: "have a picnic",
    syllables: ["have a picnic"],
    partOfSpeech: "phr v",
    definitions: [{ en: "eat a meal outside", zh: "野餐" }],
    examples: [{ sentence: "We have a picnic in the park." }],
  },
  {
    id: "busy",
    word: "busy",
    syllables: ["busy"],
    partOfSpeech: "adj",
    definitions: [{ en: "have many things to do, not free", zh: "忙碌的" }],
    examples: [{ sentence: "I am busy with homework." }],
    inflections: {
      comparative: "busier",
      superlative: "busiest"
    },
    phrases: [
      { phrase: "busy with", meaning: "忙于" },
      { phrase: "busy day", meaning: "忙碌的一天" }
    ],
    synonyms: [{"word": "active", "zh": "积极的；活跃的"}, {"word": "occupied", "zh": "忙碌的；被占用的"}],
    similarWords: [{"word": "buy", "reason": "形近", "zh": "买，购买"}, {"word": "business", "reason": "拓展", "zh": "生意；商业；事务"}],
  },
  {
    id: "weekend",
    word: "weekend",
    syllables: ["week", "end"],
    partOfSpeech: "n",
    definitions: [{ en: "time from Saturday to Sunday", zh: "周末" }],
    examples: [{ sentence: "We go to the cinema on weekends." }],
    inflections: {
      plural: "weekends"
    },
    phrases: [
      { phrase: "on weekends", meaning: "在周末" },
      { phrase: "at the weekend", meaning: "在周末" }
    ],
    similarWords: [{"word": "intend", "reason": "形近", "zh": "打算；计划"}, {"word": "friend", "reason": "形近", "zh": "朋友"}, {"word": "attend", "reason": "形近", "zh": "参加；出席"}, {"word": "week", "reason": "拓展", "zh": "周"}, {"word": "end", "reason": "拓展", "zh": "结束，末尾"}],
    mnemonics: "分音节记忆：week · end",
  },
  {
    id: "plan",
    word: "plan",
    syllables: ["plan"],
    partOfSpeech: "n/v",
    definitions: [{ en: "things you want to do later", zh: "计划" }],
    examples: [{ sentence: "We plan to visit the museum." }],
    inflections: {
      plural: "plans",
      pastTense: "planned",
      pastParticiple: "planned",
      thirdPerson: "plans",
      presentParticiple: "planning"
    },
    phrases: [
      { phrase: "plan to do", meaning: "计划做" },
      { phrase: "make a plan", meaning: "制定计划" }
    ],
    rootAffix: { explanation: "plan平面/计划 = 计划" },
    similarWords: [{"word": "play", "reason": "形近", "zh": "玩，玩耍，播放"}, {"word": "plant", "reason": "形近", "zh": "植物"}],
    mnemonics: "词根记忆：plan平面/计划 = 计划",
  },
  {
    id: "early",
    word: "early",
    syllables: ["ear", "ly"],
    partOfSpeech: "adv/adj",
    definitions: [{ en: "before the usual time", zh: "早的/早地" }],
    examples: [{ sentence: "I get up early every day." }],
    phrases: [
      { phrase: "early in the morning", meaning: "清晨" },
      { phrase: "early bird", meaning: "早起的人" }
    ],
    mnemonics: "分音节记忆：ear · ly",
  },
  {
    id: "catch",
    word: "catch",
    syllables: ["catch"],
    partOfSpeech: "v",
    definitions: [{ en: "take something with your hands", zh: "抓住" }],
    examples: [{ sentence: "I catch the ball with my hands." }],
    inflections: {
      pastTense: "caught",
      pastParticiple: "caught",
      thirdPerson: "catches",
      presentParticiple: "catching"
    },
    phrases: [
      { phrase: "catch up", meaning: "赶上" },
      { phrase: "catch a cold", meaning: "感冒" },
      { phrase: "catch fire", meaning: "着火" }
    ],
    synonyms: [{"word": "capture", "zh": "捕获；夺取"}, {"word": "seize", "zh": "抓住；夺取"}, {"word": "grasp", "zh": "抓住；掌握"}],
    similarWords: [{"word": "watch", "reason": "形近", "zh": "看，观看"}, {"word": "match", "reason": "形近", "zh": "比赛；匹配；火柴"}],
  },
  {
    id: "any",
    word: "any",
    syllables: ["any"],
    partOfSpeech: "adj/pron",
    definitions: [{ en: "one of some things", zh: "任何" }],
    examples: [{ sentence: "Do you have any apples?" }],
    inflections: {
    },
    phrases: [
      { phrase: "any more", meaning: "再" },
      { phrase: "any time", meaning: "任何时候" },
      { phrase: "any one", meaning: "任何一个" }
    ],
    similarWords: [{"word": "anything", "reason": "拓展", "zh": "任何事物"}, {"word": "anyone", "reason": "拓展", "zh": "任何人"}, {"word": "anywhere", "reason": "拓展", "zh": "任何地方"}, {"word": "anybody", "reason": "拓展", "zh": "任何人"}],
  },
  {
    id: "robot",
    word: "robot",
    syllables: ["ro", "bot"],
    partOfSpeech: "n",
    definitions: [{ en: "a machine that can do jobs", zh: "机器人" }],
    examples: [{ sentence: "I have a toy robot." }],
    inflections: {
      plural: "robots"
    },
    phrases: [
      { phrase: "robot toy", meaning: "机器人玩具" }
    ],
    similarWords: [{"word": "root", "reason": "形近", "zh": "根；根源"}],
    mnemonics: "分音节记忆：ro · bot",
  },
  {
    id: "sock",
    word: "sock",
    syllables: ["sock"],
    partOfSpeech: "n",
    definitions: [{ en: "a thing you wear on your foot", zh: "袜子" }],
    examples: [{ sentence: "My sock is white." }],
    inflections: {
      plural: "socks"
    },
    phrases: [
      { phrase: "a pair of socks", meaning: "一双袜子" }
    ],
    rootAffix: { explanation: "sock袜子 = 袜子" },
    similarWords: [{"word": "knock", "reason": "形近", "zh": "敲；打"}, {"word": "rock", "reason": "形近", "zh": "岩石"}, {"word": "block", "reason": "形近", "zh": "块；街区；阻挡"}],
    mnemonics: "词根记忆：sock袜子 = 袜子",
  },
  {
    id: "sweep",
    word: "sweep",
    syllables: ["sweep"],
    partOfSpeech: "v",
    definitions: [{ en: "clean the floor with a broom", zh: "打扫;清扫" }],
    examples: [{ sentence: "I sweep the floor every day." }],
    inflections: {
      pastTense: "sweeped",
      pastParticiple: "sweeped",
      thirdPerson: "sweeps",
      presentParticiple: "sweeping"
    },
    phrases: [
      { phrase: "sweep the floor", meaning: "扫地" }
    ],
    similarWords: [{"word": "sleep", "reason": "形近", "zh": "睡觉，睡眠"}, {"word": "keep", "reason": "形近", "zh": "保持，继续"}, {"word": "deep", "reason": "形近", "zh": "深的"}],
  },
  {
    id: "warm_up",
    word: "warm up",
    syllables: ["warm up"],
    partOfSpeech: "phr v",
    definitions: [{ en: "get your body ready for exercise", zh: "热身" }],
    examples: [{ sentence: "We warm up before PE class." }],
  },
  {
    id: "morethan",
    word: "more...than",
    syllables: ["more...than"],
    partOfSpeech: "phr",
    definitions: [{ en: "bigger or better than something else", zh: "比……更……" }],
    examples: [{ sentence: "I am taller than my sister." }],
    similarWords: [{"word": "less...than", "reason": "反义", "zh": "比……更少"}],
  },
  {
    id: "do_exercise",
    word: "do exercise",
    syllables: ["do exercise"],
    partOfSpeech: "phr v",
    definitions: [{ en: "move your body to keep healthy", zh: "做运动" }],
    examples: [{ sentence: "I do exercise every day." }],
  },
  {
    id: "eat_healthy_food",
    word: "eat healthy food",
    syllables: ["eat healthy food"],
    partOfSpeech: "phr v",
    definitions: [{ en: "eat food that is good for you", zh: "吃健康的食物" }],
    examples: [{ sentence: "We should eat healthy food." }],
  },
  {
    id: "drink_a_lot_of_water",
    word: "drink a lot of water",
    syllables: ["drink a lot of water"],
    partOfSpeech: "phr v",
    definitions: [{ en: "drink much water", zh: "多喝水" }],
    examples: [{ sentence: "I drink a lot of water every day." }],
  },
  {
    id: "get_enough_sleep",
    word: "get enough sleep",
    syllables: ["get enough sleep"],
    partOfSpeech: "phr v",
    definitions: [{ en: "sleep for a long enough time", zh: "保证充足的睡眠" }],
    examples: [{ sentence: "I get enough sleep every night." }],
  },
  {
    id: "strong",
    word: "strong",
    syllables: ["strong"],
    partOfSpeech: "adj",
    definitions: [{ en: "can lift heavy things easily", zh: "强壮的" }],
    examples: [{ sentence: "My dad is very strong." }],
    phrases: [
      { phrase: "strong wind", meaning: "强风" },
      { phrase: "strong feeling", meaning: "强烈感情" }
    ],
    rootAffix: { explanation: "strong强 = 强壮的" },
    synonyms: [{"word": "powerful", "zh": "强大的；有力的"}, {"word": "mighty", "zh": "强大的；巨大的"}],
    similarWords: [{"word": "strength", "reason": "拓展", "zh": "力量；力气"}, {"word": "strongly", "reason": "拓展", "zh": "强烈地；强壮地"}, {"word": "wrong", "reason": "形近", "zh": "错误的，不对的"}, {"word": "string", "reason": "形近", "zh": "线；绳子；弦"}],
    mnemonics: "词根记忆：strong强 = 强壮的",
  },
  {
    id: "poster",
    word: "poster",
    syllables: ["poster"],
    partOfSpeech: "n",
    definitions: [{ en: "a big picture on the wall", zh: "海报" }],
    examples: [{ sentence: "I have a cartoon poster." }],
    inflections: {
      plural: "posters"
    },
    phrases: [
      { phrase: "make a poster", meaning: "制作海报" }
    ],
    rootAffix: { explanation: "post贴 + -er = 贴出来的东西→海报" },
    similarWords: [{"word": "master", "reason": "形近", "zh": "主人；大师；掌握"}, {"word": "water", "reason": "形近", "zh": "水"}, {"word": "matter", "reason": "形近", "zh": "事情"}, {"word": "post", "reason": "拓展", "zh": "邮寄"}],
    mnemonics: "词根记忆：post贴 + -er = 贴出来的东西→海报",
  },
  {
    id: "about",
    word: "about",
    syllables: ["about"],
    partOfSpeech: "prep",
    definitions: [{ en: "talk or write something", zh: "关于" }],
    examples: [{ sentence: "We are talking about the film." }],
    phrases: [
      { phrase: "talk about", meaning: "谈论" },
      { phrase: "think about", meaning: "考虑" }
    ],
    similarWords: [{"word": "shout", "reason": "形近", "zh": "喊叫；大声说"}],
  },
  {
    id: "habit",
    word: "habit",
    syllables: ["habit"],
    partOfSpeech: "n",
    definitions: [{ en: "something you do often", zh: "习惯" }],
    examples: [{ sentence: "Reading is a good habit." }],
    inflections: {
      plural: "habits"
    },
    phrases: [
      { phrase: "good habit", meaning: "好习惯" },
      { phrase: "bad habit", meaning: "坏习惯" },
      { phrase: "in the habit of", meaning: "有...习惯" }
    ],
    similarWords: [{"word": "habitual", "reason": "拓展", "zh": "习惯性的"}, {"word": "habitat", "reason": "拓展", "zh": "栖息地"}],
  },
  {
    id: "junk_food",
    word: "junk food",
    syllables: ["junk food"],
    partOfSpeech: "n",
    definitions: [{ en: "food that is not good for you", zh: "垃圾食品" }],
    examples: [{ sentence: "I don't like junk food." }],
  },
  {
    id: "must",
    word: "must",
    syllables: ["must"],
    partOfSpeech: "modal v",
    definitions: [{ en: "have to do something", zh: "必须" }],
    examples: [{ sentence: "I must finish my homework first." }],
    inflections: {

    },
    phrases: [
      { phrase: "must do", meaning: "必须做" }
    ],
    similarWords: [{"word": "trust", "reason": "形近", "zh": "信任；相信"}],
  },
  {
    id: "less",
    word: "less",
    syllables: ["less"],
    partOfSpeech: "adj/adv",
    definitions: [{ en: "a smaller amount of", zh: "更少的" }],
    examples: [{ sentence: "I eat less candy than before." }],
    similarWords: [{"word": "more", "reason": "反义", "zh": "更多的"}, {"word": "press", "reason": "形近", "zh": "压；按；新闻界"}, {"word": "guess", "reason": "形近", "zh": "猜"}],
  },
  {
    id: "hard",
    word: "hard",
    syllables: ["hard"],
    partOfSpeech: "adj",
    definitions: [{ en: "not easy to do", zh: "难的" }],
    examples: [{ sentence: "This math problem is hard." }],
    inflections: {
      comparative: "harder",
      superlative: "hardest"
    },
    phrases: [
      { phrase: "work hard", meaning: "努力学习" },
      { phrase: "hard to do", meaning: "难做" },
      { phrase: "study hard", meaning: "刻苦学习" }
    ],
    synonyms: [{"word": "difficult", "zh": "困难的"}, {"word": "tough", "zh": "坚韧的；艰难的"}, {"word": "challenging", "zh": "具有挑战性的"}],
    similarWords: [{"word": "easy", "reason": "反义", "zh": "容易的"}, {"word": "board", "reason": "形近", "zh": "板；董事会；上（车船）"}, {"word": "guard", "reason": "形近", "zh": "守卫；警卫"}],
  },
  {
    id: "try",
    word: "try",
    syllables: ["try"],
    partOfSpeech: "v",
    definitions: [{ en: "do something to see if it works", zh: "尝试" }],
    examples: [{ sentence: "Let's try this game." }],
    inflections: {
      pastTense: "tried",
      pastParticiple: "tried",
      thirdPerson: "tries",
      presentParticiple: "trying"
    },
    phrases: [
      { phrase: "try to do", meaning: "努力做" },
      { phrase: "try on", meaning: "试穿" },
      { phrase: "try one's best", meaning: "尽最大努力" }
    ],
    synonyms: [{"word": "attempt", "zh": "尝试；试图"}, {"word": "endeavor", "zh": "努力；尝试"}, {"word": "strive", "zh": "奋斗；努力"}],
    similarWords: [{"word": "dry", "reason": "形近", "zh": "干的；使干燥"}, {"word": "toy", "reason": "形近", "zh": "玩具"}, {"word": "fry", "reason": "形近", "zh": "油炸；煎"}],
  },
  {
    id: "lie",
    word: "lie",
    syllables: ["lie"],
    partOfSpeech: "v",
    definitions: [{ en: "rest on a flat surface", zh: "躺" }],
    examples: [{ sentence: "I lie on the bed to rest." }],
    inflections: {
      pastTense: "lay",
      pastParticiple: "lain",
      thirdPerson: "lies",
      presentParticiple: "lying"
    },
    phrases: [
      { phrase: "lie down", meaning: "躺下" },
      { phrase: "lie in", meaning: "在于" }
    ],
    similarWords: [{"word": "tie", "reason": "形近", "zh": "系"}, {"word": "die", "reason": "形近", "zh": "死"}, {"word": "like", "reason": "形近", "zh": "喜欢，像"}],
  },
  {
    id: "ill",
    word: "ill",
    syllables: ["ill"],
    partOfSpeech: "adj",
    definitions: [{ en: "not feeling well, sick", zh: "生病的" }],
    examples: [{ sentence: "My mom is ill today." }],
    inflections: {
    },
    phrases: [
      { phrase: "fall ill", meaning: "生病" },
      { phrase: "feel ill", meaning: "感觉不舒服" }
    ],
    synonyms: [{"word": "sick", "zh": "生病的"}],
    similarWords: [{"word": "healthy", "reason": "反义", "zh": "健康的"}, {"word": "hill", "reason": "形近", "zh": "小山"}, {"word": "will", "reason": "形近", "zh": "将；将要"}, {"word": "kill", "reason": "形近", "zh": "杀；杀死"}],
  },
  {
    id: "a_glass_of",
    word: "a glass of",
    syllables: ["a glass of"],
    partOfSpeech: "phr",
    definitions: [{ en: "one cup of something to drink", zh: "一杯" }],
    examples: [{ sentence: "I want a glass of milk." }],
    similarWords: [{"word": "a cup of", "reason": "拓展", "zh": "一杯"}, {"word": "a bottle of", "reason": "拓展", "zh": "一瓶"}],
  },
  {
    id: "me_too",
    word: "Me too.",
    syllables: ["me too."],
    partOfSpeech: "sent",
    definitions: [{ en: "I am the same.", zh: "我也是。" }],
    examples: [{ sentence: "A: I like apples. B: Me too." }],
    similarWords: [{"word": "So do I.", "reason": "拓展", "zh": "我也是。"}, {"word": "Same here.", "reason": "拓展", "zh": "我也是。"}],
  },
  {
    id: "north",
    word: "north",
    syllables: ["north"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction on the left of a map", zh: "北方" }],
    examples: [{ sentence: "The north is cold in winter." }],
    phrases: [
      { phrase: "north wind", meaning: "北风" },
      { phrase: "in the north", meaning: "在北方" }
    ],
    similarWords: [{"word": "east", "reason": "拓展", "zh": "东方"}, {"word": "south", "reason": "拓展", "zh": "南方"}, {"word": "west", "reason": "拓展", "zh": "西方"}, {"word": "northern", "reason": "拓展", "zh": "北方的"}, {"word": "worth", "reason": "形近", "zh": "值得的；价值"}, {"word": "birth", "reason": "形近", "zh": "出生"}, {"word": "earth", "reason": "形近", "zh": "地球"}],
  },
  {
    id: "south",
    word: "south",
    syllables: ["south"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction on the right of a map", zh: "南方" }],
    examples: [{ sentence: "The south is warm in winter." }],
    phrases: [
      { phrase: "south wind", meaning: "南风" },
      { phrase: "in the south", meaning: "在南方" }
    ],
    similarWords: [{"word": "east", "reason": "拓展", "zh": "东方"}, {"word": "north", "reason": "拓展", "zh": "北方"}, {"word": "west", "reason": "拓展", "zh": "西方"}, {"word": "southern", "reason": "拓展", "zh": "南方的"}],
  },
  {
    id: "east",
    word: "east",
    syllables: ["east"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction the sun comes up", zh: "东方" }],
    examples: [{ sentence: "The sun rises in the east." }],
    phrases: [
      { phrase: "east wind", meaning: "东风" },
      { phrase: "in the east", meaning: "在东方" }
    ],
    similarWords: [{"word": "west", "reason": "拓展", "zh": "西方"}, {"word": "south", "reason": "拓展", "zh": "南方"}, {"word": "north", "reason": "拓展", "zh": "北方"}, {"word": "eastern", "reason": "拓展", "zh": "东方的"}, {"word": "last", "reason": "形近", "zh": "最后的"}, {"word": "fast", "reason": "形近", "zh": "快的"}, {"word": "past", "reason": "形近", "zh": "过去"}],
  },
  {
    id: "west",
    word: "west",
    syllables: ["west"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction the sun goes down", zh: "西方" }],
    examples: [{ sentence: "The sun sets in the west." }],
    phrases: [
      { phrase: "west wind", meaning: "西风" },
      { phrase: "in the west", meaning: "在西方" }
    ],
    similarWords: [{"word": "east", "reason": "拓展", "zh": "东方"}, {"word": "north", "reason": "拓展", "zh": "北方"}, {"word": "south", "reason": "拓展", "zh": "南方"}, {"word": "western", "reason": "拓展", "zh": "西方的"}, {"word": "rest", "reason": "形近", "zh": "休息，剩余"}, {"word": "best", "reason": "形近", "zh": "最好的"}, {"word": "test", "reason": "形近", "zh": "测试"}],
  },
  {
    id: "capital",
    word: "capital",
    syllables: ["cap", "i", "tal"],
    partOfSpeech: "n",
    definitions: [{ en: "the most important city of a country", zh: "首都" }],
    examples: [{ sentence: "Beijing is the capital of China." }],
    inflections: {
      plural: "capitals"
    },
    phrases: [
      { phrase: "capital city", meaning: "首都城市" },
      { phrase: "capital of China", meaning: "中国首都" }
    ],
    similarWords: [{"word": "captain", "reason": "形近", "zh": "队长；船长"}, {"word": "hospital", "reason": "形近", "zh": "医院"}],
    mnemonics: "分音节记忆：cap · i · tal",
  },
  {
    id: "museum",
    word: "museum",
    syllables: ["mu", "se", "um"],
    partOfSpeech: "n",
    definitions: [{ en: "a place where old things are kept", zh: "博物馆" }],
    examples: [{ sentence: "We visit the museum every year." }],
    inflections: {
      plural: "museums"
    },
    rootAffix: { explanation: "muse缪斯 + -um = 缪斯女神的地方→博物馆" },
    mnemonics: "词根记忆：muse缪斯 + -um = 缪斯女神的地方→博物馆",
  },
  {
    id: "palace",
    word: "palace",
    syllables: ["palace"],
    partOfSpeech: "n",
    definitions: [{ en: "a big house where kings or queens live", zh: "王宫；宫殿" }],
    examples: [{ sentence: "The king lives in the palace." }],
    inflections: {
      plural: "palaces"
    },
    similarWords: [{"word": "place", "reason": "形近", "zh": "地方；地点"}, {"word": "peace", "reason": "形近", "zh": "和平；平静"}, {"word": "space", "reason": "形近", "zh": "空间；太空"}],
  },
  {
    id: "tourist",
    word: "tourist",
    syllables: ["tourist"],
    partOfSpeech: "n",
    definitions: [{ en: "a person who visits a new place for fun", zh: "游客" }],
    examples: [{ sentence: "There are many tourists in the park." }],
    inflections: {
      plural: "tourists"
    },
    rootAffix: { explanation: "tour旅行 + -ist人 = 旅行的人→游客" },
    similarWords: [{"word": "tour", "reason": "拓展", "zh": "旅游；参观"}],
    mnemonics: "词根记忆：tour旅行 + -ist人 = 旅行的人→游客",
  },
  {
    id: "visit",
    word: "visit",
    syllables: ["vis", "it"],
    partOfSpeech: "v/n",
    definitions: [{ en: "go to see a person or place", zh: "参观；拜访" }],
    examples: [{ sentence: "We visit our grandparents every week." }],
    inflections: {
      pastTense: "visited",
      pastParticiple: "visited",
      thirdPerson: "visits",
      presentParticiple: "visiting"
    },
    similarWords: [{"word": "visitor", "reason": "拓展", "zh": "游客；访问者"}, {"word": "visible", "reason": "拓展", "zh": "可见的"}],
    phrases: [
      { phrase: "visit a place", meaning: "参观某地" },
      { phrase: "visit relatives", meaning: "探亲" }
    ],
    rootAffix: { explanation: "vis看 + -it去 = 去看→参观" },
    mnemonics: "词根记忆：vis看 + -it去 = 去看→参观",
  },
  {
    id: "northwest",
    word: "northwest",
    syllables: ["north", "west"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction between north and west", zh: "西北" }],
    examples: [{ sentence: "Xinjiang is in the northwest of China." }],
    inflections: {
    },
    similarWords: [{"word": "northeast", "reason": "拓展", "zh": "东北"}, {"word": "southeast", "reason": "拓展", "zh": "东南"}, {"word": "southwest", "reason": "拓展", "zh": "西南"}, {"word": "northwestern", "reason": "拓展", "zh": "西北的"}, {"word": "north", "reason": "拓展", "zh": "北方"}, {"word": "west", "reason": "拓展", "zh": "西方"}],
    mnemonics: "分音节记忆：north · west",
  },
  {
    id: "across",
    word: "across",
    syllables: ["across"],
    partOfSpeech: "prep/adv",
    definitions: [{ en: "go from one side to the other side", zh: "穿过" }],
    examples: [{ sentence: "We walk across the street." }],
    phrases: [
      { phrase: "come across", meaning: "偶然遇到" },
      { phrase: "walk across", meaning: "走过" }
    ],
    similarWords: [{"word": "cross", "reason": "形近", "zh": "穿过；十字架；生气的"}],
  },
  {
    id: "fish_and_chips",
    word: "fish and chips",
    syllables: ["fish and chips"],
    partOfSpeech: "n",
    definitions: [{ en: "a kind of food with fish and fried potatoes", zh: "炸鱼条" }],
    examples: [{ sentence: "I want to eat fish and chips." }],
  },
  {
    id: "popular",
    word: "popular",
    syllables: ["pop", "u", "lar"],
    partOfSpeech: "adj",
    definitions: [{ en: "many people like it", zh: "流行的；受欢迎的" }],
    examples: [{ sentence: "This game is very popular." }],
    phrases: [
      { phrase: "popular with", meaning: "受...欢迎" },
      { phrase: "very popular", meaning: "很流行" }
    ],
    synonyms: [{"word": "well-liked", "zh": "受欢迎的"}, {"word": "fashionable", "zh": "流行的"}],
    rootAffix: { explanation: "popul人民 + -ar = 人民的→受欢迎的" },
    similarWords: [{"word": "similar", "reason": "形近", "zh": "相似的；类似的"}],
    mnemonics: "词根记忆：popul人民 + -ar = 人民的→受欢迎的",
  },
  {
    id: "wine",
    word: "wine",
    syllables: ["wine"],
    partOfSpeech: "n",
    definitions: [{ en: "a kind of drink made from grapes", zh: "葡萄酒" }],
    examples: [{ sentence: "My dad doesn't drink wine." }],
    inflections: {
      plural: "wines"
    },
    phrases: [
      { phrase: "red wine", meaning: "红葡萄酒" },
      { phrase: "white wine", meaning: "白葡萄酒" }
    ],
    similarWords: [{"word": "fine", "reason": "形近", "zh": "好的，健康的"}, {"word": "shine", "reason": "形近", "zh": "发光；闪耀"}, {"word": "line", "reason": "形近", "zh": "线"}],
  },
  {
    id: "on_foot",
    word: "on foot",
    syllables: ["on foot"],
    partOfSpeech: "phr",
    definitions: [{ en: "walk to a place", zh: "步行" }],
    examples: [{ sentence: "I go to school on foot." }],
    synonyms: [{"word": "walk", "zh": "步行；走路"}],
  },
  {
    id: "mountain",
    word: "mountain",
    syllables: ["moun", "tain"],
    partOfSpeech: "n",
    definitions: [{ en: "a very big hill", zh: "山" }],
    examples: [{ sentence: "We climb the mountain on Sunday." }],
    inflections: {
      plural: "mountains"
    },
    phrases: [
      { phrase: "in the mountains", meaning: "在山里" },
      { phrase: "mountain climbing", meaning: "爬山" }
    ],
    rootAffix: { explanation: "mount山 + -ain = 山" },
    synonyms: [{"word": "hill", "zh": "小山"}, {"word": "peak", "zh": "山峰"}],
    similarWords: [{"word": "captain", "reason": "形近", "zh": "队长；船长；机长"}, {"word": "certain", "reason": "形近", "zh": "确定的；某个"}, {"word": "explain", "reason": "形近", "zh": "解释；说明"}],
    mnemonics: "词根记忆：mount山 + -ain = 山",
  },
  {
    id: "cave",
    word: "cave",
    syllables: ["cave"],
    partOfSpeech: "n",
    definitions: [{ en: "a hole in the hill or mountain", zh: "洞穴" }],
    examples: [{ sentence: "We see a big cave in the hill." }],
    inflections: {
      plural: "caves"
    },
    similarWords: [{"word": "hive", "reason": "形近", "zh": "蜂巢"}, {"word": "save", "reason": "形近", "zh": "节省；拯救"}, {"word": "brave", "reason": "形近", "zh": "勇敢的；无畏的"}, {"word": "leave", "reason": "形近", "zh": "离开；出发"}],
  },
  {
    id: "waterfall",
    word: "waterfall",
    syllables: ["wa", "ter", "fall"],
    partOfSpeech: "n",
    definitions: [{ en: "water that falls down from a high place", zh: "瀑布" }],
    examples: [{ sentence: "The waterfall is very beautiful." }],
    inflections: {
      plural: "waterfalls"
    },
    rootAffix: { explanation: "water水 + fall落 = 水落下→瀑布" },
    similarWords: [{"word": "baseball", "reason": "形近", "zh": "棒球"}, {"word": "basketball", "reason": "形近", "zh": "篮球"}, {"word": "water", "reason": "拓展", "zh": "水"}, {"word": "fall", "reason": "拓展", "zh": "落下，跌倒，秋天"}],
    mnemonics: "词根记忆：water水 + fall落 = 水落下→瀑布",
  },
  {
    id: "hotel",
    word: "hotel",
    syllables: ["ho", "tel"],
    partOfSpeech: "n",
    definitions: [{ en: "a place where you can stay when you travel", zh: "酒店" }],
    examples: [{ sentence: "We stay in a hotel when we travel." }],
    inflections: {
      plural: "hotels"
    },
    similarWords: [{"word": "motel", "reason": "形近", "zh": "汽车旅馆"}, {"word": "hostel", "reason": "形近", "zh": "青年旅舍"}],
    rootAffix: { explanation: "host客人 + -el = 招待客人的地方→酒店" },
    mnemonics: "词根记忆：host客人 + -el = 招待客人的地方→酒店",
  },
  {
    id: "holiday",
    word: "holiday",
    syllables: ["hol", "i", "day"],
    partOfSpeech: "n",
    definitions: [{ en: "time when you do not go to work or school", zh: "假期" }],
    examples: [{ sentence: "We have a happy holiday." }],
    inflections: {
      plural: "holidays"
    },
    phrases: [
      { phrase: "summer holiday", meaning: "暑假" },
      { phrase: "winter holiday", meaning: "寒假" }
    ],
    rootAffix: { explanation: "holy神圣 + day日子 = 神圣的日子→假日" },
    similarWords: [{"word": "holy", "reason": "拓展", "zh": "神圣的"}, {"word": "day", "reason": "拓展", "zh": "天，日，白天"}],
    mnemonics: "词根记忆：holy神圣 + day日子 = 神圣的日子→假日",
  },
  {
    id: "will",
    word: "will",
    syllables: ["will"],
    partOfSpeech: "modal v",
    definitions: [{ en: "something that is going to happen", zh: "将；将要" }],
    examples: [{ sentence: "I will go to the park tomorrow." }],
    inflections: {
      pastTense: "would"
    },
    phrases: [
      { phrase: "will be", meaning: "将会是" },
      { phrase: "will do", meaning: "愿意做；将做" }
    ],
    similarWords: [{"word": "ill", "reason": "形近", "zh": "生病的"}, {"word": "hill", "reason": "形近", "zh": "小山"}, {"word": "kill", "reason": "形近", "zh": "杀；杀死"}],
  },
  {
    id: "soon",
    word: "soon",
    syllables: ["soon"],
    partOfSpeech: "adv",
    definitions: [{ en: "in a short time from now", zh: "很快；马上" }],
    examples: [{ sentence: "I will finish my homework soon." }],
    phrases: [
      { phrase: "as soon as", meaning: "一……就……" },
      { phrase: "see you soon", meaning: "一会儿见" }
    ],
    similarWords: [{"word": "noon", "reason": "形近", "zh": "中午；正午"}, {"word": "moon", "reason": "形近", "zh": "月亮"}, {"word": "spoon", "reason": "形近", "zh": "勺子"}],
  },
  {
    id: "shall",
    word: "shall",
    syllables: ["shall"],
    partOfSpeech: "modal v",
    definitions: [{ en: "used to talk about something that will happen", zh: "(表示将来的可能性)将" }],
    examples: [{ sentence: "Shall we go to the zoo?" }],
    inflections: {
      pastTense: "should"
    },
    phrases: [
      { phrase: "shall we", meaning: "我们……好吗？" },
      { phrase: "shall I", meaning: "我……好吗？" }
    ],
    similarWords: [{"word": "hall", "reason": "形近", "zh": "大厅；走廊"}, {"word": "wall", "reason": "形近", "zh": "墙"}, {"word": "ball", "reason": "形近", "zh": "球"}],
  },
  {
    id: "high-speed_train",
    word: "high-speed train",
    syllables: ["high-speed train"],
    partOfSpeech: "n",
    definitions: [{ en: "a very fast train", zh: "高铁" }],
    examples: [{ sentence: "We take the high-speed train to Beijing." }],
    similarWords: [{"word": "high", "reason": "拓展", "zh": "高的，高的"}],
  },
  {
    id: "explore",
    word: "explore",
    syllables: ["ex", "plore"],
    partOfSpeech: "v",
    definitions: [{ en: "go to a new place to learn about it", zh: "探索" }],
    examples: [{ sentence: "We explore the new park." }],
    inflections: {
      pastTense: "explored",
      pastParticiple: "explored",
      thirdPerson: "explores",
      presentParticiple: "exploring"
    },
    similarWords: [{"word": "explorer", "reason": "拓展", "zh": "探索者；探险家"}, {"word": "exploration", "reason": "拓展", "zh": "探索；探险"}],
    rootAffix: { explanation: "ex-出 + plor喊 + -e = 喊出来→探索" },
    mnemonics: "词根记忆：ex-出 + plor喊 + -e = 喊出来→探索",
  },
  {
    id: "pagoda",
    word: "pagoda",
    syllables: ["pago", "da"],
    partOfSpeech: "n",
    definitions: [{ en: "a tall tower, usually in Asian countries", zh: "塔" }],
    examples: [{ sentence: "There is a pagoda on the hill." }],
    inflections: {
      plural: "pagodas"
    },
    similarWords: [{"word": "pagan", "reason": "形近", "zh": "异教徒的"}],
    mnemonics: "分音节记忆：pago · da",
  },
  {
    id: "stay",
    word: "stay",
    syllables: ["stay"],
    partOfSpeech: "v",
    definitions: [{ en: "live in a place for a short time", zh: "待；暂住" }],
    examples: [{ sentence: "We stay at home on rainy days." }],
    inflections: {
      pastTense: "stayed",
      pastParticiple: "stayed",
      thirdPerson: "stays",
      presentParticiple: "staying"
    },
    phrases: [
      { phrase: "stay at home", meaning: "待在家" },
      { phrase: "stay up", meaning: "熬夜" },
      { phrase: "stay with", meaning: "和...待在一起" }
    ],
    similarWords: [{"word": "star", "reason": "形近", "zh": "星星，明星"}, {"word": "say", "reason": "形近", "zh": "说，讲"}],
  },
  {
    id: "cave_house",
    word: "cave house",
    syllables: ["cave house"],
    partOfSpeech: "n",
    definitions: [{ en: "a house made in a cave", zh: "窑洞" }],
    examples: [{ sentence: "We see a cave house in the village." }],
  },
  {
    id: "famous",
    word: "famous",
    syllables: ["fa", "mous"],
    partOfSpeech: "adj",
    definitions: [{ en: "many people know it", zh: "著名的" }],
    examples: [{ sentence: "This is a famous book." }],
    phrases: [
      { phrase: "famous for", meaning: "以...闻名" }
    ],
    rootAffix: { explanation: "fam名声 + -ous充满 = 充满名声的→著名的" },
    similarWords: [{"word": "serious", "reason": "形近", "zh": "严重的；认真的"}, {"word": "curious", "reason": "形近", "zh": "好奇的"}, {"word": "various", "reason": "形近", "zh": "各种各样的"}],
    mnemonics: "词根记忆：fam名声 + -ous充满 = 充满名声的→著名的",
  },
  {
    id: "deep-fried_cake",
    word: "deep-fried cake",
    syllables: ["deep-fried cake"],
    partOfSpeech: "n",
    definitions: [{ en: "a kind of fried cake", zh: "油炸糕" }],
    examples: [{ sentence: "I like eating deep-fried cake." }],
    similarWords: [{"word": "deep", "reason": "拓展", "zh": "深的"}],
  },
  {
    id: "wonderful",
    word: "wonderful",
    syllables: ["won", "der", "ful"],
    partOfSpeech: "adj",
    definitions: [{ en: "very good, amazing", zh: "令人惊奇的；令人赞叹的" }],
    examples: [{ sentence: "We have a wonderful time." }],
    phrases: [
      { phrase: "wonderful time", meaning: "美好时光" },
      { phrase: "wonderful day", meaning: "美好的一天" }
    ],
    rootAffix: { explanation: "wonder惊奇 + -ful充满 = 充满惊奇的" },
    synonyms: [{"word": "amazing", "zh": "惊人的；极好的"}, {"word": "fantastic", "zh": "极好的；梦幻的"}, {"word": "marvelous", "zh": "不可思议的；极好的"}],
    similarWords: [{"word": "beautiful", "reason": "形近", "zh": "美丽的"}, {"word": "wonder", "reason": "拓展", "zh": "想知道"}],
    mnemonics: "词根记忆：wonder惊奇 + -ful充满 = 充满惊奇的",
  },
  {
    id: "view",
    word: "view",
    syllables: ["view"],
    partOfSpeech: "n",
    definitions: [{ en: "what you can see from a place", zh: "景色；风景" }],
    examples: [{ sentence: "The view from the top is great." }],
    inflections: {
      plural: "views"
    },
    phrases: [
      { phrase: "beautiful view", meaning: "美丽的景色" },
      { phrase: "point of view", meaning: "观点" }
    ],
    rootAffix: { explanation: "view看 = 看到的景色" },
    similarWords: [{"word": "review", "reason": "拓展", "zh": "复习；评论"}],
    mnemonics: "词根记忆：view看 = 看到的景色",
  },
  {
    id: "it_sounds_great",
    word: "It sounds great.",
    syllables: ["it sounds great."],
    partOfSpeech: "sent",
    definitions: [{ en: "That sounds very good.", zh: "听来很棒。" }],
    examples: [{ sentence: "A: Let's go to the park. B: It sounds great." }],
  },
  {
    id: "i_can_t_wait_to_go",
    word: "I can't wait to go!",
    syllables: ["i can't wait to go!"],
    partOfSpeech: "sent",
    definitions: [{ en: "I really want to go now!", zh: "我等不及要去了！" }],
    examples: [{ sentence: "I can't wait to go to the zoo!" }],
  },
  {
    id: "get_sunlight",
    word: "get sunlight",
    syllables: ["get sunlight"],
    partOfSpeech: "phr v",
    definitions: [{ en: "get light from the sun", zh: "获取阳光" }],
    examples: [{ sentence: "Plants get sunlight to grow." }],
  },
  {
    id: "get_food_and_water",
    word: "get food and water",
    syllables: ["get food and water"],
    partOfSpeech: "phr v",
    definitions: [{ en: "get things to eat and drink", zh: "获取食物和水" }],
    examples: [{ sentence: "We get food and water from the shop." }],
  },
  {
    id: "grow",
    word: "grow",
    syllables: ["grow"],
    partOfSpeech: "v",
    definitions: [{ en: "get bigger over time", zh: "生长" }],
    examples: [{ sentence: "The tree grows very fast." }],
    inflections: {
      pastTense: "grew",
      pastParticiple: "grown",
      thirdPerson: "grows",
      presentParticiple: "growing"
    },
    phrases: [
      { phrase: "grow up", meaning: "长大" },
      { phrase: "grow into", meaning: "长成" }
    ],
    rootAffix: { explanation: "grow生长 = 生长" },
    similarWords: [{"word": "throw", "reason": "形近", "zh": "扔"}],
    mnemonics: "词根记忆：grow生长 = 生长",
  },
  {
    id: "change",
    word: "change",
    syllables: ["change"],
    partOfSpeech: "v/n",
    definitions: [{ en: "become different", zh: "变化" }],
    examples: [{ sentence: "The weather changes a lot today." }],
    inflections: {
      pastTense: "changed",
      pastParticiple: "changed",
      thirdPerson: "changes",
      presentParticiple: "changing"
    },
    phrases: [
      { phrase: "change into", meaning: "变成" },
      { phrase: "change one's mind", meaning: "改变主意" }
    ],
    rootAffix: { explanation: "chang改变 = 改变" },
    synonyms: [{"word": "alter", "zh": "改变；修改"}, {"word": "modify", "zh": "修改；调整"}, {"word": "transform", "zh": "转变；改造"}],
    similarWords: [{"word": "strange", "reason": "形近", "zh": "奇怪的；陌生的"}, {"word": "chance", "reason": "形近", "zh": "机会；可能性"}],
    mnemonics: "词根记忆：chang改变 = 改变",
  },
  {
    id: "move",
    word: "move",
    syllables: ["move"],
    partOfSpeech: "v",
    definitions: [{ en: "go from one place to another", zh: "移动" }],
    examples: [{ sentence: "We move the box to the room." }],
    inflections: {
      pastTense: "moved",
      pastParticiple: "moved",
      thirdPerson: "moves",
      presentParticiple: "moving"
    },
    phrases: [
      { phrase: "move to", meaning: "搬到" },
      { phrase: "move around", meaning: "四处走动" },
      { phrase: "move on", meaning: "继续前进" }
    ],
    synonyms: [{"word": "shift", "zh": "转移；改变"}, {"word": "transfer", "zh": "转移；调动"}, {"word": "relocate", "zh": "迁移；重新安置"}],
    similarWords: [{"word": "love", "reason": "形近", "zh": "爱，喜欢"}, {"word": "glove", "reason": "形近", "zh": "手套"}],
  },
  {
    id: "living",
    word: "living",
    syllables: ["liv", "ing"],
    partOfSpeech: "adj",
    definitions: [{ en: "alive, not dead", zh: "有生命的" }],
    examples: [{ sentence: "Plants and animals are living things." }],
    phrases: [
      { phrase: "living thing", meaning: "生物" },
      { phrase: "living room", meaning: "客厅" }
    ],
    rootAffix: { explanation: "live生活 + -ing = 有生活的→有生命的" },
    similarWords: [{"word": "amazing", "reason": "形近", "zh": "惊人的；极好的"}, {"word": "morning", "reason": "形近", "zh": "早晨，早上"}, {"word": "boring", "reason": "形近", "zh": "无聊的"}, {"word": "live", "reason": "拓展", "zh": "住"}],
    mnemonics: "词根记忆：live生活 + -ing = 有生活的→有生命的",
  },
  {
    id: "non-living",
    word: "non-living",
    syllables: ["non-living"],
    partOfSpeech: "adj",
    definitions: [{ en: "not alive", zh: "无生命的" }],
    examples: [{ sentence: "Rocks are non-living things." }],
    rootAffix: { explanation: "non-非 + living有生命的 = 无生命的" },
    similarWords: [{"word": "non", "reason": "拓展", "zh": "非；不"}, {"word": "living", "reason": "拓展", "zh": "有生命的"}],
    mnemonics: "词根记忆：non-非 + living有生命的 = 无生命的",
  },
  {
    id: "thing",
    word: "thing",
    syllables: ["thing"],
    partOfSpeech: "n",
    definitions: [{ en: "any object or item", zh: "东西" }],
    examples: [{ sentence: "I have a new thing to show you." }],
    inflections: {
      plural: "things"
    },
    phrases: [
      { phrase: "living thing", meaning: "生物" },
      { phrase: "every thing", meaning: "每件事" }
    ],
    similarWords: [{"word": "nothing", "reason": "拓展", "zh": "没有东西"}, {"word": "something", "reason": "拓展", "zh": "某物；某事"}, {"word": "everything", "reason": "拓展", "zh": "一切事物"}, {"word": "wing", "reason": "形近", "zh": "翅膀；机翼"}, {"word": "living", "reason": "形近", "zh": "有生命的"}, {"word": "boring", "reason": "形近", "zh": "无聊的"}],
  },
  {
    id: "air",
    word: "air",
    syllables: ["air"],
    partOfSpeech: "n",
    definitions: [{ en: "the gas we breathe every day", zh: "空气" }],
    examples: [{ sentence: "We need air to breathe." }],
    phrases: [
      { phrase: "fresh air", meaning: "新鲜空气" },
      { phrase: "in the open air", meaning: "在户外" }
    ],
    similarWords: [{"word": "pair", "reason": "形近", "zh": "双"}, {"word": "fair", "reason": "形近", "zh": "公平的；展览会"}],
  },
  {
    id: "by_themselves",
    word: "by themselves",
    syllables: ["by themselves"],
    partOfSpeech: "phr",
    definitions: [{ en: "alone, no help from others", zh: "他们独自地" }],
    examples: [{ sentence: "The kids can do it by themselves." }],
  },
  {
    id: "important",
    word: "important",
    syllables: ["im", "por", "tant"],
    partOfSpeech: "adj",
    definitions: [{ en: "something that matters a lot", zh: "重要的" }],
    examples: [{ sentence: "Water is very important to us." }],
    phrases: [
      { phrase: "important to", meaning: "对...重要" },
      { phrase: "most important", meaning: "最重要的" }
    ],
    rootAffix: { explanation: "im-进入 + port搬运 + -ant = 需要搬运进来的→重要的" },
    synonyms: [{"word": "significant", "zh": "重要的；意义重大的"}, {"word": "vital", "zh": "至关重要的"}, {"word": "crucial", "zh": "关键的；决定性的"}],
    similarWords: [{"word": "import", "reason": "拓展", "zh": "进口；输入"}, {"word": "impossible", "reason": "拓展", "zh": "不可能的"}],
    mnemonics: "词根记忆：im-进入 + port搬运 + -ant = 需要搬运进来的→重要的",
  },
  {
    id: "by_itself",
    word: "by itself",
    syllables: ["by itself"],
    partOfSpeech: "phr",
    definitions: [{ en: "alone, no help from others", zh: "它独自地" }],
    examples: [{ sentence: "The door opened by itself." }],
  },
  {
    id: "look_around",
    word: "look around",
    syllables: ["look around"],
    partOfSpeech: "phr v",
    definitions: [{ en: "look at all the things around you", zh: "环顾" }],
    examples: [{ sentence: "We look around the new school." }],
    synonyms: [{"word": "look about", "zh": "环顾四周"}, {"word": "look all around", "zh": "四处看"}],
  },
  {
    id: "smoke",
    word: "smoke",
    syllables: ["smoke"],
    partOfSpeech: "n/v",
    definitions: [{ en: "the gas that comes from fire", zh: "烟" }],
    examples: [{ sentence: "There is smoke from the fire." }],
    inflections: {
      plural: "smokes",
      pastTense: "smoked",
      pastParticiple: "smoked",
      thirdPerson: "smokes",
      presentParticiple: "smoking"
    },
    phrases: [
      { phrase: "no smoking", meaning: "禁止吸烟" },
      { phrase: "smoke from", meaning: "来自...的烟" }
    ],
    synonyms: [{"word": "fume", "zh": "烟；烟雾"}, {"word": "exhaust", "zh": "废气"}],
    similarWords: [{"word": "stole", "reason": "形近", "zh": "偷（steal的过去式）"}, {"word": "stolen", "reason": "形近", "zh": "被偷的（steal的过去分词）"}],
  },
  {
    id: "dirty",
    word: "dirty",
    syllables: ["dirty"],
    partOfSpeech: "adj",
    definitions: [{ en: "not clean, has dirt on it", zh: "脏的" }],
    examples: [{ sentence: "My hands are dirty." }],
    inflections: {
      comparative: "dirtier",
      superlative: "dirtiest"
    },
    phrases: [
      { phrase: "dirty hands", meaning: "脏手" },
      { phrase: "dirty clothes", meaning: "脏衣服" }
    ],
    rootAffix: { explanation: "dirt脏 + -y = 脏的" },
    synonyms: [{"word": "messy", "zh": "脏乱的；混乱的"}, {"word": "filthy", "zh": "脏的；污秽的"}],
    similarWords: [{"word": "dirt", "reason": "拓展", "zh": "污垢；土"}],
    mnemonics: "词根记忆：dirt脏 + -y = 脏的",
  },
  {
    id: "rubbish",
    word: "rubbish",
    syllables: ["rub", "bish"],
    partOfSpeech: "n",
    definitions: [{ en: "things you throw away, trash", zh: "垃圾" }],
    examples: [{ sentence: "We should put rubbish in the bin." }],
    phrases: [
      { phrase: "rubbish bin", meaning: "垃圾桶" },
      { phrase: "throw rubbish", meaning: "扔垃圾" }
    ],
    rootAffix: { explanation: "rubb-碎屑 + -ish = 碎屑→垃圾" },
    synonyms: [{"word": "trash", "zh": "垃圾"}, {"word": "garbage", "zh": "垃圾"}, {"word": "waste", "zh": "废物"}],
    similarWords: [{"word": "foolish", "reason": "形近", "zh": "愚蠢的"}, {"word": "finish", "reason": "形近", "zh": "完成，结束"}, {"word": "publish", "reason": "形近", "zh": "出版；发表"}],
    mnemonics: "词根记忆：rubb-碎屑 + -ish = 碎屑→垃圾",
  },
  {
    id: "recycle",
    word: "recycle",
    syllables: ["re", "cy", "cle"],
    partOfSpeech: "v",
    definitions: [{ en: "make old things into new things", zh: "回收利用" }],
    examples: [{ sentence: "We can recycle paper and plastic." }],
    inflections: {
      pastTense: "recycled",
      pastParticiple: "recycled",
      thirdPerson: "recycles",
      presentParticiple: "recycling"
    },
    phrases: [
      { phrase: "recycle bins", meaning: "回收箱" }
    ],
    rootAffix: { explanation: "re-再 + cycle循环 = 再循环→回收利用" },
    similarWords: [{"word": "recyclable", "reason": "拓展", "zh": "可回收的"}, {"word": "recycling", "reason": "拓展", "zh": "回收；回收利用"}, {"word": "bicycle", "reason": "形近", "zh": "自行车"}, {"word": "muscle", "reason": "形近", "zh": "肌肉"}],
    mnemonics: "词根记忆：re-再 + cycle循环 = 再循环→回收利用",
  },
  {
    id: "reduce",
    word: "reduce",
    syllables: ["re", "duce"],
    partOfSpeech: "v",
    definitions: [{ en: "make something smaller or less", zh: "减少" }],
    examples: [{ sentence: "We should reduce waste." }],
    inflections: {
      pastTense: "reduced",
      pastParticiple: "reduced",
      thirdPerson: "reduces",
      presentParticiple: "reducing"
    },
    phrases: [
      { phrase: "reduce pollution", meaning: "减少污染" }
    ],
    rootAffix: { explanation: "re-回 + duc引导 + -e = 引回去→减少" },
    similarWords: [{"word": "produce", "reason": "形近", "zh": "生产；出产"}],
    mnemonics: "词根记忆：re-回 + duc引导 + -e = 引回去→减少",
  },
  {
    id: "natural_resources",
    word: "natural resources",
    syllables: ["natural resources"],
    partOfSpeech: "n",
    definitions: [{ en: "things from nature that we use", zh: "自然资源" }],
    examples: [{ sentence: "We should save natural resources." }],
  },
  {
    id: "call",
    word: "call",
    syllables: ["call"],
    partOfSpeech: "v",
    definitions: [{ en: "name something", zh: "把……叫做" }],
    examples: [{ sentence: "We call the cat Mimi." }],
    inflections: {
      pastTense: "called",
      pastParticiple: "called",
      thirdPerson: "calls",
      presentParticiple: "calling"
    },
    phrases: [
      { phrase: "call out", meaning: "大声喊" },
      { phrase: "give a call", meaning: "打电话" },
      { phrase: "call for help", meaning: "求救" }
    ],
    similarWords: [{"word": "shall", "reason": "形近", "zh": "(表示将来的可能性)将"}, {"word": "wall", "reason": "形近", "zh": "墙"}, {"word": "ball", "reason": "形近", "zh": "球"}],
  },
  {
    id: "wood",
    word: "wood",
    syllables: ["wood"],
    partOfSpeech: "n",
    definitions: [{ en: "the hard part of a tree", zh: "木材" }],
    examples: [{ sentence: "The desk is made of wood." }],
    inflections: {
      plural: "woods"
    },
    phrases: [
      { phrase: "made of wood", meaning: "木头做的" }
    ],
    similarWords: [{"word": "wooden", "reason": "拓展", "zh": "木制的"}, {"word": "blood", "reason": "形近", "zh": "血；血液"}, {"word": "flood", "reason": "形近", "zh": "洪水；淹没"}, {"word": "food", "reason": "形近", "zh": "食物"}],
  },
  {
    id: "land",
    word: "land",
    syllables: ["land"],
    partOfSpeech: "n",
    definitions: [{ en: "the ground, not the sea", zh: "土地" }],
    examples: [{ sentence: "We plant trees on the land." }],
    inflections: {
      plural: "lands"
    },
    phrases: [
      { phrase: "on land", meaning: "在陆地上" },
      { phrase: "land area", meaning: "陆地面积" }
    ],
    similarWords: [{"word": "grassland", "reason": "拓展", "zh": "草原；草地"}, {"word": "landscape", "reason": "拓展", "zh": "风景；景色"}, {"word": "island", "reason": "拓展", "zh": "岛；岛屿"}, {"word": "band", "reason": "形近", "zh": "乐队；带子；波段"}, {"word": "grand", "reason": "形近", "zh": "宏伟的"}, {"word": "stand", "reason": "形近", "zh": "站，站立"}],
  },
  {
    id: "why",
    word: "why",
    syllables: ["why"],
    partOfSpeech: "adv",
    definitions: [{ en: "used to ask for a reason", zh: "为什么" }],
    examples: [{ sentence: "Why are you late?" }],
    phrases: [
      { phrase: "why not", meaning: "为什么不" },
      { phrase: "that's why", meaning: "这就是为什么" }
    ],
    similarWords: [{"word": "shy", "reason": "形近", "zh": "害羞的；胆怯的"}, {"word": "way", "reason": "形近", "zh": "方式，方法；路"}],
  },
  {
    id: "clean",
    word: "clean",
    syllables: ["clean"],
    partOfSpeech: "adj/v",
    definitions: [{ en: "not dirty", zh: "干净的" }],
    examples: [{ sentence: "The room is very clean." }],
    inflections: {
      comparative: "cleaner",
      superlative: "cleanest"
    },
    phrases: [
      { phrase: "clean up", meaning: "打扫干净" },
      { phrase: "clean the room", meaning: "打扫房间" }
    ],
    rootAffix: { explanation: "clean干净 = 干净的" },
    synonyms: [{"word": "tidy", "zh": "整洁的；整齐的"}, {"word": "neat", "zh": "整洁的；灵巧的"}, {"word": "spotless", "zh": "一尘不染的"}],
    similarWords: [{"word": "dirty", "reason": "反义", "zh": "脏的；肮脏的"}, {"word": "mean", "reason": "形近", "zh": "意思是"}, {"word": "clear", "reason": "形近", "zh": "清楚的"}],
    mnemonics: "词根记忆：clean干净 = 干净的",
  },
  {
    id: "hurt",
    word: "hurt",
    syllables: ["hurt"],
    partOfSpeech: "v",
    definitions: [{ en: "cause pain to someone or something", zh: "伤害" }],
    examples: [{ sentence: "I hurt my leg yesterday." }],
    inflections: {
      pastTense: "hurt",
      pastParticiple: "hurt",
      thirdPerson: "hurts",
      presentParticiple: "hurting"
    },
    phrases: [
      { phrase: "hurt oneself", meaning: "伤害自己" },
      { phrase: "get hurt", meaning: "受伤" }
    ],
    similarWords: [{"word": "heal", "reason": "反义", "zh": "治愈；使康复"}, {"word": "hunt", "reason": "形近", "zh": "打猎；搜寻"}],
  },
  {
    id: "factory",
    word: "factory",
    syllables: ["fac", "to", "ry"],
    partOfSpeech: "n",
    definitions: [{ en: "a building where things are made", zh: "工厂" }],
    examples: [{ sentence: "There is a big factory near my home." }],
    inflections: {
      plural: "factories"
    },
    rootAffix: { explanation: "fact做 + -ory = 制作东西的地方→工厂" },
    similarWords: [{"word": "history", "reason": "形近", "zh": "历史；经历"}, {"word": "memory", "reason": "形近", "zh": "记忆；回忆"}],
    mnemonics: "词根记忆：fact做 + -ory = 制作东西的地方→工厂",
  },
  {
    id: "near",
    word: "near",
    syllables: ["near"],
    partOfSpeech: "prep",
    definitions: [{ en: "close to something", zh: "在……附近" }],
    examples: [{ sentence: "My home is near the school." }],
    phrases: [
      { phrase: "near here", meaning: "附近" },
      { phrase: "near to", meaning: "靠近" }
    ],
    synonyms: [{"word": "close", "zh": "关"}, {"word": "nearby", "zh": "附近的"}, {"word": "adjacent", "zh": "邻近的"}],
    similarWords: [{"word": "far", "reason": "反义", "zh": "远的；遥远地"}, {"word": "wear", "reason": "形近", "zh": "穿，穿着"}, {"word": "clear", "reason": "形近", "zh": "清楚的"}, {"word": "tear", "reason": "形近", "zh": "眼泪；撕破"}],
  },
  {
    id: "those",
    word: "those",
    syllables: ["those"],
    partOfSpeech: "pron",
    definitions: [{ en: "the ones over there", zh: "那些" }],
    examples: [{ sentence: "Those books are mine." }],
    phrases: [
      { phrase: "those who", meaning: "那些...的人" }
    ],
    similarWords: [{"word": "these", "reason": "反义", "zh": "这些"}, {"word": "lose", "reason": "形近", "zh": "丢失"}, {"word": "choose", "reason": "形近", "zh": "选择"}, {"word": "close", "reason": "形近", "zh": "关"}],
  },
  {
    id: "turn_off",
    word: "turn off",
    syllables: ["turn off"],
    partOfSpeech: "phr v",
    definitions: [{ en: "make a machine stop working", zh: "关掉" }],
    examples: [{ sentence: "Please turn off the light when you leave." }],
    similarWords: [{"word": "turn on", "reason": "反义", "zh": "打开"}],
  },
  {
    id: "aunt",
    word: "aunt",
    syllables: ["aunt"],
    partOfSpeech: "n",
    definitions: [{ en: "the sister of your mom or dad", zh: "阿姨；姑母；伯母；" }],
    examples: [{ sentence: "My aunt is coming to visit us." }],
    inflections: {
      plural: "aunts"
    },
    phrases: [
      { phrase: "aunt and uncle", meaning: "阿姨和叔叔" }
    ],
    similarWords: [{"word": "hunt", "reason": "形近", "zh": "打猎；搜寻"}, {"word": "count", "reason": "形近", "zh": "数数，计数"}],
  },
  {
    id: "uncle",
    word: "uncle",
    syllables: ["un", "cle"],
    partOfSpeech: "n",
    definitions: [{ en: "the brother of your mom or dad", zh: "舅父；叔父；伯父；" }],
    examples: [{ sentence: "My uncle is a doctor." }],
    inflections: {
      plural: "uncles"
    },
    phrases: [
      { phrase: "uncle and aunt", meaning: "叔叔和阿姨" }
    ],
    similarWords: [{"word": "muscle", "reason": "形近", "zh": "肌肉"}],
    mnemonics: "分音节记忆：un · cle",
  },
  {
    id: "together",
    word: "together",
    syllables: ["to", "geth", "er"],
    partOfSpeech: "adv",
    definitions: [{ en: "with other people", zh: "一起" }],
    examples: [{ sentence: "We play games together." }],
    phrases: [
      { phrase: "work together", meaning: "一起工作" },
      { phrase: "play together", meaning: "一起玩" },
      { phrase: "get together", meaning: "聚会" }
    ],
    rootAffix: { explanation: "to-到 + gether聚集 = 聚集到一起→一起" },
    similarWords: [{"word": "weather", "reason": "形近", "zh": "天气"}],
    mnemonics: "\"to\"+\"get\"+\"her\" → 一起去她家 → 在一起",
  },
  {
    id: "celebrate",
    word: "celebrate",
    syllables: ["cel", "e", "brate"],
    partOfSpeech: "v",
    definitions: [{ en: "have a party for a special day", zh: "庆祝" }],
    examples: [{ sentence: "We celebrate Spring Festival every year." }],
    inflections: {
      pastTense: "celebrated",
      pastParticiple: "celebrated",
      thirdPerson: "celebrates",
      presentParticiple: "celebrating"
    },
    phrases: [
      { phrase: "celebrate a festival", meaning: "庆祝节日" },
      { phrase: "celebrate with", meaning: "和...一起庆祝" }
    ],
    rootAffix: { explanation: "celebr庆祝 + -ate动词 = 庆祝" },
    similarWords: [{"word": "separate", "reason": "形近", "zh": "分开；分离的"}, {"word": "appreciate", "reason": "形近", "zh": "感激；欣赏"}],
    mnemonics: "词根记忆：celebr庆祝 + -ate动词 = 庆祝",
  },
  {
    id: "main",
    word: "main",
    syllables: ["main"],
    partOfSpeech: "adj",
    definitions: [{ en: "the most important", zh: "主要的" }],
    examples: [{ sentence: "The main food is rice." }],
    inflections: {
    },
    phrases: [
      { phrase: "main street", meaning: "主街" },
      { phrase: "main idea", meaning: "主要想法" }
    ],
    similarWords: [{"word": "mainly", "reason": "拓展", "zh": "主要地"}, {"word": "again", "reason": "形近", "zh": "再次，又"}, {"word": "rain", "reason": "形近", "zh": "雨，下雨"}, {"word": "train", "reason": "形近", "zh": "火车"}, {"word": "remain", "reason": "拓展", "zh": "保持；剩下"}],
  },
  {
    id: "eve",
    word: "eve",
    syllables: ["eve"],
    partOfSpeech: "n",
    definitions: [{ en: "the day before a special day", zh: "前夕" }],
    examples: [{ sentence: "We have a big dinner on New Year's Eve." }],
    inflections: {
      plural: "eves"
    },
    similarWords: [{"word": "evening", "reason": "拓展", "zh": "傍晚；晚上"}, {"word": "event", "reason": "拓展", "zh": "事件；活动"}],
  },
  {
    id: "stocking",
    word: "stocking",
    syllables: ["stock", "ing"],
    partOfSpeech: "n",
    definitions: [{ en: "a long sock, used at Christmas", zh: "长筒袜" }],
    examples: [{ sentence: "I put a stocking on the Christmas tree." }],
    inflections: {
      plural: "stockings"
    },
    synonyms: [{"word": "sock", "zh": "短袜"}],
    similarWords: [{"word": "amazing", "reason": "形近", "zh": "惊人的；极好的"}, {"word": "morning", "reason": "形近", "zh": "早晨，早上"}, {"word": "evening", "reason": "形近", "zh": "傍晚，晚上"}],
    mnemonics: "分音节记忆：stock · ing",
  },
  {
    id: "visit_relatives",
    word: "visit relatives",
    syllables: ["visit relatives"],
    partOfSpeech: "phr v",
    definitions: [{ en: "go to see your family members", zh: "探亲" }],
    examples: [{ sentence: "We visit relatives during Spring Festival." }],
  },
  {
    id: "eat_mooncakes",
    word: "eat mooncakes",
    syllables: ["eat mooncakes"],
    partOfSpeech: "phr v",
    definitions: [{ en: "eat the special cake for Mid-Autumn Festival", zh: "吃月饼" }],
    examples: [{ sentence: "We eat mooncakes on Mid-Autumn Festival." }],
  },
  {
    id: "have_a_dragon_boat_race",
    word: "have a dragon boat race",
    syllables: ["have a dragon boat race"],
    partOfSpeech: "phr v",
    definitions: [{ en: "race in long boats on the river", zh: "进行龙舟比赛" }],
    examples: [{ sentence: "We have a dragon boat race on the river." }],
  },
  {
    id: "watch_lanterns",
    word: "watch lanterns",
    syllables: ["watch lanterns"],
    partOfSpeech: "phr v",
    definitions: [{ en: "look at beautiful lanterns", zh: "赏花灯" }],
    examples: [{ sentence: "We watch lanterns at the Lantern Festival." }],
  },
  {
    id: "next_month",
    word: "next month",
    syllables: ["next month"],
    partOfSpeech: "phr",
    definitions: [{ en: "the month after this one", zh: "下个月" }],
    examples: [{ sentence: "We will go to Shanghai next month." }],
  },
  {
    id: "make_jiaozi",
    word: "make jiaozi",
    syllables: ["make jiaozi"],
    partOfSpeech: "phr v",
    definitions: [{ en: "make Chinese dumplings", zh: "包饺子" }],
    examples: [{ sentence: "We make jiaozi with grandma." }],
  },
  {
    id: "watch_a_lion_dance",
    word: "watch a lion dance",
    syllables: ["watch a lion dance"],
    partOfSpeech: "phr v",
    definitions: [{ en: "watch the lion dance show", zh: "观看舞狮表演" }],
    examples: [{ sentence: "We watch a lion dance show." }],
  },
  {
    id: "have_a_big_meal",
    word: "have a big meal",
    syllables: ["have a big meal"],
    partOfSpeech: "phr v",
    definitions: [{ en: "eat a lot of good food", zh: "吃大餐" }],
    examples: [{ sentence: "We have a big meal for my birthday." }],
  },
  {
    id: "put_up",
    word: "put up",
    syllables: ["put up"],
    partOfSpeech: "phr v",
    definitions: [{ en: "hang something on the wall", zh: "搭建；张贴；挂起" }],
    examples: [{ sentence: "We put up a picture on the wall." }],
  },
  {
    id: "fast",
    word: "fast",
    syllables: ["fast"],
    partOfSpeech: "adj/adv",
    definitions: [{ en: "can move quickly", zh: "快的" }],
    examples: [{ sentence: "He can run very fast." }],
    inflections: {
      comparative: "faster",
      superlative: "fastest"
    },
    phrases: [
      { phrase: "fast food", meaning: "快餐" },
      { phrase: "fast runner", meaning: "跑得快的人" }
    ],
    synonyms: [{"word": "quick", "zh": "快的，迅速的"}, {"word": "rapid", "zh": "迅速的；快速的"}, {"word": "swift", "zh": "迅速的；敏捷的"}],
    similarWords: [{"word": "slow", "reason": "反义", "zh": "慢的"}, {"word": "east", "reason": "形近", "zh": "东方"}, {"word": "last", "reason": "形近", "zh": "最后的"}, {"word": "past", "reason": "形近", "zh": "过去"}],
  },
  {
    id: "slow",
    word: "slow",
    syllables: ["slow"],
    partOfSpeech: "adj/adv",
    definitions: [{ en: "not fast, moves at a low speed", zh: "慢的" }],
    examples: [{ sentence: "The turtle walks very slow." }],
    inflections: {
      comparative: "slower",
      superlative: "slowest"
    },
    phrases: [
      { phrase: "slow down", meaning: "减速" },
      { phrase: "slow speed", meaning: "慢速" }
    ],
    similarWords: [{"word": "low", "reason": "形近", "zh": "低的"}, {"word": "flow", "reason": "形近", "zh": "流动；流量"}, {"word": "blow", "reason": "形近", "zh": "吹；打击"}],
  },
  {
    id: "excited",
    word: "excited",
    syllables: ["ex", "cit", "ed"],
    partOfSpeech: "adj",
    definitions: [{ en: "very happy and cannot wait", zh: "兴奋的" }],
    examples: [{ sentence: "I am excited to go to the park." }],
    phrases: [
      { phrase: "excited about", meaning: "对...兴奋" },
      { phrase: "get excited", meaning: "变得兴奋" }
    ],
    rootAffix: { explanation: "ex-出 + cite刺激 + -ed = 被刺激的→兴奋的" },
    similarWords: [{"word": "exciting", "reason": "拓展", "zh": "令人兴奋的"}, {"word": "excitement", "reason": "拓展", "zh": "兴奋；激动"}, {"word": "excite", "reason": "拓展", "zh": "使兴奋；激动"}],
    mnemonics: "词根记忆：ex-出 + cite刺激 + -ed = 被刺激的→兴奋的",
  },
  {
    id: "unhappy",
    word: "unhappy",
    syllables: ["un", "hap", "py"],
    partOfSpeech: "adj",
    definitions: [{ en: "not happy, sad", zh: "不开心的" }],
    examples: [{ sentence: "I am unhappy because I lost my pen." }],
    similarWords: [{"word": "happy", "reason": "拓展", "zh": "快乐的；高兴的"}],
    mnemonics: "分音节记忆：un · hap · py",
  },
  {
    id: "feel",
    word: "feel",
    syllables: ["feel"],
    partOfSpeech: "v",
    definitions: [{ en: "to have a feeling", zh: "觉得；感到" }],
    examples: [{ sentence: "I feel very happy today." }],
    inflections: {
      pastTense: "felt",
      pastParticiple: "felt",
      thirdPerson: "feels",
      presentParticiple: "feeling"
    },
    phrases: [
      { phrase: "feel like", meaning: "想要" },
      { phrase: "feel good", meaning: "感觉好" },
      { phrase: "feel better", meaning: "感觉更好" }
    ],
    rootAffix: { explanation: "feel感觉 = 感觉" },
    similarWords: [{"word": "wheel", "reason": "形近", "zh": "车轮；轮子"}, {"word": "feed", "reason": "形近", "zh": "喂"}, {"word": "feeling", "reason": "拓展", "zh": "感情；情绪"}],
    mnemonics: "词根记忆：feel感觉 = 感觉",
  },
  {
    id: "feeling",
    word: "feeling",
    syllables: ["feel", "ing"],
    partOfSpeech: "n",
    definitions: [{ en: "what you feel, like happy or sad", zh: "感情；情绪" }],
    examples: [{ sentence: "I have a good feeling about this." }],
    inflections: {
      plural: "feelings"
    },
    phrases: [
      { phrase: "good feeling", meaning: "好感觉" },
      { phrase: "have a feeling", meaning: "有一种感觉" }
    ],
    rootAffix: { explanation: "feel感觉 + -ing = 感觉→感情" },
    similarWords: [{"word": "amazing", "reason": "形近", "zh": "惊人的；极好的"}, {"word": "living", "reason": "形近", "zh": "有生命的"}, {"word": "morning", "reason": "形近", "zh": "早晨，早上"}, {"word": "feel", "reason": "拓展", "zh": "觉得；感到"}],
    mnemonics: "词根记忆：feel感觉 + -ing = 感觉→感情",
  },
  {
    id: "relaxed",
    word: "relaxed",
    syllables: ["re", "laxed"],
    partOfSpeech: "adj",
    definitions: [{ en: "calm, not worried", zh: "放松的" }],
    examples: [{ sentence: "I feel relaxed after a good rest." }],
    phrases: [
      { phrase: "feel relaxed", meaning: "感觉放松" }
    ],
    rootAffix: { explanation: "re-再 + lax放松 + -ed = 放松的" },
    similarWords: [{"word": "relax", "reason": "拓展", "zh": "放松"}],
    mnemonics: "词根记忆：re-再 + lax放松 + -ed = 放松的",
  },
  {
    id: "person",
    word: "person",
    syllables: ["per", "son"],
    partOfSpeech: "n",
    definitions: [{ en: "a man, woman or child", zh: "人" }],
    examples: [{ sentence: "There is a person at the door." }],
    inflections: {
      plural: "people"
    },
    phrases: [
      { phrase: "young person", meaning: "年轻人" },
      { phrase: "first person", meaning: "第一人称" }
    ],
    synonyms: [{"word": "human", "zh": "人；人类"}, {"word": "individual", "zh": "个人；个体"}],
    similarWords: [{"word": "reason", "reason": "形近", "zh": "理由；原因"}, {"word": "lesson", "reason": "形近", "zh": "课，课程"}, {"word": "poison", "reason": "形近", "zh": "毒药；毒物"}],
    mnemonics: "分音节记忆：per · son",
  },
  {
    id: "imagination",
    word: "imagination",
    syllables: ["imag", "i", "na", "tion"],
    partOfSpeech: "n",
    definitions: [{ en: "the ability to make pictures in your mind", zh: "想象；想象力" }],
    examples: [{ sentence: "The story uses a lot of imagination." }],
    inflections: {
      plural: "imaginations"
    },
    phrases: [
      { phrase: "use your imagination", meaning: "发挥想象力" }
    ],
    rootAffix: { explanation: "imagin想象 + -ation = 想象" },
    similarWords: [{"word": "image", "reason": "拓展", "zh": "图像；影像"}, {"word": "imagine", "reason": "拓展", "zh": "想象"}, {"word": "imaginative", "reason": "拓展", "zh": "富有想象力的"}, {"word": "population", "reason": "形近", "zh": "人口；种群"}],
    mnemonics: "词根记忆：imagin想象 + -ation = 想象",
  },
  {
    id: "imagine",
    word: "imagine",
    syllables: ["imag", "ine"],
    partOfSpeech: "v",
    definitions: [{ en: "make pictures in your mind", zh: "想象" }],
    examples: [{ sentence: "Imagine you are a bird." }],
    inflections: {
      pastTense: "imagined",
      pastParticiple: "imagined",
      thirdPerson: "imagines",
      presentParticiple: "imagining"
    },
    phrases: [
      { phrase: "imagine doing", meaning: "想象做" }
    ],
    rootAffix: { explanation: "imag图像 + -ine = 在脑中成像→想象" },
    similarWords: [{"word": "image", "reason": "拓展", "zh": "图像；影像"}, {"word": "imagination", "reason": "拓展", "zh": "想象；想象力"}, {"word": "engine", "reason": "形近", "zh": "引擎；发动机"}, {"word": "magazine", "reason": "形近", "zh": "杂志；期刊"}, {"word": "machine", "reason": "形近", "zh": "机器；机械"}],
    mnemonics: "词根记忆：imag图像 + -ine = 在脑中成像→想象",
  },
  {
    id: "all_over_the_world",
    word: "all over the world",
    syllables: ["all over the world"],
    partOfSpeech: "phr",
    definitions: [{ en: "every country in the world", zh: "世界各地" }],
    examples: [{ sentence: "People all over the world love peace." }],
  },
  {
    id: "china",
    word: "China",
    syllables: ["chi", "na"],
    partOfSpeech: "n",
    definitions: [{ en: "a big country in Asia", zh: "中国" }],
    examples: [{ sentence: "I love China." }],
    mnemonics: "分音节记忆：chi · na",
  },
  {
    id: "france",
    word: "France",
    syllables: ["france"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe", zh: "法国" }],
    examples: [{ sentence: "France is a beautiful country." }],
    similarWords: [{"word": "chance", "reason": "形近", "zh": "机会；可能性"}, {"word": "dance", "reason": "形近", "zh": "跳舞"}, {"word": "science", "reason": "形近", "zh": "科学"}],
  },
  {
    id: "uk",
    word: "UK",
    syllables: ["uk"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe, also called England", zh: "英国" }],
    examples: [{ sentence: "The UK is in Europe." }],
  },
  {
    id: "paris",
    word: "Paris",
    syllables: ["paris"],
    partOfSpeech: "n",
    definitions: [{ en: "the capital city of France", zh: "巴黎" }],
    examples: [{ sentence: "Paris is the capital of France." }],
  },
  {
    id: "the_eiffel_tower",
    word: "the Eiffel Tower",
    syllables: ["the eiffel tower"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous tall tower in Paris", zh: "埃菲尔铁塔" }],
    examples: [{ sentence: "I want to visit the Eiffel Tower." }],
  },
  {
    id: "big_ben",
    word: "Big Ben",
    syllables: ["big ben"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous big clock in London", zh: "大本钟" }],
    examples: [{ sentence: "Big Ben is a famous clock." }],
  },
  {
    id: "venice",
    word: "Venice",
    syllables: ["venice"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous city in Italy with many canals", zh: "威尼斯" }],
    examples: [{ sentence: "Venice is a city with many rivers." }],
    similarWords: [{"word": "price", "reason": "形近", "zh": "价格；价钱"}, {"word": "office", "reason": "形近", "zh": "办公室"}, {"word": "police", "reason": "形近", "zh": "警察"}],
  },
  {
    id: "italy",
    word: "Italy",
    syllables: ["italy"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe", zh: "意大利" }],
    examples: [{ sentence: "Italy is famous for pizza." }],
  },
  {
    id: "suzhou",
    word: "Suzhou",
    syllables: ["suzhou"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous city in China with many gardens", zh: "苏州" }],
    examples: [{ sentence: "Suzhou has many beautiful gardens." }],
  },
  {
    id: "asia",
    word: "Asia",
    syllables: ["asia"],
    partOfSpeech: "n",
    definitions: [{ en: "the biggest continent in the world", zh: "亚洲" }],
    examples: [{ sentence: "China is in Asia." }],
  },
  {
    id: "the_great_wall",
    word: "the Great Wall",
    syllables: ["the great wall"],
    partOfSpeech: "n",
    definitions: [{ en: "a very long wall in China, famous all over the world", zh: "长城" }],
    examples: [{ sentence: "The Great Wall is very famous." }],
  },
  {
    id: "beijing_roast_duck",
    word: "Beijing roast duck",
    syllables: ["beijing roast duck"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous delicious food from Beijing", zh: "北京烤鸭" }],
    examples: [{ sentence: "I like Beijing roast duck." }],
  },
  {
    id: "europe",
    word: "Europe",
    syllables: ["eu", "rope"],
    partOfSpeech: "n",
    definitions: [{ en: "a continent west of Asia", zh: "欧洲" }],
    examples: [{ sentence: "France is in Europe." }],
    mnemonics: "分音节记忆：eu · rope",
  },
  {
    id: "london",
    word: "London",
    syllables: ["lon", "don"],
    partOfSpeech: "n",
    definitions: [{ en: "the capital city of the UK", zh: "伦敦" }],
    examples: [{ sentence: "London is the capital of the UK." }],
    similarWords: [{"word": "pardon", "reason": "形近", "zh": "原谅；赦免"}],
    mnemonics: "分音节记忆：lon · don",
  },
  {
    id: "tower_bridge",
    word: "Tower Bridge",
    syllables: ["tower bridge"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous bridge in London", zh: "伦敦塔桥" }],
    examples: [{ sentence: "Tower Bridge is in London." }],
  },
  {
    id: "the_british_museum",
    word: "the British Museum",
    syllables: ["the british museum"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous big museum in London", zh: "大英博物馆" }],
    examples: [{ sentence: "The British Museum is very big." }],
  },
  {
    id: "the_louvre_museum",
    word: "the Louvre Museum",
    syllables: ["the louvre museum"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous big museum in Paris", zh: "卢浮宫" }],
    examples: [{ sentence: "The Louvre Museum is in Paris." }],
  },
  {
    id: "india",
    word: "India",
    syllables: ["in", "dia"],
    partOfSpeech: "n",
    definitions: [{ en: "a big country in Asia", zh: "印度" }],
    examples: [{ sentence: "India is a big country." }],
    mnemonics: "分音节记忆：in · dia",
  },
  {
    id: "japan",
    word: "Japan",
    syllables: ["japan"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Asia, made of many islands", zh: "日本" }],
    examples: [{ sentence: "Japan is near China." }],
  },
  {
    id: "canada",
    word: "Canada",
    syllables: ["cana", "da"],
    partOfSpeech: "n",
    definitions: [{ en: "a big country in North America", zh: "加拿大" }],
    examples: [{ sentence: "Canada is a big country." }],
    mnemonics: "分音节记忆：cana · da",
  },
]

export const grade4Book = {
  id: "book-grade4",
  name: "五上英语",
  description: "共144个单词/短语（五年级上册）",
  wordIds: grade4Words.map(w => w.id),
  createdAt: Date.now(),
}


export const sampleBooks: any[] = [grade4Book]
