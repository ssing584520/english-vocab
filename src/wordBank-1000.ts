import type { Word } from "./types"

export const defaultWords: Word[] = [
  {
    id: "cry",
    word: "cry",
    syllables: ["cry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to show sadness", zh: "\u54ed\uff0c\u54ed\u6ce3" }],
    examples: [{ sentence: "He cries when he is sad." }],
    inflections: {
      pastTense: "cried",
      pastParticiple: "cried",
      thirdPerson: "cries",
      presentParticiple: "crying"
    },
    phrases: [
      { phrase: "cry out", meaning: "\u5927\u53eb" },
      { phrase: "cry for help", meaning: "\u6c42\u6551" },
      { phrase: "cry over", meaning: "\u4e3a...\u54ed\u6ce3" }
    ],
    similarWords: [{"word": "try", "reason": "\u5f62\u8fd1", "zh": "\u5c1d\u8bd5\uff0c\u52aa\u529b"}, {"word": "dry", "reason": "\u5f62\u8fd1", "zh": "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5"}, {"word": "fry", "reason": "\u5f62\u8fd1", "zh": "\u6cb9\u70b8\uff1b\u714e"}],
    mnemonics: "\u60f3\u8c61\u5c0f\u5b69\u54ed \"cry\" \u7684\u6837\u5b50",
  },
  {
    id: "drive",
    word: "drive",
    syllables: ["drive"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a car move", zh: "\u9a7e\u9a76\uff0c\u5f00\u8f66" }],
    examples: [{ sentence: "He drives to work." }],
    inflections: {
      pastTense: "drove",
      pastParticiple: "driven",
      thirdPerson: "drives",
      presentParticiple: "driving"
    },
    phrases: [
      { phrase: "drive to", meaning: "\u5f00\u8f66\u53bb" },
      { phrase: "drive away", meaning: "\u5f00\u8d70" },
      { phrase: "go for a drive", meaning: "\u5f00\u8f66\u515c\u98ce" }
    ],
    similarWords: [{"word": "arrive", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe"}, {"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}, {"word": "native", "reason": "\u5f62\u8fd1", "zh": "\u672c\u5730\u7684\uff1b\u571f\u751f\u7684"}],
  },
  {
    id: "funny",
    word: "funny",
    syllables: ["fun", "ny"],
    partOfSpeech: "adj.",
    definitions: [{ en: "causing to laugh", zh: "\u6709\u8da3\u7684\uff0c\u597d\u7b11\u7684" }],
    examples: [{ sentence: "The dog looks funny." }],
    inflections: {
      comparative: "funnier",
      superlative: "funniest"
    },
    phrases: [
      { phrase: "funny story", meaning: "\u6709\u8da3\u7684\u6545\u4e8b" },
      { phrase: "feel funny", meaning: "\u611f\u89c9\u5947\u602a" }
    ],
    synonyms: [{"word": "humorous", "zh": "幽默的"}, {"word": "amusing", "zh": "有趣的；好笑的"}, {"word": "silly", "zh": "傻的；愚蠢的"}],
    similarWords: [{"word": "sunny", "reason": "\u5f62\u8fd1", "zh": "\u6674\u6717\u7684"}, {"word": "penny", "reason": "\u5f62\u8fd1", "zh": "\u4fbf\u58eb\uff1b\u4e00\u5206\u94b1"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afun \u00b7 ny",
    rootAffix: { explanation: "fun乐趣 + -ny = 有趣的" },
    antonyms: [{ word: "serious", zh: "严肃的" }]
  },
  {
    id: "hope",
    word: "hope",
    syllables: ["hope"],
    partOfSpeech: "v.",
    definitions: [{ en: "to want something to happen", zh: "\u5e0c\u671b\uff0c\u671f\u5f85" }],
    examples: [{ sentence: "She hopes the sun comes out." }],
    inflections: {
      pastTense: "hoped",
      pastParticiple: "hoped",
      thirdPerson: "hopes",
      presentParticiple: "hoping"
    },
    phrases: [
      { phrase: "hope for", meaning: "\u5e0c\u671b" },
      { phrase: "lose hope", meaning: "\u5931\u53bb\u5e0c\u671b" },
      { phrase: "in the hope of", meaning: "\u62b1\u7740...\u5e0c\u671b" }
    ],
    similarWords: [{"word": "rope", "reason": "\u5f62\u8fd1", "zh": "\u7ef3\u5b50\uff1b\u7ef3\u7d22"}, {"word": "home", "reason": "\u5f62\u8fd1", "zh": "\u5bb6\uff0c\u5bb6\u5ead"}, {"word": "hole", "reason": "\u5f62\u8fd1", "zh": "\u6d1e\uff1b\u5b54\uff1b\u5751"}],
  },
  {
    id: "laugh",
    word: "laugh",
    syllables: ["laugh"],
    partOfSpeech: "v.",
    definitions: [{ en: "to show how happy you are", zh: "\u7b11\uff0c\u5927\u7b11" }],
    examples: [{ sentence: "Jan laughs a lot." }],
    inflections: {
      pastTense: "laughed",
      pastParticiple: "laughed",
      thirdPerson: "laughs",
      presentParticiple: "laughing"
    },
    phrases: [
      { phrase: "laugh at", meaning: "\u5632\u7b11" },
      { phrase: "laugh out loud", meaning: "\u5927\u58f0\u7b11" }
    ],
    similarWords: [{"word": "tough", "reason": "\u5f62\u8fd1", "zh": "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684"}, {"word": "cough", "reason": "\u5f62\u8fd1", "zh": "\u54b3\u55fd"}],
    mnemonics: "\u53d1\u97f3\u50cf\"\u62c9\u592b\"\uff0c\u7b11\u5f97\u62c9\u957f\u4e86\u8138",
  },
  {
    id: "nice",
    word: "nice",
    syllables: ["nice"],
    partOfSpeech: "adj.",
    definitions: [{ en: "kind", zh: "\u597d\u7684\uff0c\u53cb\u597d\u7684" }],
    examples: [{ sentence: "Mary is very nice." }],
    inflections: {
      comparative: "nicer",
    },
    phrases: [
      { phrase: "nice to meet you", meaning: "\u5f88\u9ad8\u5174\u8ba4\u8bc6\u4f60" },
      { phrase: "nice try", meaning: "\u505a\u5f97\u4e0d\u9519" }
    ],
    similarWords: [{"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "ice", "reason": "\u5f62\u8fd1", "zh": "\u51b0\uff1b\u51b0\u6dc7\u6dcb"}, {"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}],
  },
  {
    id: "smile",
    word: "smile",
    syllables: ["smile"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a happy face", zh: "\u5fae\u7b11\uff0c\u7b11\u5bb9" }],
    examples: [{ sentence: "She always smiles." }],
    inflections: {
      pastTense: "smiled",
      pastParticiple: "smiled",
      thirdPerson: "smiles",
      presentParticiple: "smiling"
    },
    phrases: [
      { phrase: "smile at", meaning: "\u5bf9...\u5fae\u7b11" },
      { phrase: "wear a smile", meaning: "\u9762\u5e26\u5fae\u7b11" }
    ],
    mnemonics: "\"s\" \u50cf\u5fae\u7b11\u7684\u5634\u89d2",
    synonyms: [{"word": "grin", "zh": "咧嘴笑"}]
  },
  {
    id: "strong",
    word: "strong",
    syllables: ["strong"],
    partOfSpeech: "adj.",
    definitions: [{ en: "powerful", zh: "\u5f3a\u58ee\u7684\uff0c\u6709\u529b\u7684" }],
    examples: [{ sentence: "My uncle is very strong." }],
    inflections: {
      comparative: "more strong",
      superlative: "most strong"
    },
    phrases: [
      { phrase: "strong wind", meaning: "\u5f3a\u98ce" },
      { phrase: "strong feeling", meaning: "\u5f3a\u70c8\u611f\u60c5" }
    ],
    synonyms: [{"word": "powerful", "zh": "强大的；有力的"}, {"word": "mighty", "zh": "强大的；巨大的"}],
    similarWords: [{"word": "wrong", "reason": "\u5f62\u8fd1", "zh": "\u9519\u8bef\u7684\uff0c\u4e0d\u5bf9\u7684"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}],
    antonyms: [{ word: "weak", zh: "虚弱的" }]
  },
  {
    id: "student",
    word: "student",
    syllables: ["stu", "dent"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who goes to school", zh: "\u5b66\u751f" }],
    examples: [{ sentence: "The student has many books." }],
    inflections: {
      plural: "students"
    },
    phrases: [
      { phrase: "good student", meaning: "\u597d\u5b66\u751f" },
      { phrase: "student ID", meaning: "\u5b66\u751f\u8bc1" }
    ],
    rootAffix: { explanation: "stud\u5b66\u4e60 + -ent = \u5b66\u4e60\u7684\u4eba\u2192\u5b66\u751f" },
    similarWords: [{"word": "accident", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u6545\uff1b\u610f\u5916"}, {"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1astud\u5b66\u4e60 + -ent = \u5b66\u4e60\u7684\u4eba\u2192\u5b66\u751f",
  },
  {
    id: "young",
    word: "young",
    syllables: ["young"],
    partOfSpeech: "adj.",
    definitions: [{ en: "living only a short time so far", zh: "\u5e74\u8f7b\u7684\uff0c\u5e74\u5e7c\u7684" }],
    examples: [{ sentence: "The young girl loves her grandma." }],
    inflections: {
      comparative: "younger",
      superlative: "youngest"
    },
    phrases: [
      { phrase: "young people", meaning: "\u5e74\u8f7b\u4eba" },
      { phrase: "at a young age", meaning: "\u5728\u5e74\u8f7b\u65f6" }
    ],
    synonyms: [{"word": "youthful", "zh": "年轻的；有青春活力的"}, {"word": "junior", "zh": "年少的；初级的"}],
    similarWords: [{"word": "youth", "reason": "\u62d3\u5c55", "zh": "青春；青年"}],
    antonyms: [{ word: "old", zh: "年老的" }]
  },
  {
    id: "big",
    word: "big",
    syllables: ["big"],
    partOfSpeech: "adj.",
    definitions: [{ en: "large", zh: "\u5927\u7684\uff0c\u5de8\u5927\u7684" }],
    examples: [{ sentence: "The red apple is big." }],
    inflections: {
      comparative: "biger",
      superlative: "bigest"
    },
    phrases: [
      { phrase: "big deal", meaning: "\u5927\u4e8b" },
      { phrase: "big problem", meaning: "\u5927\u95ee\u9898" }
    ],
    synonyms: [{"word": "large", "zh": "\u5927\u7684"}, {"word": "huge", "zh": "\u5de8\u5927\u7684"}, {"word": "giant", "zh": "\u5de8\u5927\u7684\uff1b\u5de8\u4eba"}],
    similarWords: [{"word": "bag", "reason": "\u5f62\u8fd1", "zh": "\u5305"}, {"word": "bit", "reason": "\u5f62\u8fd1", "zh": "\u4e00\u70b9\uff1b\u5c11\u91cf"}, {"word": "beg", "reason": "\u5f62\u8fd1", "zh": "\u4e5e\u6c42\uff1b\u6073\u6c42"}],
    antonyms: [{ word: "small", zh: "小的" }]
  },
  {
    id: "boy",
    word: "boy",
    syllables: ["boy"],
    partOfSpeech: "n.",
    definitions: [{ en: "a young male", zh: "\u7537\u5b69" }],
    examples: [{ sentence: "The boy is ten years old." }],
    inflections: {
      plural: "boys"
    },
    phrases: [
      { phrase: "little boy", meaning: "\u5c0f\u7537\u5b69" },
      { phrase: "boy friend", meaning: "\u7537\u670b\u53cb" }
    ],
    similarWords: [{"word": "buy", "reason": "\u5f62\u8fd1", "zh": "\u4e70\uff0c\u8d2d\u4e70"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}, {"word": "joy", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u4e50\uff1b\u559c\u60a6"}]
  },
  {
    id: "child",
    word: "child",
    syllables: ["child"],
    partOfSpeech: "n.",
    definitions: [{ en: "a young boy or girl", zh: "\u5c0f\u5b69\uff0c\u513f\u7ae5" }],
    examples: [{ sentence: "The child plays in the sand." }],
    inflections: {
      plural: "children"
    },
    phrases: [
      { phrase: "only child", meaning: "\u72ec\u751f\u5b50\u5973" },
      { phrase: "child care", meaning: "\u513f\u7ae5\u4fdd\u80b2" }
    ],
    similarWords: [{"word": "wild", "reason": "\u5f62\u8fd1", "zh": "\u91ce\u751f\u7684\uff1b\u72c2\u91ce\u7684"}, {"word": "build", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u9020"}]
  },
  {
    id: "have",
    word: "have",
    syllables: ["have"],
    partOfSpeech: "adj.",
    definitions: [{ en: "to own something", zh: "\u6709\uff0c\u62e5\u6709" }],
    examples: [{ sentence: "She has a cat." }],
    inflections: {
      comparative: "haver",
    },
    phrases: [
      { phrase: "have to", meaning: "\u4e0d\u5f97\u4e0d" },
      { phrase: "have fun", meaning: "\u73a9\u5f97\u5f00\u5fc3" },
      { phrase: "have a look", meaning: "\u770b\u4e00\u770b" }
    ],
    similarWords: [{"word": "leave", "reason": "\u5f62\u8fd1", "zh": "\u79bb\u5f00\uff1b\u51fa\u53d1"}, {"word": "wave", "reason": "\u5f62\u8fd1", "zh": "\u6ce2\u6d6a\uff1b\u6325\u624b"}, {"word": "save", "reason": "\u5f62\u8fd1", "zh": "\u8282\u7701\uff1b\u62ef\u6551"}],
  },
  {
    id: "loud",
    word: "loud",
    syllables: ["loud"],
    partOfSpeech: "adj.",
    definitions: [{ en: "making a lot of sound", zh: "\u5927\u58f0\u7684\uff0c\u54cd\u4eae\u7684" }],
    examples: [{ sentence: "The music is too loud." }],
    inflections: {
      comparative: "louder",
      superlative: "loudest"
    },
    phrases: [
      { phrase: "loud voice", meaning: "\u5927\u58f0" },
      { phrase: "loud and clear", meaning: "\u6e05\u6670\u54cd\u4eae" }
    ],
    similarWords: [{"word": "proud", "reason": "\u5f62\u8fd1", "zh": "\u9a84\u50b2\u7684\uff1b\u81ea\u8c6a\u7684"}],
    antonyms: [{ word: "quiet", zh: "安静的" }]
  },
  {
    id: "story",
    word: "story",
    syllables: ["sto", "ry"],
    partOfSpeech: "n.",
    definitions: [{ en: "the events in a book", zh: "\u6545\u4e8b\uff0c\u4f20\u8bf4" }],
    examples: [{ sentence: "We read a story at bedtime." }],
    inflections: {
      plural: "stories"
    },
    phrases: [
      { phrase: "tell a story", meaning: "\u8bb2\u6545\u4e8b" },
      { phrase: "short story", meaning: "\u77ed\u7bc7\u5c0f\u8bf4" }
    ],
    similarWords: [{"word": "memory", "reason": "\u5f62\u8fd1", "zh": "\u8bb0\u5fc6\uff1b\u56de\u5fc6"}, {"word": "store", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "storm", "reason": "\u5f62\u8fd1", "zh": "\u66b4\u98ce\u96e8\uff1b\u98ce\u66b4"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asto \u00b7 ry",
  },
  {
    id: "swim",
    word: "swim",
    syllables: ["swim"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move through water using the arms and legs", zh: "\u6e38\u6cf3" }],
    examples: [{ sentence: "He can swim." }],
    inflections: {
      pastTense: "swam",
      pastParticiple: "swum",
      thirdPerson: "swims",
      presentParticiple: "swiming"
    },
    phrases: [
      { phrase: "go for a swim", meaning: "\u53bb\u6e38\u6cf3" },
      { phrase: "swim across", meaning: "\u6e38\u8fc7" }
    ],
    similarWords: [{"word": "swimmer", "reason": "\u62d3\u5c55", "zh": "游泳者"}]
  },
  {
    id: "today",
    word: "today",
    syllables: ["to", "day"],
    partOfSpeech: "adv.",
    definitions: [{ en: "on this day", zh: "\u4eca\u5929\uff0c\u4eca\u65e5" }],
    examples: [{ sentence: "What day is it today?" }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ato \u00b7 day",
    antonyms: [{ word: "tomorrow", zh: "明天" }]
  },
  {
    id: "watch",
    word: "watch",
    syllables: ["watch"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look at something", zh: "\u770b\uff0c\u89c2\u770b" }],
    examples: [{ sentence: "They watch a movie." }],
    inflections: {
      pastTense: "watched",
      pastParticiple: "watched",
      thirdPerson: "watches",
      presentParticiple: "watching"
    },
    phrases: [
      { phrase: "watch TV", meaning: "\u770b\u7535\u89c6" },
      { phrase: "watch out", meaning: "\u5c0f\u5fc3" },
      { phrase: "keep watch", meaning: "\u653e\u54e8" }
    ],
    similarWords: [{"word": "match", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4"}, {"word": "catch", "reason": "\u5f62\u8fd1", "zh": "\u63a5\u4f4f\uff0c\u6293\u4f4f"}],
  },
  {
    id: "worry",
    word: "worry",
    syllables: ["worry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to feel troubled about something", zh: "\u62c5\u5fc3\uff0c\u5fe7\u8651" }],
    examples: [{ sentence: "She always worries before a test." }],
    inflections: {
      pastTense: "worried",
      pastParticiple: "worried",
      thirdPerson: "worries",
      presentParticiple: "worrying"
    },
    phrases: [
      { phrase: "worry about", meaning: "\u62c5\u5fc3" },
      { phrase: "don't worry", meaning: "\u522b\u62c5\u5fc3" }
    ],
    similarWords: [{"word": "hurry", "reason": "\u5f62\u8fd1", "zh": "\u8d76\u7d27"}, {"word": "carry", "reason": "\u5f62\u8fd1", "zh": "\u643a\u5e26\uff0c\u642c\u8fd0"}],
    synonyms: [{"word": "fret", "zh": "烦恼"}]
  },
  {
    id: "able",
    word: "able",
    syllables: ["a", "ble"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having enough skill to do something", zh: "\u80fd\u591f\u7684\uff0c\u6709\u80fd\u529b\u7684" }],
    examples: [{ sentence: "She is able to swim." }],
    inflections: {
      comparative: "abler",
    },
    phrases: [
      { phrase: "be able to", meaning: "\u80fd\u591f" }
    ],
    rootAffix: { explanation: "ab-\u79bb\u5f00 + -able \u80fd = \u80fd\u79bb\u5f00\u7684\u2192\u6709\u80fd\u529b\u7684" },
    similarWords: [{"word": "table", "reason": "\u5f62\u8fd1", "zh": "\u684c\u5b50\uff0c\u8868\u683c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aab-\u79bb\u5f00 + -able \u80fd = \u80fd\u79bb\u5f00\u7684\u2192\u6709\u80fd\u529b\u7684",
  },
  {
    id: "alone",
    word: "alone",
    syllables: ["a", "lone"],
    partOfSpeech: "adj.",
    definitions: [{ en: "without others", zh: "\u72ec\u81ea\u7684\uff0c\u5355\u72ec\u7684" }],
    examples: [{ sentence: "She cries when she is alone." }],
    inflections: {
      comparative: "aloner",
    },
    phrases: [
      { phrase: "leave alone", meaning: "\u4e0d\u6253\u6270" },
      { phrase: "all alone", meaning: "\u72ec\u81ea" }
    ],
    similarWords: [{"word": "stone", "reason": "\u5f62\u8fd1", "zh": "\u77f3\u5934\uff1b\u77f3\u5757"}, {"word": "phone", "reason": "\u5f62\u8fd1", "zh": "\u7535\u8bdd"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aa \u00b7 lone",
    synonyms: [{"word": "lonely", "zh": "孤独的"}],
    antonyms: [{ word: "together", zh: "一起" }]
  },
  {
    id: "animal",
    word: "animal",
    syllables: ["a", "ni", "mal"],
    partOfSpeech: "n.",
    definitions: [{ en: "a living thing that is not a plant or person", zh: "\u52a8\u7269" }],
    examples: [{ sentence: "The boy watches the animal." }],
    inflections: {
      plural: "animals"
    },
    phrases: [
      { phrase: "wild animal", meaning: "\u91ce\u751f\u52a8\u7269" },
      { phrase: "pet animal", meaning: "\u5ba0\u7269" }
    ],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aa \u00b7 ni \u00b7 mal"
  },
  {
    id: "become",
    word: "become",
    syllables: ["be", "come"],
    partOfSpeech: "v.",
    definitions: [{ en: "to change or grow", zh: "\u53d8\u6210\uff0c\u6210\u4e3a" }],
    examples: [{ sentence: "The child wants to become a teacher." }],
    inflections: {
      pastTense: "became",
      pastParticiple: "become",
      thirdPerson: "becomes",
      presentParticiple: "becoming"
    },
    phrases: [
      { phrase: "become a", meaning: "\u6210\u4e3a" }
    ],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1abe \u00b7 come",
  },
  {
    id: "call",
    word: "call",
    syllables: ["call"],
    partOfSpeech: "v.",
    definitions: [{ en: "to shout", zh: "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd" }],
    examples: [{ sentence: "Dad calls my name." }],
    inflections: {
      pastTense: "called",
      pastParticiple: "called",
      thirdPerson: "calls",
      presentParticiple: "calling"
    },
    phrases: [
      { phrase: "call back", meaning: "\u56de\u7535\u8bdd" },
      { phrase: "call for", meaning: "\u8981\u6c42" },
      { phrase: "give a call", meaning: "\u6253\u7535\u8bdd" }
    ],
    similarWords: [{"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}, {"word": "ball", "reason": "\u5f62\u8fd1", "zh": "\u7403"}],
  },
  {
    id: "catch",
    word: "catch",
    syllables: ["catch"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stop something and hold it with your hands", zh: "\u63a5\u4f4f\uff0c\u6293\u4f4f" }],
    examples: [{ sentence: "He catches the ball." }],
    inflections: {
      pastTense: "caught",
      pastParticiple: "caught",
      thirdPerson: "catches",
      presentParticiple: "catching"
    },
    phrases: [
      { phrase: "catch up", meaning: "\u8d76\u4e0a" },
      { phrase: "catch a cold", meaning: "\u611f\u5192" },
      { phrase: "catch fire", meaning: "\u7740\u706b" }
    ],
    synonyms: [{"word": "capture", "zh": "捕获；夺取"}, {"word": "seize", "zh": "抓住；夺取"}, {"word": "grasp", "zh": "抓住；掌握"}],
    similarWords: [{"word": "watch", "reason": "\u5f62\u8fd1", "zh": "\u770b\uff0c\u89c2\u770b"}, {"word": "match", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4"}],
    antonyms: [{ word: "miss", zh: "错过" }, { word: "throw", zh: "扔" }]
  },
  {
    id: "country",
    word: "country",
    syllables: ["coun", "try"],
    partOfSpeech: "n.",
    definitions: [{ en: "the area outside of a town", zh: "\u56fd\u5bb6\uff0c\u4e61\u6751" }],
    examples: [{ sentence: "The farm is in the country." }],
    inflections: {
      plural: "countries"
    },
    rootAffix: { explanation: "contra-\u5bf9\u9762 = \u5bf9\u9762\u7684\u5730\u65b9\u2192\u56fd\u5bb6/\u4e61\u6751" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acontra-\u5bf9\u9762 = \u5bf9\u9762\u7684\u5730\u65b9\u2192\u56fd\u5bb6/\u4e61\u6751",
    phrases: [{ phrase: "home country", meaning: "祖国" }, { phrase: "in the country", meaning: "在乡村" }],
    similarWords: [{"word": "countryside", "reason": "\u62d3\u5c55", "zh": "乡村"}]
  },
  {
    id: "monkey",
    word: "monkey",
    syllables: ["mon", "key"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small animal with a long tail", zh: "\u7334\u5b50" }],
    examples: [{ sentence: "The monkey is in the tree." }],
    inflections: {
      plural: "monkeys"
    },
    rootAffix: { explanation: "monkey\u7334\u5b50 = \u7334\u5b50" },
    similarWords: [{"word": "money", "reason": "\u5f62\u8fd1", "zh": "\u94b1"}],
    mnemonics: "\"mon\" \u50cf\"\u5fd9\"\uff0c\u7334\u5b50\u603b\u662f\u5fd9\u5fd9\u788c\u788c",
    phrases: [{ phrase: "little monkey", meaning: "小猴子" }, { phrase: "monkey king", meaning: "猴王" }]
  },
  {
    id: "thin",
    word: "thin",
    syllables: ["thin"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a small distance between the sides", zh: "\u8584\u7684\uff0c\u7626\u7684" }],
    examples: [{ sentence: "The laptop is thin." }],
    inflections: {
      comparative: "thiner",
      superlative: "thinest"
    },
    similarWords: [{"word": "think", "reason": "\u5f62\u8fd1", "zh": "\u60f3\uff0c\u601d\u8003"}],
    phrases: [{ phrase: "thin and thin", meaning: "很瘦" }, { phrase: "thin air", meaning: "稀薄的空气" }],
    antonyms: [{ word: "fat", zh: "胖的" }, { word: "thick", zh: "厚的" }]
  },
  {
    id: "word",
    word: "word",
    syllables: ["word"],
    partOfSpeech: "n.",
    definitions: [{ en: "letters put together that mean something", zh: "\u5355\u8bcd\uff0c\u8bcd\u8bed" }],
    examples: [{ sentence: "A story has many words." }],
    inflections: {
      plural: "words"
    },
    phrases: [
      { phrase: "in other words", meaning: "\u6362\u53e5\u8bdd\u8bf4" },
      { phrase: "keep one's word", meaning: "\u5b88\u4fe1\u7528" }
    ],
    rootAffix: { explanation: "word\u8bcd = \u5355\u8bcd" },
    similarWords: [{"word": "work", "reason": "\u5f62\u8fd1", "zh": "\u5de5\u4f5c"}, {"word": "wood", "reason": "\u5f62\u8fd1", "zh": "\u6728\u5934"}, {"word": "world", "reason": "\u5f62\u8fd1", "zh": "\u4e16\u754c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aword\u8bcd = \u5355\u8bcd",
  },
  {
    id: "baby",
    word: "baby",
    syllables: ["ba", "by"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very young child", zh: "\u5a74\u513f\uff0c\u5b9d\u5b9d" }],
    examples: [{ sentence: "The baby cries a lot." }],
    inflections: {
      plural: "babies"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aba \u00b7 by",
    phrases: [{ phrase: "baby girl", meaning: "女婴" }, { phrase: "baby boy", meaning: "男婴" }],
    similarWords: [{"word": "babysit", "reason": "\u62d3\u5c55", "zh": "照看婴儿"}]
  },
  {
    id: "clean",
    word: "clean",
    syllables: ["clean"],
    partOfSpeech: "v.",
    definitions: [{ en: "to remove dirt", zh: "\u6253\u626b\uff0c\u5e72\u51c0\u7684" }],
    examples: [{ sentence: "She cleans the floor." }],
    inflections: {
      pastTense: "cleaned",
      pastParticiple: "cleaned",
      thirdPerson: "cleans",
      presentParticiple: "cleaning"
    },
    phrases: [
      { phrase: "clean up", meaning: "\u6253\u626b\u5e72\u51c0" },
      { phrase: "clean the room", meaning: "\u6253\u626b\u623f\u95f4" }
    ],
    synonyms: [{"word": "tidy", "zh": "整洁的；整齐的"}, {"word": "neat", "zh": "整洁的；灵巧的"}, {"word": "spotless", "zh": "一尘不染的"}],
    similarWords: [{"word": "mean", "reason": "\u5f62\u8fd1", "zh": "\u610f\u601d\u662f"}, {"word": "clear", "reason": "\u5f62\u8fd1", "zh": "\u6e05\u695a\u7684"}],
    antonyms: [{ word: "dirty", zh: "脏的" }]
  },
  {
    id: "eat",
    word: "eat",
    syllables: ["eat"],
    partOfSpeech: "v.",
    definitions: [{ en: "to chew and swallow food", zh: "\u5403" }],
    examples: [{ sentence: "The students eat lunch." }],
    inflections: {
      pastTense: "ate",
      pastParticiple: "eaten",
      thirdPerson: "eats",
      presentParticiple: "eating"
    },
    phrases: [
      { phrase: "eat out", meaning: "\u51fa\u53bb\u5403\u996d" },
      { phrase: "eat up", meaning: "\u5403\u5149" }
    ],
    synonyms: [{"word": "consume", "zh": "消费；消耗"}, {"word": "devour", "zh": "狼吞虎咽"}, {"word": "feast", "zh": "盛宴；享受"}],
    similarWords: [{"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}, {"word": "beat", "reason": "\u5f62\u8fd1", "zh": "\u6253\uff1b\u51fb\u8d25\uff1b\u8282\u62cd"}],
  },
  {
    id: "enjoy",
    word: "enjoy",
    syllables: ["en", "joy"],
    partOfSpeech: "v.",
    definitions: [{ en: "to like", zh: "\u4eab\u53d7\uff0c\u559c\u6b22" }],
    examples: [{ sentence: "She enjoys art class." }],
    inflections: {
      pastTense: "enjoyed",
      pastParticiple: "enjoyed",
      thirdPerson: "enjoys",
      presentParticiple: "enjoying"
    },
    phrases: [
      { phrase: "enjoy doing", meaning: "\u559c\u6b22\u505a" },
      { phrase: "enjoy oneself", meaning: "\u73a9\u5f97\u5f00\u5fc3" }
    ],
    rootAffix: { explanation: "en-\u4f7f + joy\u5feb\u4e50 = \u4f7f\u5feb\u4e50\u2192\u4eab\u53d7" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aen-\u4f7f + joy\u5feb\u4e50 = \u4f7f\u5feb\u4e50\u2192\u4eab\u53d7",
    similarWords: [{"word": "enjoyable", "reason": "\u62d3\u5c55", "zh": "令人愉快的；有趣的"}],
    antonyms: [{ word: "dislike", zh: "不喜欢" }]
  },
  {
    id: "family",
    word: "family",
    syllables: ["fa", "mi", "ly"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group of people who are related", zh: "\u5bb6\u5ead\uff0c\u5bb6\u4eba" }],
    examples: [{ sentence: "My family is big." }],
    inflections: {
      plural: "families"
    },
    phrases: [
      { phrase: "family member", meaning: "\u5bb6\u5ead\u6210\u5458" },
      { phrase: "family name", meaning: "\u59d3" }
    ],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afa \u00b7 mi \u00b7 ly"
  },
  {
    id: "fruit",
    word: "fruit",
    syllables: ["fruit"],
    partOfSpeech: "n.",
    definitions: [{ en: "a food that grows on a tree or plant", zh: "\u6c34\u679c" }],
    examples: [{ sentence: "She eats fruit every day." }],
    inflections: {
      plural: "fruits"
    },
    phrases: [
      { phrase: "fresh fruit", meaning: "\u65b0\u9c9c\u6c34\u679c" },
      { phrase: "fruit juice", meaning: "\u679c\u6c41" }
    ],
    similarWords: [{"word": "fruitful", "reason": "\u62d3\u5c55", "zh": "富有成果的"}]
  },
  {
    id: "jump",
    word: "jump",
    syllables: ["jump"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go quickly up then down", zh: "\u8df3\uff0c\u8df3\u8dc3" }],
    examples: [{ sentence: "They jump into the water." }],
    inflections: {
      pastTense: "jumped",
      pastParticiple: "jumped",
      thirdPerson: "jumps",
      presentParticiple: "jumping"
    },
    phrases: [
      { phrase: "jump up", meaning: "\u8df3\u8d77\u6765" },
      { phrase: "jump into", meaning: "\u8df3\u8fdb" },
      { phrase: "jump rope", meaning: "\u8df3\u7ef3" }
    ],
    synonyms: [{"word": "leap", "zh": "跳跃"}, {"word": "hop", "zh": "蹦跳"}],
    similarWords: [{"word": "jumper", "reason": "\u62d3\u5c55", "zh": "跳跃者；套头衫"}]
  },
  {
    id: "kind",
    word: "kind",
    syllables: ["kind"],
    partOfSpeech: "n.",
    definitions: [{ en: "one of a group of common things", zh: "\u79cd\u7c7b\uff0c\u5584\u826f\u7684" }],
    examples: [{ sentence: "There are many kinds of apples." }],
    inflections: {
      plural: "kinds"
    },
    phrases: [
      { phrase: "kind of", meaning: "\u6709\u70b9" },
      { phrase: "a kind of", meaning: "\u4e00\u79cd" },
      { phrase: "all kinds of", meaning: "\u5404\u79cd\u5404\u6837\u7684" }
    ],
    synonyms: [{"word": "nice", "zh": "\u597d\u7684\uff0c\u53cb\u597d\u7684"}, {"word": "caring", "zh": "关心他人的"}, {"word": "gentle", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}],
    similarWords: [{"word": "blind", "reason": "\u5f62\u8fd1", "zh": "\u76f2\u7684\uff1b\u778e\u7684"}, {"word": "find", "reason": "\u5f62\u8fd1", "zh": "\u627e\u5230\uff0c\u53d1\u73b0"}, {"word": "mind", "reason": "\u5f62\u8fd1", "zh": "\u5934\u8111\uff1b\u4ecb\u610f"}],
    antonyms: [{ word: "mean", zh: "刻薄的" }, { word: "cruel", zh: "残忍的" }]
  },
  {
    id: "man",
    word: "man",
    syllables: ["man"],
    partOfSpeech: "n.",
    definitions: [{ en: "an adult male", zh: "\u7537\u4eba\uff0c\u4eba\u7c7b" }],
    examples: [{ sentence: "The man laughs at the funny story." }],
    inflections: {
      plural: "men"
    },
    similarWords: [{"word": "map", "reason": "\u5f62\u8fd1", "zh": "\u5730\u56fe"}, {"word": "fan", "reason": "\u5f62\u8fd1", "zh": "\u7c89\u4e1d"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
    phrases: [{ phrase: "old man", meaning: "老人" }, { phrase: "young man", meaning: "年轻人" }],
    antonyms: [{ word: "woman", zh: "女人" }]
  },
  {
    id: "parent",
    word: "parent",
    syllables: ["par", "ent"],
    partOfSpeech: "n.",
    definitions: [{ en: "a father or mother", zh: "\u7236\u4eb2\u6216\u6bcd\u4eb2\uff0c\u5bb6\u957f" }],
    examples: [{ sentence: "Their parents are nice." }],
    inflections: {
      plural: "parents"
    },
    similarWords: [{"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apar \u00b7 ent",
    phrases: [{ phrase: "single parent", meaning: "单亲" }, { phrase: "parent teacher", meaning: "家长老师" }]
  },
  {
    id: "address",
    word: "address",
    syllables: ["ad", "dress"],
    partOfSpeech: "n.",
    definitions: [{ en: "the words and numbers that direct an email or letter", zh: "\u5730\u5740" }],
    examples: [{ sentence: "My email address is fun54@yoohoo.com." }],
    inflections: {
      plural: "addresses"
    },
    similarWords: [{"word": "express", "reason": "\u5f62\u8fd1", "zh": "\u8868\u8fbe\uff1b\u5feb\u9012"}, {"word": "stress", "reason": "\u5f62\u8fd1", "zh": "\u538b\u529b\uff1b\u5f3a\u8c03"}, {"word": "princess", "reason": "\u5f62\u8fd1", "zh": "\u516c\u4e3b\uff1b\u738b\u5983"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aad \u00b7 dress",
    phrases: [{ phrase: "email address", meaning: "电子邮件地址" }, { phrase: "home address", meaning: "家庭地址" }]
  },
  {
    id: "afternoon",
    word: "afternoon",
    syllables: ["af", "ter", "noon"],
    partOfSpeech: "n.",
    definitions: [{ en: "the middle part of the day", zh: "\u4e0b\u5348" }],
    examples: [{ sentence: "He cleans his car in the afternoon." }],
    inflections: {
      plural: "afternoons"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aaf \u00b7 ter \u00b7 noon",
    phrases: [{ phrase: "in the afternoon", meaning: "在下午" }, { phrase: "good afternoon", meaning: "下午好" }]
  },
  {
    id: "come",
    word: "come",
    syllables: ["come"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get to a place", zh: "\u6765\uff0c\u5230\u6765" }],
    examples: [{ sentence: "Please come with me." }],
    inflections: {
      pastTense: "came",
      pastParticiple: "come",
      thirdPerson: "comes",
      presentParticiple: "coming"
    },
    phrases: [
      { phrase: "come in", meaning: "\u8fdb\u6765" },
      { phrase: "come back", meaning: "\u56de\u6765" },
      { phrase: "come from", meaning: "\u6765\u81ea" },
      { phrase: "come on", meaning: "\u52a0\u6cb9" }
    ],
    similarWords: [{"word": "home", "reason": "\u5f62\u8fd1", "zh": "\u5bb6\uff0c\u5bb6\u5ead"}],
  },
  {
    id: "home",
    word: "home",
    syllables: ["home"],
    partOfSpeech: "n.",
    definitions: [{ en: "a house or apartment", zh: "\u5bb6\uff0c\u5bb6\u5ead" }],
    examples: [{ sentence: "Their home has three bedrooms." }],
    inflections: {
      plural: "homes"
    },
    phrases: [
      { phrase: "at home", meaning: "\u5728\u5bb6" },
      { phrase: "go home", meaning: "\u56de\u5bb6" }
    ],
    similarWords: [{"word": "come", "reason": "\u5f62\u8fd1", "zh": "\u6765\uff0c\u5230\u6765"}, {"word": "hope", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b\uff0c\u671f\u5f85"}, {"word": "hole", "reason": "\u5f62\u8fd1", "zh": "\u6d1e\uff1b\u5b54\uff1b\u5751"}],
  },
  {
    id: "letter",
    word: "letter",
    syllables: ["let", "ter"],
    partOfSpeech: "n.",
    definitions: [{ en: "a message in writing", zh: "\u4fe1\uff0c\u5b57\u6bcd" }],
    examples: [{ sentence: "She often writes funny letters to her family." }],
    inflections: {
      plural: "letters"
    },
    phrases: [
      { phrase: "write a letter", meaning: "\u5199\u4fe1" },
      { phrase: "capital letter", meaning: "\u5927\u5199\u5b57\u6bcd" }
    ],
    similarWords: [{"word": "matter", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u60c5"}, {"word": "theater", "reason": "\u5f62\u8fd1", "zh": "\u5267\u9662"}, {"word": "water", "reason": "\u5f62\u8fd1", "zh": "\u6c34"}, {"word": "let", "reason": "\u62d3\u5c55", "zh": "\u8ba9\uff0c\u5141\u8bb8"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1alet \u00b7 ter",
  },
  {
    id: "lunch",
    word: "lunch",
    syllables: ["lunch"],
    partOfSpeech: "n.",
    definitions: [{ en: "the middle meal of the day", zh: "\u5348\u9910\uff0c\u5348\u996d" }],
    examples: [{ sentence: "She eats a sandwich for lunch every day." }],
    inflections: {
      plural: "lunches"
    },
    phrases: [
      { phrase: "have lunch", meaning: "\u5403\u5348\u9910" },
      { phrase: "lunch time", meaning: "\u5348\u9910\u65f6\u95f4" }
    ]
  },
  {
    id: "make",
    word: "make",
    syllables: ["make"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cause to be", zh: "\u505a\uff0c\u5236\u9020" }],
    examples: [{ sentence: "My parents make good pies." }],
    inflections: {
      pastTense: "made",
      pastParticiple: "made",
      thirdPerson: "makes",
      presentParticiple: "making"
    },
    phrases: [
      { phrase: "make a cake", meaning: "\u505a\u86cb\u7cd5" },
      { phrase: "make money", meaning: "\u8d5a\u94b1" },
      { phrase: "make friends", meaning: "\u4ea4\u670b\u53cb" },
      { phrase: "make sure", meaning: "\u786e\u4fdd" }
    ],
    synonyms: [{"word": "create", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}, {"word": "build", "zh": "\u5efa\u9020"}, {"word": "construct", "zh": "建造；构建"}],
    similarWords: [{"word": "wake", "reason": "\u5f62\u8fd1", "zh": "\u9192\u6765"}, {"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}, {"word": "take", "reason": "\u5f62\u8fd1", "zh": "\u62ff"}],
  },
  {
    id: "need",
    word: "need",
    syllables: ["need"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have to get or have something", zh: "\u9700\u8981" }],
    examples: [{ sentence: "We need water to live." }],
    inflections: {
      pastTense: "needed",
      pastParticiple: "needed",
      thirdPerson: "needs",
      presentParticiple: "needing"
    },
    phrases: [
      { phrase: "need to do", meaning: "\u9700\u8981\u505a" },
      { phrase: "in need", meaning: "\u6709\u9700\u8981" },
      { phrase: "no need", meaning: "\u4e0d\u9700\u8981" }
    ],
    similarWords: [{"word": "feed", "reason": "\u5f62\u8fd1", "zh": "\u5582"}, {"word": "speed", "reason": "\u5f62\u8fd1", "zh": "\u901f\u5ea6\uff1b\u52a0\u901f"}],
  },
  {
    id: "people",
    word: "people",
    syllables: ["peo", "ple"],
    partOfSpeech: "n.",
    definitions: [{ en: "human beings", zh: "\u4eba\u4eec\uff0c\u4eba\u6c11" }],
    examples: [{ sentence: "There are a lot of people here." }],
    inflections: {
      plural: "peoples"
    },
    phrases: [
      { phrase: "old people", meaning: "\u8001\u4eba" },
      { phrase: "young people", meaning: "\u5e74\u8f7b\u4eba" },
      { phrase: "many people", meaning: "\u5f88\u591a\u4eba" }
    ],
    similarWords: [{"word": "simple", "reason": "\u5f62\u8fd1", "zh": "\u7b80\u5355\u7684\uff1b\u6734\u7d20\u7684"}, {"word": "example", "reason": "\u5f62\u8fd1", "zh": "\u4f8b\u5b50"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apeo \u00b7 ple",
  },
  {
    id: "start",
    word: "start",
    syllables: ["start"],
    partOfSpeech: "v.",
    definitions: [{ en: "to begin", zh: "\u5f00\u59cb\uff0c\u51fa\u53d1" }],
    examples: [{ sentence: "The man starts to run." }],
    inflections: {
      pastTense: "started",
      pastParticiple: "started",
      thirdPerson: "starts",
      presentParticiple: "starting"
    },
    phrases: [
      { phrase: "start to do", meaning: "\u5f00\u59cb\u505a" },
      { phrase: "start with", meaning: "\u4ee5...\u5f00\u59cb" }
    ],
    similarWords: [{"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "smart", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u667a\u80fd\u7684"}, {"word": "heart", "reason": "\u5f62\u8fd1", "zh": "\u5fc3\u810f"}],
    antonyms: [{ word: "finish", zh: "结束" }]
  },
  {
    id: "cook",
    word: "cook",
    syllables: ["cook"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use heat to make food", zh: "\u505a\u996d\uff0c\u70f9\u996a\uff0c\u53a8\u5e08" }],
    examples: [{ sentence: "Dad cooks dinner for us." }],
    inflections: {
      pastTense: "cooked",
      pastParticiple: "cooked",
      thirdPerson: "cooks",
      presentParticiple: "cooking"
    },
    phrases: [
      { phrase: "cook dinner", meaning: "\u505a\u665a\u996d" },
      { phrase: "good cook", meaning: "\u597d\u53a8\u5e08" }
    ],
    similarWords: [{"word": "look", "reason": "\u5f62\u8fd1", "zh": "\u770b\uff0c\u770b\u8d77\u6765"}, {"word": "book", "reason": "\u5f62\u8fd1", "zh": "\u4e66"}, {"word": "cool", "reason": "\u5f62\u8fd1", "zh": "\u51c9\u723d\u7684\uff1b\u9177\u7684"}],
  },
  {
    id: "day",
    word: "day",
    syllables: ["day"],
    partOfSpeech: "n.",
    definitions: [{ en: "one of the seven parts of a week", zh: "\u5929\uff0c\u65e5\uff0c\u767d\u5929" }],
    examples: [{ sentence: "Which day do you have art class?" }],
    inflections: {
      plural: "days"
    },
    phrases: [
      { phrase: "all day", meaning: "\u6574\u5929" },
      { phrase: "every day", meaning: "\u6bcf\u5929" },
      { phrase: "one day", meaning: "\u6709\u4e00\u5929" },
      { phrase: "day and night", meaning: "\u65e5\u591c" }
    ],
    similarWords: [{"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "pay", "reason": "\u5f62\u8fd1", "zh": "\u4ed8\u94b1\uff0c\u652f\u4ed8"}, {"word": "dry", "reason": "\u5f62\u8fd1", "zh": "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5"}],
    antonyms: [{ word: "night", zh: "夜晚" }]
  },
  {
    id: "drink",
    word: "drink",
    syllables: ["drink"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put a liquid in your mouth and swallow it", zh: "\u559d\uff0c\u996e\u6599" }],
    examples: [{ sentence: "What kind of juice do you want to drink?" }],
    inflections: {
      pastTense: "drank",
      pastParticiple: "drunk",
      thirdPerson: "drinks",
      presentParticiple: "drinking"
    },
    phrases: [
      { phrase: "drink water", meaning: "\u559d\u6c34" },
      { phrase: "have a drink", meaning: "\u559d\u4e00\u676f" },
      { phrase: "soft drink", meaning: "\u8f6f\u996e\u6599" }
    ],
    similarWords: [{"word": "think", "reason": "\u5f62\u8fd1", "zh": "\u60f3\uff0c\u601d\u8003"}],
  },
  {
    id: "front",
    word: "front",
    syllables: ["front"],
    partOfSpeech: "n.",
    definitions: [{ en: "the forward part of something", zh: "\u524d\u9762\uff0c\u524d\u65b9" }],
    examples: [{ sentence: "The boy stands at the front of the classroom." }],
    inflections: {
      plural: "fronts"
    },
    phrases: [
      { phrase: "in front of", meaning: "\u5728...\u524d\u9762" },
      { phrase: "front door", meaning: "\u524d\u95e8" }
    ],
    rootAffix: { explanation: "front\u989d\u5934/\u524d\u9762 = \u524d\u9762" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afront\u989d\u5934/\u524d\u9762 = \u524d\u9762",
    antonyms: [{ word: "back", zh: "后面的" }]
  },
  {
    id: "great",
    word: "great",
    syllables: ["great"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very good", zh: "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684" }],
    examples: [{ sentence: "Nick does a great job on tests!" }],
    inflections: {
      comparative: "greater",
      superlative: "greatest"
    },
    phrases: [
      { phrase: "great idea", meaning: "\u597d\u4e3b\u610f" },
      { phrase: "great job", meaning: "\u5e72\u5f97\u597d" },
      { phrase: "great fun", meaning: "\u5f88\u6709\u8da3" }
    ],
    similarWords: [{"word": "treat", "reason": "\u5f62\u8fd1", "zh": "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597"}, {"word": "repeat", "reason": "\u5f62\u8fd1", "zh": "\u91cd\u590d"}, {"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}],
    synonyms: [{"word": "wonderful", "zh": "精彩的"}, {"word": "fantastic", "zh": "极好的"}]
  },
  {
    id: "play",
    word: "play",
    syllables: ["play"],
    partOfSpeech: "v.",
    definitions: [{ en: "to do a sport or game", zh: "\u73a9\uff0c\u73a9\u800d\uff0c\u64ad\u653e" }],
    examples: [{ sentence: "We are able to play soccer after school today." }],
    inflections: {
      pastTense: "played",
      pastParticiple: "played",
      thirdPerson: "plays",
      presentParticiple: "playing"
    },
    phrases: [
      { phrase: "play with", meaning: "\u548c...\u73a9" },
      { phrase: "play games", meaning: "\u73a9\u6e38\u620f" },
      { phrase: "play sports", meaning: "\u505a\u8fd0\u52a8" }
    ],
    similarWords: [{"word": "lay", "reason": "\u5f62\u8fd1", "zh": "\u653e\u7f6e\uff1b\u4ea7\u5375"}, {"word": "plan", "reason": "\u5f62\u8fd1", "zh": "\u8ba1\u5212"}, {"word": "pay", "reason": "\u5f62\u8fd1", "zh": "\u4ed8\u94b1\uff0c\u652f\u4ed8"}],
  },
  {
    id: "see",
    word: "see",
    syllables: ["see"],
    partOfSpeech: "v.",
    definitions: [{ en: "to notice with your eyes", zh: "\u770b\u89c1\uff0c\u770b\u5230" }],
    examples: [{ sentence: "He sees the baby smile." }],
    inflections: {
      pastTense: "saw",
      pastParticiple: "seen",
      thirdPerson: "sees",
      presentParticiple: "seeing"
    },
    phrases: [
      { phrase: "see you", meaning: "\u518d\u89c1" },
      { phrase: "let me see", meaning: "\u8ba9\u6211\u60f3\u60f3" }
    ],
    similarWords: [{"word": "sea", "reason": "\u5f62\u8fd1", "zh": "\u6d77"}, {"word": "set", "reason": "\u5f62\u8fd1", "zh": "\u8bbe\u7f6e\uff1b\u4e00\u5957"}, {"word": "seem", "reason": "\u5f62\u8fd1", "zh": "\u4f3c\u4e4e\uff1b\u597d\u50cf"}],
  },
  {
    id: "send",
    word: "send",
    syllables: ["send"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cause something to go somewhere", zh: "\u53d1\u9001\uff0c\u5bc4\u51fa" }],
    examples: [{ sentence: "I send about ten emails a day." }],
    inflections: {
      pastTense: "sent",
      pastParticiple: "sent",
      thirdPerson: "sends",
      presentParticiple: "sending"
    },
    phrases: [
      { phrase: "send for", meaning: "\u6d3e\u4eba\u53bb\u8bf7" },
      { phrase: "send back", meaning: "\u9001\u56de" },
      { phrase: "send out", meaning: "\u53d1\u51fa" }
    ],
    similarWords: [{"word": "end", "reason": "\u5f62\u8fd1", "zh": "\u7ed3\u675f\uff0c\u672b\u5c3e"}, {"word": "spend", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}, {"word": "sand", "reason": "\u5f62\u8fd1", "zh": "\u6c99\u5b50\uff1b\u6c99\u7c92"}],
    antonyms: [{ word: "receive", zh: "收到" }]
  },
  {
    id: "small",
    word: "small",
    syllables: ["small"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not large", zh: "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684" }],
    examples: [{ sentence: "Betty has a small dog." }],
    inflections: {
      comparative: "smaller",
      superlative: "smallest"
    },
    phrases: [
      { phrase: "small change", meaning: "\u96f6\u94b1" },
      { phrase: "small town", meaning: "\u5c0f\u9547" }
    ],
    synonyms: [{"word": "little", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "tiny", "zh": "\u6781\u5c0f\u7684"}, {"word": "mini", "zh": "微型的；迷你"}],
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}],
    antonyms: [{ word: "big", zh: "大的" }]
  },
  {
    id: "time",
    word: "time",
    syllables: ["time"],
    partOfSpeech: "n.",
    definitions: [{ en: "a certain minute or hour shown on a clock", zh: "\u65f6\u95f4\uff0c\u6b21\u6570" }],
    examples: [{ sentence: "What time is it now?" }],
    inflections: {
      plural: "times"
    },
    phrases: [
      { phrase: "on time", meaning: "\u51c6\u65f6" },
      { phrase: "in time", meaning: "\u53ca\u65f6" },
      { phrase: "have a good time", meaning: "\u73a9\u5f97\u5f00\u5fc3" }
    ],
    similarWords: [{"word": "tie", "reason": "\u5f62\u8fd1", "zh": "\u7cfb"}],
  },
  {
    id: "again",
    word: "again",
    syllables: ["a", "gain"],
    partOfSpeech: "adv.",
    definitions: [{ en: "another time", zh: "\u518d\u6b21\uff0c\u53c8" }],
    examples: [{ sentence: "He needs to write the letter again." }],
    phrases: [
      { phrase: "again and again", meaning: "\u53cd\u590d\u5730" },
      { phrase: "once again", meaning: "\u518d\u4e00\u6b21" }
    ],
    similarWords: [{"word": "remain", "reason": "\u5f62\u8fd1", "zh": "\u4fdd\u6301\uff1b\u5269\u4e0b"}, {"word": "train", "reason": "\u5f62\u8fd1", "zh": "\u706b\u8f66"}, {"word": "brain", "reason": "\u5f62\u8fd1", "zh": "\u5927\u8111\uff1b\u667a\u529b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aa \u00b7 gain",
  },
  {
    id: "bad",
    word: "bad",
    syllables: ["bad"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not good", zh: "\u574f\u7684\uff0c\u4e0d\u597d\u7684" }],
    examples: [{ sentence: "The fruit is bad." }],
    inflections: {
      comparative: "worse",
      superlative: "worst"
    },
    phrases: [
      { phrase: "bad weather", meaning: "\u574f\u5929\u6c14" },
      { phrase: "bad habit", meaning: "\u574f\u4e60\u60ef" },
      { phrase: "not bad", meaning: "\u4e0d\u9519" }
    ],
    synonyms: [{"word": "terrible", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}, {"word": "awful", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u574f\u7684"}, {"word": "horrible", "zh": "可怕的；恐怖的"}],
    similarWords: [{"word": "sad", "reason": "\u5f62\u8fd1", "zh": "\u4f24\u5fc3\u7684\uff0c\u96be\u8fc7\u7684"}, {"word": "bag", "reason": "\u5f62\u8fd1", "zh": "\u5305"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
    antonyms: [{ word: "good", zh: "好的" }]
  },
  {
    id: "buy",
    word: "buy",
    syllables: ["buy"],
    partOfSpeech: "v.",
    definitions: [{ en: "to pay for with money", zh: "\u4e70\uff0c\u8d2d\u4e70" }],
    examples: [{ sentence: "She buys a small gift." }],
    inflections: {
      pastTense: "bought",
      pastParticiple: "bought",
      thirdPerson: "buys",
      presentParticiple: "buyying"
    },
    phrases: [
      { phrase: "buy for", meaning: "\u4e3a...\u4e70" },
      { phrase: "buy from", meaning: "\u4ece...\u4e70" }
    ],
    similarWords: [{"word": "boy", "reason": "\u5f62\u8fd1", "zh": "\u7537\u5b69"}, {"word": "busy", "reason": "\u5f62\u8fd1", "zh": "\u5fd9\u7684"}],
    antonyms: [{ word: "sell", zh: "卖" }]
  },
  {
    id: "end",
    word: "end",
    syllables: ["end"],
    partOfSpeech: "n.",
    definitions: [{ en: "the last part", zh: "\u7ed3\u675f\uff0c\u672b\u5c3e" }],
    examples: [{ sentence: "Some people cry at the end of a movie." }],
    inflections: {
      plural: "ends"
    },
    phrases: [
      { phrase: "at the end of", meaning: "\u5728...\u672b\u5c3e" },
      { phrase: "in the end", meaning: "\u6700\u7ec8" },
      { phrase: "end up", meaning: "\u6700\u7ec8\u6210\u4e3a" }
    ],
    similarWords: [{"word": "send", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u9001\uff0c\u5bc4\u51fa"}]
  },
  {
    id: "find",
    word: "find",
    syllables: ["find"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look for and see something", zh: "\u627e\u5230\uff0c\u53d1\u73b0" }],
    examples: [{ sentence: "He finds his lunch in the bag." }],
    inflections: {
      pastTense: "found",
      pastParticiple: "found",
      thirdPerson: "finds",
      presentParticiple: "finding"
    },
    phrases: [
      { phrase: "find out", meaning: "\u627e\u51fa" },
      { phrase: "find one's way", meaning: "\u627e\u5230\u8def" }
    ],
    synonyms: [{"word": "discover", "zh": "\u53d1\u73b0\uff1b\u53d1\u89c9"}, {"word": "locate", "zh": "定位；找到"}, {"word": "uncover", "zh": "揭开；发现"}],
    similarWords: [{"word": "blind", "reason": "\u5f62\u8fd1", "zh": "\u76f2\u7684\uff1b\u778e\u7684"}, {"word": "kind", "reason": "\u5f62\u8fd1", "zh": "\u79cd\u7c7b\uff0c\u5584\u826f\u7684"}, {"word": "mind", "reason": "\u5f62\u8fd1", "zh": "\u5934\u8111\uff1b\u4ecb\u610f"}]
  },
  {
    id: "friend",
    word: "friend",
    syllables: ["friend"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person you enjoy being with", zh: "\u670b\u53cb" }],
    examples: [{ sentence: "He plays baseball with his friends in the afternoon." }],
    inflections: {
      plural: "friends"
    },
    phrases: [
      { phrase: "make friends", meaning: "\u4ea4\u670b\u53cb" },
      { phrase: "best friend", meaning: "\u6700\u597d\u7684\u670b\u53cb" }
    ],
    similarWords: [{"word": "attend", "reason": "\u5f62\u8fd1", "zh": "\u53c2\u52a0\uff1b\u51fa\u5e2d"}, {"word": "intend", "reason": "\u5f62\u8fd1", "zh": "\u6253\u7b97\uff1b\u8ba1\u5212"}, {"word": "spend", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}],
  },
  {
    id: "say",
    word: "say",
    syllables: ["say"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell", zh: "\u8bf4\uff0c\u8bb2" }],
    examples: [{ sentence: "Please say your address again." }],
    inflections: {
      pastTense: "said",
      pastParticiple: "said",
      thirdPerson: "says",
      presentParticiple: "sayying"
    },
    phrases: [
      { phrase: "say hello to", meaning: "\u5411...\u95ee\u597d" },
      { phrase: "say goodbye", meaning: "\u8bf4\u518d\u89c1" }
    ],
    similarWords: [{"word": "day", "reason": "\u5f62\u8fd1", "zh": "\u5929\uff0c\u65e5\uff0c\u767d\u5929"}, {"word": "pay", "reason": "\u5f62\u8fd1", "zh": "\u4ed8\u94b1\uff0c\u652f\u4ed8"}, {"word": "sad", "reason": "\u5f62\u8fd1", "zh": "\u4f24\u5fc3\u7684\uff0c\u96be\u8fc7\u7684"}],
  },
  {
    id: "speak",
    word: "speak",
    syllables: ["speak"],
    partOfSpeech: "v.",
    definitions: [{ en: "to talk", zh: "\u8bf4\u8bdd\uff0c\u8bb2" }],
    examples: [{ sentence: "The teacher speaks to the student." }],
    inflections: {
      pastTense: "spoke",
      pastParticiple: "spoken",
      thirdPerson: "speaks",
      presentParticiple: "speaking"
    },
    phrases: [
      { phrase: "speak English", meaning: "\u8bf4\u82f1\u8bed" },
      { phrase: "speak to", meaning: "\u5bf9...\u8bf4\u8bdd" },
      { phrase: "speak out", meaning: "\u5927\u58f0\u8bf4" }
    ],
    similarWords: [{"word": "weak", "reason": "\u5f62\u8fd1", "zh": "\u865a\u5f31\u7684\uff0c\u5f31\u7684"}, {"word": "break", "reason": "\u5f62\u8fd1", "zh": "\u6253\u7834\uff0c\u5f04\u788e"}],
  },
  {
    id: "sweet",
    word: "sweet",
    syllables: ["sweet"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of sugar", zh: "\u751c\u7684\uff0c\u751c\u871c\u7684" }],
    examples: [{ sentence: "She likes to eat sweet snacks." }],
    inflections: {
      comparative: "sweeter",
      superlative: "sweetest"
    },
    phrases: [
      { phrase: "sweet food", meaning: "\u751c\u98df" },
      { phrase: "sweet dream", meaning: "\u597d\u68a6" },
      { phrase: "sweet smile", meaning: "\u751c\u7f8e\u5fae\u7b11" }
    ],
    similarWords: [{"word": "sheet", "reason": "\u5f62\u8fd1", "zh": "\u5e8a\u5355\uff1b\u7eb8\u5f20\uff1b\u7247"}, {"word": "meet", "reason": "\u5f62\u8fd1", "zh": "\u9047\u89c1\uff0c\u89c1\u9762"}, {"word": "street", "reason": "\u5f62\u8fd1", "zh": "\u8857\u9053"}],
    antonyms: [{ word: "sour", zh: "酸的" }]
  },
  {
    id: "true",
    word: "true",
    syllables: ["true"],
    partOfSpeech: "adj.",
    definitions: [{ en: "correct", zh: "\u771f\u7684\uff0c\u6b63\u786e\u7684" }],
    examples: [{ sentence: "Is it true that you have a monkey?" }],
    inflections: {
      comparative: "truer",
    },
    phrases: [
      { phrase: "come true", meaning: "\u5b9e\u73b0" },
      { phrase: "be true to", meaning: "\u5bf9...\u771f\u8bda" }
    ],
    similarWords: [{"word": "tree", "reason": "\u5f62\u8fd1", "zh": "\u6811"}],
    antonyms: [{ word: "false", zh: "假的" }]
  },
  {
    id: "answer",
    word: "answer",
    syllables: ["an", "swer"],
    partOfSpeech: "n.",
    definitions: [{ en: "what you say or write when someone asks a question", zh: "\u56de\u7b54\uff0c\u7b54\u6848" }],
    examples: [{ sentence: "Karen is able to give the right answers." }],
    inflections: {
      plural: "answers"
    },
    phrases: [
      { phrase: "answer the question", meaning: "\u56de\u7b54\u95ee\u9898" },
      { phrase: "answer the phone", meaning: "\u63a5\u7535\u8bdd" }
    ],
    similarWords: [{"word": "tower", "reason": "\u5f62\u8fd1", "zh": "\u5854\uff1b\u9ad8\u697c"}, {"word": "power", "reason": "\u5f62\u8fd1", "zh": "\u529b\u91cf\uff1b\u7535\u529b"}, {"word": "flower", "reason": "\u5f62\u8fd1", "zh": "\u82b1\uff0c\u82b1\u6735"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aan \u00b7 swer",
    antonyms: [{ word: "ask", zh: "问" }]
  },
  {
    id: "learn",
    word: "learn",
    syllables: ["learn"],
    partOfSpeech: "v.",
    definitions: [{ en: "to come to know", zh: "\u5b66\u4e60\uff0c\u5b66\u4f1a" }],
    examples: [{ sentence: "He learns how to make pizza." }],
    inflections: {
      pastTense: "learned/learnt",
      pastParticiple: "learned/learnt",
      thirdPerson: "learns",
      presentParticiple: "learning"
    },
    phrases: [
      { phrase: "learn from", meaning: "\u5411...\u5b66\u4e60" },
      { phrase: "learn about", meaning: "\u4e86\u89e3" },
      { phrase: "learn to do", meaning: "\u5b66\u4f1a\u505a" }
    ],
    rootAffix: { explanation: "learn\u5b66\u4e60 = \u5b66\u4e60" },
    synonyms: [{"word": "study", "zh": "\u5b66\u4e60\uff0c\u7814\u7a76"}, {"word": "master", "zh": "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1"}, {"word": "grasp", "zh": "抓住；掌握"}],
    similarWords: [{"word": "warn", "reason": "\u5f62\u8fd1", "zh": "\u8b66\u544a\uff1b\u63d0\u9192"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1alearn\u5b66\u4e60 = \u5b66\u4e60",
    antonyms: [{ word: "teach", zh: "教" }]
  },
  {
    id: "like",
    word: "like",
    syllables: ["like"],
    partOfSpeech: "v.",
    definitions: [{ en: "to enjoy", zh: "\u559c\u6b22\uff0c\u50cf" }],
    examples: [{ sentence: "He likes to drink milk." }],
    inflections: {
      pastTense: "liked",
      pastParticiple: "liked",
      thirdPerson: "likes",
      presentParticiple: "liking"
    },
    phrases: [
      { phrase: "look like", meaning: "\u770b\u8d77\u6765\u50cf" },
      { phrase: "feel like", meaning: "\u60f3\u8981" },
      { phrase: "would like", meaning: "\u60f3\u8981" }
    ],
    synonyms: [{"word": "enjoy", "zh": "\u4eab\u53d7\uff0c\u559c\u6b22"}, {"word": "love", "zh": "\u7231\uff0c\u559c\u6b22"}, {"word": "adore", "zh": "崇拜；爱慕"}],
    similarWords: [{"word": "life", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6d3b\uff0c\u751f\u547d"}, {"word": "lake", "reason": "\u5f62\u8fd1", "zh": "\u6e56"}, {"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}],
    antonyms: [{ word: "dislike", zh: "不喜欢" }]
  },
  {
    id: "long",
    word: "long",
    syllables: ["long"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not short", zh: "\u957f\u7684\uff0c\u957f\u4e45\u7684" }],
    examples: [{ sentence: "That is a long word!" }],
    inflections: {
      comparative: "longer",
      superlative: "longest"
    },
    phrases: [
      { phrase: "long time", meaning: "\u957f\u65f6\u95f4" },
      { phrase: "long ago", meaning: "\u5f88\u4e45\u4ee5\u524d" },
      { phrase: "as long as", meaning: "\u53ea\u8981" },
      { phrase: "no longer", meaning: "\u4e0d\u518d" }
    ],
    similarWords: [{"word": "wrong", "reason": "\u5f62\u8fd1", "zh": "\u9519\u8bef\u7684\uff0c\u4e0d\u5bf9\u7684"}],
    antonyms: [{ word: "short", zh: "短的" }]
  },
  {
    id: "minute",
    word: "minute",
    syllables: ["min", "ute"],
    partOfSpeech: "n.",
    definitions: [{ en: "sixty seconds", zh: "\u5206\u949f" }],
    examples: [{ sentence: "Class starts in five minutes." }],
    inflections: {
      plural: "minutes"
    },
    phrases: [
      { phrase: "in a minute", meaning: "\u9a6c\u4e0a" },
      { phrase: "wait a minute", meaning: "\u7b49\u4e00\u4e0b" }
    ],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amin \u00b7 ute"
  },
  {
    id: "sing",
    word: "sing",
    syllables: ["sing"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make music with your voice", zh: "\u5531\u6b4c" }],
    examples: [{ sentence: "She sings a great song." }],
    inflections: {
      pastTense: "sang",
      pastParticiple: "sung",
      thirdPerson: "sings",
      presentParticiple: "singing"
    },
    phrases: [
      { phrase: "sing a song", meaning: "\u5531\u4e00\u9996\u6b4c" },
      { phrase: "sing along", meaning: "\u8ddf\u7740\u5531" }
    ],
    similarWords: [{"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "ring", "reason": "\u5f62\u8fd1", "zh": "\u6212\u6307\uff0c\u94c3\u94db\uff0c\u54cd"}, {"word": "wing", "reason": "\u5f62\u8fd1", "zh": "\u7fc5\u8180\uff1b\u673a\u7ffc"}],
  },
  {
    id: "sit",
    word: "sit",
    syllables: ["sit"],
    partOfSpeech: "v.",
    definitions: [{ en: "to rest on your bottom", zh: "\u5750" }],
    examples: [{ sentence: "The man sits under the tree." }],
    inflections: {
      pastTense: "sat",
      pastParticiple: "sat",
      thirdPerson: "sits",
      presentParticiple: "sitting"
    },
    phrases: [
      { phrase: "sit down", meaning: "\u5750\u4e0b" },
      { phrase: "sit up", meaning: "\u5750\u8d77\u6765" }
    ],
    similarWords: [{"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}, {"word": "set", "reason": "\u5f62\u8fd1", "zh": "\u8bbe\u7f6e\uff1b\u4e00\u5957"}, {"word": "bit", "reason": "\u5f62\u8fd1", "zh": "\u4e00\u70b9\uff1b\u5c11\u91cf"}],
  },
  {
    id: "star",
    word: "star",
    syllables: ["star"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have the main part in a movie or play", zh: "\u661f\u661f\uff0c\u660e\u661f" }],
    examples: [{ sentence: "Beth stars in the play." }],
    inflections: {
      pastTense: "stared",
      pastParticiple: "stared",
      thirdPerson: "stars",
      presentParticiple: "staring"
    },
    phrases: [
      { phrase: "movie star", meaning: "\u7535\u5f71\u660e\u661f" },
      { phrase: "rock star", meaning: "\u6447\u6eda\u660e\u661f" },
      { phrase: "shooting star", meaning: "\u6d41\u661f" }
    ],
    rootAffix: { explanation: "star\u661f\u661f = \u661f\u661f" },
    similarWords: [{"word": "stay", "reason": "\u5f62\u8fd1", "zh": "\u505c\u7559\uff0c\u5f85\u5728"}, {"word": "start", "reason": "\u5f62\u8fd1", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1astar\u661f\u661f = \u661f\u661f",
  },
  {
    id: "think",
    word: "think",
    syllables: ["think"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use the mind", zh: "\u60f3\uff0c\u601d\u8003" }],
    examples: [{ sentence: "He thinks about what to cook." }],
    inflections: {
      pastTense: "thought",
      pastParticiple: "thought",
      thirdPerson: "thinks",
      presentParticiple: "thinking"
    },
    phrases: [
      { phrase: "think of", meaning: "\u60f3\u5230" },
      { phrase: "think about", meaning: "\u8003\u8651" },
      { phrase: "think over", meaning: "\u4ed4\u7ec6\u8003\u8651" }
    ],
    synonyms: [{"word": "believe", "zh": "\u76f8\u4fe1\uff1b\u8ba4\u4e3a"}, {"word": "consider", "zh": "\u8003\u8651\uff1b\u8ba4\u4e3a"}, {"word": "ponder", "zh": "沉思；犹豫"}],
    similarWords: [{"word": "drink", "reason": "\u5f62\u8fd1", "zh": "\u559d\uff0c\u996e\u6599"}, {"word": "thank", "reason": "\u5f62\u8fd1", "zh": "\u8c22\u8c22"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}],
  },
  {
    id: "town",
    word: "town",
    syllables: ["town"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small city", zh: "\u5c0f\u9547\uff0c\u57ce\u9547" }],
    examples: [{ sentence: "Three hundred people live in this town." }],
    inflections: {
      plural: "towns"
    },
    phrases: [
      { phrase: "go to town", meaning: "\u8fdb\u57ce" },
      { phrase: "home town", meaning: "\u5bb6\u4e61" }
    ],
    similarWords: [{"word": "own", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u5df1\u7684\uff1b\u62e5\u6709"}],
  },
  {
    id: "breakfast",
    word: "breakfast",
    syllables: ["break", "fast"],
    partOfSpeech: "n.",
    definitions: [{ en: "the first meal of the day", zh: "\u65e9\u9910\uff0c\u65e9\u996d" }],
    examples: [{ sentence: "What time do you eat breakfast?" }],
    inflections: {
      plural: "breakfasts"
    },
    phrases: [
      { phrase: "have breakfast", meaning: "\u5403\u65e9\u9910" },
      { phrase: "at breakfast", meaning: "\u65e9\u9910\u65f6" }
    ],
    rootAffix: { explanation: "break\u6253\u7834 + fast\u7981\u98df = \u6253\u7834\u7981\u98df\u2192\u65e9\u9910" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abreak\u6253\u7834 + fast\u7981\u98df = \u6253\u7834\u7981\u98df\u2192\u65e9\u9910"
  },
  {
    id: "carry",
    word: "carry",
    syllables: ["car", "ry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move something as you hold it", zh: "\u643a\u5e26\uff0c\u642c\u8fd0" }],
    examples: [{ sentence: "She carries the animal to the car." }],
    inflections: {
      pastTense: "carried",
      pastParticiple: "carried",
      thirdPerson: "carries",
      presentParticiple: "carrying"
    },
    phrases: [
      { phrase: "carry on", meaning: "\u7ee7\u7eed" },
      { phrase: "carry out", meaning: "\u6267\u884c" }
    ],
    similarWords: [{"word": "worry", "reason": "\u5f62\u8fd1", "zh": "\u62c5\u5fc3\uff0c\u5fe7\u8651"}, {"word": "hurry", "reason": "\u5f62\u8fd1", "zh": "\u8d76\u7d27"}, {"word": "car", "reason": "\u62d3\u5c55", "zh": "\u6c7d\u8f66"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acar \u00b7 ry",
  },
  {
    id: "cheap",
    word: "cheap",
    syllables: ["cheap"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not needing a lot of money to buy", zh: "\u4fbf\u5b9c\u7684" }],
    examples: [{ sentence: "She buys cheap clothes." }],
    inflections: {
      comparative: "cheaper",
      superlative: "cheapest"
    },
    phrases: [
      { phrase: "cheap and fine", meaning: "\u7269\u7f8e\u4ef7\u5ec9" }
    ],
    synonyms: [{"word": "inexpensive", "zh": "便宜的"}],
    antonyms: [{ word: "expensive", zh: "昂贵的" }]
  },
  {
    id: "count",
    word: "count",
    syllables: ["count"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say each number in order", zh: "\u6570\u6570\uff0c\u8ba1\u6570" }],
    examples: [{ sentence: "He counts the people again." }],
    inflections: {
      pastTense: "counted",
      pastParticiple: "counted",
      thirdPerson: "counts",
      presentParticiple: "counting"
    },
    similarWords: [{"word": "amount", "reason": "\u5f62\u8fd1", "zh": "\u6570\u91cf\uff1b\u603b\u989d"}, {"word": "hunt", "reason": "\u5f62\u8fd1", "zh": "\u6253\u730e\uff1b\u641c\u5bfb"}],
    phrases: [{ phrase: "count to", meaning: "数到" }, { phrase: "count on", meaning: "依靠" }]
  },
  {
    id: "cut",
    word: "cut",
    syllables: ["cut"],
    partOfSpeech: "v.",
    definitions: [{ en: "to open or divide something with a knife", zh: "\u5207\uff0c\u526a\uff0c\u5272" }],
    examples: [{ sentence: "Lisa cuts fruit for her friends to eat." }],
    inflections: {
      pastTense: "cut",
      pastParticiple: "cut",
      thirdPerson: "cuts",
      presentParticiple: "cutting"
    },
    synonyms: [{"word": "slice", "zh": "切片"}, {"word": "chop", "zh": "砍；切碎"}, {"word": "sever", "zh": "切断；分离"}],
    similarWords: [{"word": "put", "reason": "\u5f62\u8fd1", "zh": "\u653e\uff0c\u653e\u7f6e"}],
    phrases: [{ phrase: "cut down", meaning: "砍倒" }, { phrase: "cut up", meaning: "切碎" }, { phrase: "cut off", meaning: "切断" }]
  },
  {
    id: "early",
    word: "early",
    syllables: ["ear", "ly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "before a set time; sooner than at other times", zh: "\u65e9\u7684\uff0c\u63d0\u524d\u7684" }],
    examples: [{ sentence: "Rob gets up early on weekdays." }],
    rootAffix: { explanation: "ear-\u65e9 = \u65e9\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aear-\u65e9 = \u65e9\u7684",
    phrases: [{ phrase: "early in the morning", meaning: "一大早" }, { phrase: "get up early", meaning: "早起" }],
    synonyms: [{"word": "ahead", "zh": "提前的"}],
    antonyms: [{ word: "late", zh: "晚的" }]
  },
  {
    id: "finish",
    word: "finish",
    syllables: ["fin", "ish"],
    partOfSpeech: "v.",
    definitions: [{ en: "to end", zh: "\u5b8c\u6210\uff0c\u7ed3\u675f" }],
    examples: [{ sentence: "They finish running." }],
    inflections: {
      pastTense: "finished",
      pastParticiple: "finished",
      thirdPerson: "finishes",
      presentParticiple: "finishing"
    },
    synonyms: [{"word": "complete", "zh": "\u5b8c\u6210\uff1b\u5b8c\u6574\u7684"}, {"word": "end", "zh": "\u7ed3\u675f\uff0c\u672b\u5c3e"}, {"word": "conclude", "zh": "总结；得出结论"}],
    similarWords: [{"word": "foolish", "reason": "\u5f62\u8fd1", "zh": "\u611a\u8822\u7684"}, {"word": "publish", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u7248\uff1b\u53d1\u8868"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afin \u00b7 ish",
    phrases: [{ phrase: "finish doing", meaning: "做完" }, { phrase: "finish line", meaning: "终点线" }],
    antonyms: [{ word: "start", zh: "开始" }, { word: "begin", zh: "开始" }]
  },
  {
    id: "flower",
    word: "flower",
    syllables: ["flow", "er"],
    partOfSpeech: "n.",
    definitions: [{ en: "the colorful part of a plant", zh: "\u82b1\uff0c\u82b1\u6735" }],
    examples: [{ sentence: "She finds a red flower." }],
    inflections: {
      plural: "flowers"
    },
    rootAffix: { explanation: "flow\u5f00\u82b1 = \u82b1" },
    similarWords: [{"word": "tower", "reason": "\u5f62\u8fd1", "zh": "\u5854\uff1b\u9ad8\u697c"}, {"word": "power", "reason": "\u5f62\u8fd1", "zh": "\u529b\u91cf\uff1b\u7535\u529b"}, {"word": "answer", "reason": "\u5f62\u8fd1", "zh": "\u56de\u7b54\uff0c\u7b54\u6848"}, {"word": "flow", "reason": "\u62d3\u5c55", "zh": "\u6d41\u52a8\uff1b\u6d41\u91cf"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aflow\u5f00\u82b1 = \u82b1",
    phrases: [{ phrase: "flower shop", meaning: "花店" }, { phrase: "in flower", meaning: "开花" }]
  },
  {
    id: "food",
    word: "food",
    syllables: ["food"],
    partOfSpeech: "n.",
    definitions: [{ en: "fruits, vegetables, meats, and other things people eat", zh: "\u98df\u7269" }],
    examples: [{ sentence: "This food is not sweet." }],
    similarWords: [{"word": "wood", "reason": "\u5f62\u8fd1", "zh": "\u6728\u5934"}, {"word": "flood", "reason": "\u5f62\u8fd1", "zh": "\u6d2a\u6c34\uff1b\u6df9\u6ca1"}, {"word": "blood", "reason": "\u5f62\u8fd1", "zh": "\u8840\uff1b\u8840\u6db2"}],
    phrases: [{ phrase: "fast food", meaning: "快餐" }, { phrase: "healthy food", meaning: "健康食品" }]
  },
  {
    id: "vegetable",
    word: "vegetable",
    syllables: ["veg", "ta", "ble"],
    partOfSpeech: "n.",
    definitions: [{ en: "a food that grows on a plant, often in a garden", zh: "\u852c\u83dc" }],
    examples: [{ sentence: "My family likes to eat vegetables." }],
    inflections: {
      plural: "vegetables"
    },
    rootAffix: { explanation: "veg\u751f\u6d3b + -table = \u6709\u751f\u547d\u529b\u7684\u4e1c\u897f\u2192\u852c\u83dc" },
    similarWords: [{"word": "available", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u7528\u7684\uff1b\u53ef\u83b7\u5f97\u7684"}, {"word": "incredible", "reason": "\u5f62\u8fd1", "zh": "\u96be\u4ee5\u7f6e\u4fe1\u7684"}, {"word": "terrible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aveg\u751f\u6d3b + -table = \u6709\u751f\u547d\u529b\u7684\u4e1c\u897f\u2192\u852c\u83dc",
    phrases: [{ phrase: "vegetable salad", meaning: "蔬菜沙拉" }, { phrase: "green vegetable", meaning: "绿色蔬菜" }]
  },
  {
    id: "begin",
    word: "begin",
    syllables: ["be", "gin"],
    partOfSpeech: "v.",
    definitions: [{ en: "to start", zh: "\u5f00\u59cb" }],
    examples: [{ sentence: "The horses begin to run." }],
    inflections: {
      pastTense: "began",
      pastParticiple: "begun",
      thirdPerson: "begins",
      presentParticiple: "begining"
    },
    rootAffix: { explanation: "be-\u4f7f + gin\u5f00\u59cb = \u5f00\u59cb" },
    synonyms: [{"word": "start", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "commence", "zh": "开始；着手"}, {"word": "initiate", "zh": "发起；开始"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abe-\u4f7f + gin\u5f00\u59cb = \u5f00\u59cb",
    phrases: [{ phrase: "begin with", meaning: "以...开始" }, { phrase: "begin to do", meaning: "开始做" }],
    antonyms: [{ word: "finish", zh: "结束" }]
  },
  {
    id: "excuse",
    word: "excuse",
    syllables: ["ex", "cuse"],
    partOfSpeech: "n.",
    definitions: [{ en: "a reason given for doing or not doing something", zh: "\u539f\u8c05\uff0c\u501f\u53e3" }],
    examples: [{ sentence: "Her mother does not like her long excuse." }],
    inflections: {
      plural: "excuses"
    },
    similarWords: [{"word": "confuse", "reason": "\u5f62\u8fd1", "zh": "\u4f7f\u56f0\u60d1\uff1b\u6df7\u6dc6"}, {"word": "house", "reason": "\u5f62\u8fd1", "zh": "\u623f\u5b50"}, {"word": "cause", "reason": "\u5f62\u8fd1", "zh": "\u539f\u56e0\uff1b\u5f15\u8d77\uff1b\u5bfc\u81f4"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aex \u00b7 cuse",
    phrases: [{ phrase: "excuse me", meaning: "对不起" }, { phrase: "make an excuse", meaning: "找借口" }]
  },
  {
    id: "heavy",
    word: "heavy",
    syllables: ["heav", "y"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of weight", zh: "\u91cd\u7684\uff0c\u6c89\u91cd\u7684" }],
    examples: [{ sentence: "The bag is heavy." }],
    inflections: {
      comparative: "heavier",
      superlative: "heaviest"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aheav \u00b7 y",
    phrases: [{ phrase: "heavy rain", meaning: "大雨" }, { phrase: "heavy box", meaning: "重箱子" }],
    synonyms: [{"word": "weighty", "zh": "沉重的"}],
    antonyms: [{ word: "light", zh: "轻的" }]
  },
  {
    id: "market",
    word: "market",
    syllables: ["mar", "ket"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place where things are sold, often outside", zh: "\u5e02\u573a" }],
    examples: [{ sentence: "She buys vegetables at the market in town." }],
    inflections: {
      plural: "markets"
    },
    similarWords: [{"word": "basket", "reason": "\u5f62\u8fd1", "zh": "\u7bee\u5b50"}, {"word": "pocket", "reason": "\u5f62\u8fd1", "zh": "\u53e3\u888b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amar \u00b7 ket",
    phrases: [{ phrase: "super market", meaning: "超市" }, { phrase: "market price", meaning: "市场价格" }]
  },
  {
    id: "meat",
    word: "meat",
    syllables: ["meat"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of an animal that is eaten", zh: "\u8089" }],
    examples: [{ sentence: "He cuts the meat." }],
    similarWords: [{"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}, {"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "treat", "reason": "\u5f62\u8fd1", "zh": "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597"}],
    phrases: [{ phrase: "meat and vegetables", meaning: "肉和蔬菜" }, { phrase: "red meat", meaning: "红肉" }]
  },
  {
    id: "money",
    word: "money",
    syllables: ["mon", "ey"],
    partOfSpeech: "n.",
    definitions: [{ en: "coins or bills used to buy things", zh: "\u94b1" }],
    examples: [{ sentence: "It is true. He has a lot of money!" }],
    similarWords: [{"word": "monkey", "reason": "\u5f62\u8fd1", "zh": "\u7334\u5b50"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amon \u00b7 ey",
    phrases: [{ phrase: "make money", meaning: "赚钱" }, { phrase: "save money", meaning: "省钱" }]
  },
  {
    id: "put",
    word: "put",
    syllables: ["put"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move something to another place", zh: "\u653e\uff0c\u653e\u7f6e" }],
    examples: [{ sentence: "She puts money in the piggy bank." }],
    inflections: {
      pastTense: "put",
      pastParticiple: "put",
      thirdPerson: "puts",
      presentParticiple: "putting"
    },
    similarWords: [{"word": "cut", "reason": "\u5f62\u8fd1", "zh": "\u5207\uff0c\u526a\uff0c\u5272"}, {"word": "pet", "reason": "\u5f62\u8fd1", "zh": "\u5ba0\u7269"}, {"word": "pot", "reason": "\u5f62\u8fd1", "zh": "\u9505\uff1b\u58f6\uff1b\u7f50"}],
    phrases: [{ phrase: "put on", meaning: "穿上" }, { phrase: "put away", meaning: "放好" }, { phrase: "put down", meaning: "放下" }],
    synonyms: [{"word": "place", "zh": "放置"}, {"word": "set", "zh": "摆放"}]
  },
  {
    id: "station",
    word: "station",
    syllables: ["sta", "tion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a stopping place for buses or trains", zh: "\u8f66\u7ad9\uff0c\u7ad9" }],
    examples: [{ sentence: "She sits in the train station." }],
    inflections: {
      plural: "stations"
    },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asta \u00b7 tion",
    phrases: [{ phrase: "bus station", meaning: "公交车站" }, { phrase: "train station", meaning: "火车站" }],
    rootAffix: { explanation: "stat站立 + -ion = 车站；位置" }
  },
  {
    id: "visit",
    word: "visit",
    syllables: ["vis", "it"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go to see someone", zh: "\u62dc\u8bbf\uff0c\u53c2\u89c2" }],
    examples: [{ sentence: "She speaks English when she visits her friends." }],
    inflections: {
      pastTense: "visited",
      pastParticiple: "visited",
      thirdPerson: "visits",
      presentParticiple: "visiting"
    },
    rootAffix: { explanation: "vis\u770b + -it\u53bb = \u53bb\u770b\u2192\u53c2\u89c2" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1avis\u770b + -it\u53bb = \u53bb\u770b\u2192\u53c2\u89c2",
    similarWords: [{"word": "visitor", "reason": "\u62d3\u5c55", "zh": "参观者；游客"}],
    phrases: [{ phrase: "visit a friend", meaning: "拜访朋友" }, { phrase: "on a visit", meaning: "在访问" }]
  },
  {
    id: "yesterday",
    word: "yesterday",
    syllables: ["yes", "ter", "day"],
    partOfSpeech: "n.",
    definitions: [{ en: "the day before today", zh: "\u6628\u5929" }],
    examples: [{ sentence: "Yesterday was bad. She was alone all day." }],
    inflections: {
      plural: "yesterdays"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ayes \u00b7 ter \u00b7 day",
    phrases: [{ phrase: "yesterday morning", meaning: "昨天早上" }, { phrase: "yesterday evening", meaning: "昨天晚上" }],
    antonyms: [{ word: "today", zh: "今天" }]
  },
  {
    id: "cold",
    word: "cold",
    syllables: ["cold"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not hot", zh: "\u51b7\u7684\uff0c\u5bd2\u51b7\u7684" }],
    examples: [{ sentence: "It is very cold today." }],
    inflections: {
      comparative: "colder",
      superlative: "coldest"
    },
    phrases: [
      { phrase: "catch a cold", meaning: "\u611f\u5192" },
      { phrase: "cold weather", meaning: "\u5bd2\u51b7\u5929\u6c14" }
    ],
    synonyms: [{"word": "cool", "zh": "\u51c9\u723d\u7684\uff1b\u9177\u7684"}, {"word": "freezing", "zh": "冰冻的"}, {"word": "icy", "zh": "冰冷的；结冰的"}],
    similarWords: [{"word": "hold", "reason": "\u5f62\u8fd1", "zh": "\u62ff\u7740"}, {"word": "fold", "reason": "\u5f62\u8fd1", "zh": "\u6298\u53e0\uff1b\u6298\u75d5"}, {"word": "old", "reason": "\u5f62\u8fd1", "zh": "\u8001\u7684"}],
    antonyms: [{ word: "hot", zh: "热的" }]
  },
  {
    id: "dark",
    word: "dark",
    syllables: ["dark"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having little or no light", zh: "\u9ed1\u6697\u7684\uff0c\u6697\u7684" }],
    examples: [{ sentence: "I cannot see well when it is dark." }],
    inflections: {
      comparative: "darker",
      superlative: "darkest"
    },
    similarWords: [{"word": "mark", "reason": "\u5f62\u8fd1", "zh": "\u6807\u8bb0\uff1b\u5206\u6570\uff1b\u8bb0\u53f7"}, {"word": "park", "reason": "\u5f62\u8fd1", "zh": "\u516c\u56ed\uff0c\u505c\u8f66"}],
    phrases: [{ phrase: "dark blue", meaning: "深蓝色" }, { phrase: "in the dark", meaning: "在黑暗中" }],
    antonyms: [{ word: "light", zh: "明亮的" }, { word: "bright", zh: "明亮的" }]
  },
  {
    id: "dinner",
    word: "dinner",
    syllables: ["din", "ner"],
    partOfSpeech: "n.",
    definitions: [{ en: "the last meal of the day", zh: "\u665a\u9910\uff0c\u6b63\u9910" }],
    examples: [{ sentence: "We eat a lot of food for dinner." }],
    inflections: {
      plural: "dinners"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1adin \u00b7 ner",
    phrases: [{ phrase: "have dinner", meaning: "吃晚餐" }, { phrase: "dinner time", meaning: "晚餐时间" }]
  },
  {
    id: "dish",
    word: "dish",
    syllables: ["dish"],
    partOfSpeech: "n.",
    definitions: [{ en: "a plate or bowl", zh: "\u76d8\u5b50\uff0c\u83dc\u80b4" }],
    examples: [{ sentence: "Where did you find this dish?" }],
    inflections: {
      plural: "dishes"
    },
    similarWords: [{"word": "fish", "reason": "\u5f62\u8fd1", "zh": "\u9c7c\uff1b\u9493\u9c7c"}, {"word": "wish", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b"}],
    phrases: [{ phrase: "wash the dishes", meaning: "洗碗" }, { phrase: "main dish", meaning: "主菜" }]
  },
  {
    id: "evening",
    word: "evening",
    syllables: ["eve", "ning"],
    partOfSpeech: "n.",
    definitions: [{ en: "the early part of the night", zh: "\u508d\u665a\uff0c\u665a\u4e0a" }],
    examples: [{ sentence: "They drive home in the evening." }],
    inflections: {
      plural: "evenings"
    },
    similarWords: [{"word": "morning", "reason": "\u5f62\u8fd1", "zh": "\u65e9\u6668\uff0c\u65e9\u4e0a"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}, {"word": "amazing", "reason": "\u5f62\u8fd1", "zh": "\u60ca\u4eba\u7684\uff1b\u6781\u597d\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aeve \u00b7 ning",
    phrases: [{ phrase: "in the evening", meaning: "在晚上" }, { phrase: "good evening", meaning: "晚上好" }],
    antonyms: [{ word: "morning", zh: "早上" }]
  },
  {
    id: "sick",
    word: "sick",
    syllables: ["sick"],
    partOfSpeech: "adj.",
    definitions: [{ en: "ill; not well", zh: "\u751f\u75c5\u7684\uff0c\u6076\u5fc3\u7684" }],
    examples: [{ sentence: "He goes to bed early because he is sick." }],
    inflections: {
      comparative: "sicker",
      superlative: "sickest"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}],
    phrases: [{ phrase: "feel sick", meaning: "感觉恶心" }, { phrase: "sick of", meaning: "厌倦" }],
    antonyms: [{ word: "healthy", zh: "健康的" }, { word: "well", zh: "健康的" }]
  },
  {
    id: "snowy",
    word: "snowy",
    syllables: ["snow", "y"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of snow", zh: "\u4e0b\u96ea\u7684\uff0c\u591a\u96ea\u7684" }],
    examples: [{ sentence: "It is snowy by our home." }],
    inflections: {
      comparative: "snowier",
      superlative: "snowiest"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asnow \u00b7 y",
    similarWords: [{"word": "snow", "reason": "\u62d3\u5c55", "zh": "雪"}],
    phrases: [{ phrase: "snowy day", meaning: "下雪天" }, { phrase: "snowy weather", meaning: "下雪天气" }],
    rootAffix: { explanation: "snow雪 + -y多 = 下雪的" }
  },
  {
    id: "sugar",
    word: "sugar",
    syllables: ["su", "gar"],
    partOfSpeech: "n.",
    definitions: [{ en: "something added to food to make it sweet", zh: "\u7cd6" }],
    examples: [{ sentence: "I do not put sugar on fruit." }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asu \u00b7 gar",
    phrases: [{ phrase: "white sugar", meaning: "白糖" }, { phrase: "sugar free", meaning: "无糖" }]
  },
  {
    id: "tea",
    word: "tea",
    syllables: ["tea"],
    partOfSpeech: "n.",
    definitions: [{ en: "a drink made with hot water and leaves", zh: "\u8336" }],
    examples: [{ sentence: "I like to drink tea." }],
    similarWords: [{"word": "sea", "reason": "\u5f62\u8fd1", "zh": "\u6d77"}, {"word": "tear", "reason": "\u5f62\u8fd1", "zh": "\u773c\u6cea\uff1b\u6495\u7834"}],
    phrases: [{ phrase: "drink tea", meaning: "喝茶" }, { phrase: "green tea", meaning: "绿茶" }]
  },
  {
    id: "world",
    word: "world",
    syllables: ["world"],
    partOfSpeech: "n.",
    definitions: [{ en: "the earth and everything on it", zh: "\u4e16\u754c" }],
    examples: [{ sentence: "We learn about the world in school." }],
    inflections: {
      plural: "worlds"
    },
    rootAffix: { explanation: "worl\u4e16\u754c = \u4e16\u754c" },
    similarWords: [{"word": "word", "reason": "\u5f62\u8fd1", "zh": "\u5355\u8bcd\uff0c\u8bcd\u8bed"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aworl\u4e16\u754c = \u4e16\u754c",
    phrases: [{ phrase: "around the world", meaning: "世界各地" }, { phrase: "in the world", meaning: "在世界上" }]
  },
  {
    id: "hard",
    word: "hard",
    syllables: ["hard"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not easy", zh: "\u56f0\u96be\u7684\uff0c\u786c\u7684" }],
    examples: [{ sentence: "It is hard to carry the heavy box." }],
    inflections: {
      comparative: "harder",
      superlative: "hardest"
    },
    synonyms: [{"word": "difficult", "zh": "\u56f0\u96be\u7684"}, {"word": "tough", "zh": "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684"}, {"word": "challenging", "zh": "具有挑战性的"}],
    similarWords: [{"word": "guard", "reason": "\u5f62\u8fd1", "zh": "\u5b88\u536b\uff1b\u8b66\u536b"}, {"word": "board", "reason": "\u5f62\u8fd1", "zh": "\u677f\uff1b\u8463\u4e8b\u4f1a\uff1b\u4e0a\uff08\u8f66\u8239\uff09"}],
    phrases: [{ phrase: "hard work", meaning: "辛苦工作" }, { phrase: "hard to", meaning: "很难" }],
    antonyms: [{ word: "soft", zh: "柔软的" }, { word: "easy", zh: "容易的" }]
  },
  {
    id: "late",
    word: "late",
    syllables: ["late"],
    partOfSpeech: "adj.",
    definitions: [{ en: "getting somewhere after a set time", zh: "\u665a\u7684\uff0c\u8fdf\u5230\u7684" }],
    examples: [{ sentence: "He is late. I hope he has a good excuse!" }],
    inflections: {
      comparative: "later",
    },
    synonyms: [{"word": "tardy", "zh": "迟到的；拖延的"}, {"word": "overdue", "zh": "过期的；迟到的"}, {"word": "delayed", "zh": "延迟的"}],
    similarWords: [{"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "date", "reason": "\u5f62\u8fd1", "zh": "\u65e5\u671f"}, {"word": "hate", "reason": "\u5f62\u8fd1", "zh": "\u6068\uff0c\u8ba8\u538c"}],
    phrases: [{ phrase: "be late for", meaning: "迟到" }, { phrase: "late at night", meaning: "深夜" }],
    antonyms: [{ word: "early", zh: "早的" }]
  },
  {
    id: "life",
    word: "life",
    syllables: ["life"],
    partOfSpeech: "n.",
    definitions: [{ en: "the time a person is alive", zh: "\u751f\u6d3b\uff0c\u751f\u547d" }],
    examples: [{ sentence: "The man has a great life." }],
    inflections: {
      plural: "lives"
    },
    similarWords: [{"word": "wife", "reason": "\u5f62\u8fd1", "zh": "\u59bb\u5b50"}, {"word": "knife", "reason": "\u5f62\u8fd1", "zh": "\u5200"}, {"word": "like", "reason": "\u5f62\u8fd1", "zh": "\u559c\u6b22\uff0c\u50cf"}],
    phrases: [{ phrase: "everyday life", meaning: "日常生活" }, { phrase: "way of life", meaning: "生活方式" }]
  },
  {
    id: "look",
    word: "look",
    syllables: ["look"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move the eyes to see", zh: "\u770b\uff0c\u770b\u8d77\u6765" }],
    examples: [{ sentence: "He looks at the flowers." }],
    inflections: {
      pastTense: "looked",
      pastParticiple: "looked",
      thirdPerson: "looks",
      presentParticiple: "looking"
    },
    synonyms: [{"word": "see", "zh": "\u770b\u89c1\uff0c\u770b\u5230"}, {"word": "view", "zh": "\u89c6\u56fe\uff1b\u770b\u6cd5\uff1b\u89c2\u770b"}, {"word": "observe", "zh": "观察；观看"}, {"word": "watch", "zh": "\u770b\uff0c\u89c2\u770b"}],
    similarWords: [{"word": "cook", "reason": "\u5f62\u8fd1", "zh": "\u505a\u996d\uff0c\u70f9\u996a\uff0c\u53a8\u5e08"}, {"word": "book", "reason": "\u5f62\u8fd1", "zh": "\u4e66"}],
    phrases: [{ phrase: "look at", meaning: "看" }, { phrase: "look for", meaning: "寻找" }, { phrase: "look after", meaning: "照顾" }]
  },
  {
    id: "love",
    word: "love",
    syllables: ["love"],
    partOfSpeech: "v.",
    definitions: [{ en: "to like a lot", zh: "\u7231\uff0c\u559c\u6b22" }],
    examples: [{ sentence: "Billy loves his dog." }],
    inflections: {
      pastTense: "loved",
      pastParticiple: "loved",
      thirdPerson: "loves",
      presentParticiple: "loving"
    },
    similarWords: [{"word": "glove", "reason": "\u5f62\u8fd1", "zh": "\u624b\u5957"}, {"word": "move", "reason": "\u5f62\u8fd1", "zh": "\u79fb\u52a8\uff0c\u642c\u52a8"}, {"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}],
    phrases: [{ phrase: "fall in love", meaning: "爱上" }, { phrase: "love to do", meaning: "喜欢做" }],
    antonyms: [{ word: "hate", zh: "恨" }]
  },
  {
    id: "night",
    word: "night",
    syllables: ["night"],
    partOfSpeech: "n.",
    definitions: [{ en: "the time after evening when it is dark", zh: "\u591c\u665a\uff0c\u665a\u4e0a" }],
    examples: [{ sentence: "The market is also open at night." }],
    inflections: {
      plural: "nights"
    },
    similarWords: [{"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}, {"word": "right", "reason": "\u5f62\u8fd1", "zh": "\u6b63\u786e\u7684\uff1b\u53f3\u8fb9"}, {"word": "tight", "reason": "\u5f62\u8fd1", "zh": "\u7d27\u7684\uff1b\u7262\u56fa\u7684"}],
    phrases: [{ phrase: "at night", meaning: "在夜晚" }, { phrase: "last night", meaning: "昨晚" }],
    antonyms: [{ word: "day", zh: "白天" }]
  },
  {
    id: "same",
    word: "same",
    syllables: ["same"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not different", zh: "\u76f8\u540c\u7684\uff0c\u4e00\u6837\u7684" }],
    examples: [{ sentence: "I think the apples are the same size." }],
    inflections: {
      comparative: "samer",
    },
    similarWords: [{"word": "name", "reason": "\u5f62\u8fd1", "zh": "\u540d\u5b57"}, {"word": "safe", "reason": "\u5f62\u8fd1", "zh": "\u5b89\u5168\u7684\uff1b\u4fdd\u9669\u7bb1"}, {"word": "save", "reason": "\u5f62\u8fd1", "zh": "\u8282\u7701\uff1b\u62ef\u6551"}],
    phrases: [{ phrase: "the same as", meaning: "和...一样" }, { phrase: "at the same time", meaning: "同时" }],
    synonyms: [{"word": "identical", "zh": "相同的"}],
    antonyms: [{ word: "different", zh: "不同的" }]
  },
  {
    id: "sleep",
    word: "sleep",
    syllables: ["sleep"],
    partOfSpeech: "v.",
    definitions: [{ en: "to close your eyes and rest", zh: "\u7761\u89c9\uff0c\u7761\u7720" }],
    examples: [{ sentence: "He sleeps for a long time." }],
    inflections: {
      pastTense: "slept",
      pastParticiple: "slept",
      thirdPerson: "sleeps",
      presentParticiple: "sleeping"
    },
    similarWords: [{"word": "keep", "reason": "\u5f62\u8fd1", "zh": "\u4fdd\u6301\uff0c\u7ee7\u7eed"}, {"word": "deep", "reason": "\u5f62\u8fd1", "zh": "\u6df1\u7684"}],
    phrases: [{ phrase: "go to sleep", meaning: "睡觉" }, { phrase: "have a good sleep", meaning: "睡个好觉" }]
  },
  {
    id: "water",
    word: "water",
    syllables: ["wa", "ter"],
    partOfSpeech: "n.",
    definitions: [{ en: "the thing people drink and need to live", zh: "\u6c34" }],
    examples: [{ sentence: "I need to drink more water." }],
    similarWords: [{"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "matter", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u60c5"}, {"word": "master", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1awa \u00b7 ter",
    phrases: [{ phrase: "drink water", meaning: "喝水" }, { phrase: "clean water", meaning: "干净的水" }]
  },
  {
    id: "weak",
    word: "weak",
    syllables: ["weak"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not strong", zh: "\u865a\u5f31\u7684\uff0c\u5f31\u7684" }],
    examples: [{ sentence: "The rope is weak." }],
    inflections: {
      comparative: "weaker",
      superlative: "weakest"
    },
    synonyms: [{"word": "feeble", "zh": "虚弱的；弱小的"}, {"word": "frail", "zh": "脆弱的；虚弱的"}],
    similarWords: [{"word": "speak", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8bb2"}, {"word": "break", "reason": "\u5f62\u8fd1", "zh": "\u6253\u7834\uff0c\u5f04\u788e"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}],
    phrases: [{ phrase: "weak point", meaning: "弱点" }, { phrase: "weak tea", meaning: "淡茶" }],
    antonyms: [{ word: "strong", zh: "强壮的" }]
  },
  {
    id: "fine",
    word: "fine",
    syllables: ["fine"],
    partOfSpeech: "adj.",
    definitions: [{ en: "good", zh: "\u597d\u7684\uff0c\u5065\u5eb7\u7684" }],
    examples: [{ sentence: "It is a fine day to go to the country." }],
    inflections: {
      comparative: "finer",
    },
    similarWords: [{"word": "line", "reason": "\u5f62\u8fd1", "zh": "\u7ebf"}, {"word": "shine", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u5149\uff1b\u95ea\u8000"}, {"word": "find", "reason": "\u5f62\u8fd1", "zh": "\u627e\u5230\uff0c\u53d1\u73b0"}],
    phrases: [{ phrase: "fine day", meaning: "好天" }, { phrase: "fine, thank you", meaning: "很好，谢谢" }]
  },
  {
    id: "give",
    word: "give",
    syllables: ["give"],
    partOfSpeech: "v.",
    definitions: [{ en: "to let someone have something", zh: "\u7ed9\uff0c\u7ed9\u4e88" }],
    examples: [{ sentence: "He buys flowers and gives them to his friend." }],
    inflections: {
      pastTense: "gave",
      pastParticiple: "given",
      thirdPerson: "gives",
      presentParticiple: "giving"
    },
    synonyms: [{"word": "donate", "zh": "捐赠；捐献"}, {"word": "offer", "zh": "\u63d0\u4f9b\uff1b\u51fa\u4ef7"}, {"word": "provide", "zh": "\u63d0\u4f9b\uff1b\u4f9b\u5e94"}],
    similarWords: [{"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}, {"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}],
    phrases: [{ phrase: "give up", meaning: "放弃" }, { phrase: "give back", meaning: "归还" }, { phrase: "give out", meaning: "分发" }],
    antonyms: [{ word: "receive", zh: "接收" }, { word: "take", zh: "拿走" }]
  },
  {
    id: "help",
    word: "help",
    syllables: ["help"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make it easier for someone to do something", zh: "\u5e2e\u52a9\uff0c\u5e2e\u5fd9" }],
    examples: [{ sentence: "They give food to help people around the world." }],
    inflections: {
      pastTense: "helped",
      pastParticiple: "helped",
      thirdPerson: "helps",
      presentParticiple: "helping"
    },
    synonyms: [{"word": "assist", "zh": "帮助；协助"}, {"word": "aid", "zh": "援助；协助"}, {"word": "support", "zh": "\u652f\u6301\uff1b\u652f\u6491"}],
    similarWords: [{"word": "helpful", "reason": "\u62d3\u5c55", "zh": "有帮助的；有用的"}],
    phrases: [{ phrase: "help with", meaning: "帮助做" }, { phrase: "help oneself", meaning: "请自便" }]
  },
  {
    id: "hour",
    word: "hour",
    syllables: ["hour"],
    partOfSpeech: "n.",
    definitions: [{ en: "sixty minutes", zh: "\u5c0f\u65f6" }],
    examples: [{ sentence: "She slept for only one hour last night." }],
    inflections: {
      plural: "hours"
    },
    similarWords: [{"word": "pour", "reason": "\u5f62\u8fd1", "zh": "\u5012\uff1b\u704c\uff1b\u503e\u6cfb"}, {"word": "tour", "reason": "\u5f62\u8fd1", "zh": "\u65c5\u6e38\uff1b\u53c2\u89c2"}],
    phrases: [{ phrase: "half an hour", meaning: "半小时" }, { phrase: "an hour later", meaning: "一小时后" }]
  },
  {
    id: "meet",
    word: "meet",
    syllables: ["meet"],
    partOfSpeech: "v.",
    definitions: [{ en: "to come together", zh: "\u9047\u89c1\uff0c\u89c1\u9762" }],
    examples: [{ sentence: "They meet for dinner in the evening." }],
    inflections: {
      pastTense: "met",
      pastParticiple: "met",
      thirdPerson: "meets",
      presentParticiple: "meeting"
    },
    similarWords: [{"word": "sheet", "reason": "\u5f62\u8fd1", "zh": "\u5e8a\u5355\uff1b\u7eb8\u5f20\uff1b\u7247"}, {"word": "sweet", "reason": "\u5f62\u8fd1", "zh": "\u751c\u7684\uff0c\u751c\u871c\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}],
    phrases: [{ phrase: "meet up", meaning: "见面" }, { phrase: "nice to meet you", meaning: "很高兴认识你" }]
  },
  {
    id: "page",
    word: "page",
    syllables: ["page"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of paper", zh: "\u9875\uff0c\u9875\u9762" }],
    examples: [{ sentence: "I could not finish the last page of the book." }],
    inflections: {
      plural: "pages"
    },
    similarWords: [{"word": "age", "reason": "\u5f62\u8fd1", "zh": "\u5e74\u9f84"}, {"word": "image", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u50cf\uff1b\u5f62\u8c61"}, {"word": "stage", "reason": "\u5f62\u8fd1", "zh": "\u821e\u53f0\uff1b\u9636\u6bb5"}],
    phrases: [{ phrase: "turn the page", meaning: "翻页" }, { phrase: "page number", meaning: "页码" }]
  },
  {
    id: "pay",
    word: "pay",
    syllables: ["pay"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give money to get something", zh: "\u4ed8\u94b1\uff0c\u652f\u4ed8" }],
    examples: [{ sentence: "She pays $5 for the vegetables." }],
    inflections: {
      pastTense: "paid",
      pastParticiple: "paid",
      thirdPerson: "pays",
      presentParticiple: "payying"
    },
    similarWords: [{"word": "day", "reason": "\u5f62\u8fd1", "zh": "\u5929\uff0c\u65e5\uff0c\u767d\u5929"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "way", "reason": "\u5f62\u8fd1", "zh": "\u65b9\u5f0f\uff0c\u65b9\u6cd5\uff1b\u8def"}],
    phrases: [{ phrase: "pay for", meaning: "付钱" }, { phrase: "pay attention", meaning: "注意" }]
  },
  {
    id: "rain",
    word: "rain",
    syllables: ["rain"],
    partOfSpeech: "v.",
    definitions: [{ en: "to fall as water from clouds", zh: "\u96e8\uff0c\u4e0b\u96e8" }],
    examples: [{ sentence: "It starts to rain on her way to town." }],
    inflections: {
      pastTense: "rained",
      pastParticiple: "rained",
      thirdPerson: "rains",
      presentParticiple: "raining"
    },
    similarWords: [{"word": "brain", "reason": "\u5f62\u8fd1", "zh": "\u5927\u8111\uff1b\u667a\u529b"}, {"word": "train", "reason": "\u5f62\u8fd1", "zh": "\u706b\u8f66"}, {"word": "again", "reason": "\u5f62\u8fd1", "zh": "\u518d\u6b21\uff0c\u53c8"}],
    phrases: [{ phrase: "heavy rain", meaning: "大雨" }, { phrase: "rain cats and dogs", meaning: "倾盆大雨" }]
  },
  {
    id: "sell",
    word: "sell",
    syllables: ["sell"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give something to someone for money", zh: "\u5356\uff0c\u9500\u552e" }],
    examples: [{ sentence: "She sells shoes at the mall." }],
    inflections: {
      pastTense: "sold",
      pastParticiple: "sold",
      thirdPerson: "sells",
      presentParticiple: "selling"
    },
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}, {"word": "tell", "reason": "\u5f62\u8fd1", "zh": "\u544a\u8bc9"}],
    phrases: [{ phrase: "sell out", meaning: "卖光" }, { phrase: "sell well", meaning: "卖得好" }],
    antonyms: [{ word: "buy", zh: "买" }]
  },
  {
    id: "tree",
    word: "tree",
    syllables: ["tree"],
    partOfSpeech: "n.",
    definitions: [{ en: "a woody plant", zh: "\u6811" }],
    examples: [{ sentence: "All of those trees are snowy." }],
    inflections: {
      plural: "trees"
    },
    similarWords: [{"word": "free", "reason": "\u5f62\u8fd1", "zh": "\u514d\u8d39\u7684"}, {"word": "agree", "reason": "\u5f62\u8fd1", "zh": "\u540c\u610f"}, {"word": "true", "reason": "\u5f62\u8fd1", "zh": "\u771f\u7684\uff0c\u6b63\u786e\u7684"}],
    phrases: [{ phrase: "climb a tree", meaning: "爬树" }, { phrase: "family tree", meaning: "家谱" }]
  },
  {
    id: "chair",
    word: "chair",
    syllables: ["chair"],
    partOfSpeech: "n.",
    definitions: [{ en: "something for a person to sit on", zh: "\u6905\u5b50" }],
    examples: [{ sentence: "The chair is red." }],
    inflections: {
      plural: "chairs"
    },
    similarWords: [{"word": "pair", "reason": "\u5f62\u8fd1", "zh": "\u53cc"}, {"word": "fair", "reason": "\u5f62\u8fd1", "zh": "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a"}],
    phrases: [{ phrase: "sit on a chair", meaning: "坐在椅子上" }, { phrase: "electric chair", meaning: "电椅" }]
  },
  {
    id: "hear",
    word: "hear",
    syllables: ["hear"],
    partOfSpeech: "v.",
    definitions: [{ en: "to listen to", zh: "\u542c\u5230\uff0c\u542c\u89c1" }],
    examples: [{ sentence: "She thinks she hears a person singing." }],
    inflections: {
      pastTense: "heard",
      pastParticiple: "heard",
      thirdPerson: "hears",
      presentParticiple: "hearing"
    },
    similarWords: [{"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}, {"word": "year", "reason": "\u5f62\u8fd1", "zh": "\u5e74"}, {"word": "tear", "reason": "\u5f62\u8fd1", "zh": "\u773c\u6cea\uff1b\u6495\u7834"}],
    phrases: [{ phrase: "hear from", meaning: "收到来信" }, { phrase: "hear about", meaning: "听说" }]
  },
  {
    id: "number",
    word: "number",
    syllables: ["num", "ber"],
    partOfSpeech: "n.",
    definitions: [{ en: "a word or symbol that shows an amount", zh: "\u6570\u5b57\uff0c\u53f7\u7801" }],
    examples: [{ sentence: "Can you count to the number 10 in Spanish?" }],
    inflections: {
      plural: "numbers"
    },
    rootAffix: { explanation: "numer\u6570 = \u6570\u5b57" },
    similarWords: [{"word": "member", "reason": "\u5f62\u8fd1", "zh": "\u6210\u5458\uff1b\u4f1a\u5458"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1anumer\u6570 = \u6570\u5b57",
    phrases: [{ phrase: "phone number", meaning: "电话号码" }, { phrase: "room number", meaning: "房间号" }]
  },
  {
    id: "park",
    word: "park",
    syllables: ["park"],
    partOfSpeech: "n.",
    definitions: [{ en: "a grassy place in or near a city", zh: "\u516c\u56ed\uff0c\u505c\u8f66" }],
    examples: [{ sentence: "Yesterday, we went to the park." }],
    inflections: {
      plural: "parks"
    },
    similarWords: [{"word": "mark", "reason": "\u5f62\u8fd1", "zh": "\u6807\u8bb0\uff1b\u5206\u6570\uff1b\u8bb0\u53f7"}, {"word": "dark", "reason": "\u5f62\u8fd1", "zh": "\u9ed1\u6697\u7684\uff0c\u6697\u7684"}, {"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}],
    phrases: [{ phrase: "park the car", meaning: "停车" }, { phrase: "in the park", meaning: "在公园" }]
  },
  {
    id: "poor",
    word: "poor",
    syllables: ["poor"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having little money", zh: "\u8d2b\u7a77\u7684\uff0c\u53ef\u601c\u7684" }],
    examples: [{ sentence: "The poor man needs money." }],
    inflections: {
      comparative: "poorer",
      superlative: "poorest"
    },
    similarWords: [{"word": "door", "reason": "\u5f62\u8fd1", "zh": "\u95e8"}, {"word": "floor", "reason": "\u5f62\u8fd1", "zh": "\u5730\u677f"}, {"word": "pour", "reason": "\u5f62\u8fd1", "zh": "\u5012\uff1b\u704c\uff1b\u503e\u6cfb"}],
    phrases: [{ phrase: "poor thing", meaning: "可怜的东西" }, { phrase: "poor family", meaning: "贫穷的家庭" }],
    antonyms: [{ word: "rich", zh: "富有的" }]
  },
  {
    id: "ready",
    word: "ready",
    syllables: ["read", "y"],
    partOfSpeech: "adj.",
    definitions: [{ en: "set to do something", zh: "\u51c6\u5907\u597d\u7684" }],
    examples: [{ sentence: "They are ready to go." }],
    inflections: {
      comparative: "readier",
      superlative: "readiest"
    },
    similarWords: [{"word": "lady", "reason": "\u5f62\u8fd1", "zh": "\u5973\u58eb\uff0c\u5c0f\u59d0"}, {"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aread \u00b7 y",
    phrases: [{ phrase: "get ready", meaning: "准备好" }, { phrase: "ready to go", meaning: "准备好出发" }]
  },
  {
    id: "ride",
    word: "ride",
    syllables: ["ride"],
    partOfSpeech: "v.",
    definitions: [{ en: "to sit in or on something that you or someone else moves", zh: "\u9a91\uff0c\u4e58\u5750" }],
    examples: [{ sentence: "She rides her bike to the market." }],
    inflections: {
      pastTense: "rode",
      pastParticiple: "ridden",
      thirdPerson: "rides",
      presentParticiple: "riding"
    },
    similarWords: [{"word": "guide", "reason": "\u5f62\u8fd1", "zh": "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc"}, {"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}, {"word": "hide", "reason": "\u5f62\u8fd1", "zh": "\u8eb2\u85cf"}],
    phrases: [{ phrase: "ride a bike", meaning: "骑自行车" }, { phrase: "go for a ride", meaning: "去兜风" }]
  },
  {
    id: "table",
    word: "table",
    syllables: ["ta", "ble"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that people sit at to do things like eat", zh: "\u684c\u5b50\uff0c\u8868\u683c" }],
    examples: [{ sentence: "The table is heavy." }],
    inflections: {
      plural: "tables"
    },
    similarWords: [{"word": "able", "reason": "\u5f62\u8fd1", "zh": "\u80fd\u591f\u7684\uff0c\u6709\u80fd\u529b\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ata \u00b7 ble",
    phrases: [{ phrase: "at the table", meaning: "在餐桌旁" }, { phrase: "table tennis", meaning: "乒乓球" }]
  },
  {
    id: "work",
    word: "work",
    syllables: ["work"],
    partOfSpeech: "n.",
    definitions: [{ en: "a job", zh: "\u5de5\u4f5c" }],
    examples: [{ sentence: "He is late for work." }],
    rootAffix: { explanation: "work\u5de5\u4f5c = \u5de5\u4f5c" },
    similarWords: [{"word": "word", "reason": "\u5f62\u8fd1", "zh": "\u5355\u8bcd\uff0c\u8bcd\u8bed"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1awork\u5de5\u4f5c = \u5de5\u4f5c",
    phrases: [{ phrase: "go to work", meaning: "去上班" }, { phrase: "hard work", meaning: "努力工作" }]
  },
  {
    id: "write",
    word: "write",
    syllables: ["write"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make words with a pen or pencil", zh: "\u5199\uff0c\u5199\u5b57" }],
    examples: [{ sentence: "He starts to write a letter." }],
    inflections: {
      pastTense: "wrote",
      pastParticiple: "written",
      thirdPerson: "writes",
      presentParticiple: "writing"
    },
    similarWords: [{"word": "invite", "reason": "\u5f62\u8fd1", "zh": "\u9080\u8bf7"}, {"word": "quite", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u975e\u5e38"}, {"word": "polite", "reason": "\u5f62\u8fd1", "zh": "\u793c\u8c8c\u7684"}],
    phrases: [{ phrase: "write down", meaning: "写下" }, { phrase: "write a letter", meaning: "写信" }]
  },
  {
    id: "door",
    word: "door",
    syllables: ["door"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that you open to go into a building or room", zh: "\u95e8" }],
    examples: [{ sentence: "He goes through a big door at work." }],
    inflections: {
      plural: "doors"
    },
    similarWords: [{"word": "poor", "reason": "\u5f62\u8fd1", "zh": "\u8d2b\u7a77\u7684\uff0c\u53ef\u601c\u7684"}, {"word": "floor", "reason": "\u5f62\u8fd1", "zh": "\u5730\u677f"}],
    phrases: [{ phrase: "next door", meaning: "隔壁" }, { phrase: "open the door", meaning: "开门" }]
  },
  {
    id: "easy",
    word: "easy",
    syllables: ["eas", "y"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not hard to do", zh: "\u5bb9\u6613\u7684\uff0c\u7b80\u5355\u7684" }],
    examples: [{ sentence: "Tea is easy to make." }],
    inflections: {
      comparative: "easier",
      superlative: "easiest"
    },
    synonyms: [{"word": "simple", "zh": "\u7b80\u5355\u7684\uff1b\u6734\u7d20\u7684"}, {"word": "effortless", "zh": "不费力的"}],
    similarWords: [{"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aeas \u00b7 y",
    phrases: [{ phrase: "easy to do", meaning: "容易做" }, { phrase: "take it easy", meaning: "别紧张" }],
    antonyms: [{ word: "hard", zh: "困难的" }, { word: "difficult", zh: "困难的" }]
  },
  {
    id: "grow",
    word: "grow",
    syllables: ["grow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get bigger", zh: "\u751f\u957f\uff0c\u6210\u957f\uff0c\u79cd\u690d" }],
    examples: [{ sentence: "The plant needs water to grow." }],
    inflections: {
      pastTense: "grew",
      pastParticiple: "grown",
      thirdPerson: "grows",
      presentParticiple: "growing"
    },
    similarWords: [{"word": "throw", "reason": "\u5f62\u8fd1", "zh": "\u6254"}],
    phrases: [{ phrase: "grow up", meaning: "长大" }, { phrase: "grow into", meaning: "长成" }]
  },
  {
    id: "hate",
    word: "hate",
    syllables: ["hate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to dislike very much", zh: "\u6068\uff0c\u8ba8\u538c" }],
    examples: [{ sentence: "He hates vegetables." }],
    inflections: {
      pastTense: "hated",
      pastParticiple: "hated",
      thirdPerson: "hates",
      presentParticiple: "hating"
    },
    similarWords: [{"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "date", "reason": "\u5f62\u8fd1", "zh": "\u65e5\u671f"}, {"word": "gate", "reason": "\u5f62\u8fd1", "zh": "\u5927\u95e8"}],
    phrases: [{ phrase: "hate to do", meaning: "讨厌做" }, { phrase: "hate doing", meaning: "讨厌做" }],
    antonyms: [{ word: "love", zh: "爱" }]
  },
  {
    id: "morning",
    word: "morning",
    syllables: ["morn", "ing"],
    partOfSpeech: "n.",
    definitions: [{ en: "the first part of the day", zh: "\u65e9\u6668\uff0c\u65e9\u4e0a" }],
    examples: [{ sentence: "She drinks coffee early in the morning." }],
    inflections: {
      plural: "mornings"
    },
    similarWords: [{"word": "evening", "reason": "\u5f62\u8fd1", "zh": "\u508d\u665a\uff0c\u665a\u4e0a"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}, {"word": "amazing", "reason": "\u5f62\u8fd1", "zh": "\u60ca\u4eba\u7684\uff1b\u6781\u597d\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amorn \u00b7 ing",
    phrases: [{ phrase: "good morning", meaning: "早上好" }, { phrase: "in the morning", meaning: "在早上" }],
    antonyms: [{ word: "evening", zh: "傍晚" }]
  },
  {
    id: "music",
    word: "music",
    syllables: ["mu", "sic"],
    partOfSpeech: "n.",
    definitions: [{ en: "sounds made by instruments or voices", zh: "\u97f3\u4e50" }],
    examples: [{ sentence: "He learns to play music." }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amu \u00b7 sic",
    similarWords: [{"word": "musical", "reason": "\u62d3\u5c55", "zh": "音乐的"}, {"word": "musician", "reason": "\u62d3\u5c55", "zh": "音乐家"}],
    phrases: [{ phrase: "listen to music", meaning: "听音乐" }, { phrase: "classical music", meaning: "古典音乐" }],
    rootAffix: { explanation: "Muse缪斯 + -ic = 音乐" }
  },
  {
    id: "oclock",
    word: "o'clock",
    syllables: ["o'clock"],
    partOfSpeech: "adv.",
    definitions: [{ en: "being on the hour", zh: "\u2026\u70b9\u949f" }],
    examples: [{ sentence: "It is five o'clock." }],
    phrases: [{ phrase: "at five o'clock", meaning: "在五点钟" }, { phrase: "twelve o'clock", meaning: "十二点" }]
  },
  {
    id: "ring",
    word: "ring",
    syllables: ["ring"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of jewelry worn on the finger", zh: "\u6212\u6307\uff0c\u94c3\u94db\uff0c\u54cd" }],
    examples: [{ sentence: "This ring is not cheap." }],
    inflections: {
      plural: "rings"
    },
    similarWords: [{"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "wing", "reason": "\u5f62\u8fd1", "zh": "\u7fc5\u8180\uff1b\u673a\u7ffc"}, {"word": "king", "reason": "\u5f62\u8fd1", "zh": "\u56fd\u738b"}],
    phrases: [{ phrase: "ring up", meaning: "打电话" }, { phrase: "ring the bell", meaning: "按铃" }]
  },
  {
    id: "stop",
    word: "stop",
    syllables: ["stop"],
    partOfSpeech: "v.",
    definitions: [{ en: "to no longer move", zh: "\u505c\u6b62\uff0c\u505c\u4e0b" }],
    examples: [{ sentence: "Cars stop when the light is red." }],
    inflections: {
      pastTense: "stoped",
      pastParticiple: "stoped",
      thirdPerson: "stops",
      presentParticiple: "stoping"
    },
    synonyms: [{"word": "halt", "zh": "停止；停顿"}, {"word": "cease", "zh": "停止；终止"}, {"word": "pause", "zh": "暂停；中止"}],
    similarWords: [{"word": "top", "reason": "\u5f62\u8fd1", "zh": "\u9876\u90e8"}, {"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "step", "reason": "\u5f62\u8fd1", "zh": "\u6b65\u9aa4\uff1b\u811a\u6b65\uff1b\u8e29"}],
    phrases: [{ phrase: "stop doing", meaning: "停止做" }, { phrase: "bus stop", meaning: "公交车站" }],
    antonyms: [{ word: "go", zh: "走" }, { word: "start", zh: "开始" }]
  },
  {
    id: "study",
    word: "study",
    syllables: ["stud", "y"],
    partOfSpeech: "v.",
    definitions: [{ en: "to read and practice in order to learn", zh: "\u5b66\u4e60\uff0c\u7814\u7a76" }],
    examples: [{ sentence: "He studies for two hours every night." }],
    inflections: {
      pastTense: "studied",
      pastParticiple: "studied",
      thirdPerson: "studies",
      presentParticiple: "studying"
    },
    similarWords: [{"word": "cloudy", "reason": "\u5f62\u8fd1", "zh": "\u591a\u4e91\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1astud \u00b7 y",
    phrases: [{ phrase: "study hard", meaning: "努力学习" }, { phrase: "study for", meaning: "为...学习" }]
  },
  {
    id: "mirror",
    word: "mirror",
    syllables: ["mir", "ror"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that people look in to see themselves", zh: "\u955c\u5b50" }],
    examples: [{ sentence: "He looks in the mirror when he gets ready for work." }],
    inflections: {
      plural: "mirrors"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amir \u00b7 ror",
    phrases: [{ phrase: "look in the mirror", meaning: "照镜子" }, { phrase: "rearview mirror", meaning: "后视镜" }]
  },
  {
    id: "nurse",
    word: "nurse",
    syllables: ["nurse"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who helps sick people and works with a doctor", zh: "\u62a4\u58eb" }],
    examples: [{ sentence: "The nurse helps the sick woman." }],
    inflections: {
      plural: "nurses"
    },
    similarWords: [{"word": "worse", "reason": "\u5f62\u8fd1", "zh": "\u66f4\u574f\u7684\uff1b\u66f4\u5dee\u7684"}],
    phrases: [{ phrase: "head nurse", meaning: "护士长" }, { phrase: "nurse's office", meaning: "医务室" }]
  },
  {
    id: "pocket",
    word: "pocket",
    syllables: ["pock", "et"],
    partOfSpeech: "n.",
    definitions: [{ en: "something on clothing to put things in", zh: "\u53e3\u888b" }],
    examples: [{ sentence: "He puts the number in his pocket." }],
    inflections: {
      plural: "pockets"
    },
    similarWords: [{"word": "basket", "reason": "\u5f62\u8fd1", "zh": "\u7bee\u5b50"}, {"word": "market", "reason": "\u5f62\u8fd1", "zh": "\u5e02\u573a"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apock \u00b7 et",
    phrases: [{ phrase: "pocket money", meaning: "零花钱" }, { phrase: "pocket book", meaning: "口袋书" }]
  },
  {
    id: "pretty",
    word: "pretty",
    syllables: ["pret", "ty"],
    partOfSpeech: "adj.",
    definitions: [{ en: "nice to look at", zh: "\u6f02\u4eae\u7684\uff0c\u76f8\u5f53\u7684" }],
    examples: [{ sentence: "The tree is pretty." }],
    inflections: {
      comparative: "prettier",
      superlative: "prettiest"
    },
    synonyms: [{"word": "beautiful", "zh": "\u7f8e\u4e3d\u7684"}, {"word": "lovely", "zh": "可爱的；讨人喜欢的"}, {"word": "cute", "zh": "可爱的；精致的"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apret \u00b7 ty",
    similarWords: [{"word": "prettily", "reason": "\u62d3\u5c55", "zh": "漂亮地；可爱地"}],
    phrases: [{ phrase: "pretty girl", meaning: "漂亮女孩" }, { phrase: "pretty good", meaning: "相当好" }]
  },
  {
    id: "problem",
    word: "problem",
    syllables: ["prob", "lem"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is hard to do", zh: "\u95ee\u9898\uff0c\u96be\u9898" }],
    examples: [{ sentence: "She has a problem with her car." }],
    inflections: {
      plural: "problems"
    },
    rootAffix: { explanation: "pro-\u524d + blem\u6254 = \u6254\u5728\u524d\u9762\u7684\u95ee\u9898\u2192\u95ee\u9898" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apro-\u524d + blem\u6254 = \u6254\u5728\u524d\u9762\u7684\u95ee\u9898\u2192\u95ee\u9898",
    phrases: [{ phrase: "solve a problem", meaning: "解决问题" }, { phrase: "no problem", meaning: "没问题" }],
    synonyms: [{"word": "trouble", "zh": "问题"}]
  },
  {
    id: "pull",
    word: "pull",
    syllables: ["pull"],
    partOfSpeech: "v.",
    definitions: [{ en: "to hold onto something and move it toward you", zh: "\u62c9\uff0c\u62d6" }],
    examples: [{ sentence: "She pulls the bag." }],
    inflections: {
      pastTense: "pulled",
      pastParticiple: "pulled",
      thirdPerson: "pulls",
      presentParticiple: "pulling"
    },
    similarWords: [{"word": "full", "reason": "\u5f62\u8fd1", "zh": "\u6ee1\u7684\uff1b\u9971\u7684"}],
    phrases: [{ phrase: "pull up", meaning: "拉上来" }, { phrase: "pull out", meaning: "拔出" }],
    antonyms: [{ word: "push", zh: "推" }]
  },
  {
    id: "sad",
    word: "sad",
    syllables: ["sad"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not happy", zh: "\u4f24\u5fc3\u7684\uff0c\u96be\u8fc7\u7684" }],
    examples: [{ sentence: "The child is sad." }],
    inflections: {
      comparative: "sader",
      superlative: "sadest"
    },
    synonyms: [{"word": "unhappy", "zh": "不开心的；不幸的"}, {"word": "sorrowful", "zh": "悲伤的；愁苦的"}, {"word": "gloomy", "zh": "阴郁的；沮丧的"}],
    similarWords: [{"word": "bad", "reason": "\u5f62\u8fd1", "zh": "\u574f\u7684\uff0c\u4e0d\u597d\u7684"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
    phrases: [{ phrase: "sad story", meaning: "悲伤的故事" }, { phrase: "feel sad", meaning: "感到难过" }],
    antonyms: [{ word: "happy", zh: "快乐的" }]
  },
  {
    id: "try",
    word: "try",
    syllables: ["try"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make an effort to do something", zh: "\u5c1d\u8bd5\uff0c\u52aa\u529b" }],
    examples: [{ sentence: "The cat tries to catch the fish." }],
    inflections: {
      pastTense: "tried",
      pastParticiple: "tried",
      thirdPerson: "tries",
      presentParticiple: "trying"
    },
    synonyms: [{"word": "attempt", "zh": "尝试；试图"}, {"word": "endeavor", "zh": "努力；尝试"}, {"word": "strive", "zh": "奋斗；努力"}],
    similarWords: [{"word": "cry", "reason": "\u5f62\u8fd1", "zh": "\u54ed\uff0c\u54ed\u6ce3"}, {"word": "dry", "reason": "\u5f62\u8fd1", "zh": "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}],
    phrases: [{ phrase: "try on", meaning: "试穿" }, { phrase: "try one's best", meaning: "尽力" }]
  },
  {
    id: "want",
    word: "want",
    syllables: ["want"],
    partOfSpeech: "v.",
    definitions: [{ en: "to wish for", zh: "\u8981\uff0c\u60f3\u8981" }],
    examples: [{ sentence: "She wants new shoes." }],
    inflections: {
      pastTense: "wanted",
      pastParticiple: "wanted",
      thirdPerson: "wants",
      presentParticiple: "wanting"
    },
    similarWords: [{"word": "plant", "reason": "\u5f62\u8fd1", "zh": "\u690d\u7269"}, {"word": "giant", "reason": "\u5f62\u8fd1", "zh": "\u5de8\u5927\u7684\uff1b\u5de8\u4eba"}, {"word": "wait", "reason": "\u5f62\u8fd1", "zh": "\u7b49\u5f85"}],
    phrases: [{ phrase: "want to do", meaning: "想要做" }, { phrase: "want a go", meaning: "想试试" }],
    synonyms: [{"word": "desire", "zh": "渴望"}, {"word": "wish", "zh": "希望"}]
  },
  {
    id: "wrong",
    word: "wrong",
    syllables: ["wrong"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not correct", zh: "\u9519\u8bef\u7684\uff0c\u4e0d\u5bf9\u7684" }],
    examples: [{ sentence: "I wrote the wrong answer." }],
    inflections: {
      comparative: "wronger",
      superlative: "wrongest"
    },
    similarWords: [{"word": "strong", "reason": "\u5f62\u8fd1", "zh": "\u5f3a\u58ee\u7684\uff0c\u6709\u529b\u7684"}, {"word": "long", "reason": "\u5f62\u8fd1", "zh": "\u957f\u7684\uff0c\u957f\u4e45\u7684"}],
    phrases: [{ phrase: "go wrong", meaning: "出问题" }, { phrase: "what's wrong", meaning: "怎么了" }],
    synonyms: [{"word": "incorrect", "zh": "不正确的"}],
    antonyms: [{ word: "right", zh: "正确的" }]
  },
  {
    id: "high",
    word: "high",
    syllables: ["high"],
    partOfSpeech: "adv.",
    definitions: [{ en: "for above the ground", zh: "\u9ad8\u7684\uff0c\u9ad8\u7684" }],
    examples: [{ sentence: "The pretty balloons are high in the sky." }],
    similarWords: [{"word": "weigh", "reason": "\u5f62\u8fd1", "zh": "\u79f0\u91cd"}],
    phrases: [{ phrase: "high school", meaning: "高中" }, { phrase: "high and low", meaning: "到处" }],
    antonyms: [{ word: "low", zh: "低的" }]
  },
  {
    id: "keep",
    word: "keep",
    syllables: ["keep"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put and leave something in one place", zh: "\u4fdd\u6301\uff0c\u7ee7\u7eed" }],
    examples: [{ sentence: "We keep the sugar in a jar." }],
    inflections: {
      pastTense: "kept",
      pastParticiple: "kept",
      thirdPerson: "keeps",
      presentParticiple: "keeping"
    },
    synonyms: [{"word": "retain", "zh": "保留；保持"}, {"word": "maintain", "zh": "维持；保养"}, {"word": "hold", "zh": "\u62ff\u7740"}],
    similarWords: [{"word": "deep", "reason": "\u5f62\u8fd1", "zh": "\u6df1\u7684"}, {"word": "sleep", "reason": "\u5f62\u8fd1", "zh": "\u7761\u89c9\uff0c\u7761\u7720"}],
    phrases: [{ phrase: "keep on", meaning: "继续" }, { phrase: "keep doing", meaning: "一直做" }, { phrase: "keep in touch", meaning: "保持联系" }]
  },
  {
    id: "know",
    word: "know",
    syllables: ["know"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have information already", zh: "\u77e5\u9053\uff0c\u8ba4\u8bc6" }],
    examples: [{ sentence: "She knows how to fix the problem." }],
    inflections: {
      pastTense: "knew",
      pastParticiple: "known",
      thirdPerson: "knows",
      presentParticiple: "knowing"
    },
    synonyms: [{"word": "understand", "zh": "\u7406\u89e3\uff0c\u660e\u767d"}, {"word": "comprehend", "zh": "理解；领会"}],
    similarWords: [{"word": "knowledge", "reason": "\u62d3\u5c55", "zh": "知识；学识"}],
    phrases: [{ phrase: "know about", meaning: "了解" }, { phrase: "get to know", meaning: "认识" }]
  },
  {
    id: "let",
    word: "let",
    syllables: ["let"],
    partOfSpeech: "v.",
    definitions: [{ en: "to allow; to agree to", zh: "\u8ba9\uff0c\u5141\u8bb8" }],
    examples: [{ sentence: "Mom lets me listen to music when I study." }],
    inflections: {
      pastTense: "let",
      pastParticiple: "let",
      thirdPerson: "lets",
      presentParticiple: "letting"
    },
    similarWords: [{"word": "wet", "reason": "\u5f62\u8fd1", "zh": "\u6e7f\u7684"}, {"word": "pet", "reason": "\u5f62\u8fd1", "zh": "\u5ba0\u7269"}, {"word": "set", "reason": "\u5f62\u8fd1", "zh": "\u8bbe\u7f6e\uff1b\u4e00\u5957"}, {"word": "letter", "reason": "\u62d3\u5c55", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}],
    phrases: [{ phrase: "let's go", meaning: "走吧" }, { phrase: "let in", meaning: "让进来" }]
  },
  {
    id: "move",
    word: "move",
    syllables: ["move"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put in a different place", zh: "\u79fb\u52a8\uff0c\u642c\u52a8" }],
    examples: [{ sentence: "They move the chair." }],
    inflections: {
      pastTense: "moved",
      pastParticiple: "moved",
      thirdPerson: "moves",
      presentParticiple: "moving"
    },
    synonyms: [{"word": "shift", "zh": "转移；改变"}, {"word": "transfer", "zh": "转移；调动"}, {"word": "relocate", "zh": "迁移；重新安置"}],
    similarWords: [{"word": "love", "reason": "\u5f62\u8fd1", "zh": "\u7231\uff0c\u559c\u6b22"}, {"word": "glove", "reason": "\u5f62\u8fd1", "zh": "\u624b\u5957"}],
    phrases: [{ phrase: "move in", meaning: "搬进" }, { phrase: "move away", meaning: "搬走" }, { phrase: "move on", meaning: "继续前进" }]
  },
  {
    id: "pass",
    word: "pass",
    syllables: ["pass"],
    partOfSpeech: "v.",
    definitions: [{ en: "to throw to another person", zh: "\u7ecf\u8fc7\uff0c\u4f20\u9012" }],
    examples: [{ sentence: "He is ready to pass the ball." }],
    inflections: {
      pastTense: "passed",
      pastParticiple: "passed",
      thirdPerson: "passes",
      presentParticiple: "passing"
    },
    similarWords: [{"word": "grass", "reason": "\u5f62\u8fd1", "zh": "\u8349"}, {"word": "glass", "reason": "\u5f62\u8fd1", "zh": "\u73bb\u7483\u676f"}, {"word": "class", "reason": "\u5f62\u8fd1", "zh": "\u73ed\u7ea7"}],
    phrases: [{ phrase: "pass by", meaning: "经过" }, { phrase: "pass the test", meaning: "通过考试" }]
  },
  {
    id: "point",
    word: "point",
    syllables: ["point"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use your finger to show someone where something is", zh: "\u6307\uff0c\u70b9\uff0c\u5206\u6570" }],
    examples: [{ sentence: "He points to the numbers on the page." }],
    inflections: {
      pastTense: "pointed",
      pastParticiple: "pointed",
      thirdPerson: "points",
      presentParticiple: "pointing"
    },
    similarWords: [{"word": "print", "reason": "\u5f62\u8fd1", "zh": "\u5370\u5237\uff1b\u6253\u5370"}, {"word": "paint", "reason": "\u5f62\u8fd1", "zh": "\u753b\u753b"}],
    phrases: [{ phrase: "point to", meaning: "指向" }, { phrase: "point out", meaning: "指出" }, { phrase: "point at", meaning: "指着" }]
  },
  {
    id: "push",
    word: "push",
    syllables: ["push"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move something away from you", zh: "\u63a8\uff0c\u63a8\u52a8" }],
    examples: [{ sentence: "The nurse pushes the wheelchair." }],
    inflections: {
      pastTense: "pushed",
      pastParticiple: "pushed",
      thirdPerson: "pushes",
      presentParticiple: "pushing"
    },
    similarWords: [{"word": "brush", "reason": "\u5f62\u8fd1", "zh": "\u5237\u5b50"}],
    phrases: [{ phrase: "push open", meaning: "推开" }, { phrase: "push ahead", meaning: "前进" }],
    antonyms: [{ word: "pull", zh: "拉" }]
  },
  {
    id: "quick",
    word: "quick",
    syllables: ["quick"],
    partOfSpeech: "adj.",
    definitions: [{ en: "fast", zh: "\u5feb\u7684\uff0c\u8fc5\u901f\u7684" }],
    examples: [{ sentence: "The boy is quick." }],
    inflections: {
      comparative: "quicker",
      superlative: "quickest"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}, {"word": "pick", "reason": "\u5f62\u8fd1", "zh": "\u6311\u9009"}],
    phrases: [{ phrase: "quick fix", meaning: "快速修复" }, { phrase: "quick look", meaning: "快速看一眼" }],
    synonyms: [{"word": "fast", "zh": "快的"}, {"word": "rapid", "zh": "迅速的"}]
  },
  {
    id: "together",
    word: "together",
    syllables: ["to", "geth", "er"],
    partOfSpeech: "adv.",
    definitions: [{ en: "with others", zh: "\u4e00\u8d77\uff0c\u5171\u540c" }],
    examples: [{ sentence: "They play together in the park." }],
    rootAffix: { explanation: "to-\u5230 + gether\u805a\u96c6 = \u805a\u96c6\u5230\u4e00\u8d77\u2192\u4e00\u8d77" },
    similarWords: [{"word": "weather", "reason": "\u5f62\u8fd1", "zh": "\u5929\u6c14"}],
    mnemonics: "\"to\"+\"get\"+\"her\" \u2192 \u4e00\u8d77\u53bb\u5979\u5bb6 \u2192 \u5728\u4e00\u8d77",
    phrases: [{ phrase: "get together", meaning: "聚会" }, { phrase: "live together", meaning: "住在一起" }],
    antonyms: [{ word: "alone", zh: "独自地" }]
  },
  {
    id: "fall",
    word: "fall",
    syllables: ["fall"],
    partOfSpeech: "v.",
    definitions: [{ en: "to come or go down quickly", zh: "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929" }],
    examples: [{ sentence: "He fell when he ran to the door." }],
    inflections: {
      pastTense: "fell",
      pastParticiple: "fallen",
      thirdPerson: "falls",
      presentParticiple: "falling"
    },
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}, {"word": "ball", "reason": "\u5f62\u8fd1", "zh": "\u7403"}],
    phrases: [{ phrase: "fall down", meaning: "摔倒" }, { phrase: "fall asleep", meaning: "睡着" }, { phrase: "fall behind", meaning: "落后" }],
    antonyms: [{ word: "rise", zh: "升起" }]
  },
  {
    id: "lady",
    word: "lady",
    syllables: ["la", "dy"],
    partOfSpeech: "n.",
    definitions: [{ en: "a woman", zh: "\u5973\u58eb\uff0c\u5c0f\u59d0" }],
    examples: [{ sentence: "The lady is sad." }],
    inflections: {
      plural: "ladies"
    },
    similarWords: [{"word": "ready", "reason": "\u5f62\u8fd1", "zh": "\u51c6\u5907\u597d\u7684"}, {"word": "lazy", "reason": "\u5f62\u8fd1", "zh": "\u61d2\u60f0\u7684\uff1b\u61d2\u6563\u7684"}, {"word": "lay", "reason": "\u5f62\u8fd1", "zh": "\u653e\u7f6e\uff1b\u4ea7\u5375"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ala \u00b7 dy",
    phrases: [{ phrase: "first lady", meaning: "第一夫人" }, { phrase: "ladies and gentlemen", meaning: "女士们先生们" }]
  },
  {
    id: "rest",
    word: "rest",
    syllables: ["rest"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take a break", zh: "\u4f11\u606f\uff0c\u5269\u4f59" }],
    examples: [{ sentence: "She rests after work." }],
    inflections: {
      pastTense: "rested",
      pastParticiple: "rested",
      thirdPerson: "rests",
      presentParticiple: "resting"
    },
    similarWords: [{"word": "west", "reason": "\u5f62\u8fd1", "zh": "\u897f"}, {"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}, {"word": "best", "reason": "\u5f62\u8fd1", "zh": "\u6700\u597d\u7684"}],
    phrases: [{ phrase: "have a rest", meaning: "休息一下" }, { phrase: "the rest of", meaning: "其余的" }]
  },
  {
    id: "run",
    word: "run",
    syllables: ["run"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use the legs to move fast", zh: "\u8dd1\uff0c\u8dd1\u6b65" }],
    examples: [{ sentence: "I run at six o\u2019clock in the morning." }],
    inflections: {
      pastTense: "ran",
      pastParticiple: "run",
      thirdPerson: "runs",
      presentParticiple: "running"
    },
    synonyms: [{"word": "jog", "zh": "慢跑"}, {"word": "sprint", "zh": "短跑；全力奔跑"}, {"word": "dash", "zh": "冲刺；飞奔"}],
    similarWords: [{"word": "rub", "reason": "\u5f62\u8fd1", "zh": "\u6469\u64e6\uff1b\u64e6"}],
    phrases: [{ phrase: "run away", meaning: "逃跑" }, { phrase: "run out", meaning: "用完" }, { phrase: "run after", meaning: "追赶" }]
  },
  {
    id: "season",
    word: "season",
    syllables: ["sea", "son"],
    partOfSpeech: "n.",
    definitions: [{ en: "the time of year when something usually happens", zh: "\u5b63\u8282" }],
    examples: [{ sentence: "They are ready for football season" }],
    inflections: {
      plural: "seasons"
    },
    similarWords: [{"word": "reason", "reason": "\u5f62\u8fd1", "zh": "\u7406\u7531\uff1b\u539f\u56e0"}, {"word": "poison", "reason": "\u5f62\u8fd1", "zh": "\u6bd2\u836f\uff1b\u6bd2\u7269"}, {"word": "lesson", "reason": "\u5f62\u8fd1", "zh": "\u8bfe\uff0c\u8bfe\u7a0b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asea \u00b7 son",
    phrases: [{ phrase: "four seasons", meaning: "四季" }, { phrase: "rainy season", meaning: "雨季" }]
  },
  {
    id: "short",
    word: "short",
    syllables: ["short"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not tall; not long", zh: "\u77ed\u7684\uff0c\u77ee\u7684" }],
    examples: [{ sentence: "This tree is short. It does not grow tall." }],
    inflections: {
      comparative: "shorter",
      superlative: "shortest"
    },
    similarWords: [{"word": "sport", "reason": "\u5f62\u8fd1", "zh": "\u8fd0\u52a8\uff1b\u4f53\u80b2"}, {"word": "report", "reason": "\u5f62\u8fd1", "zh": "\u62a5\u544a\uff1b\u62a5\u9053"}, {"word": "shout", "reason": "\u5f62\u8fd1", "zh": "\u558a\u53eb\uff1b\u5927\u58f0\u8bf4"}],
    phrases: [{ phrase: "short hair", meaning: "短发" }, { phrase: "in short", meaning: "简而言之" }],
    antonyms: [{ word: "tall", zh: "高的" }, { word: "long", zh: "长的" }]
  },
  {
    id: "sky",
    word: "sky",
    syllables: ["sky"],
    partOfSpeech: "n.",
    definitions: [{ en: "the space above us and around the world", zh: "\u5929\u7a7a" }],
    examples: [{ sentence: "The sky is dark at night." }],
    inflections: {
      plural: "skies"
    },
    similarWords: [{"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "shy", "reason": "\u5f62\u8fd1", "zh": "\u5bb3\u7f9e\u7684\uff1b\u80c6\u602f\u7684"}],
    phrases: [{ phrase: "blue sky", meaning: "蓝天" }, { phrase: "in the sky", meaning: "在天上" }]
  },
  {
    id: "stand",
    word: "stand",
    syllables: ["stand"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be on your feet", zh: "\u7ad9\uff0c\u7ad9\u7acb" }],
    examples: [{ sentence: "He stands in the same place for many hours." }],
    inflections: {
      pastTense: "stood",
      pastParticiple: "stood",
      thirdPerson: "stands",
      presentParticiple: "standing"
    },
    similarWords: [{"word": "land", "reason": "\u5f62\u8fd1", "zh": "\u571f\u5730"}, {"word": "band", "reason": "\u5f62\u8fd1", "zh": "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5"}, {"word": "grand", "reason": "\u5f62\u8fd1", "zh": "\u5b8f\u4f1f\u7684"}],
    phrases: [{ phrase: "stand up", meaning: "起立" }, { phrase: "stand for", meaning: "代表" }]
  },
  {
    id: "tall",
    word: "tall",
    syllables: ["tall"],
    partOfSpeech: "adj.",
    definitions: [{ en: "long from top to bottom", zh: "\u9ad8\u7684" }],
    examples: [{ sentence: "Kayla is a tall girl." }],
    inflections: {
      comparative: "taller",
      superlative: "tallest"
    },
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "ball", "reason": "\u5f62\u8fd1", "zh": "\u7403"}],
    phrases: [{ phrase: "tall building", meaning: "高楼" }, { phrase: "tall tree", meaning: "高大的树" }],
    antonyms: [{ word: "short", zh: "矮的" }]
  },
  {
    id: "wear",
    word: "wear",
    syllables: ["wear"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have clothing or jewelry on the body", zh: "\u7a7f\uff0c\u7a7f\u7740" }],
    examples: [{ sentence: "He wears a jacket with a pocket." }],
    inflections: {
      pastTense: "wore",
      pastParticiple: "worn",
      thirdPerson: "wears",
      presentParticiple: "wearing"
    },
    similarWords: [{"word": "hear", "reason": "\u5f62\u8fd1", "zh": "\u542c\u5230\uff0c\u542c\u89c1"}, {"word": "year", "reason": "\u5f62\u8fd1", "zh": "\u5e74"}, {"word": "tear", "reason": "\u5f62\u8fd1", "zh": "\u773c\u6cea\uff1b\u6495\u7834"}],
    phrases: [{ phrase: "wear out", meaning: "穿破" }, { phrase: "wear glasses", meaning: "戴眼镜" }]
  },
  {
    id: "bottle",
    word: "bottle",
    syllables: ["bot", "tle"],
    partOfSpeech: "n.",
    definitions: [{ en: "a glass or plastic container for liquids", zh: "\u74f6\u5b50" }],
    examples: [{ sentence: "The bottle is on the table." }],
    inflections: {
      plural: "bottles"
    },
    rootAffix: { explanation: "bottle\u74f6\u5b50\uff08\u62df\u58f0\u8bcd\uff0c\u74f6\u5b50\u5012\u6c34\u7684\u58f0\u97f3\uff09" },
    similarWords: [{"word": "little", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "title", "reason": "\u5f62\u8fd1", "zh": "\u6807\u9898\uff1b\u5934\u8854"}, {"word": "gentle", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}],
    mnemonics: "\u74f6\u5b50\u5012\u6c34\u7684\u58f0\u97f3 \"bo-ttle\"",
    phrases: [{ phrase: "water bottle", meaning: "水瓶" }, { phrase: "a bottle of", meaning: "一瓶" }]
  },
  {
    id: "change",
    word: "change",
    syllables: ["change"],
    partOfSpeech: "v.",
    definitions: [{ en: "to become different", zh: "\u6539\u53d8\uff1b\u96f6\u94b1" }],
    examples: [{ sentence: "It changes into another animal." }],
    inflections: {
      pastTense: "changed",
      pastParticiple: "changed",
      thirdPerson: "changes",
      presentParticiple: "changing"
    },
    rootAffix: { explanation: "chang\u6539\u53d8 = \u6539\u53d8" },
    synonyms: [{"word": "alter", "zh": "改变；修改"}, {"word": "modify", "zh": "修改；调整"}, {"word": "transform", "zh": "转变；改造"}],
    similarWords: [{"word": "strange", "reason": "\u5f62\u8fd1", "zh": "\u5947\u602a\u7684\uff1b\u964c\u751f\u7684"}, {"word": "chance", "reason": "\u5f62\u8fd1", "zh": "\u673a\u4f1a\uff1b\u53ef\u80fd\u6027"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1achang\u6539\u53d8 = \u6539\u53d8",
    phrases: [{ phrase: "change into", meaning: "变成" }, { phrase: "change one's mind", meaning: "改变主意" }]
  },
  {
    id: "cool",
    word: "cool",
    syllables: ["cool"],
    partOfSpeech: "adj.",
    definitions: [{ en: "a little bit cold", zh: "\u51c9\u723d\u7684\uff1b\u9177\u7684" }],
    examples: [{ sentence: "He wears a jacket on a cool day." }],
    inflections: {
      comparative: "cooler",
      superlative: "coolest"
    },
    similarWords: [{"word": "tool", "reason": "\u5f62\u8fd1", "zh": "\u5de5\u5177\uff1b\u7528\u5177"}, {"word": "cook", "reason": "\u5f62\u8fd1", "zh": "\u505a\u996d\uff0c\u70f9\u996a\uff0c\u53a8\u5e08"}],
    phrases: [{ phrase: "cool down", meaning: "冷却" }, { phrase: "keep cool", meaning: "保持冷静" }],
    antonyms: [{ word: "warm", zh: "温暖的" }]
  },
  {
    id: "cover",
    word: "cover",
    syllables: ["cov", "er"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put something over something else", zh: "\u8986\u76d6\uff1b\u5c01\u9762" }],
    examples: [{ sentence: "He covers the food to keep it warm." }],
    inflections: {
      pastTense: "covered",
      pastParticiple: "covered",
      thirdPerson: "covers",
      presentParticiple: "covering"
    },
    similarWords: [{"word": "river", "reason": "\u5f62\u8fd1", "zh": "\u6cb3\u6d41"}, {"word": "clever", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684"}, {"word": "discover", "reason": "\u62d3\u5c55", "zh": "\u53d1\u73b0\uff1b\u53d1\u89c9"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acov \u00b7 er",
    phrases: [{ phrase: "cover up", meaning: "掩盖" }, { phrase: "book cover", meaning: "书封面" }]
  },
  {
    id: "dry",
    word: "dry",
    syllables: ["dry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take away water", zh: "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5" }],
    examples: [{ sentence: "The lady dries the dishes." }],
    inflections: {
      pastTense: "dried",
      pastParticiple: "dried",
      thirdPerson: "dries",
      presentParticiple: "drying"
    },
    similarWords: [{"word": "cry", "reason": "\u5f62\u8fd1", "zh": "\u54ed\uff0c\u54ed\u6ce3"}, {"word": "day", "reason": "\u5f62\u8fd1", "zh": "\u5929\uff0c\u65e5\uff0c\u767d\u5929"}, {"word": "try", "reason": "\u5f62\u8fd1", "zh": "\u5c1d\u8bd5\uff0c\u52aa\u529b"}],
    phrases: [{ phrase: "dry up", meaning: "干涸" }, { phrase: "dry out", meaning: "变干" }],
    antonyms: [{ word: "wet", zh: "湿的" }]
  },
  {
    id: "egg",
    word: "egg",
    syllables: ["egg"],
    partOfSpeech: "n.",
    definitions: [{ en: "something round made by a mother bird", zh: "\u86cb\uff1b\u9e21\u86cb" }],
    examples: [{ sentence: "I give the eggs to my mom." }],
    inflections: {
      plural: "eggs"
    },
    phrases: [{ phrase: "egg white", meaning: "蛋白" }, { phrase: "egg yolk", meaning: "蛋黄" }]
  },
  {
    id: "expensive",
    word: "expensive",
    syllables: ["ex", "pen", "sive"],
    partOfSpeech: "adj.",
    definitions: [{ en: "costing a lot of money", zh: "\u6602\u8d35\u7684" }],
    examples: [{ sentence: "The car is expensive." }],
    inflections: {
      comparative: "more expensive",
      superlative: "most expensive"
    },
    rootAffix: { explanation: "ex-\u51fa + pens\u82b1\u8d39 + -ive = \u9700\u8981\u82b1\u51fa\u53bb\u7684\u2192\u6602\u8d35\u7684" },
    similarWords: [{"word": "attractive", "reason": "\u5f62\u8fd1", "zh": "\u6709\u5438\u5f15\u529b\u7684"}, {"word": "positive", "reason": "\u5f62\u8fd1", "zh": "\u79ef\u6781\u7684\uff1b\u80af\u5b9a\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + pens\u82b1\u8d39 + -ive = \u9700\u8981\u82b1\u51fa\u53bb\u7684\u2192\u6602\u8d35\u7684",
    phrases: [{ phrase: "too expensive", meaning: "太贵" }, { phrase: "expensive gift", meaning: "昂贵的礼物" }],
    antonyms: [{ word: "cheap", zh: "便宜的" }]
  },
  {
    id: "fast",
    word: "fast",
    syllables: ["fast"],
    partOfSpeech: "adj.",
    definitions: [{ en: "able to move quickly", zh: "\u5feb\u7684\uff1b\u8fc5\u901f\u5730" }],
    examples: [{ sentence: "The plane high in the sky is very fast." }],
    inflections: {
      comparative: "faster",
      superlative: "fastest"
    },
    synonyms: [{"word": "quick", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "rapid", "zh": "迅速的；快速的"}, {"word": "swift", "zh": "迅速的；敏捷的"}],
    similarWords: [{"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
    phrases: [{ phrase: "fast food", meaning: "快餐" }, { phrase: "fast asleep", meaning: "熟睡" }],
    antonyms: [{ word: "slow", zh: "慢的" }]
  },
  {
    id: "fish",
    word: "fish",
    syllables: ["fish"],
    partOfSpeech: "n.",
    definitions: [{ en: "an animal that lives in water", zh: "\u9c7c\uff1b\u9493\u9c7c" }],
    examples: [{ sentence: "The fish is ready for me to eat." }],
    inflections: {
      plural: "fish"
    },
    similarWords: [{"word": "dish", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50\uff0c\u83dc\u80b4"}, {"word": "wish", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b"}],
    phrases: [{ phrase: "go fishing", meaning: "去钓鱼" }, { phrase: "fish and chips", meaning: "炸鱼薯条" }]
  },
  {
    id: "knife",
    word: "knife",
    syllables: ["knife"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sharp tool used for cutting", zh: "\u5200" }],
    examples: [{ sentence: "My parents do not let me use the knife." }],
    inflections: {
      plural: "knives"
    },
    similarWords: [{"word": "life", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6d3b\uff0c\u751f\u547d"}, {"word": "wife", "reason": "\u5f62\u8fd1", "zh": "\u59bb\u5b50"}],
    phrases: [{ phrase: "knife and fork", meaning: "刀叉" }, { phrase: "cut with a knife", meaning: "用刀切" }]
  },
  {
    id: "full",
    word: "full",
    syllables: ["full"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having no room for more", zh: "\u6ee1\u7684\uff1b\u9971\u7684" }],
    examples: [{ sentence: "The bags are full." }],
    inflections: {
      comparative: "fuller",
      superlative: "fullest"
    },
    similarWords: [{"word": "pull", "reason": "\u5f62\u8fd1", "zh": "\u62c9\uff0c\u62d6"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "fill", "reason": "\u5f62\u8fd1", "zh": "\u586b\u6ee1"}],
    phrases: [{ phrase: "full of", meaning: "充满" }, { phrase: "full name", meaning: "全名" }],
    antonyms: [{ word: "empty", zh: "空的" }]
  },
  {
    id: "garden",
    word: "garden",
    syllables: ["gar", "den"],
    partOfSpeech: "n.",
    definitions: [{ en: "an area where flowers or vegetables are grown", zh: "\u82b1\u56ed\uff1b\u5ead\u9662" }],
    examples: [{ sentence: "The plants in the garden are short." }],
    inflections: {
      plural: "gardens"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1agar \u00b7 den",
    phrases: [{ phrase: "garden party", meaning: "花园派对" }, { phrase: "in the garden", meaning: "在花园" }]
  },
  {
    id: "hot",
    word: "hot",
    syllables: ["hot"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of heat", zh: "\u70ed\u7684\uff1b\u8fa3\u7684" }],
    examples: [{ sentence: "The soup is hot." }],
    inflections: {
      comparative: "hoter",
      superlative: "hotest"
    },
    synonyms: [{"word": "warm", "zh": "\u6e29\u6696\u7684\uff1b\u4f7f\u6e29\u6696"}, {"word": "burning", "zh": "烧灼的；热烈的"}, {"word": "scorching", "zh": "炙热的；热烈的"}],
    similarWords: [{"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}, {"word": "hat", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}, {"word": "pot", "reason": "\u5f62\u8fd1", "zh": "\u9505\uff1b\u58f6\uff1b\u7f50"}],
    phrases: [{ phrase: "hot dog", meaning: "热狗" }, { phrase: "hot weather", meaning: "炎热的天气" }],
    antonyms: [{ word: "cold", zh: "冷的" }]
  },
  {
    id: "ill",
    word: "ill",
    syllables: ["ill"],
    partOfSpeech: "adj.",
    definitions: [{ en: "sick; not well", zh: "\u751f\u75c5\u7684" }],
    examples: [{ sentence: "Betty is ill. She needs to rest." }],
    inflections: {
      comparative: "iller",
      superlative: "illest"
    },
    synonyms: [{"word": "sick", "zh": "生病的"}],
        similarWords: [{"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "kill", "reason": "\u5f62\u8fd1", "zh": "\u6740\uff1b\u6740\u6b7b"}, {"word": "fill", "reason": "\u5f62\u8fd1", "zh": "\u586b\u6ee1"}],
    phrases: [{ phrase: "fall ill", meaning: "生病" }, { phrase: "seriously ill", meaning: "病重" }],
    antonyms: [{ word: "well", zh: "健康的" }]
  },
  {
    id: "kitchen",
    word: "kitchen",
    syllables: ["kitch", "en"],
    partOfSpeech: "n.",
    definitions: [{ en: "a room where people cook food", zh: "\u53a8\u623f" }],
    examples: [{ sentence: "There is not a table in the kitchen." }],
    inflections: {
      plural: "kitchens"
    },
    rootAffix: { explanation: "cook\u53a8\u623f\u76f8\u5173 = \u53a8\u623f" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acook\u53a8\u623f\u76f8\u5173 = \u53a8\u623f",
    phrases: [{ phrase: "in the kitchen", meaning: "在厨房" }, { phrase: "kitchen knife", meaning: "菜刀" }]
  },
  {
    id: "light",
    word: "light",
    syllables: ["light"],
    partOfSpeech: "v.",
    definitions: [{ en: "to start a fire", zh: "\u5149\uff1b\u706f\uff1b\u8f7b\u7684" }],
    examples: [{ sentence: "The matches are easy to light." }],
    inflections: {
      pastTense: "lit/lighted",
      pastParticiple: "lit/lighted",
      thirdPerson: "lights",
      presentParticiple: "lighting"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}, {"word": "right", "reason": "\u5f62\u8fd1", "zh": "\u6b63\u786e\u7684\uff1b\u53f3\u8fb9"}],
    phrases: [{ phrase: "light up", meaning: "照亮" }, { phrase: "traffic light", meaning: "交通灯" }],
    antonyms: [{ word: "heavy", zh: "重的" }, { word: "dark", zh: "黑暗的" }]
  },
  {
    id: "milk",
    word: "milk",
    syllables: ["milk"],
    partOfSpeech: "n.",
    definitions: [{ en: "a white drink that comes from animals", zh: "\u725b\u5976" }],
    examples: [{ sentence: "I like to drink milk." }],
    phrases: [{ phrase: "milk tea", meaning: "奶茶" }, { phrase: "a glass of milk", meaning: "一杯牛奶" }]
  },
  {
    id: "potato",
    word: "potato",
    syllables: ["po", "ta", "to"],
    partOfSpeech: "n.",
    definitions: [{ en: "a round vegetable that grows under the ground", zh: "\u571f\u8c46\uff1b\u9a6c\u94c3\u85af" }],
    examples: [{ sentence: "She pulled the potatoes out of the dirt." }],
    inflections: {
      plural: "potatoes"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apo \u00b7 ta \u00b7 to",
    phrases: [{ phrase: "potato chips", meaning: "薯片" }, { phrase: "potato salad", meaning: "土豆沙拉" }]
  },
  {
    id: "warm",
    word: "warm",
    syllables: ["warm"],
    partOfSpeech: "adj.",
    definitions: [{ en: "a little bit hot", zh: "\u6e29\u6696\u7684\uff1b\u4f7f\u6e29\u6696" }],
    examples: [{ sentence: "She knows how to stay warm." }],
    inflections: {
      comparative: "warmer",
      superlative: "warmest"
    },
    similarWords: [{"word": "farm", "reason": "\u5f62\u8fd1", "zh": "\u519c\u573a"}, {"word": "warn", "reason": "\u5f62\u8fd1", "zh": "\u8b66\u544a\uff1b\u63d0\u9192"}, {"word": "war", "reason": "\u5f62\u8fd1", "zh": "\u6218\u4e89\uff1b\u6253\u4ed7"}],
    phrases: [{ phrase: "warm up", meaning: "热身" }, { phrase: "keep warm", meaning: "保暖" }],
    antonyms: [{ word: "cool", zh: "凉爽的" }, { word: "cold", zh: "冷的" }]
  },
  {
    id: "wash",
    word: "wash",
    syllables: ["wash"],
    partOfSpeech: "v.",
    definitions: [{ en: "to clean", zh: "\u6d17\uff1b\u6d17\u6da4" }],
    examples: [{ sentence: "Dave stands at the sink and washes the dishes." }],
    inflections: {
      pastTense: "washed",
      pastParticiple: "washed",
      thirdPerson: "washes",
      presentParticiple: "washing"
    },
    similarWords: [{"word": "wish", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b"}],
    phrases: [{ phrase: "wash up", meaning: "洗漱" }, { phrase: "wash away", meaning: "冲走" }]
  },
  {
    id: "beautiful",
    word: "beautiful",
    syllables: ["beau", "ti", "ful"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very nice to look at", zh: "\u7f8e\u4e3d\u7684" }],
    examples: [{ sentence: "The sky is very beautiful today." }],
    inflections: {
      comparative: "more beautiful",
      superlative: "most beautiful"
    },
    rootAffix: { explanation: "beauty\u7f8e\u4e3d + -ful\u5145\u6ee1 = \u7f8e\u4e3d\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abeauty\u7f8e\u4e3d + -ful\u5145\u6ee1 = \u7f8e\u4e3d\u7684",
    similarWords: [{"word": "beautifully", "reason": "\u62d3\u5c55", "zh": "美丽地；漂亮地"}],
    phrases: [{ phrase: "beautiful day", meaning: "美丽的一天" }, { phrase: "beautiful girl", meaning: "美丽的女孩" }],
    antonyms: [{ word: "ugly", zh: "丑陋的" }]
  },
  {
    id: "bicycle",
    word: "bicycle",
    syllables: ["bi", "cy", "cle"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thing with two wheels that you can ride", zh: "\u81ea\u884c\u8f66" }],
    examples: [{ sentence: "They ride bicycles together." }],
    inflections: {
      plural: "bicycles"
    },
    rootAffix: { explanation: "bi-\u4e8c + cycle\u8f6e\u5b50 = \u4e24\u4e2a\u8f6e\u5b50\u2192\u81ea\u884c\u8f66" },
    similarWords: [{"word": "muscle", "reason": "\u5f62\u8fd1", "zh": "\u808c\u8089"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abi-\u4e8c + cycle\u8f6e\u5b50 = \u4e24\u4e2a\u8f6e\u5b50\u2192\u81ea\u884c\u8f66",
    phrases: [{ phrase: "ride a bicycle", meaning: "骑自行车" }, { phrase: "by bicycle", meaning: "骑自行车" }]
  },
  {
    id: "city",
    word: "city",
    syllables: ["cit", "y"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very big town", zh: "\u57ce\u5e02" }],
    examples: [{ sentence: "There are many tall buildings in the city." }],
    inflections: {
      plural: "cities"
    },
    similarWords: [{"word": "pity", "reason": "\u5f62\u8fd1", "zh": "\u540c\u60c5\uff1b\u9057\u61be"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acit \u00b7 y",
    phrases: [{ phrase: "city center", meaning: "市中心" }, { phrase: "big city", meaning: "大城市" }]
  },
  {
    id: "east",
    word: "east",
    syllables: ["east"],
    partOfSpeech: "adv.",
    definitions: [{ en: "the direction from which the sun rises", zh: "\u4e1c\u65b9\uff0c\u4e1c\u9762" }],
    examples: [{ sentence: "We need to go east." }],
    similarWords: [{"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "fast", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff1b\u8fc5\u901f\u5730"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
    phrases: [{ phrase: "east of", meaning: "在...东边" }, { phrase: "the east", meaning: "东部" }],
    antonyms: [{ word: "west", zh: "西方" }]
  },
  {
    id: "far",
    word: "far",
    syllables: ["far"],
    partOfSpeech: "adv.",
    definitions: [{ en: "not close", zh: "\u8fdc\u7684\uff0c\u9065\u8fdc" }],
    examples: [{ sentence: "He goes far to get to work." }],
    synonyms: [{"word": "distant", "zh": "远的；远方的"}, {"word": "remote", "zh": "远程的；偏远的"}, {"word": "faraway", "zh": "遥远的"}],
    similarWords: [{"word": "fat", "reason": "\u5f62\u8fd1", "zh": "\u80d6\u7684"}, {"word": "fan", "reason": "\u5f62\u8fd1", "zh": "\u7c89\u4e1d"}, {"word": "car", "reason": "\u5f62\u8fd1", "zh": "\u6c7d\u8f66"}],
    phrases: [{ phrase: "far away", meaning: "遥远" }, { phrase: "so far", meaning: "到目前为止" }],
    antonyms: [{ word: "near", zh: "近的" }]
  },
  {
    id: "map",
    word: "map",
    syllables: ["map"],
    partOfSpeech: "n.",
    definitions: [{ en: "a drawing of an area that shows where places are", zh: "\u5730\u56fe" }],
    examples: [{ sentence: "I have an old map of the world." }],
    inflections: {
      plural: "maps"
    },
    similarWords: [{"word": "man", "reason": "\u5f62\u8fd1", "zh": "\u7537\u4eba\uff0c\u4eba\u7c7b"}, {"word": "cap", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
    phrases: [{ phrase: "world map", meaning: "世界地图" }, { phrase: "on the map", meaning: "在地图上" }]
  },
  {
    id: "open",
    word: "open",
    syllables: ["o", "pen"],
    partOfSpeech: "v.",
    definitions: [{ en: "to let people in", zh: "\u6253\u5f00" }],
    examples: [{ sentence: "They open the store at eight o\u2019clock." }],
    inflections: {
      pastTense: "opened",
      pastParticiple: "opened",
      thirdPerson: "opens",
      presentParticiple: "opening"
    },
    synonyms: [{"word": "unlock", "zh": "开锁；解锁"}, {"word": "unseal", "zh": "拆封；开启"}, {"word": "unfold", "zh": "展开；打开"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ao \u00b7 pen",
    similarWords: [{"word": "opening", "reason": "\u62d3\u5c55", "zh": "开口；开始"}, {"word": "openly", "reason": "\u62d3\u5c55", "zh": "公开地"}],
    phrases: [{ phrase: "open up", meaning: "打开" }, { phrase: "open the door", meaning: "开门" }],
    antonyms: [{ word: "close", zh: "关上" }]
  },
  {
    id: "road",
    word: "road",
    syllables: ["road"],
    partOfSpeech: "n.",
    definitions: [{ en: "a wide and hard thing that people drive cars on", zh: "\u8def\uff0c\u9053\u8def" }],
    examples: [{ sentence: "I like to drive on this long road." }],
    inflections: {
      plural: "roads"
    },
    similarWords: [{"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}],
    phrases: [{ phrase: "on the road", meaning: "在路上" }, { phrase: "road trip", meaning: "公路旅行" }]
  },
  {
    id: "shoe",
    word: "shoe",
    syllables: ["shoe"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that covers the foot", zh: "\u978b\uff0c\u978b\u5b50" }],
    examples: [{ sentence: "He wears these shoes to run." }],
    inflections: {
      plural: "shoes"
    },
    similarWords: [{"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "show", "reason": "\u5f62\u8fd1", "zh": "\u5c55\u793a\uff0c\u663e\u793a"}],
    phrases: [{ phrase: "put on shoes", meaning: "穿鞋" }, { phrase: "take off shoes", meaning: "脱鞋" }]
  },
  {
    id: "side",
    word: "side",
    syllables: ["side"],
    partOfSpeech: "n.",
    definitions: [{ en: "the place right next to something", zh: "\u8fb9\uff0c\u4fa7" }],
    examples: [{ sentence: "They stopped on the side of the road." }],
    inflections: {
      plural: "sides"
    },
    similarWords: [{"word": "guide", "reason": "\u5f62\u8fd1", "zh": "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc"}, {"word": "hide", "reason": "\u5f62\u8fd1", "zh": "\u8eb2\u85cf"}, {"word": "ride", "reason": "\u5f62\u8fd1", "zh": "\u9a91\uff0c\u4e58\u5750"}],
    phrases: [{ phrase: "side by side", meaning: "并排" }, { phrase: "by the side of", meaning: "在...旁边" }]
  },
  {
    id: "air",
    word: "air",
    syllables: ["air"],
    partOfSpeech: "n.",
    definitions: [{ en: "the gases around the earth that people breathe", zh: "\u7a7a\u6c14" }],
    examples: [{ sentence: "The air is not clean. It makes people ill." }],
    similarWords: [{"word": "pair", "reason": "\u5f62\u8fd1", "zh": "\u53cc"}, {"word": "fair", "reason": "\u5f62\u8fd1", "zh": "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a"}],
    phrases: [{ phrase: "fresh air", meaning: "新鲜空气" }, { phrase: "in the air", meaning: "在空中" }]
  },
  {
    id: "fly",
    word: "fly",
    syllables: ["fly"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move through the air", zh: "\u98de\uff0c\u98de\u884c" }],
    examples: [{ sentence: "The bird flies high in the sky." }],
    inflections: {
      pastTense: "flew",
      pastParticiple: "flown",
      thirdPerson: "flies",
      presentParticiple: "flying"
    },
    similarWords: [{"word": "fry", "reason": "\u5f62\u8fd1", "zh": "\u6cb9\u70b8\uff1b\u714e"}],
    phrases: [{ phrase: "fly away", meaning: "飞走" }, { phrase: "fly a kite", meaning: "放风筝" }]
  },
  {
    id: "half",
    word: "half",
    syllables: ["half"],
    partOfSpeech: "adv.",
    definitions: [{ en: "by 50 percent", zh: "\u4e00\u534a" }],
    examples: [{ sentence: "The glass is half full." }],
    similarWords: [{"word": "hall", "reason": "\u5f62\u8fd1", "zh": "\u5927\u5385\uff1b\u8d70\u5eca"}],
    phrases: [{ phrase: "half an hour", meaning: "半小时" }, { phrase: "half past", meaning: "...点半" }]
  },
  {
    id: "left",
    word: "left",
    syllables: ["left"],
    partOfSpeech: "adv.",
    definitions: [{ en: "on or to the side opposite of right", zh: "\u5de6\u8fb9\u7684" }],
    examples: [{ sentence: "Turn left on this road." }],
    similarWords: [{"word": "lift", "reason": "\u5f62\u8fd1", "zh": "\u4e3e\u8d77\uff1b\u7535\u68af"}, {"word": "let", "reason": "\u5f62\u8fd1", "zh": "\u8ba9\uff0c\u5141\u8bb8"}],
    phrases: [{ phrase: "turn left", meaning: "左转" }, { phrase: "on the left", meaning: "在左边" }],
    antonyms: [{ word: "right", zh: "右边的" }]
  },
  {
    id: "little",
    word: "little",
    syllables: ["lit", "tle"],
    partOfSpeech: "adj.",
    definitions: [{ en: "small", zh: "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684" }],
    examples: [{ sentence: "It drinks from a little bottle." }],
    inflections: {
      comparative: "less",
      superlative: "least"
    },
    similarWords: [{"word": "bottle", "reason": "\u5f62\u8fd1", "zh": "\u74f6\u5b50"}, {"word": "title", "reason": "\u5f62\u8fd1", "zh": "\u6807\u9898\uff1b\u5934\u8854"}, {"word": "gentle", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1alit \u00b7 tle",
    phrases: [{ phrase: "a little", meaning: "一点" }, { phrase: "little by little", meaning: "渐渐地" }],
    antonyms: [{ word: "much", zh: "多的" }, { word: "big", zh: "大的" }]
  },
  {
    id: "new",
    word: "new",
    syllables: ["new"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not old", zh: "\u65b0\u7684" }],
    examples: [{ sentence: "She wants a new ring." }],
    inflections: {
      comparative: "newer",
      superlative: "newest"
    },
    synonyms: [{"word": "fresh", "zh": "\u65b0\u9c9c\u7684"}, {"word": "brand-new", "zh": "全新的"}],
    phrases: [{ phrase: "New Year", meaning: "新年" }, { phrase: "new friend", meaning: "新朋友" }],
    antonyms: [{ word: "old", zh: "旧的" }]
  },
  {
    id: "shop",
    word: "shop",
    syllables: ["shop"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small store", zh: "\u5546\u5e97" }],
    examples: [{ sentence: "The lady works in a flower shop." }],
    inflections: {
      plural: "shops"
    },
    similarWords: [{"word": "stop", "reason": "\u5f62\u8fd1", "zh": "\u505c\u6b62\uff0c\u505c\u4e0b"}, {"word": "shoe", "reason": "\u5f62\u8fd1", "zh": "\u978b\uff0c\u978b\u5b50"}, {"word": "show", "reason": "\u5f62\u8fd1", "zh": "\u5c55\u793a\uff0c\u663e\u793a"}],
    phrases: [{ phrase: "shop window", meaning: "橱窗" }, { phrase: "go shopping", meaning: "去购物" }]
  },
  {
    id: "show",
    word: "show",
    syllables: ["show"],
    partOfSpeech: "v.",
    definitions: [{ en: "to let someone see", zh: "\u5c55\u793a\uff0c\u663e\u793a" }],
    examples: [{ sentence: "He shows her a pink shoe." }],
    inflections: {
      pastTense: "showed",
      pastParticiple: "shown",
      thirdPerson: "shows",
      presentParticiple: "showing"
    },
    synonyms: [{"word": "display", "zh": "展示；显示"}, {"word": "exhibit", "zh": "\u5c55\u89c8\uff1b\u5c55\u51fa"}, {"word": "demonstrate", "zh": "演示；证明"}],
    similarWords: [{"word": "shoe", "reason": "\u5f62\u8fd1", "zh": "\u978b\uff0c\u978b\u5b50"}, {"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "slow", "reason": "\u5f62\u8fd1", "zh": "\u6162\u7684"}],
    phrases: [{ phrase: "show off", meaning: "炫耀" }, { phrase: "show up", meaning: "出现" }]
  },
  {
    id: "use",
    word: "use",
    syllables: ["use"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put something into action", zh: "\u4f7f\u7528\uff0c\u7528" }],
    examples: [{ sentence: "He uses the knife to cut the fish." }],
    inflections: {
      pastTense: "used",
      pastParticiple: "used",
      thirdPerson: "uses",
      presentParticiple: "using"
    },
    similarWords: [{"word": "useful", "reason": "\u62d3\u5c55", "zh": "有用的；有益的"}, {"word": "useless", "reason": "\u62d3\u5c55", "zh": "无用的"}, {"word": "reuse", "reason": "\u62d3\u5c55", "zh": "再利用"}],
    phrases: [{ phrase: "use up", meaning: "用完" }, { phrase: "make use of", meaning: "利用" }]
  },
  {
    id: "wait",
    word: "wait",
    syllables: ["wait"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stay in one place until something happens", zh: "\u7b49\u5f85" }],
    examples: [{ sentence: "He waits for the bus." }],
    inflections: {
      pastTense: "waited",
      pastParticiple: "waited",
      thirdPerson: "waits",
      presentParticiple: "waiting"
    },
    similarWords: [{"word": "want", "reason": "\u5f62\u8fd1", "zh": "\u8981\uff0c\u60f3\u8981"}],
    phrases: [{ phrase: "wait for", meaning: "等待" }, { phrase: "wait a minute", meaning: "等一下" }]
  },
  {
    id: "ask",
    word: "ask",
    syllables: ["ask"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say a question", zh: "\u95ee\uff1b\u8bf7\u6c42" }],
    examples: [{ sentence: "She asks the students about the book." }],
    inflections: {
      pastTense: "asked",
      pastParticiple: "asked",
      thirdPerson: "asks",
      presentParticiple: "asking"
    },
    similarWords: [{"word": "task", "reason": "\u5f62\u8fd1", "zh": "\u4efb\u52a1\uff1b\u5de5\u4f5c"}],
    phrases: [{ phrase: "ask for", meaning: "请求" }, { phrase: "ask about", meaning: "询问" }],
    antonyms: [{ word: "answer", zh: "回答" }]
  },
  {
    id: "break",
    word: "break",
    syllables: ["break"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cause to be in two or more pieces", zh: "\u6253\u7834\uff0c\u5f04\u788e" }],
    examples: [{ sentence: "I broke the egg to make breakfast." }],
    inflections: {
      pastTense: "broke",
      pastParticiple: "broken",
      thirdPerson: "breaks",
      presentParticiple: "breaking"
    },
    similarWords: [{"word": "speak", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8bb2"}, {"word": "weak", "reason": "\u5f62\u8fd1", "zh": "\u865a\u5f31\u7684\uff0c\u5f31\u7684"}, {"word": "bread", "reason": "\u5f62\u8fd1", "zh": "\u9762\u5305"}],
    phrases: [{ phrase: "break down", meaning: "出故障" }, { phrase: "break into", meaning: "闯入" }, { phrase: "break out", meaning: "爆发" }],
    antonyms: [{ word: "fix", zh: "修理" }]
  },
  {
    id: "desk",
    word: "desk",
    syllables: ["desk"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small table in an office or classroom", zh: "\u4e66\u684c\uff0c\u529e\u516c\u684c" }],
    examples: [{ sentence: "There are many desks in the room." }],
    inflections: {
      plural: "desks"
    },
    phrases: [{ phrase: "at the desk", meaning: "在书桌旁" }, { phrase: "desk lamp", meaning: "台灯" }]
  },
  {
    id: "seat",
    word: "seat",
    syllables: ["seat"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place to sit", zh: "\u5ea7\u4f4d" }],
    examples: [{ sentence: "The seats are by the side of the pool." }],
    inflections: {
      plural: "seats"
    },
    similarWords: [{"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}, {"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}],
    phrases: [{ phrase: "take a seat", meaning: "坐下" }, { phrase: "have a seat", meaning: "请坐" }]
  },
  {
    id: "stairs",
    word: "stairs",
    syllables: ["stairs"],
    partOfSpeech: "n.",
    definitions: [{ en: "a set of steps", zh: "\u697c\u68af" }],
    examples: [{ sentence: "Sara\u2019s little shop is at the top of the stairs." }],
    inflections: {
      plural: "stairses"
    },
    phrases: [{ phrase: "go up the stairs", meaning: "上楼梯" }, { phrase: "down the stairs", meaning: "下楼梯" }]
  },
  {
    id: "stay",
    word: "stay",
    syllables: ["stay"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to leave", zh: "\u505c\u7559\uff0c\u5f85\u5728" }],
    examples: [{ sentence: "Bill tells his dog to stay. It waits for Bill to come back." }],
    inflections: {
      pastTense: "stayed",
      pastParticiple: "stayed",
      thirdPerson: "stays",
      presentParticiple: "staying"
    },
    similarWords: [{"word": "star", "reason": "\u5f62\u8fd1", "zh": "\u661f\u661f\uff0c\u660e\u661f"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}],
    phrases: [{ phrase: "stay at home", meaning: "待在家" }, { phrase: "stay up", meaning: "熬夜" }]
  },
  {
    id: "talk",
    word: "talk",
    syllables: ["talk"],
    partOfSpeech: "v.",
    definitions: [{ en: "to speak to another person", zh: "\u8bf4\u8bdd\uff0c\u8c08\u8bdd" }],
    examples: [{ sentence: "The beautiful lady talks to the man." }],
    inflections: {
      pastTense: "talked",
      pastParticiple: "talked",
      thirdPerson: "talks",
      presentParticiple: "talking"
    },
    synonyms: [{"word": "speak", "zh": "\u8bf4\u8bdd\uff0c\u8bb2"}, {"word": "chat", "zh": "聊天；谈话"}, {"word": "converse", "zh": "交谈；谈话"}],
    similarWords: [{"word": "walk", "reason": "\u5f62\u8fd1", "zh": "\u8d70\uff0c\u6b65\u884c"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}, {"word": "task", "reason": "\u5f62\u8fd1", "zh": "\u4efb\u52a1\uff1b\u5de5\u4f5c"}],
    phrases: [{ phrase: "talk to", meaning: "和...说话" }, { phrase: "talk about", meaning: "谈论" }, { phrase: "have a talk", meaning: "谈话" }]
  },
  {
    id: "understand",
    word: "understand",
    syllables: ["un", "der", "stand"],
    partOfSpeech: "v.",
    definitions: [{ en: "to know the meaning of", zh: "\u7406\u89e3\uff0c\u660e\u767d" }],
    examples: [{ sentence: "He understands a house and car are expensive." }],
    inflections: {
      pastTense: "understood",
      pastParticiple: "understood",
      thirdPerson: "understands",
      presentParticiple: "understanding"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aun \u00b7 der \u00b7 stand",
    similarWords: [{"word": "understandable", "reason": "\u62d3\u5c55", "zh": "可以理解的"}],
    phrases: [{ phrase: "make oneself understood", meaning: "表达清楚" }, { phrase: "I understand", meaning: "我明白" }]
  },
  {
    id: "walk",
    word: "walk",
    syllables: ["walk"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use the legs to go from one place to another", zh: "\u8d70\uff0c\u6b65\u884c" }],
    examples: [{ sentence: "He walks on this road to get home." }],
    inflections: {
      pastTense: "walked",
      pastParticiple: "walked",
      thirdPerson: "walks",
      presentParticiple: "walking"
    },
    synonyms: [{"word": "stroll", "zh": "散步；闲逛"}, {"word": "march", "zh": "\u4e09\u6708\uff1b\u884c\u519b\uff1b\u524d\u8fdb"}, {"word": "stride", "zh": "大步走；步伐"}],
    similarWords: [{"word": "talk", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8c08\u8bdd"}, {"word": "wall", "reason": "\u5f62\u8fd1", "zh": "\u5899"}],
    phrases: [{ phrase: "walk into", meaning: "走进" }, { phrase: "walk around", meaning: "四处走走" }]
  },
  {
    id: "year",
    word: "year",
    syllables: ["year"],
    partOfSpeech: "n.",
    definitions: [{ en: "twelve months", zh: "\u5e74" }],
    examples: [{ sentence: "These birds fly east at this time of the year." }],
    inflections: {
      plural: "years"
    },
    similarWords: [{"word": "hear", "reason": "\u5f62\u8fd1", "zh": "\u542c\u5230\uff0c\u542c\u89c1"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}, {"word": "tear", "reason": "\u5f62\u8fd1", "zh": "\u773c\u6cea\uff1b\u6495\u7834"}],
    phrases: [{ phrase: "New Year", meaning: "新年" }, { phrase: "year after year", meaning: "年复一年" }]
  },
  {
    id: "act",
    word: "act",
    syllables: ["act"],
    partOfSpeech: "v.",
    definitions: [{ en: "to behave in a certain way", zh: "\u884c\u52a8\uff0c\u884c\u4e3a" }],
    examples: [{ sentence: "They know how they must act in class." }],
    inflections: {
      pastTense: "acted",
      pastParticiple: "acted",
      thirdPerson: "acts",
      presentParticiple: "acting"
    },
    similarWords: [{"word": "fact", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u5b9e\uff1b\u771f\u76f8"}, {"word": "art", "reason": "\u5f62\u8fd1", "zh": "\u827a\u672f"}, {"word": "active", "reason": "\u62d3\u5c55", "zh": "\u79ef\u6781\u7684\uff1b\u6d3b\u8dc3\u7684"}],
    phrases: [{ phrase: "act out", meaning: "表演出来" }, { phrase: "act as", meaning: "充当" }]
  },
  {
    id: "bring",
    word: "bring",
    syllables: ["bring"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take something to another place", zh: "\u5e26\u6765\uff0c\u62ff\u6765" }],
    examples: [{ sentence: "She brings the food to the table." }],
    inflections: {
      pastTense: "brought",
      pastParticiple: "brought",
      thirdPerson: "brings",
      presentParticiple: "bringing"
    },
    phrases: [
      { phrase: "bring back", meaning: "\u5e26\u56de" },
      { phrase: "bring up", meaning: "\u629a\u517b" }
    ],
    similarWords: [{"word": "boring", "reason": "\u5f62\u8fd1", "zh": "\u65e0\u804a\u7684"}, {"word": "ring", "reason": "\u5f62\u8fd1", "zh": "\u6212\u6307\uff0c\u94c3\u94db\uff0c\u54cd"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}],
  },
  {
    id: "glad",
    word: "glad",
    syllables: ["glad"],
    partOfSpeech: "adj.",
    definitions: [{ en: "happy", zh: "\u9ad8\u5174\u7684\uff0c\u4e50\u610f\u7684" }],
    examples: [{ sentence: "They are glad they live in the city." }],
    inflections: {
      comparative: "glader",
      superlative: "gladest"
    },
    phrases: [{ phrase: "be glad to", meaning: "很高兴" }, { phrase: "glad to see", meaning: "很高兴见到" }],
    synonyms: [{"word": "happy", "zh": "高兴的"}, {"word": "pleased", "zh": "愉快的"}],
    similarWords: [{"word": "gladly", "reason": "\u62d3\u5c55", "zh": "高兴地"}, {"word": "gladness", "reason": "\u62d3\u5c55", "zh": "高兴"}]
  },
  {
    id: "lesson",
    word: "lesson",
    syllables: ["les", "son"],
    partOfSpeech: "n.",
    definitions: [{ en: "an activity used to teach", zh: "\u8bfe\uff0c\u8bfe\u7a0b" }],
    examples: [{ sentence: "He teaches a lesson about maps." }],
    inflections: {
      plural: "lessons"
    },
    similarWords: [{"word": "season", "reason": "\u5f62\u8fd1", "zh": "\u5b63\u8282"}, {"word": "reason", "reason": "\u5f62\u8fd1", "zh": "\u7406\u7531\uff1b\u539f\u56e0"}, {"word": "poison", "reason": "\u5f62\u8fd1", "zh": "\u6bd2\u836f\uff1b\u6bd2\u7269"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ales \u00b7 son",
    phrases: [{ phrase: "do lessons", meaning: "做功课" }, { phrase: "give a lesson", meaning: "上课" }]
  },
  {
    id: "listen",
    word: "listen",
    syllables: ["lis", "ten"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use the ears to hear", zh: "\u542c\uff0c\u503e\u542c" }],
    examples: [{ sentence: "She listens to a beautiful song." }],
    inflections: {
      pastTense: "listened",
      pastParticiple: "listened",
      thirdPerson: "listens",
      presentParticiple: "listening"
    },
    rootAffix: { explanation: "list\u542c + -en = \u542c" },
    similarWords: [{"word": "list", "reason": "\u62d3\u5c55", "zh": "\u5217\u8868\uff1b\u6e05\u5355\uff1b\u5217\u5165"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1alist\u542c + -en = \u542c",
    phrases: [{ phrase: "listen to", meaning: "听" }, { phrase: "listen carefully", meaning: "认真听" }]
  },
  {
    id: "pencil",
    word: "pencil",
    syllables: ["pen", "cil"],
    partOfSpeech: "n.",
    definitions: [{ en: "a writing tool", zh: "\u94c5\u7b14" }],
    examples: [{ sentence: "She uses a pencil to write." }],
    inflections: {
      plural: "pencils"
    },
    rootAffix: { explanation: "penc-\u5c3e + -il = \u5c3e\u5df4\u4e00\u6837\u7ec6\u7684\u2192\u94c5\u7b14" },
    mnemonics: "\"pen\"\u94a2\u7b14 + \"cil\"\u2192 \u50cf\u94a2\u7b14\u4e00\u6837\u7ec6\u7684\u7b14\u2192\u94c5\u7b14",
    phrases: [{ phrase: "pencil case", meaning: "铅笔盒" }, { phrase: "pencil sharpener", meaning: "卷笔刀" }]
  },
  {
    id: "question",
    word: "question",
    syllables: ["ques", "tion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sentence that asks for an answer", zh: "\u95ee\u9898" }],
    examples: [{ sentence: "The man asks a lot of questions." }],
    inflections: {
      plural: "questions"
    },
    rootAffix: { explanation: "quest\u5bfb\u6c42 + -ion = \u5bfb\u6c42\u7b54\u6848\u2192\u95ee\u9898" },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aquest\u5bfb\u6c42 + -ion = \u5bfb\u6c42\u7b54\u6848\u2192\u95ee\u9898",
    phrases: [{ phrase: "ask a question", meaning: "问问题" }, { phrase: "answer a question", meaning: "回答问题" }],
    antonyms: [{ word: "answer", zh: "回答" }]
  },
  {
    id: "right",
    word: "right",
    syllables: ["right"],
    partOfSpeech: "adj.",
    definitions: [{ en: "correct", zh: "\u6b63\u786e\u7684\uff1b\u53f3\u8fb9" }],
    examples: [{ sentence: "She does not know the right answer." }],
    inflections: {
      comparative: "righter",
      superlative: "rightest"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}, {"word": "tight", "reason": "\u5f62\u8fd1", "zh": "\u7d27\u7684\uff1b\u7262\u56fa\u7684"}],
    phrases: [{ phrase: "right now", meaning: "马上" }, { phrase: "all right", meaning: "好的" }, { phrase: "turn right", meaning: "右转" }],
    synonyms: [{"word": "correct", "zh": "正确的"}],
    antonyms: [{ word: "left", zh: "左边的" }, { word: "wrong", zh: "错误的" }]
  },
  {
    id: "teach",
    word: "teach",
    syllables: ["teach"],
    partOfSpeech: "v.",
    definitions: [{ en: "to help someone learn", zh: "\u6559\uff0c\u6559\u6388" }],
    examples: [{ sentence: "Kayla\u2019s mom teaches her how to grow a garden." }],
    inflections: {
      pastTense: "taught",
      pastParticiple: "taught",
      thirdPerson: "teaches",
      presentParticiple: "teaching"
    },
    synonyms: [{"word": "instruct", "zh": "指导；教授"}, {"word": "educate", "zh": "教育；培养"}, {"word": "train", "zh": "\u706b\u8f66"}],
    similarWords: [{"word": "reach", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe\uff1b\u4f38\u624b"}, {"word": "beach", "reason": "\u5f62\u8fd1", "zh": "\u6d77\u6ee9"}],
    phrases: [{ phrase: "teach oneself", meaning: "自学" }, { phrase: "teach a lesson", meaning: "给一个教训" }],
    antonyms: [{ word: "learn", zh: "学习" }]
  },
  {
    id: "way",
    word: "way",
    syllables: ["way"],
    partOfSpeech: "n.",
    definitions: [{ en: "how someone does something", zh: "\u65b9\u5f0f\uff0c\u65b9\u6cd5\uff1b\u8def" }],
    examples: [{ sentence: "My mom shows me a way to cook eggs." }],
    inflections: {
      plural: "ways"
    },
    similarWords: [{"word": "day", "reason": "\u5f62\u8fd1", "zh": "\u5929\uff0c\u65e5\uff0c\u767d\u5929"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "pay", "reason": "\u5f62\u8fd1", "zh": "\u4ed8\u94b1\uff0c\u652f\u4ed8"}],
    phrases: [{ phrase: "on the way", meaning: "在路上" }, { phrase: "by the way", meaning: "顺便说一下" }]
  },
  {
    id: "angry",
    word: "angry",
    syllables: ["angry"],
    partOfSpeech: "adj.",
    definitions: [{ en: "feeling upset", zh: "\u751f\u6c14\u7684" }],
    examples: [{ sentence: "Because Jane does not listen to her, Jane\u2019s mom is angry." }],
    inflections: {
      comparative: "angrier",
      superlative: "angriest"
    },
    synonyms: [{"word": "mad", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}, {"word": "furious", "zh": "愤怒的；狂怒的"}],
    similarWords: [{"word": "hungry", "reason": "\u5f62\u8fd1", "zh": "\u997f\u7684"}],
    phrases: [{ phrase: "get angry", meaning: "生气" }, { phrase: "angry with", meaning: "对...生气" }],
    rootAffix: { explanation: "anger愤怒(r→r)y愤怒的" },
    antonyms: [{ word: "calm", zh: "平静的" }]
  },
  {
    id: "boring",
    word: "boring",
    syllables: ["boring"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not interesting", zh: "\u65e0\u804a\u7684" }],
    examples: [{ sentence: "Jason hates staying inside because it is so boring." }],
    inflections: {
      comparative: "more boring",
      superlative: "most boring"
    },
    similarWords: [{"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}, {"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "evening", "reason": "\u5f62\u8fd1", "zh": "\u508d\u665a\uff0c\u665a\u4e0a"}],
    phrases: [{ phrase: "boring movie", meaning: "无聊的电影" }, { phrase: "so boring", meaning: "真无聊" }],
    synonyms: [{"word": "dull", "zh": "无聊的"}]
  },
  {
    id: "class",
    word: "class",
    syllables: ["class"],
    partOfSpeech: "n.",
    definitions: [{ en: "a lesson at school", zh: "\u73ed\u7ea7" }],
    examples: [{ sentence: "Ryan\u2019s dad teaches a new class." }],
    inflections: {
      plural: "classes"
    },
    similarWords: [{"word": "glass", "reason": "\u5f62\u8fd1", "zh": "\u73bb\u7483\u676f"}, {"word": "pass", "reason": "\u5f62\u8fd1", "zh": "\u7ecf\u8fc7\uff0c\u4f20\u9012"}, {"word": "grass", "reason": "\u5f62\u8fd1", "zh": "\u8349"}],
    phrases: [{ phrase: "class meeting", meaning: "班会" }, { phrase: "after class", meaning: "课后" }]
  },
  {
    id: "dream",
    word: "dream",
    syllables: ["dream"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think about a wish for something good", zh: "\u68a6\u60f3" }],
    examples: [{ sentence: "She dreams about living in the city." }],
    inflections: {
      pastTense: "dreamt/dreamed",
      pastParticiple: "dreamt/dreamed",
      thirdPerson: "dreams",
      presentParticiple: "dreaming"
    },
    similarWords: [{"word": "stream", "reason": "\u5f62\u8fd1", "zh": "\u6eaa\u6d41\uff1b\u6d41\u5a92\u4f53"}],
    phrases: [{ phrase: "have a dream", meaning: "做梦" }, { phrase: "dream of", meaning: "梦想" }]
  },
  {
    id: "famous",
    word: "famous",
    syllables: ["famous"],
    partOfSpeech: "adj.",
    definitions: [{ en: "known by many people", zh: "\u8457\u540d\u7684" }],
    examples: [{ sentence: "The kids like the famous baseball player." }],
    inflections: {
      comparative: "more famous",
      superlative: "most famous"
    },
    similarWords: [{"word": "curious", "reason": "\u5f62\u8fd1", "zh": "\u597d\u5947\u7684"}, {"word": "serious", "reason": "\u5f62\u8fd1", "zh": "\u4e25\u91cd\u7684\uff1b\u8ba4\u771f\u7684"}, {"word": "various", "reason": "\u5f62\u8fd1", "zh": "\u5404\u79cd\u5404\u6837\u7684"}],
    phrases: [{ phrase: "famous for", meaning: "以...闻名" }, { phrase: "famous person", meaning: "名人" }],
    rootAffix: { explanation: "fame名声(e→ous) = 著名的" },
    synonyms: [{"word": "well-known", "zh": "著名的"}]
  },
  {
    id: "feel",
    word: "feel",
    syllables: ["feel"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have a sense of something", zh: "\u611f\u89c9" }],
    examples: [{ sentence: "He felt very hot after walking for half the morning." }],
    inflections: {
      pastTense: "felt",
      pastParticiple: "felt",
      thirdPerson: "feels",
      presentParticiple: "feeling"
    },
    similarWords: [{"word": "wheel", "reason": "\u5f62\u8fd1", "zh": "\u8f66\u8f6e\uff1b\u8f6e\u5b50"}, {"word": "feed", "reason": "\u5f62\u8fd1", "zh": "\u5582"}],
    phrases: [{ phrase: "feel like", meaning: "感觉像" }, { phrase: "feel better", meaning: "感觉好点" }]
  },
  {
    id: "future",
    word: "future",
    syllables: ["future"],
    partOfSpeech: "n.",
    definitions: [{ en: "the time that has not happened yet", zh: "\u672a\u6765" }],
    examples: [{ sentence: "In the future, we will not need roads for driving." }],
    inflections: {
      plural: "futures"
    },
    similarWords: [{"word": "culture", "reason": "\u5f62\u8fd1", "zh": "\u6587\u5316\uff1b\u6587\u660e"}, {"word": "nature", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u7136\uff1b\u672c\u6027"}, {"word": "picture", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u753b"}],
    phrases: [{ phrase: "in the future", meaning: "在未来" }, { phrase: "future plan", meaning: "未来计划" }],
    rootAffix: { explanation: "fut将要 + -ure = 未来" }
  },
  {
    id: "group",
    word: "group",
    syllables: ["group"],
    partOfSpeech: "n.",
    definitions: [{ en: "several people that are together", zh: "\u5c0f\u7ec4" }],
    examples: [{ sentence: "The group uses a large table to study." }],
    inflections: {
      plural: "groups"
    },
    phrases: [{ phrase: "group work", meaning: "小组合作" }, { phrase: "a group of", meaning: "一组" }],
    synonyms: [{"word": "team", "zh": "团队"}]
  },
  {
    id: "hobby",
    word: "hobby",
    syllables: ["hobby"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you like to do in your free time", zh: "\u7231\u597d" }],
    examples: [{ sentence: "Her hobbies are drawing and painting." }],
    inflections: {
      plural: "hobbies"
    },
    phrases: [{ phrase: "hobby class", meaning: "兴趣班" }, { phrase: "my hobby", meaning: "我的爱好" }],
    synonyms: [{"word": "pastime", "zh": "消遣"}]
  },
  {
    id: "job",
    word: "job",
    syllables: ["job"],
    partOfSpeech: "n.",
    definitions: [{ en: "the work that a person is paid to do", zh: "\u5de5\u4f5c" }],
    examples: [{ sentence: "She needs money, so she wants to get a job." }],
    inflections: {
      plural: "jobs"
    },
    similarWords: [{"word": "joy", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u4e50\uff1b\u559c\u60a6"}],
    phrases: [{ phrase: "good job", meaning: "干得好" }, { phrase: "part-time job", meaning: "兼职" }]
  },
  {
    id: "hundred",
    word: "hundred",
    syllables: ["hundred"],
    partOfSpeech: "n.",
    definitions: [{ en: "the number 100", zh: "\u767e" }],
    examples: [{ sentence: "Five hundred dollars is a lot of money." }],
    inflections: {
      plural: "hundreds"
    },
    phrases: [{ phrase: "hundreds of", meaning: "数百" }, { phrase: "one hundred", meaning: "一百" }]
  },
  {
    id: "invite",
    word: "invite",
    syllables: ["invite"],
    partOfSpeech: "v.",
    definitions: [{ en: "to ask to go somewhere", zh: "\u9080\u8bf7" }],
    examples: [{ sentence: "Mrs. Jones invited us into her home." }],
    inflections: {
      pastTense: "invited",
      pastParticiple: "invited",
      thirdPerson: "invites",
      presentParticiple: "inviting"
    },
    similarWords: [{"word": "write", "reason": "\u5f62\u8fd1", "zh": "\u5199\uff0c\u5199\u5b57"}, {"word": "quite", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u975e\u5e38"}, {"word": "polite", "reason": "\u5f62\u8fd1", "zh": "\u793c\u8c8c\u7684"}],
    phrases: [{ phrase: "invite to", meaning: "邀请" }, { phrase: "invite over", meaning: "邀请过来" }]
  },
  {
    id: "math",
    word: "math",
    syllables: ["math"],
    partOfSpeech: "n.",
    definitions: [{ en: "the study of numbers", zh: "\u6570\u5b66" }],
    examples: [{ sentence: "The boy is good at math." }],
    inflections: {
      plural: "maths"
    },
    similarWords: [{"word": "path", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u8def\uff1b\u8def\u5f84"}, {"word": "bath", "reason": "\u5f62\u8fd1", "zh": "\u6d17\u6fa1"}, {"word": "match", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4"}],
    phrases: [{ phrase: "math class", meaning: "数学课" }, { phrase: "math problem", meaning: "数学题" }]
  },
  {
    id: "photograph_photo",
    word: "photograph (photo)",
    syllables: ["photograph (photo)"],
    partOfSpeech: "n.",
    definitions: [{ en: "a picture taken with a camera", zh: "\u7167\u7247" }],
    examples: [{ sentence: "I am glad you shared these photos with me." }],
    inflections: {
      plural: "photograph (photo)s"
    },
    rootAffix: { explanation: "photo光 + graph写 = 照片" },
    similarWords: [{"word": "telephone", "reason": "形近", "zh": "电话"}, {"word": "telegraph", "reason": "形近", "zh": "电报"}],
    phrases: [{ phrase: "take a photo", meaning: "拍照" }, { phrase: "photo album", meaning: "相册" }],
  },
  {
    id: "president",
    word: "president",
    syllables: ["pres", "i", "dent"],
    partOfSpeech: "n.",
    definitions: [{ en: "the leader of the government or of a company", zh: "\u603b\u7edf" }],
    examples: [{ sentence: "Many kids dream about becoming their country\u2019s president." }],
    inflections: {
      plural: "presidents"
    },
    rootAffix: { explanation: "pre-\u524d + sid\u5750 + -ent = \u5750\u5728\u524d\u9762\u7684\u4eba\u2192\u603b\u7edf" },
    similarWords: [{"word": "confident", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u4fe1\u7684\uff1b\u6709\u4fe1\u5fc3\u7684"}, {"word": "accident", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u6545\uff1b\u610f\u5916"}, {"word": "represent", "reason": "\u5f62\u8fd1", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apre-\u524d + sid\u5750 + -ent = \u5750\u5728\u524d\u9762\u7684\u4eba\u2192\u603b\u7edf",
    phrases: [{ phrase: "class president", meaning: "班长" }, { phrase: "president's office", meaning: "校长办公室" }]
  },
  {
    id: "really",
    word: "really",
    syllables: ["really"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very", zh: "\u771f\u7684" }],
    examples: [{ sentence: "This TV show is really good." }],
    similarWords: [{"word": "finally", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\uff1b\u7ec8\u4e8e"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}, {"word": "real", "reason": "\u62d3\u5c55", "zh": "\u771f\u5b9e\u7684\uff1b\u771f\u6b63\u7684"}],
    phrases: [{ phrase: "really like", meaning: "真的很喜欢" }, { phrase: "not really", meaning: "不完全是" }],
    rootAffix: { explanation: "real真的 + -ly = 真正地" }
  },
  {
    id: "speech",
    word: "speech",
    syllables: ["speech"],
    partOfSpeech: "n.",
    definitions: [{ en: "a talk that someone gives in front of a group of people", zh: "\u6f14\u8bb2" }],
    examples: [{ sentence: "The woman answered a lot of questions during her speech." }],
    inflections: {
      plural: "speeches"
    },
    phrases: [{ phrase: "make a speech", meaning: "做演讲" }, { phrase: "free speech", meaning: "言论自由" }]
  },
  {
    id: "travel",
    word: "travel",
    syllables: ["travel"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go on a trip, usually far away", zh: "\u65c5\u884c" }],
    examples: [{ sentence: "Vicky loves to travel. She goes to many faraway places." }],
    inflections: {
      pastTense: "traveled",
      pastParticiple: "traveled",
      thirdPerson: "travels",
      presentParticiple: "traveling"
    },
    rootAffix: { explanation: "tra-\u7a7f\u8fc7 + vel\u8d70 = \u7a7f\u8fc7\u2192\u65c5\u884c" },
    similarWords: [{"word": "level", "reason": "\u5f62\u8fd1", "zh": "\u6c34\u5e73\uff1b\u7ea7\u522b\uff1b\u5e73\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1atra-\u7a7f\u8fc7 + vel\u8d70 = \u7a7f\u8fc7\u2192\u65c5\u884c",
    phrases: [{ phrase: "travel to", meaning: "去旅行" }, { phrase: "travel around", meaning: "环游" }]
  },
  {
    id: "voice",
    word: "voice",
    syllables: ["voice"],
    partOfSpeech: "n.",
    definitions: [{ en: "the sound a person makes when speaking or singing", zh: "\u58f0\u97f3" }],
    examples: [{ sentence: "Janet has a beautiful voice. She should give singing lessons." }],
    inflections: {
      plural: "voices"
    },
    similarWords: [{"word": "choice", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6289\u62e9"}, {"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}, {"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}],
    phrases: [{ phrase: "in a loud voice", meaning: "大声地" }, { phrase: "lose one's voice", meaning: "失声" }]
  },
  {
    id: "wonder",
    word: "wonder",
    syllables: ["wonder"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have interest in knowing or learning something", zh: "\u60f3\u77e5\u9053" }],
    examples: [{ sentence: "Carlos did not bring a pencil to class today. I wonder why." }],
    inflections: {
      pastTense: "wondered",
      pastParticiple: "wondered",
      thirdPerson: "wonders",
      presentParticiple: "wondering"
    },
    similarWords: [{"word": "order", "reason": "\u5f62\u8fd1", "zh": "\u987a\u5e8f\uff1b\u8ba2\u5355\uff1b\u547d\u4ee4"}],
    phrases: [{ phrase: "wonder about", meaning: "想知道" }, { phrase: "no wonder", meaning: "难怪" }]
  },
  {
    id: "baseball",
    word: "baseball",
    syllables: ["baseball"],
    partOfSpeech: "n.",
    definitions: [{ en: "a game in which players hit a ball with a bat", zh: "\u68d2\u7403" }],
    examples: [{ sentence: "I really like to play baseball with my brother." }],
    inflections: {
      plural: "baseballs"
    },
    phrases: [{ phrase: "play baseball", meaning: "打棒球" }, { phrase: "baseball bat", meaning: "棒球棒" }]
  },
  {
    id: "basketball",
    word: "basketball",
    syllables: ["basketball"],
    partOfSpeech: "n.",
    definitions: [{ en: "a game in which players throw a ball through a net", zh: "\u7bee\u7403" }],
    examples: [{ sentence: "I need new shoes for playing basketball." }],
    inflections: {
      plural: "basketballs"
    },
    phrases: [{ phrase: "play basketball", meaning: "打篮球" }, { phrase: "basketball game", meaning: "篮球赛" }]
  },
  {
    id: "dangerous",
    word: "dangerous",
    syllables: ["dangerous"],
    partOfSpeech: "adj.",
    definitions: [{ en: "involving danger or harm", zh: "\u5371\u9669\u7684" }],
    examples: [{ sentence: "Going into the city alone can be dangerous." }],
    inflections: {
      comparative: "more dangerous",
      superlative: "most dangerous"
    },
    rootAffix: { explanation: "danger\u5371\u9669 + -ous\u5145\u6ee1 = \u5371\u9669\u7684" },
    similarWords: [{"word": "delicious", "reason": "\u5f62\u8fd1", "zh": "\u7f8e\u5473\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1adanger\u5371\u9669 + -ous\u5145\u6ee1 = \u5371\u9669\u7684",
    phrases: [{ phrase: "dangerous place", meaning: "危险的地方" }, { phrase: "look dangerous", meaning: "看起来很危险" }],
    antonyms: [{ word: "safe", zh: "安全的" }]
  },
  {
    id: "excited",
    word: "excited",
    syllables: ["excited"],
    partOfSpeech: "adj.",
    definitions: [{ en: "feeling happy about something", zh: "\u5174\u594b\u7684" }],
    examples: [{ sentence: "Lisa is excited to hear the president\u2019s speech." }],
    inflections: {
      comparative: "more excited",
      superlative: "most excited"
    },
    phrases: [{ phrase: "excited about", meaning: "对...兴奋" }, { phrase: "get excited", meaning: "变得兴奋" }],
    synonyms: [{"word": "thrilled", "zh": "兴奋的"}],
    similarWords: [{"word": "excitement", "reason": "\u62d3\u5c55", "zh": "兴奋"}]
  },
  {
    id: "hill",
    word: "hill",
    syllables: ["hill"],
    partOfSpeech: "n.",
    definitions: [{ en: "land that is higher than the area around it", zh: "\u5c0f\u5c71" }],
    examples: [{ sentence: "I wonder what is at the top of that hill." }],
    inflections: {
      plural: "hills"
    },
    similarWords: [{"word": "ill", "reason": "\u5f62\u8fd1", "zh": "\u751f\u75c5\u7684"}, {"word": "still", "reason": "\u5f62\u8fd1", "zh": "\u4ecd\u7136\uff1b\u9759\u6b62\u7684"}, {"word": "kill", "reason": "\u5f62\u8fd1", "zh": "\u6740\uff1b\u6740\u6b7b"}],
    phrases: [{ phrase: "on the hill", meaning: "在山上" }, { phrase: "go up the hill", meaning: "上山" }]
  },
  {
    id: "hit",
    word: "hit",
    syllables: ["hit"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make contact with something quickly", zh: "\u6253" }],
    examples: [{ sentence: "Josh hit the ball with his bat." }],
    inflections: {
      pastTense: "hit",
      pastParticiple: "hit",
      thirdPerson: "hits",
      presentParticiple: "hitting"
    },
    similarWords: [{"word": "sit", "reason": "\u5f62\u8fd1", "zh": "\u5750"}, {"word": "hot", "reason": "\u5f62\u8fd1", "zh": "\u70ed\u7684\uff1b\u8fa3\u7684"}, {"word": "hat", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}],
    phrases: [{ phrase: "hit the ball", meaning: "击球" }, { phrase: "hit on", meaning: "想到" }],
    synonyms: [{"word": "strike", "zh": "击打"}]
  },
  {
    id: "hospital",
    word: "hospital",
    syllables: ["hos", "pi", "tal"],
    partOfSpeech: "n.",
    definitions: [{ en: "the place people go when they are sick", zh: "\u533b\u9662" }],
    examples: [{ sentence: "The nurse at the hospital was nice to Janet." }],
    inflections: {
      plural: "hospitals"
    },
    rootAffix: { explanation: "hosp\u5ba2\u4eba + -ital = \u62db\u5f85\u5ba2\u4eba\u7684\u5730\u65b9\u2192\u533b\u9662" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ahosp\u5ba2\u4eba + -ital = \u62db\u5f85\u5ba2\u4eba\u7684\u5730\u65b9\u2192\u533b\u9662",
    phrases: [{ phrase: "go to hospital", meaning: "去医院" }, { phrase: "in hospital", meaning: "住院" }]
  },
  {
    id: "hurt",
    word: "hurt",
    syllables: ["hurt"],
    partOfSpeech: "v.",
    definitions: [{ en: "to harm, wound, or damage", zh: "\u53d7\u4f24" }],
    examples: [{ sentence: "Max hurt his leg when he fell down during the game." }],
    inflections: {
      pastTense: "hurt",
      pastParticiple: "hurt",
      thirdPerson: "hurts",
      presentParticiple: "hurting"
    },
    similarWords: [{"word": "hunt", "reason": "\u5f62\u8fd1", "zh": "\u6253\u730e\uff1b\u641c\u5bfb"}],
    phrases: [{ phrase: "hurt oneself", meaning: "伤到自己" }, { phrase: "feel hurt", meaning: "感到受伤" }]
  },
  {
    id: "motorbike",
    word: "motorbike",
    syllables: ["motorbike"],
    partOfSpeech: "n.",
    definitions: [{ en: "a bike that runs on a motor; a motorcycle", zh: "\u6469\u6258\u8f66" }],
    examples: [{ sentence: "Riding a motorbike is one of my hobbies." }],
    inflections: {
      plural: "motorbikes"
    },
    phrases: [{ phrase: "ride a motorbike", meaning: "骑摩托车" }, { phrase: "by motorbike", meaning: "骑摩托车" }],
    synonyms: [{"word": "motorcycle", "zh": "摩托车"}]
  },
  {
    id: "slow",
    word: "slow",
    syllables: ["slow"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not fast", zh: "\u6162\u7684" }],
    examples: [{ sentence: "The snail is a slow animal." }],
    inflections: {
      comparative: "slower",
      superlative: "slowest"
    },
    similarWords: [{"word": "allow", "reason": "\u5f62\u8fd1", "zh": "\u5141\u8bb8\uff1b\u51c6\u8bb8"}, {"word": "low", "reason": "\u5f62\u8fd1", "zh": "\u4f4e\u7684"}, {"word": "flow", "reason": "\u5f62\u8fd1", "zh": "\u6d41\u52a8\uff1b\u6d41\u91cf"}],
    phrases: [{ phrase: "slow down", meaning: "减速" }, { phrase: "slow speed", meaning: "慢速" }],
    antonyms: [{ word: "fast", zh: "快的" }]
  },
  {
    id: "drop",
    word: "drop",
    syllables: ["drop"],
    partOfSpeech: "v.",
    definitions: [{ en: "to fall or let fall", zh: "\u6389\u843d" }],
    examples: [{ sentence: "Agnes dropped the ball." }],
    inflections: {
      pastTense: "droped",
      pastParticiple: "droped",
      thirdPerson: "drops",
      presentParticiple: "droping"
    },
    phrases: [{ phrase: "drop by", meaning: "顺便拜访" }, { phrase: "drop out", meaning: "退学" }],
    synonyms: [{"word": "fall", "zh": "落下"}],
    similarWords: [{"word": "dropper", "reason": "\u62d3\u5c55", "zh": "滴管"}],
    antonyms: [{ word: "lift", zh: "举起" }, { word: "raise", zh: "举起" }]
  },
  {
    id: "earth",
    word: "earth",
    syllables: ["earth"],
    partOfSpeech: "n.",
    definitions: [{ en: "the ground; dirt", zh: "\u5730\u7403" }],
    examples: [{ sentence: "The earth here is perfect for growing things." }],
    inflections: {
      plural: "earths"
    },
    similarWords: [{"word": "worth", "reason": "\u5f62\u8fd1", "zh": "\u503c\u5f97\u7684\uff1b\u4ef7\u503c"}, {"word": "north", "reason": "\u5f62\u8fd1", "zh": "\u5317"}, {"word": "birth", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u751f"}],
    phrases: [{ phrase: "on earth", meaning: "在地球上" }, { phrase: "the Earth", meaning: "地球" }]
  },
  {
    id: "flag",
    word: "flag",
    syllables: ["flag"],
    partOfSpeech: "n.",
    definitions: [{ en: "a shape, often with four sides, used as a symbol", zh: "\u65d7\u5e1c" }],
    examples: [{ sentence: "This flag shows the race is over." }],
    inflections: {
      plural: "flags"
    },
    rootAffix: { explanation: "flag\u98d8\u626c = \u65d7\u5e1c" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aflag\u98d8\u626c = \u65d7\u5e1c",
    phrases: [{ phrase: "flag day", meaning: "国旗日" }, { phrase: "national flag", meaning: "国旗" }]
  },
  {
    id: "foolish",
    word: "foolish",
    syllables: ["foolish"],
    partOfSpeech: "adj.",
    definitions: [{ en: "lacking wisdom; stupid", zh: "\u611a\u8822\u7684" }],
    examples: [{ sentence: "It was foolish to get close to the animal." }],
    inflections: {
      comparative: "more foolish",
      superlative: "most foolish"
    },
    similarWords: [{"word": "publish", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u7248\uff1b\u53d1\u8868"}, {"word": "finish", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u6210\uff0c\u7ed3\u675f"}],
    phrases: [{ phrase: "foolish boy", meaning: "傻男孩" }, { phrase: "how foolish", meaning: "真傻" }],
    antonyms: [{ word: "clever", zh: "聪明的" }, { word: "wise", zh: "明智的" }]
  },
  {
    id: "hold",
    word: "hold",
    syllables: ["hold"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use hands to carry something", zh: "\u62ff\u7740" }],
    examples: [{ sentence: "The lady is holding a bottle of water." }],
    inflections: {
      pastTense: "held",
      pastParticiple: "held",
      thirdPerson: "holds",
      presentParticiple: "holding"
    },
    similarWords: [{"word": "fold", "reason": "\u5f62\u8fd1", "zh": "\u6298\u53e0\uff1b\u6298\u75d5"}, {"word": "cold", "reason": "\u5f62\u8fd1", "zh": "\u51b7\u7684\uff0c\u5bd2\u51b7\u7684"}, {"word": "old", "reason": "\u5f62\u8fd1", "zh": "\u8001\u7684"}],
    phrases: [{ phrase: "hold on", meaning: "坚持" }, { phrase: "hold up", meaning: "举起" }, { phrase: "hold a meeting", meaning: "开会" }]
  },
  {
    id: "matter",
    word: "matter",
    syllables: ["matter"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be important", zh: "\u4e8b\u60c5" }],
    examples: [{ sentence: "It does not matter which doctor you see. They are all good." }],
    inflections: {
      pastTense: "mattered",
      pastParticiple: "mattered",
      thirdPerson: "matters",
      presentParticiple: "mattering"
    },
    similarWords: [{"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "theater", "reason": "\u5f62\u8fd1", "zh": "\u5267\u9662"}, {"word": "water", "reason": "\u5f62\u8fd1", "zh": "\u6c34"}],
    phrases: [{ phrase: "no matter", meaning: "无论" }, { phrase: "what's the matter", meaning: "怎么了" }]
  },
  {
    id: "round",
    word: "round",
    syllables: ["round"],
    partOfSpeech: "adj.",
    definitions: [{ en: "in the shape of a circle or ball", zh: "\u5706\u7684" }],
    examples: [{ sentence: "The colorful ball is round." }],
    inflections: {
      comparative: "rounder",
      superlative: "roundest"
    },
    similarWords: [{"word": "ground", "reason": "\u5f62\u8fd1", "zh": "\u5730\u9762\uff1b\u571f\u5730\uff1b grounds"}, {"word": "sound", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}],
    phrases: [{ phrase: "round and round", meaning: "一圈圈" }, { phrase: "all round", meaning: "周围" }],
    synonyms: [{"word": "circular", "zh": "圆形的"}]
  },
  {
    id: "take",
    word: "take",
    syllables: ["take"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move a person or thing from one place to another", zh: "\u62ff" }],
    examples: [{ sentence: "I am going to take my little brother to a game." }],
    inflections: {
      pastTense: "took",
      pastParticiple: "taken",
      thirdPerson: "takes",
      presentParticiple: "taking"
    },
    similarWords: [{"word": "wake", "reason": "\u5f62\u8fd1", "zh": "\u9192\u6765"}, {"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}, {"word": "make", "reason": "\u5f62\u8fd1", "zh": "\u505a\uff0c\u5236\u9020"}, {"word": "mistake", "reason": "\u62d3\u5c55", "zh": "\u9519\u8bef\uff1b\u5931\u8bef"}],
    phrases: [{ phrase: "take off", meaning: "脱掉" }, { phrase: "take care of", meaning: "照顾" }, { phrase: "take part in", meaning: "参加" }]
  },
  {
    id: "tie",
    word: "tie",
    syllables: ["tie"],
    partOfSpeech: "n.",
    definitions: [{ en: "when two teams finish with the same number of points", zh: "\u7cfb" }],
    examples: [{ sentence: "The game ended in a tie." }],
    inflections: {
      plural: "ties"
    },
    similarWords: [{"word": "die", "reason": "\u5f62\u8fd1", "zh": "\u6b7b"}, {"word": "lie", "reason": "\u5f62\u8fd1", "zh": "\u8eba\uff1b\u8bf4\u8c0e"}, {"word": "time", "reason": "\u5f62\u8fd1", "zh": "\u65f6\u95f4\uff0c\u6b21\u6570"}],
    phrases: [{ phrase: "tie up", meaning: "系好" }, { phrase: "tie the shoes", meaning: "系鞋带" }]
  },
  {
    id: "weather",
    word: "weather",
    syllables: ["weather"],
    partOfSpeech: "n.",
    definitions: [{ en: "what the air is like at a certain time and place", zh: "\u5929\u6c14" }],
    examples: [{ sentence: "We did not have our baseball game because of bad weather." }],
    similarWords: [{"word": "together", "reason": "\u5f62\u8fd1", "zh": "\u4e00\u8d77\uff0c\u5171\u540c"}, {"word": "gather", "reason": "\u5f62\u8fd1", "zh": "\u805a\u96c6\uff1b\u6536\u96c6"}, {"word": "rather", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u5b81\u613f"}],
    phrases: [{ phrase: "bad weather", meaning: "坏天气" }, { phrase: "weather report", meaning: "天气预报" }]
  },
  {
    id: "art",
    word: "art",
    syllables: ["art"],
    partOfSpeech: "n.",
    definitions: [{ en: "paintings, drawings, or sculptures", zh: "\u827a\u672f" }],
    examples: [{ sentence: "One of my hobbies is making art for my parents." }],
    similarWords: [{"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "act", "reason": "\u5f62\u8fd1", "zh": "\u884c\u52a8\uff0c\u884c\u4e3a"}],
    phrases: [{ phrase: "art class", meaning: "美术课" }, { phrase: "work of art", meaning: "艺术品" }]
  },
  {
    id: "build",
    word: "build",
    syllables: ["build"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make", zh: "\u5efa\u9020" }],
    examples: [{ sentence: "He dreams about building houses for a job." }],
    inflections: {
      pastTense: "built",
      pastParticiple: "built",
      thirdPerson: "builds",
      presentParticiple: "building"
    },
    phrases: [
      { phrase: "build up", meaning: "\u5efa\u7acb" },
      { phrase: "build a house", meaning: "\u76d6\u623f\u5b50" }
    ],
    synonyms: [{"word": "construct", "zh": "建造；构建"}, {"word": "erect", "zh": "建立；直立"}, {"word": "assemble", "zh": "组装；集合"}],
    similarWords: [{"word": "child", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5b69\uff0c\u513f\u7ae5"}, {"word": "wild", "reason": "\u5f62\u8fd1", "zh": "\u91ce\u751f\u7684\uff1b\u72c2\u91ce\u7684"}],
    antonyms: [{ word: "destroy", zh: "摧毁" }]
  },
  {
    id: "choose",
    word: "choose",
    syllables: ["choose"],
    partOfSpeech: "v.",
    definitions: [{ en: "to decide or make a choice", zh: "\u9009\u62e9" }],
    examples: [{ sentence: "They are choosing which color they like." }],
    inflections: {
      pastTense: "chose",
      pastParticiple: "chosen",
      thirdPerson: "chooses",
      presentParticiple: "choosing"
    },
    similarWords: [{"word": "close", "reason": "\u5f62\u8fd1", "zh": "\u5173"}],
    phrases: [{ phrase: "choose from", meaning: "从...中选择" }, { phrase: "choose to do", meaning: "选择做" }],
    synonyms: [{"word": "select", "zh": "选择"}]
  },
  {
    id: "draw",
    word: "draw",
    syllables: ["draw"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a picture using a pen or pencil", zh: "\u753b" }],
    examples: [{ sentence: "Martha is drawing a man walking with a flag." }],
    inflections: {
      pastTense: "drew",
      pastParticiple: "drawn",
      thirdPerson: "draws",
      presentParticiple: "drawing"
    },
    phrases: [{ phrase: "draw a picture", meaning: "画画" }, { phrase: "draw up", meaning: "起草" }],
    synonyms: [{"word": "sketch", "zh": "素描"}],
    similarWords: [{"word": "drawer", "reason": "\u62d3\u5c55", "zh": "抽屉"}, {"word": "drawing", "reason": "\u62d3\u5c55", "zh": "绘画"}]
  },
  {
    id: "kid",
    word: "kid",
    syllables: ["kid"],
    partOfSpeech: "n.",
    definitions: [{ en: "a child", zh: "\u5b69\u5b50" }],
    examples: [{ sentence: "The kid in the math class did not understand the lesson." }],
    inflections: {
      plural: "kids"
    },
    similarWords: [{"word": "kind", "reason": "\u5f62\u8fd1", "zh": "\u79cd\u7c7b\uff0c\u5584\u826f\u7684"}],
    phrases: [{ phrase: "kid sister", meaning: "小妹妹" }, { phrase: "no kidding", meaning: "不开玩笑" }]
  },
  {
    id: "paint",
    word: "paint",
    syllables: ["paint"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make art with paint", zh: "\u753b\u753b" }],
    examples: [{ sentence: "In the future, she hopes to paint great art for a job." }],
    inflections: {
      pastTense: "painted",
      pastParticiple: "painted",
      thirdPerson: "paints",
      presentParticiple: "painting"
    },
    similarWords: [{"word": "print", "reason": "\u5f62\u8fd1", "zh": "\u5370\u5237\uff1b\u6253\u5370"}, {"word": "point", "reason": "\u5f62\u8fd1", "zh": "\u6307\uff0c\u70b9\uff0c\u5206\u6570"}],
    phrases: [{ phrase: "paint a picture", meaning: "画一幅画" }, { phrase: "paint the wall", meaning: "刷墙" }]
  },
  {
    id: "picture",
    word: "picture",
    syllables: ["picture"],
    partOfSpeech: "n.",
    definitions: [{ en: "a photograph or other image of a person or thing", zh: "\u56fe\u753b" }],
    examples: [{ sentence: "These are pictures of my friends." }],
    inflections: {
      plural: "pictures"
    },
    similarWords: [{"word": "future", "reason": "\u5f62\u8fd1", "zh": "\u672a\u6765"}, {"word": "culture", "reason": "\u5f62\u8fd1", "zh": "\u6587\u5316\uff1b\u6587\u660e"}, {"word": "nature", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u7136\uff1b\u672c\u6027"}],
    phrases: [{ phrase: "take a picture", meaning: "拍照" }, { phrase: "in the picture", meaning: "在图片里" }],
    rootAffix: { explanation: "pict画 + -ure = 图片" },
    synonyms: [{"word": "image", "zh": "图片"}]
  },
  {
    id: "plant",
    word: "plant",
    syllables: ["plant"],
    partOfSpeech: "n.",
    definitions: [{ en: "a living thing that grows in the earth", zh: "\u690d\u7269" }],
    examples: [{ sentence: "There are many plants on this hill." }],
    inflections: {
      plural: "plants"
    },
    similarWords: [{"word": "giant", "reason": "\u5f62\u8fd1", "zh": "\u5de8\u5927\u7684\uff1b\u5de8\u4eba"}, {"word": "want", "reason": "\u5f62\u8fd1", "zh": "\u8981\uff0c\u60f3\u8981"}, {"word": "plan", "reason": "\u5f62\u8fd1", "zh": "\u8ba1\u5212"}],
    phrases: [{ phrase: "plant a tree", meaning: "种树" }, { phrase: "water the plants", meaning: "给植物浇水" }]
  },
  {
    id: "repeat",
    word: "repeat",
    syllables: ["repeat"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say again", zh: "\u91cd\u590d" }],
    examples: [{ sentence: "Can you please repeat the question?" }],
    inflections: {
      pastTense: "repeated",
      pastParticiple: "repeated",
      thirdPerson: "repeats",
      presentParticiple: "repeating"
    },
    similarWords: [{"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "treat", "reason": "\u5f62\u8fd1", "zh": "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597"}],
    phrases: [{ phrase: "repeat after", meaning: "跟读" }, { phrase: "repeat the word", meaning: "重复单词" }],
    rootAffix: { explanation: "re-再 + peat追求 = 重复" }
  },
  {
    id: "wall",
    word: "wall",
    syllables: ["wall"],
    partOfSpeech: "n.",
    definitions: [{ en: "one of the sides of a room", zh: "\u5899" }],
    examples: [{ sentence: "Does it matter what I put on my bedroom walls?" }],
    inflections: {
      plural: "walls"
    },
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}],
    phrases: [{ phrase: "on the wall", meaning: "在墙上" }, { phrase: "Great Wall", meaning: "长城" }]
  },
  {
    id: "absent",
    word: "absent",
    syllables: ["absent"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not in a place", zh: "\u7f3a\u5e2d\u7684" }],
    examples: [{ sentence: "Many students were absent because of bad weather." }],
    inflections: {
      comparative: "more absent",
      superlative: "most absent"
    },
    similarWords: [{"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}, {"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "moment", "reason": "\u5f62\u8fd1", "zh": "\u65f6\u523b\uff1b\u77ac\u95f4"}],
    phrases: [{ phrase: "absent from", meaning: "缺席" }, { phrase: "be absent", meaning: "缺席" }]
  },
  {
    id: "back",
    word: "back",
    syllables: ["back"],
    partOfSpeech: "n.",
    definitions: [{ en: "the area farthest from the front", zh: "\u540e\u9762" }],
    examples: [{ sentence: "The people in the back of the room could not hear." }],
    inflections: {
      plural: "backs"
    },
    similarWords: [{"word": "pack", "reason": "\u5f62\u8fd1", "zh": "\u6253\u5305\uff1b\u5305\u88c5"}],
    phrases: [{ phrase: "back to", meaning: "回到" }, { phrase: "come back", meaning: "回来" }, { phrase: "give back", meaning: "归还" }],
    antonyms: [{ word: "front", zh: "前面的" }]
  },
  {
    id: "fix",
    word: "fix",
    syllables: ["fix"],
    partOfSpeech: "v.",
    definitions: [{ en: "to repair", zh: "\u4fee\u7406" }],
    examples: [{ sentence: "Mike had to fix the window that his son broke." }],
    inflections: {
      pastTense: "fixxed",
      pastParticiple: "fixxed",
      thirdPerson: "fixes",
      presentParticiple: "fixxing"
    },
    similarWords: [{"word": "mix", "reason": "\u5f62\u8fd1", "zh": "\u6df7\u5408\uff1b\u6405\u62cc"}, {"word": "fit", "reason": "\u5f62\u8fd1", "zh": "\u9002\u5408\uff1b\u5065\u5eb7\u7684"}],
    phrases: [{ phrase: "fix up", meaning: "修理" }, { phrase: "fix the problem", meaning: "解决问题" }],
    antonyms: [{ word: "break", zh: "打破" }]
  },
  {
    id: "land",
    word: "land",
    syllables: ["land"],
    partOfSpeech: "n.",
    definitions: [{ en: "earth; ground", zh: "\u571f\u5730" }],
    examples: [{ sentence: "The land is really dry this year." }],
    inflections: {
      plural: "lands"
    },
    similarWords: [{"word": "band", "reason": "\u5f62\u8fd1", "zh": "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5"}, {"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}, {"word": "grand", "reason": "\u5f62\u8fd1", "zh": "\u5b8f\u4f1f\u7684"}],
    phrases: [{ phrase: "on land", meaning: "在陆地上" }, { phrase: "land on", meaning: "登陆" }]
  },
  {
    id: "pants",
    word: "pants",
    syllables: ["pants"],
    partOfSpeech: "n.",
    definitions: [{ en: "clothes worn on the legs", zh: "\u88e4\u5b50" }],
    examples: [{ sentence: "Bring another pair of pants with you." }],
    inflections: {
      plural: "pantses"
    },
    rootAffix: { explanation: "pant-\u88e4\u5b50 = \u88e4\u5b50" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apant-\u88e4\u5b50 = \u88e4\u5b50",
    phrases: [{ phrase: "a pair of pants", meaning: "一条裤子" }, { phrase: "pants suit", meaning: "裤装" }]
  },
  {
    id: "picnic",
    word: "picnic",
    syllables: ["picnic"],
    partOfSpeech: "n.",
    definitions: [{ en: "a meal eaten outside on the ground", zh: "\u91ce\u9910" }],
    examples: [{ sentence: "They are having a picnic, and we are all invited." }],
    inflections: {
      plural: "picnics"
    },
    phrases: [{ phrase: "have a picnic", meaning: "去野餐" }, { phrase: "go for a picnic", meaning: "去野餐" }]
  },
  {
    id: "river",
    word: "river",
    syllables: ["river"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large flow of water moving across land", zh: "\u6cb3\u6d41" }],
    examples: [{ sentence: "Hundreds of people come to surf in this river every year." }],
    inflections: {
      plural: "rivers"
    },
    rootAffix: { explanation: "riv\u6cb3\u5cb8 + -er = \u6cb3" },
    similarWords: [{"word": "cover", "reason": "\u5f62\u8fd1", "zh": "\u8986\u76d6\uff1b\u5c01\u9762"}, {"word": "clever", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ariv\u6cb3\u5cb8 + -er = \u6cb3",
    phrases: [{ phrase: "river bank", meaning: "河岸" }, { phrase: "across the river", meaning: "过河" }]
  },
  {
    id: "rock",
    word: "rock",
    syllables: ["rock"],
    partOfSpeech: "n.",
    definitions: [{ en: "a big stone", zh: "\u5ca9\u77f3" }],
    examples: [{ sentence: "Climbing rocks can be dangerous." }],
    inflections: {
      plural: "rocks"
    },
    rootAffix: { explanation: "rock\u5ca9\u77f3 = \u5ca9\u77f3" },
    similarWords: [{"word": "sock", "reason": "\u5f62\u8fd1", "zh": "\u889c\u5b50\uff1b\u77ed\u889c"}, {"word": "block", "reason": "\u5f62\u8fd1", "zh": "\u5757\uff1b\u8857\u533a\uff1b\u963b\u6321"}, {"word": "knock", "reason": "\u5f62\u8fd1", "zh": "\u6572\uff1b\u6253"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1arock\u5ca9\u77f3 = \u5ca9\u77f3",
    phrases: [{ phrase: "rock music", meaning: "摇滚乐" }, { phrase: "on the rock", meaning: "在岩石上" }]
  },
  {
    id: "school",
    word: "school",
    syllables: ["school"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place to go to learn", zh: "\u5b66\u6821" }],
    examples: [{ sentence: "We sit on the stairs in front of our school." }],
    inflections: {
      plural: "schools"
    },
    similarWords: [{"word": "scholar", "reason": "\u62d3\u5c55", "zh": "学者"}],
    phrases: [{ phrase: "after school", meaning: "放学后" }, { phrase: "go to school", meaning: "上学" }]
  },
  {
    id: "wood",
    word: "wood",
    syllables: ["wood"],
    partOfSpeech: "n.",
    definitions: [{ en: "material from trees", zh: "\u6728\u5934" }],
    examples: [{ sentence: "They are using wood to build the house." }],
    inflections: {
      plural: "woods"
    },
    similarWords: [{"word": "food", "reason": "\u5f62\u8fd1", "zh": "\u98df\u7269"}, {"word": "flood", "reason": "\u5f62\u8fd1", "zh": "\u6d2a\u6c34\uff1b\u6df9\u6ca1"}, {"word": "blood", "reason": "\u5f62\u8fd1", "zh": "\u8840\uff1b\u8840\u6db2"}],
    phrases: [{ phrase: "in the wood", meaning: "在树林里" }, { phrase: "made of wood", meaning: "木制的" }]
  },
  {
    id: "book",
    word: "book",
    syllables: ["book"],
    partOfSpeech: "n.",
    definitions: [{ en: "sheets of paper held together", zh: "\u4e66" }],
    examples: [{ sentence: "The book I am reading is about the future." }],
    inflections: {
      plural: "books"
    },
    similarWords: [{"word": "cook", "reason": "\u5f62\u8fd1", "zh": "\u505a\u996d\uff0c\u70f9\u996a\uff0c\u53a8\u5e08"}, {"word": "look", "reason": "\u5f62\u8fd1", "zh": "\u770b\uff0c\u770b\u8d77\u6765"}, {"word": "boot", "reason": "\u5f62\u8fd1", "zh": "\u9774\u5b50"}],
    phrases: [{ phrase: "read a book", meaning: "读书" }, { phrase: "book store", meaning: "书店" }]
  },
  {
    id: "example",
    word: "example",
    syllables: ["example"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sample", zh: "\u4f8b\u5b50" }],
    examples: [{ sentence: "This picture is an example of fine art." }],
    inflections: {
      plural: "examples"
    },
    rootAffix: { explanation: "ex-\u51fa + ample\u62ff = \u62ff\u51fa\u6765\u7684\u6837\u54c1\u2192\u4f8b\u5b50" },
    similarWords: [{"word": "simple", "reason": "\u5f62\u8fd1", "zh": "\u7b80\u5355\u7684\uff1b\u6734\u7d20\u7684"}, {"word": "people", "reason": "\u5f62\u8fd1", "zh": "\u4eba\u4eec\uff0c\u4eba\u6c11"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + ample\u62ff = \u62ff\u51fa\u6765\u7684\u6837\u54c1\u2192\u4f8b\u5b50",
    phrases: [{ phrase: "for example", meaning: "例如" }, { phrase: "set an example", meaning: "树立榜样" }],
    synonyms: [{"word": "instance", "zh": "例子"}]
  },
  {
    id: "glue",
    word: "glue",
    syllables: ["glue"],
    partOfSpeech: "n.",
    definitions: [{ en: "something sticky used to make things stay together", zh: "\u80f6\u6c34" }],
    examples: [{ sentence: "Rita fixed the picture with some glue." }],
    inflections: {
      plural: "glues"
    },
    similarWords: [{"word": "value", "reason": "\u5f62\u8fd1", "zh": "\u4ef7\u503c\uff1b\u91cd\u89c6"}],
    phrases: [{ phrase: "glue stick", meaning: "胶棒" }, { phrase: "glue together", meaning: "粘在一起" }]
  },
  {
    id: "library",
    word: "library",
    syllables: ["li", "brar", "y"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place where books are kept", zh: "\u56fe\u4e66\u9986" }],
    examples: [{ sentence: "The group did not have its meeting at the library today." }],
    inflections: {
      plural: "libraries"
    },
    rootAffix: { explanation: "libr\u4e66 + -ary\u5730\u65b9 = \u653e\u4e66\u7684\u5730\u65b9\u2192\u56fe\u4e66\u9986" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1alibr\u4e66 + -ary\u5730\u65b9 = \u653e\u4e66\u7684\u5730\u65b9\u2192\u56fe\u4e66\u9986",
    similarWords: [{"word": "librarian", "reason": "\u62d3\u5c55", "zh": "图书管理员"}],
    phrases: [{ phrase: "library card", meaning: "借书卡" }, { phrase: "in the library", meaning: "在图书馆" }]
  },
  {
    id: "mean",
    word: "mean",
    syllables: ["mean"],
    partOfSpeech: "adj.",
    definitions: [{ en: "unkind", zh: "\u610f\u601d\u662f" }],
    examples: [{ sentence: "That animal is really mean." }],
    inflections: {
      comparative: "meaner",
      superlative: "meanest"
    },
    similarWords: [{"word": "clean", "reason": "\u5f62\u8fd1", "zh": "\u6253\u626b\uff0c\u5e72\u51c0\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}, {"word": "meal", "reason": "\u5f62\u8fd1", "zh": "\u9910\uff1b\u996d"}],
    phrases: [{ phrase: "mean to do", meaning: "打算做" }, { phrase: "what do you mean", meaning: "你是什么意思" }]
  },
  {
    id: "piece",
    word: "piece",
    syllables: ["piece"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small part of something larger", zh: "\u7247" }],
    examples: [{ sentence: "The broken piece of glass is dangerous." }],
    inflections: {
      plural: "pieces"
    },
    phrases: [{ phrase: "a piece of", meaning: "一片" }, { phrase: "piece by piece", meaning: "一块一块地" }],
    synonyms: [{"word": "part", "zh": "部分"}]
  },
  {
    id: "plan",
    word: "plan",
    syllables: ["plan"],
    partOfSpeech: "n.",
    definitions: [{ en: "a way of doing or making something", zh: "\u8ba1\u5212" }],
    examples: [{ sentence: "The president talked about his plan in the speech." }],
    inflections: {
      plural: "plans"
    },
    similarWords: [{"word": "play", "reason": "\u5f62\u8fd1", "zh": "\u73a9\uff0c\u73a9\u800d\uff0c\u64ad\u653e"}, {"word": "plant", "reason": "\u5f62\u8fd1", "zh": "\u690d\u7269"}],
    phrases: [{ phrase: "plan to do", meaning: "计划做" }, { phrase: "make a plan", meaning: "制定计划" }]
  },
  {
    id: "quiet",
    word: "quiet",
    syllables: ["quiet"],
    partOfSpeech: "adj.",
    definitions: [{ en: "silent; making little sound", zh: "\u5b89\u9759\u7684" }],
    examples: [{ sentence: "It is important to be quiet in the library." }],
    inflections: {
      comparative: "quieter",
      superlative: "quietest"
    },
    synonyms: [{"word": "silent", "zh": "安静的；沉默的"}, {"word": "calm", "zh": "平静的；镇静"}, {"word": "peaceful", "zh": "和平的；宁静的"}],
    similarWords: [{"word": "diet", "reason": "\u5f62\u8fd1", "zh": "\u996e\u98df\uff1b\u8282\u98df"}],
    phrases: [{ phrase: "be quiet", meaning: "安静" }, { phrase: "keep quiet", meaning: "保持安静" }],
    antonyms: [{ word: "loud", zh: "大声的" }, { word: "noisy", zh: "吵闹的" }]
  },
  {
    id: "read",
    word: "read",
    syllables: ["read"],
    partOfSpeech: "v.",
    definitions: [{ en: "to understand written words", zh: "\u8bfb" }],
    examples: [{ sentence: "We are reading about a famous basketball player." }],
    inflections: {
      pastTense: "read",
      pastParticiple: "read",
      thirdPerson: "reads",
      presentParticiple: "reading"
    },
    similarWords: [{"word": "bread", "reason": "\u5f62\u8fd1", "zh": "\u9762\u5305"}, {"word": "lead", "reason": "\u5f62\u8fd1", "zh": "\u9886\u5bfc\uff1b\u5e26\u9886\uff1b\u94c5"}, {"word": "road", "reason": "\u5f62\u8fd1", "zh": "\u8def\uff0c\u9053\u8def"}],
    phrases: [{ phrase: "read out", meaning: "读出来" }, { phrase: "read aloud", meaning: "大声朗读" }]
  },
  {
    id: "sound",
    word: "sound",
    syllables: ["sound"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you can hear", zh: "\u58f0\u97f3" }],
    examples: [{ sentence: "The river makes a loud sound when it rains." }],
    inflections: {
      plural: "sounds"
    },
    similarWords: [{"word": "ground", "reason": "\u5f62\u8fd1", "zh": "\u5730\u9762\uff1b\u571f\u5730\uff1b grounds"}, {"word": "round", "reason": "\u5f62\u8fd1", "zh": "\u5706\u7684"}],
    phrases: [{ phrase: "sound like", meaning: "听起来像" }, { phrase: "sound good", meaning: "听起来不错" }],
    synonyms: [{"word": "noise", "zh": "声音"}]
  },
  {
    id: "correct",
    word: "correct",
    syllables: ["correct"],
    partOfSpeech: "adj.",
    definitions: [{ en: "right", zh: "\u6b63\u786e\u7684" }],
    examples: [{ sentence: "The kid repeated the correct answer." }],
    inflections: {
      comparative: "more correct",
      superlative: "most correct"
    },
    rootAffix: { explanation: "cor-\u52a0\u5f3a + rect\u76f4 = \u76f4\u7684\u2192\u6b63\u786e\u7684" },
    similarWords: [{"word": "direct", "reason": "\u5f62\u8fd1", "zh": "\u76f4\u63a5\u7684\uff1b\u6307\u5bfc"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acor-\u52a0\u5f3a + rect\u76f4 = \u76f4\u7684\u2192\u6b63\u786e\u7684",
    phrases: [{ phrase: "correct answer", meaning: "正确答案" }, { phrase: "that's correct", meaning: "正确" }],
    synonyms: [{"word": "right", "zh": "正确的"}],
    antonyms: [{ word: "wrong", zh: "错误的" }]
  },
  {
    id: "difference",
    word: "difference",
    syllables: ["dif", "fer", "ence"],
    partOfSpeech: "n.",
    definitions: [{ en: "how two things are unlike each other", zh: "\u4e0d\u540c" }],
    examples: [{ sentence: "What is the difference between drawing and painting a picture?" }],
    inflections: {
      plural: "differences"
    },
    similarWords: [{"word": "experience", "reason": "\u5f62\u8fd1", "zh": "\u7ecf\u9a8c\uff1b\u7ecf\u5386"}, {"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1adif \u00b7 fer \u00b7 ence",
    phrases: [{ phrase: "make a difference", meaning: "有影响" }, { phrase: "tell the difference", meaning: "区分" }],
    rootAffix: { explanation: "different不同(e→ence) = 不同" }
  },
  {
    id: "difficult",
    word: "difficult",
    syllables: ["dif", "fi", "cult"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not easy", zh: "\u56f0\u96be\u7684" }],
    examples: [{ sentence: "The hill was both dangerous and difficult to climb." }],
    inflections: {
      comparative: "more difficult",
      superlative: "most difficult"
    },
    rootAffix: { explanation: "dif-\u5426\u5b9a + fac\u5bb9\u6613 + -ult = \u4e0d\u5bb9\u6613\u7684\u2192\u56f0\u96be\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1adif-\u5426\u5b9a + fac\u5bb9\u6613 + -ult = \u4e0d\u5bb9\u6613\u7684\u2192\u56f0\u96be\u7684",
    similarWords: [{"word": "difficulty", "reason": "\u62d3\u5c55", "zh": "困难；难题"}],
    phrases: [{ phrase: "difficult question", meaning: "难题" }, { phrase: "it's difficult", meaning: "很难" }],
    antonyms: [{ word: "easy", zh: "容易的" }]
  },
  {
    id: "excellent",
    word: "excellent",
    syllables: ["ex", "cel", "lent"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very good", zh: "\u6781\u597d\u7684" }],
    examples: [{ sentence: "The weather is excellent today." }],
    inflections: {
      comparative: "more excellent",
      superlative: "most excellent"
    },
    rootAffix: { explanation: "ex-\u51fa + cell\u5347\u8d77 + -ent = \u5347\u51fa\u7684\u2192\u5353\u8d8a\u7684" },
    similarWords: [{"word": "represent", "reason": "\u5f62\u8fd1", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}, {"word": "experiment", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9a8c\uff1b\u8bd5\u9a8c"}, {"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + cell\u5347\u8d77 + -ent = \u5347\u51fa\u7684\u2192\u5353\u8d8a\u7684",
    phrases: [{ phrase: "excellent idea", meaning: "好主意" }, { phrase: "excellent student", meaning: "优秀学生" }]
  },
  {
    id: "guess",
    word: "guess",
    syllables: ["guess"],
    partOfSpeech: "v.",
    definitions: [{ en: "to answer when you do not know if it is true", zh: "\u731c" }],
    examples: [{ sentence: "It is difficult to guess the right cup." }],
    inflections: {
      pastTense: "guessed",
      pastParticiple: "guessed",
      thirdPerson: "guesses",
      presentParticiple: "guessing"
    },
    similarWords: [{"word": "stress", "reason": "\u5f62\u8fd1", "zh": "\u538b\u529b\uff1b\u5f3a\u8c03"}, {"word": "press", "reason": "\u5f62\u8fd1", "zh": "\u538b\uff1b\u6309\uff1b\u65b0\u95fb\u754c"}, {"word": "guest", "reason": "\u5f62\u8fd1", "zh": "\u5ba2\u4eba\uff1b\u5bbe\u5ba2"}],
    phrases: [{ phrase: "guess what", meaning: "猜猜看" }, { phrase: "make a guess", meaning: "猜一猜" }],
    synonyms: [{"word": "suppose", "zh": "猜测"}]
  },
  {
    id: "museum",
    word: "museum",
    syllables: ["museum"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place where items of art, science, or history are kept", zh: "\u535a\u7269\u9986" }],
    examples: [{ sentence: "I like going to this museum because it is not boring." }],
    inflections: {
      plural: "museums"
    },
    rootAffix: { explanation: "muse\u7f2a\u65af + -um = \u7f2a\u65af\u5973\u795e\u7684\u5730\u65b9\u2192\u535a\u7269\u9986" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amuse\u7f2a\u65af + -um = \u7f2a\u65af\u5973\u795e\u7684\u5730\u65b9\u2192\u535a\u7269\u9986",
    phrases: [{ phrase: "in the museum", meaning: "在博物馆" }, { phrase: "science museum", meaning: "科学博物馆" }]
  },
  {
    id: "noise",
    word: "noise",
    syllables: ["noise"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you can hear, usually loud or unpleasant", zh: "\u566a\u97f3" }],
    examples: [{ sentence: "The angry man made a lot of noise." }],
    similarWords: [{"word": "raise", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u9ad8\uff1b\u629a\u517b\uff1b\u4e3e\u8d77"}, {"word": "rise", "reason": "\u5f62\u8fd1", "zh": "\u4e0a\u5347\uff1b\u5347\u8d77"}, {"word": "wise", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u660e\u667a\u7684"}],
    phrases: [{ phrase: "make noise", meaning: "制造噪音" }, { phrase: "loud noise", meaning: "噪音大" }]
  },
  {
    id: "relax",
    word: "relax",
    syllables: ["relax"],
    partOfSpeech: "v.",
    definitions: [{ en: "to rest", zh: "\u653e\u677e" }],
    examples: [{ sentence: "Try to relax during the weekend." }],
    inflections: {
      pastTense: "relaxed",
      pastParticiple: "relaxed",
      thirdPerson: "relaxes",
      presentParticiple: "relaxing"
    },
    similarWords: [{"word": "relaxation", "reason": "\u62d3\u5c55", "zh": "放松；消遣"}],
    phrases: [{ phrase: "relax oneself", meaning: "放松自己" }, { phrase: "sit back and relax", meaning: "坐下来放松" }]
  },
  {
    id: "science",
    word: "science",
    syllables: ["sci", "ence"],
    partOfSpeech: "n.",
    definitions: [{ en: "the study of things in the world", zh: "\u79d1\u5b66" }],
    examples: [{ sentence: "We studied the science of plants today." }],
    inflections: {
      plural: "sciences"
    },
    rootAffix: { explanation: "sci\u77e5\u9053 + -ence = \u77e5\u9053\u2192\u79d1\u5b66" },
    similarWords: [{"word": "evidence", "reason": "\u5f62\u8fd1", "zh": "\u8bc1\u636e\uff1b\u8ff9\u8c61"}, {"word": "sentence", "reason": "\u5f62\u8fd1", "zh": "\u53e5\u5b50\uff1b\u5224\u51b3"}, {"word": "audience", "reason": "\u5f62\u8fd1", "zh": "\u89c2\u4f17\uff1b\u542c\u4f17"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1asci\u77e5\u9053 + -ence = \u77e5\u9053\u2192\u79d1\u5b66",
    phrases: [{ phrase: "science class", meaning: "科学课" }, { phrase: "science fiction", meaning: "科幻" }]
  },
  {
    id: "tomorrow",
    word: "tomorrow",
    syllables: ["to", "mor", "row"],
    partOfSpeech: "adv.",
    definitions: [{ en: "on the day after today", zh: "\u660e\u5929" }],
    examples: [{ sentence: "Martin will be absent from school tomorrow." }],
    rootAffix: { explanation: "to\u5230 + morrow\u65e9\u6668 = \u5230\u65e9\u6668\u2192\u660e\u5929" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ato\u5230 + morrow\u65e9\u6668 = \u5230\u65e9\u6668\u2192\u660e\u5929",
    phrases: [{ phrase: "tomorrow morning", meaning: "明早" }, { phrase: "see you tomorrow", meaning: "明天见" }],
    antonyms: [{ word: "today", zh: "今天" }, { word: "yesterday", zh: "昨天" }]
  },
  {
    id: "close",
    word: "close",
    syllables: ["close"],
    partOfSpeech: "adj.",
    definitions: [{ en: "near", zh: "\u5173" }],
    examples: [{ sentence: "The baby stays close to his mother." }],
    inflections: {
      comparative: "closer",
    },
    synonyms: [{"word": "shut", "zh": "关闭；关门"}, {"word": "seal", "zh": "密封；封印"}, {"word": "lock", "zh": "锁；锁住"}],
    similarWords: [{"word": "lose", "reason": "\u5f62\u8fd1", "zh": "\u4e22\u5931"}, {"word": "choose", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9"}],
    phrases: [{ phrase: "close the door", meaning: "关门" }, { phrase: "close to", meaning: "靠近" }],
    antonyms: [{ word: "open", zh: "打开" }]
  },
  {
    id: "grass",
    word: "grass",
    syllables: ["grass"],
    partOfSpeech: "n.",
    definitions: [{ en: "a plant that covers the ground", zh: "\u8349" }],
    examples: [{ sentence: "I enjoy relaxing on the grass." }],
    inflections: {
      plural: "grasses"
    },
    similarWords: [{"word": "pass", "reason": "\u5f62\u8fd1", "zh": "\u7ecf\u8fc7\uff0c\u4f20\u9012"}, {"word": "glass", "reason": "\u5f62\u8fd1", "zh": "\u73bb\u7483\u676f"}, {"word": "class", "reason": "\u5f62\u8fd1", "zh": "\u73ed\u7ea7"}],
    phrases: [{ phrase: "on the grass", meaning: "在草地上" }, { phrase: "grass green", meaning: "草绿" }]
  },
  {
    id: "hat",
    word: "hat",
    syllables: ["hat"],
    partOfSpeech: "n.",
    definitions: [{ en: "something worn on the head", zh: "\u5e3d\u5b50" }],
    examples: [{ sentence: "She wears her hat everywhere." }],
    inflections: {
      plural: "hats"
    },
    similarWords: [{"word": "eat", "reason": "\u5f62\u8fd1", "zh": "\u5403"}, {"word": "hot", "reason": "\u5f62\u8fd1", "zh": "\u70ed\u7684\uff1b\u8fa3\u7684"}, {"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}],
    phrases: [{ phrase: "wear a hat", meaning: "戴帽子" }, { phrase: "hat on", meaning: "戴上帽子" }]
  },
  {
    id: "lake",
    word: "lake",
    syllables: ["lake"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large area of water with land around it", zh: "\u6e56" }],
    examples: [{ sentence: "We are having a picnic by the lake tomorrow." }],
    inflections: {
      plural: "lakes"
    },
    similarWords: [{"word": "wake", "reason": "\u5f62\u8fd1", "zh": "\u9192\u6765"}, {"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}, {"word": "take", "reason": "\u5f62\u8fd1", "zh": "\u62ff"}],
    phrases: [{ phrase: "by the lake", meaning: "在湖边" }, { phrase: "lake view", meaning: "湖景" }]
  },
  {
    id: "moon",
    word: "moon",
    syllables: ["moon"],
    partOfSpeech: "n.",
    definitions: [{ en: "the round, white object in the sky at night", zh: "\u6708\u4eae" }],
    examples: [{ sentence: "What is the difference between the sun and the moon?" }],
    inflections: {
      plural: "moons"
    },
    rootAffix: { explanation: "moon\u6708\u4eae = \u6708\u4eae" },
    similarWords: [{"word": "noon", "reason": "\u5f62\u8fd1", "zh": "\u4e2d\u5348\uff1b\u6b63\u5348"}, {"word": "spoon", "reason": "\u5f62\u8fd1", "zh": "\u52fa\u5b50"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amoon\u6708\u4eae = \u6708\u4eae",
    phrases: [{ phrase: "full moon", meaning: "满月" }, { phrase: "moon light", meaning: "月光" }]
  },
  {
    id: "mountain",
    word: "mountain",
    syllables: ["mountain"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of land that is higher than a hill", zh: "\u5c71" }],
    examples: [{ sentence: "There is a river by the mountain." }],
    inflections: {
      plural: "mountains"
    },
    rootAffix: { explanation: "mount\u5c71 + -ain = \u5c71" },
    similarWords: [{"word": "captain", "reason": "\u5f62\u8fd1", "zh": "\u961f\u957f\uff1b\u8239\u957f\uff1b\u673a\u957f"}, {"word": "certain", "reason": "\u5f62\u8fd1", "zh": "\u786e\u5b9a\u7684\uff1b\u67d0\u4e2a"}, {"word": "explain", "reason": "\u5f62\u8fd1", "zh": "\u89e3\u91ca\uff1b\u8bf4\u660e"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amount\u5c71 + -ain = \u5c71",
    phrases: [{ phrase: "climb a mountain", meaning: "爬山" }, { phrase: "mountain top", meaning: "山顶" }]
  },
  {
    id: "smell",
    word: "smell",
    syllables: ["smell"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be able to sense an odor with your nose", zh: "\u95fb" }],
    examples: [{ sentence: "She is able to smell the beautiful flower." }],
    inflections: {
      pastTense: "smelt/smelled",
      pastParticiple: "smelt/smelled",
      thirdPerson: "smells",
      presentParticiple: "smelling"
    },
    similarWords: [{"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}, {"word": "tell", "reason": "\u5f62\u8fd1", "zh": "\u544a\u8bc9"}],
    phrases: [{ phrase: "smell good", meaning: "闻起来香" }, { phrase: "sense of smell", meaning: "嗅觉" }]
  },
  {
    id: "soap",
    word: "soap",
    syllables: ["soap"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used with water to clean", zh: "\u80a5\u7682" }],
    examples: [{ sentence: "The kid used soap to wash his hands." }],
    inflections: {
      plural: "soaps"
    },
    rootAffix: { explanation: "soap\u80a5\u7682 = \u80a5\u7682" },
    mnemonics: "\u53d1\u97f3\u50cf\"\u55d6\u5657\"\uff0c\u80a5\u7682\u6ed1\u6e9c\u6e9c\u7684",
    phrases: [{ phrase: "soap opera", meaning: "肥皂剧" }, { phrase: "a bar of soap", meaning: "一块肥皂" }],
    similarWords: [{"word": "soapy", "reason": "\u62d3\u5c55", "zh": "多泡沫的"}]
  },
  {
    id: "toilet",
    word: "toilet",
    syllables: ["toilet"],
    partOfSpeech: "n.",
    definitions: [{ en: "a seat in a bathroom", zh: "\u5395\u6240" }],
    examples: [{ sentence: "I do not like using the toilets at school." }],
    inflections: {
      plural: "toilets"
    },
    phrases: [{ phrase: "toilet paper", meaning: "卫生纸" }, { phrase: "go to the toilet", meaning: "上厕所" }]
  },
  {
    id: "wet",
    word: "wet",
    syllables: ["wet"],
    partOfSpeech: "adj.",
    definitions: [{ en: "covered with water", zh: "\u6e7f\u7684" }],
    examples: [{ sentence: "The boy got wet from the water." }],
    inflections: {
      comparative: "weter",
      superlative: "wetest"
    },
    similarWords: [{"word": "let", "reason": "\u5f62\u8fd1", "zh": "\u8ba9\uff0c\u5141\u8bb8"}, {"word": "pet", "reason": "\u5f62\u8fd1", "zh": "\u5ba0\u7269"}, {"word": "set", "reason": "\u5f62\u8fd1", "zh": "\u8bbe\u7f6e\uff1b\u4e00\u5957"}],
    phrases: [{ phrase: "wet hair", meaning: "湿头发" }, { phrase: "wet paint", meaning: "油漆未干" }],
    antonyms: [{ word: "dry", zh: "干的" }]
  },
  {
    id: "boot",
    word: "boot",
    syllables: ["boot"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of shoe", zh: "\u9774\u5b50" }],
    examples: [{ sentence: "I found an excellent pair of boots." }],
    inflections: {
      plural: "boots"
    },
    similarWords: [{"word": "shoot", "reason": "\u5f62\u8fd1", "zh": "\u5c04\u51fb\uff1b\u62cd\u6444"}, {"word": "root", "reason": "\u5f62\u8fd1", "zh": "\u6839\uff1b\u6839\u6e90"}, {"word": "book", "reason": "\u5f62\u8fd1", "zh": "\u4e66"}],
    phrases: [{ phrase: "boot up", meaning: "启动" }, { phrase: "a pair of boots", meaning: "一双靴子" }]
  },
  {
    id: "deep",
    word: "deep",
    syllables: ["deep"],
    partOfSpeech: "adj.",
    definitions: [{ en: "going far below", zh: "\u6df1\u7684" }],
    examples: [{ sentence: "They made a deep hole into the side of the hill." }],
    inflections: {
      comparative: "deeper",
      superlative: "deepest"
    },
    similarWords: [{"word": "keep", "reason": "\u5f62\u8fd1", "zh": "\u4fdd\u6301\uff0c\u7ee7\u7eed"}, {"word": "sleep", "reason": "\u5f62\u8fd1", "zh": "\u7761\u89c9\uff0c\u7761\u7720"}],
    phrases: [{ phrase: "deep water", meaning: "深水" }, { phrase: "deep sleep", meaning: "沉睡" }],
    antonyms: [{ word: "shallow", zh: "浅的" }]
  },
  {
    id: "farm",
    word: "farm",
    syllables: ["farm"],
    partOfSpeech: "n.",
    definitions: [{ en: "land used for growing plants or raising animals for food", zh: "\u519c\u573a" }],
    examples: [{ sentence: "Our plan is to visit a farm tomorrow." }],
    inflections: {
      plural: "farms"
    },
    similarWords: [{"word": "warm", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u6696\u7684\uff1b\u4f7f\u6e29\u6696"}, {"word": "form", "reason": "\u5f62\u8fd1", "zh": "\u5f62\u5f0f\uff1b\u8868\u683c\uff1b\u5f62\u6210"}, {"word": "far", "reason": "\u5f62\u8fd1", "zh": "\u8fdc\u7684\uff0c\u9065\u8fdc"}],
    phrases: [{ phrase: "on the farm", meaning: "在农场" }, { phrase: "farm animal", meaning: "农场动物" }]
  },
  {
    id: "glove",
    word: "glove",
    syllables: ["glove"],
    partOfSpeech: "n.",
    definitions: [{ en: "clothing worn on the hands", zh: "\u624b\u5957" }],
    examples: [{ sentence: "You should wear gloves when working with wood." }],
    inflections: {
      plural: "gloves"
    },
    similarWords: [{"word": "love", "reason": "\u5f62\u8fd1", "zh": "\u7231\uff0c\u559c\u6b22"}, {"word": "move", "reason": "\u5f62\u8fd1", "zh": "\u79fb\u52a8\uff0c\u642c\u52a8"}],
    phrases: [{ phrase: "a pair of gloves", meaning: "一副手套" }, { phrase: "baseball glove", meaning: "棒球手套" }]
  },
  {
    id: "house",
    word: "house",
    syllables: ["house"],
    partOfSpeech: "n.",
    definitions: [{ en: "a building where people live", zh: "\u623f\u5b50" }],
    examples: [{ sentence: "Will you repeat the directions to your house?" }],
    inflections: {
      plural: "houses"
    },
    similarWords: [{"word": "excuse", "reason": "\u5f62\u8fd1", "zh": "\u539f\u8c05\uff0c\u501f\u53e3"}, {"word": "cause", "reason": "\u5f62\u8fd1", "zh": "\u539f\u56e0\uff1b\u5f15\u8d77\uff1b\u5bfc\u81f4"}],
    phrases: [{ phrase: "house work", meaning: "家务" }, { phrase: "at home", meaning: "在家" }]
  },
  {
    id: "sunny",
    word: "sunny",
    syllables: ["sunny"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having lots of sun", zh: "\u6674\u6717\u7684" }],
    examples: [{ sentence: "I guess it will be sunny tomorrow." }],
    inflections: {
      comparative: "sunnier",
      superlative: "sunniest"
    },
    similarWords: [{"word": "funny", "reason": "\u5f62\u8fd1", "zh": "\u6709\u8da3\u7684\uff0c\u597d\u7b11\u7684"}, {"word": "penny", "reason": "\u5f62\u8fd1", "zh": "\u4fbf\u58eb\uff1b\u4e00\u5206\u94b1"}],
    phrases: [{ phrase: "sunny day", meaning: "晴天" }, { phrase: "sunny weather", meaning: "晴朗天气" }],
    rootAffix: { explanation: "sun太阳 + -y多 = 晴朗的" }
  },
  {
    id: "top",
    word: "top",
    syllables: ["top"],
    partOfSpeech: "n.",
    definitions: [{ en: "the highest point", zh: "\u9876\u90e8" }],
    examples: [{ sentence: "The man ran to the top of the hill." }],
    inflections: {
      plural: "tops"
    },
    similarWords: [{"word": "stop", "reason": "\u5f62\u8fd1", "zh": "\u505c\u6b62\uff0c\u505c\u4e0b"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}],
    phrases: [{ phrase: "on top of", meaning: "在...顶上" }, { phrase: "top student", meaning: "优等生" }],
    antonyms: [{ word: "bottom", zh: "底部" }]
  },
  {
    id: "well",
    word: "well",
    syllables: ["well"],
    partOfSpeech: "n.",
    definitions: [{ en: "a deep hole with water for drinking", zh: "\u597d" }],
    examples: [{ sentence: "The farm has a well where people take water to use." }],
    inflections: {
      plural: "wells"
    },
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}],
    phrases: [{ phrase: "as well", meaning: "也" }, { phrase: "as well as", meaning: "和" }],
    antonyms: [{ word: "ill", zh: "生病的" }, { word: "sick", zh: "生病的" }]
  },
  {
    id: "wide",
    word: "wide",
    syllables: ["wide"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a large distance from one side to the other", zh: "\u5bbd\u7684" }],
    examples: [{ sentence: "The river is too wide to swim across." }],
    inflections: {
      comparative: "wider",
    },
    similarWords: [{"word": "guide", "reason": "\u5f62\u8fd1", "zh": "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc"}, {"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}, {"word": "hide", "reason": "\u5f62\u8fd1", "zh": "\u8eb2\u85cf"}],
    phrases: [{ phrase: "wide open", meaning: "大开着" }, { phrase: "wide world", meaning: "广阔世界" }],
    antonyms: [{ word: "narrow", zh: "狭窄的" }]
  },
  {
    id: "windy",
    word: "windy",
    syllables: ["windy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of wind", zh: "\u6709\u98ce\u7684" }],
    examples: [{ sentence: "It is too windy to wear a hat today." }],
    inflections: {
      comparative: "windier",
      superlative: "windiest"
    },
    similarWords: [{"word": "wind", "reason": "\u62d3\u5c55", "zh": "风"}],
    phrases: [{ phrase: "windy day", meaning: "刮风天" }, { phrase: "windy weather", meaning: "刮风天气" }],
    rootAffix: { explanation: "wind风 + -y多 = 有风的" }
  },
  {
    id: "care",
    word: "care",
    syllables: ["care"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look after", zh: "\u5173\u5fc3" }],
    examples: [{ sentence: "She cares for her puppy." }],
    inflections: {
      pastTense: "cared",
      pastParticiple: "cared",
      thirdPerson: "cares",
      presentParticiple: "caring"
    },
    similarWords: [{"word": "share", "reason": "\u5f62\u8fd1", "zh": "\u5206\u4eab\uff1b\u4efd\u989d"}, {"word": "case", "reason": "\u5f62\u8fd1", "zh": "\u6848\u4f8b\uff1b\u76d2\u5b50"}, {"word": "cure", "reason": "\u5f62\u8fd1", "zh": "\u6cbb\u6108\uff1b\u7597\u6cd5"}, {"word": "career", "reason": "\u62d3\u5c55", "zh": "\u804c\u4e1a\uff1b\u751f\u6daf"}],
    phrases: [{ phrase: "care about", meaning: "关心" }, { phrase: "take care", meaning: "小心" }, { phrase: "take care of", meaning: "照顾" }]
  },
  {
    id: "die",
    word: "die",
    syllables: ["die"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stop living", zh: "\u6b7b" }],
    examples: [{ sentence: "The grass in the yard died in the winter." }],
    inflections: {
      pastTense: "died",
      pastParticiple: "died",
      thirdPerson: "dies",
      presentParticiple: "dying"
    },
    similarWords: [{"word": "tie", "reason": "\u5f62\u8fd1", "zh": "\u7cfb"}, {"word": "lie", "reason": "\u5f62\u8fd1", "zh": "\u8eba\uff1b\u8bf4\u8c0e"}, {"word": "diet", "reason": "\u5f62\u8fd1", "zh": "\u996e\u98df\uff1b\u8282\u98df"}],
    phrases: [{ phrase: "die of", meaning: "死于" }, { phrase: "die out", meaning: "灭绝" }]
  },
  {
    id: "empty",
    word: "empty",
    syllables: ["empty"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having nothing inside", zh: "\u7a7a\u7684" }],
    examples: [{ sentence: "The pool is empty. It does not have water." }],
    inflections: {
      comparative: "emptier",
      superlative: "emptiest"
    },
    phrases: [{ phrase: "empty bottle", meaning: "空瓶子" }, { phrase: "empty the bin", meaning: "倒垃圾桶" }],
    synonyms: [{"word": "vacant", "zh": "空的"}],
    similarWords: [{"word": "emptiness", "reason": "\u62d3\u5c55", "zh": "空旷"}],
    antonyms: [{ word: "full", zh: "满的" }]
  },
  {
    id: "feed",
    word: "feed",
    syllables: ["feed"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give someone or something food", zh: "\u5582" }],
    examples: [{ sentence: "We cannot feed the animals in the mountains." }],
    inflections: {
      pastTense: "fed",
      pastParticiple: "fed",
      thirdPerson: "feeds",
      presentParticiple: "feeding"
    },
    similarWords: [{"word": "need", "reason": "\u5f62\u8fd1", "zh": "\u9700\u8981"}, {"word": "speed", "reason": "\u5f62\u8fd1", "zh": "\u901f\u5ea6\uff1b\u52a0\u901f"}, {"word": "feel", "reason": "\u5f62\u8fd1", "zh": "\u611f\u89c9"}],
    phrases: [{ phrase: "feed on", meaning: "以...为食" }, { phrase: "feed the dog", meaning: "喂狗" }]
  },
  {
    id: "health",
    word: "health",
    syllables: ["health"],
    partOfSpeech: "n.",
    definitions: [{ en: "the good condition of the body", zh: "\u5065\u5eb7" }],
    examples: [{ sentence: "For your health, use soap to clean your body." }],
    similarWords: [{"word": "healthy", "reason": "\u62d3\u5c55", "zh": "健康的"}],
    phrases: [{ phrase: "health food", meaning: "健康食品" }, { phrase: "in good health", meaning: "身体健康" }],
    antonyms: [{ word: "disease", zh: "疾病" }]
  },
  {
    id: "heart",
    word: "heart",
    syllables: ["heart"],
    partOfSpeech: "n.",
    definitions: [{ en: "the body part that moves blood through the body", zh: "\u5fc3\u810f" }],
    examples: [{ sentence: "We are learning about how the heart works in science class." }],
    inflections: {
      plural: "hearts"
    },
    similarWords: [{"word": "start", "reason": "\u5f62\u8fd1", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "smart", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u667a\u80fd\u7684"}],
    phrases: [{ phrase: "learn by heart", meaning: "背下来" }, { phrase: "heart and soul", meaning: "全心全意" }]
  },
  {
    id: "large",
    word: "large",
    syllables: ["large"],
    partOfSpeech: "adj.",
    definitions: [{ en: "big in size or amount", zh: "\u5927\u7684" }],
    examples: [{ sentence: "Our house is very large and close to a beautiful lake." }],
    inflections: {
      comparative: "larger",
    },
    phrases: [{ phrase: "a large number of", meaning: "大量的" }, { phrase: "large size", meaning: "大号" }],
    synonyms: [{"word": "big", "zh": "大的"}, {"word": "huge", "zh": "巨大的"}],
    similarWords: [{"word": "enlarge", "reason": "\u62d3\u5c55", "zh": "放大"}]
  },
  {
    id: "remember",
    word: "remember",
    syllables: ["re", "mem", "ber"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have or keep something in mind", zh: "\u8bb0\u4f4f" }],
    examples: [{ sentence: "He could not remember how to get to the farm." }],
    inflections: {
      pastTense: "remembered",
      pastParticiple: "remembered",
      thirdPerson: "remembers",
      presentParticiple: "remembering"
    },
    rootAffix: { explanation: "re-\u518d + member\u8bb0\u4f4f = \u518d\u6b21\u8bb0\u4f4f\u2192\u56de\u5fc6" },
    similarWords: [{"word": "member", "reason": "\u62d3\u5c55", "zh": "\u6210\u5458\uff1b\u4f1a\u5458"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1are-\u518d + member\u8bb0\u4f4f = \u518d\u6b21\u8bb0\u4f4f\u2192\u56de\u5fc6",
    phrases: [{ phrase: "remember to do", meaning: "记得做" }, { phrase: "remember doing", meaning: "记得做过" }],
    antonyms: [{ word: "forget", zh: "忘记" }]
  },
  {
    id: "rule",
    word: "rule",
    syllables: ["rule"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that says what you can or cannot do", zh: "\u89c4\u5219" }],
    examples: [{ sentence: "One of the library rules is, \u201cBe quiet.\u201d" }],
    inflections: {
      plural: "rules"
    },
    similarWords: [{"word": "role", "reason": "\u5f62\u8fd1", "zh": "\u89d2\u8272\uff1b\u4f5c\u7528"}],
    phrases: [{ phrase: "class rules", meaning: "班规" }, { phrase: "as a rule", meaning: "通常" }]
  },
  {
    id: "zoo",
    word: "zoo",
    syllables: ["zoo"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place with wild animals for people to look at", zh: "\u52a8\u7269\u56ed" }],
    examples: [{ sentence: "Our school visited a museum and the zoo this year." }],
    inflections: {
      plural: "zooes"
    },
    phrases: [{ phrase: "go to the zoo", meaning: "去动物园" }, { phrase: "zoo keeper", meaning: "动物园管理员" }]
  },
  {
    id: "dirty",
    word: "dirty",
    syllables: ["dirty"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not clean", zh: "\u810f\u7684" }],
    examples: [{ sentence: "Wash that dirty toilet with soap and water." }],
    inflections: {
      comparative: "dirtier",
      superlative: "dirtiest"
    },
    synonyms: [{"word": "messy", "zh": "脏乱的；混乱的"}, {"word": "filthy", "zh": "脏的；污秽的"}],
    phrases: [{ phrase: "dirty clothes", meaning: "脏衣服" }, { phrase: "dirty water", meaning: "脏水" }],
    rootAffix: { explanation: "dirt脏物 + -y多 = 脏的" },
    antonyms: [{ word: "clean", zh: "干净的" }]
  },
  {
    id: "fill",
    word: "fill",
    syllables: ["fill"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make full of something", zh: "\u586b\u6ee1" }],
    examples: [{ sentence: "Fill these empty bookshelves with your books." }],
    inflections: {
      pastTense: "filled",
      pastParticiple: "filled",
      thirdPerson: "fills",
      presentParticiple: "filling"
    },
    similarWords: [{"word": "ill", "reason": "\u5f62\u8fd1", "zh": "\u751f\u75c5\u7684"}, {"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "still", "reason": "\u5f62\u8fd1", "zh": "\u4ecd\u7136\uff1b\u9759\u6b62\u7684"}],
    phrases: [{ phrase: "fill in", meaning: "填写" }, { phrase: "fill up", meaning: "装满" }]
  },
  {
    id: "fresh",
    word: "fresh",
    syllables: ["fresh"],
    partOfSpeech: "adj.",
    definitions: [{ en: "recently made or gotten", zh: "\u65b0\u9c9c\u7684" }],
    examples: [{ sentence: "I make a fresh cup of tea every morning." }],
    inflections: {
      comparative: "fresher",
      superlative: "freshest"
    },
    phrases: [{ phrase: "fresh air", meaning: "新鲜空气" }, { phrase: "fresh fruit", meaning: "新鲜水果" }],
    synonyms: [{"word": "new", "zh": "新鲜的"}],
    similarWords: [{"word": "freshness", "reason": "\u62d3\u5c55", "zh": "新鲜"}],
    antonyms: [{ word: "stale", zh: "不新鲜的" }]
  },
  {
    id: "frog",
    word: "frog",
    syllables: ["frog"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small green animal that lives near water", zh: "\u9752\u86d9" }],
    examples: [{ sentence: "A lot of frogs live by this lake." }],
    inflections: {
      plural: "frogs"
    },
    rootAffix: { explanation: "frog\u8df3\uff08\u62df\u58f0\u8bcd\uff0c\u9752\u86d9\u8df3\u7684\u58f0\u97f3\uff09" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afrog\u8df3\uff08\u62df\u58f0\u8bcd\uff0c\u9752\u86d9\u8df3\u7684\u58f0\u97f3\uff09",
    phrases: [{ phrase: "frog prince", meaning: "青蛙王子" }, { phrase: "jump like a frog", meaning: "像青蛙一样跳" }]
  },
  {
    id: "girl",
    word: "girl",
    syllables: ["girl"],
    partOfSpeech: "n.",
    definitions: [{ en: "a kid who is not a boy", zh: "\u5973\u5b69" }],
    examples: [{ sentence: "There is a mean girl in my art class." }],
    inflections: {
      plural: "girls"
    },
    phrases: [{ phrase: "little girl", meaning: "小女孩" }, { phrase: "girl friend", meaning: "女朋友" }],
    similarWords: [{"word": "girlhood", "reason": "\u62d3\u5c55", "zh": "少女时代"}, {"word": "girlish", "reason": "\u62d3\u5c55", "zh": "少女般的"}]
  },
  {
    id: "glass",
    word: "glass",
    syllables: ["glass"],
    partOfSpeech: "n.",
    definitions: [{ en: "a container used for drinks", zh: "\u73bb\u7483\u676f" }],
    examples: [{ sentence: "Use this glass for your juice." }],
    inflections: {
      plural: "glasses"
    },
    similarWords: [{"word": "class", "reason": "\u5f62\u8fd1", "zh": "\u73ed\u7ea7"}, {"word": "pass", "reason": "\u5f62\u8fd1", "zh": "\u7ecf\u8fc7\uff0c\u4f20\u9012"}, {"word": "grass", "reason": "\u5f62\u8fd1", "zh": "\u8349"}],
    phrases: [{ phrase: "a glass of", meaning: "一杯" }, { phrase: "glass door", meaning: "玻璃门" }]
  },
  {
    id: "hungry",
    word: "hungry",
    syllables: ["hungry"],
    partOfSpeech: "adj.",
    definitions: [{ en: "needing food", zh: "\u997f\u7684" }],
    examples: [{ sentence: "The boy is hungry and ready to eat." }],
    inflections: {
      comparative: "hungrier",
      superlative: "hungriest"
    },
    rootAffix: { explanation: "hungr\u997f + -y = \u997f\u7684" },
    similarWords: [{"word": "angry", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6c14\u7684"}],
    mnemonics: "\"hungry\" \u548c \"angry\" \u63a5\u8fd1\uff0c\u997f\u7684\u65f6\u5019\u5bb9\u6613\u751f\u6c14",
    phrases: [{ phrase: "feel hungry", meaning: "感觉饿" }, { phrase: "go hungry", meaning: "挨饿" }]
  },
  {
    id: "spoon",
    word: "spoon",
    syllables: ["spoon"],
    partOfSpeech: "n.",
    definitions: [{ en: "a tool used for eating", zh: "\u52fa\u5b50" }],
    examples: [{ sentence: "The baby uses a spoon to feed himself." }],
    inflections: {
      plural: "spoons"
    },
    rootAffix: { explanation: "spoon\u52fa\u5b50 = \u52fa\u5b50" },
    similarWords: [{"word": "noon", "reason": "\u5f62\u8fd1", "zh": "\u4e2d\u5348\uff1b\u6b63\u5348"}, {"word": "moon", "reason": "\u5f62\u8fd1", "zh": "\u6708\u4eae"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aspoon\u52fa\u5b50 = \u52fa\u5b50",
    phrases: [{ phrase: "spoon of", meaning: "一勺" }, { phrase: "soup spoon", meaning: "汤勺" }]
  },
  {
    id: "thirsty",
    word: "thirsty",
    syllables: ["thirsty"],
    partOfSpeech: "adj.",
    definitions: [{ en: "needing to drink", zh: "\u6e34\u7684" }],
    examples: [{ sentence: "Did you remember to bring water so you are not thirsty?" }],
    inflections: {
      comparative: "thirstier",
      superlative: "thirstiest"
    },
    phrases: [{ phrase: "feel thirsty", meaning: "感觉渴" }, { phrase: "thirsty for", meaning: "渴望" }],
    rootAffix: { explanation: "thirst渴 + -y = 口渴的" },
    similarWords: [{"word": "thirst", "reason": "\u62d3\u5c55", "zh": "口渴"}]
  },
  {
    id: "window",
    word: "window",
    syllables: ["window"],
    partOfSpeech: "n.",
    definitions: [{ en: "an opening in a building which lets in light", zh: "\u7a97\u6237" }],
    examples: [{ sentence: "I can see trees through the window." }],
    inflections: {
      plural: "windows"
    },
    rootAffix: { explanation: "wind\u98ce + ow\u773c = \u901a\u98ce\u7684\u773c\u2192\u7a97\u6237" },
    mnemonics: "wind(\u98ce) + ow(\u54e6) \u2192 \u98ce\u4ece\u7a97\u6237\u5439\u8fdb\u6765\"\u54e6\"",
    phrases: [{ phrase: "window shop", meaning: "逛街看橱窗" }, { phrase: "open the window", meaning: "开窗" }]
  },
  {
    id: "ago",
    word: "ago",
    syllables: ["ago"],
    partOfSpeech: "adv.",
    definitions: [{ en: "before now", zh: "\u4ee5\u524d" }],
    examples: [{ sentence: "This is an example of a painting from long ago." }],
    similarWords: [{"word": "age", "reason": "\u5f62\u8fd1", "zh": "\u5e74\u9f84"}],
    phrases: [{ phrase: "long ago", meaning: "很久以前" }, { phrase: "ten years ago", meaning: "十年前" }]
  },
  {
    id: "agree",
    word: "agree",
    syllables: ["agree"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think the same thing", zh: "\u540c\u610f" }],
    examples: [{ sentence: "They all agreed with the plan." }],
    inflections: {
      pastTense: "agreed",
      pastParticiple: "agreed",
      thirdPerson: "agrees",
      presentParticiple: "agreeing"
    },
    rootAffix: { explanation: "a-\u5230 + gree\u6109\u5feb = \u5230\u6109\u5feb\u72b6\u6001\u2192\u540c\u610f" },
    similarWords: [{"word": "free", "reason": "\u5f62\u8fd1", "zh": "\u514d\u8d39\u7684"}, {"word": "tree", "reason": "\u5f62\u8fd1", "zh": "\u6811"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aa-\u5230 + gree\u6109\u5feb = \u5230\u6109\u5feb\u72b6\u6001\u2192\u540c\u610f",
    phrases: [{ phrase: "agree with", meaning: "同意" }, { phrase: "agree to do", meaning: "同意做" }]
  },
  {
    id: "beach",
    word: "beach",
    syllables: ["beach"],
    partOfSpeech: "n.",
    definitions: [{ en: "an area next to water that is covered with sand", zh: "\u6d77\u6ee9" }],
    examples: [{ sentence: "We went to a quiet beach to relax." }],
    inflections: {
      plural: "beaches"
    },
    similarWords: [{"word": "reach", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe\uff1b\u4f38\u624b"}, {"word": "teach", "reason": "\u5f62\u8fd1", "zh": "\u6559\uff0c\u6559\u6388"}],
    phrases: [{ phrase: "at the beach", meaning: "在海滩" }, { phrase: "go to the beach", meaning: "去海滩" }],
    synonyms: [{"word": "seaside", "zh": "海边"}]
  },
  {
    id: "cap",
    word: "cap",
    syllables: ["cap"],
    partOfSpeech: "n.",
    definitions: [{ en: "a hat", zh: "\u5e3d\u5b50" }],
    examples: [{ sentence: "I remembered to bring my cap with me." }],
    inflections: {
      plural: "caps"
    },
    similarWords: [{"word": "map", "reason": "\u5f62\u8fd1", "zh": "\u5730\u56fe"}, {"word": "car", "reason": "\u5f62\u8fd1", "zh": "\u6c7d\u8f66"}, {"word": "camp", "reason": "\u5f62\u8fd1", "zh": "\u9732\u8425\uff1b\u8425\u5730"}],
    phrases: [{ phrase: "baseball cap", meaning: "棒球帽" }, { phrase: "cap in hand", meaning: "手里拿着帽子" }]
  },
  {
    id: "fat",
    word: "fat",
    syllables: ["fat"],
    partOfSpeech: "adj.",
    definitions: [{ en: "overweight; not thin", zh: "\u80d6\u7684" }],
    examples: [{ sentence: "We need to think about our fat cat\u2019s health." }],
    inflections: {
      comparative: "fater",
      superlative: "fatest"
    },
    similarWords: [{"word": "eat", "reason": "\u5f62\u8fd1", "zh": "\u5403"}, {"word": "far", "reason": "\u5f62\u8fd1", "zh": "\u8fdc\u7684\uff0c\u9065\u8fdc"}, {"word": "hat", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}],
    phrases: [{ phrase: "fat cat", meaning: "有钱人" }, { phrase: "fat chance", meaning: "不可能" }],
    antonyms: [{ word: "thin", zh: "瘦的" }]
  },
  {
    id: "sea",
    word: "sea",
    syllables: ["sea"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very large body of water", zh: "\u6d77" }],
    examples: [{ sentence: "Most of the water in the sea is very deep." }],
    inflections: {
      plural: "seas"
    },
    similarWords: [{"word": "see", "reason": "\u5f62\u8fd1", "zh": "\u770b\u89c1\uff0c\u770b\u5230"}, {"word": "tea", "reason": "\u5f62\u8fd1", "zh": "\u8336"}, {"word": "set", "reason": "\u5f62\u8fd1", "zh": "\u8bbe\u7f6e\uff1b\u4e00\u5957"}],
    phrases: [{ phrase: "by the sea", meaning: "在海边" }, { phrase: "at sea", meaning: "在海上" }]
  },
  {
    id: "throw",
    word: "throw",
    syllables: ["throw"],
    partOfSpeech: "v.",
    definitions: [{ en: "to push something out of your hands", zh: "\u6254" }],
    examples: [{ sentence: "It can be difficult for a small child to throw a ball." }],
    inflections: {
      pastTense: "threw",
      pastParticiple: "thrown",
      thirdPerson: "throws",
      presentParticiple: "throwing"
    },
    similarWords: [{"word": "borrow", "reason": "\u5f62\u8fd1", "zh": "\u501f\uff1b\u501f\u7528"}, {"word": "grow", "reason": "\u5f62\u8fd1", "zh": "\u751f\u957f\uff0c\u6210\u957f\uff0c\u79cd\u690d"}],
    phrases: [{ phrase: "throw away", meaning: "扔掉" }, { phrase: "throw at", meaning: "扔向" }],
    synonyms: [{"word": "toss", "zh": "扔"}],
    antonyms: [{ word: "catch", zh: "接住" }]
  },
  {
    id: "towel",
    word: "towel",
    syllables: ["towel"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used for drying things", zh: "\u6bdb\u5dfe" }],
    examples: [{ sentence: "The boy dries himself with a towel after swimming." }],
    inflections: {
      plural: "towels"
    },
    rootAffix: { explanation: "towel\u6bdb\u5dfe = \u6bdb\u5dfe" },
    similarWords: [{"word": "tower", "reason": "\u5f62\u8fd1", "zh": "\u5854\uff1b\u9ad8\u697c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1atowel\u6bdb\u5dfe = \u6bdb\u5dfe",
    phrases: [{ phrase: "towel rack", meaning: "毛巾架" }, { phrase: "paper towel", meaning: "纸巾" }]
  },
  {
    id: "trip",
    word: "trip",
    syllables: ["trip"],
    partOfSpeech: "n.",
    definitions: [{ en: "a visit to a place", zh: "\u65c5\u884c" }],
    examples: [{ sentence: "The man went on a trip to Europe with his friend." }],
    inflections: {
      plural: "trips"
    },
    phrases: [{ phrase: "school trip", meaning: "学校旅行" }, { phrase: "take a trip", meaning: "去旅行" }],
    similarWords: [{"word": "tripper", "reason": "\u62d3\u5c55", "zh": "旅行者"}]
  },
  {
    id: "vacation",
    word: "vacation",
    syllables: ["va", "ca", "tion"],
    partOfSpeech: "n.",
    definitions: [{ en: "time away from school or work, usually to travel or relax", zh: "\u5047\u671f" }],
    examples: [{ sentence: "The family needed gloves and hats on their vacation." }],
    inflections: {
      plural: "vacations"
    },
    similarWords: [{"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}, {"word": "position", "reason": "\u5f62\u8fd1", "zh": "\u4f4d\u7f6e\uff1b\u804c\u4f4d"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ava \u00b7 ca \u00b7 tion",
    phrases: [{ phrase: "on vacation", meaning: "在度假" }, { phrase: "summer vacation", meaning: "暑假" }],
    rootAffix: { explanation: "vac空 + -ation = 假期" },
    synonyms: [{"word": "holiday", "zh": "假期"}]
  },
  {
    id: "ball",
    word: "ball",
    syllables: ["ball"],
    partOfSpeech: "n.",
    definitions: [{ en: "a round object that you play with", zh: "\u7403" }],
    examples: [{ sentence: "Is this the correct way to hit a golf ball?" }],
    inflections: {
      plural: "balls"
    },
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}],
    phrases: [{ phrase: "ball game", meaning: "球类运动" }, { phrase: "play ball", meaning: "打球" }]
  },
  {
    id: "basket",
    word: "basket",
    syllables: ["basket"],
    partOfSpeech: "n.",
    definitions: [{ en: "a container, usually made of wood", zh: "\u7bee\u5b50" }],
    examples: [{ sentence: "Laura put the basket of fresh apples on the table." }],
    inflections: {
      plural: "baskets"
    },
    similarWords: [{"word": "pocket", "reason": "\u5f62\u8fd1", "zh": "\u53e3\u888b"}, {"word": "market", "reason": "\u5f62\u8fd1", "zh": "\u5e02\u573a"}],
    phrases: [{ phrase: "basket of", meaning: "一篮子" }, { phrase: "shopping basket", meaning: "购物篮" }]
  },
  {
    id: "boat",
    word: "boat",
    syllables: ["boat"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that people travel with on water", zh: "\u8239" }],
    examples: [{ sentence: "He enjoys taking his boat out on weekends." }],
    inflections: {
      plural: "boats"
    },
    similarWords: [{"word": "goat", "reason": "\u5f62\u8fd1", "zh": "\u5c71\u7f8a"}, {"word": "boot", "reason": "\u5f62\u8fd1", "zh": "\u9774\u5b50"}, {"word": "beat", "reason": "\u5f62\u8fd1", "zh": "\u6253\uff1b\u51fb\u8d25\uff1b\u8282\u62cd"}],
    phrases: [{ phrase: "by boat", meaning: "乘船" }, { phrase: "boat trip", meaning: "乘船游览" }]
  },
  {
    id: "holiday",
    word: "holiday",
    syllables: ["hol", "i", "day"],
    partOfSpeech: "n.",
    definitions: [{ en: "a special day", zh: "\u5047\u65e5" }],
    examples: [{ sentence: "Valentine\u2019s Day is a holiday when people give cards to their friends." }],
    inflections: {
      plural: "holidays"
    },
    rootAffix: { explanation: "holy\u795e\u5723 + day\u65e5\u5b50 = \u795e\u5723\u7684\u65e5\u5b50\u2192\u5047\u65e5" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aholy\u795e\u5723 + day\u65e5\u5b50 = \u795e\u5723\u7684\u65e5\u5b50\u2192\u5047\u65e5",
    phrases: [{ phrase: "on holiday", meaning: "在度假" }, { phrase: "public holiday", meaning: "公共假日" }],
    synonyms: [{"word": "vacation", "zh": "假期"}]
  },
  {
    id: "lamp",
    word: "lamp",
    syllables: ["lamp"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that makes light", zh: "\u706f" }],
    examples: [{ sentence: "Gina needed a lamp to study at night." }],
    inflections: {
      plural: "lamps"
    },
    similarWords: [{"word": "camp", "reason": "\u5f62\u8fd1", "zh": "\u9732\u8425\uff1b\u8425\u5730"}],
    phrases: [{ phrase: "desk lamp", meaning: "台灯" }, { phrase: "street lamp", meaning: "路灯" }]
  },
  {
    id: "last",
    word: "last",
    syllables: ["last"],
    partOfSpeech: "v.",
    definitions: [{ en: "to continue for a certain amount of time", zh: "\u6700\u540e\u7684" }],
    examples: [{ sentence: "The baseball game lasted all afternoon." }],
    inflections: {
      pastTense: "lasted",
      pastParticiple: "lasted",
      thirdPerson: "lasts",
      presentParticiple: "lasting"
    },
    similarWords: [{"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}, {"word": "fast", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff1b\u8fc5\u901f\u5730"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
    phrases: [{ phrase: "last night", meaning: "昨晚" }, { phrase: "at last", meaning: "终于" }, { phrase: "last name", meaning: "姓" }],
    antonyms: [{ word: "first", zh: "第一个的" }]
  },
  {
    id: "past",
    word: "past",
    syllables: ["past"],
    partOfSpeech: "n.",
    definitions: [{ en: "the time before now", zh: "\u8fc7\u53bb" }],
    examples: [{ sentence: "In the past, people with lots of money lived in castles." }],
    inflections: {
      plural: "pasts"
    },
    similarWords: [{"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}, {"word": "fast", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff1b\u8fc5\u901f\u5730"}],
    phrases: [{ phrase: "in the past", meaning: "在过去" }, { phrase: "half past", meaning: "...点半" }]
  },
  {
    id: "ship",
    word: "ship",
    syllables: ["ship"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large boat", zh: "\u8f6e\u8239" }],
    examples: [{ sentence: "We traveled by ship for our vacation." }],
    inflections: {
      plural: "ships"
    },
    similarWords: [{"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}],
    phrases: [{ phrase: "by ship", meaning: "乘船" }, { phrase: "ship out", meaning: "运出" }]
  },
  {
    id: "spend",
    word: "spend",
    syllables: ["spend"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use money on something or use time to do something", zh: "\u82b1\u8d39" }],
    examples: [{ sentence: "People need to spend money almost every day." }],
    inflections: {
      pastTense: "spent",
      pastParticiple: "spent",
      thirdPerson: "spends",
      presentParticiple: "spending"
    },
    similarWords: [{"word": "send", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u9001\uff0c\u5bc4\u51fa"}, {"word": "attend", "reason": "\u5f62\u8fd1", "zh": "\u53c2\u52a0\uff1b\u51fa\u5e2d"}, {"word": "friend", "reason": "\u5f62\u8fd1", "zh": "\u670b\u53cb"}],
    phrases: [{ phrase: "spend on", meaning: "在...上花费" }, { phrase: "spend time", meaning: "花时间" }]
  },
  {
    id: "west",
    word: "west",
    syllables: ["west"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction where the sun sets", zh: "\u897f" }],
    examples: [{ sentence: "Lisa will be traveling west during her vacation." }],
    similarWords: [{"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}, {"word": "best", "reason": "\u5f62\u8fd1", "zh": "\u6700\u597d\u7684"}, {"word": "rest", "reason": "\u5f62\u8fd1", "zh": "\u4f11\u606f\uff0c\u5269\u4f59"}],
    phrases: [{ phrase: "west of", meaning: "在...西边" }, { phrase: "go west", meaning: "向西走" }],
    antonyms: [{ word: "east", zh: "东方" }]
  },
  {
    id: "beef",
    word: "beef",
    syllables: ["beef"],
    partOfSpeech: "n.",
    definitions: [{ en: "meat from a cow", zh: "\u725b\u8089" }],
    examples: [{ sentence: "Eating too much beef might make you fat." }],
    phrases: [{ phrase: "beef noodles", meaning: "牛肉面" }, { phrase: "roast beef", meaning: "烤牛肉" }]
  },
  {
    id: "best",
    word: "best",
    syllables: ["best"],
    partOfSpeech: "adj.",
    definitions: [{ en: "better than the others", zh: "\u6700\u597d\u7684" }],
    examples: [{ sentence: "Alex is Jonah\u2019s best friend. They do everything together." }],
    inflections: {
      comparative: "bester",
      superlative: "bestest"
    },
    similarWords: [{"word": "west", "reason": "\u5f62\u8fd1", "zh": "\u897f"}, {"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}, {"word": "rest", "reason": "\u5f62\u8fd1", "zh": "\u4f11\u606f\uff0c\u5269\u4f59"}],
    phrases: [{ phrase: "best friend", meaning: "最好的朋友" }, { phrase: "do one's best", meaning: "尽力而为" }]
  },
  {
    id: "bread",
    word: "bread",
    syllables: ["bread"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of baked food", zh: "\u9762\u5305" }],
    examples: [{ sentence: "You can eat some bread if you are hungry." }],
    similarWords: [{"word": "spread", "reason": "\u5f62\u8fd1", "zh": "\u4f20\u64ad\uff1b\u5c55\u5f00"}, {"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}, {"word": "lead", "reason": "\u5f62\u8fd1", "zh": "\u9886\u5bfc\uff1b\u5e26\u9886\uff1b\u94c5"}],
    phrases: [{ phrase: "a piece of bread", meaning: "一片面包" }, { phrase: "bread and butter", meaning: "黄油面包" }]
  },
  {
    id: "free",
    word: "free",
    syllables: ["free"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not needing money to buy", zh: "\u514d\u8d39\u7684" }],
    examples: [{ sentence: "She agreed to give me a free kitten." }],
    inflections: {
      comparative: "freeer",
      superlative: "freeest"
    },
    similarWords: [{"word": "agree", "reason": "\u5f62\u8fd1", "zh": "\u540c\u610f"}, {"word": "tree", "reason": "\u5f62\u8fd1", "zh": "\u6811"}],
    phrases: [{ phrase: "free time", meaning: "空闲时间" }, { phrase: "for free", meaning: "免费" }],
    antonyms: [{ word: "busy", zh: "忙碌的" }]
  },
  {
    id: "hurry",
    word: "hurry",
    syllables: ["hurry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move quickly", zh: "\u8d76\u7d27" }],
    examples: [{ sentence: "He hurried to work because he got up late." }],
    inflections: {
      pastTense: "hurried",
      pastParticiple: "hurried",
      thirdPerson: "hurries",
      presentParticiple: "hurrying"
    },
    similarWords: [{"word": "worry", "reason": "\u5f62\u8fd1", "zh": "\u62c5\u5fc3\uff0c\u5fe7\u8651"}, {"word": "carry", "reason": "\u5f62\u8fd1", "zh": "\u643a\u5e26\uff0c\u642c\u8fd0"}],
    phrases: [{ phrase: "hurry up", meaning: "快点" }, { phrase: "in a hurry", meaning: "匆忙" }],
    synonyms: [{"word": "rush", "zh": "匆忙"}]
  },
  {
    id: "join",
    word: "join",
    syllables: ["join"],
    partOfSpeech: "v.",
    definitions: [{ en: "to come together", zh: "\u52a0\u5165" }],
    examples: [{ sentence: "She was joining her friends for a short vacation." }],
    inflections: {
      pastTense: "joined",
      pastParticiple: "joined",
      thirdPerson: "joins",
      presentParticiple: "joining"
    },
    phrases: [{ phrase: "join in", meaning: "参加" }, { phrase: "join us", meaning: "加入我们" }],
    synonyms: [{"word": "connect", "zh": "连接"}],
    similarWords: [{"word": "joiner", "reason": "\u62d3\u5c55", "zh": "加入者"}, {"word": "joint", "reason": "\u62d3\u5c55", "zh": "关节；接头"}]
  },
  {
    id: "middle",
    word: "middle",
    syllables: ["middle"],
    partOfSpeech: "n.",
    definitions: [{ en: "a point in the center", zh: "\u4e2d\u95f4" }],
    examples: [{ sentence: "The tall girl is standing in the middle of the group." }],
    inflections: {
      plural: "middles"
    },
    similarWords: [{"word": "handle", "reason": "\u5f62\u8fd1", "zh": "\u5904\u7406\uff1b\u628a\u624b"}],
    phrases: [{ phrase: "middle school", meaning: "中学" }, { phrase: "in the middle", meaning: "在中间" }]
  },
  {
    id: "pair",
    word: "pair",
    syllables: ["pair"],
    partOfSpeech: "n.",
    definitions: [{ en: "two things that match", zh: "\u53cc" }],
    examples: [{ sentence: "I was wearing my new pair of shoes at school." }],
    inflections: {
      plural: "pairs"
    },
    similarWords: [{"word": "chair", "reason": "\u5f62\u8fd1", "zh": "\u6905\u5b50"}, {"word": "fair", "reason": "\u5f62\u8fd1", "zh": "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a"}, {"word": "air", "reason": "\u5f62\u8fd1", "zh": "\u7a7a\u6c14"}],
    phrases: [{ phrase: "a pair of", meaning: "一双" }, { phrase: "in pairs", meaning: "成对地" }],
    synonyms: [{"word": "couple", "zh": "一对"}]
  },
  {
    id: "pick",
    word: "pick",
    syllables: ["pick"],
    partOfSpeech: "v.",
    definitions: [{ en: "to choose", zh: "\u6311\u9009" }],
    examples: [{ sentence: "Annie was picking fresh flowers for her mom." }],
    inflections: {
      pastTense: "picked",
      pastParticiple: "picked",
      thirdPerson: "picks",
      presentParticiple: "picking"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}],
    phrases: [{ phrase: "pick up", meaning: "捡起" }, { phrase: "pick out", meaning: "挑出" }]
  },
  {
    id: "store",
    word: "store",
    syllables: ["store"],
    partOfSpeech: "n.",
    definitions: [{ en: "a shop", zh: "\u5546\u5e97" }],
    examples: [{ sentence: "Liz spent a lot of money at the store." }],
    inflections: {
      plural: "stores"
    },
    similarWords: [{"word": "sore", "reason": "\u5f62\u8fd1", "zh": "\u75bc\u75db\u7684\uff1b\u9178\u75db\u7684"}, {"word": "score", "reason": "\u5f62\u8fd1", "zh": "\u5f97\u5206\uff1b\u5206\u6570"}, {"word": "story", "reason": "\u5f62\u8fd1", "zh": "\u6545\u4e8b\uff0c\u4f20\u8bf4"}],
    phrases: [{ phrase: "book store", meaning: "书店" }, { phrase: "department store", meaning: "百货商店" }]
  },
  {
    id: "bag",
    word: "bag",
    syllables: ["bag"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that people can put things in", zh: "\u5305" }],
    examples: [{ sentence: "They filled the bag with a lot of good food." }],
    inflections: {
      plural: "bags"
    },
    similarWords: [{"word": "big", "reason": "\u5f62\u8fd1", "zh": "\u5927\u7684\uff0c\u5de8\u5927\u7684"}, {"word": "bad", "reason": "\u5f62\u8fd1", "zh": "\u574f\u7684\uff0c\u4e0d\u597d\u7684"}, {"word": "bat", "reason": "\u5f62\u8fd1", "zh": "\u8759\u8760\uff1b\u7403\u62cd"}],
    phrases: [{ phrase: "school bag", meaning: "书包" }, { phrase: "bag of", meaning: "一袋" }]
  },
  {
    id: "dear",
    word: "dear",
    syllables: ["dear"],
    partOfSpeech: "adj.",
    definitions: [{ en: "a word used to begin a letter or diary", zh: "\u4eb2\u7231\u7684" }],
    examples: [{ sentence: "\u201cDear Diary, I like the new pair of pants I got.\u201d" }],
    inflections: {
      comparative: "dearer",
      superlative: "dearest"
    },
    similarWords: [{"word": "hear", "reason": "\u5f62\u8fd1", "zh": "\u542c\u5230\uff0c\u542c\u89c1"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}, {"word": "year", "reason": "\u5f62\u8fd1", "zh": "\u5e74"}],
    phrases: [{ phrase: "dear mom", meaning: "亲爱的妈妈" }, { phrase: "oh dear", meaning: "哦天哪" }]
  },
  {
    id: "live",
    word: "live",
    syllables: ["live"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have a home in a certain place; to be alive", zh: "\u4f4f" }],
    examples: [{ sentence: "The family lives in a nice house by the sea." }],
    inflections: {
      pastTense: "lived",
      pastParticiple: "lived",
      thirdPerson: "lives",
      presentParticiple: "living"
    },
    similarWords: [{"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}, {"word": "give", "reason": "\u5f62\u8fd1", "zh": "\u7ed9\uff0c\u7ed9\u4e88"}, {"word": "like", "reason": "\u5f62\u8fd1", "zh": "\u559c\u6b22\uff0c\u50cf"}],
    phrases: [{ phrase: "live in", meaning: "住在" }, { phrase: "live on", meaning: "以...为生" }]
  },
  {
    id: "low",
    word: "low",
    syllables: ["low"],
    partOfSpeech: "adj.",
    definitions: [{ en: "near to the ground", zh: "\u4f4e\u7684" }],
    examples: [{ sentence: "He is sitting in front of the low bookshelf." }],
    inflections: {
      comparative: "lower",
      superlative: "lowest"
    },
    similarWords: [{"word": "flow", "reason": "\u5f62\u8fd1", "zh": "\u6d41\u52a8\uff1b\u6d41\u91cf"}, {"word": "blow", "reason": "\u5f62\u8fd1", "zh": "\u5439\uff1b\u6253\u51fb"}, {"word": "slow", "reason": "\u5f62\u8fd1", "zh": "\u6162\u7684"}],
    phrases: [{ phrase: "low price", meaning: "低价" }, { phrase: "low voice", meaning: "低声" }],
    antonyms: [{ word: "high", zh: "高的" }]
  },
  {
    id: "month",
    word: "month",
    syllables: ["month"],
    partOfSpeech: "n.",
    definitions: [{ en: "one of the twelve periods of time in a year", zh: "\u6708" }],
    examples: [{ sentence: "We are going on a vacation to the beach this month." }],
    inflections: {
      plural: "months"
    },
    phrases: [{ phrase: "last month", meaning: "上个月" }, { phrase: "next month", meaning: "下个月" }],
    similarWords: [{"word": "monthly", "reason": "\u62d3\u5c55", "zh": "每月一次"}]
  },
  {
    id: "name",
    word: "name",
    syllables: ["name"],
    partOfSpeech: "n.",
    definitions: [{ en: "the word(s) by which a person or thing is known", zh: "\u540d\u5b57" }],
    examples: [{ sentence: "Our dog\u2019s name is Willard." }],
    inflections: {
      plural: "names"
    },
    similarWords: [{"word": "same", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u540c\u7684\uff0c\u4e00\u6837\u7684"}],
    phrases: [{ phrase: "first name", meaning: "名" }, { phrase: "last name", meaning: "姓" }]
  },
  {
    id: "phone",
    word: "phone",
    syllables: ["phone"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used to talk to people who are far away", zh: "\u7535\u8bdd" }],
    examples: [{ sentence: "She remembered to call her mom on the phone." }],
    inflections: {
      plural: "phones"
    },
    similarWords: [{"word": "stone", "reason": "\u5f62\u8fd1", "zh": "\u77f3\u5934\uff1b\u77f3\u5757"}, {"word": "alone", "reason": "\u5f62\u8fd1", "zh": "\u72ec\u81ea\u7684\uff0c\u5355\u72ec\u7684"}],
    phrases: [{ phrase: "phone call", meaning: "电话" }, { phrase: "phone number", meaning: "电话号码" }]
  },
  {
    id: "rice",
    word: "rice",
    syllables: ["rice"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of small white or brown grain", zh: "\u7c73\u996d" }],
    examples: [{ sentence: "I can smell the fresh, cooked rice from the other room." }],
    similarWords: [{"word": "price", "reason": "\u5f62\u8fd1", "zh": "\u4ef7\u683c\uff1b\u4ef7\u94b1"}, {"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "ice", "reason": "\u5f62\u8fd1", "zh": "\u51b0\uff1b\u51b0\u6dc7\u6dcb"}],
    phrases: [{ phrase: "rice field", meaning: "稻田" }, { phrase: "fried rice", meaning: "炒饭" }]
  },
  {
    id: "rich",
    word: "rich",
    syllables: ["rich"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a lot of money", zh: "\u5bcc\u6709\u7684" }],
    examples: [{ sentence: "The rich man took a plane to New York." }],
    inflections: {
      comparative: "richer",
      superlative: "richest"
    },
    similarWords: [{"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}],
    phrases: [{ phrase: "rich in", meaning: "富含" }, { phrase: "rich people", meaning: "富人" }],
    antonyms: [{ word: "poor", zh: "贫穷的" }]
  },
  {
    id: "size",
    word: "size",
    syllables: ["size"],
    partOfSpeech: "n.",
    definitions: [{ en: "how big or small a person or thing is", zh: "\u5c3a\u5bf8" }],
    examples: [{ sentence: "The man sells hats in many different sizes." }],
    inflections: {
      plural: "sizes"
    },
    similarWords: [{"word": "prize", "reason": "\u5f62\u8fd1", "zh": "\u5956\uff1b\u5956\u54c1"}, {"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}, {"word": "site", "reason": "\u5f62\u8fd1", "zh": "\u5730\u70b9\uff1b\u7f51\u7ad9"}],
    phrases: [{ phrase: "size up", meaning: "估量" }, { phrase: "in size", meaning: "在大小上" }]
  },
  {
    id: "birth",
    word: "birth",
    syllables: ["birth"],
    partOfSpeech: "n.",
    definitions: [{ en: "the moment a baby is born", zh: "\u51fa\u751f" }],
    examples: [{ sentence: "He was holding his baby after its birth." }],
    inflections: {
      plural: "births"
    },
    similarWords: [{"word": "worth", "reason": "\u5f62\u8fd1", "zh": "\u503c\u5f97\u7684\uff1b\u4ef7\u503c"}, {"word": "north", "reason": "\u5f62\u8fd1", "zh": "\u5317"}, {"word": "earth", "reason": "\u5f62\u8fd1", "zh": "\u5730\u7403"}],
    phrases: [{ phrase: "birth day", meaning: "生日" }, { phrase: "give birth to", meaning: "生" }]
  },
  {
    id: "clothes",
    word: "clothes",
    syllables: ["clothes"],
    partOfSpeech: "n.",
    definitions: [{ en: "things people wear", zh: "\u8863\u670d" }],
    examples: [{ sentence: "She is picking clothes for her trip to the beach." }],
    inflections: {
      plural: "clotheses"
    },
    phrases: [{ phrase: "put on clothes", meaning: "穿衣服" }, { phrase: "take off clothes", meaning: "脱衣服" }],
    synonyms: [{"word": "clothing", "zh": "衣服"}]
  },
  {
    id: "cost",
    word: "cost",
    syllables: ["cost"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have an amount of money as a price", zh: "\u82b1\u8d39" }],
    examples: [{ sentence: "The new car costs a lot of money." }],
    inflections: {
      pastTense: "cost",
      pastParticiple: "cost",
      thirdPerson: "costs",
      presentParticiple: "costing"
    },
    similarWords: [{"word": "host", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u4eba\uff1b\u4e3b\u6301"}, {"word": "post", "reason": "\u5f62\u8fd1", "zh": "\u90ae\u5bc4"}],
    phrases: [{ phrase: "cost of", meaning: "...的成本" }, { phrase: "at all costs", meaning: "不惜一切代价" }]
  },
  {
    id: "hide",
    word: "hide",
    syllables: ["hide"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put something in a place where others cannot see it", zh: "\u8eb2\u85cf" }],
    examples: [{ sentence: "Mark was hiding under the bed with his mom\u2019s computer." }],
    inflections: {
      pastTense: "hid",
      pastParticiple: "hidden",
      thirdPerson: "hides",
      presentParticiple: "hiding"
    },
    similarWords: [{"word": "guide", "reason": "\u5f62\u8fd1", "zh": "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc"}, {"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}, {"word": "ride", "reason": "\u5f62\u8fd1", "zh": "\u9a91\uff0c\u4e58\u5750"}],
    phrases: [{ phrase: "hide from", meaning: "躲避" }, { phrase: "hide and seek", meaning: "捉迷藏" }]
  },
  {
    id: "pet",
    word: "pet",
    syllables: ["pet"],
    partOfSpeech: "n.",
    definitions: [{ en: "an animal cared for by a person", zh: "\u5ba0\u7269" }],
    examples: [{ sentence: "She thinks Rover is the best pet in the world." }],
    inflections: {
      plural: "pets"
    },
    similarWords: [{"word": "put", "reason": "\u5f62\u8fd1", "zh": "\u653e\uff0c\u653e\u7f6e"}, {"word": "let", "reason": "\u5f62\u8fd1", "zh": "\u8ba9\uff0c\u5141\u8bb8"}, {"word": "wet", "reason": "\u5f62\u8fd1", "zh": "\u6e7f\u7684"}],
    phrases: [{ phrase: "pet dog", meaning: "宠物狗" }, { phrase: "pet store", meaning: "宠物店" }]
  },
  {
    id: "puppy",
    word: "puppy",
    syllables: ["puppy"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very young dog", zh: "\u5c0f\u72d7" }],
    examples: [{ sentence: "Sleep is important for the health of a puppy." }],
    inflections: {
      plural: "puppies"
    },
    phrases: [{ phrase: "puppy love", meaning: "早恋" }, { phrase: "puppy dog", meaning: "小狗" }]
  },
  {
    id: "soft",
    word: "soft",
    syllables: ["soft"],
    partOfSpeech: "adj.",
    definitions: [{ en: "smooth and nice to touch", zh: "\u8f6f\u7684" }],
    examples: [{ sentence: "She was resting on a soft pillow." }],
    inflections: {
      comparative: "softer",
      superlative: "softest"
    },
    similarWords: [{"word": "softly", "reason": "\u62d3\u5c55", "zh": "柔软地；温柔地"}],
    phrases: [{ phrase: "soft drink", meaning: "软饮料" }, { phrase: "soft and hard", meaning: "软和硬" }],
    antonyms: [{ word: "hard", zh: "坚硬的" }]
  },
  {
    id: "touch",
    word: "touch",
    syllables: ["touch"],
    partOfSpeech: "v.",
    definitions: [{ en: "to feel by putting fingers on something", zh: "\u89e6\u6478" }],
    examples: [{ sentence: "Touch the phone to make a call." }],
    inflections: {
      pastTense: "touched",
      pastParticiple: "touched",
      thirdPerson: "touches",
      presentParticiple: "touching"
    },
    similarWords: [{"word": "tough", "reason": "\u5f62\u8fd1", "zh": "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684"}],
    phrases: [{ phrase: "keep in touch", meaning: "保持联系" }, { phrase: "touch down", meaning: "降落" }]
  },
  {
    id: "weigh",
    word: "weigh",
    syllables: ["weigh"],
    partOfSpeech: "v.",
    definitions: [{ en: "to find out how heavy a person or thing is", zh: "\u79f0\u91cd" }],
    examples: [{ sentence: "She always weighs herself in the morning." }],
    inflections: {
      pastTense: "weighed",
      pastParticiple: "weighed",
      thirdPerson: "weighs",
      presentParticiple: "weighing"
    },
    similarWords: [{"word": "high", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684\uff0c\u9ad8\u7684"}],
    phrases: [{ phrase: "weigh in", meaning: "称重" }, { phrase: "weigh up", meaning: "权衡" }]
  },
  {
    id: "wish",
    word: "wish",
    syllables: ["wish"],
    partOfSpeech: "n.",
    definitions: [{ en: "a hope for something", zh: "\u5e0c\u671b" }],
    examples: [{ sentence: "He remembered to make a wish for his birthday." }],
    inflections: {
      plural: "wishes"
    },
    similarWords: [{"word": "dish", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50\uff0c\u83dc\u80b4"}, {"word": "fish", "reason": "\u5f62\u8fd1", "zh": "\u9c7c\uff1b\u9493\u9c7c"}, {"word": "wash", "reason": "\u5f62\u8fd1", "zh": "\u6d17\uff1b\u6d17\u6da4"}],
    phrases: [{ phrase: "wish for", meaning: "希望" }, { phrase: "best wishes", meaning: "最美好的祝愿" }]
  },
  {
    id: "age",
    word: "age",
    syllables: ["age"],
    partOfSpeech: "n.",
    definitions: [{ en: "the amount of time being alive", zh: "\u5e74\u9f84" }],
    examples: [{ sentence: "They do a lot of activities for people of their age." }],
    inflections: {
      plural: "ages"
    },
    similarWords: [{"word": "page", "reason": "\u5f62\u8fd1", "zh": "\u9875\uff0c\u9875\u9762"}, {"word": "ago", "reason": "\u5f62\u8fd1", "zh": "\u4ee5\u524d"}, {"word": "image", "reason": "\u62d3\u5c55", "zh": "\u56fe\u50cf\uff1b\u5f62\u8c61"}],
    phrases: [{ phrase: "at the age of", meaning: "在...岁时" }, { phrase: "old age", meaning: "老年" }]
  },
  {
    id: "bath",
    word: "bath",
    syllables: ["bath"],
    partOfSpeech: "n.",
    definitions: [{ en: "the act of cleaning the body", zh: "\u6d17\u6fa1" }],
    examples: [{ sentence: "The dirty dog does not want to take a bath." }],
    inflections: {
      plural: "baths"
    },
    rootAffix: { explanation: "bath\u6d17 = \u6d17\u6fa1" },
    similarWords: [{"word": "path", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u8def\uff1b\u8def\u5f84"}, {"word": "math", "reason": "\u5f62\u8fd1", "zh": "\u6570\u5b66"}, {"word": "bat", "reason": "\u5f62\u8fd1", "zh": "\u8759\u8760\uff1b\u7403\u62cd"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abath\u6d17 = \u6d17\u6fa1",
    phrases: [{ phrase: "take a bath", meaning: "洗澡" }, { phrase: "bath room", meaning: "浴室" }]
  },
  {
    id: "bright",
    word: "bright",
    syllables: ["bright"],
    partOfSpeech: "adj.",
    definitions: [{ en: "clever or smart", zh: "\u660e\u4eae\u7684" }],
    examples: [{ sentence: "Everyone agrees that Mike is a bright person." }],
    inflections: {
      comparative: "more bright",
      superlative: "most bright"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "tonight", "reason": "\u5f62\u8fd1", "zh": "\u4eca\u665a"}, {"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}],
    phrases: [{ phrase: "bright future", meaning: "光明的未来" }, { phrase: "bright red", meaning: "鲜红色" }],
    antonyms: [{ word: "dark", zh: "黑暗的" }]
  },
  {
    id: "brush",
    word: "brush",
    syllables: ["brush"],
    partOfSpeech: "v.",
    definitions: [{ en: "to clean or make smooth with a brush", zh: "\u5237\u5b50" }],
    examples: [{ sentence: "The girl was brushing her hair before going to bed." }],
    inflections: {
      pastTense: "brushed",
      pastParticiple: "brushed",
      thirdPerson: "brushes",
      presentParticiple: "brushing"
    },
    similarWords: [{"word": "push", "reason": "\u5f62\u8fd1", "zh": "\u63a8\uff0c\u63a8\u52a8"}],
    phrases: [{ phrase: "brush teeth", meaning: "刷牙" }, { phrase: "brush off", meaning: "刷掉" }]
  },
  {
    id: "lose",
    word: "lose",
    syllables: ["lose"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to be able to find something; not to be the best in a game", zh: "\u4e22\u5931" }],
    examples: [{ sentence: "Min lost her ring yesterday, but she found it today." }],
    inflections: {
      pastTense: "lost",
      pastParticiple: "lost",
      thirdPerson: "loses",
      presentParticiple: "losing"
    },
    similarWords: [{"word": "close", "reason": "\u5f62\u8fd1", "zh": "\u5173"}, {"word": "love", "reason": "\u5f62\u8fd1", "zh": "\u7231\uff0c\u559c\u6b22"}],
    phrases: [{ phrase: "lose to", meaning: "输给" }, { phrase: "lose weight", meaning: "减肥" }, { phrase: "lose one's way", meaning: "迷路" }],
    antonyms: [{ word: "win", zh: "赢" }]
  },
  {
    id: "second",
    word: "second",
    syllables: ["second"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very short period of time; 1/60 of a minute", zh: "\u7b2c\u4e8c" }],
    examples: [{ sentence: "You only have a few seconds to finish." }],
    inflections: {
      plural: "seconds"
    },
    similarWords: [{"word": "respond", "reason": "\u5f62\u8fd1", "zh": "\u56de\u7b54\uff1b\u56de\u5e94"}],
    phrases: [{ phrase: "second floor", meaning: "二楼" }, { phrase: "second hand", meaning: "二手的" }]
  },
  {
    id: "tell",
    word: "tell",
    syllables: ["tell"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say or write something to someone", zh: "\u544a\u8bc9" }],
    examples: [{ sentence: "The doctor was telling the man about his heart." }],
    inflections: {
      pastTense: "told",
      pastParticiple: "told",
      thirdPerson: "tells",
      presentParticiple: "telling"
    },
    synonyms: [{"word": "inform", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}, {"word": "narrate", "zh": "叙述；讲述"}, {"word": "reveal", "zh": "揭示；透露"}],
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}],
    phrases: [{ phrase: "tell a story", meaning: "讲故事" }, { phrase: "tell the truth", meaning: "说实话" }]
  },
  {
    id: "test",
    word: "test",
    syllables: ["test"],
    partOfSpeech: "n.",
    definitions: [{ en: "an exam", zh: "\u6d4b\u8bd5" }],
    examples: [{ sentence: "Write your name at the top of your test paper." }],
    inflections: {
      plural: "tests"
    },
    similarWords: [{"word": "west", "reason": "\u5f62\u8fd1", "zh": "\u897f"}, {"word": "best", "reason": "\u5f62\u8fd1", "zh": "\u6700\u597d\u7684"}, {"word": "rest", "reason": "\u5f62\u8fd1", "zh": "\u4f11\u606f\uff0c\u5269\u4f59"}],
    phrases: [{ phrase: "test paper", meaning: "试卷" }, { phrase: "pass the test", meaning: "通过考试" }]
  },
  {
    id: "thank",
    word: "thank",
    syllables: ["thank"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell someone you are grateful for something", zh: "\u8c22\u8c22" }],
    examples: [{ sentence: "Nina thanked her brother for the gift." }],
    inflections: {
      pastTense: "thanked",
      pastParticiple: "thanked",
      thirdPerson: "thanks",
      presentParticiple: "thanking"
    },
    similarWords: [{"word": "think", "reason": "\u5f62\u8fd1", "zh": "\u60f3\uff0c\u601d\u8003"}],
    phrases: [{ phrase: "thank you", meaning: "谢谢你" }, { phrase: "thanks to", meaning: "多亏" }]
  },
  {
    id: "ugly",
    word: "ugly",
    syllables: ["ugly"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not pretty", zh: "\u4e11\u964b\u7684" }],
    examples: [{ sentence: "We saw some ugly birds at the zoo." }],
    inflections: {
      comparative: "uglier",
      superlative: "ugliest"
    },
    phrases: [{ phrase: "ugly duckling", meaning: "丑小鸭" }, { phrase: "look ugly", meaning: "看起来丑" }],
    synonyms: [{"word": "hideous", "zh": "丑陋的"}],
    antonyms: [{ word: "beautiful", zh: "美丽的" }]
  },
  {
    id: "calendar",
    word: "calendar",
    syllables: ["calendar"],
    partOfSpeech: "n.",
    definitions: [{ en: "a table that shows the days, weeks, and months of a year", zh: "\u65e5\u5386" }],
    examples: [{ sentence: "I marked the day of the test on the calendar." }],
    inflections: {
      plural: "calendars"
    },
    phrases: [{ phrase: "calendar year", meaning: "日历年" }, { phrase: "wall calendar", meaning: "挂历" }]
  },
  {
    id: "dance",
    word: "dance",
    syllables: ["dance"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move the body along with music", zh: "\u8df3\u821e" }],
    examples: [{ sentence: "They were wearing nice clothes and dancing." }],
    inflections: {
      pastTense: "danced",
      pastParticiple: "danced",
      thirdPerson: "dances",
      presentParticiple: "dancing"
    },
    similarWords: [{"word": "chance", "reason": "\u5f62\u8fd1", "zh": "\u673a\u4f1a\uff1b\u53ef\u80fd\u6027"}, {"word": "prince", "reason": "\u5f62\u8fd1", "zh": "\u738b\u5b50\uff1b\u4eb2\u738b"}],
    phrases: [{ phrase: "dance with", meaning: "和...跳舞" }, { phrase: "dance party", meaning: "舞会" }]
  },
  {
    id: "date",
    word: "date",
    syllables: ["date"],
    partOfSpeech: "n.",
    definitions: [{ en: "a specific day of the month or year", zh: "\u65e5\u671f" }],
    examples: [{ sentence: "The date of the trip is the 28th." }],
    inflections: {
      plural: "dates"
    },
    similarWords: [{"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "hate", "reason": "\u5f62\u8fd1", "zh": "\u6068\uff0c\u8ba8\u538c"}, {"word": "gate", "reason": "\u5f62\u8fd1", "zh": "\u5927\u95e8"}],
    phrases: [{ phrase: "date of birth", meaning: "出生日期" }, { phrase: "out of date", meaning: "过时" }]
  },
  {
    id: "idea",
    word: "idea",
    syllables: ["idea"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thought or plan", zh: "\u4e3b\u610f" }],
    examples: [{ sentence: "Taking notes was the best idea Molly had." }],
    inflections: {
      plural: "ideas"
    },
    rootAffix: { explanation: "ide\u770b = \u770b\u5230\u7684\u4e1c\u897f\u2192\u60f3\u6cd5" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aide\u770b = \u770b\u5230\u7684\u4e1c\u897f\u2192\u60f3\u6cd5",
    phrases: [{ phrase: "good idea", meaning: "好主意" }, { phrase: "have no idea", meaning: "不知道" }],
    synonyms: [{"word": "thought", "zh": "想法"}]
  },
  {
    id: "luck",
    word: "luck",
    syllables: ["luck"],
    partOfSpeech: "n.",
    definitions: [{ en: "good fortune", zh: "\u8fd0\u6c14" }],
    examples: [{ sentence: "Winning a free pair of shoes was good luck." }],
    similarWords: [{"word": "lucky", "reason": "\u62d3\u5c55", "zh": "幸运的"}, {"word": "unlucky", "reason": "\u62d3\u5c55", "zh": "不幸的"}],
    phrases: [{ phrase: "good luck", meaning: "好运" }, { phrase: "bad luck", meaning: "倒霉" }]
  },
  {
    id: "paper",
    word: "paper",
    syllables: ["paper"],
    partOfSpeech: "n.",
    definitions: [{ en: "something flat used to write on", zh: "\u7eb8" }],
    examples: [{ sentence: "Ava was writing her answers on the paper." }],
    inflections: {
      plural: "papers"
    },
    similarWords: [{"word": "proper", "reason": "\u5f62\u8fd1", "zh": "\u9002\u5f53\u7684\uff1b\u6b63\u786e\u7684"}],
    phrases: [{ phrase: "paper bag", meaning: "纸袋" }, { phrase: "on paper", meaning: "理论上" }]
  },
  {
    id: "post",
    word: "post",
    syllables: ["post"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put up a sign or other writing", zh: "\u90ae\u5bc4" }],
    examples: [{ sentence: "Last month, Margo posted a sign asking for help." }],
    inflections: {
      pastTense: "posted",
      pastParticiple: "posted",
      thirdPerson: "posts",
      presentParticiple: "posting"
    },
    similarWords: [{"word": "cost", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}, {"word": "host", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u4eba\uff1b\u4e3b\u6301"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
    phrases: [{ phrase: "post office", meaning: "邮局" }, { phrase: "post card", meaning: "明信片" }]
  },
  {
    id: "receive",
    word: "receive",
    syllables: ["re", "ceive"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get", zh: "\u6536\u5230" }],
    examples: [{ sentence: "The girl was receiving a shot from the doctor." }],
    inflections: {
      pastTense: "received",
      pastParticiple: "received",
      thirdPerson: "receives",
      presentParticiple: "receiving"
    },
    similarWords: [{"word": "arrive", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe"}, {"word": "survive", "reason": "\u5f62\u8fd1", "zh": "\u5e78\u5b58\uff1b\u5b58\u6d3b"}, {"word": "native", "reason": "\u5f62\u8fd1", "zh": "\u672c\u5730\u7684\uff1b\u571f\u751f\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1are \u00b7 ceive",
    phrases: [{ phrase: "receive a letter", meaning: "收到信" }, { phrase: "receive from", meaning: "从...收到" }],
    antonyms: [{ word: "give", zh: "给" }]
  },
  {
    id: "toy",
    word: "toy",
    syllables: ["toy"],
    partOfSpeech: "n.",
    definitions: [{ en: "something a child plays with", zh: "\u73a9\u5177" }],
    examples: [{ sentence: "Ray was playing with his toy two hours ago." }],
    inflections: {
      plural: "toys"
    },
    similarWords: [{"word": "boy", "reason": "\u5f62\u8fd1", "zh": "\u7537\u5b69"}, {"word": "try", "reason": "\u5f62\u8fd1", "zh": "\u5c1d\u8bd5\uff0c\u52aa\u529b"}, {"word": "top", "reason": "\u5f62\u8fd1", "zh": "\u9876\u90e8"}],
    phrases: [{ phrase: "toy car", meaning: "玩具车" }, { phrase: "toy store", meaning: "玩具店" }]
  },
  {
    id: "week",
    word: "week",
    syllables: ["week"],
    partOfSpeech: "n.",
    definitions: [{ en: "a period of time lasting seven days", zh: "\u5468" }],
    examples: [{ sentence: "My summer vacation begins next week." }],
    inflections: {
      plural: "weeks"
    },
    similarWords: [{"word": "weak", "reason": "\u5f62\u8fd1", "zh": "\u865a\u5f31\u7684\uff0c\u5f31\u7684"}],
    phrases: [{ phrase: "last week", meaning: "上周" }, { phrase: "next week", meaning: "下周" }]
  },
  {
    id: "clear",
    word: "clear",
    syllables: ["clear"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make clean by removing items", zh: "\u6e05\u695a\u7684" }],
    examples: [{ sentence: "She clears the table after lunch." }],
    inflections: {
      pastTense: "cleared",
      pastParticiple: "cleared",
      thirdPerson: "clears",
      presentParticiple: "clearing"
    },
    similarWords: [{"word": "hear", "reason": "\u5f62\u8fd1", "zh": "\u542c\u5230\uff0c\u542c\u89c1"}, {"word": "appear", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u73b0\uff1b\u663e\u5f97"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}],
    phrases: [{ phrase: "clear up", meaning: "放晴" }, { phrase: "clear the table", meaning: "清理桌子" }]
  },
  {
    id: "continue",
    word: "continue",
    syllables: ["con", "tin", "ue"],
    partOfSpeech: "v.",
    definitions: [{ en: "to keep doing something", zh: "\u7ee7\u7eed" }],
    examples: [{ sentence: "My aunt continues to work on weekends." }],
    inflections: {
      pastTense: "continued",
      pastParticiple: "continued",
      thirdPerson: "continues",
      presentParticiple: "continuing"
    },
    rootAffix: { explanation: "con-\u4e00\u8d77 + tin\u62ff + -ue = \u4e00\u8d77\u62ff\u7740\u2192\u7ee7\u7eed" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acon-\u4e00\u8d77 + tin\u62ff + -ue = \u4e00\u8d77\u62ff\u7740\u2192\u7ee7\u7eed",
    phrases: [{ phrase: "continue to do", meaning: "继续做" }, { phrase: "continue doing", meaning: "继续做" }]
  },
  {
    id: "fan",
    word: "fan",
    syllables: ["fan"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone interested in a famous thing or person", zh: "\u7c89\u4e1d" }],
    examples: [{ sentence: "They are all fans of the best team in the game." }],
    inflections: {
      plural: "fans"
    },
    similarWords: [{"word": "man", "reason": "\u5f62\u8fd1", "zh": "\u7537\u4eba\uff0c\u4eba\u7c7b"}, {"word": "far", "reason": "\u5f62\u8fd1", "zh": "\u8fdc\u7684\uff0c\u9065\u8fdc"}, {"word": "fat", "reason": "\u5f62\u8fd1", "zh": "\u80d6\u7684"}],
    phrases: [{ phrase: "fan of", meaning: "...的粉丝" }, { phrase: "ceiling fan", meaning: "吊扇" }]
  },
  {
    id: "favorite",
    word: "favorite",
    syllables: ["fa", "vor", "ite"],
    partOfSpeech: "adj.",
    definitions: [{ en: "most liked", zh: "\u6700\u559c\u6b22\u7684" }],
    examples: [{ sentence: "She was wearing her favorite clothes at the party." }],
    inflections: {
      comparative: "more favorite",
      superlative: "most favorite"
    },
    rootAffix: { explanation: "favor\u559c\u7231 + -ite = \u6700\u559c\u7231\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afavor\u559c\u7231 + -ite = \u6700\u559c\u7231\u7684",
    phrases: [{ phrase: "favorite food", meaning: "最喜欢的食物" }, { phrase: "favorite color", meaning: "最喜欢的颜色" }],
    similarWords: [{"word": "favor", "reason": "\u62d3\u5c55", "zh": "偏爱/帮助"}]
  },
  {
    id: "floor",
    word: "floor",
    syllables: ["floor"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of the room people walk on", zh: "\u5730\u677f" }],
    examples: [{ sentence: "The puppy was resting on the floor." }],
    inflections: {
      plural: "floors"
    },
    similarWords: [{"word": "door", "reason": "\u5f62\u8fd1", "zh": "\u95e8"}, {"word": "poor", "reason": "\u5f62\u8fd1", "zh": "\u8d2b\u7a77\u7684\uff0c\u53ef\u601c\u7684"}, {"word": "flood", "reason": "\u5f62\u8fd1", "zh": "\u6d2a\u6c34\uff1b\u6df9\u6ca1"}],
    phrases: [{ phrase: "floor plan", meaning: "楼层平面图" }, { phrase: "first floor", meaning: "一楼" }]
  },
  {
    id: "polite",
    word: "polite",
    syllables: ["polite"],
    partOfSpeech: "adj.",
    definitions: [{ en: "nice to other people", zh: "\u793c\u8c8c\u7684" }],
    examples: [{ sentence: "The polite girl thanked her mother for the food." }],
    inflections: {
      comparative: "more polite",
      superlative: "most polite"
    },
    rootAffix: { explanation: "pol-\u5149\u6ed1 + -ite = \u5149\u6ed1\u7684\u2192\u6709\u793c\u8c8c\u7684" },
    similarWords: [{"word": "invite", "reason": "\u5f62\u8fd1", "zh": "\u9080\u8bf7"}, {"word": "write", "reason": "\u5f62\u8fd1", "zh": "\u5199\uff0c\u5199\u5b57"}, {"word": "quite", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u975e\u5e38"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apol-\u5149\u6ed1 + -ite = \u5149\u6ed1\u7684\u2192\u6709\u793c\u8c8c\u7684",
    phrases: [{ phrase: "polite to", meaning: "对...有礼貌" }, { phrase: "be polite", meaning: "有礼貌" }],
    antonyms: [{ word: "rude", zh: "粗鲁的" }]
  },
  {
    id: "practice",
    word: "practice",
    syllables: ["prac", "tice"],
    partOfSpeech: "v.",
    definitions: [{ en: "to repeat something in order to become better", zh: "\u7ec3\u4e60" }],
    examples: [{ sentence: "Hector joined one of the best soccer teams. They practice often." }],
    inflections: {
      pastTense: "practiced",
      pastParticiple: "practiced",
      thirdPerson: "practices",
      presentParticiple: "practicing"
    },
    rootAffix: { explanation: "pract\u505a + -ice = \u505a\u2192\u5b9e\u8df5" },
    similarWords: [{"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apract\u505a + -ice = \u505a\u2192\u5b9e\u8df5",
    phrases: [{ phrase: "practice doing", meaning: "练习做" }, { phrase: "put into practice", meaning: "付诸实践" }]
  },
  {
    id: "present",
    word: "present",
    syllables: ["present"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give something to a person in a formal way", zh: "\u793c\u7269" }],
    examples: [{ sentence: "Ian presented the keys to the car\u2019s new owner." }],
    inflections: {
      pastTense: "presented",
      pastParticiple: "presented",
      thirdPerson: "presents",
      presentParticiple: "presenting"
    },
    similarWords: [{"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "moment", "reason": "\u5f62\u8fd1", "zh": "\u65f6\u523b\uff1b\u77ac\u95f4"}, {"word": "student", "reason": "\u5f62\u8fd1", "zh": "\u5b66\u751f"}, {"word": "represent", "reason": "\u62d3\u5c55", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}],
    phrases: [{ phrase: "birthday present", meaning: "生日礼物" }, { phrase: "at present", meaning: "目前" }],
    rootAffix: { explanation: "pre-前 + sent存在 = 现在的；礼物" },
    antonyms: [{ word: "past", zh: "过去的" }]
  },
  {
    id: "train",
    word: "train",
    syllables: ["train"],
    partOfSpeech: "v.",
    definitions: [{ en: "to exercise in order to become better", zh: "\u706b\u8f66" }],
    examples: [{ sentence: "Mario was training hard for the Olympics." }],
    inflections: {
      pastTense: "trained",
      pastParticiple: "trained",
      thirdPerson: "trains",
      presentParticiple: "training"
    },
    similarWords: [{"word": "brain", "reason": "\u5f62\u8fd1", "zh": "\u5927\u8111\uff1b\u667a\u529b"}, {"word": "rain", "reason": "\u5f62\u8fd1", "zh": "\u96e8\uff0c\u4e0b\u96e8"}, {"word": "again", "reason": "\u5f62\u8fd1", "zh": "\u518d\u6b21\uff0c\u53c8"}],
    phrases: [{ phrase: "by train", meaning: "乘火车" }, { phrase: "train station", meaning: "火车站" }]
  },
  {
    id: "turn",
    word: "turn",
    syllables: ["turn"],
    partOfSpeech: "n.",
    definitions: [{ en: "the chance for someone to do something", zh: "\u8f6c" }],
    examples: [{ sentence: "The boys each take a turn during their game." }],
    inflections: {
      plural: "turns"
    },
    similarWords: [{"word": "burn", "reason": "\u5f62\u8fd1", "zh": "\u71c3\u70e7\uff1b\u70e7\u4f24"}, {"word": "return", "reason": "\u62d3\u5c55", "zh": "\u8fd4\u56de\uff1b\u5f52\u8fd8"}],
    phrases: [{ phrase: "turn on", meaning: "打开" }, { phrase: "turn off", meaning: "关掉" }, { phrase: "turn around", meaning: "转身" }]
  },
  {
    id: "balloon",
    word: "balloon",
    syllables: ["balloon"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thin rubber bag that becomes larger when filled with air", zh: "\u6c14\u7403" }],
    examples: [{ sentence: "There were many balloons at Ray\u2019s party last week." }],
    inflections: {
      plural: "balloons"
    },
    phrases: [{ phrase: "balloon dog", meaning: "气球狗" }, { phrase: "hot air balloon", meaning: "热气球" }]
  },
  {
    id: "bridge",
    word: "bridge",
    syllables: ["bridge"],
    partOfSpeech: "n.",
    definitions: [{ en: "something built for crossing over water or land", zh: "\u6865" }],
    examples: [{ sentence: "This bridge is free for everyone to cross." }],
    inflections: {
      plural: "bridges"
    },
    phrases: [{ phrase: "cross the bridge", meaning: "过桥" }, { phrase: "bridge the gap", meaning: "弥合差距" }]
  },
  {
    id: "busy",
    word: "busy",
    syllables: ["busy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having no free time", zh: "\u5fd9\u7684" }],
    examples: [{ sentence: "He told his boss that he was busy on that date." }],
    inflections: {
      comparative: "busier",
      superlative: "busiest"
    },
    synonyms: [{"word": "active", "zh": "\u79ef\u6781\u7684\uff1b\u6d3b\u8dc3\u7684"}, {"word": "occupied", "zh": "忙碌的；被占用的"}],
    similarWords: [{"word": "buy", "reason": "\u5f62\u8fd1", "zh": "\u4e70\uff0c\u8d2d\u4e70"}, {"word": "business", "reason": "\u62d3\u5c55", "zh": "\u751f\u610f\uff1b\u5546\u4e1a\uff1b\u4e8b\u52a1"}],
    phrases: [{ phrase: "busy with", meaning: "忙于" }, { phrase: "busy street", meaning: "繁忙的街道" }],
    antonyms: [{ word: "free", zh: "空闲的" }]
  },
  {
    id: "company",
    word: "company",
    syllables: ["company"],
    partOfSpeech: "n.",
    definitions: [{ en: "guests", zh: "\u516c\u53f8" }],
    examples: [{ sentence: "They should be polite when their parents have company." }],
    inflections: {
      plural: "companies"
    },
    rootAffix: { explanation: "com-\u4e00\u8d77 + pany\u9762\u5305 = \u4e00\u8d77\u5403\u9762\u5305\u2192\u516c\u53f8/\u540c\u4f34" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acom-\u4e00\u8d77 + pany\u9762\u5305 = \u4e00\u8d77\u5403\u9762\u5305\u2192\u516c\u53f8/\u540c\u4f34",
    phrases: [{ phrase: "company name", meaning: "公司名" }, { phrase: "keep company", meaning: "陪伴" }]
  },
  {
    id: "congratulate",
    word: "congratulate",
    syllables: ["congratulate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell someone that you are happy for their good luck", zh: "\u795d\u8d3a" }],
    examples: [{ sentence: "The woman congratulated the girl." }],
    inflections: {
      pastTense: "congratulated",
      pastParticiple: "congratulated",
      thirdPerson: "congratulates",
      presentParticiple: "congratulating"
    },
    similarWords: [{"word": "concentrate", "reason": "\u5f62\u8fd1", "zh": "\u96c6\u4e2d\uff1b\u4e13\u6ce8"}, {"word": "communicate", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6d41\uff1b\u6c9f\u901a"}],
    phrases: [{ phrase: "congratulate on", meaning: "恭喜" }, { phrase: "congratulate you", meaning: "恭喜你" }]
  },
  {
    id: "delicious",
    word: "delicious",
    syllables: ["delicious"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very good to eat", zh: "\u7f8e\u5473\u7684" }],
    examples: [{ sentence: "She presented some delicious cakes to the teacher." }],
    inflections: {
      comparative: "more delicious",
      superlative: "most delicious"
    },
    synonyms: [{"word": "tasty", "zh": "美味的"}, {"word": "yummy", "zh": "美味的；好吃的"}, {"word": "flavorful", "zh": "味道丰富的"}],
    similarWords: [{"word": "dangerous", "reason": "\u5f62\u8fd1", "zh": "\u5371\u9669\u7684"}],
    phrases: [{ phrase: "delicious food", meaning: "美味的食物" }, { phrase: "taste delicious", meaning: "尝起来美味" }]
  },
  {
    id: "fight",
    word: "fight",
    syllables: ["fight"],
    partOfSpeech: "v.",
    definitions: [{ en: "to battle or hurt with force", zh: "\u6253\u67b6" }],
    examples: [{ sentence: "The kids were fighting over a toy last night." }],
    inflections: {
      pastTense: "fought",
      pastParticiple: "fought",
      thirdPerson: "fights",
      presentParticiple: "fighting"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "right", "reason": "\u5f62\u8fd1", "zh": "\u6b63\u786e\u7684\uff1b\u53f3\u8fb9"}, {"word": "tight", "reason": "\u5f62\u8fd1", "zh": "\u7d27\u7684\uff1b\u7262\u56fa\u7684"}],
    phrases: [{ phrase: "fight for", meaning: "为...而战" }, { phrase: "fight against", meaning: "对抗" }]
  },
  {
    id: "old",
    word: "old",
    syllables: ["old"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having lived or been used for a long time", zh: "\u8001\u7684" }],
    examples: [{ sentence: "I put my favorite food in this old basket." }],
    inflections: {
      comparative: "older",
      superlative: "oldest"
    },
    synonyms: [{"word": "ancient", "zh": "\u53e4\u4ee3\u7684\uff1b\u53e4\u8001\u7684"}, {"word": "elderly", "zh": "年纪大的；年老的"}],
    similarWords: [{"word": "hold", "reason": "\u5f62\u8fd1", "zh": "\u62ff\u7740"}, {"word": "fold", "reason": "\u5f62\u8fd1", "zh": "\u6298\u53e0\uff1b\u6298\u75d5"}, {"word": "cold", "reason": "\u5f62\u8fd1", "zh": "\u51b7\u7684\uff0c\u5bd2\u51b7\u7684"}],
    phrases: [{ phrase: "old man", meaning: "老人" }, { phrase: "old friend", meaning: "老朋友" }],
    antonyms: [{ word: "young", zh: "年轻的" }, { word: "new", zh: "新的" }]
  },
  {
    id: "restaurant",
    word: "restaurant",
    syllables: ["res", "tau", "rant"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place where you can buy and eat food", zh: "\u9910\u5385" }],
    examples: [{ sentence: "The beef and chicken at this restaurant are delicious." }],
    inflections: {
      plural: "restaurants"
    },
    rootAffix: { explanation: "re-\u518d + staur\u6062\u590d + -ant = \u6062\u590d\u4f53\u529b\u7684\u5730\u65b9\u2192\u9910\u5385" },
    similarWords: [{"word": "important", "reason": "\u5f62\u8fd1", "zh": "\u91cd\u8981\u7684\uff1b\u91cd\u5927\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1are-\u518d + staur\u6062\u590d + -ant = \u6062\u590d\u4f53\u529b\u7684\u5730\u65b9\u2192\u9910\u5385",
    phrases: [{ phrase: "at the restaurant", meaning: "在餐厅" }, { phrase: "Chinese restaurant", meaning: "中餐馆" }]
  },
  {
    id: "surprise",
    word: "surprise",
    syllables: ["sur", "prise"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that you do not know about before it happens", zh: "\u60ca\u559c" }],
    examples: [{ sentence: "The party was a surprise. She had no idea about it." }],
    inflections: {
      plural: "surprises"
    },
    rootAffix: { explanation: "sur-\u4e0a\u9762 + pris\u6293 + -e = \u4ece\u4e0a\u9762\u6293\u4e0b\u6765\u2192\u4f7f\u60ca\u8bb6" },
    similarWords: [{"word": "exercise", "reason": "\u5f62\u8fd1", "zh": "\u7ec3\u4e60\uff1b\u953b\u70bc"}, {"word": "promise", "reason": "\u5f62\u8fd1", "zh": "\u627f\u8bfa\uff1b\u4fdd\u8bc1"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1asur-\u4e0a\u9762 + pris\u6293 + -e = \u4ece\u4e0a\u9762\u6293\u4e0b\u6765\u2192\u4f7f\u60ca\u8bb6",
    phrases: [{ phrase: "in surprise", meaning: "惊讶地" }, { phrase: "to one's surprise", meaning: "令某人惊讶的是" }]
  },
  {
    id: "gentleman",
    word: "gentleman",
    syllables: ["gentleman"],
    partOfSpeech: "n.",
    definitions: [{ en: "a man who is polite", zh: "\u7ec5\u58eb" }],
    examples: [{ sentence: "The gentleman opened the door for me." }],
    inflections: {
      plural: "gentlemans"
    },
    phrases: [{ phrase: "ladies and gentlemen", meaning: "女士们先生们" }, { phrase: "gentleman's agreement", meaning: "君子协定" }]
  },
  {
    id: "handsome",
    word: "handsome",
    syllables: ["handsome"],
    partOfSpeech: "adj.",
    definitions: [{ en: "good-looking, usually for men", zh: "\u82f1\u4fca\u7684" }],
    examples: [{ sentence: "The handsome man was working on his computer." }],
    inflections: {
      comparative: "more handsome",
      superlative: "most handsome"
    },
    phrases: [{ phrase: "handsome boy", meaning: "帅男孩" }, { phrase: "handsome man", meaning: "英俊的男人" }]
  },
  {
    id: "husband",
    word: "husband",
    syllables: ["husband"],
    partOfSpeech: "n.",
    definitions: [{ en: "a man someone is married to", zh: "\u4e08\u592b" }],
    examples: [{ sentence: "Her husband was very happy." }],
    inflections: {
      plural: "husbands"
    },
    similarWords: [{"word": "thousand", "reason": "\u5f62\u8fd1", "zh": "\u5343"}, {"word": "island", "reason": "\u5f62\u8fd1", "zh": "\u5c9b\u5c7f\uff1b\u5c9b"}],
    phrases: [{ phrase: "husband and wife", meaning: "夫妻" }, { phrase: "ex-husband", meaning: "前夫" }],
    antonyms: [{ word: "wife", zh: "妻子" }]
  },
  {
    id: "interested",
    word: "interested",
    syllables: ["in", "ter", "est", "ed"],
    partOfSpeech: "adj.",
    definitions: [{ en: "wanting to look at something closely", zh: "\u611f\u5174\u8da3\u7684" }],
    examples: [{ sentence: "The boy was interested in the toys." }],
    inflections: {
      comparative: "more interested",
      superlative: "most interested"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ain \u00b7 ter \u00b7 est \u00b7 ed",
    phrases: [{ phrase: "interested in", meaning: "对...感兴趣" }, { phrase: "become interested", meaning: "变得感兴趣" }],
    synonyms: [{"word": "curious", "zh": "感兴趣的"}],
    similarWords: [{"word": "interest", "reason": "\u62d3\u5c55", "zh": "兴趣"}]
  },
  {
    id: "king",
    word: "king",
    syllables: ["king"],
    partOfSpeech: "n.",
    definitions: [{ en: "a man who rules a country", zh: "\u56fd\u738b" }],
    examples: [{ sentence: "The king\u2019s favorite color is red." }],
    inflections: {
      plural: "kings"
    },
    similarWords: [{"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "ring", "reason": "\u5f62\u8fd1", "zh": "\u6212\u6307\uff0c\u94c3\u94db\uff0c\u54cd"}, {"word": "wing", "reason": "\u5f62\u8fd1", "zh": "\u7fc5\u8180\uff1b\u673a\u7ffc"}],
    phrases: [{ phrase: "king of", meaning: "...之王" }, { phrase: "king and queen", meaning: "国王和王后" }],
    antonyms: [{ word: "queen", zh: "女王" }]
  },
  {
    id: "queen",
    word: "queen",
    syllables: ["queen"],
    partOfSpeech: "n.",
    definitions: [{ en: "a woman who rules a country or who is a king\u2019s wife", zh: "\u5973\u738b" }],
    examples: [{ sentence: "The queen wears beautiful clothes every day." }],
    inflections: {
      plural: "queens"
    },
    similarWords: [{"word": "screen", "reason": "\u5f62\u8fd1", "zh": "\u5c4f\u5e55\uff1b\u7b5b\u9009"}],
    phrases: [{ phrase: "queen bee", meaning: "蜂后" }, { phrase: "drama queen", meaning: "小题大做的人" }],
    antonyms: [{ word: "king", zh: "国王" }]
  },
  {
    id: "skirt",
    word: "skirt",
    syllables: ["skirt"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of women\u2019s clothing which hangs from the waist", zh: "\u88d9\u5b50" }],
    examples: [{ sentence: "Katy wanted to buy another pink skirt from the store." }],
    inflections: {
      plural: "skirts"
    },
    phrases: [{ phrase: "wear a skirt", meaning: "穿裙子" }, { phrase: "mini skirt", meaning: "迷你裙" }]
  },
  {
    id: "wake",
    word: "wake",
    syllables: ["wake"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stop sleeping", zh: "\u9192\u6765" }],
    examples: [{ sentence: "Stacy needed to wake up early this morning." }],
    inflections: {
      pastTense: "woke",
      pastParticiple: "woken",
      thirdPerson: "wakes",
      presentParticiple: "waking"
    },
    similarWords: [{"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}, {"word": "take", "reason": "\u5f62\u8fd1", "zh": "\u62ff"}, {"word": "make", "reason": "\u5f62\u8fd1", "zh": "\u505a\uff0c\u5236\u9020"}],
    phrases: [{ phrase: "wake up", meaning: "醒来" }, { phrase: "wake up call", meaning: "叫醒电话" }]
  },
  {
    id: "wife",
    word: "wife",
    syllables: ["wife"],
    partOfSpeech: "n.",
    definitions: [{ en: "a woman someone is married to", zh: "\u59bb\u5b50" }],
    examples: [{ sentence: "Greg loves his wife\u2019s cooking." }],
    inflections: {
      plural: "wifes"
    },
    similarWords: [{"word": "life", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6d3b\uff0c\u751f\u547d"}, {"word": "knife", "reason": "\u5f62\u8fd1", "zh": "\u5200"}, {"word": "wide", "reason": "\u5f62\u8fd1", "zh": "\u5bbd\u7684"}],
    phrases: [{ phrase: "wife and kids", meaning: "妻子和孩子" }, { phrase: "house wife", meaning: "家庭主妇" }],
    antonyms: [{ word: "husband", zh: "丈夫" }]
  },
  {
    id: "woman",
    word: "woman",
    syllables: ["woman"],
    partOfSpeech: "n.",
    definitions: [{ en: "a girl when she grows up", zh: "\u5973\u4eba" }],
    examples: [{ sentence: "The woman has an important job." }],
    inflections: {
      plural: "women"
    },
    similarWords: [{"word": "human", "reason": "\u5f62\u8fd1", "zh": "\u4eba\u7c7b\uff1b\u4eba\u7684"}],
    phrases: [{ phrase: "old woman", meaning: "老妇人" }, { phrase: "young woman", meaning: "年轻女人" }],
    antonyms: [{ word: "man", zh: "男人" }]
  },
  {
    id: "arrive",
    word: "arrive",
    syllables: ["arrive"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get to a place", zh: "\u5230\u8fbe" }],
    examples: [{ sentence: "The woman and her husband arrived at the airport." }],
    inflections: {
      pastTense: "arrived",
      pastParticiple: "arrived",
      thirdPerson: "arrives",
      presentParticiple: "arriving"
    },
    rootAffix: { explanation: "ad-\u5230 + riv\u6cb3\u5cb8 + -e = \u5230\u6cb3\u5cb8\u2192\u5230\u8fbe" },
    similarWords: [{"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}, {"word": "receive", "reason": "\u5f62\u8fd1", "zh": "\u6536\u5230"}, {"word": "survive", "reason": "\u5f62\u8fd1", "zh": "\u5e78\u5b58\uff1b\u5b58\u6d3b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aad-\u5230 + riv\u6cb3\u5cb8 + -e = \u5230\u6cb3\u5cb8\u2192\u5230\u8fbe",
    phrases: [{ phrase: "arrive at", meaning: "到达" }, { phrase: "arrive in", meaning: "到达" }],
    antonyms: [{ word: "depart", zh: "离开" }, { word: "leave", zh: "离开" }]
  },
  {
    id: "car",
    word: "car",
    syllables: ["car"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that people can drive or ride in", zh: "\u6c7d\u8f66" }],
    examples: [{ sentence: "Thank you for buying me this car." }],
    inflections: {
      plural: "cars"
    },
    similarWords: [{"word": "far", "reason": "\u5f62\u8fd1", "zh": "\u8fdc\u7684\uff0c\u9065\u8fdc"}, {"word": "cap", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}, {"word": "war", "reason": "\u5f62\u8fd1", "zh": "\u6218\u4e89\uff1b\u6253\u4ed7"}, {"word": "carry", "reason": "\u62d3\u5c55", "zh": "\u643a\u5e26\uff0c\u642c\u8fd0"}],
    phrases: [{ phrase: "by car", meaning: "乘汽车" }, { phrase: "car park", meaning: "停车场" }]
  },
  {
    id: "forget",
    word: "forget",
    syllables: ["forget"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to remember something", zh: "\u5fd8\u8bb0" }],
    examples: [{ sentence: "Chris forgot that he had company for dinner." }],
    inflections: {
      pastTense: "forgot",
      pastParticiple: "forgotten",
      thirdPerson: "forgets",
      presentParticiple: "forgeting"
    },
    rootAffix: { explanation: "for-\u79bb\u5f00 + get\u5f97\u5230 = \u539f\u672c\u5f97\u5230\u7684\u79bb\u5f00\u4e86\u2192\u5fd8\u8bb0" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afor-\u79bb\u5f00 + get\u5f97\u5230 = \u539f\u672c\u5f97\u5230\u7684\u79bb\u5f00\u4e86\u2192\u5fd8\u8bb0",
    similarWords: [{"word": "forgetful", "reason": "\u62d3\u5c55", "zh": "健忘的"}],
    phrases: [{ phrase: "forget to do", meaning: "忘记做" }, { phrase: "forget about", meaning: "忘记" }],
    antonyms: [{ word: "remember", zh: "记住" }]
  },
  {
    id: "gate",
    word: "gate",
    syllables: ["gate"],
    partOfSpeech: "n.",
    definitions: [{ en: "a door in a wall or fence", zh: "\u5927\u95e8" }],
    examples: [{ sentence: "The gate to the garden is beautiful." }],
    inflections: {
      plural: "gates"
    },
    similarWords: [{"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "date", "reason": "\u5f62\u8fd1", "zh": "\u65e5\u671f"}, {"word": "hate", "reason": "\u5f62\u8fd1", "zh": "\u6068\uff0c\u8ba8\u538c"}],
    phrases: [{ phrase: "gate number", meaning: "登机口" }, { phrase: "open the gate", meaning: "开门" }]
  },
  {
    id: "grand",
    word: "grand",
    syllables: ["grand"],
    partOfSpeech: "adj.",
    definitions: [{ en: "large and impressive", zh: "\u5b8f\u4f1f\u7684" }],
    examples: [{ sentence: "The king and queen stayed in a grand hotel." }],
    inflections: {
      comparative: "grander",
      superlative: "grandest"
    },
    similarWords: [{"word": "land", "reason": "\u5f62\u8fd1", "zh": "\u571f\u5730"}, {"word": "band", "reason": "\u5f62\u8fd1", "zh": "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5"}, {"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}],
    phrases: [{ phrase: "grand prize", meaning: "大奖" }, { phrase: "grand total", meaning: "总计" }]
  },
  {
    id: "line",
    word: "line",
    syllables: ["line"],
    partOfSpeech: "n.",
    definitions: [{ en: "a long row of things or people", zh: "\u7ebf" }],
    examples: [{ sentence: "The people in the line have to wait their turn." }],
    inflections: {
      plural: "lines"
    },
    similarWords: [{"word": "fine", "reason": "\u5f62\u8fd1", "zh": "\u597d\u7684\uff0c\u5065\u5eb7\u7684"}, {"word": "shine", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u5149\uff1b\u95ea\u8000"}, {"word": "like", "reason": "\u5f62\u8fd1", "zh": "\u559c\u6b22\uff0c\u50cf"}],
    phrases: [{ phrase: "in line", meaning: "排队" }, { phrase: "line up", meaning: "排成一排" }]
  },
  {
    id: "subway",
    word: "subway",
    syllables: ["subway"],
    partOfSpeech: "n.",
    definitions: [{ en: "a system of trains that go under a city", zh: "\u5730\u94c1" }],
    examples: [{ sentence: "The subway was not very busy yesterday." }],
    inflections: {
      plural: "subways"
    },
    phrases: [{ phrase: "by subway", meaning: "乘地铁" }, { phrase: "subway station", meaning: "地铁站" }],
    rootAffix: { explanation: "sub-下 + way路 = 地铁" }
  },
  {
    id: "theater",
    word: "theater",
    syllables: ["theater"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place to watch movies or plays", zh: "\u5267\u9662" }],
    examples: [{ sentence: "They were watching a movie in a theater." }],
    inflections: {
      plural: "theaters"
    },
    similarWords: [{"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "matter", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u60c5"}, {"word": "master", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1"}],
    phrases: [{ phrase: "movie theater", meaning: "电影院" }, { phrase: "go to the theater", meaning: "去剧院" }]
  },
  {
    id: "thousand",
    word: "thousand",
    syllables: ["thou", "sand"],
    partOfSpeech: "n.",
    definitions: [{ en: "the number 1,000", zh: "\u5343" }],
    examples: [{ sentence: "The bridge is one thousand years old." }],
    inflections: {
      plural: "thousands"
    },
    similarWords: [{"word": "husband", "reason": "\u5f62\u8fd1", "zh": "\u4e08\u592b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1athou \u00b7 sand",
    phrases: [{ phrase: "thousands of", meaning: "成千上万" }, { phrase: "one thousand", meaning: "一千" }]
  },
  {
    id: "win",
    word: "win",
    syllables: ["win"],
    partOfSpeech: "v.",
    definitions: [{ en: "to do better than other people in a game", zh: "\u8d62" }],
    examples: [{ sentence: "The team won because they trained and practiced a lot." }],
    inflections: {
      pastTense: "won",
      pastParticiple: "won",
      thirdPerson: "wins",
      presentParticiple: "winning"
    },
    similarWords: [{"word": "wing", "reason": "\u5f62\u8fd1", "zh": "\u7fc5\u8180\uff1b\u673a\u7ffc"}],
    phrases: [{ phrase: "win the game", meaning: "赢得比赛" }, { phrase: "win back", meaning: "赢回来" }],
    antonyms: [{ word: "lose", zh: "输" }]
  },
  {
    id: "cloudy",
    word: "cloudy",
    syllables: ["cloudy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not clear or easily seen through", zh: "\u591a\u4e91\u7684" }],
    examples: [{ sentence: "The sky over the lake was cloudy and dark." }],
    inflections: {
      comparative: "cloudier",
      superlative: "cloudiest"
    },
    similarWords: [{"word": "study", "reason": "\u5f62\u8fd1", "zh": "\u5b66\u4e60\uff0c\u7814\u7a76"}],
    phrases: [{ phrase: "cloudy day", meaning: "阴天" }, { phrase: "partly cloudy", meaning: "部分多云" }],
    rootAffix: { explanation: "cloud云 + -y多 = 多云的" }
  },
  {
    id: "north",
    word: "north",
    syllables: ["north"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction pointing toward the top of a map", zh: "\u5317" }],
    examples: [{ sentence: "They will travel north on their trip this week." }],
    similarWords: [{"word": "worth", "reason": "\u5f62\u8fd1", "zh": "\u503c\u5f97\u7684\uff1b\u4ef7\u503c"}, {"word": "earth", "reason": "\u5f62\u8fd1", "zh": "\u5730\u7403"}, {"word": "birth", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u751f"}],
    phrases: [{ phrase: "north of", meaning: "在...北边" }, { phrase: "north wind", meaning: "北风" }],
    antonyms: [{ word: "south", zh: "南方" }]
  },
  {
    id: "office",
    word: "office",
    syllables: ["office"],
    partOfSpeech: "n.",
    definitions: [{ en: "a room where people work with desks and chairs", zh: "\u529e\u516c\u5ba4" }],
    examples: [{ sentence: "We work in an office above a busy restaurant." }],
    inflections: {
      plural: "offices"
    },
    similarWords: [{"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}, {"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}],
    phrases: [{ phrase: "office worker", meaning: "上班族" }, { phrase: "in the office", meaning: "在办公室" }],
    rootAffix: { explanation: "of-工作 + fic做 = 办公室" }
  },
  {
    id: "plate",
    word: "plate",
    syllables: ["plate"],
    partOfSpeech: "n.",
    definitions: [{ en: "a flat dish", zh: "\u76d8\u5b50" }],
    examples: [{ sentence: "Bill needed to clear the plates from the table." }],
    inflections: {
      plural: "plates"
    },
    rootAffix: { explanation: "plat\u5e73 + -e = \u5e73\u7684\u76d8\u5b50\u2192\u76d8\u5b50" },
    similarWords: [{"word": "late", "reason": "\u5f62\u8fd1", "zh": "\u665a\u7684\uff0c\u8fdf\u5230\u7684"}, {"word": "debate", "reason": "\u5f62\u8fd1", "zh": "\u8fa9\u8bba\uff1b\u4e89\u8bba"}, {"word": "create", "reason": "\u5f62\u8fd1", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aplat\u5e73 + -e = \u5e73\u7684\u76d8\u5b50\u2192\u76d8\u5b50",
    phrases: [{ phrase: "plate of", meaning: "一盘" }, { phrase: "paper plate", meaning: "纸盘" }]
  },
  {
    id: "police",
    word: "police",
    syllables: ["police"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person or group of people who help keep others safe", zh: "\u8b66\u5bdf" }],
    examples: [{ sentence: "The police were watching some people." }],
    inflections: {
      plural: "polices"
    },
    similarWords: [{"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}, {"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}],
    phrases: [{ phrase: "police station", meaning: "警察局" }, { phrase: "police officer", meaning: "警察" }]
  },
  {
    id: "south",
    word: "south",
    syllables: ["south"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction pointing toward the bottom of a map", zh: "\u5357" }],
    examples: [{ sentence: "If you go south of the US, you will be in Mexico." }],
    phrases: [{ phrase: "south of", meaning: "在...南边" }, { phrase: "South Africa", meaning: "南非" }],
    antonyms: [{ word: "north", zh: "北方" }]
  },
  {
    id: "square",
    word: "square",
    syllables: ["square"],
    partOfSpeech: "n.",
    definitions: [{ en: "an open area in a town or city where people get together", zh: "\u5e7f\u573a" }],
    examples: [{ sentence: "Our favorite place in the city is this square." }],
    inflections: {
      plural: "squares"
    },
    similarWords: [{"word": "prepare", "reason": "\u5f62\u8fd1", "zh": "\u51c6\u5907\uff1b\u9884\u5907"}, {"word": "share", "reason": "\u5f62\u8fd1", "zh": "\u5206\u4eab\uff1b\u4efd\u989d"}],
    phrases: [{ phrase: "square meter", meaning: "平方米" }, { phrase: "Tiananmen Square", meaning: "天安门广场" }]
  },
  {
    id: "street",
    word: "street",
    syllables: ["street"],
    partOfSpeech: "n.",
    definitions: [{ en: "a road, usually with buildings on one or both sides", zh: "\u8857\u9053" }],
    examples: [{ sentence: "The street is not very busy at this time." }],
    inflections: {
      plural: "streets"
    },
    similarWords: [{"word": "sheet", "reason": "\u5f62\u8fd1", "zh": "\u5e8a\u5355\uff1b\u7eb8\u5f20\uff1b\u7247"}, {"word": "sweet", "reason": "\u5f62\u8fd1", "zh": "\u751c\u7684\uff0c\u751c\u871c\u7684"}],
    phrases: [{ phrase: "on the street", meaning: "在街上" }, { phrase: "street light", meaning: "路灯" }]
  },
  {
    id: "tonight",
    word: "tonight",
    syllables: ["to", "night"],
    partOfSpeech: "n.",
    definitions: [{ en: "the night of today", zh: "\u4eca\u665a" }],
    examples: [{ sentence: "Lori\u2019s husband is working late tonight." }],
    inflections: {
      plural: "tonights"
    },
    similarWords: [{"word": "flight", "reason": "\u5f62\u8fd1", "zh": "\u98de\u884c\uff1b\u822a\u73ed"}, {"word": "bright", "reason": "\u5f62\u8fd1", "zh": "\u660e\u4eae\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ato \u00b7 night",
    phrases: [{ phrase: "tonight's dinner", meaning: "今晚的晚餐" }, { phrase: "see you tonight", meaning: "今晚见" }]
  },
  {
    id: "umbrella",
    word: "umbrella",
    syllables: ["um", "brel", "la"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thing used to stop rain or the sun from getting on you", zh: "\u96e8\u4f1e" }],
    examples: [{ sentence: "They shared an umbrella to keep dry." }],
    inflections: {
      plural: "umbrellas"
    },
    rootAffix: { explanation: "umbr\u9634\u5f71 + -ella\u5c0f = \u5c0f\u9634\u5f71\u2192\u96e8\u4f1e" },
    mnemonics: "\"um\" \u50cf\"\u55ef\"\uff0c\u6253\u4f1e\u65f6\u53d1\u51fa\u7684\u58f0\u97f3",
    phrases: [{ phrase: "open an umbrella", meaning: "打开伞" }, { phrase: "beach umbrella", meaning: "沙滩伞" }]
  },
  {
    id: "burn",
    word: "burn",
    syllables: ["burn"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be on fire", zh: "\u71c3\u70e7\uff1b\u70e7\u4f24" }],
    examples: [{ sentence: "The paper is burning." }],
    inflections: {
      pastTense: "burnt/burned",
      pastParticiple: "burnt/burned",
      thirdPerson: "burns",
      presentParticiple: "burning"
    },
    similarWords: [{"word": "turn", "reason": "\u5f62\u8fd1", "zh": "\u8f6c"}],
    phrases: [{ phrase: "burn down", meaning: "烧毁" }, { phrase: "burn up", meaning: "烧掉" }]
  },
  {
    id: "exchange",
    word: "exchange",
    syllables: ["exchange"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give something and get something at the same time", zh: "\u4ea4\u6362\uff1b\u5151\u6362" }],
    examples: [{ sentence: "The gentlemen exchange phone numbers." }],
    inflections: {
      pastTense: "exchanged",
      pastParticiple: "exchanged",
      thirdPerson: "exchanges",
      presentParticiple: "exchanging"
    },
    similarWords: [{"word": "strange", "reason": "\u5f62\u8fd1", "zh": "\u5947\u602a\u7684\uff1b\u964c\u751f\u7684"}, {"word": "challenge", "reason": "\u5f62\u8fd1", "zh": "\u6311\u6218"}],
    phrases: [{ phrase: "exchange for", meaning: "交换" }, { phrase: "in exchange", meaning: "作为交换" }],
    synonyms: [{"word": "swap", "zh": "交换"}]
  },
  {
    id: "introduce",
    word: "introduce",
    syllables: ["introduce"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a person known to another person", zh: "\u4ecb\u7ecd\uff1b\u5f15\u8fdb" }],
    examples: [{ sentence: "Jane\u2019s husband introduces her to his handsome friend." }],
    inflections: {
      pastTense: "introduced",
      pastParticiple: "introduced",
      thirdPerson: "introduces",
      presentParticiple: "introducing"
    },
    similarWords: [{"word": "introduction", "reason": "\u62d3\u5c55", "zh": "介绍；引进"}],
    phrases: [{ phrase: "introduce to", meaning: "介绍给" }, { phrase: "introduce oneself", meaning: "自我介绍" }],
    rootAffix: { explanation: "intro-入 + duce引导 = 介绍" }
  },
  {
    id: "offer",
    word: "offer",
    syllables: ["offer"],
    partOfSpeech: "v.",
    definitions: [{ en: "to try to give or do something to help someone", zh: "\u63d0\u4f9b\uff1b\u51fa\u4ef7" }],
    examples: [{ sentence: "Paul offered the man money, but he was not interested." }],
    inflections: {
      pastTense: "offered",
      pastParticiple: "offered",
      thirdPerson: "offers",
      presentParticiple: "offering"
    },
    similarWords: [{"word": "prefer", "reason": "\u5f62\u8fd1", "zh": "\u66f4\u559c\u6b22\uff1b\u504f\u597d"}],
    phrases: [{ phrase: "offer to do", meaning: "主动做" }, { phrase: "offer help", meaning: "提供帮助" }],
    rootAffix: { explanation: "of-向 + fer搬运 = 提供" }
  },
  {
    id: "pardon",
    word: "pardon",
    syllables: ["pardon"],
    partOfSpeech: "v.",
    definitions: [{ en: "to forgive, often used with me", zh: "\u539f\u8c05\uff1b\u8d66\u514d" }],
    examples: [{ sentence: "\u201cPardon me. Can you tell me how to get to the subway?\u201d" }],
    inflections: {
      pastTense: "pardoned",
      pastParticiple: "pardoned",
      thirdPerson: "pardons",
      presentParticiple: "pardoning"
    },
    phrases: [{ phrase: "I beg your pardon", meaning: "请原谅" }, { phrase: "pardon me", meaning: "对不起" }]
  },
  {
    id: "popular",
    word: "popular",
    syllables: ["pop", "u", "lar"],
    partOfSpeech: "adj.",
    definitions: [{ en: "liked by many people", zh: "\u6d41\u884c\u7684\uff1b\u53d7\u6b22\u8fce\u7684" }],
    examples: [{ sentence: "This busy street is a popular place to shop." }],
    inflections: {
      comparative: "more popular",
      superlative: "most popular"
    },
    rootAffix: { explanation: "popul\u4eba\u6c11 + -ar = \u4eba\u6c11\u7684\u2192\u53d7\u6b22\u8fce\u7684" },
    similarWords: [{"word": "similar", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u4f3c\u7684\uff1b\u7c7b\u4f3c\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apopul\u4eba\u6c11 + -ar = \u4eba\u6c11\u7684\u2192\u53d7\u6b22\u8fce\u7684",
    phrases: [{ phrase: "popular with", meaning: "受...欢迎" }, { phrase: "popular song", meaning: "流行歌曲" }],
    antonyms: [{ word: "unpopular", zh: "不受欢迎的" }]
  },
  {
    id: "prepare",
    word: "prepare",
    syllables: ["pre", "pare"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make", zh: "\u51c6\u5907\uff1b\u9884\u5907" }],
    examples: [{ sentence: "The cooks prepare a delicious meal in the restaurant." }],
    inflections: {
      pastTense: "prepared",
      pastParticiple: "prepared",
      thirdPerson: "prepares",
      presentParticiple: "preparing"
    },
    similarWords: [{"word": "square", "reason": "\u5f62\u8fd1", "zh": "\u5e7f\u573a"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apre \u00b7 pare",
    phrases: [{ phrase: "prepare for", meaning: "为...准备" }, { phrase: "prepare to do", meaning: "准备做" }],
    rootAffix: { explanation: "pre-提前 + pare准备 = 准备" }
  },
  {
    id: "reason",
    word: "reason",
    syllables: ["reason"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that says why something was or was not done", zh: "\u7406\u7531\uff1b\u539f\u56e0" }],
    examples: [{ sentence: "He did not have a reason for arriving late at the theater." }],
    inflections: {
      plural: "reasons"
    },
    similarWords: [{"word": "season", "reason": "\u5f62\u8fd1", "zh": "\u5b63\u8282"}, {"word": "poison", "reason": "\u5f62\u8fd1", "zh": "\u6bd2\u836f\uff1b\u6bd2\u7269"}, {"word": "lesson", "reason": "\u5f62\u8fd1", "zh": "\u8bfe\uff0c\u8bfe\u7a0b"}],
    phrases: [{ phrase: "reason for", meaning: "...的原因" }, { phrase: "for this reason", meaning: "因为这个原因" }]
  },
  {
    id: "shake",
    word: "shake",
    syllables: ["shake"],
    partOfSpeech: "v.",
    definitions: [{ en: "to hold and move up and down", zh: "\u6447\u6643\uff1b\u6296\u52a8" }],
    examples: [{ sentence: "The woman shakes Sue\u2019s hand and congratulates her." }],
    inflections: {
      pastTense: "shook",
      pastParticiple: "shaken",
      thirdPerson: "shakes",
      presentParticiple: "shaking"
    },
    similarWords: [{"word": "wake", "reason": "\u5f62\u8fd1", "zh": "\u9192\u6765"}, {"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}, {"word": "take", "reason": "\u5f62\u8fd1", "zh": "\u62ff"}],
    phrases: [{ phrase: "shake hands", meaning: "握手" }, { phrase: "shake off", meaning: "摆脱" }]
  },
  {
    id: "shy",
    word: "shy",
    syllables: ["shy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "quiet and not wanting to talk to others", zh: "\u5bb3\u7f9e\u7684\uff1b\u80c6\u602f\u7684" }],
    examples: [{ sentence: "The young boy is very shy." }],
    inflections: {
      comparative: "shier",
      superlative: "shiest"
    },
    similarWords: [{"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "sky", "reason": "\u5f62\u8fd1", "zh": "\u5929\u7a7a"}],
    phrases: [{ phrase: "shy girl", meaning: "害羞的女孩" }, { phrase: "feel shy", meaning: "感觉害羞" }]
  },
  {
    id: "bell",
    word: "bell",
    syllables: ["bell"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that makes a ringing sound when hit", zh: "\u94c3\uff1b\u949f" }],
    examples: [{ sentence: "The bell rings when the gate opens." }],
    inflections: {
      plural: "bells"
    },
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}],
    phrases: [{ phrase: "ring the bell", meaning: "按铃" }, { phrase: "bell pepper", meaning: "甜椒" }]
  },
  {
    id: "block",
    word: "block",
    syllables: ["block"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of a city with streets on all four sides", zh: "\u5757\uff1b\u8857\u533a\uff1b\u963b\u6321" }],
    examples: [{ sentence: "There are many houses on each block." }],
    inflections: {
      plural: "blocks"
    },
    similarWords: [{"word": "sock", "reason": "\u5f62\u8fd1", "zh": "\u889c\u5b50\uff1b\u77ed\u889c"}, {"word": "rock", "reason": "\u5f62\u8fd1", "zh": "\u5ca9\u77f3"}, {"word": "knock", "reason": "\u5f62\u8fd1", "zh": "\u6572\uff1b\u6253"}],
    phrases: [{ phrase: "block of", meaning: "一块" }, { phrase: "road block", meaning: "路障" }]
  },
  {
    id: "borrow",
    word: "borrow",
    syllables: ["borrow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take and use something belonging to another person", zh: "\u501f\uff1b\u501f\u7528" }],
    examples: [{ sentence: "Thank you for letting me borrow your math book this week." }],
    inflections: {
      pastTense: "borrowed",
      pastParticiple: "borrowed",
      thirdPerson: "borrows",
      presentParticiple: "borrowing"
    },
    similarWords: [{"word": "throw", "reason": "\u5f62\u8fd1", "zh": "\u6254"}],
    phrases: [{ phrase: "borrow from", meaning: "从...借" }, { phrase: "borrow and lend", meaning: "借入和借出" }],
    antonyms: [{ word: "lend", zh: "借出" }]
  },
  {
    id: "bowl",
    word: "bowl",
    syllables: ["bowl"],
    partOfSpeech: "n.",
    definitions: [{ en: "a dish with tall sides", zh: "\u7897\uff1b\u94b5" }],
    examples: [{ sentence: "I had a big bowl of soup for lunch." }],
    inflections: {
      plural: "bowls"
    },
    phrases: [{ phrase: "bowl of", meaning: "一碗" }, { phrase: "soup bowl", meaning: "汤碗" }]
  },
  {
    id: "confuse",
    word: "confuse",
    syllables: ["con", "fuse"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make it difficult for someone to understand", zh: "\u4f7f\u56f0\u60d1\uff1b\u6df7\u6dc6" }],
    examples: [{ sentence: "Math confuses Scott." }],
    inflections: {
      pastTense: "confused",
      pastParticiple: "confused",
      thirdPerson: "confuses",
      presentParticiple: "confusing"
    },
    similarWords: [{"word": "excuse", "reason": "\u5f62\u8fd1", "zh": "\u539f\u8c05\uff0c\u501f\u53e3"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acon \u00b7 fuse",
    phrases: [{ phrase: "confuse with", meaning: "把...和...混淆" }, { phrase: "feel confused", meaning: "感到困惑" }]
  },
  {
    id: "knock",
    word: "knock",
    syllables: ["knock"],
    partOfSpeech: "v.",
    definitions: [{ en: "to hit something with part of your hand", zh: "\u6572\uff1b\u6253" }],
    examples: [{ sentence: "She continued to knock on the door." }],
    inflections: {
      pastTense: "knocked",
      pastParticiple: "knocked",
      thirdPerson: "knocks",
      presentParticiple: "knocking"
    },
    similarWords: [{"word": "sock", "reason": "\u5f62\u8fd1", "zh": "\u889c\u5b50\uff1b\u77ed\u889c"}, {"word": "rock", "reason": "\u5f62\u8fd1", "zh": "\u5ca9\u77f3"}, {"word": "block", "reason": "\u5f62\u8fd1", "zh": "\u5757\uff1b\u8857\u533a\uff1b\u963b\u6321"}],
    phrases: [{ phrase: "knock on", meaning: "敲" }, { phrase: "knock at", meaning: "敲" }]
  },
  {
    id: "result",
    word: "result",
    syllables: ["result"],
    partOfSpeech: "n.",
    definitions: [{ en: "an exam grade; something that is caused by another", zh: "\u7ed3\u679c\uff1b\u6210\u7ee9" }],
    examples: [{ sentence: "John\u2019s doctor was very happy with his test results." }],
    inflections: {
      plural: "results"
    },
    similarWords: [{"word": "adult", "reason": "\u5f62\u8fd1", "zh": "\u6210\u5e74\u4eba\uff1b\u6210\u5e74\u7684"}],
    phrases: [{ phrase: "as a result", meaning: "结果" }, { phrase: "result in", meaning: "导致" }],
    synonyms: [{"word": "outcome", "zh": "结果"}]
  },
  {
    id: "seem",
    word: "seem",
    syllables: ["seem"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look to be", zh: "\u4f3c\u4e4e\uff1b\u597d\u50cf" }],
    examples: [{ sentence: "They seem to be enjoying the funny movie tonight." }],
    inflections: {
      pastTense: "seemed",
      pastParticiple: "seemed",
      thirdPerson: "seems",
      presentParticiple: "seeming"
    },
    similarWords: [{"word": "see", "reason": "\u5f62\u8fd1", "zh": "\u770b\u89c1\uff0c\u770b\u5230"}],
    phrases: [{ phrase: "seem to be", meaning: "似乎是" }, { phrase: "it seems that", meaning: "似乎" }]
  },
  {
    id: "smart",
    word: "smart",
    syllables: ["smart"],
    partOfSpeech: "adj.",
    definitions: [{ en: "good at learning or thinking about things", zh: "\u806a\u660e\u7684\uff1b\u667a\u80fd\u7684" }],
    examples: [{ sentence: "Chris is a very smart boy." }],
    inflections: {
      comparative: "smarter",
      superlative: "smartest"
    },
    synonyms: [{"word": "clever", "zh": "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684"}, {"word": "intelligent", "zh": "聪明的；智能的"}, {"word": "bright", "zh": "\u660e\u4eae\u7684"}],
    similarWords: [{"word": "start", "reason": "\u5f62\u8fd1", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "heart", "reason": "\u5f62\u8fd1", "zh": "\u5fc3\u810f"}],
    phrases: [{ phrase: "smart phone", meaning: "智能手机" }, { phrase: "smart kid", meaning: "聪明的孩子" }]
  },
  {
    id: "subject",
    word: "subject",
    syllables: ["subject"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you study in school", zh: "\u79d1\u76ee\uff1b\u4e3b\u9898" }],
    examples: [{ sentence: "English is the most popular subject at my school." }],
    inflections: {
      plural: "subjects"
    },
    similarWords: [{"word": "project", "reason": "\u5f62\u8fd1", "zh": "\u9879\u76ee\uff1b\u6295\u5f71"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "school subject", meaning: "学校科目" }, { phrase: "change the subject", meaning: "改变话题" }],
    rootAffix: { explanation: "sub-在…下 + ject投掷 = 科目；主题" }
  },
  {
    id: "active",
    word: "active",
    syllables: ["ac", "tive"],
    partOfSpeech: "adj.",
    definitions: [{ en: "doing many things", zh: "\u79ef\u6781\u7684\uff1b\u6d3b\u8dc3\u7684" }],
    examples: [{ sentence: "Children are very active and like to run and jump." }],
    inflections: {
      comparative: "more active",
      superlative: "most active"
    },
    rootAffix: { explanation: "act\u884c\u52a8 + -ive = \u884c\u52a8\u7684\u2192\u6d3b\u8dc3\u7684" },
    similarWords: [{"word": "native", "reason": "\u5f62\u8fd1", "zh": "\u672c\u5730\u7684\uff1b\u571f\u751f\u7684"}, {"word": "receive", "reason": "\u5f62\u8fd1", "zh": "\u6536\u5230"}, {"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}, {"word": "act", "reason": "\u62d3\u5c55", "zh": "\u884c\u52a8\uff0c\u884c\u4e3a"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aact\u884c\u52a8 + -ive = \u884c\u52a8\u7684\u2192\u6d3b\u8dc3\u7684",
    phrases: [{ phrase: "active in", meaning: "积极参与" }, { phrase: "active learning", meaning: "主动学习" }],
    antonyms: [{ word: "lazy", zh: "懒惰的" }]
  },
  {
    id: "believe",
    word: "believe",
    syllables: ["be", "lieve"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think that something is true", zh: "\u76f8\u4fe1\uff1b\u8ba4\u4e3a" }],
    examples: [{ sentence: "He believes he is a smart boy." }],
    inflections: {
      pastTense: "believed",
      pastParticiple: "believed",
      thirdPerson: "believes",
      presentParticiple: "believing"
    },
    rootAffix: { explanation: "be-\u4f7f + lieve\u7231 = \u4f7f\u53ef\u4fe1\u8d56\u2192\u76f8\u4fe1" },
    similarWords: [{"word": "achieve", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u73b0\uff1b\u8fbe\u5230"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abe-\u4f7f + lieve\u7231 = \u4f7f\u53ef\u4fe1\u8d56\u2192\u76f8\u4fe1",
    phrases: [{ phrase: "believe in", meaning: "相信" }, { phrase: "believe it or not", meaning: "信不信由你" }]
  },
  {
    id: "environment",
    word: "environment",
    syllables: ["en", "vi", "ron", "ment"],
    partOfSpeech: "n.",
    definitions: [{ en: "all of the things found in an area, indoors or outdoors", zh: "\u73af\u5883\uff1b\u5468\u56f4" }],
    examples: [{ sentence: "Fresh air is a good reason to live in a clean environment." }],
    inflections: {
      plural: "environments"
    },
    rootAffix: { explanation: "en-\u4f7f + viron\u8f6c + -ment = \u56f4\u7ed5\u8f6c\u7684\u4e1c\u897f\u2192\u73af\u5883" },
    similarWords: [{"word": "experiment", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9a8c\uff1b\u8bd5\u9a8c"}, {"word": "convenient", "reason": "\u5f62\u8fd1", "zh": "\u65b9\u4fbf\u7684\uff1b\u4fbf\u5229\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aen-\u4f7f + viron\u8f6c + -ment = \u56f4\u7ed5\u8f6c\u7684\u4e1c\u897f\u2192\u73af\u5883",
    phrases: [{ phrase: "protect the environment", meaning: "保护环境" }, { phrase: "home environment", meaning: "家庭环境" }]
  },
  {
    id: "forest",
    word: "forest",
    syllables: ["forest"],
    partOfSpeech: "n.",
    definitions: [{ en: "a big area of trees", zh: "\u68ee\u6797\uff1b\u6811\u6797" }],
    examples: [{ sentence: "The forest seems to be burning." }],
    inflections: {
      plural: "forests"
    },
    rootAffix: { explanation: "for\u5916\u9762 + -est = \u5916\u9762\u7684\u5730\u65b9\u2192\u68ee\u6797" },
    similarWords: [{"word": "contest", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u7ade\u8d5b"}, {"word": "suggest", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u6697\u793a"}, {"word": "honest", "reason": "\u5f62\u8fd1", "zh": "\u8bda\u5b9e\u7684\uff1b\u6b63\u76f4\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afor\u5916\u9762 + -est = \u5916\u9762\u7684\u5730\u65b9\u2192\u68ee\u6797",
    phrases: [{ phrase: "in the forest", meaning: "在森林里" }, { phrase: "forest fire", meaning: "森林火灾" }]
  },
  {
    id: "human",
    word: "human",
    syllables: ["human"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person", zh: "\u4eba\u7c7b\uff1b\u4eba\u7684" }],
    examples: [{ sentence: "The old bridge was built by humans a long time ago." }],
    inflections: {
      plural: "humans"
    },
    similarWords: [{"word": "woman", "reason": "\u5f62\u8fd1", "zh": "\u5973\u4eba"}],
    phrases: [{ phrase: "human being", meaning: "人类" }, { phrase: "human nature", meaning: "人性" }]
  },
  {
    id: "hunt",
    word: "hunt",
    syllables: ["hunt"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look for animals to kill", zh: "\u6253\u730e\uff1b\u641c\u5bfb" }],
    examples: [{ sentence: "Some people in North America like to hunt." }],
    inflections: {
      pastTense: "hunted",
      pastParticiple: "hunted",
      thirdPerson: "hunts",
      presentParticiple: "hunting"
    },
    similarWords: [{"word": "count", "reason": "\u5f62\u8fd1", "zh": "\u6570\u6570\uff0c\u8ba1\u6570"}, {"word": "hurt", "reason": "\u5f62\u8fd1", "zh": "\u53d7\u4f24"}],
    phrases: [{ phrase: "hunt for", meaning: "寻找" }, { phrase: "hunt down", meaning: "追捕" }]
  },
  {
    id: "path",
    word: "path",
    syllables: ["path"],
    partOfSpeech: "n.",
    definitions: [{ en: "a way to go from one place to another", zh: "\u5c0f\u8def\uff1b\u8def\u5f84" }],
    examples: [{ sentence: "Both paths take you to the gate of the park." }],
    inflections: {
      plural: "paths"
    },
    similarWords: [{"word": "bath", "reason": "\u5f62\u8fd1", "zh": "\u6d17\u6fa1"}, {"word": "math", "reason": "\u5f62\u8fd1", "zh": "\u6570\u5b66"}],
    phrases: [{ phrase: "path to", meaning: "通往...的路" }, { phrase: "bike path", meaning: "自行车道" }]
  },
  {
    id: "safe",
    word: "safe",
    syllables: ["safe"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not dangerous", zh: "\u5b89\u5168\u7684\uff1b\u4fdd\u9669\u7bb1" }],
    examples: [{ sentence: "The gentleman stands in a safe place away from the subway." }],
    inflections: {
      comparative: "safer",
    },
    similarWords: [{"word": "same", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u540c\u7684\uff0c\u4e00\u6837\u7684"}, {"word": "save", "reason": "\u5f62\u8fd1", "zh": "\u8282\u7701\uff1b\u62ef\u6551"}, {"word": "sale", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u552e\uff1b\u51cf\u4ef7\u9500\u552e"}],
    phrases: [{ phrase: "safe and sound", meaning: "安然无恙" }, { phrase: "safe place", meaning: "安全的地方" }],
    antonyms: [{ word: "dangerous", zh: "危险的" }]
  },
  {
    id: "service",
    word: "service",
    syllables: ["service"],
    partOfSpeech: "n.",
    definitions: [{ en: "the job of helping visitors at a place like a restaurant", zh: "\u670d\u52a1\uff1b\u7ef4\u4fee" }],
    examples: [{ sentence: "The new restaurant has delicious food and great service." }],
    inflections: {
      plural: "services"
    },
    similarWords: [{"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}, {"word": "practice", "reason": "\u5f62\u8fd1", "zh": "\u7ec3\u4e60"}, {"word": "choice", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6289\u62e9"}],
    phrases: [{ phrase: "service center", meaning: "服务中心" }, { phrase: "room service", meaning: "客房服务" }]
  },
  {
    id: "wild",
    word: "wild",
    syllables: ["wild"],
    partOfSpeech: "adj.",
    definitions: [{ en: "living or growing without humans\u2019 help", zh: "\u91ce\u751f\u7684\uff1b\u72c2\u91ce\u7684" }],
    examples: [{ sentence: "Africa is a popular place to see wild animals." }],
    inflections: {
      comparative: "wilder",
      superlative: "wildest"
    },
    similarWords: [{"word": "child", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5b69\uff0c\u513f\u7ae5"}, {"word": "build", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u9020"}],
    phrases: [{ phrase: "wild animal", meaning: "野生动物" }, { phrase: "in the wild", meaning: "在野外" }],
    antonyms: [{ word: "tame", zh: "驯服的" }]
  },
  {
    id: "area",
    word: "area",
    syllables: ["area"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of a larger place", zh: "\u5730\u533a\uff1b\u9762\u79ef" }],
    examples: [{ sentence: "The people living in this area are very poor." }],
    inflections: {
      plural: "areas"
    },
    phrases: [{ phrase: "area code", meaning: "区号" }, { phrase: "in the area", meaning: "在该地区" }]
  },
  {
    id: "choice",
    word: "choice",
    syllables: ["choice"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you can choose", zh: "\u9009\u62e9\uff1b\u6289\u62e9" }],
    examples: [{ sentence: "It is your choice. Do you want to go north or south?" }],
    inflections: {
      plural: "choices"
    },
    similarWords: [{"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}, {"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}],
    phrases: [{ phrase: "make a choice", meaning: "做出选择" }, { phrase: "first choice", meaning: "首选" }]
  },
  {
    id: "enter",
    word: "enter",
    syllables: ["enter"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go in", zh: "\u8fdb\u5165\uff1b\u53c2\u52a0" }],
    examples: [{ sentence: "She enters through the front gate." }],
    inflections: {
      pastTense: "entered",
      pastParticiple: "entered",
      thirdPerson: "enters",
      presentParticiple: "entering"
    },
    similarWords: [{"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "water", "reason": "\u5f62\u8fd1", "zh": "\u6c34"}, {"word": "matter", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u60c5"}],
    phrases: [{ phrase: "enter for", meaning: "报名参加" }, { phrase: "enter into", meaning: "进入" }],
    antonyms: [{ word: "exit", zh: "退出" }]
  },
  {
    id: "important",
    word: "important",
    syllables: ["im", "por", "tant"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having great meaning", zh: "\u91cd\u8981\u7684\uff1b\u91cd\u5927\u7684" }],
    examples: [{ sentence: "The king is the most important piece in the game." }],
    inflections: {
      comparative: "more important",
      superlative: "most important"
    },
    rootAffix: { explanation: "im-\u8fdb\u5165 + port\u642c\u8fd0 + -ant = \u9700\u8981\u642c\u8fd0\u8fdb\u6765\u7684\u2192\u91cd\u8981\u7684" },
    synonyms: [{"word": "significant", "zh": "重要的；意义重大的"}, {"word": "vital", "zh": "至关重要的"}, {"word": "crucial", "zh": "关键的；决定性的"}],
    similarWords: [{"word": "restaurant", "reason": "\u5f62\u8fd1", "zh": "\u9910\u5385"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aim-\u8fdb\u5165 + port\u642c\u8fd0 + -ant = \u9700\u8981\u642c\u8fd0\u8fdb\u6765\u7684\u2192\u91cd\u8981\u7684",
    phrases: [{ phrase: "important thing", meaning: "重要的事" }, { phrase: "most important", meaning: "最重要" }],
    antonyms: [{ word: "unimportant", zh: "不重要的" }]
  },
  {
    id: "lie",
    word: "lie",
    syllables: ["lie"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be on your back on the ground or in a bed", zh: "\u8eba\uff1b\u8bf4\u8c0e" }],
    examples: [{ sentence: "She lies in the grass and looks up at the sky." }],
    inflections: {
      pastTense: "lay",
      pastParticiple: "lain",
      thirdPerson: "lies",
      presentParticiple: "lying"
    },
    similarWords: [{"word": "tie", "reason": "\u5f62\u8fd1", "zh": "\u7cfb"}, {"word": "die", "reason": "\u5f62\u8fd1", "zh": "\u6b7b"}, {"word": "like", "reason": "\u5f62\u8fd1", "zh": "\u559c\u6b22\uff0c\u50cf"}],
    phrases: [{ phrase: "lie down", meaning: "躺下" }, { phrase: "tell a lie", meaning: "说谎" }]
  },
  {
    id: "mad",
    word: "mad",
    syllables: ["mad"],
    partOfSpeech: "adj.",
    definitions: [{ en: "angry", zh: "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684" }],
    examples: [{ sentence: "The woman is mad because someone hit her car." }],
    inflections: {
      comparative: "mader",
      superlative: "madest"
    },
    similarWords: [{"word": "man", "reason": "\u5f62\u8fd1", "zh": "\u7537\u4eba\uff0c\u4eba\u7c7b"}, {"word": "bad", "reason": "\u5f62\u8fd1", "zh": "\u574f\u7684\uff0c\u4e0d\u597d\u7684"}, {"word": "sad", "reason": "\u5f62\u8fd1", "zh": "\u4f24\u5fc3\u7684\uff0c\u96be\u8fc7\u7684"}],
    phrases: [{ phrase: "mad at", meaning: "对...生气" }, { phrase: "drive mad", meaning: "逼疯" }]
  },
  {
    id: "nature",
    word: "nature",
    syllables: ["na", "ture"],
    partOfSpeech: "n.",
    definitions: [{ en: "everything in the world that is not made by humans", zh: "\u81ea\u7136\uff1b\u672c\u6027" }],
    examples: [{ sentence: "She likes to take pictures of nature." }],
    similarWords: [{"word": "future", "reason": "\u5f62\u8fd1", "zh": "\u672a\u6765"}, {"word": "culture", "reason": "\u5f62\u8fd1", "zh": "\u6587\u5316\uff1b\u6587\u660e"}, {"word": "picture", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u753b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ana \u00b7 ture",
    phrases: [{ phrase: "in nature", meaning: "在自然界" }, { phrase: "human nature", meaning: "人性" }],
    rootAffix: { explanation: "nat出生 + -ure = 自然" }
  },
  {
    id: "protect",
    word: "protect",
    syllables: ["pro", "tect"],
    partOfSpeech: "v.",
    definitions: [{ en: "to keep safe from harm", zh: "\u4fdd\u62a4\uff1b\u9632\u62a4" }],
    examples: [{ sentence: "The umbrella protects the people from the hot sun." }],
    inflections: {
      pastTense: "protected",
      pastParticiple: "protected",
      thirdPerson: "protects",
      presentParticiple: "protecting"
    },
    rootAffix: { explanation: "pro-\u524d + tect\u76d6 = \u5728\u524d\u9762\u76d6\u4f4f\u2192\u4fdd\u62a4" },
    similarWords: [{"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}, {"word": "select", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6311\u9009"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apro-\u524d + tect\u76d6 = \u5728\u524d\u9762\u76d6\u4f4f\u2192\u4fdd\u62a4",
    phrases: [{ phrase: "protect from", meaning: "保护...免受" }, { phrase: "protect the environment", meaning: "保护环境" }]
  },
  {
    id: "shout",
    word: "shout",
    syllables: ["shout"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say something very loudly", zh: "\u558a\u53eb\uff1b\u5927\u58f0\u8bf4" }],
    examples: [{ sentence: "The shy boy surprised everyone by shouting." }],
    inflections: {
      pastTense: "shouted",
      pastParticiple: "shouted",
      thirdPerson: "shouts",
      presentParticiple: "shouting"
    },
    similarWords: [{"word": "short", "reason": "\u5f62\u8fd1", "zh": "\u77ed\u7684\uff0c\u77ee\u7684"}, {"word": "shoot", "reason": "\u5f62\u8fd1", "zh": "\u5c04\u51fb\uff1b\u62cd\u6444"}],
    phrases: [{ phrase: "shout at", meaning: "对...大喊" }, { phrase: "shout out", meaning: "喊出来" }]
  },
  {
    id: "usually",
    word: "usually",
    syllables: ["u", "su", "al", "ly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "most of the time", zh: "\u901a\u5e38\uff1b\u7ecf\u5e38" }],
    examples: [{ sentence: "People usually shake hands when they introduce themselves." }],
    similarWords: [{"word": "finally", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\uff1b\u7ec8\u4e8e"}, {"word": "really", "reason": "\u5f62\u8fd1", "zh": "\u771f\u7684"}, {"word": "actually", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9645\u4e0a\uff1b\u4e8b\u5b9e\u4e0a"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1au \u00b7 su \u00b7 al \u00b7 ly",
    phrases: [{ phrase: "usually do", meaning: "通常做" }, { phrase: "more usually", meaning: "更通常" }],
    rootAffix: { explanation: "usual平常的 + -ly = 通常" }
  },
  {
    id: "amazing",
    word: "amazing",
    syllables: ["amazing"],
    partOfSpeech: "adj.",
    definitions: [{ en: "causing great surprise or wonder", zh: "\u60ca\u4eba\u7684\uff1b\u6781\u597d\u7684" }],
    examples: [{ sentence: "It is amazing that humans walked on the moon." }],
    inflections: {
      comparative: "more amazing",
      superlative: "most amazing"
    },
    similarWords: [{"word": "evening", "reason": "\u5f62\u8fd1", "zh": "\u508d\u665a\uff0c\u665a\u4e0a"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}, {"word": "morning", "reason": "\u5f62\u8fd1", "zh": "\u65e9\u6668\uff0c\u65e9\u4e0a"}],
    phrases: [{ phrase: "amazing grace", meaning: "奇异恩典" }, { phrase: "look amazing", meaning: "看起来很棒" }]
  },
  {
    id: "attend",
    word: "attend",
    syllables: ["at", "tend"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go to a class or activity", zh: "\u53c2\u52a0\uff1b\u51fa\u5e2d" }],
    examples: [{ sentence: "Many students attend this class on protecting the environment." }],
    inflections: {
      pastTense: "attended",
      pastParticiple: "attended",
      thirdPerson: "attends",
      presentParticiple: "attending"
    },
    similarWords: [{"word": "intend", "reason": "\u5f62\u8fd1", "zh": "\u6253\u7b97\uff1b\u8ba1\u5212"}, {"word": "friend", "reason": "\u5f62\u8fd1", "zh": "\u670b\u53cb"}, {"word": "spend", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aat \u00b7 tend",
    phrases: [{ phrase: "attend school", meaning: "上学" }, { phrase: "attend a meeting", meaning: "参加会议" }],
    rootAffix: { explanation: "at-去 + tend伸展 = 参加；出席" }
  },
  {
    id: "event",
    word: "event",
    syllables: ["event"],
    partOfSpeech: "n.",
    definitions: [{ en: "a special, planned activity", zh: "\u4e8b\u4ef6\uff1b\u6d3b\u52a8" }],
    examples: [{ sentence: "There is usually a fun event at the park on a holiday." }],
    inflections: {
      plural: "events"
    },
    similarWords: [{"word": "invent", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u660e\uff1b\u521b\u9020"}, {"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "moment", "reason": "\u5f62\u8fd1", "zh": "\u65f6\u523b\uff1b\u77ac\u95f4"}],
    phrases: [{ phrase: "current event", meaning: "时事" }, { phrase: "special event", meaning: "特殊事件" }],
    rootAffix: { explanation: "e-出 + vent来 = 事件" }
  },
  {
    id: "express",
    word: "express",
    syllables: ["ex", "press"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say, write, or show thoughts or feelings", zh: "\u8868\u8fbe\uff1b\u5feb\u9012" }],
    examples: [{ sentence: "Marcy expresses her feelings with her face." }],
    inflections: {
      pastTense: "expressed",
      pastParticiple: "expressed",
      thirdPerson: "expresses",
      presentParticiple: "expressing"
    },
    rootAffix: { explanation: "ex-\u51fa + press\u538b = \u538b\u51fa\u6765\u8868\u8fbe\u2192\u8868\u8fbe" },
    similarWords: [{"word": "address", "reason": "\u5f62\u8fd1", "zh": "\u5730\u5740"}, {"word": "stress", "reason": "\u5f62\u8fd1", "zh": "\u538b\u529b\uff1b\u5f3a\u8c03"}, {"word": "princess", "reason": "\u5f62\u8fd1", "zh": "\u516c\u4e3b\uff1b\u738b\u5983"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + press\u538b = \u538b\u51fa\u6765\u8868\u8fbe\u2192\u8868\u8fbe",
    phrases: [{ phrase: "express oneself", meaning: "表达自己" }, { phrase: "express way", meaning: "高速公路" }]
  },
  {
    id: "grade",
    word: "grade",
    syllables: ["grade"],
    partOfSpeech: "n.",
    definitions: [{ en: "a level of study in school", zh: "\u5e74\u7ea7\uff1b\u5206\u6570" }],
    examples: [{ sentence: "Lesley started first grade today." }],
    inflections: {
      plural: "grades"
    },
    phrases: [{ phrase: "grade level", meaning: "年级" }, { phrase: "make the grade", meaning: "达到标准" }],
    rootAffix: { explanation: "grade走 = 等级；年级" }
  },
  {
    id: "part",
    word: "part",
    syllables: ["part"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece; some but not all", zh: "\u90e8\u5206\uff1b\u89d2\u8272" }],
    examples: [{ sentence: "The cheese was cut into eight parts." }],
    inflections: {
      plural: "parts"
    },
    similarWords: [{"word": "start", "reason": "\u5f62\u8fd1", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "art", "reason": "\u5f62\u8fd1", "zh": "\u827a\u672f"}, {"word": "smart", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u667a\u80fd\u7684"}],
    phrases: [{ phrase: "part of", meaning: "一部分" }, { phrase: "take part in", meaning: "参加" }]
  },
  {
    id: "save",
    word: "save",
    syllables: ["save"],
    partOfSpeech: "v.",
    definitions: [{ en: "to keep something to use later", zh: "\u8282\u7701\uff1b\u62ef\u6551" }],
    examples: [{ sentence: "She is saving this cake to eat tomorrow." }],
    inflections: {
      pastTense: "saved",
      pastParticiple: "saved",
      thirdPerson: "saves",
      presentParticiple: "saving"
    },
    similarWords: [{"word": "leave", "reason": "\u5f62\u8fd1", "zh": "\u79bb\u5f00\uff1b\u51fa\u53d1"}, {"word": "wave", "reason": "\u5f62\u8fd1", "zh": "\u6ce2\u6d6a\uff1b\u6325\u624b"}, {"word": "have", "reason": "\u5f62\u8fd1", "zh": "\u6709\uff0c\u62e5\u6709"}],
    phrases: [{ phrase: "save money", meaning: "省钱" }, { phrase: "save time", meaning: "节省时间" }, { phrase: "save up", meaning: "储蓄" }]
  },
  {
    id: "set",
    word: "set",
    syllables: ["set"],
    partOfSpeech: "v.",
    definitions: [{ en: "to choose something", zh: "\u8bbe\u7f6e\uff1b\u4e00\u5957" }],
    examples: [{ sentence: "We need to set a date for our trip." }],
    inflections: {
      pastTense: "set",
      pastParticiple: "set",
      thirdPerson: "sets",
      presentParticiple: "setting"
    },
    similarWords: [{"word": "see", "reason": "\u5f62\u8fd1", "zh": "\u770b\u89c1\uff0c\u770b\u5230"}, {"word": "sit", "reason": "\u5f62\u8fd1", "zh": "\u5750"}, {"word": "let", "reason": "\u5f62\u8fd1", "zh": "\u8ba9\uff0c\u5141\u8bb8"}],
    phrases: [{ phrase: "set up", meaning: "设立" }, { phrase: "set off", meaning: "出发" }, { phrase: "set free", meaning: "释放" }]
  },
  {
    id: "space",
    word: "space",
    syllables: ["space"],
    partOfSpeech: "n.",
    definitions: [{ en: "an empty area where a person or thing can go", zh: "\u7a7a\u95f4\uff1b\u592a\u7a7a" }],
    examples: [{ sentence: "Their new apartment has a lot of space." }],
    similarWords: [{"word": "peace", "reason": "\u5f62\u8fd1", "zh": "\u548c\u5e73\uff1b\u5e73\u9759"}, {"word": "race", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u79cd\u65cf"}],
    phrases: [{ phrase: "space station", meaning: "空间站" }, { phrase: "parking space", meaning: "停车位" }]
  },
  {
    id: "special",
    word: "special",
    syllables: ["spe", "cial"],
    partOfSpeech: "adj.",
    definitions: [{ en: "different from the usual", zh: "\u7279\u522b\u7684\uff1b\u4e13\u95e8\u7684" }],
    examples: [{ sentence: "The store is offering special, low prices all week." }],
    inflections: {
      comparative: "more special",
      superlative: "most special"
    },
    rootAffix: { explanation: "spec\u770b + -ial = \u503c\u5f97\u770b\u7684\u2192\u7279\u522b\u7684" },
    similarWords: [{"word": "social", "reason": "\u5f62\u8fd1", "zh": "\u793e\u4f1a\u7684\uff1b\u793e\u4ea4\u7684"}, {"word": "material", "reason": "\u5f62\u8fd1", "zh": "\u6750\u6599\uff1b\u7269\u8d28"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aspec\u770b + -ial = \u503c\u5f97\u770b\u7684\u2192\u7279\u522b\u7684",
    phrases: [{ phrase: "special day", meaning: "特殊的日子" }, { phrase: "special offer", meaning: "特价" }]
  },
  {
    id: "cheer",
    word: "cheer",
    syllables: ["cheer"],
    partOfSpeech: "v.",
    definitions: [{ en: "to shout to show happiness or to make others feel good", zh: "\u6b22\u547c\uff1b\u52a0\u6cb9" }],
    examples: [{ sentence: "The fans are cheering for their favorite baseball team." }],
    inflections: {
      pastTense: "cheered",
      pastParticiple: "cheered",
      thirdPerson: "cheers",
      presentParticiple: "cheering"
    },
    similarWords: [{"word": "career", "reason": "\u5f62\u8fd1", "zh": "\u804c\u4e1a\uff1b\u751f\u6daf"}],
    phrases: [{ phrase: "cheer up", meaning: "振作起来" }, { phrase: "cheer on", meaning: "为...加油" }]
  },
  {
    id: "contest",
    word: "contest",
    syllables: ["contest"],
    partOfSpeech: "n.",
    definitions: [{ en: "an event in which there is a winner", zh: "\u6bd4\u8d5b\uff1b\u7ade\u8d5b" }],
    examples: [{ sentence: "Mila and Victor won the dance contest!" }],
    inflections: {
      plural: "contests"
    },
    similarWords: [{"word": "forest", "reason": "\u5f62\u8fd1", "zh": "\u68ee\u6797\uff1b\u6811\u6797"}, {"word": "suggest", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u6697\u793a"}, {"word": "honest", "reason": "\u5f62\u8fd1", "zh": "\u8bda\u5b9e\u7684\uff1b\u6b63\u76f4\u7684"}],
    phrases: [{ phrase: "speech contest", meaning: "演讲比赛" }, { phrase: "contest winner", meaning: "比赛赢家" }]
  },
  {
    id: "gift",
    word: "gift",
    syllables: ["gift"],
    partOfSpeech: "n.",
    definitions: [{ en: "something given to someone", zh: "\u793c\u7269\uff1b\u5929\u8d4b" }],
    examples: [{ sentence: "His gift came in a pretty red box." }],
    inflections: {
      plural: "gifts"
    },
    similarWords: [{"word": "lift", "reason": "\u5f62\u8fd1", "zh": "\u4e3e\u8d77\uff1b\u7535\u68af"}],
    phrases: [{ phrase: "gift card", meaning: "礼品卡" }, { phrase: "birthday gift", meaning: "生日礼物" }]
  },
  {
    id: "magazine",
    word: "magazine",
    syllables: ["magazine"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thin book that comes out once a week or month", zh: "\u6742\u5fd7\uff1b\u671f\u520a" }],
    examples: [{ sentence: "\u201cThe Week\u201d is my favorite news magazine." }],
    inflections: {
      plural: "magazines"
    },
    rootAffix: { explanation: "maga\u4ed3\u5e93 + -zine = \u77e5\u8bc6\u7684\u4ed3\u5e93\u2192\u6742\u5fd7" },
    similarWords: [{"word": "machine", "reason": "\u5f62\u8fd1", "zh": "\u673a\u5668\uff1b\u673a\u68b0"}, {"word": "medicine", "reason": "\u5f62\u8fd1", "zh": "\u836f\uff1b\u533b\u5b66"}, {"word": "imagine", "reason": "\u5f62\u8fd1", "zh": "\u60f3\u8c61\uff1b\u8bbe\u60f3"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amaga\u4ed3\u5e93 + -zine = \u77e5\u8bc6\u7684\u4ed3\u5e93\u2192\u6742\u5fd7",
    phrases: [{ phrase: "magazine rack", meaning: "杂志架" }, { phrase: "read a magazine", meaning: "读杂志" }]
  },
  {
    id: "perform",
    word: "perform",
    syllables: ["perform"],
    partOfSpeech: "v.",
    definitions: [{ en: "to do something like singing or acting in front of people", zh: "\u8868\u6f14\uff1b\u6267\u884c" }],
    examples: [{ sentence: "The popular singer performs all over the world." }],
    inflections: {
      pastTense: "performed",
      pastParticiple: "performed",
      thirdPerson: "performs",
      presentParticiple: "performing"
    },
    similarWords: [{"word": "inform", "reason": "\u5f62\u8fd1", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}, {"word": "uniform", "reason": "\u5f62\u8fd1", "zh": "\u5236\u670d\uff1b\u7edf\u4e00\u7684"}],
    phrases: [{ phrase: "perform well", meaning: "表现好" }, { phrase: "perform a play", meaning: "表演话剧" }],
    rootAffix: { explanation: "per-完全 + form形状 = 表演；执行" }
  },
  {
    id: "public",
    word: "public",
    syllables: ["pub", "lic"],
    partOfSpeech: "n.",
    definitions: [{ en: "(after in) a place where many people can see you", zh: "\u516c\u4f17\u7684\uff1b\u516c\u5171\u7684" }],
    examples: [{ sentence: "Shy people do not like to speak in public." }],
    inflections: {
      plural: "publics"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apub \u00b7 lic",
    phrases: [{ phrase: "in public", meaning: "公开地" }, { phrase: "public school", meaning: "公立学校" }],
    rootAffix: { explanation: "publ人民 + -ic = 公共的" },
    antonyms: [{ word: "private", zh: "私人的" }]
  },
  {
    id: "scene",
    word: "scene",
    syllables: ["scene"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of a play or movie", zh: "\u573a\u666f\uff1b\u666f\u8272" }],
    examples: [{ sentence: "The scene with the fight is the most exciting part of the play." }],
    inflections: {
      plural: "scenes"
    },
    similarWords: [{"word": "scenery", "reason": "\u62d3\u5c55", "zh": "风景；景色"}],
    phrases: [{ phrase: "crime scene", meaning: "犯罪现场" }, { phrase: "scene of", meaning: "...场景" }]
  },
  {
    id: "secret",
    word: "secret",
    syllables: ["secret"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is kept hidden from other people", zh: "\u79d8\u5bc6\u7684\uff1b\u79d8\u5bc6" }],
    examples: [{ sentence: "Greg is telling Jessica a secret. I wonder what it is!" }],
    inflections: {
      plural: "secrets"
    },
    similarWords: [{"word": "regret", "reason": "\u5f62\u8fd1", "zh": "\u540e\u6094\uff1b\u9057\u61be"}],
    phrases: [{ phrase: "secret of", meaning: "...的秘密" }, { phrase: "keep a secret", meaning: "保密" }]
  },
  {
    id: "stage",
    word: "stage",
    syllables: ["stage"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of a theater where people perform", zh: "\u821e\u53f0\uff1b\u9636\u6bb5" }],
    examples: [{ sentence: "Many great actors have performed on this stage." }],
    inflections: {
      plural: "stages"
    },
    similarWords: [{"word": "image", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u50cf\uff1b\u5f62\u8c61"}, {"word": "page", "reason": "\u5f62\u8fd1", "zh": "\u9875\uff0c\u9875\u9762"}, {"word": "state", "reason": "\u5f62\u8fd1", "zh": "\u72b6\u6001\uff1b\u5dde\uff1b\u9648\u8ff0"}],
    phrases: [{ phrase: "stage fright", meaning: "怯场" }, { phrase: "on stage", meaning: "在舞台上" }]
  },
  {
    id: "unique",
    word: "unique",
    syllables: ["unique"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not like anyone or anything else", zh: "\u72ec\u7279\u7684\uff1b\u552f\u4e00\u7684" }],
    examples: [{ sentence: "That man\u2019s hair is unique." }],
    inflections: {
      comparative: "more unique",
      superlative: "most unique"
    },
    phrases: [{ phrase: "unique to", meaning: "...特有的" }, { phrase: "unique style", meaning: "独特的风格" }],
    rootAffix: { explanation: "uni-一 + -que = 独特的" },
    synonyms: [{"word": "special", "zh": "独特的"}],
    similarWords: [{"word": "uniqueness", "reason": "\u62d3\u5c55", "zh": "独特性"}]
  },
  {
    id: "electricity",
    word: "electricity",
    syllables: ["electricity"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used to give light and make things work", zh: "\u7535\uff1b\u7535\u529b" }],
    examples: [{ sentence: "Humans use a lot of electricity." }],
    phrases: [{ phrase: "save electricity", meaning: "省电" }, { phrase: "generation of electricity", meaning: "发电" }],
    similarWords: [{"word": "electric", "reason": "\u62d3\u5c55", "zh": "电的"}]
  },
  {
    id: "fact",
    word: "fact",
    syllables: ["fact"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is true", zh: "\u4e8b\u5b9e\uff1b\u771f\u76f8" }],
    examples: [{ sentence: "South Korea is a country in Asia. That is a fact." }],
    inflections: {
      plural: "facts"
    },
    similarWords: [{"word": "act", "reason": "\u5f62\u8fd1", "zh": "\u884c\u52a8\uff0c\u884c\u4e3a"}, {"word": "fast", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff1b\u8fc5\u901f\u5730"}, {"word": "fat", "reason": "\u5f62\u8fd1", "zh": "\u80d6\u7684"}],
    phrases: [{ phrase: "in fact", meaning: "事实上" }, { phrase: "fact or fiction", meaning: "事实还是虚构" }],
    rootAffix: { explanation: "fact做 = 事实" }
  },
  {
    id: "fold",
    word: "fold",
    syllables: ["fold"],
    partOfSpeech: "v.",
    definitions: [{ en: "to bend one part of something over another part", zh: "\u6298\u53e0\uff1b\u6298\u75d5" }],
    examples: [{ sentence: "She folds her clothes to make more space for them." }],
    inflections: {
      pastTense: "folded",
      pastParticiple: "folded",
      thirdPerson: "folds",
      presentParticiple: "folding"
    },
    similarWords: [{"word": "hold", "reason": "\u5f62\u8fd1", "zh": "\u62ff\u7740"}, {"word": "cold", "reason": "\u5f62\u8fd1", "zh": "\u51b7\u7684\uff0c\u5bd2\u51b7\u7684"}, {"word": "old", "reason": "\u5f62\u8fd1", "zh": "\u8001\u7684"}],
    phrases: [{ phrase: "fold up", meaning: "折叠起来" }, { phrase: "fold in half", meaning: "对折" }]
  },
  {
    id: "key",
    word: "key",
    syllables: ["key"],
    partOfSpeech: "n.",
    definitions: [{ en: "an object used to lock or unlock a door or to start a car", zh: "\u94a5\u5319\uff1b\u5173\u952e" }],
    examples: [{ sentence: "I usually keep my house key in a secret place." }],
    inflections: {
      plural: "keys"
    },
    phrases: [{ phrase: "key to", meaning: "...的关键" }, { phrase: "key point", meaning: "关键点" }],
    similarWords: [{"word": "keyboard", "reason": "\u62d3\u5c55", "zh": "键盘"}, {"word": "keyhole", "reason": "\u62d3\u5c55", "zh": "钥匙孔"}]
  },
  {
    id: "mind",
    word: "mind",
    syllables: ["mind"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be unhappy about something, usually used with not", zh: "\u5934\u8111\uff1b\u4ecb\u610f" }],
    examples: [{ sentence: "She does not mind if you borrow her car." }],
    inflections: {
      pastTense: "minded",
      pastParticiple: "minded",
      thirdPerson: "minds",
      presentParticiple: "minding"
    },
    similarWords: [{"word": "blind", "reason": "\u5f62\u8fd1", "zh": "\u76f2\u7684\uff1b\u778e\u7684"}, {"word": "kind", "reason": "\u5f62\u8fd1", "zh": "\u79cd\u7c7b\uff0c\u5584\u826f\u7684"}, {"word": "find", "reason": "\u5f62\u8fd1", "zh": "\u627e\u5230\uff0c\u53d1\u73b0"}],
    phrases: [{ phrase: "make up one's mind", meaning: "下定决心" }, { phrase: "change one's mind", meaning: "改变主意" }]
  },
  {
    id: "power",
    word: "power",
    syllables: ["power"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you cannot see that is used to make things work", zh: "\u529b\u91cf\uff1b\u7535\u529b" }],
    examples: [{ sentence: "They turned the power off for a special event." }],
    similarWords: [{"word": "tower", "reason": "\u5f62\u8fd1", "zh": "\u5854\uff1b\u9ad8\u697c"}, {"word": "flower", "reason": "\u5f62\u8fd1", "zh": "\u82b1\uff0c\u82b1\u6735"}, {"word": "answer", "reason": "\u5f62\u8fd1", "zh": "\u56de\u7b54\uff0c\u7b54\u6848"}],
    phrases: [{ phrase: "power station", meaning: "发电站" }, { phrase: "come into power", meaning: "上台执政" }]
  },
  {
    id: "sock",
    word: "sock",
    syllables: ["sock"],
    partOfSpeech: "n.",
    definitions: [{ en: "a soft piece of clothing that covers the foot", zh: "\u889c\u5b50\uff1b\u77ed\u889c" }],
    examples: [{ sentence: "Jessica gave Holly socks for her birthday." }],
    inflections: {
      plural: "socks"
    },
    rootAffix: { explanation: "sock\u889c\u5b50 = \u889c\u5b50" },
    similarWords: [{"word": "rock", "reason": "\u5f62\u8fd1", "zh": "\u5ca9\u77f3"}, {"word": "block", "reason": "\u5f62\u8fd1", "zh": "\u5757\uff1b\u8857\u533a\uff1b\u963b\u6321"}, {"word": "knock", "reason": "\u5f62\u8fd1", "zh": "\u6572\uff1b\u6253"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1asock\u889c\u5b50 = \u889c\u5b50",
    phrases: [{ phrase: "a pair of socks", meaning: "一双袜子" }, { phrase: "sock puppet", meaning: "袜子木偶" }]
  },
  {
    id: "solve",
    word: "solve",
    syllables: ["solve"],
    partOfSpeech: "v.",
    definitions: [{ en: "to find the answer", zh: "\u89e3\u51b3\uff1b\u89e3\u7b54" }],
    examples: [{ sentence: "He has to choose the correct path to solve the puzzle." }],
    inflections: {
      pastTense: "solved",
      pastParticiple: "solved",
      thirdPerson: "solves",
      presentParticiple: "solving"
    },
    similarWords: [{"word": "solution", "reason": "\u62d3\u5c55", "zh": "解决方案"}],
    phrases: [{ phrase: "solve a problem", meaning: "解决问题" }, { phrase: "solve the puzzle", meaning: "解谜" }]
  },
  {
    id: "stick",
    word: "stick",
    syllables: ["stick"],
    partOfSpeech: "v.",
    definitions: [{ en: "to attach to something", zh: "\u68cd\u5b50\uff1b\u7c98\u4f4f" }],
    examples: [{ sentence: "Marsha sticks special notes on the door for her husband." }],
    inflections: {
      pastTense: "stuck",
      pastParticiple: "stuck",
      thirdPerson: "sticks",
      presentParticiple: "sticking"
    },
    similarWords: [{"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}, {"word": "pick", "reason": "\u5f62\u8fd1", "zh": "\u6311\u9009"}],
    phrases: [{ phrase: "stick to", meaning: "坚持" }, { phrase: "stick out", meaning: "伸出" }]
  },
  {
    id: "traffic",
    word: "traffic",
    syllables: ["traffic"],
    partOfSpeech: "n.",
    definitions: [{ en: "cars on the road", zh: "\u4ea4\u901a\uff1b\u8f66\u8f86" }],
    examples: [{ sentence: "It is not safe to drive in this area. There is too much traffic." }],
    phrases: [{ phrase: "traffic light", meaning: "交通灯" }, { phrase: "traffic jam", meaning: "堵车" }],
    rootAffix: { explanation: "traf交通 + -fic = 交通" }
  },
  {
    id: "advice",
    word: "advice",
    syllables: ["advice"],
    partOfSpeech: "n.",
    definitions: [{ en: "an opinion about what someone should or should not do", zh: "\u5efa\u8bae\uff1b\u5fe0\u544a" }],
    examples: [{ sentence: "He gives them advice about saving money." }],
    similarWords: [{"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}, {"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "choice", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6289\u62e9"}],
    phrases: [{ phrase: "give advice", meaning: "给建议" }, { phrase: "take advice", meaning: "接受建议" }],
    rootAffix: { explanation: "ad-去 + vice看 = 忠告" }
  },
  {
    id: "case",
    word: "case",
    syllables: ["case"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small box or bag", zh: "\u6848\u4f8b\uff1b\u76d2\u5b50" }],
    examples: [{ sentence: "Max will buy a larger pencil case when he is in the sixth grade." }],
    inflections: {
      plural: "cases"
    },
    similarWords: [{"word": "base", "reason": "\u5f62\u8fd1", "zh": "\u57fa\u7840\uff1b\u57fa\u5730"}, {"word": "care", "reason": "\u5f62\u8fd1", "zh": "\u5173\u5fc3"}, {"word": "cause", "reason": "\u5f62\u8fd1", "zh": "\u539f\u56e0\uff1b\u5f15\u8d77\uff1b\u5bfc\u81f4"}],
    phrases: [{ phrase: "in case", meaning: "以防" }, { phrase: "in that case", meaning: "如果是那样" }]
  },
  {
    id: "exam",
    word: "exam",
    syllables: ["exam"],
    partOfSpeech: "n.",
    definitions: [{ en: "a test", zh: "\u8003\u8bd5\uff1b\u68c0\u67e5" }],
    examples: [{ sentence: "He takes an exam to attend the new school." }],
    inflections: {
      plural: "exams"
    },
    phrases: [{ phrase: "exam paper", meaning: "试卷" }, { phrase: "final exam", meaning: "期末考试" }],
    similarWords: [{"word": "examine", "reason": "\u62d3\u5c55", "zh": "检查"}]
  },
  {
    id: "happen",
    word: "happen",
    syllables: ["hap", "pen"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take place", zh: "\u53d1\u751f\uff1b\u78b0\u5de7" }],
    examples: [{ sentence: "The car crash happened in front of the theater." }],
    inflections: {
      pastTense: "happened",
      pastParticiple: "happened",
      thirdPerson: "happens",
      presentParticiple: "happening"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ahap \u00b7 pen",
    phrases: [{ phrase: "happen to", meaning: "碰巧" }, { phrase: "what happened", meaning: "发生了什么" }],
    similarWords: [{"word": "happening", "reason": "\u62d3\u5c55", "zh": "发生的事"}]
  },
  {
    id: "lazy",
    word: "lazy",
    syllables: ["lazy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not wanting to work or move", zh: "\u61d2\u60f0\u7684\uff1b\u61d2\u6563\u7684" }],
    examples: [{ sentence: "John is smart, but he is very lazy." }],
    inflections: {
      comparative: "lazier",
      superlative: "laziest"
    },
    similarWords: [{"word": "crazy", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684"}, {"word": "lady", "reason": "\u5f62\u8fd1", "zh": "\u5973\u58eb\uff0c\u5c0f\u59d0"}, {"word": "lay", "reason": "\u5f62\u8fd1", "zh": "\u653e\u7f6e\uff1b\u4ea7\u5375"}],
    phrases: [{ phrase: "lazy boy", meaning: "懒男孩" }, { phrase: "lazy afternoon", meaning: "慵懒的下午" }],
    antonyms: [{ word: "active", zh: "活跃的" }]
  },
  {
    id: "message",
    word: "message",
    syllables: ["mes", "sage"],
    partOfSpeech: "n.",
    definitions: [{ en: "information that is sent or given to someone", zh: "\u6d88\u606f\uff1b\u7559\u8a00" }],
    examples: [{ sentence: "Gary received an important message last night." }],
    inflections: {
      plural: "messages"
    },
    rootAffix: { explanation: "miss\u9001\u51fa + -age = \u9001\u51fa\u7684\u4e1c\u897f\u2192\u6d88\u606f" },
    similarWords: [{"word": "language", "reason": "\u5f62\u8fd1", "zh": "\u8bed\u8a00"}, {"word": "village", "reason": "\u5f62\u8fd1", "zh": "\u6751\u5e84\uff1b\u4e61\u6751"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amiss\u9001\u51fa + -age = \u9001\u51fa\u7684\u4e1c\u897f\u2192\u6d88\u606f",
    phrases: [{ phrase: "leave a message", meaning: "留言" }, { phrase: "text message", meaning: "短信" }]
  },
  {
    id: "stupid",
    word: "stupid",
    syllables: ["stupid"],
    partOfSpeech: "adj.",
    definitions: [{ en: "dumb; foolish", zh: "\u611a\u8822\u7684\uff1b\u7b28\u7684" }],
    examples: [{ sentence: "Riding down the rocks in the toy car is a stupid idea." }],
    inflections: {
      comparative: "more stupid",
      superlative: "most stupid"
    },
    phrases: [{ phrase: "stupid thing", meaning: "蠢事" }, { phrase: "how stupid", meaning: "真蠢" }],
    synonyms: [{"word": "foolish", "zh": "愚蠢的"}],
    similarWords: [{"word": "stupidity", "reason": "\u62d3\u5c55", "zh": "愚蠢"}],
    antonyms: [{ word: "clever", zh: "聪明的" }, { word: "smart", zh: "聪明的" }]
  },
  {
    id: "succeed",
    word: "succeed",
    syllables: ["suc", "ceed"],
    partOfSpeech: "v.",
    definitions: [{ en: "to do well; to do what you tried to do", zh: "\u6210\u529f\uff1b\u8fbe\u6210" }],
    examples: [{ sentence: "Pam\u2019s family is happy that she succeeded in school." }],
    inflections: {
      pastTense: "succeeded",
      pastParticiple: "succeeded",
      thirdPerson: "succeeds",
      presentParticiple: "succeeding"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asuc \u00b7 ceed",
    phrases: [{ phrase: "succeed in", meaning: "成功做某事" }, { phrase: "succeed to do", meaning: "成功做" }],
    rootAffix: { explanation: "suc-下 + ceed走 = 成功" },
    similarWords: [{"word": "success", "reason": "\u62d3\u5c55", "zh": "成功"}]
  },
  {
    id: "terrible",
    word: "terrible",
    syllables: ["terrible"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very bad", zh: "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684" }],
    examples: [{ sentence: "Dan got a terrible grade on his exam." }],
    inflections: {
      comparative: "more terrible",
      superlative: "most terrible"
    },
    rootAffix: { explanation: "terr\u5bb3\u6015 + -ible = \u53ef\u6015\u7684" },
    similarWords: [{"word": "possible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u80fd\u7684"}, {"word": "trouble", "reason": "\u5f62\u8fd1", "zh": "\u9ebb\u70e6\uff1b\u56f0\u96be"}, {"word": "available", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u7528\u7684\uff1b\u53ef\u83b7\u5f97\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aterr\u5bb3\u6015 + -ible = \u53ef\u6015\u7684",
    phrases: [{ phrase: "terrible weather", meaning: "可怕的天气" }, { phrase: "feel terrible", meaning: "感觉很糟" }],
    synonyms: [{"word": "awful", "zh": "糟糕的"}],
    antonyms: [{ word: "wonderful", zh: "极好的" }]
  },
  {
    id: "upset",
    word: "upset",
    syllables: ["upset"],
    partOfSpeech: "adj.",
    definitions: [{ en: "worried; not happy", zh: "\u96be\u8fc7\u7684\uff1b\u4f7f\u70e6\u607c" }],
    examples: [{ sentence: "She is upset because she cannot find the book she needs." }],
    inflections: {
      comparative: "upseter",
      superlative: "upsetest"
    },
    phrases: [{ phrase: "upset about", meaning: "对...烦恼" }, { phrase: "get upset", meaning: "烦恼" }],
    synonyms: [{"word": "sad", "zh": "难过的"}, {"word": "worried", "zh": "不安的"}],
    similarWords: [{"word": "upsetting", "reason": "\u62d3\u5c55", "zh": "令人不安的"}]
  },
  {
    id: "airplane",
    word: "airplane",
    syllables: ["airplane"],
    partOfSpeech: "n.",
    definitions: [{ en: "a flying machine", zh: "\u98de\u673a" }],
    examples: [{ sentence: "The airplane flies through the sky." }],
    inflections: {
      plural: "airplanes"
    },
    phrases: [{ phrase: "by airplane", meaning: "乘飞机" }, { phrase: "airplane mode", meaning: "飞行模式" }],
    synonyms: [{"word": "plane", "zh": "飞机"}]
  },
  {
    id: "airport",
    word: "airport",
    syllables: ["airport"],
    partOfSpeech: "n.",
    definitions: [{ en: "a place where airplanes arrive and leave", zh: "\u673a\u573a\uff1b\u822a\u7a7a\u7ad9" }],
    examples: [{ sentence: "The airplane arrived at the airport early." }],
    inflections: {
      plural: "airports"
    },
    similarWords: [{"word": "support", "reason": "\u5f62\u8fd1", "zh": "\u652f\u6301\uff1b\u652f\u6491"}, {"word": "report", "reason": "\u5f62\u8fd1", "zh": "\u62a5\u544a\uff1b\u62a5\u9053"}],
    phrases: [{ phrase: "at the airport", meaning: "在机场" }, { phrase: "airport terminal", meaning: "航站楼" }],
    rootAffix: { explanation: "air空中 + port港口 = 机场" }
  },
  {
    id: "culture",
    word: "culture",
    syllables: ["cul", "ture"],
    partOfSpeech: "n.",
    definitions: [{ en: "the way of life of a group of people", zh: "\u6587\u5316\uff1b\u6587\u660e" }],
    examples: [{ sentence: "Melissa went to Japan to learn about its unique culture." }],
    inflections: {
      plural: "cultures"
    },
    similarWords: [{"word": "future", "reason": "\u5f62\u8fd1", "zh": "\u672a\u6765"}, {"word": "nature", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u7136\uff1b\u672c\u6027"}, {"word": "picture", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u753b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acul \u00b7 ture",
    phrases: [{ phrase: "culture shock", meaning: "文化冲击" }, { phrase: "traditional culture", meaning: "传统文化" }],
    rootAffix: { explanation: "cult种植 + -ure = 文化" }
  },
  {
    id: "decide",
    word: "decide",
    syllables: ["de", "cide"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a choice", zh: "\u51b3\u5b9a\uff1b\u4e0b\u51b3\u5fc3" }],
    examples: [{ sentence: "She decided to wear the blue shirt to the event." }],
    inflections: {
      pastTense: "decided",
      pastParticiple: "decided",
      thirdPerson: "decides",
      presentParticiple: "deciding"
    },
    rootAffix: { explanation: "de-\u79bb\u5f00 + cid\u5207 + -e = \u5207\u5f00\u2192\u51b3\u5b9a" },
    similarWords: [{"word": "guide", "reason": "\u5f62\u8fd1", "zh": "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc"}, {"word": "provide", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u4f9b\uff1b\u4f9b\u5e94"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ade-\u79bb\u5f00 + cid\u5207 + -e = \u5207\u5f00\u2192\u51b3\u5b9a",
    phrases: [{ phrase: "decide to do", meaning: "决定做" }, { phrase: "decide on", meaning: "决定" }]
  },
  {
    id: "leave",
    word: "leave",
    syllables: ["leave"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go away from", zh: "\u79bb\u5f00\uff1b\u51fa\u53d1" }],
    examples: [{ sentence: "They are leaving their office to go home." }],
    inflections: {
      pastTense: "left",
      pastParticiple: "left",
      thirdPerson: "leaves",
      presentParticiple: "leaving"
    },
    similarWords: [{"word": "wave", "reason": "\u5f62\u8fd1", "zh": "\u6ce2\u6d6a\uff1b\u6325\u624b"}, {"word": "have", "reason": "\u5f62\u8fd1", "zh": "\u6709\uff0c\u62e5\u6709"}, {"word": "save", "reason": "\u5f62\u8fd1", "zh": "\u8282\u7701\uff1b\u62ef\u6551"}],
    phrases: [{ phrase: "leave for", meaning: "出发去" }, { phrase: "leave behind", meaning: "留下" }, { phrase: "leave out", meaning: "省略" }],
    antonyms: [{ word: "arrive", zh: "到达" }, { word: "stay", zh: "停留" }]
  },
  {
    id: "modern",
    word: "modern",
    syllables: ["modern"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of the latest kind", zh: "\u73b0\u4ee3\u7684\uff1b\u65b0\u5f0f\u7684" }],
    examples: [{ sentence: "I saw Jeff\u2019s modern house in a magazine." }],
    inflections: {
      comparative: "more modern",
      superlative: "most modern"
    },
    similarWords: [{"word": "pattern", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u6848\uff1b\u6a21\u5f0f"}, {"word": "western", "reason": "\u5f62\u8fd1", "zh": "\u897f\u65b9\u7684\uff1b\u897f\u90e8\u7684"}],
    phrases: [{ phrase: "modern life", meaning: "现代生活" }, { phrase: "modern art", meaning: "现代艺术" }],
    antonyms: [{ word: "ancient", zh: "古代的" }]
  },
  {
    id: "order",
    word: "order",
    syllables: ["order"],
    partOfSpeech: "v.",
    definitions: [{ en: "to ask for food or drink at a restaurant", zh: "\u987a\u5e8f\uff1b\u8ba2\u5355\uff1b\u547d\u4ee4" }],
    examples: [{ sentence: "They took the waiter\u2019s advice and ordered fish for dinner." }],
    inflections: {
      pastTense: "ordered",
      pastParticiple: "ordered",
      thirdPerson: "orders",
      presentParticiple: "ordering"
    },
    similarWords: [{"word": "wonder", "reason": "\u5f62\u8fd1", "zh": "\u60f3\u77e5\u9053"}],
    phrases: [{ phrase: "in order", meaning: "按顺序" }, { phrase: "in order to", meaning: "为了" }],
    antonyms: [{ word: "disorder", zh: "混乱" }]
  },
  {
    id: "sand",
    word: "sand",
    syllables: ["sand"],
    partOfSpeech: "n.",
    definitions: [{ en: "very tiny pieces of rock", zh: "\u6c99\u5b50\uff1b\u6c99\u7c92" }],
    examples: [{ sentence: "Olivia wrote a message in the sand." }],
    similarWords: [{"word": "land", "reason": "\u5f62\u8fd1", "zh": "\u571f\u5730"}, {"word": "band", "reason": "\u5f62\u8fd1", "zh": "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5"}, {"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}],
    phrases: [{ phrase: "sand castle", meaning: "沙堡" }, { phrase: "sand and water", meaning: "沙和水" }]
  },
  {
    id: "spot",
    word: "spot",
    syllables: ["spot"],
    partOfSpeech: "n.",
    definitions: [{ en: "an area, place, or location", zh: "\u5730\u70b9\uff1b\u6591\u70b9\uff1b\u770b\u89c1" }],
    examples: [{ sentence: "The beach is a popular spot in the summer." }],
    inflections: {
      plural: "spots"
    },
    similarWords: [{"word": "pot", "reason": "\u5f62\u8fd1", "zh": "\u9505\uff1b\u58f6\uff1b\u7f50"}, {"word": "sport", "reason": "\u5f62\u8fd1", "zh": "\u8fd0\u52a8\uff1b\u4f53\u80b2"}],
    phrases: [{ phrase: "on the spot", meaning: "当场" }, { phrase: "spot light", meaning: "聚光灯" }]
  },
  {
    id: "strange",
    word: "strange",
    syllables: ["strange"],
    partOfSpeech: "adj.",
    definitions: [{ en: "different from what is usual", zh: "\u5947\u602a\u7684\uff1b\u964c\u751f\u7684" }],
    examples: [{ sentence: "The strange animal looks like it is dancing." }],
    inflections: {
      comparative: "more strange",
      superlative: "most strange"
    },
    synonyms: [{"word": "odd", "zh": "\u5947\u602a\u7684\uff1b\u5947\u6570\u7684"}, {"word": "weird", "zh": "古怪的；诡异的"}, {"word": "unusual", "zh": "不常见的；特别的"}],
    similarWords: [{"word": "exchange", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6362\uff1b\u5151\u6362"}, {"word": "change", "reason": "\u5f62\u8fd1", "zh": "\u6539\u53d8\uff1b\u96f6\u94b1"}],
    phrases: [{ phrase: "strange thing", meaning: "奇怪的事" }, { phrase: "feel strange", meaning: "感觉奇怪" }],
    antonyms: [{ word: "familiar", zh: "熟悉的" }, { word: "normal", zh: "正常的" }]
  },
  {
    id: "bill",
    word: "bill",
    syllables: ["bill"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of paper money", zh: "\u8d26\u5355\uff1b\u949e\u7968" }],
    examples: [{ sentence: "Josh folds the bills before he puts them in his pocket." }],
    inflections: {
      plural: "bills"
    },
    similarWords: [{"word": "ill", "reason": "\u5f62\u8fd1", "zh": "\u751f\u75c5\u7684"}, {"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "still", "reason": "\u5f62\u8fd1", "zh": "\u4ecd\u7136\uff1b\u9759\u6b62\u7684"}],
    phrases: [{ phrase: "pay the bill", meaning: "付账" }, { phrase: "bill of", meaning: "...的账单" }]
  },
  {
    id: "blow",
    word: "blow",
    syllables: ["blow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move something with air", zh: "\u5439\uff1b\u6253\u51fb" }],
    examples: [{ sentence: "Kerri blows the seeds into the air." }],
    inflections: {
      pastTense: "blowed",
      pastParticiple: "blowed",
      thirdPerson: "blows",
      presentParticiple: "blowing"
    },
    similarWords: [{"word": "allow", "reason": "\u5f62\u8fd1", "zh": "\u5141\u8bb8\uff1b\u51c6\u8bb8"}, {"word": "low", "reason": "\u5f62\u8fd1", "zh": "\u4f4e\u7684"}, {"word": "flow", "reason": "\u5f62\u8fd1", "zh": "\u6d41\u52a8\uff1b\u6d41\u91cf"}],
    phrases: [{ phrase: "blow out", meaning: "吹灭" }, { phrase: "blow away", meaning: "吹走" }]
  },
  {
    id: "century",
    word: "century",
    syllables: ["cen", "tu", "ry"],
    partOfSpeech: "n.",
    definitions: [{ en: "one hundred years", zh: "\u4e16\u7eaa\uff1b\u767e\u5e74" }],
    examples: [{ sentence: "Bob was born one century ago." }],
    inflections: {
      plural: "centuries"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acen \u00b7 tu \u00b7 ry",
    similarWords: [{"word": "cent", "reason": "\u62d3\u5c55", "zh": "分币"}],
    phrases: [{ phrase: "21st century", meaning: "21世纪" }, { phrase: "centuries of", meaning: "几个世纪的" }],
    rootAffix: { explanation: "cent百 + -ury = 世纪" }
  },
  {
    id: "custom",
    word: "custom",
    syllables: ["custom"],
    partOfSpeech: "n.",
    definitions: [{ en: "the usual way of doing something in a culture", zh: "\u4e60\u4fd7\uff1b\u98ce\u4fd7" }],
    examples: [{ sentence: "It is a custom in many countries to give birthday gifts." }],
    inflections: {
      plural: "customs"
    },
    similarWords: [{"word": "bottom", "reason": "\u5f62\u8fd1", "zh": "\u5e95\u90e8\uff1b\u5e95\u7aef"}, {"word": "customer", "reason": "\u62d3\u5c55", "zh": "\u987e\u5ba2\uff1b\u5ba2\u6237"}],
    phrases: [{ phrase: "local custom", meaning: "当地习俗" }, { phrase: "custom made", meaning: "定制的" }]
  },
  {
    id: "experience",
    word: "experience",
    syllables: ["ex", "pe", "ri", "ence"],
    partOfSpeech: "v.",
    definitions: [{ en: "to see, feel, or do something", zh: "\u7ecf\u9a8c\uff1b\u7ecf\u5386" }],
    examples: [{ sentence: "They want to experience sleeping in nature." }],
    inflections: {
      pastTense: "experienced",
      pastParticiple: "experienced",
      thirdPerson: "experiences",
      presentParticiple: "experiencing"
    },
    rootAffix: { explanation: "ex-\u51fa + per\u5c1d\u8bd5 + -ence = \u5c1d\u8bd5\u51fa\u6765\u7684\u4e1c\u897f\u2192\u7ecf\u9a8c" },
    similarWords: [{"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}, {"word": "difference", "reason": "\u5f62\u8fd1", "zh": "\u4e0d\u540c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + per\u5c1d\u8bd5 + -ence = \u5c1d\u8bd5\u51fa\u6765\u7684\u4e1c\u897f\u2192\u7ecf\u9a8c",
    phrases: [{ phrase: "work experience", meaning: "工作经验" }, { phrase: "learn from experience", meaning: "从经验中学习" }]
  },
  {
    id: "international",
    word: "international",
    syllables: ["in", "ter", "na", "tion", "al"],
    partOfSpeech: "adj.",
    definitions: [{ en: "happening in or between two or more countries", zh: "\u56fd\u9645\u7684\uff1b\u4e16\u754c\u7684" }],
    examples: [{ sentence: "Many people attended the international meeting." }],
    inflections: {
      comparative: "more international",
      superlative: "most international"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ain \u00b7 ter \u00b7 na \u00b7 tion \u00b7 al",
    phrases: [{ phrase: "international school", meaning: "国际学校" }, { phrase: "international trade", meaning: "国际贸易" }],
    rootAffix: { explanation: "inter-在…之间 + nation国家 + -al = 国际的" }
  },
  {
    id: "island",
    word: "island",
    syllables: ["island"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of land in the middle of water", zh: "\u5c9b\u5c7f\uff1b\u5c9b" }],
    examples: [{ sentence: "There is no electricity on the island." }],
    inflections: {
      plural: "islands"
    },
    similarWords: [{"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}, {"word": "husband", "reason": "\u5f62\u8fd1", "zh": "\u4e08\u592b"}, {"word": "grand", "reason": "\u5f62\u8fd1", "zh": "\u5b8f\u4f1f\u7684"}],
    mnemonics: "is(\u662f) + land(\u9646\u5730) = \u662f\u9646\u5730\uff08\u5728\u6d77\u4e0a\uff09\u2192\u5c9b\u5c7f",
    phrases: [{ phrase: "on the island", meaning: "在岛上" }, { phrase: "desert island", meaning: "荒岛" }]
  },
  {
    id: "journey",
    word: "journey",
    syllables: ["journey"],
    partOfSpeech: "n.",
    definitions: [{ en: "a long trip", zh: "\u65c5\u884c\uff1b\u65c5\u7a0b" }],
    examples: [{ sentence: "They are going on a journey through the sand." }],
    inflections: {
      plural: "journeys"
    },
    phrases: [{ phrase: "journey to", meaning: "去...的旅程" }, { phrase: "begin a journey", meaning: "开始旅程" }],
    synonyms: [{"word": "trip", "zh": "旅行"}]
  },
  {
    id: "meal",
    word: "meal",
    syllables: ["meal"],
    partOfSpeech: "n.",
    definitions: [{ en: "food that is prepared and eaten", zh: "\u9910\uff1b\u996d" }],
    examples: [{ sentence: "She made a terrible meal. No one liked it." }],
    inflections: {
      plural: "meals"
    },
    similarWords: [{"word": "steal", "reason": "\u5f62\u8fd1", "zh": "\u5077\uff1b\u7a83\u53d6"}, {"word": "real", "reason": "\u5f62\u8fd1", "zh": "\u771f\u5b9e\u7684\uff1b\u771f\u6b63\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}],
    phrases: [{ phrase: "have a meal", meaning: "吃饭" }, { phrase: "meal time", meaning: "吃饭时间" }]
  },
  {
    id: "return",
    word: "return",
    syllables: ["return"],
    partOfSpeech: "v.",
    definitions: [{ en: "to come back after being away", zh: "\u8fd4\u56de\uff1b\u5f52\u8fd8" }],
    examples: [{ sentence: "We are always happy to return home." }],
    inflections: {
      pastTense: "returned",
      pastParticiple: "returned",
      thirdPerson: "returns",
      presentParticiple: "returning"
    },
    similarWords: [{"word": "turn", "reason": "\u62d3\u5c55", "zh": "\u8f6c"}],
    phrases: [{ phrase: "return to", meaning: "回到" }, { phrase: "in return", meaning: "作为回报" }],
    rootAffix: { explanation: "re-回/再 + turn转 = 返回；归还" }
  },
  {
    id: "actually",
    word: "actually",
    syllables: ["actually"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in fact", zh: "\u5b9e\u9645\u4e0a\uff1b\u4e8b\u5b9e\u4e0a" }],
    examples: [{ sentence: "Actually, we do not mind waiting for you at the airport." }],
    similarWords: [{"word": "finally", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\uff1b\u7ec8\u4e8e"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}],
    phrases: [{ phrase: "actually I", meaning: "其实我" }, { phrase: "not actually", meaning: "实际上不" }],
    rootAffix: { explanation: "actual实际的 + -ly = 实际上" }
  },
  {
    id: "camp",
    word: "camp",
    syllables: ["camp"],
    partOfSpeech: "v.",
    definitions: [{ en: "to sleep outside in a tent", zh: "\u9732\u8425\uff1b\u8425\u5730" }],
    examples: [{ sentence: "They camped on an island." }],
    inflections: {
      pastTense: "camped",
      pastParticiple: "camped",
      thirdPerson: "camps",
      presentParticiple: "camping"
    },
    similarWords: [{"word": "lamp", "reason": "\u5f62\u8fd1", "zh": "\u706f"}, {"word": "cap", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}],
    phrases: [{ phrase: "summer camp", meaning: "夏令营" }, { phrase: "go camping", meaning: "去露营" }]
  },
  {
    id: "collect",
    word: "collect",
    syllables: ["col", "lect"],
    partOfSpeech: "v.",
    definitions: [{ en: "to bring things together into one group", zh: "\u6536\u96c6\uff1b\u91c7\u96c6" }],
    examples: [{ sentence: "She collects shells that she finds in the sand." }],
    inflections: {
      pastTense: "collected",
      pastParticiple: "collected",
      thirdPerson: "collects",
      presentParticiple: "collecting"
    },
    rootAffix: { explanation: "col-\u4e00\u8d77 + lect\u9009\u62e9 = \u9009\u5230\u4e00\u8d77\u2192\u6536\u96c6" },
    similarWords: [{"word": "select", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6311\u9009"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acol-\u4e00\u8d77 + lect\u9009\u62e9 = \u9009\u5230\u4e00\u8d77\u2192\u6536\u96c6",
    phrases: [{ phrase: "collect stamps", meaning: "集邮" }, { phrase: "collect money", meaning: "筹钱" }],
    synonyms: [{"word": "gather", "zh": "收集"}]
  },
  {
    id: "form",
    word: "form",
    syllables: ["form"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make", zh: "\u5f62\u5f0f\uff1b\u8868\u683c\uff1b\u5f62\u6210" }],
    examples: [{ sentence: "He forms a pot with his hands." }],
    inflections: {
      pastTense: "formed",
      pastParticiple: "formed",
      thirdPerson: "forms",
      presentParticiple: "forming"
    },
    similarWords: [{"word": "storm", "reason": "\u5f62\u8fd1", "zh": "\u66b4\u98ce\u96e8\uff1b\u98ce\u66b4"}, {"word": "farm", "reason": "\u5f62\u8fd1", "zh": "\u519c\u573a"}, {"word": "inform", "reason": "\u62d3\u5c55", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}],
    phrases: [{ phrase: "in the form of", meaning: "以...形式" }, { phrase: "form a group", meaning: "组成小组" }],
    rootAffix: { explanation: "form形状 = 形式；表格" }
  },
  {
    id: "kick",
    word: "kick",
    syllables: ["kick"],
    partOfSpeech: "v.",
    definitions: [{ en: "to hit something with your foot", zh: "\u8e22\uff1b\u8e22\u817f" }],
    examples: [{ sentence: "Lee kicked the ball to Henry." }],
    inflections: {
      pastTense: "kicked",
      pastParticiple: "kicked",
      thirdPerson: "kicks",
      presentParticiple: "kicking"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}],
    phrases: [{ phrase: "kick off", meaning: "踢开" }, { phrase: "kick the ball", meaning: "踢球" }]
  },
  {
    id: "reach",
    word: "reach",
    syllables: ["reach"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stretch out the arm to touch or get with your hand", zh: "\u5230\u8fbe\uff1b\u4f38\u624b" }],
    examples: [{ sentence: "She reaches for the baby." }],
    inflections: {
      pastTense: "reached",
      pastParticiple: "reached",
      thirdPerson: "reaches",
      presentParticiple: "reaching"
    },
    similarWords: [{"word": "teach", "reason": "\u5f62\u8fd1", "zh": "\u6559\uff0c\u6559\u6388"}, {"word": "beach", "reason": "\u5f62\u8fd1", "zh": "\u6d77\u6ee9"}],
    phrases: [{ phrase: "reach for", meaning: "伸手够" }, { phrase: "reach out", meaning: "伸出" }]
  },
  {
    id: "review",
    word: "review",
    syllables: ["review"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look at or study something again", zh: "\u590d\u4e60\uff1b\u8bc4\u8bba" }],
    examples: [{ sentence: "The students review their notes for the exam." }],
    inflections: {
      pastTense: "reviewed",
      pastParticiple: "reviewed",
      thirdPerson: "reviews",
      presentParticiple: "reviewing"
    },
    similarWords: [{"word": "view", "reason": "\u62d3\u5c55", "zh": "\u89c6\u56fe\uff1b\u770b\u6cd5\uff1b\u89c2\u770b"}],
    phrases: [{ phrase: "review the lesson", meaning: "复习功课" }, { phrase: "book review", meaning: "书评" }],
    rootAffix: { explanation: "re-再 + view看 = 复习；回顾" }
  },
  {
    id: "simple",
    word: "simple",
    syllables: ["simple"],
    partOfSpeech: "adj.",
    definitions: [{ en: "easy", zh: "\u7b80\u5355\u7684\uff1b\u6734\u7d20\u7684" }],
    examples: [{ sentence: "He solved a simple problem." }],
    inflections: {
      comparative: "more simple",
      superlative: "most simple"
    },
    similarWords: [{"word": "example", "reason": "\u5f62\u8fd1", "zh": "\u4f8b\u5b50"}, {"word": "people", "reason": "\u5f62\u8fd1", "zh": "\u4eba\u4eec\uff0c\u4eba\u6c11"}],
    phrases: [{ phrase: "simple life", meaning: "简单生活" }, { phrase: "simple question", meaning: "简单的问题" }],
    antonyms: [{ word: "complex", zh: "复杂的" }]
  },
  {
    id: "soccer",
    word: "soccer",
    syllables: ["soccer"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sport in which a ball is kicked into a goal to win a point", zh: "\u8db3\u7403" }],
    examples: [{ sentence: "Soccer is a popular sport in many cultures." }],
    inflections: {
      plural: "soccers"
    },
    phrases: [{ phrase: "play soccer", meaning: "踢足球" }, { phrase: "soccer team", meaning: "足球队" }]
  },
  {
    id: "symbol",
    word: "symbol",
    syllables: ["symbol"],
    partOfSpeech: "n.",
    definitions: [{ en: "a shape with a special meaning", zh: "\u8c61\u5f81\uff1b\u7b26\u53f7" }],
    examples: [{ sentence: "A heart shape is a symbol of love." }],
    inflections: {
      plural: "symbols"
    },
    phrases: [{ phrase: "symbol of", meaning: "...的象征" }, { phrase: "peace symbol", meaning: "和平符号" }],
    similarWords: [{"word": "symbolic", "reason": "\u62d3\u5c55", "zh": "象征性的"}]
  },
  {
    id: "allow",
    word: "allow",
    syllables: ["allow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to let someone do something", zh: "\u5141\u8bb8\uff1b\u51c6\u8bb8" }],
    examples: [{ sentence: "Her parents allow her to have a strange hair color." }],
    inflections: {
      pastTense: "allowed",
      pastParticiple: "allowed",
      thirdPerson: "allows",
      presentParticiple: "allowing"
    },
    similarWords: [{"word": "follow", "reason": "\u5f62\u8fd1", "zh": "\u8ddf\u968f\uff1b\u7406\u89e3"}, {"word": "flow", "reason": "\u5f62\u8fd1", "zh": "\u6d41\u52a8\uff1b\u6d41\u91cf"}, {"word": "blow", "reason": "\u5f62\u8fd1", "zh": "\u5439\uff1b\u6253\u51fb"}],
    phrases: [{ phrase: "allow to do", meaning: "允许做" }, { phrase: "allow for", meaning: "考虑到" }]
  },
  {
    id: "bat",
    word: "bat",
    syllables: ["bat"],
    partOfSpeech: "n.",
    definitions: [{ en: "a flying animal that hunts at night", zh: "\u8759\u8760\uff1b\u7403\u62cd" }],
    examples: [{ sentence: "The bat returns to the forest to hunt for food." }],
    inflections: {
      plural: "bats"
    },
    similarWords: [{"word": "eat", "reason": "\u5f62\u8fd1", "zh": "\u5403"}, {"word": "bad", "reason": "\u5f62\u8fd1", "zh": "\u574f\u7684\uff0c\u4e0d\u597d\u7684"}, {"word": "hat", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}],
    phrases: [{ phrase: "baseball bat", meaning: "棒球棒" }, { phrase: "bat and ball", meaning: "球棒和球" }]
  },
  {
    id: "exercise",
    word: "exercise",
    syllables: ["ex", "er", "cise"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move the body as a way to get healthy", zh: "\u7ec3\u4e60\uff1b\u953b\u70bc" }],
    examples: [{ sentence: "They decided to exercise in the park." }],
    inflections: {
      pastTense: "exercised",
      pastParticiple: "exercised",
      thirdPerson: "exercises",
      presentParticiple: "exercising"
    },
    rootAffix: { explanation: "ex-\u51fa + erc\u56f4\u680f + -ise = \u4ece\u56f4\u680f\u51fa\u6765\u6d3b\u52a8\u2192\u953b\u70bc" },
    similarWords: [{"word": "promise", "reason": "\u5f62\u8fd1", "zh": "\u627f\u8bfa\uff1b\u4fdd\u8bc1"}, {"word": "surprise", "reason": "\u5f62\u8fd1", "zh": "\u60ca\u559c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + erc\u56f4\u680f + -ise = \u4ece\u56f4\u680f\u51fa\u6765\u6d3b\u52a8\u2192\u953b\u70bc",
    phrases: [{ phrase: "do exercise", meaning: "做运动" }, { phrase: "exercise book", meaning: "练习本" }]
  },
  {
    id: "force",
    word: "force",
    syllables: ["force"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make people do things they do not want to do", zh: "\u529b\u91cf\uff1b\u8feb\u4f7f" }],
    examples: [{ sentence: "Wayne\u2019s mom forced him to eat all of his meal." }],
    inflections: {
      pastTense: "forced",
      pastParticiple: "forced",
      thirdPerson: "forces",
      presentParticiple: "forcing"
    },
    similarWords: [{"word": "source", "reason": "\u5f62\u8fd1", "zh": "\u6765\u6e90\uff1b\u6e90\u5934"}],
    phrases: [{ phrase: "by force", meaning: "用武力" }, { phrase: "force to do", meaning: "强迫做" }]
  },
  {
    id: "leaf",
    word: "leaf",
    syllables: ["leaf"],
    partOfSpeech: "n.",
    definitions: [{ en: "the flat green part of a plant", zh: "\u53f6\u5b50\uff1b\u6811\u53f6" }],
    examples: [{ sentence: "Each kind of plant has unique leaves." }],
    inflections: {
      plural: "leaves"
    },
    rootAffix: { explanation: "leaf\u53f6\u5b50 = \u53f6\u5b50" },
    similarWords: [{"word": "lead", "reason": "\u5f62\u8fd1", "zh": "\u9886\u5bfc\uff1b\u5e26\u9886\uff1b\u94c5"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aleaf\u53f6\u5b50 = \u53f6\u5b50",
    phrases: [{ phrase: "leaf of", meaning: "叶子" }, { phrase: "turn over a new leaf", meaning: "翻开新的一页" }]
  },
  {
    id: "member",
    word: "member",
    syllables: ["member"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person in a group or club", zh: "\u6210\u5458\uff1b\u4f1a\u5458" }],
    examples: [{ sentence: "All of the members wear the same clothing." }],
    inflections: {
      plural: "members"
    },
    similarWords: [{"word": "number", "reason": "\u5f62\u8fd1", "zh": "\u6570\u5b57\uff0c\u53f7\u7801"}, {"word": "remember", "reason": "\u62d3\u5c55", "zh": "\u8bb0\u4f4f"}],
    phrases: [{ phrase: "family member", meaning: "家庭成员" }, { phrase: "team member", meaning: "队员" }]
  },
  {
    id: "real",
    word: "real",
    syllables: ["real"],
    partOfSpeech: "adj.",
    definitions: [{ en: "actually happening; being what it looks like", zh: "\u771f\u5b9e\u7684\uff1b\u771f\u6b63\u7684" }],
    examples: [{ sentence: "He looks at the bill to see if it is real." }],
    inflections: {
      comparative: "realer",
      superlative: "realest"
    },
    similarWords: [{"word": "steal", "reason": "\u5f62\u8fd1", "zh": "\u5077\uff1b\u7a83\u53d6"}, {"word": "meal", "reason": "\u5f62\u8fd1", "zh": "\u9910\uff1b\u996d"}, {"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}, {"word": "really", "reason": "\u62d3\u5c55", "zh": "\u771f\u7684"}],
    phrases: [{ phrase: "real life", meaning: "现实生活" }, { phrase: "for real", meaning: "真的" }],
    antonyms: [{ word: "fake", zh: "假的" }]
  },
  {
    id: "sign",
    word: "sign",
    syllables: ["sign"],
    partOfSpeech: "n.",
    definitions: [{ en: "a flat board or paper with a message on it", zh: "\u6807\u5fd7\uff1b\u7b7e\u540d" }],
    examples: [{ sentence: "Follow the sign to the international airport." }],
    inflections: {
      plural: "signs"
    },
    similarWords: [{"word": "signal", "reason": "\u62d3\u5c55", "zh": "\u4fe1\u53f7\uff1b\u53d1\u4fe1\u53f7"}],
    phrases: [{ phrase: "sign up", meaning: "报名" }, { phrase: "sign in", meaning: "签到" }]
  },
  {
    id: "step",
    word: "step",
    syllables: ["step"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move your foot up and put it down in a different spot", zh: "\u6b65\u9aa4\uff1b\u811a\u6b65\uff1b\u8e29" }],
    examples: [{ sentence: "Sarah stepped on the stones to cross the river." }],
    inflections: {
      pastTense: "steped",
      pastParticiple: "steped",
      thirdPerson: "steps",
      presentParticiple: "steping"
    },
    similarWords: [{"word": "stop", "reason": "\u5f62\u8fd1", "zh": "\u505c\u6b62\uff0c\u505c\u4e0b"}],
    phrases: [{ phrase: "step by step", meaning: "一步一步" }, { phrase: "step in", meaning: "介入" }]
  },
  {
    id: "treat",
    word: "treat",
    syllables: ["treat"],
    partOfSpeech: "n.",
    definitions: [{ en: "something nice that you do not eat or do often", zh: "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597" }],
    examples: [{ sentence: "They enjoy a treat after school." }],
    inflections: {
      plural: "treats"
    },
    similarWords: [{"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "repeat", "reason": "\u5f62\u8fd1", "zh": "\u91cd\u590d"}, {"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}],
    phrases: [{ phrase: "treat as", meaning: "把...当作" }, { phrase: "trick or treat", meaning: "不给糖就捣蛋" }]
  },
  {
    id: "afraid",
    word: "afraid",
    syllables: ["afraid"],
    partOfSpeech: "adj.",
    definitions: [{ en: "feeling fear", zh: "\u5bb3\u6015\u7684\uff1b\u62c5\u5fc3\u7684" }],
    examples: [{ sentence: "Marta is afraid of bats." }],
    inflections: {
      comparative: "more afraid",
      superlative: "most afraid"
    },
    phrases: [{ phrase: "afraid of", meaning: "害怕" }, { phrase: "I'm afraid", meaning: "恐怕" }],
    synonyms: [{"word": "scared", "zh": "害怕的"}]
  },
  {
    id: "fair",
    word: "fair",
    syllables: ["fair"],
    partOfSpeech: "adj.",
    definitions: [{ en: "good for everyone", zh: "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a" }],
    examples: [{ sentence: "They made a fair exchange." }],
    inflections: {
      comparative: "fairer",
      superlative: "fairest"
    },
    similarWords: [{"word": "chair", "reason": "\u5f62\u8fd1", "zh": "\u6905\u5b50"}, {"word": "pair", "reason": "\u5f62\u8fd1", "zh": "\u53cc"}, {"word": "air", "reason": "\u5f62\u8fd1", "zh": "\u7a7a\u6c14"}],
    phrases: [{ phrase: "fair play", meaning: "公平竞争" }, { phrase: "fair enough", meaning: "有道理" }]
  },
  {
    id: "focus",
    word: "focus",
    syllables: ["focus"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put all of your thoughts on one thing", zh: "\u96c6\u4e2d\uff1b\u7126\u70b9" }],
    examples: [{ sentence: "He focuses on the yellow spot in the center." }],
    inflections: {
      pastTense: "focused",
      pastParticiple: "focused",
      thirdPerson: "focuses",
      presentParticiple: "focusing"
    },
    phrases: [{ phrase: "focus on", meaning: "专注于" }, { phrase: "focus group", meaning: "焦点小组" }]
  },
  {
    id: "foreign",
    word: "foreign",
    syllables: ["foreign"],
    partOfSpeech: "adj.",
    definitions: [{ en: "from a different country", zh: "\u5916\u56fd\u7684\uff1b\u5bf9\u5916\u7684" }],
    examples: [{ sentence: "Kate went on a journey to a foreign country in Africa." }],
    inflections: {
      comparative: "more foreign",
      superlative: "most foreign"
    },
    rootAffix: { explanation: "for-\u5916\u9762 + -eign = \u5916\u9762\u7684\u2192\u5916\u56fd\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1afor-\u5916\u9762 + -eign = \u5916\u9762\u7684\u2192\u5916\u56fd\u7684",
    similarWords: [{"word": "foreigner", "reason": "\u62d3\u5c55", "zh": "外国人"}],
    phrases: [{ phrase: "foreign language", meaning: "外语" }, { phrase: "foreign country", meaning: "外国" }],
    antonyms: [{ word: "local", zh: "当地的" }]
  },
  {
    id: "habit",
    word: "habit",
    syllables: ["habit"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you do often, usually without thinking about it", zh: "\u4e60\u60ef\uff1b\u4e60\u6027" }],
    examples: [{ sentence: "Drinking soda is a terrible habit." }],
    inflections: {
      plural: "habits"
    },
    phrases: [{ phrase: "good habit", meaning: "好习惯" }, { phrase: "bad habit", meaning: "坏习惯" }],
    similarWords: [{"word": "habitual", "reason": "\u62d3\u5c55", "zh": "惯常的"}]
  },
  {
    id: "invent",
    word: "invent",
    syllables: ["in", "vent"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something for the first time", zh: "\u53d1\u660e\uff1b\u521b\u9020" }],
    examples: [{ sentence: "Nathan invented a robot that can solve puzzles." }],
    inflections: {
      pastTense: "invented",
      pastParticiple: "invented",
      thirdPerson: "invents",
      presentParticiple: "inventing"
    },
    similarWords: [{"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ain \u00b7 vent",
    phrases: [{ phrase: "invent a story", meaning: "编故事" }, { phrase: "invent something", meaning: "发明东西" }],
    rootAffix: { explanation: "in-进 + vent来 = 发明" }
  },
  {
    id: "language",
    word: "language",
    syllables: ["lan", "guage"],
    partOfSpeech: "n.",
    definitions: [{ en: "the words and symbols used by people of one country or area", zh: "\u8bed\u8a00" }],
    examples: [{ sentence: "I cannot read the sign. It is in a foreign language." }],
    inflections: {
      plural: "languages"
    },
    similarWords: [{"word": "encourage", "reason": "\u5f62\u8fd1", "zh": "\u9f13\u52b1\uff1b\u6fc0\u52b1"}, {"word": "village", "reason": "\u5f62\u8fd1", "zh": "\u6751\u5e84\uff1b\u4e61\u6751"}, {"word": "message", "reason": "\u5f62\u8fd1", "zh": "\u6d88\u606f\uff1b\u7559\u8a00"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1alan \u00b7 guage",
    phrases: [{ phrase: "language class", meaning: "语言课" }, { phrase: "body language", meaning: "肢体语言" }]
  },
  {
    id: "nation",
    word: "nation",
    syllables: ["na", "tion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a country", zh: "\u56fd\u5bb6\uff1b\u6c11\u65cf" }],
    examples: [{ sentence: "Switzerland is a small nation." }],
    inflections: {
      plural: "nations"
    },
    similarWords: [{"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "station", "reason": "\u5f62\u8fd1", "zh": "\u8f66\u7ad9\uff0c\u7ad9"}, {"word": "section", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u533a\u57df"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ana \u00b7 tion",
    phrases: [{ phrase: "nation wide", meaning: "全国" }, { phrase: "United Nations", meaning: "联合国" }]
  },
  {
    id: "still",
    word: "still",
    syllables: ["still"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not moving", zh: "\u4ecd\u7136\uff1b\u9759\u6b62\u7684" }],
    examples: [{ sentence: "The woman is very still." }],
    inflections: {
      comparative: "stiller",
      superlative: "stillest"
    },
    similarWords: [{"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "kill", "reason": "\u5f62\u8fd1", "zh": "\u6740\uff1b\u6740\u6b7b"}, {"word": "skill", "reason": "\u5f62\u8fd1", "zh": "\u6280\u80fd\uff1b\u6280\u5de7"}],
    phrases: [{ phrase: "still water", meaning: "静水" }, { phrase: "still have", meaning: "还有" }]
  },
  {
    id: "wise",
    word: "wise",
    syllables: ["wise"],
    partOfSpeech: "adj.",
    definitions: [{ en: "knowing the right things to do", zh: "\u806a\u660e\u7684\uff1b\u660e\u667a\u7684" }],
    examples: [{ sentence: "My grandfather gives good advice because he is wise." }],
    inflections: {
      comparative: "wiser",
    },
    similarWords: [{"word": "noise", "reason": "\u5f62\u8fd1", "zh": "\u566a\u97f3"}, {"word": "raise", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u9ad8\uff1b\u629a\u517b\uff1b\u4e3e\u8d77"}, {"word": "rise", "reason": "\u5f62\u8fd1", "zh": "\u4e0a\u5347\uff1b\u5347\u8d77"}],
    phrases: [{ phrase: "wise man", meaning: "智者" }, { phrase: "wise decision", meaning: "明智的决定" }]
  },
  {
    id: "audience",
    word: "audience",
    syllables: ["audience"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group of people watching an event or show", zh: "\u89c2\u4f17\uff1b\u542c\u4f17" }],
    examples: [{ sentence: "The audience waits for the movie to begin." }],
    inflections: {
      plural: "audiences"
    },
    similarWords: [{"word": "evidence", "reason": "\u5f62\u8fd1", "zh": "\u8bc1\u636e\uff1b\u8ff9\u8c61"}, {"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}, {"word": "sentence", "reason": "\u5f62\u8fd1", "zh": "\u53e5\u5b50\uff1b\u5224\u51b3"}],
    phrases: [{ phrase: "target audience", meaning: "目标受众" }, { phrase: "live audience", meaning: "现场观众" }],
    rootAffix: { explanation: "aud听 + -ience = 观众" }
  },
  {
    id: "college",
    word: "college",
    syllables: ["college"],
    partOfSpeech: "n.",
    definitions: [{ en: "a school where students study after high school", zh: "\u5927\u5b66\uff1b\u5b66\u9662" }],
    examples: [{ sentence: "Susan attends a college with many international students." }],
    inflections: {
      plural: "colleges"
    },
    phrases: [{ phrase: "go to college", meaning: "上大学" }, { phrase: "college student", meaning: "大学生" }],
    synonyms: [{"word": "university", "zh": "大学"}]
  },
  {
    id: "comfortable",
    word: "comfortable",
    syllables: ["comfortable"],
    partOfSpeech: "adj.",
    definitions: [{ en: "feeling relaxed", zh: "\u8212\u9002\u7684\uff1b\u5b89\u9038\u7684" }],
    examples: [{ sentence: "She is comfortable on her new sofa." }],
    inflections: {
      comparative: "more comfortable",
      superlative: "most comfortable"
    },
    rootAffix: { explanation: "com-\u52a0\u5f3a + fort\u529b\u91cf + -able = \u6709\u529b\u91cf\u7684\u2192\u8212\u9002\u7684" },
    similarWords: [{"word": "responsible", "reason": "\u5f62\u8fd1", "zh": "\u8d1f\u8d23\u7684\uff1b\u6709\u8d23\u4efb\u7684"}, {"word": "incredible", "reason": "\u5f62\u8fd1", "zh": "\u96be\u4ee5\u7f6e\u4fe1\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acom-\u52a0\u5f3a + fort\u529b\u91cf + -able = \u6709\u529b\u91cf\u7684\u2192\u8212\u9002\u7684",
    phrases: [{ phrase: "comfortable life", meaning: "舒适的生活" }, { phrase: "feel comfortable", meaning: "感觉舒服" }]
  },
  {
    id: "honest",
    word: "honest",
    syllables: ["honest"],
    partOfSpeech: "adj.",
    definitions: [{ en: "good and saying things that are true", zh: "\u8bda\u5b9e\u7684\uff1b\u6b63\u76f4\u7684" }],
    examples: [{ sentence: "Nick is very honest. He returned the money he found." }],
    inflections: {
      comparative: "more honest",
      superlative: "most honest"
    },
    similarWords: [{"word": "forest", "reason": "\u5f62\u8fd1", "zh": "\u68ee\u6797\uff1b\u6811\u6797"}, {"word": "contest", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u7ade\u8d5b"}, {"word": "suggest", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u6697\u793a"}],
    phrases: [{ phrase: "to be honest", meaning: "说实话" }, { phrase: "honest person", meaning: "诚实的人" }]
  },
  {
    id: "imagine",
    word: "imagine",
    syllables: ["im", "ag", "ine"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think of things that are not real", zh: "\u60f3\u8c61\uff1b\u8bbe\u60f3" }],
    examples: [{ sentence: "The little girl imagines she is a big person in a small world." }],
    inflections: {
      pastTense: "imagined",
      pastParticiple: "imagined",
      thirdPerson: "imagines",
      presentParticiple: "imagining"
    },
    rootAffix: { explanation: "imag\u56fe\u50cf + -ine = \u5728\u8111\u4e2d\u6210\u50cf\u2192\u60f3\u8c61" },
    similarWords: [{"word": "engine", "reason": "\u5f62\u8fd1", "zh": "\u5f15\u64ce\uff1b\u53d1\u52a8\u673a"}, {"word": "machine", "reason": "\u5f62\u8fd1", "zh": "\u673a\u5668\uff1b\u673a\u68b0"}, {"word": "medicine", "reason": "\u5f62\u8fd1", "zh": "\u836f\uff1b\u533b\u5b66"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aimag\u56fe\u50cf + -ine = \u5728\u8111\u4e2d\u6210\u50cf\u2192\u60f3\u8c61",
    phrases: [{ phrase: "imagine doing", meaning: "想象做" }, { phrase: "can't imagine", meaning: "无法想象" }]
  },
  {
    id: "level",
    word: "level",
    syllables: ["level"],
    partOfSpeech: "n.",
    definitions: [{ en: "an amount of something", zh: "\u6c34\u5e73\uff1b\u7ea7\u522b\uff1b\u5e73\u7684" }],
    examples: [{ sentence: "They watched as the water level continued to go up." }],
    inflections: {
      plural: "levels"
    },
    similarWords: [{"word": "travel", "reason": "\u5f62\u8fd1", "zh": "\u65c5\u884c"}],
    phrases: [{ phrase: "level up", meaning: "升级" }, { phrase: "sea level", meaning: "海平面" }]
  },
  {
    id: "sentence",
    word: "sentence",
    syllables: ["sentence"],
    partOfSpeech: "n.",
    definitions: [{ en: "a set of words that make a statement or question", zh: "\u53e5\u5b50\uff1b\u5224\u51b3" }],
    examples: [{ sentence: "Mrs. Hays was upset with Tom, so she made him write sentences." }],
    inflections: {
      plural: "sentences"
    },
    rootAffix: { explanation: "sent\u611f\u89c9 + -ence = \u8868\u8fbe\u611f\u89c9\u2192\u53e5\u5b50" },
    similarWords: [{"word": "evidence", "reason": "\u5f62\u8fd1", "zh": "\u8bc1\u636e\uff1b\u8ff9\u8c61"}, {"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}, {"word": "science", "reason": "\u5f62\u8fd1", "zh": "\u79d1\u5b66"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1asent\u611f\u89c9 + -ence = \u8868\u8fbe\u611f\u89c9\u2192\u53e5\u5b50",
    phrases: [{ phrase: "make a sentence", meaning: "造句" }, { phrase: "death sentence", meaning: "死刑" }]
  },
  {
    id: "stress",
    word: "stress",
    syllables: ["stress"],
    partOfSpeech: "n.",
    definitions: [{ en: "worry caused by problems in your life", zh: "\u538b\u529b\uff1b\u5f3a\u8c03" }],
    examples: [{ sentence: "She is under a lot of stress from her job." }],
    inflections: {
      plural: "stresses"
    },
    similarWords: [{"word": "express", "reason": "\u5f62\u8fd1", "zh": "\u8868\u8fbe\uff1b\u5feb\u9012"}, {"word": "address", "reason": "\u5f62\u8fd1", "zh": "\u5730\u5740"}, {"word": "press", "reason": "\u5f62\u8fd1", "zh": "\u538b\uff1b\u6309\uff1b\u65b0\u95fb\u754c"}],
    phrases: [{ phrase: "under stress", meaning: "有压力" }, { phrase: "stress out", meaning: "压力大" }]
  },
  {
    id: "suddenly",
    word: "suddenly",
    syllables: ["sud", "den", "ly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very quickly", zh: "\u7a81\u7136\uff1b\u5ffd\u7136" }],
    examples: [{ sentence: "Suddenly, a storm blew sand across the road." }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asud \u00b7 den \u00b7 ly",
    similarWords: [{"word": "sudden", "reason": "\u62d3\u5c55", "zh": "突然的"}],
    phrases: [{ phrase: "suddenly appear", meaning: "突然出现" }, { phrase: "all of a sudden", meaning: "突然" }],
    rootAffix: { explanation: "sudden突然的 + -ly = 突然地" }
  },
  {
    id: "topic",
    word: "topic",
    syllables: ["topic"],
    partOfSpeech: "n.",
    definitions: [{ en: "a subject people talk or write about", zh: "\u8bdd\u9898\uff1b\u4e3b\u9898" }],
    examples: [{ sentence: "The teacher wrote the topic on the board." }],
    inflections: {
      plural: "topics"
    },
    phrases: [{ phrase: "topic of", meaning: "...的话题" }, { phrase: "hot topic", meaning: "热门话题" }]
  },
  {
    id: "add",
    word: "add",
    syllables: ["add"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put one thing with another thing or things", zh: "\u589e\u52a0\uff1b\u52a0" }],
    examples: [{ sentence: "She adds salt to her meal." }],
    inflections: {
      pastTense: "added",
      pastParticiple: "added",
      thirdPerson: "adds",
      presentParticiple: "adding"
    },
    similarWords: [{"word": "odd", "reason": "\u5f62\u8fd1", "zh": "\u5947\u602a\u7684\uff1b\u5947\u6570\u7684"}],
    phrases: [{ phrase: "add to", meaning: "增加" }, { phrase: "add up", meaning: "加起来" }],
    antonyms: [{ word: "subtract", zh: "减" }]
  },
  {
    id: "blind",
    word: "blind",
    syllables: ["blind"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not able to see", zh: "\u76f2\u7684\uff1b\u778e\u7684" }],
    examples: [{ sentence: "The dog helps the blind man." }],
    inflections: {
      comparative: "blinder",
      superlative: "blindest"
    },
    similarWords: [{"word": "kind", "reason": "\u5f62\u8fd1", "zh": "\u79cd\u7c7b\uff0c\u5584\u826f\u7684"}, {"word": "find", "reason": "\u5f62\u8fd1", "zh": "\u627e\u5230\uff0c\u53d1\u73b0"}, {"word": "mind", "reason": "\u5f62\u8fd1", "zh": "\u5934\u8111\uff1b\u4ecb\u610f"}],
    phrases: [{ phrase: "blind person", meaning: "盲人" }, { phrase: "go blind", meaning: "失明" }]
  },
  {
    id: "button",
    word: "button",
    syllables: ["button"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small round thing used to close an opening in clothing", zh: "\u7ebd\u6263\uff1b\u6309\u94ae" }],
    examples: [{ sentence: "Casey\u2019s grandmother collects buttons." }],
    inflections: {
      plural: "buttons"
    },
    phrases: [{ phrase: "push the button", meaning: "按按钮" }, { phrase: "button up", meaning: "扣上扣子" }]
  },
  {
    id: "create",
    word: "create",
    syllables: ["create"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something", zh: "\u521b\u9020\uff1b\u521b\u5efa" }],
    examples: [{ sentence: "He creates a unique piece of art with leaves on the top." }],
    inflections: {
      pastTense: "created",
      pastParticiple: "created",
      thirdPerson: "creates",
      presentParticiple: "creating"
    },
    similarWords: [{"word": "debate", "reason": "\u5f62\u8fd1", "zh": "\u8fa9\u8bba\uff1b\u4e89\u8bba"}, {"word": "climate", "reason": "\u5f62\u8fd1", "zh": "\u6c14\u5019"}, {"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}],
    phrases: [{ phrase: "create a story", meaning: "创作故事" }, { phrase: "create a new", meaning: "创造新的" }],
    antonyms: [{ word: "destroy", zh: "摧毁" }]
  },
  {
    id: "memory",
    word: "memory",
    syllables: ["mem", "o", "ry"],
    partOfSpeech: "n.",
    definitions: [{ en: "something from the past that is remembered", zh: "\u8bb0\u5fc6\uff1b\u56de\u5fc6" }],
    examples: [{ sentence: "They have great memories of their trip to the island." }],
    inflections: {
      plural: "memories"
    },
    similarWords: [{"word": "factory", "reason": "\u5f62\u8fd1", "zh": "\u5de5\u5382"}, {"word": "history", "reason": "\u5f62\u8fd1", "zh": "\u5386\u53f2\uff1b\u7ecf\u5386"}, {"word": "story", "reason": "\u5f62\u8fd1", "zh": "\u6545\u4e8b\uff0c\u4f20\u8bf4"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amem \u00b7 o \u00b7 ry",
    phrases: [{ phrase: "in memory of", meaning: "为了纪念" }, { phrase: "bad memory", meaning: "坏记性" }]
  },
  {
    id: "prince",
    word: "prince",
    syllables: ["prince"],
    partOfSpeech: "n.",
    definitions: [{ en: "the son of a king or queen", zh: "\u738b\u5b50\uff1b\u4eb2\u738b" }],
    examples: [{ sentence: "Katherine married a real prince." }],
    inflections: {
      plural: "princes"
    },
    similarWords: [{"word": "chance", "reason": "\u5f62\u8fd1", "zh": "\u673a\u4f1a\uff1b\u53ef\u80fd\u6027"}, {"word": "dance", "reason": "\u5f62\u8fd1", "zh": "\u8df3\u821e"}, {"word": "science", "reason": "\u5f62\u8fd1", "zh": "\u79d1\u5b66"}],
    phrases: [{ phrase: "Prince Charming", meaning: "白马王子" }, { phrase: "prince and princess", meaning: "王子和公主" }]
  },
  {
    id: "string",
    word: "string",
    syllables: ["string"],
    partOfSpeech: "n.",
    definitions: [{ en: "a long thread used to keep things together", zh: "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26" }],
    examples: [{ sentence: "The clerk put a string around the gift." }],
    inflections: {
      plural: "strings"
    },
    similarWords: [{"word": "boring", "reason": "\u5f62\u8fd1", "zh": "\u65e0\u804a\u7684"}, {"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "evening", "reason": "\u5f62\u8fd1", "zh": "\u508d\u665a\uff0c\u665a\u4e0a"}],
    phrases: [{ phrase: "a string of", meaning: "一串" }, { phrase: "string cheese", meaning: "奶酪条" }]
  },
  {
    id: "thick",
    word: "thick",
    syllables: ["thick"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a large distance from top to bottom", zh: "\u539a\u7684\uff1b\u6d53\u7684" }],
    examples: [{ sentence: "She borrowed a lot of thick books at college." }],
    inflections: {
      comparative: "thicker",
      superlative: "thickest"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "pick", "reason": "\u5f62\u8fd1", "zh": "\u6311\u9009"}],
    phrases: [{ phrase: "thick book", meaning: "厚书" }, { phrase: "thick soup", meaning: "浓汤" }],
    antonyms: [{ word: "thin", zh: "薄的" }]
  },
  {
    id: "tight",
    word: "tight",
    syllables: ["tight"],
    partOfSpeech: "adj.",
    definitions: [{ en: "fitting close to the body", zh: "\u7d27\u7684\uff1b\u7262\u56fa\u7684" }],
    examples: [{ sentence: "Max is not comfortable wearing this tight shirt." }],
    inflections: {
      comparative: "tighter",
      superlative: "tightest"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}, {"word": "right", "reason": "\u5f62\u8fd1", "zh": "\u6b63\u786e\u7684\uff1b\u53f3\u8fb9"}],
    phrases: [{ phrase: "tight schedule", meaning: "紧凑的日程" }, { phrase: "hold tight", meaning: "抓紧" }]
  },
  {
    id: "tradition",
    word: "tradition",
    syllables: ["tra", "di", "tion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a custom that has been around for a long time", zh: "\u4f20\u7edf\uff1b\u60ef\u4f8b" }],
    examples: [{ sentence: "In some cultures, it is a tradition to paint eggs." }],
    inflections: {
      plural: "traditions"
    },
    rootAffix: { explanation: "trans-\u4f20 + dit\u7ed9 + -ion = \u4f20\u4e0b\u6765\u7684\u4e1c\u897f\u2192\u4f20\u7edf" },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}, {"word": "position", "reason": "\u5f62\u8fd1", "zh": "\u4f4d\u7f6e\uff1b\u804c\u4f4d"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1atrans-\u4f20 + dit\u7ed9 + -ion = \u4f20\u4e0b\u6765\u7684\u4e1c\u897f\u2192\u4f20\u7edf",
    phrases: [{ phrase: "by tradition", meaning: "按照传统" }, { phrase: "family tradition", meaning: "家庭传统" }]
  },
  {
    id: "board",
    word: "board",
    syllables: ["board"],
    partOfSpeech: "n.",
    definitions: [{ en: "a flat, wide piece of wood", zh: "\u677f\uff1b\u8463\u4e8b\u4f1a\uff1b\u4e0a\uff08\u8f66\u8239\uff09" }],
    examples: [{ sentence: "They invented a simple, outdoor game using a board." }],
    inflections: {
      plural: "boards"
    },
    similarWords: [{"word": "guard", "reason": "\u5f62\u8fd1", "zh": "\u5b88\u536b\uff1b\u8b66\u536b"}, {"word": "hard", "reason": "\u5f62\u8fd1", "zh": "\u56f0\u96be\u7684\uff0c\u786c\u7684"}],
    phrases: [{ phrase: "on board", meaning: "在船上" }, { phrase: "black board", meaning: "黑板" }]
  },
  {
    id: "brain",
    word: "brain",
    syllables: ["brain"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of the body inside your head", zh: "\u5927\u8111\uff1b\u667a\u529b" }],
    examples: [{ sentence: "The picture focuses on the man\u2019s brain." }],
    inflections: {
      plural: "brains"
    },
    similarWords: [{"word": "train", "reason": "\u5f62\u8fd1", "zh": "\u706b\u8f66"}, {"word": "rain", "reason": "\u5f62\u8fd1", "zh": "\u96e8\uff0c\u4e0b\u96e8"}, {"word": "again", "reason": "\u5f62\u8fd1", "zh": "\u518d\u6b21\uff0c\u53c8"}],
    phrases: [{ phrase: "brain storm", meaning: "头脑风暴" }, { phrase: "use your brain", meaning: "动脑筋" }]
  },
  {
    id: "celebrate",
    word: "celebrate",
    syllables: ["cel", "e", "brate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to do something special for an important event", zh: "\u5e86\u795d\uff1b\u5e86\u8d3a" }],
    examples: [{ sentence: "The members of the soccer team celebrate after the game." }],
    inflections: {
      pastTense: "celebrated",
      pastParticiple: "celebrated",
      thirdPerson: "celebrates",
      presentParticiple: "celebrating"
    },
    rootAffix: { explanation: "celebr\u5e86\u795d + -ate\u52a8\u8bcd = \u5e86\u795d" },
    similarWords: [{"word": "separate", "reason": "\u5f62\u8fd1", "zh": "\u5206\u5f00\uff1b\u5206\u79bb\u7684"}, {"word": "appreciate", "reason": "\u5f62\u8fd1", "zh": "\u611f\u6fc0\uff1b\u6b23\u8d4f"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acelebr\u5e86\u795d + -ate\u52a8\u8bcd = \u5e86\u795d",
    phrases: [{ phrase: "celebrate with", meaning: "和...一起庆祝" }, { phrase: "celebrate success", meaning: "庆祝成功" }]
  },
  {
    id: "especially",
    word: "especially",
    syllables: ["especially"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in a way that is greater than usual", zh: "\u5c24\u5176\uff1b\u7279\u522b" }],
    examples: [{ sentence: "He is especially smart for his age." }],
    phrases: [{ phrase: "especially when", meaning: "特别是当" }, { phrase: "especially for", meaning: "特别是为" }],
    rootAffix: { explanation: "especial特别的 + -ly = 特别地" },
    similarWords: [{"word": "special", "reason": "\u62d3\u5c55", "zh": "特别的"}]
  },
  {
    id: "hole",
    word: "hole",
    syllables: ["hole"],
    partOfSpeech: "n.",
    definitions: [{ en: "an opening that something can pass through", zh: "\u6d1e\uff1b\u5b54\uff1b\u5751" }],
    examples: [{ sentence: "There is a hole in the wall." }],
    inflections: {
      plural: "holes"
    },
    similarWords: [{"word": "whole", "reason": "\u5f62\u8fd1", "zh": "\u6574\u4e2a\u7684\uff1b\u5168\u90e8\u7684"}, {"word": "role", "reason": "\u5f62\u8fd1", "zh": "\u89d2\u8272\uff1b\u4f5c\u7528"}, {"word": "hope", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b\uff0c\u671f\u5f85"}],
    phrases: [{ phrase: "in the hole", meaning: "在洞里" }, { phrase: "dig a hole", meaning: "挖洞" }]
  },
  {
    id: "item",
    word: "item",
    syllables: ["item"],
    partOfSpeech: "n.",
    definitions: [{ en: "a thing that is usually part of a group", zh: "\u9879\u76ee\uff1b\u7269\u54c1" }],
    examples: [{ sentence: "There are many items in the box." }],
    inflections: {
      plural: "items"
    },
    phrases: [{ phrase: "item of", meaning: "一件" }, { phrase: "menu item", meaning: "菜单项" }]
  },
  {
    id: "match",
    word: "match",
    syllables: ["match"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look similar to something", zh: "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4" }],
    examples: [{ sentence: "Stacy\u2019s boots match her umbrella." }],
    inflections: {
      pastTense: "matched",
      pastParticiple: "matched",
      thirdPerson: "matches",
      presentParticiple: "matching"
    },
    similarWords: [{"word": "watch", "reason": "\u5f62\u8fd1", "zh": "\u770b\uff0c\u89c2\u770b"}, {"word": "catch", "reason": "\u5f62\u8fd1", "zh": "\u63a5\u4f4f\uff0c\u6293\u4f4f"}, {"word": "march", "reason": "\u5f62\u8fd1", "zh": "\u4e09\u6708\uff1b\u884c\u519b\uff1b\u524d\u8fdb"}],
    phrases: [{ phrase: "match with", meaning: "和...匹配" }, { phrase: "match point", meaning: "赛点" }]
  },
  {
    id: "princess",
    word: "princess",
    syllables: ["princess"],
    partOfSpeech: "n.",
    definitions: [{ en: "the daughter of a king or queen", zh: "\u516c\u4e3b\uff1b\u738b\u5983" }],
    examples: [{ sentence: "She imagines she is a princess." }],
    inflections: {
      plural: "princesses"
    },
    similarWords: [{"word": "express", "reason": "\u5f62\u8fd1", "zh": "\u8868\u8fbe\uff1b\u5feb\u9012"}, {"word": "address", "reason": "\u5f62\u8fd1", "zh": "\u5730\u5740"}, {"word": "business", "reason": "\u5f62\u8fd1", "zh": "\u751f\u610f\uff1b\u5546\u4e1a\uff1b\u4e8b\u52a1"}],
    phrases: [{ phrase: "princess dress", meaning: "公主裙" }, { phrase: "little princess", meaning: "小公主" }]
  },
  {
    id: "social",
    word: "social",
    syllables: ["social"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a need to be with others", zh: "\u793e\u4f1a\u7684\uff1b\u793e\u4ea4\u7684" }],
    examples: [{ sentence: "Diane is very social. She has many friends." }],
    inflections: {
      comparative: "more social",
      superlative: "most social"
    },
    similarWords: [{"word": "special", "reason": "\u5f62\u8fd1", "zh": "\u7279\u522b\u7684\uff1b\u4e13\u95e8\u7684"}],
    phrases: [{ phrase: "social media", meaning: "社交媒体" }, { phrase: "social studies", meaning: "社会研究" }]
  },
  {
    id: "tear",
    word: "tear",
    syllables: ["tear"],
    partOfSpeech: "v.",
    definitions: [{ en: "to pull something into parts", zh: "\u773c\u6cea\uff1b\u6495\u7834" }],
    examples: [{ sentence: "The angry man tears the paper in half." }],
    inflections: {
      pastTense: "tore",
      pastParticiple: "torn",
      thirdPerson: "tears",
      presentParticiple: "tearing"
    },
    similarWords: [{"word": "hear", "reason": "\u5f62\u8fd1", "zh": "\u542c\u5230\uff0c\u542c\u89c1"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}, {"word": "year", "reason": "\u5f62\u8fd1", "zh": "\u5e74"}],
    phrases: [{ phrase: "tear up", meaning: "撕碎" }, { phrase: "tear apart", meaning: "撕开" }]
  },
  {
    id: "cross",
    word: "cross",
    syllables: ["cross"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go from one side to the other", zh: "\u7a7f\u8fc7\uff1b\u5341\u5b57\u67b6\uff1b\u751f\u6c14\u7684" }],
    examples: [{ sentence: "They are especially careful when they cross a busy road." }],
    inflections: {
      pastTense: "crossed",
      pastParticiple: "crossed",
      thirdPerson: "crosses",
      presentParticiple: "crossing"
    },
    similarWords: [{"word": "crossing", "reason": "\u62d3\u5c55", "zh": "十字路口；横穿"}],
    phrases: [{ phrase: "cross the road", meaning: "过马路" }, { phrase: "cross out", meaning: "划掉" }]
  },
  {
    id: "finally",
    word: "finally",
    syllables: ["finally"],
    partOfSpeech: "adv.",
    definitions: [{ en: "after a long time", zh: "\u6700\u540e\uff1b\u7ec8\u4e8e" }],
    examples: [{ sentence: "The long meeting finally finished." }],
    similarWords: [{"word": "really", "reason": "\u5f62\u8fd1", "zh": "\u771f\u7684"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}, {"word": "actually", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9645\u4e0a\uff1b\u4e8b\u5b9e\u4e0a"}],
    phrases: [{ phrase: "finally get", meaning: "终于得到" }, { phrase: "and finally", meaning: "最后" }],
    rootAffix: { explanation: "final最后的 + -ly = 最后" }
  },
  {
    id: "follow",
    word: "follow",
    syllables: ["follow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go after; to do what a person or thing says", zh: "\u8ddf\u968f\uff1b\u7406\u89e3" }],
    examples: [{ sentence: "The baby is following close to its mother." }],
    inflections: {
      pastTense: "followed",
      pastParticiple: "followed",
      thirdPerson: "follows",
      presentParticiple: "following"
    },
    similarWords: [{"word": "allow", "reason": "\u5f62\u8fd1", "zh": "\u5141\u8bb8\uff1b\u51c6\u8bb8"}],
    phrases: [{ phrase: "follow me", meaning: "跟我来" }, { phrase: "follow the rules", meaning: "遵守规则" }]
  },
  {
    id: "heat",
    word: "heat",
    syllables: ["heat"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something hot", zh: "\u70ed\uff1b\u52a0\u70ed" }],
    examples: [{ sentence: "He lighted the fire to heat the cold room." }],
    inflections: {
      pastTense: "heated",
      pastParticiple: "heated",
      thirdPerson: "heats",
      presentParticiple: "heating"
    },
    similarWords: [{"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}, {"word": "treat", "reason": "\u5f62\u8fd1", "zh": "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597"}],
    phrases: [{ phrase: "heat up", meaning: "加热" }, { phrase: "in the heat", meaning: "在炎热中" }]
  },
  {
    id: "rainbow",
    word: "rainbow",
    syllables: ["rainbow"],
    partOfSpeech: "n.",
    definitions: [{ en: "a curved line of colors in the sky", zh: "\u5f69\u8679\uff1b\u4e94\u5f69\u7684" }],
    examples: [{ sentence: "There are two rainbows in the sky." }],
    inflections: {
      plural: "rainbows"
    },
    rootAffix: { explanation: "rain\u96e8 + bow\u5f13 = \u96e8\u540e\u5f13\u5f62\u2192\u5f69\u8679" },
    mnemonics: "rain(\u96e8) + bow(\u5f13) = \u96e8\u540e\u5f13\u5f62\u5f69\u8679",
    phrases: [{ phrase: "rainbow colors", meaning: "彩虹色" }, { phrase: "rainbow after rain", meaning: "雨后彩虹" }]
  },
  {
    id: "spread",
    word: "spread",
    syllables: ["spread"],
    partOfSpeech: "v.",
    definitions: [{ en: "to open or place something so that it covers a large area", zh: "\u4f20\u64ad\uff1b\u5c55\u5f00" }],
    examples: [{ sentence: "She is spreading the blanket on the grass." }],
    inflections: {
      pastTense: "spread",
      pastParticiple: "spread",
      thirdPerson: "spreads",
      presentParticiple: "spreading"
    },
    similarWords: [{"word": "bread", "reason": "\u5f62\u8fd1", "zh": "\u9762\u5305"}],
    phrases: [{ phrase: "spread out", meaning: "展开" }, { phrase: "spread the news", meaning: "传播消息" }]
  },
  {
    id: "tired",
    word: "tired",
    syllables: ["tired"],
    partOfSpeech: "adj.",
    definitions: [{ en: "needing rest or sleep", zh: "\u75b2\u52b3\u7684\uff1b\u7d2f\u7684" }],
    examples: [{ sentence: "Nancy was so tired that she fell asleep in English class." }],
    inflections: {
      comparative: "more tired",
      superlative: "most tired"
    },
    synonyms: [{"word": "exhausted", "zh": "精疲力竭的"}, {"word": "weary", "zh": "疲倦的；厌烦的"}],
    similarWords: [{"word": "tire", "reason": "\u62d3\u5c55", "zh": "使疲劳"}],
    phrases: [{ phrase: "tired of", meaning: "厌倦" }, { phrase: "feel tired", meaning: "感到累" }]
  },
  {
    id: "tower",
    word: "tower",
    syllables: ["tower"],
    partOfSpeech: "n.",
    definitions: [{ en: "a tall and narrow building", zh: "\u5854\uff1b\u9ad8\u697c" }],
    examples: [{ sentence: "Seeing the Eiffel Tower is one of the best memories of my trip." }],
    inflections: {
      plural: "towers"
    },
    similarWords: [{"word": "flower", "reason": "\u5f62\u8fd1", "zh": "\u82b1\uff0c\u82b1\u6735"}, {"word": "power", "reason": "\u5f62\u8fd1", "zh": "\u529b\u91cf\uff1b\u7535\u529b"}, {"word": "answer", "reason": "\u5f62\u8fd1", "zh": "\u56de\u7b54\uff0c\u7b54\u6848"}],
    phrases: [{ phrase: "tower block", meaning: "塔楼" }, { phrase: "Eiffel Tower", meaning: "埃菲尔铁塔" }]
  },
  {
    id: "unit",
    word: "unit",
    syllables: ["unit"],
    partOfSpeech: "n.",
    definitions: [{ en: "one part of something", zh: "\u5355\u5143\uff1b\u5355\u4f4d" }],
    examples: [{ sentence: "The topic of this math unit is difficult." }],
    inflections: {
      plural: "units"
    },
    phrases: [{ phrase: "unit of", meaning: "单位" }, { phrase: "family unit", meaning: "家庭单位" }],
    rootAffix: { explanation: "uni-一 + -it = 单位" }
  },
  {
    id: "vote",
    word: "vote",
    syllables: ["vote"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make a choice for or against a person or thing", zh: "\u6295\u7968\uff1b\u9009\u4e3e" }],
    examples: [{ sentence: "The audience voted for the best singer." }],
    inflections: {
      pastTense: "voted",
      pastParticiple: "voted",
      thirdPerson: "votes",
      presentParticiple: "voting"
    },
    phrases: [{ phrase: "vote for", meaning: "投票支持" }, { phrase: "vote against", meaning: "投票反对" }],
    similarWords: [{"word": "voter", "reason": "\u62d3\u5c55", "zh": "投票者"}, {"word": "voting", "reason": "\u62d3\u5c55", "zh": "投票"}]
  },
  {
    id: "climb",
    word: "climb",
    syllables: ["climb"],
    partOfSpeech: "v.",
    definitions: [{ en: "to go up or down using your feet and hands", zh: "\u722c\uff1b\u6500\u767b" }],
    examples: [{ sentence: "Pam likes to exercise by climbing the wall." }],
    inflections: {
      pastTense: "climbed",
      pastParticiple: "climbed",
      thirdPerson: "climbs",
      presentParticiple: "climbing"
    },
    phrases: [{ phrase: "climb up", meaning: "爬上" }, { phrase: "climb the mountain", meaning: "爬山" }],
    similarWords: [{"word": "climber", "reason": "\u62d3\u5c55", "zh": "登山者"}, {"word": "climbing", "reason": "\u62d3\u5c55", "zh": "攀爬"}]
  },
  {
    id: "describe",
    word: "describe",
    syllables: ["de", "scribe"],
    partOfSpeech: "v.",
    definitions: [{ en: "to talk about what something is like", zh: "\u63cf\u8ff0\uff1b\u5f62\u5bb9" }],
    examples: [{ sentence: "She is describing the result on the board." }],
    inflections: {
      pastTense: "described",
      pastParticiple: "described",
      thirdPerson: "describes",
      presentParticiple: "describing"
    },
    rootAffix: { explanation: "de-\u5411\u4e0b + scrib\u5199 + -e = \u5199\u4e0b\u6765\u2192\u63cf\u8ff0" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ade-\u5411\u4e0b + scrib\u5199 + -e = \u5199\u4e0b\u6765\u2192\u63cf\u8ff0",
    similarWords: [{"word": "description", "reason": "\u62d3\u5c55", "zh": "描述；描写"}],
    phrases: [{ phrase: "describe as", meaning: "描述为" }, { phrase: "describe to", meaning: "向...描述" }]
  },
  {
    id: "energy",
    word: "energy",
    syllables: ["energy"],
    partOfSpeech: "n.",
    definitions: [{ en: "power; the ability to be active", zh: "\u80fd\u91cf\uff1b\u7cbe\u529b" }],
    examples: [{ sentence: "The dog has a lot of energy. He plays all day." }],
    similarWords: [{"word": "energetic", "reason": "\u62d3\u5c55", "zh": "精力充沛的"}],
    phrases: [{ phrase: "full of energy", meaning: "充满活力" }, { phrase: "save energy", meaning: "节约能源" }]
  },
  {
    id: "engine",
    word: "engine",
    syllables: ["engine"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of a car that makes power for it to move", zh: "\u5f15\u64ce\uff1b\u53d1\u52a8\u673a" }],
    examples: [{ sentence: "Al reaches into the engine to fix the problem." }],
    inflections: {
      plural: "engines"
    },
    similarWords: [{"word": "imagine", "reason": "\u5f62\u8fd1", "zh": "\u60f3\u8c61\uff1b\u8bbe\u60f3"}, {"word": "machine", "reason": "\u5f62\u8fd1", "zh": "\u673a\u5668\uff1b\u673a\u68b0"}, {"word": "shine", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u5149\uff1b\u95ea\u8000"}],
    phrases: [{ phrase: "engine room", meaning: "引擎室" }, { phrase: "search engine", meaning: "搜索引擎" }]
  },
  {
    id: "field",
    word: "field",
    syllables: ["field"],
    partOfSpeech: "n.",
    definitions: [{ en: "a grassy area that has no trees or buildings", zh: "\u7530\u91ce\uff1b\u9886\u57df\uff1b\u7403\u573a" }],
    examples: [{ sentence: "Bob\u2019s neighbor allows him to hunt in his field." }],
    inflections: {
      plural: "fields"
    },
    phrases: [{ phrase: "field trip", meaning: "实地考察" }, { phrase: "in the field", meaning: "在现场" }]
  },
  {
    id: "include",
    word: "include",
    syllables: ["include"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have a person or thing as part of a group", zh: "\u5305\u62ec\uff1b\u5305\u542b" }],
    examples: [{ sentence: "Our new team members include Joe, Min, and Brian." }],
    inflections: {
      pastTense: "included",
      pastParticiple: "included",
      thirdPerson: "includes",
      presentParticiple: "including"
    },
    similarWords: [{"word": "including", "reason": "\u62d3\u5c55", "zh": "包括……在内"}],
    phrases: [{ phrase: "include in", meaning: "包括" }, { phrase: "not include", meaning: "不包括" }]
  },
  {
    id: "perfect",
    word: "perfect",
    syllables: ["perfect"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not having anything wrong", zh: "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684" }],
    examples: [{ sentence: "Marvin received a perfect score on his college exam." }],
    inflections: {
      comparative: "more perfect",
      superlative: "most perfect"
    },
    similarWords: [{"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}, {"word": "select", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6311\u9009"}, {"word": "collect", "reason": "\u5f62\u8fd1", "zh": "\u6536\u96c6\uff1b\u91c7\u96c6"}],
    phrases: [{ phrase: "perfect for", meaning: "完美适合" }, { phrase: "perfect match", meaning: "完美匹配" }],
    rootAffix: { explanation: "per-彻底 + fect做 = 完美的" }
  },
  {
    id: "rise",
    word: "rise",
    syllables: ["rise"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move upward", zh: "\u4e0a\u5347\uff1b\u5347\u8d77" }],
    examples: [{ sentence: "The airplane rises in the sky." }],
    inflections: {
      pastTense: "rose",
      pastParticiple: "risen",
      thirdPerson: "rises",
      presentParticiple: "rising"
    },
    similarWords: [{"word": "noise", "reason": "\u5f62\u8fd1", "zh": "\u566a\u97f3"}, {"word": "raise", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u9ad8\uff1b\u629a\u517b\uff1b\u4e3e\u8d77"}, {"word": "wise", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u660e\u667a\u7684"}],
    phrases: [{ phrase: "rise up", meaning: "起来" }, { phrase: "rise and fall", meaning: "起落" }],
    antonyms: [{ word: "fall", zh: "落下" }]
  },
  {
    id: "shape",
    word: "shape",
    syllables: ["shape"],
    partOfSpeech: "n.",
    definitions: [{ en: "the outline of something", zh: "\u5f62\u72b6\uff1b\u4f7f\u6210\u5f62" }],
    examples: [{ sentence: "The cookie is in the shape of a heart." }],
    inflections: {
      plural: "shapes"
    },
    similarWords: [{"word": "shake", "reason": "\u5f62\u8fd1", "zh": "\u6447\u6643\uff1b\u6296\u52a8"}, {"word": "share", "reason": "\u5f62\u8fd1", "zh": "\u5206\u4eab\uff1b\u4efd\u989d"}],
    phrases: [{ phrase: "in shape", meaning: "保持体型" }, { phrase: "shape of", meaning: "...的形状" }]
  },
  {
    id: "stone",
    word: "stone",
    syllables: ["stone"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small rock", zh: "\u77f3\u5934\uff1b\u77f3\u5757" }],
    examples: [{ sentence: "Meg added two new stones to her collection." }],
    similarWords: [{"word": "phone", "reason": "\u5f62\u8fd1", "zh": "\u7535\u8bdd"}, {"word": "alone", "reason": "\u5f62\u8fd1", "zh": "\u72ec\u81ea\u7684\uff0c\u5355\u72ec\u7684"}, {"word": "store", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}],
    phrases: [{ phrase: "stone age", meaning: "石器时代" }, { phrase: "stone cold", meaning: "冰冷的" }]
  },
  {
    id: "bake",
    word: "bake",
    syllables: ["bake"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something and cook it in an oven", zh: "\u70d8\u7119\uff1b\u70e4" }],
    examples: [{ sentence: "Mom is baking some muffins." }],
    inflections: {
      pastTense: "baked",
      pastParticiple: "baked",
      thirdPerson: "bakes",
      presentParticiple: "baking"
    },
    similarWords: [{"word": "wake", "reason": "\u5f62\u8fd1", "zh": "\u9192\u6765"}, {"word": "take", "reason": "\u5f62\u8fd1", "zh": "\u62ff"}, {"word": "make", "reason": "\u5f62\u8fd1", "zh": "\u505a\uff0c\u5236\u9020"}],
    phrases: [{ phrase: "bake a cake", meaning: "烤蛋糕" }, { phrase: "bake in the oven", meaning: "在烤箱里烤" }]
  },
  {
    id: "communicate",
    word: "communicate",
    syllables: ["com", "mu", "ni", "cate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to share thoughts and feelings with another person", zh: "\u4ea4\u6d41\uff1b\u6c9f\u901a" }],
    examples: [{ sentence: "The man and woman communicate well at work." }],
    inflections: {
      pastTense: "communicated",
      pastParticiple: "communicated",
      thirdPerson: "communicates",
      presentParticiple: "communicating"
    },
    rootAffix: { explanation: "com-\u5171\u540c + mun\u670d\u52a1 + -icate = \u5171\u540c\u670d\u52a1\u2192\u4ea4\u6d41" },
    similarWords: [{"word": "concentrate", "reason": "\u5f62\u8fd1", "zh": "\u96c6\u4e2d\uff1b\u4e13\u6ce8"}, {"word": "congratulate", "reason": "\u5f62\u8fd1", "zh": "\u795d\u8d3a"}, {"word": "appreciate", "reason": "\u5f62\u8fd1", "zh": "\u611f\u6fc0\uff1b\u6b23\u8d4f"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acom-\u5171\u540c + mun\u670d\u52a1 + -icate = \u5171\u540c\u670d\u52a1\u2192\u4ea4\u6d41",
    phrases: [{ phrase: "communicate with", meaning: "和...交流" }, { phrase: "communicate by", meaning: "通过...交流" }]
  },
  {
    id: "deliver",
    word: "deliver",
    syllables: ["deliver"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take something to a person or place", zh: "\u9012\u9001\uff1b\u53d1\u8a00" }],
    examples: [{ sentence: "He delivers the box to the woman." }],
    inflections: {
      pastTense: "delivered",
      pastParticiple: "delivered",
      thirdPerson: "delivers",
      presentParticiple: "delivering"
    },
    similarWords: [{"word": "discover", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u73b0\uff1b\u53d1\u89c9"}, {"word": "clever", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684"}],
    phrases: [{ phrase: "deliver to", meaning: "送到" }, { phrase: "deliver a speech", meaning: "发表演讲" }]
  },
  {
    id: "direct",
    word: "direct",
    syllables: ["direct"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell an actor or a group of actors what to do", zh: "\u76f4\u63a5\u7684\uff1b\u6307\u5bfc" }],
    examples: [{ sentence: "The woman in the middle is directing the movie." }],
    inflections: {
      pastTense: "directed",
      pastParticiple: "directed",
      thirdPerson: "directs",
      presentParticiple: "directing"
    },
    similarWords: [{"word": "correct", "reason": "\u5f62\u8fd1", "zh": "\u6b63\u786e\u7684"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "direct to", meaning: "指向" }, { phrase: "direct speech", meaning: "直接引语" }]
  },
  {
    id: "goal",
    word: "goal",
    syllables: ["goal"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you are trying to do", zh: "\u76ee\u6807\uff1b\u7403\u95e8" }],
    examples: [{ sentence: "He reached his goal of climbing to the top of the mountain." }],
    inflections: {
      plural: "goals"
    },
    similarWords: [{"word": "goat", "reason": "\u5f62\u8fd1", "zh": "\u5c71\u7f8a"}],
    phrases: [{ phrase: "goal in life", meaning: "人生目标" }, { phrase: "score a goal", meaning: "进球" }]
  },
  {
    id: "history",
    word: "history",
    syllables: ["his", "to", "ry"],
    partOfSpeech: "n.",
    definitions: [{ en: "events in the past", zh: "\u5386\u53f2\uff1b\u7ecf\u5386" }],
    examples: [{ sentence: "The pyramids in Egypt are an important part of history." }],
    inflections: {
      plural: "histories"
    },
    rootAffix: { explanation: "hist\u6545\u4e8b + -ory = \u6545\u4e8b\u2192\u5386\u53f2" },
    similarWords: [{"word": "factory", "reason": "\u5f62\u8fd1", "zh": "\u5de5\u5382"}, {"word": "memory", "reason": "\u5f62\u8fd1", "zh": "\u8bb0\u5fc6\uff1b\u56de\u5fc6"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ahist\u6545\u4e8b + -ory = \u6545\u4e8b\u2192\u5386\u53f2",
    phrases: [{ phrase: "history class", meaning: "历史课" }, { phrase: "make history", meaning: "创造历史" }]
  },
  {
    id: "inform",
    word: "inform",
    syllables: ["inform"],
    partOfSpeech: "v.",
    definitions: [{ en: "to let others know about something", zh: "\u901a\u77e5\uff1b\u544a\u77e5" }],
    examples: [{ sentence: "Ed informed the man that he got the job." }],
    inflections: {
      pastTense: "informed",
      pastParticiple: "informed",
      thirdPerson: "informs",
      presentParticiple: "informing"
    },
    similarWords: [{"word": "perform", "reason": "\u5f62\u8fd1", "zh": "\u8868\u6f14\uff1b\u6267\u884c"}, {"word": "uniform", "reason": "\u5f62\u8fd1", "zh": "\u5236\u670d\uff1b\u7edf\u4e00\u7684"}, {"word": "storm", "reason": "\u5f62\u8fd1", "zh": "\u66b4\u98ce\u96e8\uff1b\u98ce\u66b4"}, {"word": "form", "reason": "\u62d3\u5c55", "zh": "\u5f62\u5f0f\uff1b\u8868\u683c\uff1b\u5f62\u6210"}],
    phrases: [{ phrase: "inform of", meaning: "通知" }, { phrase: "keep informed", meaning: "保持了解" }],
    rootAffix: { explanation: "in-进 + form形状 = 通知" }
  },
  {
    id: "mail",
    word: "mail",
    syllables: ["mail"],
    partOfSpeech: "n.",
    definitions: [{ en: "letters or packages sent to others", zh: "\u90ae\u4ef6\uff1b\u90ae\u5bc4" }],
    examples: [{ sentence: "He collects the mail in the afternoon." }],
    inflections: {
      plural: "mails"
    },
    similarWords: [{"word": "fail", "reason": "\u5f62\u8fd1", "zh": "\u5931\u8d25\uff1b\u4e0d\u53ca\u683c"}, {"word": "main", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u8981\u7684\uff1b\u6700\u91cd\u8981\u7684"}],
    phrases: [{ phrase: "mail box", meaning: "邮箱" }, { phrase: "by mail", meaning: "通过邮寄" }]
  },
  {
    id: "march",
    word: "march",
    syllables: ["march"],
    partOfSpeech: "v.",
    definitions: [{ en: "to walk as a group in step with each other", zh: "\u4e09\u6708\uff1b\u884c\u519b\uff1b\u524d\u8fdb" }],
    examples: [{ sentence: "The band is marching down the street." }],
    inflections: {
      pastTense: "marched",
      pastParticiple: "marched",
      thirdPerson: "marches",
      presentParticiple: "marching"
    },
    similarWords: [{"word": "search", "reason": "\u5f62\u8fd1", "zh": "\u641c\u7d22\uff1b\u641c\u5bfb"}, {"word": "match", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4"}],
    phrases: [{ phrase: "march along", meaning: "前进" }, { phrase: "March wind", meaning: "三月的风" }]
  },
  {
    id: "whole",
    word: "whole",
    syllables: ["whole"],
    partOfSpeech: "adj.",
    definitions: [{ en: "all of something", zh: "\u6574\u4e2a\u7684\uff1b\u5168\u90e8\u7684" }],
    examples: [{ sentence: "I do not want one piece of pizza. I want to eat the whole thing!" }],
    inflections: {
      comparative: "wholer",
    },
    similarWords: [{"word": "hole", "reason": "\u5f62\u8fd1", "zh": "\u6d1e\uff1b\u5b54\uff1b\u5751"}, {"word": "role", "reason": "\u5f62\u8fd1", "zh": "\u89d2\u8272\uff1b\u4f5c\u7528"}],
    phrases: [{ phrase: "the whole day", meaning: "一整天" }, { phrase: "as a whole", meaning: "作为一个整体" }]
  },
  {
    id: "appear",
    word: "appear",
    syllables: ["ap", "pear"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be seen", zh: "\u51fa\u73b0\uff1b\u663e\u5f97" }],
    examples: [{ sentence: "The actress will appear in the play every night this week." }],
    inflections: {
      pastTense: "appeared",
      pastParticiple: "appeared",
      thirdPerson: "appears",
      presentParticiple: "appearing"
    },
    similarWords: [{"word": "clear", "reason": "\u5f62\u8fd1", "zh": "\u6e05\u695a\u7684"}, {"word": "disappear", "reason": "\u62d3\u5c55", "zh": "\u6d88\u5931\uff1b\u4e0d\u89c1"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aap \u00b7 pear",
    phrases: [{ phrase: "appear in", meaning: "出现在" }, { phrase: "appear to be", meaning: "似乎是" }]
  },
  {
    id: "community",
    word: "community",
    syllables: ["community"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group of people living in the same area", zh: "\u793e\u533a\uff1b\u56e2\u4f53" }],
    examples: [{ sentence: "Alice lives in a very nice community." }],
    inflections: {
      plural: "communities"
    },
    phrases: [{ phrase: "community center", meaning: "社区中心" }, { phrase: "local community", meaning: "当地社区" }]
  },
  {
    id: "festival",
    word: "festival",
    syllables: ["festival"],
    partOfSpeech: "n.",
    definitions: [{ en: "a special party with events to celebrate something", zh: "\u8282\u65e5\uff1b\u5e86\u795d\u6d3b\u52a8" }],
    examples: [{ sentence: "People in India throw colors at each other during the Holi festival." }],
    inflections: {
      plural: "festivals"
    },
    phrases: [{ phrase: "Spring Festival", meaning: "春节" }, { phrase: "music festival", meaning: "音乐节" }],
    similarWords: [{"word": "festive", "reason": "\u62d3\u5c55", "zh": "节日的"}]
  },
  {
    id: "interview",
    word: "interview",
    syllables: ["in", "ter", "view"],
    partOfSpeech: "v.",
    definitions: [{ en: "to ask someone many questions", zh: "\u91c7\u8bbf\uff1b\u9762\u8bd5" }],
    examples: [{ sentence: "Jill was interviewed for an important job at an international airport." }],
    inflections: {
      pastTense: "interviewed",
      pastParticiple: "interviewed",
      thirdPerson: "interviews",
      presentParticiple: "interviewing"
    },
    rootAffix: { explanation: "inter-\u76f8\u4e92 + view\u770b = \u76f8\u4e92\u770b\u2192\u9762\u8bd5" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ainter-\u76f8\u4e92 + view\u770b = \u76f8\u4e92\u770b\u2192\u9762\u8bd5",
    phrases: [{ phrase: "job interview", meaning: "工作面试" }, { phrase: "have an interview", meaning: "面试" }],
    similarWords: [{"word": "interviewer", "reason": "\u62d3\u5c55", "zh": "面试官"}]
  },
  {
    id: "million",
    word: "million",
    syllables: ["mil", "lion"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of the number 1,000,000", zh: "\u767e\u4e07\uff1b\u65e0\u6570" }],
    examples: [{ sentence: "The bag is filled with a million dollars." }],
    inflections: {
      comparative: "more million",
      superlative: "most million"
    },
    rootAffix: { explanation: "mille(\u5343) + -one(\u5927) = \u5343\u7684\u5343\u500d\u2192\u767e\u4e07" },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amille(\u5343) + -one(\u5927) = \u5343\u7684\u5343\u500d\u2192\u767e\u4e07",
    phrases: [{ phrase: "millions of", meaning: "数百万" }, { phrase: "one million", meaning: "一百万" }]
  },
  {
    id: "newspaper",
    word: "newspaper",
    syllables: ["news", "pa", "per"],
    partOfSpeech: "n.",
    definitions: [{ en: "a set of large papers with stories about true events", zh: "\u62a5\u7eb8" }],
    examples: [{ sentence: "The newspaper describes events around the world." }],
    inflections: {
      plural: "newspapers"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1anews \u00b7 pa \u00b7 per",
    phrases: [{ phrase: "newspaper article", meaning: "报纸文章" }, { phrase: "read newspaper", meaning: "读报纸" }]
  },
  {
    id: "report",
    word: "report",
    syllables: ["report"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give news on television or in a newspaper", zh: "\u62a5\u544a\uff1b\u62a5\u9053" }],
    examples: [{ sentence: "Maria is reporting the event while it is happening." }],
    inflections: {
      pastTense: "reported",
      pastParticiple: "reported",
      thirdPerson: "reports",
      presentParticiple: "reporting"
    },
    similarWords: [{"word": "airport", "reason": "\u5f62\u8fd1", "zh": "\u673a\u573a\uff1b\u822a\u7a7a\u7ad9"}, {"word": "support", "reason": "\u5f62\u8fd1", "zh": "\u652f\u6301\uff1b\u652f\u6491"}, {"word": "sport", "reason": "\u5f62\u8fd1", "zh": "\u8fd0\u52a8\uff1b\u4f53\u80b2"}],
    phrases: [{ phrase: "report to", meaning: "向...报告" }, { phrase: "book report", meaning: "读书报告" }],
    rootAffix: { explanation: "re-回 + port带 = 报告" }
  },
  {
    id: "sport",
    word: "sport",
    syllables: ["sport"],
    partOfSpeech: "n.",
    definitions: [{ en: "an active game with rules that people play", zh: "\u8fd0\u52a8\uff1b\u4f53\u80b2" }],
    examples: [{ sentence: "The three children like different sports." }],
    inflections: {
      plural: "sports"
    },
    similarWords: [{"word": "report", "reason": "\u5f62\u8fd1", "zh": "\u62a5\u544a\uff1b\u62a5\u9053"}, {"word": "short", "reason": "\u5f62\u8fd1", "zh": "\u77ed\u7684\uff0c\u77ee\u7684"}, {"word": "spot", "reason": "\u5f62\u8fd1", "zh": "\u5730\u70b9\uff1b\u6591\u70b9\uff1b\u770b\u89c1"}],
    phrases: [{ phrase: "sport meet", meaning: "运动会" }, { phrase: "sport shoes", meaning: "运动鞋" }]
  },
  {
    id: "support",
    word: "support",
    syllables: ["sup", "port"],
    partOfSpeech: "v.",
    definitions: [{ en: "to show you like and want to help a person or group", zh: "\u652f\u6301\uff1b\u652f\u6491" }],
    examples: [{ sentence: "They are supporting William during this difficult time." }],
    inflections: {
      pastTense: "supported",
      pastParticiple: "supported",
      thirdPerson: "supports",
      presentParticiple: "supporting"
    },
    similarWords: [{"word": "airport", "reason": "\u5f62\u8fd1", "zh": "\u673a\u573a\uff1b\u822a\u7a7a\u7ad9"}, {"word": "report", "reason": "\u5f62\u8fd1", "zh": "\u62a5\u544a\uff1b\u62a5\u9053"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asup \u00b7 port",
    phrases: [{ phrase: "support for", meaning: "对...的支持" }, { phrase: "in support of", meaning: "支持" }],
    rootAffix: { explanation: "sup-下 + port撑 = 支持" }
  },
  {
    id: "uniform",
    word: "uniform",
    syllables: ["u", "ni", "form"],
    partOfSpeech: "n.",
    definitions: [{ en: "the clothing worn by members of a group", zh: "\u5236\u670d\uff1b\u7edf\u4e00\u7684" }],
    examples: [{ sentence: "The workers wear different uniforms for their jobs." }],
    inflections: {
      plural: "uniforms"
    },
    rootAffix: { explanation: "uni-\u4e00 + form\u5f62\u5f0f = \u4e00\u79cd\u5f62\u5f0f\u2192\u5236\u670d" },
    similarWords: [{"word": "inform", "reason": "\u5f62\u8fd1", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}, {"word": "perform", "reason": "\u5f62\u8fd1", "zh": "\u8868\u6f14\uff1b\u6267\u884c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1auni-\u4e00 + form\u5f62\u5f0f = \u4e00\u79cd\u5f62\u5f0f\u2192\u5236\u670d",
    phrases: [{ phrase: "school uniform", meaning: "校服" }, { phrase: "in uniform", meaning: "穿制服" }]
  },
  {
    id: "brave",
    word: "brave",
    syllables: ["brave"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not afraid", zh: "\u52c7\u6562\u7684\uff1b\u65e0\u754f\u7684" }],
    examples: [{ sentence: "The brave man returns to the fire to save more people." }],
    inflections: {
      comparative: "braver",
    },
    synonyms: [{"word": "courageous", "zh": "勇敢的"}, {"word": "fearless", "zh": "无畏的"}],
    similarWords: [{"word": "leave", "reason": "\u5f62\u8fd1", "zh": "\u79bb\u5f00\uff1b\u51fa\u53d1"}, {"word": "wave", "reason": "\u5f62\u8fd1", "zh": "\u6ce2\u6d6a\uff1b\u6325\u624b"}, {"word": "have", "reason": "\u5f62\u8fd1", "zh": "\u6709\uff0c\u62e5\u6709"}],
    phrases: [{ phrase: "brave enough", meaning: "足够勇敢" }, { phrase: "brave heart", meaning: "勇敢的心" }]
  },
  {
    id: "goat",
    word: "goat",
    syllables: ["goat"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small animal that lives on a farm or in the mountains", zh: "\u5c71\u7f8a" }],
    examples: [{ sentence: "The goat is crossing the field." }],
    inflections: {
      plural: "goats"
    },
    similarWords: [{"word": "boat", "reason": "\u5f62\u8fd1", "zh": "\u8239"}, {"word": "goal", "reason": "\u5f62\u8fd1", "zh": "\u76ee\u6807\uff1b\u7403\u95e8"}],
    phrases: [{ phrase: "goat milk", meaning: "羊奶" }, { phrase: "old goat", meaning: "老山羊" }]
  },
  {
    id: "hang",
    word: "hang",
    syllables: ["hang"],
    partOfSpeech: "v.",
    definitions: [{ en: "to place something so that it is held at the top", zh: "\u60ac\u6302\uff1b\u540a" }],
    examples: [{ sentence: "They hang their clothes on the line to dry." }],
    inflections: {
      pastTense: "hung",
      pastParticiple: "hung",
      thirdPerson: "hangs",
      presentParticiple: "hanging"
    },
    phrases: [{ phrase: "hang out", meaning: "出去玩" }, { phrase: "hang up", meaning: "挂断" }],
    synonyms: [{"word": "suspend", "zh": "悬挂"}],
    similarWords: [{"word": "hanger", "reason": "\u62d3\u5c55", "zh": "衣架"}, {"word": "hanging", "reason": "\u62d3\u5c55", "zh": "悬挂"}]
  },
  {
    id: "ice",
    word: "ice",
    syllables: ["ice"],
    partOfSpeech: "n.",
    definitions: [{ en: "frozen water", zh: "\u51b0\uff1b\u51b0\u6dc7\u6dcb" }],
    examples: [{ sentence: "We put ice in our drinks to cool them." }],
    similarWords: [{"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}, {"word": "nice", "reason": "\u5f62\u8fd1", "zh": "\u597d\u7684\uff0c\u53cb\u597d\u7684"}],
    phrases: [{ phrase: "ice cream", meaning: "冰淇淋" }, { phrase: "ice cube", meaning: "冰块" }]
  },
  {
    id: "insect",
    word: "insect",
    syllables: ["insect"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small animal with six legs", zh: "\u6606\u866b\uff1b\u866b" }],
    examples: [{ sentence: "The insect is especially beautiful." }],
    inflections: {
      plural: "insects"
    },
    similarWords: [{"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "select", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6311\u9009"}, {"word": "collect", "reason": "\u5f62\u8fd1", "zh": "\u6536\u96c6\uff1b\u91c7\u96c6"}],
    phrases: [{ phrase: "insect bite", meaning: "虫咬" }, { phrase: "insect and bug", meaning: "昆虫和虫子" }]
  },
  {
    id: "raise",
    word: "raise",
    syllables: ["raise"],
    partOfSpeech: "v.",
    definitions: [{ en: "to care for an animal or plant as it grows", zh: "\u63d0\u9ad8\uff1b\u629a\u517b\uff1b\u4e3e\u8d77" }],
    examples: [{ sentence: "He spreads food on the ground for the chickens he is raising." }],
    inflections: {
      pastTense: "raised",
      pastParticiple: "raised",
      thirdPerson: "raises",
      presentParticiple: "raising"
    },
    similarWords: [{"word": "noise", "reason": "\u5f62\u8fd1", "zh": "\u566a\u97f3"}, {"word": "rise", "reason": "\u5f62\u8fd1", "zh": "\u4e0a\u5347\uff1b\u5347\u8d77"}, {"word": "wise", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u660e\u667a\u7684"}],
    phrases: [{ phrase: "raise money", meaning: "筹钱" }, { phrase: "raise one's hand", meaning: "举手" }],
    antonyms: [{ word: "lower", zh: "降低" }]
  },
  {
    id: "roll",
    word: "roll",
    syllables: ["roll"],
    partOfSpeech: "v.",
    definitions: [{ en: "to turn over and over", zh: "\u6eda\u52a8\uff1b\u5377" }],
    examples: [{ sentence: "He rolls the snowball across the yard." }],
    inflections: {
      pastTense: "rolled",
      pastParticiple: "rolled",
      thirdPerson: "rolls",
      presentParticiple: "rolling"
    },
    similarWords: [{"word": "role", "reason": "\u5f62\u8fd1", "zh": "\u89d2\u8272\uff1b\u4f5c\u7528"}],
    phrases: [{ phrase: "roll over", meaning: "翻滚" }, { phrase: "roll up", meaning: "卷起来" }]
  },
  {
    id: "sore",
    word: "sore",
    syllables: ["sore"],
    partOfSpeech: "adj.",
    definitions: [{ en: "hurting", zh: "\u75bc\u75db\u7684\uff1b\u9178\u75db\u7684" }],
    examples: [{ sentence: "She is putting something cold on her sore arm." }],
    inflections: {
      comparative: "sorer",
    },
    similarWords: [{"word": "store", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "score", "reason": "\u5f62\u8fd1", "zh": "\u5f97\u5206\uff1b\u5206\u6570"}],
    phrases: [{ phrase: "sore throat", meaning: "喉咙痛" }, { phrase: "sore eyes", meaning: "眼睛痛" }],
    synonyms: [{"word": "painful", "zh": "疼痛的"}]
  },
  {
    id: "tent",
    word: "tent",
    syllables: ["tent"],
    partOfSpeech: "n.",
    definitions: [{ en: "a covered place to sleep outside", zh: "\u5e10\u7bf7\uff1b\u5e10\u68da" }],
    examples: [{ sentence: "The children will sleep in tents." }],
    inflections: {
      plural: "tents"
    },
    similarWords: [{"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "rent", "reason": "\u5f62\u8fd1", "zh": "\u79df\u7528\uff1b\u79df\u91d1"}, {"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}],
    phrases: [{ phrase: "put up a tent", meaning: "搭帐篷" }, { phrase: "tent camp", meaning: "帐篷营地" }],
    rootAffix: { explanation: "tent伸展 = 帐篷(伸展的布)" }
  },
  {
    id: "village",
    word: "village",
    syllables: ["village"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very small town", zh: "\u6751\u5e84\uff1b\u4e61\u6751" }],
    examples: [{ sentence: "A story about this village appeared in the newspaper." }],
    inflections: {
      plural: "villages"
    },
    similarWords: [{"word": "language", "reason": "\u5f62\u8fd1", "zh": "\u8bed\u8a00"}, {"word": "message", "reason": "\u5f62\u8fd1", "zh": "\u6d88\u606f\uff1b\u7559\u8a00"}],
    phrases: [{ phrase: "village people", meaning: "村民" }, { phrase: "small village", meaning: "小村庄" }],
    rootAffix: { explanation: "villa别墅 + -age = 村庄" }
  },
  {
    id: "accident",
    word: "accident",
    syllables: ["accident"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sudden bad event in which someone might be hurt", zh: "\u4e8b\u6545\uff1b\u610f\u5916" }],
    examples: [{ sentence: "Dennis had an accident riding his bicycle. He hurt his leg." }],
    inflections: {
      plural: "accidents"
    },
    similarWords: [{"word": "confident", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u4fe1\u7684\uff1b\u6709\u4fe1\u5fc3\u7684"}, {"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}, {"word": "student", "reason": "\u5f62\u8fd1", "zh": "\u5b66\u751f"}],
    phrases: [{ phrase: "by accident", meaning: "意外地" }, { phrase: "car accident", meaning: "车祸" }],
    rootAffix: { explanation: "ac-去 + cid落 + -ent = 事故；意外" }
  },
  {
    id: "adventure",
    word: "adventure",
    syllables: ["ad", "ven", "ture"],
    partOfSpeech: "n.",
    definitions: [{ en: "an exciting experience", zh: "\u5192\u9669\uff1b\u5947\u9047" }],
    examples: [{ sentence: "They had a fun adventure on their vacation." }],
    inflections: {
      plural: "adventures"
    },
    similarWords: [{"word": "structure", "reason": "\u5f62\u8fd1", "zh": "\u7ed3\u6784\uff1b\u6784\u9020"}, {"word": "pleasure", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u4e50\uff1b\u6109\u5feb"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aad \u00b7 ven \u00b7 ture",
    phrases: [{ phrase: "adventure story", meaning: "冒险故事" }, { phrase: "great adventure", meaning: "伟大的冒险" }],
    rootAffix: { explanation: "ad-去 + vent来 + -ure = 冒险" }
  },
  {
    id: "corn",
    word: "corn",
    syllables: ["corn"],
    partOfSpeech: "n.",
    definitions: [{ en: "a vegetable with many small yellow seeds", zh: "\u7389\u7c73\uff1b\u8c37\u7269" }],
    examples: [{ sentence: "The corn looks delicious and fresh. I cannot wait to eat it." }],
    inflections: {
      plural: "corns"
    },
    phrases: [{ phrase: "corn on the cob", meaning: "玉米棒" }, { phrase: "pop corn", meaning: "爆米花" }]
  },
  {
    id: "develop",
    word: "develop",
    syllables: ["develop"],
    partOfSpeech: "v.",
    definitions: [{ en: "to create something over time", zh: "\u53d1\u5c55\uff1b\u5f00\u53d1" }],
    examples: [{ sentence: "They developed a plan to meet their goal." }],
    inflections: {
      pastTense: "developed",
      pastParticiple: "developed",
      thirdPerson: "develops",
      presentParticiple: "developing"
    },
    similarWords: [{"word": "development", "reason": "\u62d3\u5c55", "zh": "发展；开发"}],
    phrases: [{ phrase: "develop a habit", meaning: "养成习惯" }, { phrase: "develop into", meaning: "发展成" }]
  },
  {
    id: "medicine",
    word: "medicine",
    syllables: ["med", "i", "cine"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that helps a sick person or animal", zh: "\u836f\uff1b\u533b\u5b66" }],
    examples: [{ sentence: "This medicine will make your head feel better." }],
    inflections: {
      plural: "medicines"
    },
    rootAffix: { explanation: "med\u6cbb\u6108 + -icine = \u6cbb\u7597\u7684\u4e1c\u897f\u2192\u836f" },
    similarWords: [{"word": "machine", "reason": "\u5f62\u8fd1", "zh": "\u673a\u5668\uff1b\u673a\u68b0"}, {"word": "imagine", "reason": "\u5f62\u8fd1", "zh": "\u60f3\u8c61\uff1b\u8bbe\u60f3"}, {"word": "magazine", "reason": "\u5f62\u8fd1", "zh": "\u6742\u5fd7\uff1b\u671f\u520a"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amed\u6cbb\u6108 + -icine = \u6cbb\u7597\u7684\u4e1c\u897f\u2192\u836f",
    phrases: [{ phrase: "take medicine", meaning: "吃药" }, { phrase: "Chinese medicine", meaning: "中药" }]
  },
  {
    id: "own",
    word: "own",
    syllables: ["own"],
    partOfSpeech: "v.",
    definitions: [{ en: "to pay for something so it belongs to you", zh: "\u81ea\u5df1\u7684\uff1b\u62e5\u6709" }],
    examples: [{ sentence: "They own a house in a beautiful community." }],
    inflections: {
      pastTense: "owned",
      pastParticiple: "owned",
      thirdPerson: "owns",
      presentParticiple: "owning"
    },
    similarWords: [{"word": "town", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u9547\uff0c\u57ce\u9547"}],
    phrases: [{ phrase: "on one's own", meaning: "独自" }, { phrase: "own up", meaning: "承认" }]
  },
  {
    id: "product",
    word: "product",
    syllables: ["product"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is made or grown and sold", zh: "\u4ea7\u54c1\uff1b\u4ea7\u7269" }],
    examples: [{ sentence: "She is trying to decide which product to buy." }],
    inflections: {
      plural: "products"
    },
    similarWords: [{"word": "conduct", "reason": "\u5f62\u8fd1", "zh": "\u884c\u4e3a\uff1b\u5f15\u5bfc\uff1b\u6307\u6325"}, {"word": "produce", "reason": "\u5f62\u8fd1", "zh": "\u751f\u4ea7\uff1b\u51fa\u4ea7"}],
    phrases: [{ phrase: "product of", meaning: "...的产品" }, { phrase: "end product", meaning: "最终产品" }],
    rootAffix: { explanation: "pro-前 + duct引导 = 产品" }
  },
  {
    id: "quite",
    word: "quite",
    syllables: ["quite"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very", zh: "\u76f8\u5f53\uff1b\u975e\u5e38" }],
    examples: [{ sentence: "The tower is quite tall." }],
    similarWords: [{"word": "invite", "reason": "\u5f62\u8fd1", "zh": "\u9080\u8bf7"}, {"word": "write", "reason": "\u5f62\u8fd1", "zh": "\u5199\uff0c\u5199\u5b57"}, {"word": "polite", "reason": "\u5f62\u8fd1", "zh": "\u793c\u8c8c\u7684"}],
    phrases: [{ phrase: "quite a", meaning: "相当" }, { phrase: "quite well", meaning: "相当好" }]
  },
  {
    id: "roof",
    word: "roof",
    syllables: ["roof"],
    partOfSpeech: "n.",
    definitions: [{ en: "the top covering on a building", zh: "\u5c4b\u9876\uff1b\u9876\u90e8" }],
    examples: [{ sentence: "He is fixing a hole in the roof." }],
    inflections: {
      plural: "roofs"
    },
    similarWords: [{"word": "root", "reason": "\u5f62\u8fd1", "zh": "\u6839\uff1b\u6839\u6e90"}],
    phrases: [{ phrase: "roof of", meaning: "...的屋顶" }, { phrase: "under one roof", meaning: "在同一屋檐下" }]
  },
  {
    id: "rope",
    word: "rope",
    syllables: ["rope"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very thick and strong string", zh: "\u7ef3\u5b50\uff1b\u7ef3\u7d22" }],
    examples: [{ sentence: "The children are pulling on the rope." }],
    inflections: {
      plural: "ropes"
    },
    similarWords: [{"word": "hope", "reason": "\u5f62\u8fd1", "zh": "\u5e0c\u671b\uff0c\u671f\u5f85"}, {"word": "role", "reason": "\u5f62\u8fd1", "zh": "\u89d2\u8272\uff1b\u4f5c\u7528"}],
    phrases: [{ phrase: "rope ladder", meaning: "绳梯" }, { phrase: "jump rope", meaning: "跳绳" }]
  },
  {
    id: "carrot",
    word: "carrot",
    syllables: ["carrot"],
    partOfSpeech: "n.",
    definitions: [{ en: "an orange vegetable that grows under the ground", zh: "\u80e1\u841d\u535c" }],
    examples: [{ sentence: "We raised carrots in our garden." }],
    inflections: {
      plural: "carrots"
    },
    phrases: [{ phrase: "carrot and stick", meaning: "胡萝卜加大棒" }, { phrase: "carrot cake", meaning: "胡萝卜蛋糕" }]
  },
  {
    id: "cause",
    word: "cause",
    syllables: ["cause"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something happen", zh: "\u539f\u56e0\uff1b\u5f15\u8d77\uff1b\u5bfc\u81f4" }],
    examples: [{ sentence: "He caused the pieces to fall over." }],
    inflections: {
      pastTense: "caused",
      pastParticiple: "caused",
      thirdPerson: "causes",
      presentParticiple: "causing"
    },
    similarWords: [{"word": "house", "reason": "\u5f62\u8fd1", "zh": "\u623f\u5b50"}, {"word": "excuse", "reason": "\u5f62\u8fd1", "zh": "\u539f\u8c05\uff0c\u501f\u53e3"}, {"word": "case", "reason": "\u5f62\u8fd1", "zh": "\u6848\u4f8b\uff1b\u76d2\u5b50"}],
    phrases: [{ phrase: "cause trouble", meaning: "引起麻烦" }, { phrase: "cause and effect", meaning: "因果" }]
  },
  {
    id: "experiment",
    word: "experiment",
    syllables: ["ex", "per", "i", "ment"],
    partOfSpeech: "v.",
    definitions: [{ en: "to try something new", zh: "\u5b9e\u9a8c\uff1b\u8bd5\u9a8c" }],
    examples: [{ sentence: "Kelly enjoys experimenting with colors." }],
    inflections: {
      pastTense: "experimented",
      pastParticiple: "experimented",
      thirdPerson: "experiments",
      presentParticiple: "experimenting"
    },
    similarWords: [{"word": "environment", "reason": "\u5f62\u8fd1", "zh": "\u73af\u5883\uff1b\u5468\u56f4"}, {"word": "represent", "reason": "\u5f62\u8fd1", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}, {"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aex \u00b7 per \u00b7 i \u00b7 ment",
    phrases: [{ phrase: "do an experiment", meaning: "做实验" }, { phrase: "science experiment", meaning: "科学实验" }]
  },
  {
    id: "fry",
    word: "fry",
    syllables: ["fry"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cook in oil", zh: "\u6cb9\u70b8\uff1b\u714e" }],
    examples: [{ sentence: "He heats the pan and then fries food in it." }],
    inflections: {
      pastTense: "fried",
      pastParticiple: "fried",
      thirdPerson: "fries",
      presentParticiple: "frying"
    },
    similarWords: [{"word": "cry", "reason": "\u5f62\u8fd1", "zh": "\u54ed\uff0c\u54ed\u6ce3"}, {"word": "try", "reason": "\u5f62\u8fd1", "zh": "\u5c1d\u8bd5\uff0c\u52aa\u529b"}, {"word": "dry", "reason": "\u5f62\u8fd1", "zh": "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5"}],
    phrases: [{ phrase: "fry an egg", meaning: "煎蛋" }, { phrase: "stir fry", meaning: "炒" }]
  },
  {
    id: "ground",
    word: "ground",
    syllables: ["ground"],
    partOfSpeech: "n.",
    definitions: [{ en: "the land under your feet", zh: "\u5730\u9762\uff1b\u571f\u5730\uff1b grounds" }],
    examples: [{ sentence: "The newspaper lies on the ground." }],
    inflections: {
      plural: "grounds"
    },
    similarWords: [{"word": "sound", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "round", "reason": "\u5f62\u8fd1", "zh": "\u5706\u7684"}],
    phrases: [{ phrase: "on the ground", meaning: "在地上" }, { phrase: "ground floor", meaning: "一楼" }]
  },
  {
    id: "kill",
    word: "kill",
    syllables: ["kill"],
    partOfSpeech: "v.",
    definitions: [{ en: "to end a life", zh: "\u6740\uff1b\u6740\u6b7b" }],
    examples: [{ sentence: "I felt sad when I killed the insect on my desk." }],
    inflections: {
      pastTense: "killed",
      pastParticiple: "killed",
      thirdPerson: "kills",
      presentParticiple: "killing"
    },
    similarWords: [{"word": "skill", "reason": "\u5f62\u8fd1", "zh": "\u6280\u80fd\uff1b\u6280\u5de7"}, {"word": "ill", "reason": "\u5f62\u8fd1", "zh": "\u751f\u75c5\u7684"}, {"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}],
    phrases: [{ phrase: "kill time", meaning: "消磨时间" }, { phrase: "kill two birds", meaning: "一举两得" }]
  },
  {
    id: "mix",
    word: "mix",
    syllables: ["mix"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put two or more things together", zh: "\u6df7\u5408\uff1b\u6405\u62cc" }],
    examples: [{ sentence: "I like to mix different kinds of vegetables when I cook." }],
    inflections: {
      pastTense: "mixxed",
      pastParticiple: "mixxed",
      thirdPerson: "mixes",
      presentParticiple: "mixxing"
    },
    similarWords: [{"word": "fix", "reason": "\u5f62\u8fd1", "zh": "\u4fee\u7406"}],
    phrases: [{ phrase: "mix up", meaning: "混合" }, { phrase: "mix with", meaning: "和...混合" }]
  },
  {
    id: "possible",
    word: "possible",
    syllables: ["possible"],
    partOfSpeech: "adj.",
    definitions: [{ en: "able to be done", zh: "\u53ef\u80fd\u7684" }],
    examples: [{ sentence: "Mary said we could not climb to the top, but I knew it was possible." }],
    inflections: {
      comparative: "more possible",
      superlative: "most possible"
    },
    rootAffix: { explanation: "poss\u80fd + -ible = \u80fd\u505a\u7684\u2192\u53ef\u80fd\u7684" },
    similarWords: [{"word": "terrible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}, {"word": "trouble", "reason": "\u5f62\u8fd1", "zh": "\u9ebb\u70e6\uff1b\u56f0\u96be"}, {"word": "available", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u7528\u7684\uff1b\u53ef\u83b7\u5f97\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aposs\u80fd + -ible = \u80fd\u505a\u7684\u2192\u53ef\u80fd\u7684",
    phrases: [{ phrase: "as soon as possible", meaning: "尽快" }, { phrase: "if possible", meaning: "如果可能" }],
    antonyms: [{ word: "impossible", zh: "不可能的" }]
  },
  {
    id: "pot",
    word: "pot",
    syllables: ["pot"],
    partOfSpeech: "n.",
    definitions: [{ en: "a deep, round container used for cooking", zh: "\u9505\uff1b\u58f6\uff1b\u7f50" }],
    examples: [{ sentence: "The corn is cooking in a pot." }],
    inflections: {
      plural: "pots"
    },
    similarWords: [{"word": "spot", "reason": "\u5f62\u8fd1", "zh": "\u5730\u70b9\uff1b\u6591\u70b9\uff1b\u770b\u89c1"}, {"word": "put", "reason": "\u5f62\u8fd1", "zh": "\u653e\uff0c\u653e\u7f6e"}, {"word": "hot", "reason": "\u5f62\u8fd1", "zh": "\u70ed\u7684\uff1b\u8fa3\u7684"}],
    phrases: [{ phrase: "pot of", meaning: "一锅" }, { phrase: "pots and pans", meaning: "锅碗瓢盆" }]
  },
  {
    id: "proud",
    word: "proud",
    syllables: ["proud"],
    partOfSpeech: "adj.",
    definitions: [{ en: "feeling good about something done", zh: "\u9a84\u50b2\u7684\uff1b\u81ea\u8c6a\u7684" }],
    examples: [{ sentence: "His parents are proud of him for completing college." }],
    inflections: {
      comparative: "prouder",
      superlative: "proudest"
    },
    similarWords: [{"word": "loud", "reason": "\u5f62\u8fd1", "zh": "\u5927\u58f0\u7684\uff0c\u54cd\u4eae\u7684"}],
    phrases: [{ phrase: "proud of", meaning: "以...为荣" }, { phrase: "do proud", meaning: "引以为豪" }],
    synonyms: [{"word": "pleased", "zh": "自豪的"}]
  },
  {
    id: "lay",
    word: "lay",
    syllables: ["lay"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put something down carefully", zh: "\u653e\u7f6e\uff1b\u4ea7\u5375" }],
    examples: [{ sentence: "Ricky is laying the boards on the floor." }],
    inflections: {
      pastTense: "laid",
      pastParticiple: "laid",
      thirdPerson: "lays",
      presentParticiple: "layying"
    },
    similarWords: [{"word": "play", "reason": "\u5f62\u8fd1", "zh": "\u73a9\uff0c\u73a9\u800d\uff0c\u64ad\u653e"}, {"word": "day", "reason": "\u5f62\u8fd1", "zh": "\u5929\uff0c\u65e5\uff0c\u767d\u5929"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}],
    phrases: [{ phrase: "lay down", meaning: "放下" }, { phrase: "lay eggs", meaning: "下蛋" }]
  },
  {
    id: "list",
    word: "list",
    syllables: ["list"],
    partOfSpeech: "n.",
    definitions: [{ en: "a number of items that are needed", zh: "\u5217\u8868\uff1b\u6e05\u5355\uff1b\u5217\u5165" }],
    examples: [{ sentence: "I made a list of things I need to buy at the store." }],
    inflections: {
      plural: "lists"
    },
    similarWords: [{"word": "exist", "reason": "\u5f62\u8fd1", "zh": "\u5b58\u5728\uff1b\u751f\u5b58"}, {"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "lift", "reason": "\u5f62\u8fd1", "zh": "\u4e3e\u8d77\uff1b\u7535\u68af"}, {"word": "listen", "reason": "\u62d3\u5c55", "zh": "\u542c\uff0c\u503e\u542c"}],
    phrases: [{ phrase: "shopping list", meaning: "购物清单" }, { phrase: "on the list", meaning: "在列表上" }]
  },
  {
    id: "main",
    word: "main",
    syllables: ["main"],
    partOfSpeech: "adj.",
    definitions: [{ en: "most important", zh: "\u4e3b\u8981\u7684\uff1b\u6700\u91cd\u8981\u7684" }],
    examples: [{ sentence: "We drove through the village on the main road." }],
    inflections: {
      comparative: "mainer",
      superlative: "mainest"
    },
    similarWords: [{"word": "again", "reason": "\u5f62\u8fd1", "zh": "\u518d\u6b21\uff0c\u53c8"}, {"word": "train", "reason": "\u5f62\u8fd1", "zh": "\u706b\u8f66"}, {"word": "brain", "reason": "\u5f62\u8fd1", "zh": "\u5927\u8111\uff1b\u667a\u529b"}, {"word": "remain", "reason": "\u62d3\u5c55", "zh": "\u4fdd\u6301\uff1b\u5269\u4e0b"}],
    phrases: [{ phrase: "main idea", meaning: "主要观点" }, { phrase: "main road", meaning: "主路" }]
  },
  {
    id: "mark",
    word: "mark",
    syllables: ["mark"],
    partOfSpeech: "n.",
    definitions: [{ en: "a symbol or shape drawn on something", zh: "\u6807\u8bb0\uff1b\u5206\u6570\uff1b\u8bb0\u53f7" }],
    examples: [{ sentence: "He made a mark in the box next to his answer." }],
    inflections: {
      plural: "marks"
    },
    similarWords: [{"word": "park", "reason": "\u5f62\u8fd1", "zh": "\u516c\u56ed\uff0c\u505c\u8f66"}, {"word": "dark", "reason": "\u5f62\u8fd1", "zh": "\u9ed1\u6697\u7684\uff0c\u6697\u7684"}],
    phrases: [{ phrase: "mark on", meaning: "在...上做标记" }, { phrase: "question mark", meaning: "问号" }]
  },
  {
    id: "mistake",
    word: "mistake",
    syllables: ["mis", "take"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is not correct", zh: "\u9519\u8bef\uff1b\u5931\u8bef" }],
    examples: [{ sentence: "Does the teacher know she made a mistake?" }],
    inflections: {
      plural: "mistakes"
    },
    rootAffix: { explanation: "mis-\u9519 + take\u62ff = \u62ff\u9519\u2192\u9519\u8bef" },
    similarWords: [{"word": "take", "reason": "\u62d3\u5c55", "zh": "\u62ff"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1amis-\u9519 + take\u62ff = \u62ff\u9519\u2192\u9519\u8bef",
    phrases: [{ phrase: "make a mistake", meaning: "犯错误" }, { phrase: "by mistake", meaning: "错误地" }]
  },
  {
    id: "price",
    word: "price",
    syllables: ["price"],
    partOfSpeech: "n.",
    definitions: [{ en: "the amount that something costs", zh: "\u4ef7\u683c\uff1b\u4ef7\u94b1" }],
    examples: [{ sentence: "The woman is looking at the price of the shirt." }],
    inflections: {
      plural: "prices"
    },
    similarWords: [{"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}, {"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "advice", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u8bae\uff1b\u5fe0\u544a"}],
    phrases: [{ phrase: "price tag", meaning: "价格标签" }, { phrase: "at a price", meaning: "以某个价格" }]
  },
  {
    id: "several",
    word: "several",
    syllables: ["sev", "er", "al"],
    partOfSpeech: "adj.",
    definitions: [{ en: "more than two but not many", zh: "\u51e0\u4e2a\uff1b\u82e5\u5e72" }],
    examples: [{ sentence: "There are several goats near the tree." }],
    inflections: {
      comparative: "more several",
      superlative: "most several"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asev \u00b7 er \u00b7 al",
    phrases: [{ phrase: "several times", meaning: "几次" }, { phrase: "several days", meaning: "几天" }],
    rootAffix: { explanation: "sever分割 + -al = 几个的" }
  },
  {
    id: "share",
    word: "share",
    syllables: ["share"],
    partOfSpeech: "v.",
    definitions: [{ en: "to allow someone to use or enjoy something of yours", zh: "\u5206\u4eab\uff1b\u4efd\u989d" }],
    examples: [{ sentence: "Marcus shares the tent with his sister." }],
    inflections: {
      pastTense: "shared",
      pastParticiple: "shared",
      thirdPerson: "shares",
      presentParticiple: "sharing"
    },
    similarWords: [{"word": "square", "reason": "\u5f62\u8fd1", "zh": "\u5e7f\u573a"}, {"word": "care", "reason": "\u5f62\u8fd1", "zh": "\u5173\u5fc3"}, {"word": "shake", "reason": "\u5f62\u8fd1", "zh": "\u6447\u6643\uff1b\u6296\u52a8"}],
    phrases: [{ phrase: "share with", meaning: "和...分享" }, { phrase: "share out", meaning: "分配" }]
  },
  {
    id: "soil",
    word: "soil",
    syllables: ["soil"],
    partOfSpeech: "n.",
    definitions: [{ en: "dirt", zh: "\u571f\u58e4\uff1b\u571f\u5730" }],
    examples: [{ sentence: "Carrots and other vegetables grow in the soil." }],
    inflections: {
      plural: "soils"
    },
    phrases: [{ phrase: "soil and water", meaning: "土壤和水" }, { phrase: "rich soil", meaning: "肥沃的土壤" }],
    synonyms: [{"word": "earth", "zh": "土壤"}, {"word": "dirt", "zh": "泥土"}]
  },
  {
    id: "taste",
    word: "taste",
    syllables: ["taste"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get the flavor of food in the mouth", zh: "\u5473\u9053\uff1b\u54c1\u5c1d" }],
    examples: [{ sentence: "The cook tastes the food a final time before it is served." }],
    inflections: {
      pastTense: "tasted",
      pastParticiple: "tasted",
      thirdPerson: "tastes",
      presentParticiple: "tasting"
    },
    similarWords: [{"word": "waste", "reason": "\u5f62\u8fd1", "zh": "\u6d6a\u8d39\uff1b\u5e9f\u7269"}],
    phrases: [{ phrase: "taste like", meaning: "尝起来像" }, { phrase: "taste good", meaning: "味道好" }]
  },
  {
    id: "awful",
    word: "awful",
    syllables: ["awful"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very bad", zh: "\u53ef\u6015\u7684\uff1b\u6781\u574f\u7684" }],
    examples: [{ sentence: "Sam was not proud of the awful smell coming from his shoes." }],
    inflections: {
      comparative: "more awful",
      superlative: "most awful"
    },
    phrases: [{ phrase: "awful weather", meaning: "糟糕的天气" }, { phrase: "feel awful", meaning: "感觉很糟" }],
    synonyms: [{"word": "terrible", "zh": "糟糕的"}],
    antonyms: [{ word: "wonderful", zh: "极好的" }]
  },
  {
    id: "crazy",
    word: "crazy",
    syllables: ["crazy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very strange", zh: "\u75af\u72c2\u7684" }],
    examples: [{ sentence: "Susan\u2019s hair looks really crazy, and she has an interview today!" }],
    inflections: {
      comparative: "crazier",
      superlative: "craziest"
    },
    similarWords: [{"word": "lazy", "reason": "\u5f62\u8fd1", "zh": "\u61d2\u60f0\u7684\uff1b\u61d2\u6563\u7684"}],
    phrases: [{ phrase: "crazy about", meaning: "对...着迷" }, { phrase: "go crazy", meaning: "发疯" }],
    synonyms: [{"word": "mad", "zh": "疯狂的"}]
  },
  {
    id: "huge",
    word: "huge",
    syllables: ["huge"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very large", zh: "\u5de8\u5927\u7684" }],
    examples: [{ sentence: "I will give you a million dollars if you eat this huge hamburger." }],
    inflections: {
      comparative: "huger",
    },
    phrases: [{ phrase: "huge amount", meaning: "大量" }, { phrase: "huge difference", meaning: "巨大的差异" }],
    synonyms: [{"word": "enormous", "zh": "巨大的"}, {"word": "giant", "zh": "庞大的"}],
    similarWords: [{"word": "hugely", "reason": "\u62d3\u5c55", "zh": "巨大地"}]
  },
  {
    id: "moment",
    word: "moment",
    syllables: ["moment"],
    partOfSpeech: "n.",
    definitions: [{ en: "a short period of time", zh: "\u65f6\u523b\uff1b\u77ac\u95f4" }],
    examples: [{ sentence: "I mixed the vegetables and then fried them for a few moments." }],
    inflections: {
      plural: "moments"
    },
    similarWords: [{"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}],
    phrases: [{ phrase: "at the moment", meaning: "此刻" }, { phrase: "just a moment", meaning: "等一下" }],
    synonyms: [{"word": "instant", "zh": "时刻"}]
  },
  {
    id: "odd",
    word: "odd",
    syllables: ["odd"],
    partOfSpeech: "adj.",
    definitions: [{ en: "strange or different", zh: "\u5947\u602a\u7684\uff1b\u5947\u6570\u7684" }],
    examples: [{ sentence: "Lewis\u2019s choice of hair color is quite odd." }],
    inflections: {
      comparative: "odder",
      superlative: "oddest"
    },
    similarWords: [{"word": "old", "reason": "\u5f62\u8fd1", "zh": "\u8001\u7684"}, {"word": "add", "reason": "\u5f62\u8fd1", "zh": "\u589e\u52a0\uff1b\u52a0"}],
    phrases: [{ phrase: "odd number", meaning: "奇数" }, { phrase: "odd and even", meaning: "奇数和偶数" }],
    synonyms: [{"word": "strange", "zh": "奇怪的"}, {"word": "weird", "zh": "古怪的"}]
  },
  {
    id: "pour",
    word: "pour",
    syllables: ["pour"],
    partOfSpeech: "v.",
    definitions: [{ en: "to fill a container with something to drink", zh: "\u5012\uff1b\u704c\uff1b\u503e\u6cfb" }],
    examples: [{ sentence: "Please pour some water for me. I do not want any ice." }],
    inflections: {
      pastTense: "poured",
      pastParticiple: "poured",
      thirdPerson: "pours",
      presentParticiple: "pouring"
    },
    similarWords: [{"word": "hour", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u65f6"}, {"word": "tour", "reason": "\u5f62\u8fd1", "zh": "\u65c5\u6e38\uff1b\u53c2\u89c2"}, {"word": "poor", "reason": "\u5f62\u8fd1", "zh": "\u8d2b\u7a77\u7684\uff0c\u53ef\u601c\u7684"}],
    phrases: [{ phrase: "pour into", meaning: "倒入" }, { phrase: "pour out", meaning: "倒出" }]
  },
  {
    id: "regret",
    word: "regret",
    syllables: ["regret"],
    partOfSpeech: "v.",
    definitions: [{ en: "to feel sorry about something that you did or did not do", zh: "\u540e\u6094\uff1b\u9057\u61be" }],
    examples: [{ sentence: "She regrets missing the last bus home. It was a big mistake." }],
    inflections: {
      pastTense: "regreted",
      pastParticiple: "regreted",
      thirdPerson: "regrets",
      presentParticiple: "regreting"
    },
    similarWords: [{"word": "secret", "reason": "\u5f62\u8fd1", "zh": "\u79d8\u5bc6\u7684\uff1b\u79d8\u5bc6"}],
    phrases: [{ phrase: "regret doing", meaning: "后悔做了" }, { phrase: "regret to say", meaning: "遗憾地说" }]
  },
  {
    id: "steal",
    word: "steal",
    syllables: ["steal"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take something without someone saying you can", zh: "\u5077\uff1b\u7a83\u53d6" }],
    examples: [{ sentence: "We do not share our food with our cat, but she tries to steal it." }],
    inflections: {
      pastTense: "stole",
      pastParticiple: "stolen",
      thirdPerson: "steals",
      presentParticiple: "stealing"
    },
    similarWords: [{"word": "meal", "reason": "\u5f62\u8fd1", "zh": "\u9910\uff1b\u996d"}, {"word": "real", "reason": "\u5f62\u8fd1", "zh": "\u771f\u5b9e\u7684\uff1b\u771f\u6b63\u7684"}],
    phrases: [{ phrase: "steal from", meaning: "从...偷" }, { phrase: "steal away", meaning: "偷走" }]
  },
  {
    id: "thief",
    word: "thief",
    syllables: ["thief"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone who steals", zh: "\u5c0f\u5077\uff1b\u8d3c" }],
    examples: [{ sentence: "Lucy saw a thief trying to climb into her neighbor\u2019s window." }],
    inflections: {
      plural: "thieves"
    },
    phrases: [{ phrase: "thief and robber", meaning: "小偷和强盗" }, { phrase: "catch the thief", meaning: "抓住小偷" }]
  },
  {
    id: "tough",
    word: "tough",
    syllables: ["tough"],
    partOfSpeech: "adj.",
    definitions: [{ en: "strong", zh: "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684" }],
    examples: [{ sentence: "Max was the toughest man in our village." }],
    inflections: {
      comparative: "tougher",
      superlative: "toughest"
    },
    similarWords: [{"word": "cough", "reason": "\u5f62\u8fd1", "zh": "\u54b3\u55fd"}, {"word": "laugh", "reason": "\u5f62\u8fd1", "zh": "\u7b11\uff0c\u5927\u7b11"}, {"word": "touch", "reason": "\u5f62\u8fd1", "zh": "\u89e6\u6478"}],
    phrases: [{ phrase: "tough job", meaning: "艰难的工作" }, { phrase: "tough guy", meaning: "硬汉" }]
  },
  {
    id: "chance",
    word: "chance",
    syllables: ["chance"],
    partOfSpeech: "n.",
    definitions: [{ en: "an opportunity to do something", zh: "\u673a\u4f1a\uff1b\u53ef\u80fd\u6027" }],
    examples: [{ sentence: "Mia and Phil got the chance to go on a European adventure." }],
    inflections: {
      plural: "chances"
    },
    similarWords: [{"word": "dance", "reason": "\u5f62\u8fd1", "zh": "\u8df3\u821e"}, {"word": "science", "reason": "\u5f62\u8fd1", "zh": "\u79d1\u5b66"}, {"word": "prince", "reason": "\u5f62\u8fd1", "zh": "\u738b\u5b50\uff1b\u4eb2\u738b"}],
    phrases: [{ phrase: "by chance", meaning: "偶然" }, { phrase: "take a chance", meaning: "冒险" }],
    synonyms: [{"word": "opportunity", "zh": "机会"}]
  },
  {
    id: "extra",
    word: "extra",
    syllables: ["extra"],
    partOfSpeech: "adj.",
    definitions: [{ en: "more than is usual", zh: "\u989d\u5916\u7684\uff1b\u9644\u52a0\u7684" }],
    examples: [{ sentence: "I have added extra cheese to make the pasta taste better." }],
    inflections: {
      comparative: "extraer",
      superlative: "extraest"
    },
    phrases: [{ phrase: "extra money", meaning: "额外的钱" }, { phrase: "extra time", meaning: "额外时间" }]
  },
  {
    id: "hall",
    word: "hall",
    syllables: ["hall"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large open space in a building", zh: "\u5927\u5385\uff1b\u8d70\u5eca" }],
    examples: [{ sentence: "It was possible to have a large party in the grand hall." }],
    inflections: {
      plural: "halls"
    },
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}],
    phrases: [{ phrase: "hall of", meaning: "...的大厅" }, { phrase: "dining hall", meaning: "餐厅" }]
  },
  {
    id: "immediately",
    word: "immediately",
    syllables: ["immediately"],
    partOfSpeech: "adv.",
    definitions: [{ en: "right away", zh: "\u7acb\u5373\uff1b\u9a6c\u4e0a" }],
    examples: [{ sentence: "The workers came immediately after the accident." }],
    phrases: [{ phrase: "immediately after", meaning: "之后立即" }, { phrase: "respond immediately", meaning: "立即回应" }],
    rootAffix: { explanation: "immediate立即的 + -ly = 立即" },
    similarWords: [{"word": "immediate", "reason": "\u62d3\u5c55", "zh": "立刻的"}]
  },
  {
    id: "intend",
    word: "intend",
    syllables: ["intend"],
    partOfSpeech: "v.",
    definitions: [{ en: "to want or plan to do", zh: "\u6253\u7b97\uff1b\u8ba1\u5212" }],
    examples: [{ sentence: "For good health, she intends to eat several carrots every day." }],
    inflections: {
      pastTense: "intended",
      pastParticiple: "intended",
      thirdPerson: "intends",
      presentParticiple: "intending"
    },
    similarWords: [{"word": "attend", "reason": "\u5f62\u8fd1", "zh": "\u53c2\u52a0\uff1b\u51fa\u5e2d"}, {"word": "friend", "reason": "\u5f62\u8fd1", "zh": "\u670b\u53cb"}, {"word": "spend", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}],
    phrases: [{ phrase: "intend to do", meaning: "打算做" }, { phrase: "intend for", meaning: "打算给" }],
    rootAffix: { explanation: "in-进 + tend伸展 = 打算" }
  },
  {
    id: "mention",
    word: "mention",
    syllables: ["mention"],
    partOfSpeech: "v.",
    definitions: [{ en: "to talk or write about something, often quickly", zh: "\u63d0\u5230\uff1b\u8bf4\u8d77" }],
    examples: [{ sentence: "Jude forgot to mention that he had to leave class early." }],
    inflections: {
      pastTense: "mentioned",
      pastParticiple: "mentioned",
      thirdPerson: "mentions",
      presentParticiple: "mentioning"
    },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}, {"word": "position", "reason": "\u5f62\u8fd1", "zh": "\u4f4d\u7f6e\uff1b\u804c\u4f4d"}],
    phrases: [{ phrase: "mention to", meaning: "向...提起" }, { phrase: "not to mention", meaning: "更不用说" }]
  },
  {
    id: "reaction",
    word: "reaction",
    syllables: ["reaction"],
    partOfSpeech: "n.",
    definitions: [{ en: "the way someone acts or feels after something happens", zh: "\u53cd\u5e94\uff1b\u56de\u5e94" }],
    examples: [{ sentence: "It was a mistake to tell Jim the news. His reaction was very bad." }],
    inflections: {
      plural: "reactions"
    },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "position", "reason": "\u5f62\u8fd1", "zh": "\u4f4d\u7f6e\uff1b\u804c\u4f4d"}],
    phrases: [{ phrase: "reaction to", meaning: "对...的反应" }, { phrase: "chemical reaction", meaning: "化学反应" }]
  },
  {
    id: "score",
    word: "score",
    syllables: ["score"],
    partOfSpeech: "v.",
    definitions: [{ en: "to win a point in a game", zh: "\u5f97\u5206\uff1b\u5206\u6570" }],
    examples: [{ sentence: "Jose scored the winning goal at last night\u2019s game." }],
    inflections: {
      pastTense: "scored",
      pastParticiple: "scored",
      thirdPerson: "scores",
      presentParticiple: "scoring"
    },
    similarWords: [{"word": "sore", "reason": "\u5f62\u8fd1", "zh": "\u75bc\u75db\u7684\uff1b\u9178\u75db\u7684"}, {"word": "store", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}],
    phrases: [{ phrase: "score a goal", meaning: "进球" }, { phrase: "score of", meaning: "...的分数" }]
  },
  {
    id: "search",
    word: "search",
    syllables: ["search"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look for", zh: "\u641c\u7d22\uff1b\u641c\u5bfb" }],
    examples: [{ sentence: "Alex searched the sky for the cause of the noise." }],
    inflections: {
      pastTense: "searched",
      pastParticiple: "searched",
      thirdPerson: "searches",
      presentParticiple: "searching"
    },
    similarWords: [{"word": "march", "reason": "\u5f62\u8fd1", "zh": "\u4e09\u6708\uff1b\u884c\u519b\uff1b\u524d\u8fdb"}, {"word": "research", "reason": "\u62d3\u5c55", "zh": "\u7814\u7a76\uff1b\u8c03\u67e5"}],
    phrases: [{ phrase: "search for", meaning: "搜索" }, { phrase: "in search of", meaning: "寻找" }]
  },
  {
    id: "worse",
    word: "worse",
    syllables: ["worse"],
    partOfSpeech: "adj.",
    definitions: [{ en: "more terrible than other things", zh: "\u66f4\u574f\u7684\uff1b\u66f4\u5dee\u7684" }],
    examples: [{ sentence: "There is nothing worse than cleaning the floor." }],
    inflections: {
      comparative: "worser",
    },
    similarWords: [{"word": "nurse", "reason": "\u5f62\u8fd1", "zh": "\u62a4\u58eb"}],
    phrases: [{ phrase: "worse than", meaning: "比...更糟" }, { phrase: "what's worse", meaning: "更糟的是" }]
  },
  {
    id: "bit",
    word: "bit",
    syllables: ["bit"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small piece or amount", zh: "\u4e00\u70b9\uff1b\u5c11\u91cf" }],
    examples: [{ sentence: "I broke the chocolate into bits so I could share it with my friends." }],
    inflections: {
      plural: "bits"
    },
    similarWords: [{"word": "big", "reason": "\u5f62\u8fd1", "zh": "\u5927\u7684\uff0c\u5de8\u5927\u7684"}, {"word": "sit", "reason": "\u5f62\u8fd1", "zh": "\u5750"}, {"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}],
    phrases: [{ phrase: "a bit of", meaning: "一点" }, { phrase: "bit by bit", meaning: "一点一点" }]
  },
  {
    id: "common",
    word: "common",
    syllables: ["common"],
    partOfSpeech: "adj.",
    definitions: [{ en: "usual; happening or seen often", zh: "\u5e38\u89c1\u7684\uff1b\u5171\u540c\u7684" }],
    examples: [{ sentence: "Colds are quite common in the winter." }],
    inflections: {
      comparative: "more common",
      superlative: "most common"
    },
    phrases: [{ phrase: "common sense", meaning: "常识" }, { phrase: "in common", meaning: "共同" }],
    synonyms: [{"word": "usual", "zh": "普通的"}],
    antonyms: [{ word: "rare", zh: "稀有的" }]
  },
  {
    id: "diet",
    word: "diet",
    syllables: ["diet"],
    partOfSpeech: "n.",
    definitions: [{ en: "the food that someone usually eats", zh: "\u996e\u98df\uff1b\u8282\u98df" }],
    examples: [{ sentence: "I intend to have a healthier diet by eating more fruit." }],
    inflections: {
      plural: "diets"
    },
    similarWords: [{"word": "quiet", "reason": "\u5f62\u8fd1", "zh": "\u5b89\u9759\u7684"}, {"word": "die", "reason": "\u5f62\u8fd1", "zh": "\u6b7b"}],
    phrases: [{ phrase: "balanced diet", meaning: "均衡饮食" }, { phrase: "on a diet", meaning: "节食" }]
  },
  {
    id: "evidence",
    word: "evidence",
    syllables: ["evidence"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that shows something else is true", zh: "\u8bc1\u636e\uff1b\u8ff9\u8c61" }],
    examples: [{ sentence: "The police found evidence that Chris was the thief." }],
    inflections: {
      plural: "evidences"
    },
    similarWords: [{"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}, {"word": "sentence", "reason": "\u5f62\u8fd1", "zh": "\u53e5\u5b50\uff1b\u5224\u51b3"}, {"word": "science", "reason": "\u5f62\u8fd1", "zh": "\u79d1\u5b66"}],
    phrases: [{ phrase: "evidence of", meaning: "...的证据" }, { phrase: "show evidence", meaning: "显示证据" }]
  },
  {
    id: "fit",
    word: "fit",
    syllables: ["fit"],
    partOfSpeech: "adj.",
    definitions: [{ en: "strong and healthy", zh: "\u9002\u5408\uff1b\u5065\u5eb7\u7684" }],
    examples: [{ sentence: "They stay fit by running whenever possible." }],
    inflections: {
      comparative: "fiter",
      superlative: "fitest"
    },
    similarWords: [{"word": "sit", "reason": "\u5f62\u8fd1", "zh": "\u5750"}, {"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}, {"word": "fix", "reason": "\u5f62\u8fd1", "zh": "\u4fee\u7406"}],
    phrases: [{ phrase: "fit in", meaning: "适应" }, { phrase: "keep fit", meaning: "保持健康" }],
    synonyms: [{"word": "suit", "zh": "适合"}, {"word": "match", "zh": "匹配"}]
  },
  {
    id: "limit",
    word: "limit",
    syllables: ["limit"],
    partOfSpeech: "v.",
    definitions: [{ en: "to keep at a low level or keep from getting larger", zh: "\u9650\u5236\uff1b\u754c\u9650" }],
    examples: [{ sentence: "She has little money and must limit how much she spends." }],
    inflections: {
      pastTense: "limited",
      pastParticiple: "limited",
      thirdPerson: "limits",
      presentParticiple: "limiting"
    },
    phrases: [{ phrase: "limit to", meaning: "限制" }, { phrase: "speed limit", meaning: "限速" }],
    similarWords: [{"word": "limited", "reason": "\u62d3\u5c55", "zh": "受限制的"}, {"word": "limitless", "reason": "\u62d3\u5c55", "zh": "无限制的"}]
  },
  {
    id: "physical",
    word: "physical",
    syllables: ["phys", "i", "cal"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of the body", zh: "\u8eab\u4f53\u7684\uff1b\u7269\u7406\u7684" }],
    examples: [{ sentence: "Playing sports is a good way to get physical exercise." }],
    inflections: {
      comparative: "more physical",
      superlative: "most physical"
    },
    rootAffix: { explanation: "phys\u81ea\u7136/\u8eab\u4f53 + -ical = \u8eab\u4f53\u7684" },
    similarWords: [{"word": "medical", "reason": "\u5f62\u8fd1", "zh": "\u533b\u7597\u7684\uff1b\u533b\u5b66\u7684"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aphys\u81ea\u7136/\u8eab\u4f53 + -ical = \u8eab\u4f53\u7684",
    phrases: [{ phrase: "physical activity", meaning: "体育活动" }, { phrase: "physical health", meaning: "身体健康" }]
  },
  {
    id: "poison",
    word: "poison",
    syllables: ["poison"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that can make you sick if eaten or drunk", zh: "\u6bd2\u836f\uff1b\u6bd2\u7269" }],
    examples: [{ sentence: "The symbol on the bottle says that it is poison." }],
    inflections: {
      plural: "poisons"
    },
    similarWords: [{"word": "season", "reason": "\u5f62\u8fd1", "zh": "\u5b63\u8282"}, {"word": "reason", "reason": "\u5f62\u8fd1", "zh": "\u7406\u7531\uff1b\u539f\u56e0"}, {"word": "lesson", "reason": "\u5f62\u8fd1", "zh": "\u8bfe\uff0c\u8bfe\u7a0b"}],
    phrases: [{ phrase: "poison gas", meaning: "毒气" }, { phrase: "rat poison", meaning: "老鼠药" }]
  },
  {
    id: "sale",
    word: "sale",
    syllables: ["sale"],
    partOfSpeech: "n.",
    definitions: [{ en: "the act of selling something for money", zh: "\u51fa\u552e\uff1b\u51cf\u4ef7\u9500\u552e" }],
    examples: [{ sentence: "There is a nice house for sale in my neighborhood." }],
    inflections: {
      plural: "sales"
    },
    similarWords: [{"word": "male", "reason": "\u5f62\u8fd1", "zh": "\u7537\u6027\u7684\uff1b\u96c4\u6027\u7684"}, {"word": "same", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u540c\u7684\uff0c\u4e00\u6837\u7684"}, {"word": "safe", "reason": "\u5f62\u8fd1", "zh": "\u5b89\u5168\u7684\uff1b\u4fdd\u9669\u7bb1"}],
    phrases: [{ phrase: "for sale", meaning: "出售" }, { phrase: "on sale", meaning: "特价" }]
  },
  {
    id: "type",
    word: "type",
    syllables: ["type"],
    partOfSpeech: "n.",
    definitions: [{ en: "a kind or variety", zh: "\u7c7b\u578b\uff1b\u6253\u5b57" }],
    examples: [{ sentence: "Bakeries usually sell several different types of bread." }],
    inflections: {
      plural: "types"
    },
    similarWords: [{"word": "typical", "reason": "\u62d3\u5c55", "zh": "典型的；有代表性的"}],
    phrases: [{ phrase: "type of", meaning: "类型" }, { phrase: "blood type", meaning: "血型" }]
  },
  {
    id: "amount",
    word: "amount",
    syllables: ["amount"],
    partOfSpeech: "n.",
    definitions: [{ en: "how much there is of something", zh: "\u6570\u91cf\uff1b\u603b\u989d" }],
    examples: [{ sentence: "Make sure to use the right amount of oil to fry the food." }],
    inflections: {
      plural: "amounts"
    },
    similarWords: [{"word": "count", "reason": "\u5f62\u8fd1", "zh": "\u6570\u6570\uff0c\u8ba1\u6570"}],
    phrases: [{ phrase: "amount of", meaning: "数量" }, { phrase: "large amount", meaning: "大量" }]
  },
  {
    id: "cure",
    word: "cure",
    syllables: ["cure"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that makes sick people better", zh: "\u6cbb\u6108\uff1b\u7597\u6cd5" }],
    examples: [{ sentence: "The new cure made John feel better almost immediately." }],
    inflections: {
      plural: "cures"
    },
    similarWords: [{"word": "care", "reason": "\u5f62\u8fd1", "zh": "\u5173\u5fc3"}],
    phrases: [{ phrase: "cure for", meaning: "治疗...的方法" }, { phrase: "rest cure", meaning: "休息疗法" }]
  },
  {
    id: "disease",
    word: "disease",
    syllables: ["disease"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sickness", zh: "\u75be\u75c5" }],
    examples: [{ sentence: "A disease made the tree\u2019s leaves turn brown." }],
    inflections: {
      plural: "diseases"
    },
    similarWords: [{"word": "increase", "reason": "\u5f62\u8fd1", "zh": "\u589e\u52a0\uff1b\u589e\u957f"}],
    phrases: [{ phrase: "heart disease", meaning: "心脏病" }, { phrase: "catch a disease", meaning: "得病" }],
    rootAffix: { explanation: "dis-不 + ease舒适 = 疾病" },
    synonyms: [{"word": "illness", "zh": "疾病"}],
    antonyms: [{ word: "health", zh: "健康" }]
  },
  {
    id: "medical",
    word: "medical",
    syllables: ["medical"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of medicine; treating people who are sick or hurt", zh: "\u533b\u7597\u7684\uff1b\u533b\u5b66\u7684" }],
    examples: [{ sentence: "If you often have awful headaches, you should get medical help." }],
    inflections: {
      comparative: "more medical",
      superlative: "most medical"
    },
    similarWords: [{"word": "physical", "reason": "\u5f62\u8fd1", "zh": "\u8eab\u4f53\u7684\uff1b\u7269\u7406\u7684"}],
    phrases: [{ phrase: "medical care", meaning: "医疗" }, { phrase: "medical check", meaning: "体检" }],
    rootAffix: { explanation: "medical = medic治疗 + -al = 医学的" }
  },
  {
    id: "necessary",
    word: "necessary",
    syllables: ["necessary"],
    partOfSpeech: "adj.",
    definitions: [{ en: "needed", zh: "\u5fc5\u8981\u7684\uff1b\u5fc5\u9700\u7684" }],
    examples: [{ sentence: "When getting ready for a trip, take only what is necessary." }],
    inflections: {
      comparative: "necessarier",
      superlative: "necessariest"
    },
    rootAffix: { explanation: "ne-\u4e0d + cess\u8d70 + -ary = \u4e0d\u80fd\u8d70\u5f00\u7684\u2192\u5fc5\u8981\u7684" },
    similarWords: [{"word": "dictionary", "reason": "\u5f62\u8fd1", "zh": "\u8bcd\u5178\uff1b\u5b57\u5178"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ane-\u4e0d + cess\u8d70 + -ary = \u4e0d\u80fd\u8d70\u5f00\u7684\u2192\u5fc5\u8981\u7684",
    phrases: [{ phrase: "necessary for", meaning: "对...必要" }, { phrase: "if necessary", meaning: "如果有必要" }],
    antonyms: [{ word: "unnecessary", zh: "不必要的" }]
  },
  {
    id: "produce",
    word: "produce",
    syllables: ["produce"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make or cause", zh: "\u751f\u4ea7\uff1b\u51fa\u4ea7" }],
    examples: [{ sentence: "Cars produce a lot of problems for the environment." }],
    inflections: {
      pastTense: "produced",
      pastParticiple: "produced",
      thirdPerson: "produces",
      presentParticiple: "producing"
    },
    similarWords: [{"word": "reduce", "reason": "\u5f62\u8fd1", "zh": "\u51cf\u5c11\uff1b\u964d\u4f4e"}, {"word": "product", "reason": "\u5f62\u8fd1", "zh": "\u4ea7\u54c1\uff1b\u4ea7\u7269"}],
    phrases: [{ phrase: "produce goods", meaning: "生产商品" }, { phrase: "produce results", meaning: "产生结果" }],
    rootAffix: { explanation: "pro-前 + duce引导 = 生产" }
  },
  {
    id: "reduce",
    word: "reduce",
    syllables: ["re", "duce"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make smaller in size, number, or amount", zh: "\u51cf\u5c11\uff1b\u964d\u4f4e" }],
    examples: [{ sentence: "The store has reduced its prices on everything." }],
    inflections: {
      pastTense: "reduced",
      pastParticiple: "reduced",
      thirdPerson: "reduces",
      presentParticiple: "reducing"
    },
    similarWords: [{"word": "produce", "reason": "\u5f62\u8fd1", "zh": "\u751f\u4ea7\uff1b\u51fa\u4ea7"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1are \u00b7 duce",
    phrases: [{ phrase: "reduce waste", meaning: "减少浪费" }, { phrase: "reduce cost", meaning: "降低成本" }],
    rootAffix: { explanation: "re-回 + duce引导 = 减少" },
    antonyms: [{ word: "increase", zh: "增加" }]
  },
  {
    id: "serious",
    word: "serious",
    syllables: ["serious"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having important or dangerous possible results", zh: "\u4e25\u91cd\u7684\uff1b\u8ba4\u771f\u7684" }],
    examples: [{ sentence: "We saw a serious car accident this afternoon." }],
    inflections: {
      comparative: "more serious",
      superlative: "most serious"
    },
    similarWords: [{"word": "various", "reason": "\u5f62\u8fd1", "zh": "\u5404\u79cd\u5404\u6837\u7684"}, {"word": "curious", "reason": "\u5f62\u8fd1", "zh": "\u597d\u5947\u7684"}, {"word": "famous", "reason": "\u5f62\u8fd1", "zh": "\u8457\u540d\u7684"}],
    phrases: [{ phrase: "serious about", meaning: "认真对待" }, { phrase: "serious problem", meaning: "严重的问题" }],
    rootAffix: { explanation: "seri严肃 + -ous = 严肃的；严重的" },
    antonyms: [{ word: "funny", zh: "好笑的" }]
  },
  {
    id: "source",
    word: "source",
    syllables: ["source"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person or thing that gives what is wanted or needed", zh: "\u6765\u6e90\uff1b\u6e90\u5934" }],
    examples: [{ sentence: "This river is the main source of water for many animals." }],
    inflections: {
      plural: "sources"
    },
    similarWords: [{"word": "force", "reason": "\u5f62\u8fd1", "zh": "\u529b\u91cf\uff1b\u8feb\u4f7f"}],
    phrases: [{ phrase: "source of", meaning: "...的来源" }, { phrase: "water source", meaning: "水源" }]
  },
  {
    id: "supply",
    word: "supply",
    syllables: ["supply"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give someone something so they can use it", zh: "\u4f9b\u5e94\uff1b\u63d0\u4f9b" }],
    examples: [{ sentence: "My father supplies carrots to a restaurant in our town." }],
    inflections: {
      pastTense: "supplied",
      pastParticiple: "supplied",
      thirdPerson: "supplies",
      presentParticiple: "supplying"
    },
    phrases: [{ phrase: "supply of", meaning: "供应" }, { phrase: "water supply", meaning: "供水" }],
    rootAffix: { explanation: "sup-下 + ply填满 = 供应" },
    similarWords: [{"word": "supplier", "reason": "\u62d3\u5c55", "zh": "供应商"}]
  },
  {
    id: "castle",
    word: "castle",
    syllables: ["castle"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large home where a king or queen usually lives", zh: "\u57ce\u5821" }],
    examples: [{ sentence: "Jim learned that it was common to find huge castles in the past." }],
    inflections: {
      plural: "castles"
    },
    similarWords: [{"word": "little", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "title", "reason": "\u5f62\u8fd1", "zh": "\u6807\u9898\uff1b\u5934\u8854"}, {"word": "gentle", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}],
    phrases: [{ phrase: "sand castle", meaning: "沙堡" }, { phrase: "castle in the sky", meaning: "天空之城" }]
  },
  {
    id: "decision",
    word: "decision",
    syllables: ["de", "ci", "sion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a choice", zh: "\u51b3\u5b9a\uff1b\u51b3\u7b56" }],
    examples: [{ sentence: "Tim made the decision to eat the carrots to be healthier." }],
    inflections: {
      plural: "decisions"
    },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ade \u00b7 ci \u00b7 sion",
    phrases: [{ phrase: "make a decision", meaning: "做决定" }, { phrase: "come to a decision", meaning: "做出决定" }],
    rootAffix: { explanation: "decide决定(e→ision) = 决定" }
  },
  {
    id: "empire",
    word: "empire",
    syllables: ["em", "pire"],
    partOfSpeech: "n.",
    definitions: [{ en: "a kingdom", zh: "\u5e1d\u56fd" }],
    examples: [{ sentence: "The Roman Empire included several hundred towns and cities." }],
    inflections: {
      plural: "empires"
    },
    similarWords: [{"word": "admire", "reason": "\u5f62\u8fd1", "zh": "\u94a6\u4f69\uff1b\u6b23\u8d4f"}, {"word": "require", "reason": "\u5f62\u8fd1", "zh": "\u9700\u8981\uff1b\u8981\u6c42"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aem \u00b7 pire",
    phrases: [{ phrase: "empire state", meaning: "帝国州" }, { phrase: "Roman Empire", meaning: "罗马帝国" }]
  },
  {
    id: "explore",
    word: "explore",
    syllables: ["explore"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look at something in a careful way to learn about it", zh: "\u63a2\u7d22\uff1b\u63a2\u9669" }],
    examples: [{ sentence: "The woman, who is alone, loves to explore nature." }],
    inflections: {
      pastTense: "explored",
      pastParticiple: "explored",
      thirdPerson: "explores",
      presentParticiple: "exploring"
    },
    similarWords: [{"word": "explorer", "reason": "\u62d3\u5c55", "zh": "探险家"}],
    phrases: [{ phrase: "explore the world", meaning: "探索世界" }, { phrase: "explore for", meaning: "探索" }]
  },
  {
    id: "flight",
    word: "flight",
    syllables: ["flight"],
    partOfSpeech: "n.",
    definitions: [{ en: "a trip on an airplane", zh: "\u98de\u884c\uff1b\u822a\u73ed" }],
    examples: [{ sentence: "Max and Shelly shared a flight to Mexico City last summer." }],
    inflections: {
      plural: "flights"
    },
    similarWords: [{"word": "night", "reason": "\u5f62\u8fd1", "zh": "\u591c\u665a\uff0c\u665a\u4e0a"}, {"word": "tonight", "reason": "\u5f62\u8fd1", "zh": "\u4eca\u665a"}, {"word": "fight", "reason": "\u5f62\u8fd1", "zh": "\u6253\u67b6"}],
    phrases: [{ phrase: "flight number", meaning: "航班号" }, { phrase: "in flight", meaning: "在飞行中" }]
  },
  {
    id: "guard",
    word: "guard",
    syllables: ["guard"],
    partOfSpeech: "v.",
    definitions: [{ en: "to watch in order to protect", zh: "\u5b88\u536b\uff1b\u8b66\u536b" }],
    examples: [{ sentence: "Our dog Rover is guarding the house at the moment." }],
    inflections: {
      pastTense: "guarded",
      pastParticiple: "guarded",
      thirdPerson: "guards",
      presentParticiple: "guarding"
    },
    similarWords: [{"word": "board", "reason": "\u5f62\u8fd1", "zh": "\u677f\uff1b\u8463\u4e8b\u4f1a\uff1b\u4e0a\uff08\u8f66\u8239\uff09"}, {"word": "hard", "reason": "\u5f62\u8fd1", "zh": "\u56f0\u96be\u7684\uff0c\u786c\u7684"}],
    phrases: [{ phrase: "guard dog", meaning: "看门狗" }, { phrase: "on guard", meaning: "警惕" }]
  },
  {
    id: "incredible",
    word: "incredible",
    syllables: ["incredible"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very good", zh: "\u96be\u4ee5\u7f6e\u4fe1\u7684" }],
    examples: [{ sentence: "This book mentions how incredible the beaches are in Hawaii." }],
    inflections: {
      comparative: "more incredible",
      superlative: "most incredible"
    },
    similarWords: [{"word": "responsible", "reason": "\u5f62\u8fd1", "zh": "\u8d1f\u8d23\u7684\uff1b\u6709\u8d23\u4efb\u7684"}, {"word": "comfortable", "reason": "\u5f62\u8fd1", "zh": "\u8212\u9002\u7684\uff1b\u5b89\u9038\u7684"}, {"word": "available", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u7528\u7684\uff1b\u53ef\u83b7\u5f97\u7684"}],
    phrases: [{ phrase: "incredible story", meaning: "难以置信的故事" }, { phrase: "absolutely incredible", meaning: "绝对难以置信" }],
    rootAffix: { explanation: "in-不 + credible可信的 = 难以置信的" },
    synonyms: [{"word": "unbelievable", "zh": "难以置信的"}]
  },
  {
    id: "serve",
    word: "serve",
    syllables: ["serve"],
    partOfSpeech: "v.",
    definitions: [{ en: "to give someone food in a restaurant or at home", zh: "\u670d\u52a1\uff1b\u63d0\u4f9b" }],
    examples: [{ sentence: "They serve many types of food at this restaurant." }],
    inflections: {
      pastTense: "served",
      pastParticiple: "served",
      thirdPerson: "serves",
      presentParticiple: "serving"
    },
    phrases: [{ phrase: "serve as", meaning: "担任" }, { phrase: "serve the people", meaning: "为人民服务" }],
    similarWords: [{"word": "service", "reason": "\u62d3\u5c55", "zh": "服务"}, {"word": "servant", "reason": "\u62d3\u5c55", "zh": "佣人"}]
  },
  {
    id: "skin",
    word: "skin",
    syllables: ["skin"],
    partOfSpeech: "n.",
    definitions: [{ en: "the outer part that covers humans and animals", zh: "\u76ae\u80a4\uff1b\u5265\u76ae" }],
    examples: [{ sentence: "For beautiful skin, a healthy diet and good habits are necessary." }],
    inflections: {
      plural: "skins"
    },
    phrases: [{ phrase: "skin care", meaning: "护肤" }, { phrase: "skin and bone", meaning: "皮包骨" }],
    similarWords: [{"word": "skinny", "reason": "\u62d3\u5c55", "zh": "极瘦的"}, {"word": "skincare", "reason": "\u62d3\u5c55", "zh": "护肤"}]
  },
  {
    id: "southern",
    word: "southern",
    syllables: ["southern"],
    partOfSpeech: "adj.",
    definitions: [{ en: "being in or toward the south", zh: "\u5357\u65b9\u7684\uff1b\u5357\u90e8\u7684" }],
    examples: [{ sentence: "The man regretted not visiting southern California last summer." }],
    inflections: {
      comparative: "more southern",
      superlative: "most southern"
    },
    similarWords: [{"word": "pattern", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u6848\uff1b\u6a21\u5f0f"}, {"word": "western", "reason": "\u5f62\u8fd1", "zh": "\u897f\u65b9\u7684\uff1b\u897f\u90e8\u7684"}],
    phrases: [{ phrase: "southern part", meaning: "南部" }, { phrase: "southern China", meaning: "中国南方" }]
  },
  {
    id: "admire",
    word: "admire",
    syllables: ["admire"],
    partOfSpeech: "v.",
    definitions: [{ en: "to like and think good things about others", zh: "\u94a6\u4f69\uff1b\u6b23\u8d4f" }],
    examples: [{ sentence: "I admire my mother more than anyone else." }],
    inflections: {
      pastTense: "admired",
      pastParticiple: "admired",
      thirdPerson: "admires",
      presentParticiple: "admiring"
    },
    similarWords: [{"word": "require", "reason": "\u5f62\u8fd1", "zh": "\u9700\u8981\uff1b\u8981\u6c42"}, {"word": "empire", "reason": "\u5f62\u8fd1", "zh": "\u5e1d\u56fd"}],
    phrases: [{ phrase: "admire for", meaning: "因...钦佩" }, { phrase: "admire the view", meaning: "欣赏风景" }]
  },
  {
    id: "ancient",
    word: "ancient",
    syllables: ["ancient"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very old", zh: "\u53e4\u4ee3\u7684\uff1b\u53e4\u8001\u7684" }],
    examples: [{ sentence: "This city in Peru is evidence of an ancient culture." }],
    inflections: {
      comparative: "more ancient",
      superlative: "most ancient"
    },
    similarWords: [{"word": "absent", "reason": "\u5f62\u8fd1", "zh": "\u7f3a\u5e2d\u7684"}, {"word": "present", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269"}, {"word": "moment", "reason": "\u5f62\u8fd1", "zh": "\u65f6\u523b\uff1b\u77ac\u95f4"}],
    phrases: [{ phrase: "ancient China", meaning: "古代中国" }, { phrase: "ancient history", meaning: "古代历史" }],
    synonyms: [{"word": "old", "zh": "古老的"}],
    antonyms: [{ word: "modern", zh: "现代的" }]
  },
  {
    id: "attractive",
    word: "attractive",
    syllables: ["attractive"],
    partOfSpeech: "adj.",
    definitions: [{ en: "looking or sounding nice", zh: "\u6709\u5438\u5f15\u529b\u7684" }],
    examples: [{ sentence: "Jess is looking for an attractive dress for her party." }],
    inflections: {
      comparative: "more attractive",
      superlative: "most attractive"
    },
    similarWords: [{"word": "expensive", "reason": "\u5f62\u8fd1", "zh": "\u6602\u8d35\u7684"}],
    phrases: [{ phrase: "attractive offer", meaning: "有吸引力的提议" }, { phrase: "look attractive", meaning: "看起来有吸引力" }],
    rootAffix: { explanation: "attract吸引 + -ive的 = 有吸引力的" }
  },
  {
    id: "giant",
    word: "giant",
    syllables: ["giant"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very large", zh: "\u5de8\u5927\u7684\uff1b\u5de8\u4eba" }],
    examples: [{ sentence: "They had the chance to ride on a giant elephant at the zoo." }],
    inflections: {
      comparative: "gianter",
      superlative: "giantest"
    },
    similarWords: [{"word": "plant", "reason": "\u5f62\u8fd1", "zh": "\u690d\u7269"}, {"word": "want", "reason": "\u5f62\u8fd1", "zh": "\u8981\uff0c\u60f3\u8981"}],
    phrases: [{ phrase: "giant panda", meaning: "大熊猫" }, { phrase: "giant step", meaning: "一大步" }],
    rootAffix: { explanation: "gi巨大 + -ant = 巨人；巨大的" }
  },
  {
    id: "pack",
    word: "pack",
    syllables: ["pack"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put items into a bag or suitcase to take somewhere", zh: "\u6253\u5305\uff1b\u5305\u88c5" }],
    examples: [{ sentence: "She needs to limit the items she is packing in her suitcase." }],
    inflections: {
      pastTense: "packed",
      pastParticiple: "packed",
      thirdPerson: "packs",
      presentParticiple: "packing"
    },
    similarWords: [{"word": "back", "reason": "\u5f62\u8fd1", "zh": "\u540e\u9762"}, {"word": "park", "reason": "\u5f62\u8fd1", "zh": "\u516c\u56ed\uff0c\u505c\u8f66"}, {"word": "pick", "reason": "\u5f62\u8fd1", "zh": "\u6311\u9009"}],
    phrases: [{ phrase: "pack up", meaning: "打包" }, { phrase: "pack of", meaning: "一包" }]
  },
  {
    id: "prefer",
    word: "prefer",
    syllables: ["pre", "fer"],
    partOfSpeech: "v.",
    definitions: [{ en: "to like something more than something else", zh: "\u66f4\u559c\u6b22\uff1b\u504f\u597d" }],
    examples: [{ sentence: "Gabby prefers to eat fresh fruit instead of junk food." }],
    inflections: {
      pastTense: "prefered",
      pastParticiple: "prefered",
      thirdPerson: "prefers",
      presentParticiple: "prefering"
    },
    similarWords: [{"word": "offer", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u4f9b\uff1b\u51fa\u4ef7"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apre \u00b7 fer",
    phrases: [{ phrase: "prefer to do", meaning: "更喜欢做" }, { phrase: "prefer A to B", meaning: "喜欢A胜过B" }],
    rootAffix: { explanation: "pre-前 + fer搬运 = 更喜欢" }
  },
  {
    id: "rent",
    word: "rent",
    syllables: ["rent"],
    partOfSpeech: "v.",
    definitions: [{ en: "to pay money to use a thing that belongs to someone else", zh: "\u79df\u7528\uff1b\u79df\u91d1" }],
    examples: [{ sentence: "They rent a nice house for a small amount of money." }],
    inflections: {
      pastTense: "rented",
      pastParticiple: "rented",
      thirdPerson: "rents",
      presentParticiple: "renting"
    },
    similarWords: [{"word": "event", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u4ef6\uff1b\u6d3b\u52a8"}, {"word": "tent", "reason": "\u5f62\u8fd1", "zh": "\u5e10\u7bf7\uff1b\u5e10\u68da"}, {"word": "rest", "reason": "\u5f62\u8fd1", "zh": "\u4f11\u606f\uff0c\u5269\u4f59"}],
    phrases: [{ phrase: "rent out", meaning: "出租" }, { phrase: "for rent", meaning: "出租" }]
  },
  {
    id: "respect",
    word: "respect",
    syllables: ["respect"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think someone is special and important", zh: "\u5c0a\u91cd\uff1b\u5c0a\u656c" }],
    examples: [{ sentence: "It is necessary to respect your teachers by listening during class." }],
    inflections: {
      pastTense: "respected",
      pastParticiple: "respected",
      thirdPerson: "respects",
      presentParticiple: "respecting"
    },
    similarWords: [{"word": "expect", "reason": "\u5f62\u8fd1", "zh": "\u671f\u671b\uff1b\u9884\u6599"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "respect for", meaning: "尊重" }, { phrase: "show respect", meaning: "表示尊重" }],
    rootAffix: { explanation: "re-再 + spect看 = 尊重" }
  },
  {
    id: "view",
    word: "view",
    syllables: ["view"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look at or watch something", zh: "\u89c6\u56fe\uff1b\u770b\u6cd5\uff1b\u89c2\u770b" }],
    examples: [{ sentence: "Ron viewed the odd artwork in the museum." }],
    inflections: {
      pastTense: "viewed",
      pastParticiple: "viewed",
      thirdPerson: "views",
      presentParticiple: "viewing"
    },
    similarWords: [{"word": "review", "reason": "\u62d3\u5c55", "zh": "\u590d\u4e60\uff1b\u8bc4\u8bba"}],
    phrases: [{ phrase: "in view of", meaning: "鉴于" }, { phrase: "point of view", meaning: "观点" }]
  },
  {
    id: "wave",
    word: "wave",
    syllables: ["wave"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move your hand to say hello or goodbye", zh: "\u6ce2\u6d6a\uff1b\u6325\u624b" }],
    examples: [{ sentence: "He waved goodbye to his parents before going back to college." }],
    inflections: {
      pastTense: "waved",
      pastParticiple: "waved",
      thirdPerson: "waves",
      presentParticiple: "waving"
    },
    similarWords: [{"word": "leave", "reason": "\u5f62\u8fd1", "zh": "\u79bb\u5f00\uff1b\u51fa\u53d1"}, {"word": "have", "reason": "\u5f62\u8fd1", "zh": "\u6709\uff0c\u62e5\u6709"}, {"word": "save", "reason": "\u5f62\u8fd1", "zh": "\u8282\u7701\uff1b\u62ef\u6551"}],
    phrases: [{ phrase: "wave at", meaning: "向...挥手" }, { phrase: "wave goodbye", meaning: "挥手告别" }]
  },
  {
    id: "base",
    word: "base",
    syllables: ["base"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use as the starting point for something", zh: "\u57fa\u7840\uff1b\u57fa\u5730" }],
    examples: [{ sentence: "This incredible show was based on a story by a famous writer." }],
    inflections: {
      pastTense: "based",
      pastParticiple: "based",
      thirdPerson: "bases",
      presentParticiple: "basing"
    },
    similarWords: [{"word": "case", "reason": "\u5f62\u8fd1", "zh": "\u6848\u4f8b\uff1b\u76d2\u5b50"}, {"word": "bake", "reason": "\u5f62\u8fd1", "zh": "\u70d8\u7119\uff1b\u70e4"}],
    phrases: [{ phrase: "base on", meaning: "基于" }, { phrase: "base camp", meaning: "大本营" }]
  },
  {
    id: "character",
    word: "character",
    syllables: ["character"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person in a book or movie", zh: "\u6027\u683c\uff1b\u89d2\u8272\uff1b\u5b57\u7b26" }],
    examples: [{ sentence: "The main character in my favorite TV show is a very small girl." }],
    inflections: {
      plural: "characters"
    },
    phrases: [{ phrase: "main character", meaning: "主要人物" }, { phrase: "Chinese character", meaning: "汉字" }]
  },
  {
    id: "clever",
    word: "clever",
    syllables: ["clever"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very smart", zh: "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684" }],
    examples: [{ sentence: "Sasha\u2019s cat is very clever. It can use the computer!" }],
    inflections: {
      comparative: "more clever",
      superlative: "most clever"
    },
    similarWords: [{"word": "cover", "reason": "\u5f62\u8fd1", "zh": "\u8986\u76d6\uff1b\u5c01\u9762"}, {"word": "river", "reason": "\u5f62\u8fd1", "zh": "\u6cb3\u6d41"}, {"word": "deliver", "reason": "\u5f62\u8fd1", "zh": "\u9012\u9001\uff1b\u53d1\u8a00"}],
    phrases: [{ phrase: "clever boy", meaning: "聪明的男孩" }, { phrase: "clever idea", meaning: "聪明的主意" }],
    synonyms: [{"word": "smart", "zh": "聪明的"}],
    antonyms: [{ word: "stupid", zh: "愚蠢的" }, { word: "foolish", zh: "愚蠢的" }]
  },
  {
    id: "enemy",
    word: "enemy",
    syllables: ["enemy"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone who hates you", zh: "\u654c\u4eba\uff1b\u5bf9\u624b" }],
    examples: [{ sentence: "Helen and I used to be friends, but she is my enemy now." }],
    inflections: {
      plural: "enemies"
    },
    phrases: [{ phrase: "enemy of", meaning: "...的敌人" }, { phrase: "public enemy", meaning: "公敌" }]
  },
  {
    id: "length",
    word: "length",
    syllables: ["length"],
    partOfSpeech: "n.",
    definitions: [{ en: "how long something is from one end to the other", zh: "\u957f\u5ea6\uff1b\u957f\u77ed" }],
    examples: [{ sentence: "She wants to know the length of the piece of wood." }],
    inflections: {
      plural: "lengths"
    },
    phrases: [{ phrase: "length of", meaning: "...的长度" }, { phrase: "full length", meaning: "全长" }],
    similarWords: [{"word": "lengthen", "reason": "\u62d3\u5c55", "zh": "加长"}]
  },
  {
    id: "promise",
    word: "promise",
    syllables: ["promise"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell someone that you will do something for sure", zh: "\u627f\u8bfa\uff1b\u4fdd\u8bc1" }],
    examples: [{ sentence: "Rodney promised not to tell Connie\u2019s secret." }],
    inflections: {
      pastTense: "promised",
      pastParticiple: "promised",
      thirdPerson: "promises",
      presentParticiple: "promising"
    },
    rootAffix: { explanation: "pro-\u524d + mis\u53d1\u9001 = \u4e8b\u5148\u53d1\u9001\u7684\u627f\u8bfa\u2192\u8bb8\u8bfa" },
    similarWords: [{"word": "exercise", "reason": "\u5f62\u8fd1", "zh": "\u7ec3\u4e60\uff1b\u953b\u70bc"}, {"word": "surprise", "reason": "\u5f62\u8fd1", "zh": "\u60ca\u559c"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apro-\u524d + mis\u53d1\u9001 = \u4e8b\u5148\u53d1\u9001\u7684\u627f\u8bfa\u2192\u8bb8\u8bfa",
    phrases: [{ phrase: "promise to do", meaning: "承诺做" }, { phrase: "keep a promise", meaning: "遵守承诺" }]
  },
  {
    id: "quality",
    word: "quality",
    syllables: ["quality"],
    partOfSpeech: "n.",
    definitions: [{ en: "how good or bad something is", zh: "\u8d28\u91cf\uff1b\u54c1\u8d28" }],
    examples: [{ sentence: "Sam makes attractive clothes of good quality." }],
    inflections: {
      plural: "qualities"
    },
    phrases: [{ phrase: "quality of", meaning: "...的质量" }, { phrase: "high quality", meaning: "高质量" }]
  },
  {
    id: "regularly",
    word: "regularly",
    syllables: ["regularly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "often", zh: "\u5b9a\u671f\u5730\uff1b\u7ecf\u5e38" }],
    examples: [{ sentence: "He regularly helps his dad put away the clean towels." }],
    phrases: [{ phrase: "regularly exercise", meaning: "定期锻炼" }, { phrase: "happen regularly", meaning: "定期发生" }],
    rootAffix: { explanation: "regular规律的 + -ly = 有规律地" },
    similarWords: [{"word": "regular", "reason": "\u62d3\u5c55", "zh": "规律的"}]
  },
  {
    id: "survive",
    word: "survive",
    syllables: ["sur", "vive"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stay alive", zh: "\u5e78\u5b58\uff1b\u5b58\u6d3b" }],
    examples: [{ sentence: "Lost in the forest, Bob survived by living like ancient humans." }],
    inflections: {
      pastTense: "survived",
      pastParticiple: "survived",
      thirdPerson: "survives",
      presentParticiple: "surviving"
    },
    similarWords: [{"word": "receive", "reason": "\u5f62\u8fd1", "zh": "\u6536\u5230"}, {"word": "arrive", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe"}, {"word": "native", "reason": "\u5f62\u8fd1", "zh": "\u672c\u5730\u7684\uff1b\u571f\u751f\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asur \u00b7 vive",
    phrases: [{ phrase: "survive on", meaning: "靠...生存" }, { phrase: "survive the winter", meaning: "度过冬天" }]
  },
  {
    id: "title",
    word: "title",
    syllables: ["title"],
    partOfSpeech: "n.",
    definitions: [{ en: "a name of something like a book or movie", zh: "\u6807\u9898\uff1b\u5934\u8854" }],
    examples: [{ sentence: "The title of her book is \u201cThe Ancient Castle.\u201d" }],
    inflections: {
      plural: "titles"
    },
    similarWords: [{"word": "little", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "gentle", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}, {"word": "bottle", "reason": "\u5f62\u8fd1", "zh": "\u74f6\u5b50"}],
    phrases: [{ phrase: "title of", meaning: "...的标题" }, { phrase: "book title", meaning: "书名" }]
  },
  {
    id: "adult",
    word: "adult",
    syllables: ["adult"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone who is fully grown", zh: "\u6210\u5e74\u4eba\uff1b\u6210\u5e74\u7684" }],
    examples: [{ sentence: "The adult I respect the most is my mother." }],
    inflections: {
      plural: "adults"
    },
    similarWords: [{"word": "result", "reason": "\u5f62\u8fd1", "zh": "\u7ed3\u679c\uff1b\u6210\u7ee9"}],
    phrases: [{ phrase: "adult education", meaning: "成人教育" }, { phrase: "young adult", meaning: "年轻人" }],
    antonyms: [{ word: "child", zh: "孩子" }]
  },
  {
    id: "classic",
    word: "classic",
    syllables: ["classic"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of good quality and popular for a long time", zh: "\u7ecf\u5178\u7684\uff1b\u4e00\u6d41\u7684" }],
    examples: [{ sentence: "Jason enjoys driving classic cars. He owns several of them." }],
    inflections: {
      comparative: "more classic",
      superlative: "most classic"
    },
    phrases: [{ phrase: "classic music", meaning: "古典音乐" }, { phrase: "classic example", meaning: "经典例子" }],
    similarWords: [{"word": "classical", "reason": "\u62d3\u5c55", "zh": "古典的"}]
  },
  {
    id: "desert",
    word: "desert",
    syllables: ["desert"],
    partOfSpeech: "v.",
    definitions: [{ en: "to leave a place so it is empty", zh: "\u6c99\u6f20\uff1b\u629b\u5f03" }],
    examples: [{ sentence: "They deserted the building after the terrible fire." }],
    inflections: {
      pastTense: "deserted",
      pastParticiple: "deserted",
      thirdPerson: "deserts",
      presentParticiple: "deserting"
    },
    phrases: [{ phrase: "desert island", meaning: "荒岛" }, { phrase: "Sahara Desert", meaning: "撒哈拉沙漠" }]
  },
  {
    id: "discover",
    word: "discover",
    syllables: ["dis", "cov", "er"],
    partOfSpeech: "v.",
    definitions: [{ en: "to find", zh: "\u53d1\u73b0\uff1b\u53d1\u89c9" }],
    examples: [{ sentence: "She is trying to discover a cure for a serious disease." }],
    inflections: {
      pastTense: "discovered",
      pastParticiple: "discovered",
      thirdPerson: "discovers",
      presentParticiple: "discovering"
    },
    rootAffix: { explanation: "dis-\u5426\u5b9a + cover\u76d6 = \u63ed\u5f00\u76d6\u5b50\u2192\u53d1\u73b0" },
    similarWords: [{"word": "deliver", "reason": "\u5f62\u8fd1", "zh": "\u9012\u9001\uff1b\u53d1\u8a00"}, {"word": "cover", "reason": "\u62d3\u5c55", "zh": "\u8986\u76d6\uff1b\u5c01\u9762"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1adis-\u5426\u5b9a + cover\u76d6 = \u63ed\u5f00\u76d6\u5b50\u2192\u53d1\u73b0",
    phrases: [{ phrase: "discover new", meaning: "发现新的" }, { phrase: "discover the truth", meaning: "发现真相" }]
  },
  {
    id: "female",
    word: "female",
    syllables: ["female"],
    partOfSpeech: "adj.",
    definitions: [{ en: "being a girl or woman", zh: "\u5973\u6027\u7684\uff1b\u96cc\u6027\u7684" }],
    examples: [{ sentence: "Mrs. Jennings prefers to visit a female doctor." }],
    inflections: {
      comparative: "more female",
      superlative: "most female"
    },
    phrases: [{ phrase: "female teacher", meaning: "女老师" }, { phrase: "male and female", meaning: "男性和女性" }]
  },
  {
    id: "flow",
    word: "flow",
    syllables: ["flow"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move like water", zh: "\u6d41\u52a8\uff1b\u6d41\u91cf" }],
    examples: [{ sentence: "This river flows from east to west." }],
    inflections: {
      pastTense: "flowed",
      pastParticiple: "flowed",
      thirdPerson: "flows",
      presentParticiple: "flowing"
    },
    similarWords: [{"word": "allow", "reason": "\u5f62\u8fd1", "zh": "\u5141\u8bb8\uff1b\u51c6\u8bb8"}, {"word": "low", "reason": "\u5f62\u8fd1", "zh": "\u4f4e\u7684"}, {"word": "blow", "reason": "\u5f62\u8fd1", "zh": "\u5439\uff1b\u6253\u51fb"}, {"word": "flower", "reason": "\u62d3\u5c55", "zh": "\u82b1\uff0c\u82b1\u6735"}],
    phrases: [{ phrase: "flow of", meaning: "...的流动" }, { phrase: "traffic flow", meaning: "交通流量" }]
  },
  {
    id: "mystery",
    word: "mystery",
    syllables: ["mystery"],
    partOfSpeech: "n.",
    definitions: [{ en: "something strange and not understood", zh: "\u795e\u79d8\uff1b\u8c1c" }],
    examples: [{ sentence: "That strange light in the forest is a mystery." }],
    inflections: {
      plural: "mysteries"
    },
    similarWords: [{"word": "mysterious", "reason": "\u62d3\u5c55", "zh": "神秘的"}],
    phrases: [{ phrase: "mystery of", meaning: "...的奥秘" }, { phrase: "solve the mystery", meaning: "解开谜团" }]
  },
  {
    id: "opinion",
    word: "opinion",
    syllables: ["o", "pin", "ion"],
    partOfSpeech: "n.",
    definitions: [{ en: "a belief about something", zh: "\u610f\u89c1\uff1b\u770b\u6cd5" }],
    examples: [{ sentence: "It is just my opinion, but this store is the best one in the mall." }],
    inflections: {
      plural: "opinions"
    },
    rootAffix: { explanation: "op-\u9009\u62e9 + -ion = \u81ea\u5df1\u9009\u62e9\u7684\u770b\u6cd5\u2192\u89c2\u70b9" },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aop-\u9009\u62e9 + -ion = \u81ea\u5df1\u9009\u62e9\u7684\u770b\u6cd5\u2192\u89c2\u70b9",
    phrases: [{ phrase: "in my opinion", meaning: "在我看来" }, { phrase: "public opinion", meaning: "公众意见" }],
    synonyms: [{"word": "view", "zh": "观点"}]
  },
  {
    id: "pleasure",
    word: "pleasure",
    syllables: ["pleas", "ure"],
    partOfSpeech: "n.",
    definitions: [{ en: "a feeling of happiness", zh: "\u5feb\u4e50\uff1b\u6109\u5feb" }],
    examples: [{ sentence: "She finds pleasure in lying in the field and looking at the sky." }],
    inflections: {
      plural: "pleasures"
    },
    similarWords: [{"word": "culture", "reason": "\u5f62\u8fd1", "zh": "\u6587\u5316\uff1b\u6587\u660e"}, {"word": "picture", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u753b"}, {"word": "structure", "reason": "\u5f62\u8fd1", "zh": "\u7ed3\u6784\uff1b\u6784\u9020"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apleas \u00b7 ure",
    phrases: [{ phrase: "with pleasure", meaning: "很愿意" }, { phrase: "my pleasure", meaning: "不客气" }],
    rootAffix: { explanation: "please使愉快(e→ure) = 快乐" }
  },
  {
    id: "publish",
    word: "publish",
    syllables: ["publish"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make books or magazines for sale", zh: "\u51fa\u7248\uff1b\u53d1\u8868" }],
    examples: [{ sentence: "The group worked together to publish the story." }],
    inflections: {
      pastTense: "published",
      pastParticiple: "published",
      thirdPerson: "publishes",
      presentParticiple: "publishing"
    },
    similarWords: [{"word": "foolish", "reason": "\u5f62\u8fd1", "zh": "\u611a\u8822\u7684"}, {"word": "finish", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u6210\uff0c\u7ed3\u675f"}],
    phrases: [{ phrase: "publish a book", meaning: "出版书" }, { phrase: "publish online", meaning: "在线发布" }]
  },
  {
    id: "cough",
    word: "cough",
    syllables: ["cough"],
    partOfSpeech: "v.",
    definitions: [{ en: "to force air out through your throat, often when sick", zh: "\u54b3\u55fd" }],
    examples: [{ sentence: "Christine usually coughs a lot when she is sick." }],
    inflections: {
      pastTense: "coughed",
      pastParticiple: "coughed",
      thirdPerson: "coughs",
      presentParticiple: "coughing"
    },
    similarWords: [{"word": "tough", "reason": "\u5f62\u8fd1", "zh": "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684"}, {"word": "laugh", "reason": "\u5f62\u8fd1", "zh": "\u7b11\uff0c\u5927\u7b11"}],
    phrases: [{ phrase: "cough medicine", meaning: "止咳药" }, { phrase: "have a cough", meaning: "咳嗽" }]
  },
  {
    id: "crowd",
    word: "crowd",
    syllables: ["crowd"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large group of people", zh: "\u4eba\u7fa4\uff1b\u6324\u6ee1" }],
    examples: [{ sentence: "The crowd found pleasure in watching a really great game." }],
    inflections: {
      plural: "crowds"
    },
    phrases: [{ phrase: "crowd of", meaning: "一群" }, { phrase: "follow the crowd", meaning: "随大流" }],
    similarWords: [{"word": "crowded", "reason": "\u62d3\u5c55", "zh": "拥挤的"}]
  },
  {
    id: "curious",
    word: "curious",
    syllables: ["curious"],
    partOfSpeech: "adj.",
    definitions: [{ en: "wanting to know about something", zh: "\u597d\u5947\u7684" }],
    examples: [{ sentence: "Tim was curious to see what was inside the attractive red box." }],
    inflections: {
      comparative: "more curious",
      superlative: "most curious"
    },
    similarWords: [{"word": "various", "reason": "\u5f62\u8fd1", "zh": "\u5404\u79cd\u5404\u6837\u7684"}, {"word": "serious", "reason": "\u5f62\u8fd1", "zh": "\u4e25\u91cd\u7684\uff1b\u8ba4\u771f\u7684"}, {"word": "famous", "reason": "\u5f62\u8fd1", "zh": "\u8457\u540d\u7684"}],
    phrases: [{ phrase: "curious about", meaning: "对...好奇" }, { phrase: "curious child", meaning: "好奇的孩子" }],
    rootAffix: { explanation: "cur关心 + -ious = 好奇的" }
  },
  {
    id: "disappear",
    word: "disappear",
    syllables: ["dis", "ap", "pear"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to be seen or found", zh: "\u6d88\u5931\uff1b\u4e0d\u89c1" }],
    examples: [{ sentence: "Jacob\u2019s picture will disappear when it starts to rain." }],
    inflections: {
      pastTense: "disappeared",
      pastParticiple: "disappeared",
      thirdPerson: "disappears",
      presentParticiple: "disappearing"
    },
    similarWords: [{"word": "appear", "reason": "\u62d3\u5c55", "zh": "\u51fa\u73b0\uff1b\u663e\u5f97"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1adis \u00b7 ap \u00b7 pear",
    phrases: [{ phrase: "disappear into", meaning: "消失在...中" }, { phrase: "appear and disappear", meaning: "出现和消失" }],
    rootAffix: { explanation: "dis-不 + appear出现 = 消失" }
  },
  {
    id: "edge",
    word: "edge",
    syllables: ["edge"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of something where it ends or starts", zh: "\u8fb9\u7f18\uff1b\u8fb9" }],
    examples: [{ sentence: "Susan stood at the edge of the cliff and looked down." }],
    inflections: {
      plural: "edges"
    },
    phrases: [{ phrase: "on the edge", meaning: "在边缘" }, { phrase: "edge of", meaning: "...的边缘" }],
    synonyms: [{"word": "rim", "zh": "边缘"}],
    similarWords: [{"word": "edgy", "reason": "\u62d3\u5c55", "zh": "紧张不安的"}]
  },
  {
    id: "guide",
    word: "guide",
    syllables: ["guide"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone who directs others on a trip", zh: "\u5411\u5bfc\uff1b\u6307\u5357\uff1b\u5f15\u5bfc" }],
    examples: [{ sentence: "Our guide in Paris showed us many incredible places." }],
    inflections: {
      plural: "guides"
    },
    similarWords: [{"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}, {"word": "hide", "reason": "\u5f62\u8fd1", "zh": "\u8eb2\u85cf"}, {"word": "ride", "reason": "\u5f62\u8fd1", "zh": "\u9a91\uff0c\u4e58\u5750"}],
    phrases: [{ phrase: "tour guide", meaning: "导游" }, { phrase: "guide book", meaning: "指南" }]
  },
  {
    id: "local",
    word: "local",
    syllables: ["local"],
    partOfSpeech: "adj.",
    definitions: [{ en: "from the place where you live", zh: "\u5f53\u5730\u7684\uff1b\u5730\u65b9\u7684" }],
    examples: [{ sentence: "We prefer to buy our food from the local market." }],
    inflections: {
      comparative: "localer",
      superlative: "localest"
    },
    phrases: [{ phrase: "local people", meaning: "当地人" }, { phrase: "local time", meaning: "当地时间" }],
    antonyms: [{ word: "foreign", zh: "外国的" }]
  },
  {
    id: "machine",
    word: "machine",
    syllables: ["machine"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that does work using moving parts", zh: "\u673a\u5668\uff1b\u673a\u68b0" }],
    examples: [{ sentence: "She put a small amount of clothes into the washing machine." }],
    inflections: {
      plural: "machines"
    },
    similarWords: [{"word": "medicine", "reason": "\u5f62\u8fd1", "zh": "\u836f\uff1b\u533b\u5b66"}, {"word": "imagine", "reason": "\u5f62\u8fd1", "zh": "\u60f3\u8c61\uff1b\u8bbe\u60f3"}, {"word": "magazine", "reason": "\u5f62\u8fd1", "zh": "\u6742\u5fd7\uff1b\u671f\u520a"}],
    phrases: [{ phrase: "machine gun", meaning: "机枪" }, { phrase: "washing machine", meaning: "洗衣机" }]
  },
  {
    id: "native",
    word: "native",
    syllables: ["native"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who was born or grew up in a certain place", zh: "\u672c\u5730\u7684\uff1b\u571f\u751f\u7684" }],
    examples: [{ sentence: "Maya is a native of a city in southern Michigan." }],
    inflections: {
      plural: "natives"
    },
    similarWords: [{"word": "active", "reason": "\u5f62\u8fd1", "zh": "\u79ef\u6781\u7684\uff1b\u6d3b\u8dc3\u7684"}, {"word": "receive", "reason": "\u5f62\u8fd1", "zh": "\u6536\u5230"}, {"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}],
    phrases: [{ phrase: "native language", meaning: "母语" }, { phrase: "native to", meaning: "原产于" }],
    rootAffix: { explanation: "nat出生 + -ive的 = 本地的" },
    antonyms: [{ word: "foreign", zh: "外国的" }]
  },
  {
    id: "smoke",
    word: "smoke",
    syllables: ["smoke"],
    partOfSpeech: "n.",
    definitions: [{ en: "the cloud of gases that is made by fire", zh: "\u70df\uff1b\u62bd\u70df" }],
    examples: [{ sentence: "Thick black smoke rose from the burning truck." }],
    inflections: {
      plural: "smokes"
    },
    phrases: [{ phrase: "smoke free", meaning: "无烟" }, { phrase: "no smoke", meaning: "禁止吸烟" }],
    similarWords: [{"word": "smoky", "reason": "\u62d3\u5c55", "zh": "多烟的"}, {"word": "smoking", "reason": "\u62d3\u5c55", "zh": "抽烟"}]
  },
  {
    id: "avenue",
    word: "avenue",
    syllables: ["avenue"],
    partOfSpeech: "n.",
    definitions: [{ en: "a wide street", zh: "\u5927\u9053\uff1b\u9014\u5f84" }],
    examples: [{ sentence: "We will go down this avenue for a few blocks before turning." }],
    inflections: {
      plural: "avenues"
    },
    phrases: [{ phrase: "Fifth Avenue", meaning: "第五大道" }, { phrase: "tree-lined avenue", meaning: "林荫大道" }],
    rootAffix: { explanation: "a-去 + venue来 = 林荫大道" }
  },
  {
    id: "expect",
    word: "expect",
    syllables: ["expect"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think something is likely to happen", zh: "\u671f\u671b\uff1b\u9884\u6599" }],
    examples: [{ sentence: "It is cloudy, so Tim expects it to rain." }],
    inflections: {
      pastTense: "expected",
      pastParticiple: "expected",
      thirdPerson: "expects",
      presentParticiple: "expecting"
    },
    similarWords: [{"word": "respect", "reason": "\u5f62\u8fd1", "zh": "\u5c0a\u91cd\uff1b\u5c0a\u656c"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "expect to do", meaning: "期待做" }, { phrase: "as expected", meaning: "正如预期" }],
    rootAffix: { explanation: "ex-出 + spect看 = 期望" }
  },
  {
    id: "explain",
    word: "explain",
    syllables: ["explain"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something easy to understand", zh: "\u89e3\u91ca\uff1b\u8bf4\u660e" }],
    examples: [{ sentence: "They explained their opinions about the plan to their boss." }],
    inflections: {
      pastTense: "explained",
      pastParticiple: "explained",
      thirdPerson: "explains",
      presentParticiple: "explaining"
    },
    rootAffix: { explanation: "ex-\u51fa + plain\u5e73 = \u8bf4\u5e73\u2192\u89e3\u91ca" },
    similarWords: [{"word": "certain", "reason": "\u5f62\u8fd1", "zh": "\u786e\u5b9a\u7684\uff1b\u67d0\u4e2a"}, {"word": "mountain", "reason": "\u5f62\u8fd1", "zh": "\u5c71"}, {"word": "remain", "reason": "\u5f62\u8fd1", "zh": "\u4fdd\u6301\uff1b\u5269\u4e0b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aex-\u51fa + plain\u5e73 = \u8bf4\u5e73\u2192\u89e3\u91ca",
    phrases: [{ phrase: "explain to", meaning: "向...解释" }, { phrase: "explain away", meaning: "辩解" }]
  },
  {
    id: "rub",
    word: "rub",
    syllables: ["rub"],
    partOfSpeech: "v.",
    definitions: [{ en: "to press with the fingers and move them from side to side", zh: "\u6469\u64e6\uff1b\u64e6" }],
    examples: [{ sentence: "Kate rubbed lotion onto her baby\u2019s skin." }],
    inflections: {
      pastTense: "rubbed",
      pastParticiple: "rubbed",
      thirdPerson: "rubs",
      presentParticiple: "rubbing"
    },
    similarWords: [{"word": "run", "reason": "\u5f62\u8fd1", "zh": "\u8dd1\uff0c\u8dd1\u6b65"}],
    phrases: [{ phrase: "rub off", meaning: "擦掉" }, { phrase: "rub hands", meaning: "搓手" }],
    synonyms: [{"word": "wipe", "zh": "擦"}, {"word": "scrape", "zh": "刮"}]
  },
  {
    id: "shine",
    word: "shine",
    syllables: ["shine"],
    partOfSpeech: "v.",
    definitions: [{ en: "to produce bright light", zh: "\u53d1\u5149\uff1b\u95ea\u8000" }],
    examples: [{ sentence: "The sun shines through the trees every morning." }],
    inflections: {
      pastTense: "shone",
      pastParticiple: "shone",
      thirdPerson: "shines",
      presentParticiple: "shining"
    },
    similarWords: [{"word": "line", "reason": "\u5f62\u8fd1", "zh": "\u7ebf"}, {"word": "fine", "reason": "\u5f62\u8fd1", "zh": "\u597d\u7684\uff0c\u5065\u5eb7\u7684"}, {"word": "engine", "reason": "\u5f62\u8fd1", "zh": "\u5f15\u64ce\uff1b\u53d1\u52a8\u673a"}],
    phrases: [{ phrase: "shine like", meaning: "像...一样发光" }, { phrase: "shine through", meaning: "透过...照射" }]
  },
  {
    id: "strength",
    word: "strength",
    syllables: ["strength"],
    partOfSpeech: "n.",
    definitions: [{ en: "great physical power", zh: "\u529b\u91cf\uff1b\u5f3a\u5ea6" }],
    examples: [{ sentence: "Rocco trains hard to build his strength and stay healthy." }],
    inflections: {
      plural: "strengths"
    },
    phrases: [{ phrase: "strength and weakness", meaning: "优势和劣势" }, { phrase: "physical strength", meaning: "体力" }],
    synonyms: [{"word": "power", "zh": "力量"}],
    similarWords: [{"word": "strengthen", "reason": "\u62d3\u5c55", "zh": "加强"}]
  },
  {
    id: "suggest",
    word: "suggest",
    syllables: ["sug", "gest"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say that something is good or a good idea", zh: "\u5efa\u8bae\uff1b\u6697\u793a" }],
    examples: [{ sentence: "She asked him to suggest a medicine for her cough." }],
    inflections: {
      pastTense: "suggested",
      pastParticiple: "suggested",
      thirdPerson: "suggests",
      presentParticiple: "suggesting"
    },
    similarWords: [{"word": "forest", "reason": "\u5f62\u8fd1", "zh": "\u68ee\u6797\uff1b\u6811\u6797"}, {"word": "contest", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u7ade\u8d5b"}, {"word": "honest", "reason": "\u5f62\u8fd1", "zh": "\u8bda\u5b9e\u7684\uff1b\u6b63\u76f4\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asug \u00b7 gest",
    phrases: [{ phrase: "suggest doing", meaning: "建议做" }, { phrase: "suggest to", meaning: "向...建议" }],
    rootAffix: { explanation: "sug-下 + gest送 = 建议" }
  },
  {
    id: "tour",
    word: "tour",
    syllables: ["tour"],
    partOfSpeech: "n.",
    definitions: [{ en: "a journey to see several places", zh: "\u65c5\u6e38\uff1b\u53c2\u89c2" }],
    examples: [{ sentence: "We went on a tour of England and saw many famous places." }],
    inflections: {
      plural: "tours"
    },
    similarWords: [{"word": "pour", "reason": "\u5f62\u8fd1", "zh": "\u5012\uff1b\u704c\uff1b\u503e\u6cfb"}, {"word": "hour", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u65f6"}],
    phrases: [{ phrase: "tour guide", meaning: "导游" }, { phrase: "on tour", meaning: "在巡演" }]
  },
  {
    id: "western",
    word: "western",
    syllables: ["western"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of or from the west", zh: "\u897f\u65b9\u7684\uff1b\u897f\u90e8\u7684" }],
    examples: [{ sentence: "It is a mystery why this western town is deserted." }],
    inflections: {
      comparative: "more western",
      superlative: "most western"
    },
    similarWords: [{"word": "pattern", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u6848\uff1b\u6a21\u5f0f"}, {"word": "modern", "reason": "\u5f62\u8fd1", "zh": "\u73b0\u4ee3\u7684\uff1b\u65b0\u5f0f\u7684"}, {"word": "southern", "reason": "\u5f62\u8fd1", "zh": "\u5357\u65b9\u7684\uff1b\u5357\u90e8\u7684"}],
    phrases: [{ phrase: "western food", meaning: "西餐" }, { phrase: "western country", meaning: "西方国家" }]
  },
  {
    id: "wheel",
    word: "wheel",
    syllables: ["wheel"],
    partOfSpeech: "n.",
    definitions: [{ en: "something round which moves by turning", zh: "\u8f66\u8f6e\uff1b\u8f6e\u5b50" }],
    examples: [{ sentence: "The wheels on our car needed a bit more air." }],
    inflections: {
      plural: "wheels"
    },
    similarWords: [{"word": "feel", "reason": "\u5f62\u8fd1", "zh": "\u611f\u89c9"}],
    phrases: [{ phrase: "wheel of", meaning: "...的轮子" }, { phrase: "front wheel", meaning: "前轮" }]
  },
  {
    id: "cloth",
    word: "cloth",
    syllables: ["cloth"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used to make clothes", zh: "\u5e03\uff1b\u5e03\u6599" }],
    examples: [{ sentence: "This store has a lot of good-quality cloth for sale." }],
    inflections: {
      plural: "cloths"
    },
    similarWords: [{"word": "clothing", "reason": "\u62d3\u5c55", "zh": "服装；衣着"}],
    phrases: [{ phrase: "piece of cloth", meaning: "一块布" }, { phrase: "table cloth", meaning: "桌布" }]
  },
  {
    id: "equal",
    word: "equal",
    syllables: ["equal"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of the same size or number", zh: "\u76f8\u7b49\u7684\uff1b\u7b49\u4e8e" }],
    examples: [{ sentence: "We cut the cake into equal pieces." }],
    inflections: {
      comparative: "equaler",
      superlative: "equalest"
    },
    phrases: [{ phrase: "equal to", meaning: "等于" }, { phrase: "all things equal", meaning: "所有条件相同" }],
    similarWords: [{"word": "equality", "reason": "\u62d3\u5c55", "zh": "平等"}, {"word": "equally", "reason": "\u62d3\u5c55", "zh": "相等地"}]
  },
  {
    id: "fail",
    word: "fail",
    syllables: ["fail"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to succeed", zh: "\u5931\u8d25\uff1b\u4e0d\u53ca\u683c" }],
    examples: [{ sentence: "Simon regretted not working hard when he failed the test." }],
    inflections: {
      pastTense: "failed",
      pastParticiple: "failed",
      thirdPerson: "fails",
      presentParticiple: "failing"
    },
    similarWords: [{"word": "mail", "reason": "\u5f62\u8fd1", "zh": "\u90ae\u4ef6\uff1b\u90ae\u5bc4"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "fair", "reason": "\u5f62\u8fd1", "zh": "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a"}],
    phrases: [{ phrase: "fail to do", meaning: "未能做" }, { phrase: "fail the exam", meaning: "考试不及格" }]
  },
  {
    id: "false",
    word: "false",
    syllables: ["false"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not true", zh: "\u9519\u8bef\u7684\uff1b\u5047\u7684" }],
    examples: [{ sentence: "He thought the story was based on fact, but it was false." }],
    inflections: {
      comparative: "falser",
    },
    phrases: [{ phrase: "true or false", meaning: "真或假" }, { phrase: "false alarm", meaning: "假警报" }],
    similarWords: [{"word": "falsehood", "reason": "\u62d3\u5c55", "zh": "假话"}],
    antonyms: [{ word: "true", zh: "真实的" }]
  },
  {
    id: "goods",
    word: "goods",
    syllables: ["goods"],
    partOfSpeech: "n.",
    definitions: [{ en: "things which are made and sold", zh: "\u5546\u54c1\uff1b\u8d27\u7269" }],
    examples: [{ sentence: "She found many goods at the local market." }],
    inflections: {
      plural: "goodses"
    },
    phrases: [{ phrase: "goods and services", meaning: "商品和服务" }, { phrase: "sport goods", meaning: "体育用品" }]
  },
  {
    id: "increase",
    word: "increase",
    syllables: ["in", "crease"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make bigger or more", zh: "\u589e\u52a0\uff1b\u589e\u957f" }],
    examples: [{ sentence: "As time passed, the tree increased in size." }],
    inflections: {
      pastTense: "increased",
      pastParticiple: "increased",
      thirdPerson: "increases",
      presentParticiple: "increasing"
    },
    similarWords: [{"word": "disease", "reason": "\u5f62\u8fd1", "zh": "\u75be\u75c5"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ain \u00b7 crease",
    phrases: [{ phrase: "increase in", meaning: "在...方面增加" }, { phrase: "on the increase", meaning: "在增加" }],
    antonyms: [{ word: "decrease", zh: "减少" }, { word: "reduce", zh: "减少" }]
  },
  {
    id: "penny",
    word: "penny",
    syllables: ["penny"],
    partOfSpeech: "n.",
    definitions: [{ en: "a coin equal to one cent in the US", zh: "\u4fbf\u58eb\uff1b\u4e00\u5206\u94b1" }],
    examples: [{ sentence: "She has saved a lot of pennies to buy a new toy." }],
    inflections: {
      plural: "pennies"
    },
    similarWords: [{"word": "funny", "reason": "\u5f62\u8fd1", "zh": "\u6709\u8da3\u7684\uff0c\u597d\u7b11\u7684"}, {"word": "sunny", "reason": "\u5f62\u8fd1", "zh": "\u6674\u6717\u7684"}],
    phrases: [{ phrase: "penny for", meaning: "一分钱" }, { phrase: "a penny saved", meaning: "省一分钱" }]
  },
  {
    id: "separate",
    word: "separate",
    syllables: ["sep", "a", "rate"],
    partOfSpeech: "v.",
    definitions: [{ en: "not to be joined", zh: "\u5206\u5f00\uff1b\u5206\u79bb\u7684" }],
    examples: [{ sentence: "Kelly separated the bottles into different types for recycling." }],
    inflections: {
      pastTense: "separated",
      pastParticiple: "separated",
      thirdPerson: "separates",
      presentParticiple: "separating"
    },
    rootAffix: { explanation: "se-\u5206\u5f00 + par\u5b89\u6392 + -ate = \u5206\u5f00\u5b89\u6392\u2192\u5206\u79bb" },
    similarWords: [{"word": "celebrate", "reason": "\u5f62\u8fd1", "zh": "\u5e86\u795d\uff1b\u5e86\u8d3a"}, {"word": "operate", "reason": "\u5f62\u8fd1", "zh": "\u64cd\u4f5c\uff1b\u8fd0\u4f5c"}, {"word": "climate", "reason": "\u5f62\u8fd1", "zh": "\u6c14\u5019"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1ase-\u5206\u5f00 + par\u5b89\u6392 + -ate = \u5206\u5f00\u5b89\u6392\u2192\u5206\u79bb",
    phrases: [{ phrase: "separate from", meaning: "与...分开" }, { phrase: "separate into", meaning: "分成" }],
    antonyms: [{ word: "together", zh: "一起" }]
  },
  {
    id: "total",
    word: "total",
    syllables: ["total"],
    partOfSpeech: "n.",
    definitions: [{ en: "the number of everything counted", zh: "\u603b\u5171\u7684\uff1b\u603b\u6570" }],
    examples: [{ sentence: "There is a total of three fruits: two oranges and one apple." }],
    inflections: {
      plural: "totals"
    },
    phrases: [{ phrase: "in total", meaning: "总共" }, { phrase: "total amount", meaning: "总数" }],
    similarWords: [{"word": "totally", "reason": "\u62d3\u5c55", "zh": "完全地"}]
  },
  {
    id: "wrap",
    word: "wrap",
    syllables: ["wrap"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cover with something", zh: "\u5305\u88f9\uff1b\u5305\u88c5" }],
    examples: [{ sentence: "Marisa promised to wrap Katy\u2019s gift before the party." }],
    inflections: {
      pastTense: "wraped",
      pastParticiple: "wraped",
      thirdPerson: "wraps",
      presentParticiple: "wraping"
    },
    phrases: [{ phrase: "wrap up", meaning: "包起来" }, { phrase: "wrap in", meaning: "用...包裹" }],
    similarWords: [{"word": "wrapper", "reason": "\u62d3\u5c55", "zh": "包装纸"}, {"word": "wrapping", "reason": "\u62d3\u5c55", "zh": "包装"}]
  },
  {
    id: "appreciate",
    word: "appreciate",
    syllables: ["appreciate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to understand the importance of a person or thing", zh: "\u611f\u6fc0\uff1b\u6b23\u8d4f" }],
    examples: [{ sentence: "Everyone appreciates Ted\u2019s hard work on the project." }],
    inflections: {
      pastTense: "appreciated",
      pastParticiple: "appreciated",
      thirdPerson: "appreciates",
      presentParticiple: "appreciating"
    },
    similarWords: [{"word": "concentrate", "reason": "\u5f62\u8fd1", "zh": "\u96c6\u4e2d\uff1b\u4e13\u6ce8"}, {"word": "celebrate", "reason": "\u5f62\u8fd1", "zh": "\u5e86\u795d\uff1b\u5e86\u8d3a"}, {"word": "communicate", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6d41\uff1b\u6c9f\u901a"}],
    phrases: [{ phrase: "appreciate your help", meaning: "感谢你的帮助" }, { phrase: "appreciate the beauty", meaning: "欣赏美景" }]
  },
  {
    id: "avoid",
    word: "avoid",
    syllables: ["avoid"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stay away from", zh: "\u907f\u514d\uff1b\u56de\u907f" }],
    examples: [{ sentence: "Sarah avoided Sam so she did not have to talk to him." }],
    inflections: {
      pastTense: "avoided",
      pastParticiple: "avoided",
      thirdPerson: "avoids",
      presentParticiple: "avoiding"
    },
    phrases: [{ phrase: "avoid doing", meaning: "避免做" }, { phrase: "avoid trouble", meaning: "避免麻烦" }],
    similarWords: [{"word": "avoidable", "reason": "\u62d3\u5c55", "zh": "可避免的"}]
  },
  {
    id: "convenient",
    word: "convenient",
    syllables: ["convenient"],
    partOfSpeech: "adj.",
    definitions: [{ en: "easy to do and time-saving", zh: "\u65b9\u4fbf\u7684\uff1b\u4fbf\u5229\u7684" }],
    examples: [{ sentence: "The local stores stay open all night, which is very convenient." }],
    inflections: {
      comparative: "more convenient",
      superlative: "most convenient"
    },
    similarWords: [{"word": "represent", "reason": "\u5f62\u8fd1", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}, {"word": "experiment", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9a8c\uff1b\u8bd5\u9a8c"}, {"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}],
    phrases: [{ phrase: "convenient for", meaning: "对...方便" }, { phrase: "convenient store", meaning: "便利店" }]
  },
  {
    id: "customer",
    word: "customer",
    syllables: ["customer"],
    partOfSpeech: "n.",
    definitions: [{ en: "someone who buys goods or services from a store", zh: "\u987e\u5ba2\uff1b\u5ba2\u6237" }],
    examples: [{ sentence: "Mark explains the difference between the items to his customer." }],
    inflections: {
      plural: "customers"
    },
    similarWords: [{"word": "custom", "reason": "\u62d3\u5c55", "zh": "\u4e60\u4fd7\uff1b\u98ce\u4fd7"}],
    phrases: [{ phrase: "customer service", meaning: "客户服务" }, { phrase: "regular customer", meaning: "老顾客" }]
  },
  {
    id: "destroy",
    word: "destroy",
    syllables: ["destroy"],
    partOfSpeech: "v.",
    definitions: [{ en: "to cause something to end or not be of use anymore", zh: "\u7834\u574f\uff1b\u6467\u6bc1" }],
    examples: [{ sentence: "We did not expect the road to be destroyed in the storm." }],
    inflections: {
      pastTense: "destroyed",
      pastParticiple: "destroyed",
      thirdPerson: "destroys",
      presentParticiple: "destroying"
    },
    phrases: [{ phrase: "destroy the environment", meaning: "破坏环境" }, { phrase: "destroy everything", meaning: "摧毁一切" }],
    rootAffix: { explanation: "de-除去 + stroy建造 = 摧毁" },
    similarWords: [{"word": "destruction", "reason": "\u62d3\u5c55", "zh": "破坏"}],
    antonyms: [{ word: "create", zh: "创造" }]
  },
  {
    id: "disappointed",
    word: "disappointed",
    syllables: ["disappointed"],
    partOfSpeech: "adj.",
    definitions: [{ en: "unhappy because something is not as you expected", zh: "\u5931\u671b\u7684" }],
    examples: [{ sentence: "Her father was disappointed that she had failed her exams." }],
    inflections: {
      comparative: "more disappointed",
      superlative: "most disappointed"
    },
    phrases: [{ phrase: "disappointed in", meaning: "对...失望" }, { phrase: "feel disappointed", meaning: "感到失望" }],
    rootAffix: { explanation: "dis-不 + appointed指定 = 失望的" },
    similarWords: [{"word": "disappointment", "reason": "\u62d3\u5c55", "zh": "失望"}]
  },
  {
    id: "medium",
    word: "medium",
    syllables: ["medium"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of a size between big and small", zh: "\u4e2d\u7b49\u7684\uff1b\u5a92\u4ecb" }],
    examples: [{ sentence: "Most customers prefer the medium-sized cakes at Kara\u2019s bakery." }],
    inflections: {
      comparative: "more medium",
      superlative: "most medium"
    },
    phrases: [{ phrase: "medium size", meaning: "中号" }, { phrase: "medium rare", meaning: "三分熟" }]
  },
  {
    id: "pattern",
    word: "pattern",
    syllables: ["pattern"],
    partOfSpeech: "n.",
    definitions: [{ en: "colors or shapes which are repeated on something", zh: "\u56fe\u6848\uff1b\u6a21\u5f0f" }],
    examples: [{ sentence: "They prefer paper with a simple pattern to cover their bedroom walls." }],
    inflections: {
      plural: "patterns"
    },
    similarWords: [{"word": "western", "reason": "\u5f62\u8fd1", "zh": "\u897f\u65b9\u7684\uff1b\u897f\u90e8\u7684"}, {"word": "modern", "reason": "\u5f62\u8fd1", "zh": "\u73b0\u4ee3\u7684\uff1b\u65b0\u5f0f\u7684"}, {"word": "southern", "reason": "\u5f62\u8fd1", "zh": "\u5357\u65b9\u7684\uff1b\u5357\u90e8\u7684"}],
    phrases: [{ phrase: "pattern of", meaning: "...的模式" }, { phrase: "traffic pattern", meaning: "交通模式" }]
  },
  {
    id: "trick",
    word: "trick",
    syllables: ["trick"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make someone believe something that is not true", zh: "\u628a\u620f\uff1b\u8be1\u8ba1" }],
    examples: [{ sentence: "Jenny tricked me when she put salt in my coffee." }],
    inflections: {
      pastTense: "tricked",
      pastParticiple: "tricked",
      thirdPerson: "tricks",
      presentParticiple: "tricking"
    },
    similarWords: [{"word": "stick", "reason": "\u5f62\u8fd1", "zh": "\u68cd\u5b50\uff1b\u7c98\u4f4f"}, {"word": "quick", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "thick", "reason": "\u5f62\u8fd1", "zh": "\u539a\u7684\uff1b\u6d53\u7684"}],
    phrases: [{ phrase: "trick or treat", meaning: "不给糖就捣蛋" }, { phrase: "play a trick", meaning: "耍花招" }]
  },
  {
    id: "value",
    word: "value",
    syllables: ["value"],
    partOfSpeech: "n.",
    definitions: [{ en: "how much something costs", zh: "\u4ef7\u503c\uff1b\u91cd\u89c6" }],
    examples: [{ sentence: "The value of houses has increased by ten percent this year." }],
    inflections: {
      plural: "values"
    },
    similarWords: [{"word": "glue", "reason": "\u5f62\u8fd1", "zh": "\u80f6\u6c34"}],
    phrases: [{ phrase: "value of", meaning: "...的价值" }, { phrase: "good value", meaning: "物有所值" }]
  },
  {
    id: "beat",
    word: "beat",
    syllables: ["beat"],
    partOfSpeech: "v.",
    definitions: [{ en: "to win a game or contest over someone else", zh: "\u6253\uff1b\u51fb\u8d25\uff1b\u8282\u62cd" }],
    examples: [{ sentence: "Michelle regularly beat her husband at the video game." }],
    inflections: {
      pastTense: "beated",
      pastParticiple: "beated",
      thirdPerson: "beats",
      presentParticiple: "beating"
    },
    similarWords: [{"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}, {"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}],
    phrases: [{ phrase: "beat up", meaning: "痛打" }, { phrase: "beat the record", meaning: "打破纪录" }]
  },
  {
    id: "conduct",
    word: "conduct",
    syllables: ["conduct"],
    partOfSpeech: "v.",
    definitions: [{ en: "to organize and do an event or activity", zh: "\u884c\u4e3a\uff1b\u5f15\u5bfc\uff1b\u6307\u6325" }],
    examples: [{ sentence: "The experiment John conducted produced unexpected results." }],
    inflections: {
      pastTense: "conducted",
      pastParticiple: "conducted",
      thirdPerson: "conducts",
      presentParticiple: "conducting"
    },
    similarWords: [{"word": "product", "reason": "\u5f62\u8fd1", "zh": "\u4ea7\u54c1\uff1b\u4ea7\u7269"}],
    phrases: [{ phrase: "conduct research", meaning: "进行研究" }, { phrase: "code of conduct", meaning: "行为准则" }],
    rootAffix: { explanation: "con-一起 + duct引导 = 引导；指挥" }
  },
  {
    id: "confident",
    word: "confident",
    syllables: ["confident"],
    partOfSpeech: "adj.",
    definitions: [{ en: "believing that you are able to do something well", zh: "\u81ea\u4fe1\u7684\uff1b\u6709\u4fe1\u5fc3\u7684" }],
    examples: [{ sentence: "We are confident that we can increase our test scores." }],
    inflections: {
      comparative: "more confident",
      superlative: "most confident"
    },
    rootAffix: { explanation: "con-\u52a0\u5f3a + fid\u4fe1\u4efb + -ent = \u4fe1\u4efb\u81ea\u5df1\u7684\u2192\u81ea\u4fe1\u7684" },
    similarWords: [{"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}, {"word": "accident", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u6545\uff1b\u610f\u5916"}, {"word": "represent", "reason": "\u5f62\u8fd1", "zh": "\u4ee3\u8868\uff1b\u8868\u793a"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acon-\u52a0\u5f3a + fid\u4fe1\u4efb + -ent = \u4fe1\u4efb\u81ea\u5df1\u7684\u2192\u81ea\u4fe1\u7684",
    phrases: [{ phrase: "confident about", meaning: "对...有信心" }, { phrase: "feel confident", meaning: "感到自信" }]
  },
  {
    id: "lead",
    word: "lead",
    syllables: ["lead"],
    partOfSpeech: "v.",
    definitions: [{ en: "to show people the way to go", zh: "\u9886\u5bfc\uff1b\u5e26\u9886\uff1b\u94c5" }],
    examples: [{ sentence: "The tour guide is leading the people to the castle." }],
    inflections: {
      pastTense: "led",
      pastParticiple: "led",
      thirdPerson: "leads",
      presentParticiple: "leading"
    },
    similarWords: [{"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}, {"word": "bread", "reason": "\u5f62\u8fd1", "zh": "\u9762\u5305"}, {"word": "leaf", "reason": "\u5f62\u8fd1", "zh": "\u53f6\u5b50\uff1b\u6811\u53f6"}],
    phrases: [{ phrase: "lead to", meaning: "导致" }, { phrase: "lead the way", meaning: "带路" }]
  },
  {
    id: "lift",
    word: "lift",
    syllables: ["lift"],
    partOfSpeech: "v.",
    definitions: [{ en: "to move to a higher place", zh: "\u4e3e\u8d77\uff1b\u7535\u68af" }],
    examples: [{ sentence: "To develop his strength, Ralph lifted weights every day." }],
    inflections: {
      pastTense: "lifted",
      pastParticiple: "lifted",
      thirdPerson: "lifts",
      presentParticiple: "lifting"
    },
    similarWords: [{"word": "gift", "reason": "\u5f62\u8fd1", "zh": "\u793c\u7269\uff1b\u5929\u8d4b"}, {"word": "life", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6d3b\uff0c\u751f\u547d"}, {"word": "left", "reason": "\u5f62\u8fd1", "zh": "\u5de6\u8fb9\u7684"}],
    phrases: [{ phrase: "lift up", meaning: "举起" }, { phrase: "give a lift", meaning: "搭便车" }],
    antonyms: [{ word: "lower", zh: "降低" }, { word: "drop", zh: "落下" }]
  },
  {
    id: "male",
    word: "male",
    syllables: ["male"],
    partOfSpeech: "adj.",
    definitions: [{ en: "being a man or boy", zh: "\u7537\u6027\u7684\uff1b\u96c4\u6027\u7684" }],
    examples: [{ sentence: "Mr. Garcia was the first male teacher I had ever had." }],
    inflections: {
      comparative: "maler",
    },
    similarWords: [{"word": "sale", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u552e\uff1b\u51cf\u4ef7\u9500\u552e"}, {"word": "make", "reason": "\u5f62\u8fd1", "zh": "\u505a\uff0c\u5236\u9020"}],
    phrases: [{ phrase: "male and female", meaning: "男性和女性" }, { phrase: "male student", meaning: "男学生" }],
    synonyms: [{"word": "man", "zh": "男人"}, {"word": "boy", "zh": "男孩"}]
  },
  {
    id: "muscle",
    word: "muscle",
    syllables: ["muscle"],
    partOfSpeech: "n.",
    definitions: [{ en: "a body part that works to move arms and legs", zh: "\u808c\u8089" }],
    examples: [{ sentence: "Matt exercises his muscles for a total of three hours a day." }],
    inflections: {
      plural: "muscles"
    },
    similarWords: [{"word": "bicycle", "reason": "\u5f62\u8fd1", "zh": "\u81ea\u884c\u8f66"}],
    phrases: [{ phrase: "arm muscle", meaning: "手臂肌肉" }, { phrase: "build muscle", meaning: "锻炼肌肉" }]
  },
  {
    id: "speed",
    word: "speed",
    syllables: ["speed"],
    partOfSpeech: "n.",
    definitions: [{ en: "how fast something moves", zh: "\u901f\u5ea6\uff1b\u52a0\u901f" }],
    examples: [{ sentence: "He was disappointed that his speed was too slow for him to win." }],
    inflections: {
      plural: "speeds"
    },
    similarWords: [{"word": "need", "reason": "\u5f62\u8fd1", "zh": "\u9700\u8981"}, {"word": "feed", "reason": "\u5f62\u8fd1", "zh": "\u5582"}, {"word": "spend", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}],
    phrases: [{ phrase: "speed up", meaning: "加速" }, { phrase: "at full speed", meaning: "全速" }]
  },
  {
    id: "stretch",
    word: "stretch",
    syllables: ["stretch"],
    partOfSpeech: "v.",
    definitions: [{ en: "to pull or move until tight", zh: "\u4f38\u5c55\uff1b\u62c9\u4f38" }],
    examples: [{ sentence: "Heather stretches her legs before her dance class begins." }],
    inflections: {
      pastTense: "stretched",
      pastParticiple: "stretched",
      thirdPerson: "stretches",
      presentParticiple: "stretching"
    },
    phrases: [{ phrase: "stretch out", meaning: "伸展" }, { phrase: "stretch your legs", meaning: "伸腿" }]
  },
  {
    id: "trouble",
    word: "trouble",
    syllables: ["trouble"],
    partOfSpeech: "n.",
    definitions: [{ en: "a problem or difficulty", zh: "\u9ebb\u70e6\uff1b\u56f0\u96be" }],
    examples: [{ sentence: "Drivers had trouble seeing the other cars on the avenue." }],
    inflections: {
      plural: "troubles"
    },
    similarWords: [{"word": "terrible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}, {"word": "possible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u80fd\u7684"}],
    phrases: [{ phrase: "in trouble", meaning: "有麻烦" }, { phrase: "have trouble doing", meaning: "做...有困难" }]
  },
  {
    id: "captain",
    word: "captain",
    syllables: ["captain"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who is the leader of a team", zh: "\u961f\u957f\uff1b\u8239\u957f\uff1b\u673a\u957f" }],
    examples: [{ sentence: "Anton is the captain of our soccer team this year." }],
    inflections: {
      plural: "captains"
    },
    similarWords: [{"word": "mountain", "reason": "\u5f62\u8fd1", "zh": "\u5c71"}, {"word": "certain", "reason": "\u5f62\u8fd1", "zh": "\u786e\u5b9a\u7684\uff1b\u67d0\u4e2a"}, {"word": "explain", "reason": "\u5f62\u8fd1", "zh": "\u89e3\u91ca\uff1b\u8bf4\u660e"}],
    phrases: [{ phrase: "team captain", meaning: "队长" }, { phrase: "captain of", meaning: "...的队长" }],
    rootAffix: { explanation: "cap头 + -ain人 = 船长；队长" }
  },
  {
    id: "challenge",
    word: "challenge",
    syllables: ["challenge"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is difficult to do", zh: "\u6311\u6218" }],
    examples: [{ sentence: "It is a challenge for Shelly to wake up early, so she is often late." }],
    inflections: {
      plural: "challenges"
    },
    similarWords: [{"word": "exchange", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6362\uff1b\u5151\u6362"}],
    phrases: [{ phrase: "challenge yourself", meaning: "挑战自己" }, { phrase: "face a challenge", meaning: "面对挑战" }]
  },
  {
    id: "complete",
    word: "complete",
    syllables: ["complete"],
    partOfSpeech: "v.",
    definitions: [{ en: "to finish something", zh: "\u5b8c\u6210\uff1b\u5b8c\u6574\u7684" }],
    examples: [{ sentence: "Sally completed her work carefully to avoid any mistakes." }],
    inflections: {
      pastTense: "completed",
      pastParticiple: "completed",
      thirdPerson: "completes",
      presentParticiple: "completing"
    },
    rootAffix: { explanation: "com-\u52a0\u5f3a + plete\u5145\u6ee1 = \u5145\u6ee1\u2192\u5b8c\u6574\u7684" },
    similarWords: [{"word": "compete", "reason": "\u5f62\u8fd1", "zh": "\u7ade\u4e89\uff1b\u6bd4\u8d5b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acom-\u52a0\u5f3a + plete\u5145\u6ee1 = \u5145\u6ee1\u2192\u5b8c\u6574\u7684",
    phrases: [{ phrase: "complete with", meaning: "配备" }, { phrase: "complete the task", meaning: "完成任务" }]
  },
  {
    id: "encourage",
    word: "encourage",
    syllables: ["encourage"],
    partOfSpeech: "v.",
    definitions: [{ en: "to help someone feel confident", zh: "\u9f13\u52b1\uff1b\u6fc0\u52b1" }],
    examples: [{ sentence: "The teacher encouraged her student to continue writing her story." }],
    inflections: {
      pastTense: "encouraged",
      pastParticiple: "encouraged",
      thirdPerson: "encourages",
      presentParticiple: "encouraging"
    },
    rootAffix: { explanation: "en-\u4f7f + courage\u52c7\u6c14 = \u4f7f\u6709\u52c7\u6c14\u2192\u9f13\u52b1" },
    similarWords: [{"word": "language", "reason": "\u5f62\u8fd1", "zh": "\u8bed\u8a00"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aen-\u4f7f + courage\u52c7\u6c14 = \u4f7f\u6709\u52c7\u6c14\u2192\u9f13\u52b1",
    phrases: [{ phrase: "encourage to do", meaning: "鼓励做" }, { phrase: "encourage each other", meaning: "互相鼓励" }]
  },
  {
    id: "noon",
    word: "noon",
    syllables: ["noon"],
    partOfSpeech: "n.",
    definitions: [{ en: "12 o\u2019clock in the daytime", zh: "\u4e2d\u5348\uff1b\u6b63\u5348" }],
    examples: [{ sentence: "The next class starts at noon and ends at 2:00 p.m." }],
    inflections: {
      plural: "noons"
    },
    similarWords: [{"word": "moon", "reason": "\u5f62\u8fd1", "zh": "\u6708\u4eae"}, {"word": "spoon", "reason": "\u5f62\u8fd1", "zh": "\u52fa\u5b50"}],
    phrases: [{ phrase: "at noon", meaning: "在中午" }, { phrase: "before noon", meaning: "中午前" }],
    synonyms: [{"word": "midday", "zh": "正午"}]
  },
  {
    id: "position",
    word: "position",
    syllables: ["position"],
    partOfSpeech: "n.",
    definitions: [{ en: "the place where a person or thing is", zh: "\u4f4d\u7f6e\uff1b\u804c\u4f4d" }],
    examples: [{ sentence: "Jen\u2019s position near the front of the room allows her to hear well." }],
    inflections: {
      plural: "positions"
    },
    rootAffix: { explanation: "pos\u653e\u7f6e + -ition = \u653e\u7f6e\u7684\u5730\u65b9\u2192\u4f4d\u7f6e" },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1apos\u653e\u7f6e + -ition = \u653e\u7f6e\u7684\u5730\u65b9\u2192\u4f4d\u7f6e",
    phrases: [{ phrase: "position of", meaning: "...的位置" }, { phrase: "in position", meaning: "就位" }]
  },
  {
    id: "race",
    word: "race",
    syllables: ["race"],
    partOfSpeech: "n.",
    definitions: [{ en: "a contest to decide who is the fastest", zh: "\u6bd4\u8d5b\uff1b\u79cd\u65cf" }],
    examples: [{ sentence: "It is necessary for everyone to begin the race together." }],
    inflections: {
      plural: "races"
    },
    similarWords: [{"word": "space", "reason": "\u5f62\u8fd1", "zh": "\u7a7a\u95f4\uff1b\u592a\u7a7a"}, {"word": "peace", "reason": "\u5f62\u8fd1", "zh": "\u548c\u5e73\uff1b\u5e73\u9759"}, {"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}],
    phrases: [{ phrase: "race against", meaning: "和...赛跑" }, { phrase: "car race", meaning: "赛车" }]
  },
  {
    id: "record",
    word: "record",
    syllables: ["record"],
    partOfSpeech: "n.",
    definitions: [{ en: "the highest or best result ever in an activity", zh: "\u8bb0\u5f55\uff1b\u5531\u7247" }],
    examples: [{ sentence: "He held the record as the first person to climb this mountain." }],
    inflections: {
      plural: "records"
    },
    phrases: [{ phrase: "record holder", meaning: "纪录保持者" }, { phrase: "world record", meaning: "世界纪录" }],
    similarWords: [{"word": "recorder", "reason": "\u62d3\u5c55", "zh": "录音机"}]
  },
  {
    id: "skill",
    word: "skill",
    syllables: ["skill"],
    partOfSpeech: "n.",
    definitions: [{ en: "the ability to do something well", zh: "\u6280\u80fd\uff1b\u6280\u5de7" }],
    examples: [{ sentence: "It takes a bit of skill to wrap a gift well. Jenny is really good at it." }],
    inflections: {
      plural: "skills"
    },
    similarWords: [{"word": "kill", "reason": "\u5f62\u8fd1", "zh": "\u6740\uff1b\u6740\u6b7b"}, {"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "still", "reason": "\u5f62\u8fd1", "zh": "\u4ecd\u7136\uff1b\u9759\u6b62\u7684"}],
    phrases: [{ phrase: "skill level", meaning: "技能水平" }, { phrase: "learn a skill", meaning: "学一项技能" }]
  },
  {
    id: "wing",
    word: "wing",
    syllables: ["wing"],
    partOfSpeech: "n.",
    definitions: [{ en: "one of the body parts that birds and insects use to fly", zh: "\u7fc5\u8180\uff1b\u673a\u7ffc" }],
    examples: [{ sentence: "The bird could not fly because it had a broken wing." }],
    inflections: {
      plural: "wings"
    },
    rootAffix: { explanation: "wing\u7fc5\u8180 = \u7fc5\u8180" },
    similarWords: [{"word": "bring", "reason": "\u5f62\u8fd1", "zh": "\u5e26\u6765\uff0c\u62ff\u6765"}, {"word": "ring", "reason": "\u5f62\u8fd1", "zh": "\u6212\u6307\uff0c\u94c3\u94db\uff0c\u54cd"}, {"word": "king", "reason": "\u5f62\u8fd1", "zh": "\u56fd\u738b"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1awing\u7fc5\u8180 = \u7fc5\u8180",
    phrases: [{ phrase: "left wing", meaning: "左翼" }, { phrase: "bird's wing", meaning: "鸟的翅膀" }]
  },
  {
    id: "certain",
    word: "certain",
    syllables: ["certain"],
    partOfSpeech: "adj.",
    definitions: [{ en: "believing something strongly", zh: "\u786e\u5b9a\u7684\uff1b\u67d0\u4e2a" }],
    examples: [{ sentence: "Sally is certain her customers will enjoy her food." }],
    inflections: {
      comparative: "more certain",
      superlative: "most certain"
    },
    similarWords: [{"word": "captain", "reason": "\u5f62\u8fd1", "zh": "\u961f\u957f\uff1b\u8239\u957f\uff1b\u673a\u957f"}, {"word": "mountain", "reason": "\u5f62\u8fd1", "zh": "\u5c71"}, {"word": "explain", "reason": "\u5f62\u8fd1", "zh": "\u89e3\u91ca\uff1b\u8bf4\u660e"}],
    phrases: [{ phrase: "certain about", meaning: "确信" }, { phrase: "for certain", meaning: "肯定" }]
  },
  {
    id: "discuss",
    word: "discuss",
    syllables: ["discuss"],
    partOfSpeech: "v.",
    definitions: [{ en: "to talk with someone about something", zh: "\u8ba8\u8bba\uff1b\u5546\u91cf" }],
    examples: [{ sentence: "The students discussed their troubles with their teacher." }],
    inflections: {
      pastTense: "discussed",
      pastParticiple: "discussed",
      thirdPerson: "discusses",
      presentParticiple: "discussing"
    },
    similarWords: [{"word": "discussion", "reason": "\u62d3\u5c55", "zh": "讨论"}],
    phrases: [{ phrase: "discuss with", meaning: "和...讨论" }, { phrase: "discuss about", meaning: "讨论" }]
  },
  {
    id: "edit",
    word: "edit",
    syllables: ["edit"],
    partOfSpeech: "v.",
    definitions: [{ en: "to look at something carefully and correct any mistakes", zh: "\u7f16\u8f91\uff1b\u526a\u8f91" }],
    examples: [{ sentence: "Pamela had not expected that she would need to edit her story." }],
    inflections: {
      pastTense: "edited",
      pastParticiple: "edited",
      thirdPerson: "edits",
      presentParticiple: "editing"
    },
    phrases: [{ phrase: "edit a file", meaning: "编辑文件" }, { phrase: "edit out", meaning: "删掉" }],
    similarWords: [{"word": "editor", "reason": "\u62d3\u5c55", "zh": "编辑"}, {"word": "edition", "reason": "\u62d3\u5c55", "zh": "版本"}]
  },
  {
    id: "gather",
    word: "gather",
    syllables: ["gather"],
    partOfSpeech: "v.",
    definitions: [{ en: "to bring things or people together", zh: "\u805a\u96c6\uff1b\u6536\u96c6" }],
    examples: [{ sentence: "My family usually gathers on my grandfather\u2019s birthday." }],
    inflections: {
      pastTense: "gathered",
      pastParticiple: "gathered",
      thirdPerson: "gathers",
      presentParticiple: "gathering"
    },
    similarWords: [{"word": "weather", "reason": "\u5f62\u8fd1", "zh": "\u5929\u6c14"}, {"word": "rather", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u5b81\u613f"}],
    phrases: [{ phrase: "gather together", meaning: "聚在一起" }, { phrase: "gather information", meaning: "收集信息" }]
  },
  {
    id: "image",
    word: "image",
    syllables: ["image"],
    partOfSpeech: "n.",
    definitions: [{ en: "a picture", zh: "\u56fe\u50cf\uff1b\u5f62\u8c61" }],
    examples: [{ sentence: "Gail is confident that she can draw realistic images of clothes." }],
    inflections: {
      plural: "images"
    },
    similarWords: [{"word": "stage", "reason": "\u5f62\u8fd1", "zh": "\u821e\u53f0\uff1b\u9636\u6bb5"}, {"word": "page", "reason": "\u5f62\u8fd1", "zh": "\u9875\uff0c\u9875\u9762"}, {"word": "age", "reason": "\u62d3\u5c55", "zh": "\u5e74\u9f84"}],
    phrases: [{ phrase: "image of", meaning: "...的图像" }, { phrase: "public image", meaning: "公众形象" }]
  },
  {
    id: "material",
    word: "material",
    syllables: ["material"],
    partOfSpeech: "n.",
    definitions: [{ en: "something needed to do an activity", zh: "\u6750\u6599\uff1b\u7269\u8d28" }],
    examples: [{ sentence: "It was a challenge to gather all the materials for my art class." }],
    inflections: {
      plural: "materials"
    },
    similarWords: [{"word": "special", "reason": "\u5f62\u8fd1", "zh": "\u7279\u522b\u7684\uff1b\u4e13\u95e8\u7684"}],
    phrases: [{ phrase: "reading material", meaning: "阅读材料" }, { phrase: "building material", meaning: "建筑材料" }]
  },
  {
    id: "positive",
    word: "positive",
    syllables: ["positive"],
    partOfSpeech: "adj.",
    definitions: [{ en: "thinking good things", zh: "\u79ef\u6781\u7684\uff1b\u80af\u5b9a\u7684" }],
    examples: [{ sentence: "Positive students can complete work quickly and easily." }],
    inflections: {
      comparative: "more positive",
      superlative: "most positive"
    },
    similarWords: [{"word": "receive", "reason": "\u5f62\u8fd1", "zh": "\u6536\u5230"}, {"word": "survive", "reason": "\u5f62\u8fd1", "zh": "\u5e78\u5b58\uff1b\u5b58\u6d3b"}, {"word": "expensive", "reason": "\u5f62\u8fd1", "zh": "\u6602\u8d35\u7684"}],
    phrases: [{ phrase: "positive attitude", meaning: "积极的态度" }, { phrase: "positive result", meaning: "积极的结果" }],
    rootAffix: { explanation: "posit放 + -ive的 = 积极的" }
  },
  {
    id: "role",
    word: "role",
    syllables: ["role"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part or job someone has in an activity or event", zh: "\u89d2\u8272\uff1b\u4f5c\u7528" }],
    examples: [{ sentence: "Laura was respected for her role as team captain." }],
    inflections: {
      plural: "roles"
    },
    similarWords: [{"word": "hole", "reason": "\u5f62\u8fd1", "zh": "\u6d1e\uff1b\u5b54\uff1b\u5751"}, {"word": "whole", "reason": "\u5f62\u8fd1", "zh": "\u6574\u4e2a\u7684\uff1b\u5168\u90e8\u7684"}, {"word": "rule", "reason": "\u5f62\u8fd1", "zh": "\u89c4\u5219"}],
    phrases: [{ phrase: "role model", meaning: "榜样" }, { phrase: "play a role", meaning: "扮演角色" }]
  },
  {
    id: "screen",
    word: "screen",
    syllables: ["screen"],
    partOfSpeech: "n.",
    definitions: [{ en: "the part of a computer that shows images and words", zh: "\u5c4f\u5e55\uff1b\u7b5b\u9009" }],
    examples: [{ sentence: "The man touched the screen to check his email." }],
    inflections: {
      plural: "screens"
    },
    similarWords: [{"word": "queen", "reason": "\u5f62\u8fd1", "zh": "\u5973\u738b"}],
    phrases: [{ phrase: "on screen", meaning: "在屏幕上" }, { phrase: "screen time", meaning: "屏幕时间" }]
  },
  {
    id: "technology",
    word: "technology",
    syllables: ["technology"],
    partOfSpeech: "n.",
    definitions: [{ en: "any type of useful machine invented by science", zh: "\u6280\u672f\uff1b\u79d1\u6280" }],
    examples: [{ sentence: "Mrs. Jensen encouraged her students to use technology." }],
    inflections: {
      plural: "technologies"
    },
    phrases: [{ phrase: "modern technology", meaning: "现代技术" }, { phrase: "information technology", meaning: "信息技术" }]
  },
  {
    id: "attack",
    word: "attack",
    syllables: ["attack"],
    partOfSpeech: "v.",
    definitions: [{ en: "to try to hurt physically or say hurtful things", zh: "\u653b\u51fb\uff1b\u8fdb\u653b" }],
    examples: [{ sentence: "When the computer stopped working, Sheryl wanted to attack it!" }],
    inflections: {
      pastTense: "attacked",
      pastParticiple: "attacked",
      thirdPerson: "attacks",
      presentParticiple: "attacking"
    },
    phrases: [{ phrase: "heart attack", meaning: "心脏病发作" }, { phrase: "attack on", meaning: "对...的攻击" }],
    similarWords: [{"word": "attacker", "reason": "\u62d3\u5c55", "zh": "攻击者"}]
  },
  {
    id: "available",
    word: "available",
    syllables: ["available"],
    partOfSpeech: "adj.",
    definitions: [{ en: "able to be used", zh: "\u53ef\u7528\u7684\uff1b\u53ef\u83b7\u5f97\u7684" }],
    examples: [{ sentence: "There are seats available in the back for people who are late." }],
    inflections: {
      comparative: "more available",
      superlative: "most available"
    },
    similarWords: [{"word": "vegetable", "reason": "\u5f62\u8fd1", "zh": "\u852c\u83dc"}, {"word": "incredible", "reason": "\u5f62\u8fd1", "zh": "\u96be\u4ee5\u7f6e\u4fe1\u7684"}, {"word": "terrible", "reason": "\u5f62\u8fd1", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}],
    phrases: [{ phrase: "available for", meaning: "可用于" }, { phrase: "make available", meaning: "使可用" }],
    rootAffix: { explanation: "a-加强 + vail价值 + -able能的 = 可用的" }
  },
  {
    id: "career",
    word: "career",
    syllables: ["career"],
    partOfSpeech: "n.",
    definitions: [{ en: "what a person does for his or her job", zh: "\u804c\u4e1a\uff1b\u751f\u6daf" }],
    examples: [{ sentence: "You can choose any career you want. There are so many!" }],
    inflections: {
      plural: "careers"
    },
    similarWords: [{"word": "cheer", "reason": "\u5f62\u8fd1", "zh": "\u6b22\u547c\uff1b\u52a0\u6cb9"}, {"word": "care", "reason": "\u62d3\u5c55", "zh": "\u5173\u5fc3"}],
    phrases: [{ phrase: "career choice", meaning: "职业选择" }, { phrase: "career plan", meaning: "职业规划" }]
  },
  {
    id: "connect",
    word: "connect",
    syllables: ["con", "nect"],
    partOfSpeech: "v.",
    definitions: [{ en: "to join something with something else", zh: "\u8fde\u63a5\uff1b\u8054\u7cfb" }],
    examples: [{ sentence: "Marvin connects a big screen to his dad\u2019s computer." }],
    inflections: {
      pastTense: "connected",
      pastParticiple: "connected",
      thirdPerson: "connects",
      presentParticiple: "connecting"
    },
    rootAffix: { explanation: "con-\u4e00\u8d77 + nect\u7ed1 = \u7ed1\u5728\u4e00\u8d77\u2192\u8fde\u63a5" },
    similarWords: [{"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}, {"word": "select", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6311\u9009"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1acon-\u4e00\u8d77 + nect\u7ed1 = \u7ed1\u5728\u4e00\u8d77\u2192\u8fde\u63a5",
    phrases: [{ phrase: "connect to", meaning: "连接到" }, { phrase: "connect with", meaning: "和...联系" }]
  },
  {
    id: "dictionary",
    word: "dictionary",
    syllables: ["dic", "tion", "ar", "y"],
    partOfSpeech: "n.",
    definitions: [{ en: "a book that gives definitions of words", zh: "\u8bcd\u5178\uff1b\u5b57\u5178" }],
    examples: [{ sentence: "Dictionaries are helpful for finding the spelling of words." }],
    inflections: {
      plural: "dictionaries"
    },
    similarWords: [{"word": "necessary", "reason": "\u5f62\u8fd1", "zh": "\u5fc5\u8981\u7684\uff1b\u5fc5\u9700\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1adic \u00b7 tion \u00b7 ar \u00b7 y",
    phrases: [{ phrase: "look up in dictionary", meaning: "查字典" }, { phrase: "Oxford dictionary", meaning: "牛津词典" }],
    rootAffix: { explanation: "dict说 + -ion + -ary = 词典" }
  },
  {
    id: "handle",
    word: "handle",
    syllables: ["handle"],
    partOfSpeech: "v.",
    definitions: [{ en: "to deal with a person or thing", zh: "\u5904\u7406\uff1b\u628a\u624b" }],
    examples: [{ sentence: "Lisa is good at leading people. She knows how to handle them." }],
    inflections: {
      pastTense: "handled",
      pastParticiple: "handled",
      thirdPerson: "handles",
      presentParticiple: "handling"
    },
    similarWords: [{"word": "middle", "reason": "\u5f62\u8fd1", "zh": "\u4e2d\u95f4"}],
    phrases: [{ phrase: "handle with", meaning: "处理" }, { phrase: "handle the situation", meaning: "处理情况" }]
  },
  {
    id: "major",
    word: "major",
    syllables: ["major"],
    partOfSpeech: "adj.",
    definitions: [{ en: "very important; very serious", zh: "\u4e3b\u8981\u7684\uff1b\u4e13\u4e1a" }],
    examples: [{ sentence: "Losing the key to our car was a major problem." }],
    inflections: {
      comparative: "majorer",
      superlative: "majorest"
    },
    phrases: [{ phrase: "major in", meaning: "主修" }, { phrase: "major problem", meaning: "主要问题" }],
    similarWords: [{"word": "majority", "reason": "\u62d3\u5c55", "zh": "多数"}]
  },
  {
    id: "provide",
    word: "provide",
    syllables: ["pro", "vide"],
    partOfSpeech: "v.",
    definitions: [{ en: "to offer or give", zh: "\u63d0\u4f9b\uff1b\u4f9b\u5e94" }],
    examples: [{ sentence: "Ms. Clark provides extra help to weaker students after school." }],
    inflections: {
      pastTense: "provided",
      pastParticiple: "provided",
      thirdPerson: "provides",
      presentParticiple: "providing"
    },
    similarWords: [{"word": "decide", "reason": "\u5f62\u8fd1", "zh": "\u51b3\u5b9a\uff1b\u4e0b\u51b3\u5fc3"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apro \u00b7 vide",
    phrases: [{ phrase: "provide with", meaning: "提供" }, { phrase: "provide for", meaning: "为...提供" }]
  },
  {
    id: "section",
    word: "section",
    syllables: ["section"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of something", zh: "\u90e8\u5206\uff1b\u533a\u57df" }],
    examples: [{ sentence: "We can eat in this section of the park. Do you see the tables?" }],
    inflections: {
      plural: "sections"
    },
    similarWords: [{"word": "vacation", "reason": "\u5f62\u8fd1", "zh": "\u5047\u671f"}, {"word": "mention", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u5230\uff1b\u8bf4\u8d77"}, {"word": "reaction", "reason": "\u5f62\u8fd1", "zh": "\u53cd\u5e94\uff1b\u56de\u5e94"}],
    phrases: [{ phrase: "section of", meaning: "...的部分" }, { phrase: "reading section", meaning: "阅读部分" }]
  },
  {
    id: "site",
    word: "site",
    syllables: ["site"],
    partOfSpeech: "n.",
    definitions: [{ en: "a spot or place, usually on the Internet", zh: "\u5730\u70b9\uff1b\u7f51\u7ad9" }],
    examples: [{ sentence: "There are several million sites on the Internet which sell things." }],
    inflections: {
      plural: "sites"
    },
    similarWords: [{"word": "write", "reason": "\u5f62\u8fd1", "zh": "\u5199\uff0c\u5199\u5b57"}, {"word": "quite", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u975e\u5e38"}, {"word": "side", "reason": "\u5f62\u8fd1", "zh": "\u8fb9\uff0c\u4fa7"}],
    phrases: [{ phrase: "web site", meaning: "网站" }, { phrase: "on site", meaning: "在现场" }]
  },
  {
    id: "accept",
    word: "accept",
    syllables: ["accept"],
    partOfSpeech: "v.",
    definitions: [{ en: "to take or receive", zh: "\u63a5\u53d7\uff1b\u627f\u8ba4" }],
    examples: [{ sentence: "Polly and Steven gladly accepted the key to their new home." }],
    inflections: {
      pastTense: "accepted",
      pastParticiple: "accepted",
      thirdPerson: "accepts",
      presentParticiple: "accepting"
    },
    phrases: [{ phrase: "accept the offer", meaning: "接受提议" }, { phrase: "accept as", meaning: "把...当作" }],
    similarWords: [{"word": "acceptance", "reason": "\u62d3\u5c55", "zh": "接受"}]
  },
  {
    id: "consider",
    word: "consider",
    syllables: ["con", "sid", "er"],
    partOfSpeech: "v.",
    definitions: [{ en: "to think about carefully", zh: "\u8003\u8651\uff1b\u8ba4\u4e3a" }],
    examples: [{ sentence: "Christine has to consider what career she wants very carefully." }],
    inflections: {
      pastTense: "considered",
      pastParticiple: "considered",
      thirdPerson: "considers",
      presentParticiple: "considering"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acon \u00b7 sid \u00b7 er",
    phrases: [{ phrase: "consider as", meaning: "把...看作" }, { phrase: "consider doing", meaning: "考虑做" }],
    rootAffix: { explanation: "con-一起 + sider星 = 考虑" },
    similarWords: [{"word": "consideration", "reason": "\u62d3\u5c55", "zh": "考虑"}]
  },
  {
    id: "exist",
    word: "exist",
    syllables: ["exist"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be", zh: "\u5b58\u5728\uff1b\u751f\u5b58" }],
    examples: [{ sentence: "These animals existed a long time ago. They are not alive now." }],
    inflections: {
      pastTense: "existed",
      pastParticiple: "existed",
      thirdPerson: "exists",
      presentParticiple: "existing"
    },
    similarWords: [{"word": "list", "reason": "\u5f62\u8fd1", "zh": "\u5217\u8868\uff1b\u6e05\u5355\uff1b\u5217\u5165"}],
    phrases: [{ phrase: "exist in", meaning: "存在于" }, { phrase: "exist on", meaning: "靠...生存" }]
  },
  {
    id: "familiar",
    word: "familiar",
    syllables: ["familiar"],
    partOfSpeech: "adj.",
    definitions: [{ en: "commonly known or seen", zh: "\u719f\u6089\u7684\uff1b\u5e38\u89c1\u7684" }],
    examples: [{ sentence: "The man looked familiar to the women gathered at the other table." }],
    inflections: {
      comparative: "more familiar",
      superlative: "most familiar"
    },
    phrases: [{ phrase: "familiar with", meaning: "熟悉" }, { phrase: "familiar to", meaning: "为...所熟悉" }],
    antonyms: [{ word: "strange", zh: "陌生的" }]
  },
  {
    id: "joy",
    word: "joy",
    syllables: ["joy"],
    partOfSpeech: "n.",
    definitions: [{ en: "great happiness", zh: "\u5feb\u4e50\uff1b\u559c\u60a6" }],
    examples: [{ sentence: "The role of mother brings Molly great joy." }],
    inflections: {
      plural: "joys"
    },
    similarWords: [{"word": "boy", "reason": "\u5f62\u8fd1", "zh": "\u7537\u5b69"}, {"word": "job", "reason": "\u5f62\u8fd1", "zh": "\u5de5\u4f5c"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}],
    phrases: [{ phrase: "joy of", meaning: "...的快乐" }, { phrase: "with joy", meaning: "高兴地" }]
  },
  {
    id: "married",
    word: "married",
    syllables: ["married"],
    partOfSpeech: "adj.",
    definitions: [{ en: "being a husband or wife", zh: "\u5df2\u5a5a\u7684\uff1b\u7ed3\u5a5a\u7684" }],
    examples: [{ sentence: "They got married last Saturday. It was a beautiful event." }],
    inflections: {
      comparative: "more married",
      superlative: "most married"
    },
    phrases: [{ phrase: "get married", meaning: "结婚" }, { phrase: "married to", meaning: "和...结婚" }],
    similarWords: [{"word": "marriage", "reason": "\u62d3\u5c55", "zh": "婚姻"}]
  },
  {
    id: "rather",
    word: "rather",
    syllables: ["rather"],
    partOfSpeech: "adv.",
    definitions: [{ en: "used to say what you prefer to do or have", zh: "\u76f8\u5f53\uff1b\u5b81\u613f" }],
    examples: [{ sentence: "Gloria would rather paint her nails than do her homework." }],
    similarWords: [{"word": "weather", "reason": "\u5f62\u8fd1", "zh": "\u5929\u6c14"}, {"word": "gather", "reason": "\u5f62\u8fd1", "zh": "\u805a\u96c6\uff1b\u6536\u96c6"}],
    phrases: [{ phrase: "rather than", meaning: "而不是" }, { phrase: "or rather", meaning: "更确切地说" }]
  },
  {
    id: "represent",
    word: "represent",
    syllables: ["rep", "re", "sent"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be a symbol for something", zh: "\u4ee3\u8868\uff1b\u8868\u793a" }],
    examples: [{ sentence: "The sign represents which toilet is for women." }],
    inflections: {
      pastTense: "represented",
      pastParticiple: "represented",
      thirdPerson: "represents",
      presentParticiple: "representing"
    },
    similarWords: [{"word": "experiment", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9a8c\uff1b\u8bd5\u9a8c"}, {"word": "president", "reason": "\u5f62\u8fd1", "zh": "\u603b\u7edf"}, {"word": "convenient", "reason": "\u5f62\u8fd1", "zh": "\u65b9\u4fbf\u7684\uff1b\u4fbf\u5229\u7684"}, {"word": "present", "reason": "\u62d3\u5c55", "zh": "\u793c\u7269"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1arep \u00b7 re \u00b7 sent",
    phrases: [{ phrase: "represent as", meaning: "代表" }, { phrase: "represent the class", meaning: "代表班级" }]
  },
  {
    id: "root",
    word: "root",
    syllables: ["root"],
    partOfSpeech: "n.",
    definitions: [{ en: "the cause of something", zh: "\u6839\uff1b\u6839\u6e90" }],
    examples: [{ sentence: "The root of their fight was a computer. They would not share it." }],
    inflections: {
      plural: "roots"
    },
    similarWords: [{"word": "boot", "reason": "\u5f62\u8fd1", "zh": "\u9774\u5b50"}, {"word": "shoot", "reason": "\u5f62\u8fd1", "zh": "\u5c04\u51fb\uff1b\u62cd\u6444"}, {"word": "roof", "reason": "\u5f62\u8fd1", "zh": "\u5c4b\u9876\uff1b\u9876\u90e8"}],
    phrases: [{ phrase: "root of", meaning: "...的根" }, { phrase: "take root", meaning: "扎根" }]
  },
  {
    id: "society",
    word: "society",
    syllables: ["society"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group of people living in a community", zh: "\u793e\u4f1a\uff1b\u793e\u56e2" }],
    examples: [{ sentence: "Tall buildings and heavy traffic are common in our modern society." }],
    inflections: {
      plural: "societies"
    },
    phrases: [{ phrase: "modern society", meaning: "现代社会" }, { phrase: "in society", meaning: "在社会上" }],
    similarWords: [{"word": "social", "reason": "\u62d3\u5c55", "zh": "社会的"}]
  },
  {
    id: "band",
    word: "band",
    syllables: ["band"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group that plays music", zh: "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5" }],
    examples: [{ sentence: "Everyone in this band is male. There are no women or girls." }],
    inflections: {
      plural: "bands"
    },
    similarWords: [{"word": "land", "reason": "\u5f62\u8fd1", "zh": "\u571f\u5730"}, {"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}, {"word": "grand", "reason": "\u5f62\u8fd1", "zh": "\u5b8f\u4f1f\u7684"}],
    phrases: [{ phrase: "band together", meaning: "联合" }, { phrase: "rock band", meaning: "摇滚乐队" }]
  },
  {
    id: "fortune",
    word: "fortune",
    syllables: ["fortune"],
    partOfSpeech: "n.",
    definitions: [{ en: "a large amount of money", zh: "\u8d22\u5bcc\uff1b\u8fd0\u6c14" }],
    examples: [{ sentence: "Jack earned a fortune from the new technology he developed." }],
    inflections: {
      plural: "fortunes"
    },
    phrases: [{ phrase: "fortune cookie", meaning: "幸运饼干" }, { phrase: "make a fortune", meaning: "发财" }],
    synonyms: [{"word": "luck", "zh": "运气"}],
    similarWords: [{"word": "fortunate", "reason": "\u62d3\u5c55", "zh": "幸运的"}]
  },
  {
    id: "guest",
    word: "guest",
    syllables: ["guest"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who spends time at another\u2019s home", zh: "\u5ba2\u4eba\uff1b\u5bbe\u5ba2" }],
    examples: [{ sentence: "Margaret had guests at her house at noon for lunch." }],
    inflections: {
      plural: "guests"
    },
    similarWords: [{"word": "west", "reason": "\u5f62\u8fd1", "zh": "\u897f"}, {"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}, {"word": "forest", "reason": "\u5f62\u8fd1", "zh": "\u68ee\u6797\uff1b\u6811\u6797"}],
    phrases: [{ phrase: "guest room", meaning: "客房" }, { phrase: "guest of honor", meaning: "贵宾" }],
    antonyms: [{ word: "host", zh: "主人" }]
  },
  {
    id: "host",
    word: "host",
    syllables: ["host"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who accepts guests into a home or restaurant", zh: "\u4e3b\u4eba\uff1b\u4e3b\u6301" }],
    examples: [{ sentence: "The host prepared a lot of delicious food for his guests." }],
    inflections: {
      plural: "hosts"
    },
    similarWords: [{"word": "cost", "reason": "\u5f62\u8fd1", "zh": "\u82b1\u8d39"}, {"word": "post", "reason": "\u5f62\u8fd1", "zh": "\u90ae\u5bc4"}, {"word": "hot", "reason": "\u5f62\u8fd1", "zh": "\u70ed\u7684\uff1b\u8fa3\u7684"}],
    phrases: [{ phrase: "host family", meaning: "寄宿家庭" }, { phrase: "host a party", meaning: "举办派对" }],
    antonyms: [{ word: "guest", zh: "客人" }]
  },
  {
    id: "original",
    word: "original",
    syllables: ["o", "rig", "i", "nal"],
    partOfSpeech: "adj.",
    definitions: [{ en: "made or produced for the first time; new", zh: "\u539f\u59cb\u7684\uff1b\u72ec\u521b\u7684" }],
    examples: [{ sentence: "Students are encouraged to create original pieces of art." }],
    inflections: {
      comparative: "more original",
      superlative: "most original"
    },
    rootAffix: { explanation: "origin\u8d77\u6e90 + -al = \u8d77\u6e90\u7684\u2192\u539f\u59cb\u7684" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aorigin\u8d77\u6e90 + -al = \u8d77\u6e90\u7684\u2192\u539f\u59cb\u7684",
    phrases: [{ phrase: "original idea", meaning: "最初的想法" }, { phrase: "original version", meaning: "原始版本" }],
    similarWords: [{"word": "origin", "reason": "\u62d3\u5c55", "zh": "起源"}]
  },
  {
    id: "peace",
    word: "peace",
    syllables: ["peace"],
    partOfSpeech: "n.",
    definitions: [{ en: "when people live together well and do not cause trouble", zh: "\u548c\u5e73\uff1b\u5e73\u9759" }],
    examples: [{ sentence: "We all respect each other and live in peace in the community." }],
    similarWords: [{"word": "space", "reason": "\u5f62\u8fd1", "zh": "\u7a7a\u95f4\uff1b\u592a\u7a7a"}, {"word": "race", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u79cd\u65cf"}],
    phrases: [{ phrase: "in peace", meaning: "和平地" }, { phrase: "world peace", meaning: "世界和平" }],
    antonyms: [{ word: "war", zh: "战争" }]
  },
  {
    id: "poem",
    word: "poem",
    syllables: ["poem"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of writing which often uses rhymes like make and bake", zh: "\u8bd7\uff1b\u8bd7\u6b4c" }],
    examples: [{ sentence: "Jenna writes and edits her poems in the park near her school." }],
    inflections: {
      plural: "poems"
    },
    similarWords: [{"word": "poet", "reason": "\u62d3\u5c55", "zh": "诗人"}],
    phrases: [{ phrase: "write a poem", meaning: "写诗" }, { phrase: "poem about", meaning: "关于...的诗" }]
  },
  {
    id: "sense",
    word: "sense",
    syllables: ["sense"],
    partOfSpeech: "v.",
    definitions: [{ en: "to know something without having evidence that it is true", zh: "\u611f\u89c9\uff1b\u610f\u8bc6\uff1b\u611f\u5b98" }],
    examples: [{ sentence: "The man sensed that someone was behind him." }],
    inflections: {
      pastTense: "sensed",
      pastParticiple: "sensed",
      thirdPerson: "senses",
      presentParticiple: "sensing"
    },
    phrases: [{ phrase: "sense of humor", meaning: "幽默感" }, { phrase: "make sense", meaning: "有意义" }],
    similarWords: [{"word": "sensible", "reason": "\u62d3\u5c55", "zh": "有判断力的"}, {"word": "senseless", "reason": "\u62d3\u5c55", "zh": "无知的"}]
  },
  {
    id: "trust",
    word: "trust",
    syllables: ["trust"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have confidence in a person or thing", zh: "\u4fe1\u4efb\uff1b\u76f8\u4fe1" }],
    examples: [{ sentence: "Rita trusted her nurse and enjoyed discussing her problems with her." }],
    inflections: {
      pastTense: "trusted",
      pastParticiple: "trusted",
      thirdPerson: "trusts",
      presentParticiple: "trusting"
    },
    phrases: [{ phrase: "trust in", meaning: "信任" }, { phrase: "trust me", meaning: "相信我" }],
    similarWords: [{"word": "trustful", "reason": "\u62d3\u5c55", "zh": "信任的"}, {"word": "distrust", "reason": "\u62d3\u5c55", "zh": "怀疑"}]
  },
  {
    id: "wealthy",
    word: "wealthy",
    syllables: ["wealthy"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a large amount of money", zh: "\u5bcc\u6709\u7684\uff1b\u5bcc\u88d5\u7684" }],
    examples: [{ sentence: "The wealthy businessman owns an airplane and an expensive car." }],
    inflections: {
      comparative: "wealthier",
      superlative: "wealthiest"
    },
    phrases: [{ phrase: "wealthy family", meaning: "富裕的家庭" }, { phrase: "wealthy person", meaning: "富人" }],
    synonyms: [{"word": "rich", "zh": "富有的"}],
    similarWords: [{"word": "wealth", "reason": "\u62d3\u5c55", "zh": "财富"}]
  },
  {
    id: "blood",
    word: "blood",
    syllables: ["blood"],
    partOfSpeech: "n.",
    definitions: [{ en: "the red liquid in your body", zh: "\u8840\uff1b\u8840\u6db2" }],
    examples: [{ sentence: "Once a month, Ryan gives blood during his lunch break." }],
    inflections: {
      plural: "bloods"
    },
    similarWords: [{"word": "flood", "reason": "\u5f62\u8fd1", "zh": "\u6d2a\u6c34\uff1b\u6df9\u6ca1"}, {"word": "wood", "reason": "\u5f62\u8fd1", "zh": "\u6728\u5934"}, {"word": "food", "reason": "\u5f62\u8fd1", "zh": "\u98df\u7269"}],
    phrases: [{ phrase: "blood type", meaning: "血型" }, { phrase: "blood pressure", meaning: "血压" }]
  },
  {
    id: "business",
    word: "business",
    syllables: ["business"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that makes money by selling goods or services", zh: "\u751f\u610f\uff1b\u5546\u4e1a\uff1b\u4e8b\u52a1" }],
    examples: [{ sentence: "Gus\u2019s business in the rich section of town will make a fortune." }],
    inflections: {
      plural: "businesses"
    },
    similarWords: [{"word": "express", "reason": "\u5f62\u8fd1", "zh": "\u8868\u8fbe\uff1b\u5feb\u9012"}, {"word": "princess", "reason": "\u5f62\u8fd1", "zh": "\u516c\u4e3b\uff1b\u738b\u5983"}, {"word": "address", "reason": "\u5f62\u8fd1", "zh": "\u5730\u5740"}, {"word": "busy", "reason": "\u62d3\u5c55", "zh": "\u5fd9\u7684"}],
    phrases: [{ phrase: "business man", meaning: "商人" }, { phrase: "on business", meaning: "出差" }],
    rootAffix: { explanation: "busy忙碌(y→i) + -ness = 生意；事务" }
  },
  {
    id: "electronic",
    word: "electronic",
    syllables: ["electronic"],
    partOfSpeech: "adj.",
    definitions: [{ en: "relating to things that use electricity", zh: "\u7535\u5b50\u7684" }],
    examples: [{ sentence: "Stop using any electronic items when the plane is taking off ." }],
    inflections: {
      comparative: "more electronic",
      superlative: "most electronic"
    },
    phrases: [{ phrase: "electronic device", meaning: "电子设备" }, { phrase: "electronic mail", meaning: "电子邮件" }],
    rootAffix: { explanation: "electron电子 + -ic = 电子的" },
    similarWords: [{"word": "electronics", "reason": "\u62d3\u5c55", "zh": "电子学"}]
  },
  {
    id: "influence",
    word: "influence",
    syllables: ["influence"],
    partOfSpeech: "n.",
    definitions: [{ en: "the power to affect a person or thing", zh: "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b" }],
    examples: [{ sentence: "Art has had a positive influence on Jennifer\u2019s career choice." }],
    inflections: {
      plural: "influences"
    },
    similarWords: [{"word": "experience", "reason": "\u5f62\u8fd1", "zh": "\u7ecf\u9a8c\uff1b\u7ecf\u5386"}, {"word": "evidence", "reason": "\u5f62\u8fd1", "zh": "\u8bc1\u636e\uff1b\u8ff9\u8c61"}, {"word": "sentence", "reason": "\u5f62\u8fd1", "zh": "\u53e5\u5b50\uff1b\u5224\u51b3"}],
    phrases: [{ phrase: "influence on", meaning: "对...的影响" }, { phrase: "under the influence", meaning: "受影响" }]
  },
  {
    id: "master",
    word: "master",
    syllables: ["master"],
    partOfSpeech: "v.",
    definitions: [{ en: "to become very skilled at something", zh: "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1" }],
    examples: [{ sentence: "Bob feels great joy when he masters new skills on his skateboard." }],
    inflections: {
      pastTense: "mastered",
      pastParticiple: "mastered",
      thirdPerson: "masters",
      presentParticiple: "mastering"
    },
    similarWords: [{"word": "theater", "reason": "\u5f62\u8fd1", "zh": "\u5267\u9662"}, {"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "water", "reason": "\u5f62\u8fd1", "zh": "\u6c34"}],
    phrases: [{ phrase: "master of", meaning: "...的大师" }, { phrase: "master plan", meaning: "总体规划" }]
  },
  {
    id: "pity",
    word: "pity",
    syllables: ["pity"],
    partOfSpeech: "n.",
    definitions: [{ en: "feeling sorry for another person or animal", zh: "\u540c\u60c5\uff1b\u9057\u61be" }],
    examples: [{ sentence: "Abigail felt pity for her mother after she lost her job." }],
    inflections: {
      plural: "pities"
    },
    similarWords: [{"word": "city", "reason": "\u5f62\u8fd1", "zh": "\u57ce\u5e02"}],
    phrases: [{ phrase: "what a pity", meaning: "真遗憾" }, { phrase: "feel pity for", meaning: "同情" }],
    synonyms: [{"word": "sympathy", "zh": "同情"}]
  },
  {
    id: "press",
    word: "press",
    syllables: ["press"],
    partOfSpeech: "n.",
    definitions: [{ en: "all the people and groups who provide the news", zh: "\u538b\uff1b\u6309\uff1b\u65b0\u95fb\u754c" }],
    examples: [{ sentence: "The press reported on the event conducted by the city police." }],
    inflections: {
      plural: "presses"
    },
    similarWords: [{"word": "stress", "reason": "\u5f62\u8fd1", "zh": "\u538b\u529b\uff1b\u5f3a\u8c03"}, {"word": "guess", "reason": "\u5f62\u8fd1", "zh": "\u731c"}],
    phrases: [{ phrase: "press the button", meaning: "按按钮" }, { phrase: "press conference", meaning: "新闻发布会" }],
    rootAffix: { explanation: "press压 = 按；压" }
  },
  {
    id: "shoot",
    word: "shoot",
    syllables: ["shoot"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make one thing come out of another at a fast speed", zh: "\u5c04\u51fb\uff1b\u62cd\u6444" }],
    examples: [{ sentence: "The children like to shoot water at one another on hot days." }],
    inflections: {
      pastTense: "shot",
      pastParticiple: "shot",
      thirdPerson: "shoots",
      presentParticiple: "shooting"
    },
    similarWords: [{"word": "boot", "reason": "\u5f62\u8fd1", "zh": "\u9774\u5b50"}, {"word": "root", "reason": "\u5f62\u8fd1", "zh": "\u6839\uff1b\u6839\u6e90"}, {"word": "short", "reason": "\u5f62\u8fd1", "zh": "\u77ed\u7684\uff0c\u77ee\u7684"}],
    phrases: [{ phrase: "shoot at", meaning: "向...射击" }, { phrase: "shoot the ball", meaning: "投篮" }]
  },
  {
    id: "signal",
    word: "signal",
    syllables: ["signal"],
    partOfSpeech: "v.",
    definitions: [{ en: "to communicate by making a sign or sound", zh: "\u4fe1\u53f7\uff1b\u53d1\u4fe1\u53f7" }],
    examples: [{ sentence: "The guide signaled for us to follow her through the park." }],
    inflections: {
      pastTense: "signaled",
      pastParticiple: "signaled",
      thirdPerson: "signals",
      presentParticiple: "signaling"
    },
    similarWords: [{"word": "sign", "reason": "\u62d3\u5c55", "zh": "\u6807\u5fd7\uff1b\u7b7e\u540d"}],
    phrases: [{ phrase: "signal for", meaning: "发信号" }, { phrase: "traffic signal", meaning: "交通信号" }]
  },
  {
    id: "teenager",
    word: "teenager",
    syllables: ["teenager"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person between the ages of thirteen and nineteen", zh: "\u9752\u5c11\u5e74" }],
    examples: [{ sentence: "Many parents do not trust teenagers to be able to make decisions." }],
    inflections: {
      plural: "teenagers"
    },
    phrases: [{ phrase: "teenager problems", meaning: "青少年问题" }, { phrase: "as a teenager", meaning: "作为青少年" }],
    synonyms: [{"word": "teen", "zh": "青少年"}],
    similarWords: [{"word": "teenage", "reason": "\u62d3\u5c55", "zh": "青少年的"}]
  },
  {
    id: "achieve",
    word: "achieve",
    syllables: ["a", "chieve"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get something by working hard", zh: "\u5b9e\u73b0\uff1b\u8fbe\u5230" }],
    examples: [{ sentence: "Ray achieved excellent grades in college." }],
    inflections: {
      pastTense: "achieved",
      pastParticiple: "achieved",
      thirdPerson: "achieves",
      presentParticiple: "achieving"
    },
    similarWords: [{"word": "believe", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u4fe1\uff1b\u8ba4\u4e3a"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aa \u00b7 chieve",
    phrases: [{ phrase: "achieve a goal", meaning: "实现目标" }, { phrase: "achieve success", meaning: "获得成功" }]
  },
  {
    id: "beg",
    word: "beg",
    syllables: ["beg"],
    partOfSpeech: "v.",
    definitions: [{ en: "to ask for something again and again", zh: "\u4e5e\u6c42\uff1b\u6073\u6c42" }],
    examples: [{ sentence: "Lucy begged her mother for a new toy, but her mother said no." }],
    inflections: {
      pastTense: "begged",
      pastParticiple: "begged",
      thirdPerson: "begs",
      presentParticiple: "begging"
    },
    similarWords: [{"word": "big", "reason": "\u5f62\u8fd1", "zh": "\u5927\u7684\uff0c\u5de8\u5927\u7684"}, {"word": "bag", "reason": "\u5f62\u8fd1", "zh": "\u5305"}],
    phrases: [{ phrase: "beg for", meaning: "乞求" }, { phrase: "I beg your pardon", meaning: "对不起" }]
  },
  {
    id: "control",
    word: "control",
    syllables: ["con", "trol"],
    partOfSpeech: "v.",
    definitions: [{ en: "to be in charge of a person or thing", zh: "\u63a7\u5236\uff1b\u652f\u914d" }],
    examples: [{ sentence: "The two wealthy men controlled a business empire." }],
    inflections: {
      pastTense: "controled",
      pastParticiple: "controled",
      thirdPerson: "controls",
      presentParticiple: "controling"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acon \u00b7 trol",
    phrases: [{ phrase: "control of", meaning: "控制" }, { phrase: "under control", meaning: "在控制下" }],
    similarWords: [{"word": "controller", "reason": "\u62d3\u5c55", "zh": "控制器"}]
  },
  {
    id: "debate",
    word: "debate",
    syllables: ["debate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to exchange opinions about a topic", zh: "\u8fa9\u8bba\uff1b\u4e89\u8bba" }],
    examples: [{ sentence: "The students debated their roles before coming to a decision." }],
    inflections: {
      pastTense: "debated",
      pastParticiple: "debated",
      thirdPerson: "debates",
      presentParticiple: "debating"
    },
    similarWords: [{"word": "create", "reason": "\u5f62\u8fd1", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}, {"word": "climate", "reason": "\u5f62\u8fd1", "zh": "\u6c14\u5019"}, {"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}],
    phrases: [{ phrase: "debate about", meaning: "关于...的辩论" }, { phrase: "have a debate", meaning: "进行辩论" }]
  },
  {
    id: "improve",
    word: "improve",
    syllables: ["improve"],
    partOfSpeech: "v.",
    definitions: [{ en: "to get better at something", zh: "\u6539\u8fdb\uff1b\u63d0\u9ad8" }],
    examples: [{ sentence: "The girls\u2019 plan was to practice every day in order to improve." }],
    inflections: {
      pastTense: "improved",
      pastParticiple: "improved",
      thirdPerson: "improves",
      presentParticiple: "improving"
    },
    similarWords: [{"word": "improvement", "reason": "\u62d3\u5c55", "zh": "改进；提高"}],
    phrases: [{ phrase: "improve on", meaning: "改进" }, { phrase: "improve oneself", meaning: "自我提升" }]
  },
  {
    id: "similar",
    word: "similar",
    syllables: ["similar"],
    partOfSpeech: "adj.",
    definitions: [{ en: "almost the same", zh: "\u76f8\u4f3c\u7684\uff1b\u7c7b\u4f3c\u7684" }],
    examples: [{ sentence: "The sisters look quite similar, but you can tell the difference." }],
    inflections: {
      comparative: "more similar",
      superlative: "most similar"
    },
    similarWords: [{"word": "popular", "reason": "\u5f62\u8fd1", "zh": "\u6d41\u884c\u7684\uff1b\u53d7\u6b22\u8fce\u7684"}],
    phrases: [{ phrase: "similar to", meaning: "与...相似" }, { phrase: "in a similar way", meaning: "以类似的方式" }]
  },
  {
    id: "soldier",
    word: "soldier",
    syllables: ["soldier"],
    partOfSpeech: "n.",
    definitions: [{ en: "a person who trains to fight for his or her country", zh: "\u58eb\u5175\uff1b\u519b\u4eba" }],
    examples: [{ sentence: "Soldiers were called in to help people who were in danger." }],
    inflections: {
      plural: "soldiers"
    },
    phrases: [{ phrase: "soldier on", meaning: "继续奋斗" }, { phrase: "army soldier", meaning: "陆军士兵" }]
  },
  {
    id: "system",
    word: "system",
    syllables: ["system"],
    partOfSpeech: "n.",
    definitions: [{ en: "a group of parts that move or work together", zh: "\u7cfb\u7edf\uff1b\u4f53\u7cfb" }],
    examples: [{ sentence: "You need to have the right skills to handle this computer system." }],
    inflections: {
      plural: "systems"
    },
    phrases: [{ phrase: "system of", meaning: "...的系统" }, { phrase: "education system", meaning: "教育系统" }],
    similarWords: [{"word": "systematic", "reason": "\u62d3\u5c55", "zh": "系统的"}]
  },
  {
    id: "war",
    word: "war",
    syllables: ["war"],
    partOfSpeech: "n.",
    definitions: [{ en: "fighting between two countries or groups", zh: "\u6218\u4e89\uff1b\u6253\u4ed7" }],
    examples: [{ sentence: "The men fought in the war for several years before it ended." }],
    inflections: {
      plural: "wars"
    },
    similarWords: [{"word": "far", "reason": "\u5f62\u8fd1", "zh": "\u8fdc\u7684\uff0c\u9065\u8fdc"}, {"word": "way", "reason": "\u5f62\u8fd1", "zh": "\u65b9\u5f0f\uff0c\u65b9\u6cd5\uff1b\u8def"}, {"word": "car", "reason": "\u5f62\u8fd1", "zh": "\u6c7d\u8f66"}],
    phrases: [{ phrase: "war on", meaning: "对...的战争" }, { phrase: "World War II", meaning: "二战" }],
    antonyms: [{ word: "peace", zh: "和平" }]
  },
  {
    id: "warn",
    word: "warn",
    syllables: ["warn"],
    partOfSpeech: "v.",
    definitions: [{ en: "to tell someone to be careful", zh: "\u8b66\u544a\uff1b\u63d0\u9192" }],
    examples: [{ sentence: "Evan did not see the sign warning people about the wet floor." }],
    inflections: {
      pastTense: "warned",
      pastParticiple: "warned",
      thirdPerson: "warns",
      presentParticiple: "warning"
    },
    similarWords: [{"word": "learn", "reason": "\u5f62\u8fd1", "zh": "\u5b66\u4e60\uff0c\u5b66\u4f1a"}, {"word": "warm", "reason": "\u5f62\u8fd1", "zh": "\u6e29\u6696\u7684\uff1b\u4f7f\u6e29\u6696"}, {"word": "war", "reason": "\u5f62\u8fd1", "zh": "\u6218\u4e89\uff1b\u6253\u4ed7"}],
    phrases: [{ phrase: "warn about", meaning: "警告" }, { phrase: "warn off", meaning: "警告离开" }]
  },
  {
    id: "announce",
    word: "announce",
    syllables: ["announce"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make something known to many people", zh: "\u5ba3\u5e03\uff1b\u901a\u77e5" }],
    examples: [{ sentence: "The press has announced the birth of the baby princess." }],
    inflections: {
      pastTense: "announced",
      pastParticiple: "announced",
      thirdPerson: "announces",
      presentParticiple: "announcing"
    },
    similarWords: [{"word": "evidence", "reason": "\u5f62\u8fd1", "zh": "\u8bc1\u636e\uff1b\u8ff9\u8c61"}, {"word": "influence", "reason": "\u5f62\u8fd1", "zh": "\u5f71\u54cd\uff1b\u5f71\u54cd\u529b"}, {"word": "sentence", "reason": "\u5f62\u8fd1", "zh": "\u53e5\u5b50\uff1b\u5224\u51b3"}],
    phrases: [{ phrase: "announce to", meaning: "向...宣布" }, { phrase: "announce the result", meaning: "公布结果" }]
  },
  {
    id: "bottom",
    word: "bottom",
    syllables: ["bottom"],
    partOfSpeech: "n.",
    definitions: [{ en: "the lowest point of something", zh: "\u5e95\u90e8\uff1b\u5e95\u7aef" }],
    examples: [{ sentence: "The man found two major problems on the bottom of my car." }],
    inflections: {
      plural: "bottoms"
    },
    similarWords: [{"word": "custom", "reason": "\u5f62\u8fd1", "zh": "\u4e60\u4fd7\uff1b\u98ce\u4fd7"}],
    phrases: [{ phrase: "at the bottom", meaning: "在底部" }, { phrase: "bottom of", meaning: "...的底部" }],
    antonyms: [{ word: "top", zh: "顶部" }]
  },
  {
    id: "compete",
    word: "compete",
    syllables: ["com", "pete"],
    partOfSpeech: "v.",
    definitions: [{ en: "to try to be better or faster than another", zh: "\u7ade\u4e89\uff1b\u6bd4\u8d5b" }],
    examples: [{ sentence: "The boys competed to see who would win the race." }],
    inflections: {
      pastTense: "competed",
      pastParticiple: "competed",
      thirdPerson: "competes",
      presentParticiple: "competing"
    },
    similarWords: [{"word": "complete", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u6210\uff1b\u5b8c\u6574\u7684"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1acom \u00b7 pete",
    phrases: [{ phrase: "compete in", meaning: "参加...比赛" }, { phrase: "compete with", meaning: "和...竞争" }],
    rootAffix: { explanation: "com-一起 + pet追求 = 竞争；比赛" }
  },
  {
    id: "copy",
    word: "copy",
    syllables: ["copy"],
    partOfSpeech: "v.",
    definitions: [{ en: "to make or do the same thing as something else", zh: "\u590d\u5236\uff1b\u526f\u672c" }],
    examples: [{ sentence: "In the office, Rachel copies papers with a machine." }],
    inflections: {
      pastTense: "copied",
      pastParticiple: "copied",
      thirdPerson: "copies",
      presentParticiple: "copying"
    },
    phrases: [{ phrase: "copy down", meaning: "抄下来" }, { phrase: "copy of", meaning: "一份" }],
    synonyms: [{"word": "duplicate", "zh": "复制"}]
  },
  {
    id: "exhibit",
    word: "exhibit",
    syllables: ["exhibit"],
    partOfSpeech: "n.",
    definitions: [{ en: "something shown in a museum or for an event", zh: "\u5c55\u89c8\uff1b\u5c55\u51fa" }],
    examples: [{ sentence: "Lois and her friends were viewing art exhibits at the museum." }],
    inflections: {
      plural: "exhibits"
    },
    phrases: [{ phrase: "exhibit at", meaning: "在...展出" }, { phrase: "museum exhibit", meaning: "博物馆展览" }],
    similarWords: [{"word": "exhibition", "reason": "\u62d3\u5c55", "zh": "展览会"}]
  },
  {
    id: "print",
    word: "print",
    syllables: ["print"],
    partOfSpeech: "v.",
    definitions: [{ en: "to produce words or images on paper using a machine", zh: "\u5370\u5237\uff1b\u6253\u5370" }],
    examples: [{ sentence: "Some businesses make their fortune printing things for others." }],
    inflections: {
      pastTense: "printed",
      pastParticiple: "printed",
      thirdPerson: "prints",
      presentParticiple: "printing"
    },
    similarWords: [{"word": "point", "reason": "\u5f62\u8fd1", "zh": "\u6307\uff0c\u70b9\uff0c\u5206\u6570"}, {"word": "paint", "reason": "\u5f62\u8fd1", "zh": "\u753b\u753b"}],
    phrases: [{ phrase: "print out", meaning: "打印出来" }, { phrase: "in print", meaning: "已出版" }]
  },
  {
    id: "project",
    word: "project",
    syllables: ["project"],
    partOfSpeech: "n.",
    definitions: [{ en: "a planned piece of work that takes time to finish", zh: "\u9879\u76ee\uff1b\u6295\u5f71" }],
    examples: [{ sentence: "The teenagers worked together on their history project." }],
    inflections: {
      plural: "projects"
    },
    similarWords: [{"word": "subject", "reason": "\u5f62\u8fd1", "zh": "\u79d1\u76ee\uff1b\u4e3b\u9898"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "science project", meaning: "科学项目" }, { phrase: "project work", meaning: "项目工作" }]
  },
  {
    id: "proper",
    word: "proper",
    syllables: ["proper"],
    partOfSpeech: "adj.",
    definitions: [{ en: "correct or right", zh: "\u9002\u5f53\u7684\uff1b\u6b63\u786e\u7684" }],
    examples: [{ sentence: "The proper way to recycle is to separate the different items." }],
    inflections: {
      comparative: "more proper",
      superlative: "most proper"
    },
    similarWords: [{"word": "paper", "reason": "\u5f62\u8fd1", "zh": "\u7eb8"}],
    phrases: [{ phrase: "proper way", meaning: "正确的方式" }, { phrase: "proper name", meaning: "专有名词" }]
  },
  {
    id: "select",
    word: "select",
    syllables: ["select"],
    partOfSpeech: "v.",
    definitions: [{ en: "to choose", zh: "\u9009\u62e9\uff1b\u6311\u9009" }],
    examples: [{ sentence: "Ben selected one of the available images on the screen." }],
    inflections: {
      pastTense: "selected",
      pastParticiple: "selected",
      thirdPerson: "selects",
      presentParticiple: "selecting"
    },
    similarWords: [{"word": "collect", "reason": "\u5f62\u8fd1", "zh": "\u6536\u96c6\uff1b\u91c7\u96c6"}, {"word": "perfect", "reason": "\u5f62\u8fd1", "zh": "\u5b8c\u7f8e\u7684\uff1b\u6781\u597d\u7684"}, {"word": "insect", "reason": "\u5f62\u8fd1", "zh": "\u6606\u866b\uff1b\u866b"}],
    phrases: [{ phrase: "select from", meaning: "从...中选择" }, { phrase: "select all", meaning: "全选" }]
  },
  {
    id: "sheet",
    word: "sheet",
    syllables: ["sheet"],
    partOfSpeech: "n.",
    definitions: [{ en: "a piece of flat material like paper", zh: "\u5e8a\u5355\uff1b\u7eb8\u5f20\uff1b\u7247" }],
    examples: [{ sentence: "I prefer to write on sheets of paper. I do not trust electronic things." }],
    inflections: {
      plural: "sheets"
    },
    similarWords: [{"word": "meet", "reason": "\u5f62\u8fd1", "zh": "\u9047\u89c1\uff0c\u89c1\u9762"}, {"word": "street", "reason": "\u5f62\u8fd1", "zh": "\u8857\u9053"}, {"word": "sweet", "reason": "\u5f62\u8fd1", "zh": "\u751c\u7684\uff0c\u751c\u871c\u7684"}],
    phrases: [{ phrase: "sheet of paper", meaning: "一张纸" }, { phrase: "answer sheet", meaning: "答题纸" }]
  },
  {
    id: "concentrate",
    word: "concentrate",
    syllables: ["concentrate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to put all your energy on one thing", zh: "\u96c6\u4e2d\uff1b\u4e13\u6ce8" }],
    examples: [{ sentence: "Nolan concentrated on the game and considered his next move." }],
    inflections: {
      pastTense: "concentrated",
      pastParticiple: "concentrated",
      thirdPerson: "concentrates",
      presentParticiple: "concentrating"
    },
    similarWords: [{"word": "congratulate", "reason": "\u5f62\u8fd1", "zh": "\u795d\u8d3a"}, {"word": "communicate", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6d41\uff1b\u6c9f\u901a"}, {"word": "appreciate", "reason": "\u5f62\u8fd1", "zh": "\u611f\u6fc0\uff1b\u6b23\u8d4f"}],
    phrases: [{ phrase: "concentrate on", meaning: "专注于" }, { phrase: "concentrate the mind", meaning: "集中注意力" }],
    rootAffix: { explanation: "con-一起 + centr中心 + -ate = 集中" }
  },
  {
    id: "maximum",
    word: "maximum",
    syllables: ["maximum"],
    partOfSpeech: "adj.",
    definitions: [{ en: "greatest possible", zh: "\u6700\u5927\u503c\uff1b\u6700\u5927\u7684" }],
    examples: [{ sentence: "The police officer warned Kay about the maximum speed limit." }],
    inflections: {
      comparative: "more maximum",
      superlative: "most maximum"
    },
    phrases: [{ phrase: "maximum speed", meaning: "最高速度" }, { phrase: "maximum temperature", meaning: "最高温度" }],
    similarWords: [{"word": "maximize", "reason": "\u62d3\u5c55", "zh": "最大化"}]
  },
  {
    id: "prize",
    word: "prize",
    syllables: ["prize"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you get for winning", zh: "\u5956\uff1b\u5956\u54c1" }],
    examples: [{ sentence: "Rashid received a prize for achieving the best test scores." }],
    inflections: {
      plural: "prizes"
    },
    similarWords: [{"word": "size", "reason": "\u5f62\u8fd1", "zh": "\u5c3a\u5bf8"}, {"word": "price", "reason": "\u5f62\u8fd1", "zh": "\u4ef7\u683c\uff1b\u4ef7\u94b1"}],
    phrases: [{ phrase: "prize winner", meaning: "获奖者" }, { phrase: "Nobel Prize", meaning: "诺贝尔奖" }]
  },
  {
    id: "require",
    word: "require",
    syllables: ["require"],
    partOfSpeech: "v.",
    definitions: [{ en: "to have to; to be necessary to do", zh: "\u9700\u8981\uff1b\u8981\u6c42" }],
    examples: [{ sentence: "You are required to pay money to leave your car here." }],
    inflections: {
      pastTense: "required",
      pastParticiple: "required",
      thirdPerson: "requires",
      presentParticiple: "requiring"
    },
    similarWords: [{"word": "admire", "reason": "\u5f62\u8fd1", "zh": "\u94a6\u4f69\uff1b\u6b23\u8d4f"}, {"word": "empire", "reason": "\u5f62\u8fd1", "zh": "\u5e1d\u56fd"}],
    phrases: [{ phrase: "require to do", meaning: "要求做" }, { phrase: "as required", meaning: "按要求" }]
  },
  {
    id: "research",
    word: "research",
    syllables: ["research"],
    partOfSpeech: "v.",
    definitions: [{ en: "to study something carefully and try to discover new facts", zh: "\u7814\u7a76\uff1b\u8c03\u67e5" }],
    examples: [{ sentence: "Doctors have been researching cures for many diseases." }],
    inflections: {
      pastTense: "researched",
      pastParticiple: "researched",
      thirdPerson: "researches",
      presentParticiple: "researching"
    },
    similarWords: [{"word": "search", "reason": "\u62d3\u5c55", "zh": "\u641c\u7d22\uff1b\u641c\u5bfb"}],
    phrases: [{ phrase: "do research", meaning: "做研究" }, { phrase: "research on", meaning: "对...的研究" }]
  },
  {
    id: "respond",
    word: "respond",
    syllables: ["respond"],
    partOfSpeech: "v.",
    definitions: [{ en: "to answer", zh: "\u56de\u7b54\uff1b\u56de\u5e94" }],
    examples: [{ sentence: "Hanna responded to Jim\u2019s question on her cell phone." }],
    inflections: {
      pastTense: "responded",
      pastParticiple: "responded",
      thirdPerson: "responds",
      presentParticiple: "responding"
    },
    similarWords: [{"word": "second", "reason": "\u5f62\u8fd1", "zh": "\u7b2c\u4e8c"}],
    phrases: [{ phrase: "respond to", meaning: "回应" }, { phrase: "respond quickly", meaning: "快速回应" }]
  },
  {
    id: "spell",
    word: "spell",
    syllables: ["spell"],
    partOfSpeech: "v.",
    definitions: [{ en: "to write or say the letters of a word", zh: "\u62fc\u5199\uff1b\u5492\u8bed" }],
    examples: [{ sentence: "They spelled the word \u201cteam\u201d with their bodies." }],
    inflections: {
      pastTense: "spelled/spelt",
      pastParticiple: "spelled/spelt",
      thirdPerson: "spells",
      presentParticiple: "spelling"
    },
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "tell", "reason": "\u5f62\u8fd1", "zh": "\u544a\u8bc9"}],
    phrases: [{ phrase: "spell out", meaning: "拼写出来" }, { phrase: "spell check", meaning: "拼写检查" }]
  },
  {
    id: "state",
    word: "state",
    syllables: ["state"],
    partOfSpeech: "v.",
    definitions: [{ en: "to say something", zh: "\u72b6\u6001\uff1b\u5dde\uff1b\u9648\u8ff0" }],
    examples: [{ sentence: "Anna stated that she was happy with her new job." }],
    inflections: {
      pastTense: "stated",
      pastParticiple: "stated",
      thirdPerson: "states",
      presentParticiple: "stating"
    },
    similarWords: [{"word": "debate", "reason": "\u5f62\u8fd1", "zh": "\u8fa9\u8bba\uff1b\u4e89\u8bba"}, {"word": "create", "reason": "\u5f62\u8fd1", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}, {"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "station", "reason": "\u62d3\u5c55", "zh": "\u8f66\u7ad9\uff0c\u7ad9"}],
    phrases: [{ phrase: "state of", meaning: "...的状态" }, { phrase: "state the fact", meaning: "陈述事实" }]
  },
  {
    id: "structure",
    word: "structure",
    syllables: ["structure"],
    partOfSpeech: "n.",
    definitions: [{ en: "something that is built", zh: "\u7ed3\u6784\uff1b\u6784\u9020" }],
    examples: [{ sentence: "People debate who built this ancient structure." }],
    inflections: {
      plural: "structures"
    },
    similarWords: [{"word": "adventure", "reason": "\u5f62\u8fd1", "zh": "\u5192\u9669\uff1b\u5947\u9047"}, {"word": "pleasure", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u4e50\uff1b\u6109\u5feb"}],
    phrases: [{ phrase: "structure of", meaning: "...的结构" }, { phrase: "sentence structure", meaning: "句子结构" }],
    rootAffix: { explanation: "struct建造 + -ure = 结构" }
  },
  {
    id: "tool",
    word: "tool",
    syllables: ["tool"],
    partOfSpeech: "n.",
    definitions: [{ en: "anything used to do a job", zh: "\u5de5\u5177\uff1b\u7528\u5177" }],
    examples: [{ sentence: "Mr. Taylor has a lot of tools similar to these at his home." }],
    inflections: {
      plural: "tools"
    },
    similarWords: [{"word": "cool", "reason": "\u5f62\u8fd1", "zh": "\u51c9\u723d\u7684\uff1b\u9177\u7684"}],
    phrases: [{ phrase: "tool box", meaning: "工具箱" }, { phrase: "learning tool", meaning: "学习工具" }]
  },
  {
    id: "flood",
    word: "flood",
    syllables: ["flood"],
    partOfSpeech: "n.",
    definitions: [{ en: "a great amount of water over land that is usually dry", zh: "\u6d2a\u6c34\uff1b\u6df9\u6ca1" }],
    examples: [{ sentence: "The awful flood destroyed several structures in our town." }],
    inflections: {
      plural: "floods"
    },
    similarWords: [{"word": "blood", "reason": "\u5f62\u8fd1", "zh": "\u8840\uff1b\u8840\u6db2"}, {"word": "wood", "reason": "\u5f62\u8fd1", "zh": "\u6728\u5934"}, {"word": "food", "reason": "\u5f62\u8fd1", "zh": "\u98df\u7269"}],
    phrases: [{ phrase: "flood of", meaning: "大量的" }, { phrase: "in flood", meaning: "泛滥" }]
  },
  {
    id: "gentle",
    word: "gentle",
    syllables: ["gentle"],
    partOfSpeech: "adj.",
    definitions: [{ en: "not mean or unkind", zh: "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684" }],
    examples: [{ sentence: "The farmers required that children be gentle with their animals." }],
    inflections: {
      comparative: "more gentle",
      superlative: "most gentle"
    },
    similarWords: [{"word": "little", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "title", "reason": "\u5f62\u8fd1", "zh": "\u6807\u9898\uff1b\u5934\u8854"}, {"word": "bottle", "reason": "\u5f62\u8fd1", "zh": "\u74f6\u5b50"}],
    phrases: [{ phrase: "gentle wind", meaning: "微风" }, { phrase: "gentle touch", meaning: "温柔的触摸" }]
  },
  {
    id: "melt",
    word: "melt",
    syllables: ["melt"],
    partOfSpeech: "v.",
    definitions: [{ en: "to change into liquid", zh: "\u878d\u5316\uff1b\u7194\u5316" }],
    examples: [{ sentence: "Be careful! Your ice cream is melting. You should eat it fast!" }],
    inflections: {
      pastTense: "melted",
      pastParticiple: "melted",
      thirdPerson: "melts",
      presentParticiple: "melting"
    },
    similarWords: [{"word": "meat", "reason": "\u5f62\u8fd1", "zh": "\u8089"}, {"word": "meet", "reason": "\u5f62\u8fd1", "zh": "\u9047\u89c1\uff0c\u89c1\u9762"}],
    phrases: [{ phrase: "melt away", meaning: "融化" }, { phrase: "melt into", meaning: "融入" }]
  },
  {
    id: "operate",
    word: "operate",
    syllables: ["operate"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use or make something work", zh: "\u64cd\u4f5c\uff1b\u8fd0\u4f5c" }],
    examples: [{ sentence: "Cody operates this huge machine on his grandparents\u2019 farm." }],
    inflections: {
      pastTense: "operated",
      pastParticiple: "operated",
      thirdPerson: "operates",
      presentParticiple: "operating"
    },
    similarWords: [{"word": "separate", "reason": "\u5f62\u8fd1", "zh": "\u5206\u5f00\uff1b\u5206\u79bb\u7684"}, {"word": "debate", "reason": "\u5f62\u8fd1", "zh": "\u8fa9\u8bba\uff1b\u4e89\u8bba"}, {"word": "create", "reason": "\u5f62\u8fd1", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}],
    phrases: [{ phrase: "operate on", meaning: "给...做手术" }, { phrase: "operate a machine", meaning: "操作机器" }],
    rootAffix: { explanation: "oper工作 + -ate = 操作；动手术" }
  },
  {
    id: "recognize",
    word: "recognize",
    syllables: ["rec", "og", "nize"],
    partOfSpeech: "v.",
    definitions: [{ en: "to know a person or thing because it is familiar", zh: "\u8ba4\u51fa\uff1b\u8bc6\u522b" }],
    examples: [{ sentence: "Sally recognized some of the things she saw from the train." }],
    inflections: {
      pastTense: "recognized",
      pastParticiple: "recognized",
      thirdPerson: "recognizes",
      presentParticiple: "recognizing"
    },
    rootAffix: { explanation: "re-\u518d + cogn\u77e5\u9053 + -ize = \u518d\u6b21\u77e5\u9053\u2192\u8ba4\u51fa" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1are-\u518d + cogn\u77e5\u9053 + -ize = \u518d\u6b21\u77e5\u9053\u2192\u8ba4\u51fa",
    phrases: [{ phrase: "recognize as", meaning: "承认" }, { phrase: "recognize the importance", meaning: "认识到重要性" }],
    similarWords: [{"word": "recognition", "reason": "\u62d3\u5c55", "zh": "识别"}]
  },
  {
    id: "remain",
    word: "remain",
    syllables: ["remain"],
    partOfSpeech: "v.",
    definitions: [{ en: "to stay in one place", zh: "\u4fdd\u6301\uff1b\u5269\u4e0b" }],
    examples: [{ sentence: "It was windy, but Eve\u2019s hat remained on her head." }],
    inflections: {
      pastTense: "remained",
      pastParticiple: "remained",
      thirdPerson: "remains",
      presentParticiple: "remaining"
    },
    similarWords: [{"word": "again", "reason": "\u5f62\u8fd1", "zh": "\u518d\u6b21\uff0c\u53c8"}, {"word": "explain", "reason": "\u5f62\u8fd1", "zh": "\u89e3\u91ca\uff1b\u8bf4\u660e"}, {"word": "certain", "reason": "\u5f62\u8fd1", "zh": "\u786e\u5b9a\u7684\uff1b\u67d0\u4e2a"}, {"word": "main", "reason": "\u62d3\u5c55", "zh": "\u4e3b\u8981\u7684\uff1b\u6700\u91cd\u8981\u7684"}],
    phrases: [{ phrase: "remain in", meaning: "留在" }, { phrase: "remain silent", meaning: "保持沉默" }],
    rootAffix: { explanation: "re-再 + main留 = 保持；留下" }
  },
  {
    id: "task",
    word: "task",
    syllables: ["task"],
    partOfSpeech: "n.",
    definitions: [{ en: "work", zh: "\u4efb\u52a1\uff1b\u5de5\u4f5c" }],
    examples: [{ sentence: "His mom showed him how to complete the task the proper way." }],
    inflections: {
      plural: "tasks"
    },
    similarWords: [{"word": "ask", "reason": "\u5f62\u8fd1", "zh": "\u95ee\uff1b\u8bf7\u6c42"}, {"word": "talk", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8c08\u8bdd"}],
    phrases: [{ phrase: "task force", meaning: "特别工作组" }, { phrase: "complete a task", meaning: "完成任务" }]
  },
  {
    id: "various",
    word: "various",
    syllables: ["various"],
    partOfSpeech: "adj.",
    definitions: [{ en: "of different kinds", zh: "\u5404\u79cd\u5404\u6837\u7684" }],
    examples: [{ sentence: "We planted various flowers in front of our house this spring." }],
    inflections: {
      comparative: "more various",
      superlative: "most various"
    },
    similarWords: [{"word": "curious", "reason": "\u5f62\u8fd1", "zh": "\u597d\u5947\u7684"}, {"word": "serious", "reason": "\u5f62\u8fd1", "zh": "\u4e25\u91cd\u7684\uff1b\u8ba4\u771f\u7684"}, {"word": "famous", "reason": "\u5f62\u8fd1", "zh": "\u8457\u540d\u7684"}],
    phrases: [{ phrase: "various kinds", meaning: "各种" }, { phrase: "various reasons", meaning: "各种原因" }],
    rootAffix: { explanation: "vary变化(y→i) + -ous = 各种各样的" }
  },
  {
    id: "waste",
    word: "waste",
    syllables: ["waste"],
    partOfSpeech: "v.",
    definitions: [{ en: "to use too much of something", zh: "\u6d6a\u8d39\uff1b\u5e9f\u7269" }],
    examples: [{ sentence: "Do not waste water. Turn it off when you are not using it." }],
    inflections: {
      pastTense: "wasted",
      pastParticiple: "wasted",
      thirdPerson: "wastes",
      presentParticiple: "wasting"
    },
    similarWords: [{"word": "taste", "reason": "\u5f62\u8fd1", "zh": "\u5473\u9053\uff1b\u54c1\u5c1d"}],
    phrases: [{ phrase: "waste of time", meaning: "浪费时间" }, { phrase: "waste water", meaning: "废水" }]
  },
  {
    id: "worth",
    word: "worth",
    syllables: ["worth"],
    partOfSpeech: "adj.",
    definitions: [{ en: "having a value in money", zh: "\u503c\u5f97\u7684\uff1b\u4ef7\u503c" }],
    examples: [{ sentence: "This car is worth a fortune. I do not think we will be able to buy it." }],
    inflections: {
      comparative: "worther",
      superlative: "worthest"
    },
    similarWords: [{"word": "north", "reason": "\u5f62\u8fd1", "zh": "\u5317"}, {"word": "earth", "reason": "\u5f62\u8fd1", "zh": "\u5730\u7403"}, {"word": "birth", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u751f"}],
    phrases: [{ phrase: "worth doing", meaning: "值得做" }, { phrase: "worth it", meaning: "值得" }]
  },
  {
    id: "climate",
    word: "climate",
    syllables: ["climate"],
    partOfSpeech: "n.",
    definitions: [{ en: "the weather of a place", zh: "\u6c14\u5019" }],
    examples: [{ sentence: "She hated the cold climate in the northern part of the country." }],
    inflections: {
      plural: "climates"
    },
    similarWords: [{"word": "debate", "reason": "\u5f62\u8fd1", "zh": "\u8fa9\u8bba\uff1b\u4e89\u8bba"}, {"word": "create", "reason": "\u5f62\u8fd1", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}, {"word": "separate", "reason": "\u5f62\u8fd1", "zh": "\u5206\u5f00\uff1b\u5206\u79bb\u7684"}],
    phrases: [{ phrase: "climate change", meaning: "气候变化" }, { phrase: "tropical climate", meaning: "热带气候" }]
  },
  {
    id: "emergency",
    word: "emergency",
    syllables: ["emergency"],
    partOfSpeech: "n.",
    definitions: [{ en: "a sudden, serious event when people need help immediately", zh: "\u7d27\u6025\u60c5\u51b5" }],
    examples: [{ sentence: "People drive at maximum speed to get help during an emergency." }],
    inflections: {
      plural: "emergencies"
    },
    phrases: [{ phrase: "emergency room", meaning: "急诊室" }, { phrase: "in an emergency", meaning: "在紧急情况下" }]
  },
  {
    id: "factory",
    word: "factory",
    syllables: ["factory"],
    partOfSpeech: "n.",
    definitions: [{ en: "a building that produces goods", zh: "\u5de5\u5382" }],
    examples: [{ sentence: "This factory is the root of the air problem in the area." }],
    inflections: {
      plural: "factories"
    },
    similarWords: [{"word": "history", "reason": "\u5f62\u8fd1", "zh": "\u5386\u53f2\uff1b\u7ecf\u5386"}, {"word": "memory", "reason": "\u5f62\u8fd1", "zh": "\u8bb0\u5fc6\uff1b\u56de\u5fc6"}],
    phrases: [{ phrase: "factory worker", meaning: "工厂工人" }, { phrase: "car factory", meaning: "汽车工厂" }],
    rootAffix: { explanation: "fact做 + -ory地方 = 工厂" }
  },
  {
    id: "freeze",
    word: "freeze",
    syllables: ["freeze"],
    partOfSpeech: "v.",
    definitions: [{ en: "to turn into ice", zh: "\u51bb\u7ed3\uff1b\u7ed3\u51b0" }],
    examples: [{ sentence: "It was so cold that the lake froze all the way to the bottom." }],
    inflections: {
      pastTense: "froze",
      pastParticiple: "frozen",
      thirdPerson: "freezes",
      presentParticiple: "freezing"
    },
    phrases: [{ phrase: "freeze to death", meaning: "冻死" }, { phrase: "freeze up", meaning: "冻结" }],
    similarWords: [{"word": "freezer", "reason": "\u62d3\u5c55", "zh": "冰箱"}, {"word": "frozen", "reason": "\u62d3\u5c55", "zh": "冰冻的"}]
  },
  {
    id: "population",
    word: "population",
    syllables: ["population"],
    partOfSpeech: "n.",
    definitions: [{ en: "the total number of people or animals living in a place", zh: "\u4eba\u53e3\uff1b\u79cd\u7fa4" }],
    examples: [{ sentence: "The population of penguins has dropped rather than increased." }],
    inflections: {
      plural: "populations"
    },
    similarWords: [{"word": "tradition", "reason": "\u5f62\u8fd1", "zh": "\u4f20\u7edf\uff1b\u60ef\u4f8b"}],
    phrases: [{ phrase: "population of", meaning: "...的人口" }, { phrase: "large population", meaning: "人口众多" }],
    rootAffix: { explanation: "popul人民 + -ation = 人口" }
  },
  {
    id: "recently",
    word: "recently",
    syllables: ["recently"],
    partOfSpeech: "adv.",
    definitions: [{ en: "not long ago", zh: "\u6700\u8fd1\uff1b\u8fd1\u6765" }],
    examples: [{ sentence: "We recently put these plants in pots for our class project." }],
    phrases: [{ phrase: "recently moved", meaning: "最近搬" }, { phrase: "until recently", meaning: "直到最近" }],
    rootAffix: { explanation: "recent近来的 + -ly = 最近" },
    similarWords: [{"word": "recent", "reason": "\u62d3\u5c55", "zh": "最近的"}]
  },
  {
    id: "responsible",
    word: "responsible",
    syllables: ["responsible"],
    partOfSpeech: "adj.",
    definitions: [{ en: "able to act correctly and make good decisions", zh: "\u8d1f\u8d23\u7684\uff1b\u6709\u8d23\u4efb\u7684" }],
    examples: [{ sentence: "We let Alan borrow our tools because he is a responsible person." }],
    inflections: {
      comparative: "more responsible",
      superlative: "most responsible"
    },
    similarWords: [{"word": "incredible", "reason": "\u5f62\u8fd1", "zh": "\u96be\u4ee5\u7f6e\u4fe1\u7684"}, {"word": "comfortable", "reason": "\u5f62\u8fd1", "zh": "\u8212\u9002\u7684\uff1b\u5b89\u9038\u7684"}],
    phrases: [{ phrase: "responsible for", meaning: "对...负责" }, { phrase: "feel responsible", meaning: "感到负责" }]
  },
  {
    id: "storm",
    word: "storm",
    syllables: ["storm"],
    partOfSpeech: "n.",
    definitions: [{ en: "a bad weather event with a lot of rain, wind, or snow", zh: "\u66b4\u98ce\u96e8\uff1b\u98ce\u66b4" }],
    examples: [{ sentence: "The two men hurried to go inside during the storm." }],
    inflections: {
      plural: "storms"
    },
    similarWords: [{"word": "form", "reason": "\u5f62\u8fd1", "zh": "\u5f62\u5f0f\uff1b\u8868\u683c\uff1b\u5f62\u6210"}, {"word": "inform", "reason": "\u5f62\u8fd1", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}, {"word": "story", "reason": "\u5f62\u8fd1", "zh": "\u6545\u4e8b\uff0c\u4f20\u8bf4"}],
    phrases: [{ phrase: "storm cloud", meaning: "风暴云" }, { phrase: "brain storm", meaning: "头脑风暴" }]
  },
  {
    id: "stream",
    word: "stream",
    syllables: ["stream"],
    partOfSpeech: "n.",
    definitions: [{ en: "a very small river", zh: "\u6eaa\u6d41\uff1b\u6d41\u5a92\u4f53" }],
    examples: [{ sentence: "The man ran through the cool water of the stream." }],
    inflections: {
      plural: "streams"
    },
    similarWords: [{"word": "dream", "reason": "\u5f62\u8fd1", "zh": "\u68a6\u60f3"}],
    phrases: [{ phrase: "stream of", meaning: "一股" }, { phrase: "live stream", meaning: "直播" }]
  },
  {
    id: "temperature",
    word: "temperature",
    syllables: ["tem", "per", "a", "ture"],
    partOfSpeech: "n.",
    definitions: [{ en: "how hot or cold a person or thing is", zh: "\u6e29\u5ea6\uff1b\u6c14\u6e29" }],
    examples: [{ sentence: "When Cassie is sick, her temperature rises." }],
    inflections: {
      plural: "temperatures"
    },
    rootAffix: { explanation: "temper\u6e29\u5ea6 + -ature = \u6e29\u5ea6" },
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1atemper\u6e29\u5ea6 + -ature = \u6e29\u5ea6",
    phrases: [{ phrase: "temperature of", meaning: "...的温度" }, { phrase: "body temperature", meaning: "体温" }]
  },
]

export const defaultBook = {
  id: "book-1000",
  name: "1000基础词",
  description: "来自1000词.xlsx，共960个基础单词",
  wordIds: defaultWords.map(w => w.id),
  createdAt: Date.now(),
}





