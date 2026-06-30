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
    synonyms: [{"word": "humorous", "zh": ""}, {"word": "amusing", "zh": ""}, {"word": "silly", "zh": ""}],
    similarWords: [{"word": "sunny", "reason": "\u5f62\u8fd1", "zh": "\u6674\u6717\u7684"}, {"word": "penny", "reason": "\u5f62\u8fd1", "zh": "\u4fbf\u58eb\uff1b\u4e00\u5206\u94b1"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afun \u00b7 ny",
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
    synonyms: [{"word": "powerful", "zh": ""}, {"word": "mighty", "zh": ""}],
    similarWords: [{"word": "wrong", "reason": "\u5f62\u8fd1", "zh": "\u9519\u8bef\u7684\uff0c\u4e0d\u5bf9\u7684"}, {"word": "string", "reason": "\u5f62\u8fd1", "zh": "\u7ebf\uff1b\u7ef3\u5b50\uff1b\u5f26"}],
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
    synonyms: [{"word": "youthful", "zh": ""}, {"word": "junior", "zh": ""}],
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
    similarWords: [{"word": "buy", "reason": "\u5f62\u8fd1", "zh": "\u4e70\uff0c\u8d2d\u4e70"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}, {"word": "joy", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u4e50\uff1b\u559c\u60a6"}],
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
    similarWords: [{"word": "wild", "reason": "\u5f62\u8fd1", "zh": "\u91ce\u751f\u7684\uff1b\u72c2\u91ce\u7684"}, {"word": "build", "reason": "\u5f62\u8fd1", "zh": "\u5efa\u9020"}],
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
  },
  {
    id: "today",
    word: "today",
    syllables: ["to", "day"],
    partOfSpeech: "adv.",
    definitions: [{ en: "on this day", zh: "\u4eca\u5929\uff0c\u4eca\u65e5" }],
    examples: [{ sentence: "What day is it today?" }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ato \u00b7 day",
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
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aa \u00b7 ni \u00b7 mal",
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
    synonyms: [{"word": "capture", "zh": ""}, {"word": "seize", "zh": ""}, {"word": "grasp", "zh": ""}],
    similarWords: [{"word": "watch", "reason": "\u5f62\u8fd1", "zh": "\u770b\uff0c\u89c2\u770b"}, {"word": "match", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u5339\u914d\uff1b\u706b\u67f4"}],
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
    synonyms: [{"word": "tidy", "zh": ""}, {"word": "neat", "zh": ""}, {"word": "spotless", "zh": ""}],
    similarWords: [{"word": "mean", "reason": "\u5f62\u8fd1", "zh": "\u610f\u601d\u662f"}, {"word": "clear", "reason": "\u5f62\u8fd1", "zh": "\u6e05\u695a\u7684"}],
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
    synonyms: [{"word": "consume", "zh": ""}, {"word": "devour", "zh": ""}, {"word": "feast", "zh": ""}],
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
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afa \u00b7 mi \u00b7 ly",
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
    synonyms: [{"word": "nice", "zh": "\u597d\u7684\uff0c\u53cb\u597d\u7684"}, {"word": "caring", "zh": ""}, {"word": "gentle", "zh": "\u6e29\u67d4\u7684\uff1b\u6e29\u548c\u7684"}],
    similarWords: [{"word": "blind", "reason": "\u5f62\u8fd1", "zh": "\u76f2\u7684\uff1b\u778e\u7684"}, {"word": "find", "reason": "\u5f62\u8fd1", "zh": "\u627e\u5230\uff0c\u53d1\u73b0"}, {"word": "mind", "reason": "\u5f62\u8fd1", "zh": "\u5934\u8111\uff1b\u4ecb\u610f"}],
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
    ],
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
    synonyms: [{"word": "create", "zh": "\u521b\u9020\uff1b\u521b\u5efa"}, {"word": "build", "zh": "\u5efa\u9020"}, {"word": "construct", "zh": ""}],
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
    synonyms: [{"word": "little", "zh": "\u5c0f\u7684\uff0c\u5c11\u91cf\u7684"}, {"word": "tiny", "zh": "\u6781\u5c0f\u7684"}, {"word": "mini", "zh": ""}],
    similarWords: [{"word": "call", "reason": "\u5f62\u8fd1", "zh": "\u53eb\uff0c\u547c\u53eb\uff0c\u6253\u7535\u8bdd"}, {"word": "fall", "reason": "\u5f62\u8fd1", "zh": "\u843d\u4e0b\uff0c\u8dcc\u5012\uff0c\u79cb\u5929"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}],
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
    synonyms: [{"word": "terrible", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u7cdf\u7684"}, {"word": "awful", "zh": "\u53ef\u6015\u7684\uff1b\u6781\u574f\u7684"}, {"word": "horrible", "zh": ""}],
    similarWords: [{"word": "sad", "reason": "\u5f62\u8fd1", "zh": "\u4f24\u5fc3\u7684\uff0c\u96be\u8fc7\u7684"}, {"word": "bag", "reason": "\u5f62\u8fd1", "zh": "\u5305"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
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
    similarWords: [{"word": "send", "reason": "\u5f62\u8fd1", "zh": "\u53d1\u9001\uff0c\u5bc4\u51fa"}],
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
    synonyms: [{"word": "discover", "zh": "\u53d1\u73b0\uff1b\u53d1\u89c9"}, {"word": "locate", "zh": ""}, {"word": "uncover", "zh": ""}],
    similarWords: [{"word": "blind", "reason": "\u5f62\u8fd1", "zh": "\u76f2\u7684\uff1b\u778e\u7684"}, {"word": "kind", "reason": "\u5f62\u8fd1", "zh": "\u79cd\u7c7b\uff0c\u5584\u826f\u7684"}, {"word": "mind", "reason": "\u5f62\u8fd1", "zh": "\u5934\u8111\uff1b\u4ecb\u610f"}],
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
    synonyms: [{"word": "study", "zh": "\u5b66\u4e60\uff0c\u7814\u7a76"}, {"word": "master", "zh": "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1"}, {"word": "grasp", "zh": ""}],
    similarWords: [{"word": "warn", "reason": "\u5f62\u8fd1", "zh": "\u8b66\u544a\uff1b\u63d0\u9192"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1alearn\u5b66\u4e60 = \u5b66\u4e60",
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
    synonyms: [{"word": "enjoy", "zh": "\u4eab\u53d7\uff0c\u559c\u6b22"}, {"word": "love", "zh": "\u7231\uff0c\u559c\u6b22"}, {"word": "adore", "zh": ""}],
    similarWords: [{"word": "life", "reason": "\u5f62\u8fd1", "zh": "\u751f\u6d3b\uff0c\u751f\u547d"}, {"word": "lake", "reason": "\u5f62\u8fd1", "zh": "\u6e56"}, {"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}],
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
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amin \u00b7 ute",
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
    synonyms: [{"word": "believe", "zh": "\u76f8\u4fe1\uff1b\u8ba4\u4e3a"}, {"word": "consider", "zh": "\u8003\u8651\uff1b\u8ba4\u4e3a"}, {"word": "ponder", "zh": ""}],
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
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abreak\u6253\u7834 + fast\u7981\u98df = \u6253\u7834\u7981\u98df\u2192\u65e9\u9910",
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
    synonyms: [{"word": "slice", "zh": ""}, {"word": "chop", "zh": ""}, {"word": "sever", "zh": ""}],
    similarWords: [{"word": "put", "reason": "\u5f62\u8fd1", "zh": "\u653e\uff0c\u653e\u7f6e"}],
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
    synonyms: [{"word": "complete", "zh": "\u5b8c\u6210\uff1b\u5b8c\u6574\u7684"}, {"word": "end", "zh": "\u7ed3\u675f\uff0c\u672b\u5c3e"}, {"word": "conclude", "zh": ""}],
    similarWords: [{"word": "foolish", "reason": "\u5f62\u8fd1", "zh": "\u611a\u8822\u7684"}, {"word": "publish", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u7248\uff1b\u53d1\u8868"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1afin \u00b7 ish",
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
  },
  {
    id: "food",
    word: "food",
    syllables: ["food"],
    partOfSpeech: "n.",
    definitions: [{ en: "fruits, vegetables, meats, and other things people eat", zh: "\u98df\u7269" }],
    examples: [{ sentence: "This food is not sweet." }],
    inflections: {
      plural: "foods"
    },
    similarWords: [{"word": "wood", "reason": "\u5f62\u8fd1", "zh": "\u6728\u5934"}, {"word": "flood", "reason": "\u5f62\u8fd1", "zh": "\u6d2a\u6c34\uff1b\u6df9\u6ca1"}, {"word": "blood", "reason": "\u5f62\u8fd1", "zh": "\u8840\uff1b\u8840\u6db2"}],
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
    synonyms: [{"word": "start", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "commence", "zh": ""}, {"word": "initiate", "zh": ""}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1abe-\u4f7f + gin\u5f00\u59cb = \u5f00\u59cb",
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
  },
  {
    id: "meat",
    word: "meat",
    syllables: ["meat"],
    partOfSpeech: "n.",
    definitions: [{ en: "a part of an animal that is eaten", zh: "\u8089" }],
    examples: [{ sentence: "He cuts the meat." }],
    inflections: {
      plural: "meats"
    },
    similarWords: [{"word": "heat", "reason": "\u5f62\u8fd1", "zh": "\u70ed\uff1b\u52a0\u70ed"}, {"word": "great", "reason": "\u5f62\u8fd1", "zh": "\u5f88\u597d\u7684\uff0c\u4f1f\u5927\u7684"}, {"word": "treat", "reason": "\u5f62\u8fd1", "zh": "\u5bf9\u5f85\uff1b\u8bf7\u5ba2\uff1b\u6cbb\u7597"}],
  },
  {
    id: "money",
    word: "money",
    syllables: ["mon", "ey"],
    partOfSpeech: "n.",
    definitions: [{ en: "coins or bills used to buy things", zh: "\u94b1" }],
    examples: [{ sentence: "It is true. He has a lot of money!" }],
    inflections: {
      plural: "moneys"
    },
    similarWords: [{"word": "monkey", "reason": "\u5f62\u8fd1", "zh": "\u7334\u5b50"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amon \u00b7 ey",
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
    synonyms: [{"word": "cool", "zh": "\u51c9\u723d\u7684\uff1b\u9177\u7684"}, {"word": "freezing", "zh": ""}, {"word": "icy", "zh": ""}],
    similarWords: [{"word": "hold", "reason": "\u5f62\u8fd1", "zh": "\u62ff\u7740"}, {"word": "fold", "reason": "\u5f62\u8fd1", "zh": "\u6298\u53e0\uff1b\u6298\u75d5"}, {"word": "old", "reason": "\u5f62\u8fd1", "zh": "\u8001\u7684"}],
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
  },
  {
    id: "sugar",
    word: "sugar",
    syllables: ["su", "gar"],
    partOfSpeech: "n.",
    definitions: [{ en: "something added to food to make it sweet", zh: "\u7cd6" }],
    examples: [{ sentence: "I do not put sugar on fruit." }],
    inflections: {
      plural: "sugars"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asu \u00b7 gar",
  },
  {
    id: "tea",
    word: "tea",
    syllables: ["tea"],
    partOfSpeech: "n.",
    definitions: [{ en: "a drink made with hot water and leaves", zh: "\u8336" }],
    examples: [{ sentence: "I like to drink tea." }],
    inflections: {
      plural: "teas"
    },
    similarWords: [{"word": "sea", "reason": "\u5f62\u8fd1", "zh": "\u6d77"}, {"word": "tear", "reason": "\u5f62\u8fd1", "zh": "\u773c\u6cea\uff1b\u6495\u7834"}],
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
    synonyms: [{"word": "difficult", "zh": "\u56f0\u96be\u7684"}, {"word": "tough", "zh": "\u575a\u97e7\u7684\uff1b\u8270\u96be\u7684"}, {"word": "challenging", "zh": ""}],
    similarWords: [{"word": "guard", "reason": "\u5f62\u8fd1", "zh": "\u5b88\u536b\uff1b\u8b66\u536b"}, {"word": "board", "reason": "\u5f62\u8fd1", "zh": "\u677f\uff1b\u8463\u4e8b\u4f1a\uff1b\u4e0a\uff08\u8f66\u8239\uff09"}],
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
    synonyms: [{"word": "tardy", "zh": ""}, {"word": "overdue", "zh": ""}, {"word": "delayed", "zh": ""}],
    similarWords: [{"word": "plate", "reason": "\u5f62\u8fd1", "zh": "\u76d8\u5b50"}, {"word": "date", "reason": "\u5f62\u8fd1", "zh": "\u65e5\u671f"}, {"word": "hate", "reason": "\u5f62\u8fd1", "zh": "\u6068\uff0c\u8ba8\u538c"}],
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
    synonyms: [{"word": "see", "zh": "\u770b\u89c1\uff0c\u770b\u5230"}, {"word": "view", "zh": "\u89c6\u56fe\uff1b\u770b\u6cd5\uff1b\u89c2\u770b"}, {"word": "observe", "zh": ""}, {"word": "watch", "zh": "\u770b\uff0c\u89c2\u770b"}],
    similarWords: [{"word": "cook", "reason": "\u5f62\u8fd1", "zh": "\u505a\u996d\uff0c\u70f9\u996a\uff0c\u53a8\u5e08"}, {"word": "book", "reason": "\u5f62\u8fd1", "zh": "\u4e66"}],
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
  },
  {
    id: "water",
    word: "water",
    syllables: ["wa", "ter"],
    partOfSpeech: "n.",
    definitions: [{ en: "the thing people drink and need to live", zh: "\u6c34" }],
    examples: [{ sentence: "I need to drink more water." }],
    inflections: {
      plural: "waters"
    },
    similarWords: [{"word": "letter", "reason": "\u5f62\u8fd1", "zh": "\u4fe1\uff0c\u5b57\u6bcd"}, {"word": "matter", "reason": "\u5f62\u8fd1", "zh": "\u4e8b\u60c5"}, {"word": "master", "reason": "\u5f62\u8fd1", "zh": "\u4e3b\u4eba\uff1b\u5927\u5e08\uff1b\u638c\u63e1"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1awa \u00b7 ter",
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
    synonyms: [{"word": "feeble", "zh": ""}, {"word": "frail", "zh": ""}],
    similarWords: [{"word": "speak", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8bb2"}, {"word": "break", "reason": "\u5f62\u8fd1", "zh": "\u6253\u7834\uff0c\u5f04\u788e"}, {"word": "wear", "reason": "\u5f62\u8fd1", "zh": "\u7a7f\uff0c\u7a7f\u7740"}],
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
    synonyms: [{"word": "donate", "zh": ""}, {"word": "offer", "zh": "\u63d0\u4f9b\uff1b\u51fa\u4ef7"}, {"word": "provide", "zh": "\u63d0\u4f9b\uff1b\u4f9b\u5e94"}],
    similarWords: [{"word": "live", "reason": "\u5f62\u8fd1", "zh": "\u4f4f"}, {"word": "drive", "reason": "\u5f62\u8fd1", "zh": "\u9a7e\u9a76\uff0c\u5f00\u8f66"}],
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
    synonyms: [{"word": "assist", "zh": ""}, {"word": "aid", "zh": ""}, {"word": "support", "zh": "\u652f\u6301\uff1b\u652f\u6491"}],
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
  },
  {
    id: "work",
    word: "work",
    syllables: ["work"],
    partOfSpeech: "n.",
    definitions: [{ en: "a job", zh: "\u5de5\u4f5c" }],
    examples: [{ sentence: "He is late for work." }],
    inflections: {
      plural: "works"
    },
    rootAffix: { explanation: "work\u5de5\u4f5c = \u5de5\u4f5c" },
    similarWords: [{"word": "word", "reason": "\u5f62\u8fd1", "zh": "\u5355\u8bcd\uff0c\u8bcd\u8bed"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1awork\u5de5\u4f5c = \u5de5\u4f5c",
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
    synonyms: [{"word": "simple", "zh": "\u7b80\u5355\u7684\uff1b\u6734\u7d20\u7684"}, {"word": "effortless", "zh": ""}],
    similarWords: [{"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1aeas \u00b7 y",
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
  },
  {
    id: "music",
    word: "music",
    syllables: ["mu", "sic"],
    partOfSpeech: "n.",
    definitions: [{ en: "sounds made by instruments or voices", zh: "\u97f3\u4e50" }],
    examples: [{ sentence: "He learns to play music." }],
    inflections: {
      plural: "musics"
    },
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1amu \u00b7 sic",
  },
  {
    id: "oclock",
    word: "o'clock",
    syllables: ["o'clock"],
    partOfSpeech: "adv.",
    definitions: [{ en: "being on the hour", zh: "\u2026\u70b9\u949f" }],
    examples: [{ sentence: "It is five o'clock." }],
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
    synonyms: [{"word": "halt", "zh": ""}, {"word": "cease", "zh": ""}, {"word": "pause", "zh": ""}],
    similarWords: [{"word": "top", "reason": "\u5f62\u8fd1", "zh": "\u9876\u90e8"}, {"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "step", "reason": "\u5f62\u8fd1", "zh": "\u6b65\u9aa4\uff1b\u811a\u6b65\uff1b\u8e29"}],
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
    synonyms: [{"word": "beautiful", "zh": "\u7f8e\u4e3d\u7684"}, {"word": "lovely", "zh": ""}, {"word": "cute", "zh": ""}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1apret \u00b7 ty",
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
    synonyms: [{"word": "unhappy", "zh": ""}, {"word": "sorrowful", "zh": ""}, {"word": "gloomy", "zh": ""}],
    similarWords: [{"word": "bad", "reason": "\u5f62\u8fd1", "zh": "\u574f\u7684\uff0c\u4e0d\u597d\u7684"}, {"word": "say", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\uff0c\u8bb2"}, {"word": "mad", "reason": "\u5f62\u8fd1", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}],
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
    synonyms: [{"word": "attempt", "zh": ""}, {"word": "endeavor", "zh": ""}, {"word": "strive", "zh": ""}],
    similarWords: [{"word": "cry", "reason": "\u5f62\u8fd1", "zh": "\u54ed\uff0c\u54ed\u6ce3"}, {"word": "dry", "reason": "\u5f62\u8fd1", "zh": "\u5e72\u7684\uff1b\u4f7f\u5e72\u71e5"}, {"word": "toy", "reason": "\u5f62\u8fd1", "zh": "\u73a9\u5177"}],
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
  },
  {
    id: "high",
    word: "high",
    syllables: ["high"],
    partOfSpeech: "adv.",
    definitions: [{ en: "for above the ground", zh: "\u9ad8\u7684\uff0c\u9ad8\u7684" }],
    examples: [{ sentence: "The pretty balloons are high in the sky." }],
    similarWords: [{"word": "weigh", "reason": "\u5f62\u8fd1", "zh": "\u79f0\u91cd"}],
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
    synonyms: [{"word": "retain", "zh": ""}, {"word": "maintain", "zh": ""}, {"word": "hold", "zh": "\u62ff\u7740"}],
    similarWords: [{"word": "deep", "reason": "\u5f62\u8fd1", "zh": "\u6df1\u7684"}, {"word": "sleep", "reason": "\u5f62\u8fd1", "zh": "\u7761\u89c9\uff0c\u7761\u7720"}],
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
    synonyms: [{"word": "understand", "zh": "\u7406\u89e3\uff0c\u660e\u767d"}, {"word": "comprehend", "zh": ""}],
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
    synonyms: [{"word": "shift", "zh": ""}, {"word": "transfer", "zh": ""}, {"word": "relocate", "zh": ""}],
    similarWords: [{"word": "love", "reason": "\u5f62\u8fd1", "zh": "\u7231\uff0c\u559c\u6b22"}, {"word": "glove", "reason": "\u5f62\u8fd1", "zh": "\u624b\u5957"}],
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
    synonyms: [{"word": "jog", "zh": ""}, {"word": "sprint", "zh": ""}, {"word": "dash", "zh": ""}],
    similarWords: [{"word": "rub", "reason": "\u5f62\u8fd1", "zh": "\u6469\u64e6\uff1b\u64e6"}],
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
    synonyms: [{"word": "alter", "zh": ""}, {"word": "modify", "zh": ""}, {"word": "transform", "zh": ""}],
    similarWords: [{"word": "strange", "reason": "\u5f62\u8fd1", "zh": "\u5947\u602a\u7684\uff1b\u964c\u751f\u7684"}, {"word": "chance", "reason": "\u5f62\u8fd1", "zh": "\u673a\u4f1a\uff1b\u53ef\u80fd\u6027"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1achang\u6539\u53d8 = \u6539\u53d8",
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
    synonyms: [{"word": "quick", "zh": "\u5feb\u7684\uff0c\u8fc5\u901f\u7684"}, {"word": "rapid", "zh": ""}, {"word": "swift", "zh": ""}],
    similarWords: [{"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "east", "reason": "\u5f62\u8fd1", "zh": "\u4e1c\u65b9\uff0c\u4e1c\u9762"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
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
    synonyms: [{"word": "warm", "zh": "\u6e29\u6696\u7684\uff1b\u4f7f\u6e29\u6696"}, {"word": "burning", "zh": ""}, {"word": "scorching", "zh": ""}],
    similarWords: [{"word": "hit", "reason": "\u5f62\u8fd1", "zh": "\u6253"}, {"word": "hat", "reason": "\u5f62\u8fd1", "zh": "\u5e3d\u5b50"}, {"word": "pot", "reason": "\u5f62\u8fd1", "zh": "\u9505\uff1b\u58f6\uff1b\u7f50"}],
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
    similarWords: [{"word": "hill", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5c71"}, {"word": "kill", "reason": "\u5f62\u8fd1", "zh": "\u6740\uff1b\u6740\u6b7b"}, {"word": "fill", "reason": "\u5f62\u8fd1", "zh": "\u586b\u6ee1"}],
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
  },
  {
    id: "milk",
    word: "milk",
    syllables: ["milk"],
    partOfSpeech: "n.",
    definitions: [{ en: "a white drink that comes from animals", zh: "\u725b\u5976" }],
    examples: [{ sentence: "I like to drink milk." }],
    inflections: {
      plural: "milks"
    },
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
  },
  {
    id: "east",
    word: "east",
    syllables: ["east"],
    partOfSpeech: "adv.",
    definitions: [{ en: "the direction from which the sun rises", zh: "\u4e1c\u65b9\uff0c\u4e1c\u9762" }],
    examples: [{ sentence: "We need to go east." }],
    similarWords: [{"word": "last", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\u7684"}, {"word": "fast", "reason": "\u5f62\u8fd1", "zh": "\u5feb\u7684\uff1b\u8fc5\u901f\u5730"}, {"word": "past", "reason": "\u5f62\u8fd1", "zh": "\u8fc7\u53bb"}],
  },
  {
    id: "far",
    word: "far",
    syllables: ["far"],
    partOfSpeech: "adv.",
    definitions: [{ en: "not close", zh: "\u8fdc\u7684\uff0c\u9065\u8fdc" }],
    examples: [{ sentence: "He goes far to get to work." }],
    synonyms: [{"word": "distant", "zh": ""}, {"word": "remote", "zh": ""}, {"word": "faraway", "zh": ""}],
    similarWords: [{"word": "fat", "reason": "\u5f62\u8fd1", "zh": "\u80d6\u7684"}, {"word": "fan", "reason": "\u5f62\u8fd1", "zh": "\u7c89\u4e1d"}, {"word": "car", "reason": "\u5f62\u8fd1", "zh": "\u6c7d\u8f66"}],
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
    synonyms: [{"word": "unlock", "zh": ""}, {"word": "unseal", "zh": ""}, {"word": "unfold", "zh": ""}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ao \u00b7 pen",
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
  },
  {
    id: "air",
    word: "air",
    syllables: ["air"],
    partOfSpeech: "n.",
    definitions: [{ en: "the gases around the earth that people breathe", zh: "\u7a7a\u6c14" }],
    examples: [{ sentence: "The air is not clean. It makes people ill." }],
    inflections: {
      plural: "airs"
    },
    similarWords: [{"word": "pair", "reason": "\u5f62\u8fd1", "zh": "\u53cc"}, {"word": "fair", "reason": "\u5f62\u8fd1", "zh": "\u516c\u5e73\u7684\uff1b\u5c55\u89c8\u4f1a"}],
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
  },
  {
    id: "half",
    word: "half",
    syllables: ["half"],
    partOfSpeech: "adv.",
    definitions: [{ en: "by 50 percent", zh: "\u4e00\u534a" }],
    examples: [{ sentence: "The glass is half full." }],
    similarWords: [{"word": "hall", "reason": "\u5f62\u8fd1", "zh": "\u5927\u5385\uff1b\u8d70\u5eca"}],
  },
  {
    id: "left",
    word: "left",
    syllables: ["left"],
    partOfSpeech: "adv.",
    definitions: [{ en: "on or to the side opposite of right", zh: "\u5de6\u8fb9\u7684" }],
    examples: [{ sentence: "Turn left on this road." }],
    similarWords: [{"word": "lift", "reason": "\u5f62\u8fd1", "zh": "\u4e3e\u8d77\uff1b\u7535\u68af"}, {"word": "let", "reason": "\u5f62\u8fd1", "zh": "\u8ba9\uff0c\u5141\u8bb8"}],
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
    synonyms: [{"word": "fresh", "zh": "\u65b0\u9c9c\u7684"}, {"word": "brand-new", "zh": ""}],
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
    synonyms: [{"word": "display", "zh": ""}, {"word": "exhibit", "zh": "\u5c55\u89c8\uff1b\u5c55\u51fa"}, {"word": "demonstrate", "zh": ""}],
    similarWords: [{"word": "shoe", "reason": "\u5f62\u8fd1", "zh": "\u978b\uff0c\u978b\u5b50"}, {"word": "shop", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}, {"word": "slow", "reason": "\u5f62\u8fd1", "zh": "\u6162\u7684"}],
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
    synonyms: [{"word": "speak", "zh": "\u8bf4\u8bdd\uff0c\u8bb2"}, {"word": "chat", "zh": ""}, {"word": "converse", "zh": ""}],
    similarWords: [{"word": "walk", "reason": "\u5f62\u8fd1", "zh": "\u8d70\uff0c\u6b65\u884c"}, {"word": "tall", "reason": "\u5f62\u8fd1", "zh": "\u9ad8\u7684"}, {"word": "task", "reason": "\u5f62\u8fd1", "zh": "\u4efb\u52a1\uff1b\u5de5\u4f5c"}],
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
    synonyms: [{"word": "stroll", "zh": ""}, {"word": "march", "zh": "\u4e09\u6708\uff1b\u884c\u519b\uff1b\u524d\u8fdb"}, {"word": "stride", "zh": ""}],
    similarWords: [{"word": "talk", "reason": "\u5f62\u8fd1", "zh": "\u8bf4\u8bdd\uff0c\u8c08\u8bdd"}, {"word": "wall", "reason": "\u5f62\u8fd1", "zh": "\u5899"}],
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
    synonyms: [{"word": "instruct", "zh": ""}, {"word": "educate", "zh": ""}, {"word": "train", "zh": "\u706b\u8f66"}],
    similarWords: [{"word": "reach", "reason": "\u5f62\u8fd1", "zh": "\u5230\u8fbe\uff1b\u4f38\u624b"}, {"word": "beach", "reason": "\u5f62\u8fd1", "zh": "\u6d77\u6ee9"}],
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
    synonyms: [{"word": "mad", "zh": "\u75af\u72c2\u7684\uff1b\u751f\u6c14\u7684"}, {"word": "furious", "zh": ""}],
    similarWords: [{"word": "hungry", "reason": "\u5f62\u8fd1", "zh": "\u997f\u7684"}],
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
  },
  {
    id: "really",
    word: "really",
    syllables: ["really"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very", zh: "\u771f\u7684" }],
    examples: [{ sentence: "This TV show is really good." }],
    similarWords: [{"word": "finally", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\uff1b\u7ec8\u4e8e"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}, {"word": "real", "reason": "\u62d3\u5c55", "zh": "\u771f\u5b9e\u7684\uff1b\u771f\u6b63\u7684"}],
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
  },
  {
    id: "weather",
    word: "weather",
    syllables: ["weather"],
    partOfSpeech: "n.",
    definitions: [{ en: "what the air is like at a certain time and place", zh: "\u5929\u6c14" }],
    examples: [{ sentence: "We did not have our baseball game because of bad weather." }],
    inflections: {
      plural: "weathers"
    },
    similarWords: [{"word": "together", "reason": "\u5f62\u8fd1", "zh": "\u4e00\u8d77\uff0c\u5171\u540c"}, {"word": "gather", "reason": "\u5f62\u8fd1", "zh": "\u805a\u96c6\uff1b\u6536\u96c6"}, {"word": "rather", "reason": "\u5f62\u8fd1", "zh": "\u76f8\u5f53\uff1b\u5b81\u613f"}],
  },
  {
    id: "art",
    word: "art",
    syllables: ["art"],
    partOfSpeech: "n.",
    definitions: [{ en: "paintings, drawings, or sculptures", zh: "\u827a\u672f" }],
    examples: [{ sentence: "One of my hobbies is making art for my parents." }],
    inflections: {
      plural: "arts"
    },
    similarWords: [{"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "act", "reason": "\u5f62\u8fd1", "zh": "\u884c\u52a8\uff0c\u884c\u4e3a"}],
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
    synonyms: [{"word": "construct", "zh": ""}, {"word": "erect", "zh": ""}, {"word": "assemble", "zh": ""}],
    similarWords: [{"word": "child", "reason": "\u5f62\u8fd1", "zh": "\u5c0f\u5b69\uff0c\u513f\u7ae5"}, {"word": "wild", "reason": "\u5f62\u8fd1", "zh": "\u91ce\u751f\u7684\uff1b\u72c2\u91ce\u7684"}],
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
    synonyms: [{"word": "silent", "zh": ""}, {"word": "calm", "zh": ""}, {"word": "peaceful", "zh": ""}],
    similarWords: [{"word": "diet", "reason": "\u5f62\u8fd1", "zh": "\u996e\u98df\uff1b\u8282\u98df"}],
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
  },
  {
    id: "noise",
    word: "noise",
    syllables: ["noise"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you can hear, usually loud or unpleasant", zh: "\u566a\u97f3" }],
    examples: [{ sentence: "The angry man made a lot of noise." }],
    inflections: {
      plural: "noises"
    },
    similarWords: [{"word": "raise", "reason": "\u5f62\u8fd1", "zh": "\u63d0\u9ad8\uff1b\u629a\u517b\uff1b\u4e3e\u8d77"}, {"word": "rise", "reason": "\u5f62\u8fd1", "zh": "\u4e0a\u5347\uff1b\u5347\u8d77"}, {"word": "wise", "reason": "\u5f62\u8fd1", "zh": "\u806a\u660e\u7684\uff1b\u660e\u667a\u7684"}],
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
    synonyms: [{"word": "shut", "zh": ""}, {"word": "seal", "zh": ""}, {"word": "lock", "zh": ""}],
    similarWords: [{"word": "lose", "reason": "\u5f62\u8fd1", "zh": "\u4e22\u5931"}, {"word": "choose", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9"}],
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
  },
  {
    id: "health",
    word: "health",
    syllables: ["health"],
    partOfSpeech: "n.",
    definitions: [{ en: "the good condition of the body", zh: "\u5065\u5eb7" }],
    examples: [{ sentence: "For your health, use soap to clean your body." }],
    inflections: {
      plural: "healths"
    },
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
    synonyms: [{"word": "messy", "zh": ""}, {"word": "filthy", "zh": ""}],
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
  },
  {
    id: "ago",
    word: "ago",
    syllables: ["ago"],
    partOfSpeech: "adv.",
    definitions: [{ en: "before now", zh: "\u4ee5\u524d" }],
    examples: [{ sentence: "This is an example of a painting from long ago." }],
    similarWords: [{"word": "age", "reason": "\u5f62\u8fd1", "zh": "\u5e74\u9f84"}],
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
  },
  {
    id: "west",
    word: "west",
    syllables: ["west"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction where the sun sets", zh: "\u897f" }],
    examples: [{ sentence: "Lisa will be traveling west during her vacation." }],
    similarWords: [{"word": "test", "reason": "\u5f62\u8fd1", "zh": "\u6d4b\u8bd5"}, {"word": "best", "reason": "\u5f62\u8fd1", "zh": "\u6700\u597d\u7684"}, {"word": "rest", "reason": "\u5f62\u8fd1", "zh": "\u4f11\u606f\uff0c\u5269\u4f59"}],
  },
  {
    id: "beef",
    word: "beef",
    syllables: ["beef"],
    partOfSpeech: "n.",
    definitions: [{ en: "meat from a cow", zh: "\u725b\u8089" }],
    examples: [{ sentence: "Eating too much beef might make you fat." }],
    inflections: {
      plural: "beefs"
    },
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
  },
  {
    id: "bread",
    word: "bread",
    syllables: ["bread"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of baked food", zh: "\u9762\u5305" }],
    examples: [{ sentence: "You can eat some bread if you are hungry." }],
    inflections: {
      plural: "breads"
    },
    similarWords: [{"word": "spread", "reason": "\u5f62\u8fd1", "zh": "\u4f20\u64ad\uff1b\u5c55\u5f00"}, {"word": "read", "reason": "\u5f62\u8fd1", "zh": "\u8bfb"}, {"word": "lead", "reason": "\u5f62\u8fd1", "zh": "\u9886\u5bfc\uff1b\u5e26\u9886\uff1b\u94c5"}],
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
  },
  {
    id: "rice",
    word: "rice",
    syllables: ["rice"],
    partOfSpeech: "n.",
    definitions: [{ en: "a type of small white or brown grain", zh: "\u7c73\u996d" }],
    examples: [{ sentence: "I can smell the fresh, cooked rice from the other room." }],
    inflections: {
      plural: "rices"
    },
    similarWords: [{"word": "price", "reason": "\u5f62\u8fd1", "zh": "\u4ef7\u683c\uff1b\u4ef7\u94b1"}, {"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "ice", "reason": "\u5f62\u8fd1", "zh": "\u51b0\uff1b\u51b0\u6dc7\u6dcb"}],
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
    synonyms: [{"word": "inform", "zh": "\u901a\u77e5\uff1b\u544a\u77e5"}, {"word": "narrate", "zh": ""}, {"word": "reveal", "zh": ""}],
    similarWords: [{"word": "smell", "reason": "\u5f62\u8fd1", "zh": "\u95fb"}, {"word": "sell", "reason": "\u5f62\u8fd1", "zh": "\u5356\uff0c\u9500\u552e"}, {"word": "spell", "reason": "\u5f62\u8fd1", "zh": "\u62fc\u5199\uff1b\u5492\u8bed"}],
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
  },
  {
    id: "luck",
    word: "luck",
    syllables: ["luck"],
    partOfSpeech: "n.",
    definitions: [{ en: "good fortune", zh: "\u8fd0\u6c14" }],
    examples: [{ sentence: "Winning a free pair of shoes was good luck." }],
    inflections: {
      plural: "lucks"
    },
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
    synonyms: [{"word": "active", "zh": "\u79ef\u6781\u7684\uff1b\u6d3b\u8dc3\u7684"}, {"word": "occupied", "zh": ""}],
    similarWords: [{"word": "buy", "reason": "\u5f62\u8fd1", "zh": "\u4e70\uff0c\u8d2d\u4e70"}, {"word": "business", "reason": "\u62d3\u5c55", "zh": "\u751f\u610f\uff1b\u5546\u4e1a\uff1b\u4e8b\u52a1"}],
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
    synonyms: [{"word": "tasty", "zh": ""}, {"word": "yummy", "zh": ""}, {"word": "flavorful", "zh": ""}],
    similarWords: [{"word": "dangerous", "reason": "\u5f62\u8fd1", "zh": "\u5371\u9669\u7684"}],
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
    synonyms: [{"word": "ancient", "zh": "\u53e4\u4ee3\u7684\uff1b\u53e4\u8001\u7684"}, {"word": "elderly", "zh": ""}],
    similarWords: [{"word": "hold", "reason": "\u5f62\u8fd1", "zh": "\u62ff\u7740"}, {"word": "fold", "reason": "\u5f62\u8fd1", "zh": "\u6298\u53e0\uff1b\u6298\u75d5"}, {"word": "cold", "reason": "\u5f62\u8fd1", "zh": "\u51b7\u7684\uff0c\u5bd2\u51b7\u7684"}],
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
  },
  {
    id: "north",
    word: "north",
    syllables: ["north"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction pointing toward the top of a map", zh: "\u5317" }],
    examples: [{ sentence: "They will travel north on their trip this week." }],
    similarWords: [{"word": "worth", "reason": "\u5f62\u8fd1", "zh": "\u503c\u5f97\u7684\uff1b\u4ef7\u503c"}, {"word": "earth", "reason": "\u5f62\u8fd1", "zh": "\u5730\u7403"}, {"word": "birth", "reason": "\u5f62\u8fd1", "zh": "\u51fa\u751f"}],
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
  },
  {
    id: "south",
    word: "south",
    syllables: ["south"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in the direction pointing toward the bottom of a map", zh: "\u5357" }],
    examples: [{ sentence: "If you go south of the US, you will be in Mexico." }],
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
    synonyms: [{"word": "clever", "zh": "\u806a\u660e\u7684\uff1b\u673a\u7075\u7684"}, {"word": "intelligent", "zh": ""}, {"word": "bright", "zh": "\u660e\u4eae\u7684"}],
    similarWords: [{"word": "start", "reason": "\u5f62\u8fd1", "zh": "\u5f00\u59cb\uff0c\u51fa\u53d1"}, {"word": "part", "reason": "\u5f62\u8fd1", "zh": "\u90e8\u5206\uff1b\u89d2\u8272"}, {"word": "heart", "reason": "\u5f62\u8fd1", "zh": "\u5fc3\u810f"}],
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
    synonyms: [{"word": "significant", "zh": ""}, {"word": "vital", "zh": ""}, {"word": "crucial", "zh": ""}],
    similarWords: [{"word": "restaurant", "reason": "\u5f62\u8fd1", "zh": "\u9910\u5385"}],
    mnemonics: "\u8bcd\u6839\u8bb0\u5fc6\uff1aim-\u8fdb\u5165 + port\u642c\u8fd0 + -ant = \u9700\u8981\u642c\u8fd0\u8fdb\u6765\u7684\u2192\u91cd\u8981\u7684",
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
  },
  {
    id: "nature",
    word: "nature",
    syllables: ["na", "ture"],
    partOfSpeech: "n.",
    definitions: [{ en: "everything in the world that is not made by humans", zh: "\u81ea\u7136\uff1b\u672c\u6027" }],
    examples: [{ sentence: "She likes to take pictures of nature." }],
    inflections: {
      plural: "natures"
    },
    similarWords: [{"word": "future", "reason": "\u5f62\u8fd1", "zh": "\u672a\u6765"}, {"word": "culture", "reason": "\u5f62\u8fd1", "zh": "\u6587\u5316\uff1b\u6587\u660e"}, {"word": "picture", "reason": "\u5f62\u8fd1", "zh": "\u56fe\u753b"}],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1ana \u00b7 ture",
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
  },
  {
    id: "space",
    word: "space",
    syllables: ["space"],
    partOfSpeech: "n.",
    definitions: [{ en: "an empty area where a person or thing can go", zh: "\u7a7a\u95f4\uff1b\u592a\u7a7a" }],
    examples: [{ sentence: "Their new apartment has a lot of space." }],
    inflections: {
      plural: "spaces"
    },
    similarWords: [{"word": "peace", "reason": "\u5f62\u8fd1", "zh": "\u548c\u5e73\uff1b\u5e73\u9759"}, {"word": "race", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u79cd\u65cf"}],
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
  },
  {
    id: "electricity",
    word: "electricity",
    syllables: ["electricity"],
    partOfSpeech: "n.",
    definitions: [{ en: "something used to give light and make things work", zh: "\u7535\uff1b\u7535\u529b" }],
    examples: [{ sentence: "Humans use a lot of electricity." }],
    inflections: {
      plural: "electricities"
    },
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
  },
  {
    id: "power",
    word: "power",
    syllables: ["power"],
    partOfSpeech: "n.",
    definitions: [{ en: "something you cannot see that is used to make things work", zh: "\u529b\u91cf\uff1b\u7535\u529b" }],
    examples: [{ sentence: "They turned the power off for a special event." }],
    inflections: {
      plural: "powers"
    },
    similarWords: [{"word": "tower", "reason": "\u5f62\u8fd1", "zh": "\u5854\uff1b\u9ad8\u697c"}, {"word": "flower", "reason": "\u5f62\u8fd1", "zh": "\u82b1\uff0c\u82b1\u6735"}, {"word": "answer", "reason": "\u5f62\u8fd1", "zh": "\u56de\u7b54\uff0c\u7b54\u6848"}],
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
  },
  {
    id: "traffic",
    word: "traffic",
    syllables: ["traffic"],
    partOfSpeech: "n.",
    definitions: [{ en: "cars on the road", zh: "\u4ea4\u901a\uff1b\u8f66\u8f86" }],
    examples: [{ sentence: "It is not safe to drive in this area. There is too much traffic." }],
    inflections: {
      plural: "traffics"
    },
  },
  {
    id: "advice",
    word: "advice",
    syllables: ["advice"],
    partOfSpeech: "n.",
    definitions: [{ en: "an opinion about what someone should or should not do", zh: "\u5efa\u8bae\uff1b\u5fe0\u544a" }],
    examples: [{ sentence: "He gives them advice about saving money." }],
    inflections: {
      plural: "advices"
    },
    similarWords: [{"word": "service", "reason": "\u5f62\u8fd1", "zh": "\u670d\u52a1\uff1b\u7ef4\u4fee"}, {"word": "voice", "reason": "\u5f62\u8fd1", "zh": "\u58f0\u97f3"}, {"word": "choice", "reason": "\u5f62\u8fd1", "zh": "\u9009\u62e9\uff1b\u6289\u62e9"}],
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
  },
  {
    id: "sand",
    word: "sand",
    syllables: ["sand"],
    partOfSpeech: "n.",
    definitions: [{ en: "very tiny pieces of rock", zh: "\u6c99\u5b50\uff1b\u6c99\u7c92" }],
    examples: [{ sentence: "Olivia wrote a message in the sand." }],
    inflections: {
      plural: "sands"
    },
    similarWords: [{"word": "land", "reason": "\u5f62\u8fd1", "zh": "\u571f\u5730"}, {"word": "band", "reason": "\u5f62\u8fd1", "zh": "\u4e50\u961f\uff1b\u5e26\u5b50\uff1b\u6ce2\u6bb5"}, {"word": "stand", "reason": "\u5f62\u8fd1", "zh": "\u7ad9\uff0c\u7ad9\u7acb"}],
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
    synonyms: [{"word": "odd", "zh": "\u5947\u602a\u7684\uff1b\u5947\u6570\u7684"}, {"word": "weird", "zh": ""}, {"word": "unusual", "zh": ""}],
    similarWords: [{"word": "exchange", "reason": "\u5f62\u8fd1", "zh": "\u4ea4\u6362\uff1b\u5151\u6362"}, {"word": "change", "reason": "\u5f62\u8fd1", "zh": "\u6539\u53d8\uff1b\u96f6\u94b1"}],
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
  },
  {
    id: "actually",
    word: "actually",
    syllables: ["actually"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in fact", zh: "\u5b9e\u9645\u4e0a\uff1b\u4e8b\u5b9e\u4e0a" }],
    examples: [{ sentence: "Actually, we do not mind waiting for you at the airport." }],
    similarWords: [{"word": "finally", "reason": "\u5f62\u8fd1", "zh": "\u6700\u540e\uff1b\u7ec8\u4e8e"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}],
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
  },
  {
    id: "suddenly",
    word: "suddenly",
    syllables: ["sud", "den", "ly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very quickly", zh: "\u7a81\u7136\uff1b\u5ffd\u7136" }],
    examples: [{ sentence: "Suddenly, a storm blew sand across the road." }],
    mnemonics: "\u5206\u97f3\u8282\u8bb0\u5fc6\uff1asud \u00b7 den \u00b7 ly",
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
  },
  {
    id: "especially",
    word: "especially",
    syllables: ["especially"],
    partOfSpeech: "adv.",
    definitions: [{ en: "in a way that is greater than usual", zh: "\u5c24\u5176\uff1b\u7279\u522b" }],
    examples: [{ sentence: "He is especially smart for his age." }],
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
  },
  {
    id: "finally",
    word: "finally",
    syllables: ["finally"],
    partOfSpeech: "adv.",
    definitions: [{ en: "after a long time", zh: "\u6700\u540e\uff1b\u7ec8\u4e8e" }],
    examples: [{ sentence: "The long meeting finally finished." }],
    similarWords: [{"word": "really", "reason": "\u5f62\u8fd1", "zh": "\u771f\u7684"}, {"word": "usually", "reason": "\u5f62\u8fd1", "zh": "\u901a\u5e38\uff1b\u7ecf\u5e38"}, {"word": "actually", "reason": "\u5f62\u8fd1", "zh": "\u5b9e\u9645\u4e0a\uff1b\u4e8b\u5b9e\u4e0a"}],
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
    synonyms: [{"word": "exhausted", "zh": ""}, {"word": "weary", "zh": ""}],
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
  },
  {
    id: "energy",
    word: "energy",
    syllables: ["energy"],
    partOfSpeech: "n.",
    definitions: [{ en: "power; the ability to be active", zh: "\u80fd\u91cf\uff1b\u7cbe\u529b" }],
    examples: [{ sentence: "The dog has a lot of energy. He plays all day." }],
    inflections: {
      plural: "energies"
    },
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
  },
  {
    id: "stone",
    word: "stone",
    syllables: ["stone"],
    partOfSpeech: "n.",
    definitions: [{ en: "a small rock", zh: "\u77f3\u5934\uff1b\u77f3\u5757" }],
    examples: [{ sentence: "Meg added two new stones to her collection." }],
    inflections: {
      plural: "stones"
    },
    similarWords: [{"word": "phone", "reason": "\u5f62\u8fd1", "zh": "\u7535\u8bdd"}, {"word": "alone", "reason": "\u5f62\u8fd1", "zh": "\u72ec\u81ea\u7684\uff0c\u5355\u72ec\u7684"}, {"word": "store", "reason": "\u5f62\u8fd1", "zh": "\u5546\u5e97"}],
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
    synonyms: [{"word": "courageous", "zh": ""}, {"word": "fearless", "zh": ""}],
    similarWords: [{"word": "leave", "reason": "\u5f62\u8fd1", "zh": "\u79bb\u5f00\uff1b\u51fa\u53d1"}, {"word": "wave", "reason": "\u5f62\u8fd1", "zh": "\u6ce2\u6d6a\uff1b\u6325\u624b"}, {"word": "have", "reason": "\u5f62\u8fd1", "zh": "\u6709\uff0c\u62e5\u6709"}],
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
  },
  {
    id: "ice",
    word: "ice",
    syllables: ["ice"],
    partOfSpeech: "n.",
    definitions: [{ en: "frozen water", zh: "\u51b0\uff1b\u51b0\u6dc7\u6dcb" }],
    examples: [{ sentence: "We put ice in our drinks to cool them." }],
    inflections: {
      plural: "ices"
    },
    similarWords: [{"word": "rice", "reason": "\u5f62\u8fd1", "zh": "\u7c73\u996d"}, {"word": "nice", "reason": "\u5f62\u8fd1", "zh": "\u597d\u7684\uff0c\u53cb\u597d\u7684"}],
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
  },
  {
    id: "quite",
    word: "quite",
    syllables: ["quite"],
    partOfSpeech: "adv.",
    definitions: [{ en: "very", zh: "\u76f8\u5f53\uff1b\u975e\u5e38" }],
    examples: [{ sentence: "The tower is quite tall." }],
    similarWords: [{"word": "invite", "reason": "\u5f62\u8fd1", "zh": "\u9080\u8bf7"}, {"word": "write", "reason": "\u5f62\u8fd1", "zh": "\u5199\uff0c\u5199\u5b57"}, {"word": "polite", "reason": "\u5f62\u8fd1", "zh": "\u793c\u8c8c\u7684"}],
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
  },
  {
    id: "immediately",
    word: "immediately",
    syllables: ["immediately"],
    partOfSpeech: "adv.",
    definitions: [{ en: "right away", zh: "\u7acb\u5373\uff1b\u9a6c\u4e0a" }],
    examples: [{ sentence: "The workers came immediately after the accident." }],
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
  },
  {
    id: "regularly",
    word: "regularly",
    syllables: ["regularly"],
    partOfSpeech: "adv.",
    definitions: [{ en: "often", zh: "\u5b9a\u671f\u5730\uff1b\u7ecf\u5e38" }],
    examples: [{ sentence: "He regularly helps his dad put away the clean towels." }],
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
  },
  {
    id: "rather",
    word: "rather",
    syllables: ["rather"],
    partOfSpeech: "adv.",
    definitions: [{ en: "used to say what you prefer to do or have", zh: "\u76f8\u5f53\uff1b\u5b81\u613f" }],
    examples: [{ sentence: "Gloria would rather paint her nails than do her homework." }],
    similarWords: [{"word": "weather", "reason": "\u5f62\u8fd1", "zh": "\u5929\u6c14"}, {"word": "gather", "reason": "\u5f62\u8fd1", "zh": "\u805a\u96c6\uff1b\u6536\u96c6"}],
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
  },
  {
    id: "peace",
    word: "peace",
    syllables: ["peace"],
    partOfSpeech: "n.",
    definitions: [{ en: "when people live together well and do not cause trouble", zh: "\u548c\u5e73\uff1b\u5e73\u9759" }],
    examples: [{ sentence: "We all respect each other and live in peace in the community." }],
    inflections: {
      plural: "peaces"
    },
    similarWords: [{"word": "space", "reason": "\u5f62\u8fd1", "zh": "\u7a7a\u95f4\uff1b\u592a\u7a7a"}, {"word": "race", "reason": "\u5f62\u8fd1", "zh": "\u6bd4\u8d5b\uff1b\u79cd\u65cf"}],
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
  },
  {
    id: "recently",
    word: "recently",
    syllables: ["recently"],
    partOfSpeech: "adv.",
    definitions: [{ en: "not long ago", zh: "\u6700\u8fd1\uff1b\u8fd1\u6765" }],
    examples: [{ sentence: "We recently put these plants in pots for our class project." }],
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
  },
]

export const defaultBook = {
  id: "book-1000",
  name: "1000基础词",
  description: "来自1000词.xlsx，共960个基础单词",
  wordIds: defaultWords.map(w => w.id),
  createdAt: Date.now(),
}






// ===== 四下英语 (Grade 4) =====

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
    synonyms: [{"word": "active", "zh": "积极的；活跃的"}, {"word": "occupied", "zh": ""}],
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
      pastTense: "planed",
      pastParticiple: "planed",
      thirdPerson: "plans",
      presentParticiple: "planing"
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
      pastTense: "catched",
      pastParticiple: "catched",
      thirdPerson: "catches",
      presentParticiple: "catching"
    },
    phrases: [
      { phrase: "catch up", meaning: "赶上" },
      { phrase: "catch a cold", meaning: "感冒" },
      { phrase: "catch fire", meaning: "着火" }
    ],
    synonyms: [{"word": "capture", "zh": ""}, {"word": "seize", "zh": ""}, {"word": "grasp", "zh": ""}],
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
      comparative: "anier",
      superlative: "aniest"
    },
    phrases: [
      { phrase: "any more", meaning: "再" },
      { phrase: "any time", meaning: "任何时候" },
      { phrase: "any one", meaning: "任何一个" }
    ],
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
    synonyms: [{"word": "powerful", "zh": ""}, {"word": "mighty", "zh": ""}],
    similarWords: [{"word": "wrong", "reason": "形近", "zh": "错误的，不对的"}, {"word": "string", "reason": "形近", "zh": "线；绳子；弦"}],
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
      pastTense: "musted",
      pastParticiple: "musted",
      thirdPerson: "musts",
      presentParticiple: "musting"
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
    similarWords: [{"word": "press", "reason": "形近", "zh": "压；按；新闻界"}, {"word": "guess", "reason": "形近", "zh": "猜"}],
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
    synonyms: [{"word": "difficult", "zh": "困难的"}, {"word": "tough", "zh": "坚韧的；艰难的"}, {"word": "challenging", "zh": ""}],
    similarWords: [{"word": "board", "reason": "形近", "zh": "板；董事会；上（车船）"}, {"word": "guard", "reason": "形近", "zh": "守卫；警卫"}],
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
    synonyms: [{"word": "attempt", "zh": ""}, {"word": "endeavor", "zh": ""}, {"word": "strive", "zh": ""}],
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
      pastTense: "lied",
      pastParticiple: "lied",
      thirdPerson: "lies",
      presentParticiple: "liing"
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
      comparative: "iller",
      superlative: "illest"
    },
    phrases: [
      { phrase: "fall ill", meaning: "生病" },
      { phrase: "feel ill", meaning: "感觉不舒服" }
    ],
    similarWords: [{"word": "hill", "reason": "形近", "zh": "小山"}, {"word": "will", "reason": "形近", "zh": "将；将要"}, {"word": "kill", "reason": "形近", "zh": "杀；杀死"}],
  },
  {
    id: "a_glass_of",
    word: "a glass of",
    syllables: ["a glass of"],
    partOfSpeech: "phr",
    definitions: [{ en: "one cup of something to drink", zh: "一杯" }],
    examples: [{ sentence: "I want a glass of milk." }],
  },
  {
    id: "me_too",
    word: "Me too.",
    syllables: ["me too."],
    partOfSpeech: "sent",
    definitions: [{ en: "I am the same.", zh: "我也是。" }],
    examples: [{ sentence: "A: I like apples. B: Me too." }],
  },
  {
    id: "north",
    word: "north",
    syllables: ["north"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction on the left of a map", zh: "北方" }],
    examples: [{ sentence: "The north is cold in winter." }],
    inflections: {
      plural: "norths"
    },
    phrases: [
      { phrase: "north wind", meaning: "北风" },
      { phrase: "in the north", meaning: "在北方" }
    ],
    similarWords: [{"word": "worth", "reason": "形近", "zh": "值得的；价值"}, {"word": "birth", "reason": "形近", "zh": "出生"}, {"word": "earth", "reason": "形近", "zh": "地球"}],
  },
  {
    id: "south",
    word: "south",
    syllables: ["south"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction on the right of a map", zh: "南方" }],
    examples: [{ sentence: "The south is warm in winter." }],
    inflections: {
      plural: "souths"
    },
    phrases: [
      { phrase: "south wind", meaning: "南风" },
      { phrase: "in the south", meaning: "在南方" }
    ],
  },
  {
    id: "east",
    word: "east",
    syllables: ["east"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction the sun comes up", zh: "东方" }],
    examples: [{ sentence: "The sun rises in the east." }],
    inflections: {
      plural: "easts"
    },
    phrases: [
      { phrase: "east wind", meaning: "东风" },
      { phrase: "in the east", meaning: "在东方" }
    ],
    similarWords: [{"word": "last", "reason": "形近", "zh": "最后的"}, {"word": "fast", "reason": "形近", "zh": "快的"}, {"word": "past", "reason": "形近", "zh": "过去"}],
  },
  {
    id: "west",
    word: "west",
    syllables: ["west"],
    partOfSpeech: "n/adj",
    definitions: [{ en: "the direction the sun goes down", zh: "西方" }],
    examples: [{ sentence: "The sun sets in the west." }],
    inflections: {
      plural: "wests"
    },
    phrases: [
      { phrase: "west wind", meaning: "西风" },
      { phrase: "in the west", meaning: "在西方" }
    ],
    similarWords: [{"word": "rest", "reason": "形近", "zh": "休息，剩余"}, {"word": "best", "reason": "形近", "zh": "最好的"}, {"word": "test", "reason": "形近", "zh": "测试"}],
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
    similarWords: [{"word": "hospital", "reason": "形近", "zh": "医院"}],
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
    similarWords: [{"word": "peace", "reason": "形近", "zh": "和平；平静"}, {"word": "space", "reason": "形近", "zh": "空间；太空"}],
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
      plural: "northwests"
    },
    similarWords: [{"word": "north", "reason": "拓展", "zh": "北方"}, {"word": "west", "reason": "拓展", "zh": "西方"}],
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
    similarWords: [{"word": "save", "reason": "形近", "zh": "节省；拯救"}, {"word": "brave", "reason": "形近", "zh": "勇敢的；无畏的"}, {"word": "leave", "reason": "形近", "zh": "离开；出发"}],
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
    rootAffix: { explanation: "holy神圣 + day日子 = 神圣的日子→假日" },
    similarWords: [{"word": "holy", "reason": "拓展", "zh": ""}, {"word": "day", "reason": "拓展", "zh": "天，日，白天"}],
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
      pastTense: "willed",
      pastParticiple: "willed",
      thirdPerson: "wills",
      presentParticiple: "willing"
    },
    similarWords: [{"word": "ill", "reason": "形近", "zh": "生病的"}, {"word": "hill", "reason": "形近", "zh": "小山"}, {"word": "kill", "reason": "形近", "zh": "杀；杀死"}],
  },
  {
    id: "soon",
    word: "soon",
    syllables: ["soon"],
    partOfSpeech: "adv",
    definitions: [{ en: "in a short time from now", zh: "很快；马上" }],
    examples: [{ sentence: "I will finish my homework soon." }],
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
      pastTense: "shalled",
      pastParticiple: "shalled",
      thirdPerson: "shalls",
      presentParticiple: "shalling"
    },
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
    synonyms: [{"word": "amazing", "zh": "惊人的；极好的"}, {"word": "fantastic", "zh": ""}, {"word": "marvelous", "zh": ""}],
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
      pastTense: "growed",
      pastParticiple: "growed",
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
    synonyms: [{"word": "alter", "zh": ""}, {"word": "modify", "zh": ""}, {"word": "transform", "zh": ""}],
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
    synonyms: [{"word": "shift", "zh": ""}, {"word": "transfer", "zh": ""}, {"word": "relocate", "zh": ""}],
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
    similarWords: [{"word": "non", "reason": "拓展", "zh": ""}, {"word": "living", "reason": "拓展", "zh": "有生命的"}],
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
    similarWords: [{"word": "wing", "reason": "形近", "zh": "翅膀；机翼"}, {"word": "living", "reason": "形近", "zh": "有生命的"}, {"word": "boring", "reason": "形近", "zh": "无聊的"}],
  },
  {
    id: "air",
    word: "air",
    syllables: ["air"],
    partOfSpeech: "n",
    definitions: [{ en: "the gas we breathe every day", zh: "空气" }],
    examples: [{ sentence: "We need air to breathe." }],
    inflections: {
      plural: "airs"
    },
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
    synonyms: [{"word": "significant", "zh": ""}, {"word": "vital", "zh": ""}, {"word": "crucial", "zh": ""}],
    similarWords: [{"word": "restaurant", "reason": "形近", "zh": "餐厅"}],
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
    synonyms: [{"word": "messy", "zh": ""}, {"word": "filthy", "zh": ""}],
    similarWords: [{"word": "dirt", "reason": "拓展", "zh": ""}],
    mnemonics: "词根记忆：dirt脏 + -y = 脏的",
  },
  {
    id: "rubbish",
    word: "rubbish",
    syllables: ["rub", "bish"],
    partOfSpeech: "n",
    definitions: [{ en: "things you throw away, trash", zh: "垃圾" }],
    examples: [{ sentence: "We should put rubbish in the bin." }],
    inflections: {
      plural: "rubbishes"
    },
    phrases: [
      { phrase: "rubbish bin", meaning: "垃圾桶" },
      { phrase: "throw rubbish", meaning: "扔垃圾" }
    ],
    rootAffix: { explanation: "rubb-碎屑 + -ish = 碎屑→垃圾" },
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
    similarWords: [{"word": "bicycle", "reason": "形近", "zh": "自行车"}, {"word": "muscle", "reason": "形近", "zh": "肌肉"}],
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
    similarWords: [{"word": "blood", "reason": "形近", "zh": "血；血液"}, {"word": "flood", "reason": "形近", "zh": "洪水；淹没"}, {"word": "food", "reason": "形近", "zh": "食物"}],
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
    similarWords: [{"word": "band", "reason": "形近", "zh": "乐队；带子；波段"}, {"word": "grand", "reason": "形近", "zh": "宏伟的"}, {"word": "stand", "reason": "形近", "zh": "站，站立"}],
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
    synonyms: [{"word": "tidy", "zh": ""}, {"word": "neat", "zh": ""}, {"word": "spotless", "zh": ""}],
    similarWords: [{"word": "mean", "reason": "形近", "zh": "意思是"}, {"word": "clear", "reason": "形近", "zh": "清楚的"}],
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
      pastTense: "hurted",
      pastParticiple: "hurted",
      thirdPerson: "hurts",
      presentParticiple: "hurting"
    },
    phrases: [
      { phrase: "hurt oneself", meaning: "伤害自己" },
      { phrase: "get hurt", meaning: "受伤" }
    ],
    similarWords: [{"word": "hunt", "reason": "形近", "zh": "打猎；搜寻"}],
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
    synonyms: [{"word": "close", "zh": "关"}, {"word": "nearby", "zh": ""}, {"word": "adjacent", "zh": ""}],
    similarWords: [{"word": "wear", "reason": "形近", "zh": "穿，穿着"}, {"word": "clear", "reason": "形近", "zh": "清楚的"}, {"word": "tear", "reason": "形近", "zh": "眼泪；撕破"}],
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
    similarWords: [{"word": "lose", "reason": "形近", "zh": "丢失"}, {"word": "choose", "reason": "形近", "zh": "选择"}, {"word": "close", "reason": "形近", "zh": "关"}],
  },
  {
    id: "turn_off",
    word: "turn off",
    syllables: ["turn off"],
    partOfSpeech: "phr v",
    definitions: [{ en: "make a machine stop working", zh: "关掉" }],
    examples: [{ sentence: "Please turn off the light when you leave." }],
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
      comparative: "mainer",
      superlative: "mainest"
    },
    phrases: [
      { phrase: "main street", meaning: "主街" },
      { phrase: "main idea", meaning: "主要想法" }
    ],
    similarWords: [{"word": "again", "reason": "形近", "zh": "再次，又"}, {"word": "rain", "reason": "形近", "zh": "雨，下雨"}, {"word": "train", "reason": "形近", "zh": "火车"}, {"word": "remain", "reason": "拓展", "zh": "保持；剩下"}],
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
    synonyms: [{"word": "quick", "zh": "快的，迅速的"}, {"word": "rapid", "zh": ""}, {"word": "swift", "zh": ""}],
    similarWords: [{"word": "east", "reason": "形近", "zh": "东方"}, {"word": "last", "reason": "形近", "zh": "最后的"}, {"word": "past", "reason": "形近", "zh": "过去"}],
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
    similarWords: [{"word": "excite", "reason": "拓展", "zh": ""}],
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
      pastTense: "feeled",
      pastParticiple: "feeled",
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
      plural: "persons"
    },
    phrases: [
      { phrase: "young person", meaning: "年轻人" },
      { phrase: "first person", meaning: "第一人称" }
    ],
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
    similarWords: [{"word": "population", "reason": "形近", "zh": "人口；种群"}],
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
    similarWords: [{"word": "engine", "reason": "形近", "zh": "引擎；发动机"}, {"word": "magazine", "reason": "形近", "zh": "杂志；期刊"}, {"word": "machine", "reason": "形近", "zh": "机器；机械"}],
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
    inflections: {
      plural: "chinas"
    },
    mnemonics: "分音节记忆：chi · na",
  },
  {
    id: "france",
    word: "France",
    syllables: ["france"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe", zh: "法国" }],
    examples: [{ sentence: "France is a beautiful country." }],
    inflections: {
      plural: "frances"
    },
    similarWords: [{"word": "chance", "reason": "形近", "zh": "机会；可能性"}, {"word": "dance", "reason": "形近", "zh": "跳舞"}, {"word": "science", "reason": "形近", "zh": "科学"}],
  },
  {
    id: "uk",
    word: "UK",
    syllables: ["uk"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe, also called England", zh: "英国" }],
    examples: [{ sentence: "The UK is in Europe." }],
    inflections: {
      plural: "uks"
    },
  },
  {
    id: "paris",
    word: "Paris",
    syllables: ["paris"],
    partOfSpeech: "n",
    definitions: [{ en: "the capital city of France", zh: "巴黎" }],
    examples: [{ sentence: "Paris is the capital of France." }],
    inflections: {
      plural: "parises"
    },
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
    inflections: {
      plural: "venices"
    },
    similarWords: [{"word": "price", "reason": "形近", "zh": "价格；价钱"}, {"word": "office", "reason": "形近", "zh": "办公室"}, {"word": "police", "reason": "形近", "zh": "警察"}],
  },
  {
    id: "italy",
    word: "Italy",
    syllables: ["italy"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Europe", zh: "意大利" }],
    examples: [{ sentence: "Italy is famous for pizza." }],
    inflections: {
      plural: "italies"
    },
  },
  {
    id: "suzhou",
    word: "Suzhou",
    syllables: ["suzhou"],
    partOfSpeech: "n",
    definitions: [{ en: "a famous city in China with many gardens", zh: "苏州" }],
    examples: [{ sentence: "Suzhou has many beautiful gardens." }],
    inflections: {
      plural: "suzhous"
    },
  },
  {
    id: "asia",
    word: "Asia",
    syllables: ["asia"],
    partOfSpeech: "n",
    definitions: [{ en: "the biggest continent in the world", zh: "亚洲" }],
    examples: [{ sentence: "China is in Asia." }],
    inflections: {
      plural: "asias"
    },
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
    inflections: {
      plural: "europes"
    },
    mnemonics: "分音节记忆：eu · rope",
  },
  {
    id: "london",
    word: "London",
    syllables: ["lon", "don"],
    partOfSpeech: "n",
    definitions: [{ en: "the capital city of the UK", zh: "伦敦" }],
    examples: [{ sentence: "London is the capital of the UK." }],
    inflections: {
      plural: "londons"
    },
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
    inflections: {
      plural: "indias"
    },
    mnemonics: "分音节记忆：in · dia",
  },
  {
    id: "japan",
    word: "Japan",
    syllables: ["japan"],
    partOfSpeech: "n",
    definitions: [{ en: "a country in Asia, made of many islands", zh: "日本" }],
    examples: [{ sentence: "Japan is near China." }],
    inflections: {
      plural: "japans"
    },
  },
  {
    id: "canada",
    word: "Canada",
    syllables: ["cana", "da"],
    partOfSpeech: "n",
    definitions: [{ en: "a big country in North America", zh: "加拿大" }],
    examples: [{ sentence: "Canada is a big country." }],
    inflections: {
      plural: "canadas"
    },
    mnemonics: "分音节记忆：cana · da",
  },
]

export const grade4Book = {
  id: "book-grade4",
  name: "四下英语",
  description: "来自四下英语.xlsx，共144个单词/短语（四年级下册）",
  wordIds: grade4Words.map(w => w.id),
  createdAt: Date.now(),
}


export const sampleBooks: any[] = [grade4Book]
