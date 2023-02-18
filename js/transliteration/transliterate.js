//LCont => Left Context Count
//RCont => Right Context Count
//Char => Current Character
//Gen => Gender
//Trans => Transliteration
//skLt => Skip Letter
//skRl => Skip Rule

/*

Transliteration is the process of adjusting the pronunciation of a word in its original form to suit the phonological
regularities of the target language

From scientific point of view, answers to the following questions
would be interesting:

What intermediate language works better?
Is direct transliteration better than using intermediate language? ...

Maybe it is worth to try
Yoruba letters to IPA phonemes and then IPA phonemes to Lithuanian letters.
* */

let RulesEntry = [];

function addEntry(
  LCont5,
  LCont4,
  LCont3,
  LCont2,
  LCont1,
  currentLetter,
  RCont1,
  RCont2,
  RCont3,
  RCont4,
  RCont5,
  gender,
  transliteration,
  letterSkip,
  ruleSkip,
  theory
) {
  RulesEntry.push({
    LCont5,
    LCont4,
    LCont3,
    LCont2,
    LCont1,
    currentLetter,
    RCont1,
    RCont2,
    RCont3,
    RCont4,
    RCont5,
    gender,
    transliteration,
    letterSkip,
    ruleSkip,
    theory,
  });
}

function processTranscription(word, target) {
  const upperCasedWord = word.toUpperCase();
  const essentialTheories = [];
  let transliteration = "";
  let i = 0,
    j = 0,
    inputLength = 0;
  let preProcessedInput = "";
  //todo -> perform text normalization

  preProcessedInput = "_____".concat(upperCasedWord);
  inputLength = preProcessedInput.length;
  preProcessedInput = preProcessedInput.concat("_____0");
  // detectStressAndPrependRule_Yo_EN(word)
  i = 5; //starting from input's actual first character
  j = 0; // searcher (value of j searches )
  console.log("preProcessedInput", preProcessedInput);
  //rules search
  while (i < inputLength + 1) {
    if (RulesEntry[j].currentLetter !== preProcessedInput[i]) {
      //iterate until current rule's current letter === input's current letter
      //
      j += RulesEntry[j].ruleSkip;
    } else if (
      (RulesEntry[j].LCont5 !== ""
        ? RulesEntry[j].LCont5.indexOf(preProcessedInput[i - 5]) + 1
        : 1) &&
      (RulesEntry[j].LCont4 !== ""
        ? RulesEntry[j].LCont4.indexOf(preProcessedInput[i - 4]) + 1
        : 1) &&
      (RulesEntry[j].LCont3 !== ""
        ? RulesEntry[j].LCont3.indexOf(preProcessedInput[i - 3]) + 1
        : 1) &&
      (RulesEntry[j].LCont2 !== ""
        ? RulesEntry[j].LCont2.indexOf(preProcessedInput[i - 2]) + 1
        : 1) &&
      (RulesEntry[j].LCont1 !== ""
        ? RulesEntry[j].LCont1.indexOf(preProcessedInput[i - 1]) + 1
        : 1) &&
      (RulesEntry[j].RCont1 !== ""
        ? RulesEntry[j].RCont1.indexOf(preProcessedInput[i + 1]) + 1
        : 1) &&
      (RulesEntry[j].RCont2 !== ""
        ? RulesEntry[j].RCont2.indexOf(preProcessedInput[i + 2]) + 1
        : 1) &&
      (RulesEntry[j].RCont3 !== ""
        ? RulesEntry[j].RCont3.indexOf(preProcessedInput[i + 3]) + 1
        : 1) &&
      (RulesEntry[j].RCont4 !== ""
        ? RulesEntry[j].RCont4.indexOf(preProcessedInput[i + 4]) + 1
        : 1) &&
      (RulesEntry[j].RCont5 !== ""
        ? RulesEntry[j].RCont5.indexOf(preProcessedInput[i + 5]) + 1
        : 1)
    ) {
      // +1 because indexOf returns -1 when search is not found. For && operation to work, however, indexOf should at least return 0;
      i += RulesEntry[j].ruleSkip;
      if (RulesEntry[j].theory) {
        console.log(RulesEntry[j].theory);
        essentialTheories.push(RulesEntry[j].theory);
      }
      transliteration = transliteration.concat(RulesEntry[j].transliteration);
      // console.log(transliteration)
      j = 0;
    } else j++;
    if (j > RulesEntry.length - 1) {
      j = 0;
      i++;
    }
  }
  return {
    transliteration,
    essentialTheories,
  };
}
