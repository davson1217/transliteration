
// The procedure of breaking down a given Yoruba word into meaningful chunks. Syllables.
// Returns syllabified word e.g [A, DE, BA, YỌ]

const runSyllabification = (word) => {
  try {
    let yorubaWord = word.toUpperCase();
    let wordLength = yorubaWord.length;
    const syllables = [];
    let token = "";
    // console.log("syllables", syllables);

    const assertSyllable = (syllableStart, syllableEnd) => {
      token = yorubaWord.slice(syllableStart, syllableEnd);
      syllables.push(token);

      yorubaWord = yorubaWord.slice(syllableEnd);
      // console.log("yorubaWord", yorubaWord)
      wordLength = yorubaWord.length;
    };

    for (let i = 0, j = 1; j <= wordLength; j++) {
      if (isVowelStarter(yorubaWord)) {//Aoolaye [BUG]
        if (yoConsonants.includes(yorubaWord[j])) {
          //todo: syllabification exception for intaneeti... [fix]
          // console.log("Jay", yorubaWord[j]);
          assertSyllable(i, j);
          i = 0;
          j = 1;
        } else {
          console.log("===FINISHED===");
          assertSyllable(i);
          break;
        }
      } else {
        const isDigraph = yorubaWord.slice(0, 2) === yoDigraph; //
        if (isDigraph) {
          const digraphDeficit = 2;
          const wordWithoutDigraph = yorubaWord.slice(digraphDeficit);
          if (wordWithoutDigraph.length > 1) {
            const { consonantIndex, isNasal } =
                indexAndNasalityOfNextConsonant(wordWithoutDigraph); //to start from vowel
            if (isNasal) {
              assertSyllable(i, consonantIndex + (digraphDeficit + 1)); //digraphDeficit + 1 to include consonant value
              i = 0;
              j = 1;
            } else {
              assertSyllable(i, consonantIndex + digraphDeficit);
              i = 0;
              j = 1;
            }
          } else {
            assertSyllable(i, yorubaWord.length);
            break;
          }
        } else {
          const indexDeficit = 1;
          const wordWithoutConsonant = yorubaWord.slice(indexDeficit);
          if (wordWithoutConsonant.length > 1) {
            const { consonantIndex, isNasal, vowelSequence } =
                indexAndNasalityOfNextConsonant(wordWithoutConsonant, indexDeficit);
            if (consonantIndex) {
              if (isNasal) {
                assertSyllable(i, consonantIndex + (indexDeficit + 1)); // + 1 to include consonant value
                i = 0;
                j = 1;
              } else if (vowelSequence.length === wordWithoutConsonant.length) {
                //oluwas_eun, kin_iun
                if (vowelSequence.length > 2) {
                  // console.log("PROC");
                  assertSyllable(i, i + 2); //niun
                  i = 0;
                  j = 1;
                } else {
                  assertSyllable(i);
                  i = 0;
                  j = 1;
                }
              } else {
                assertSyllable(i, consonantIndex + indexDeficit);
                i = 0;
                j = 1;
              }
            } else assertSyllable(i, yorubaWord.length);
          } else {
            assertSyllable(i, j);
            break;
          }
        }
      }
      if (
          syllables.toString().replace(/,/g, "").length ===
          document.querySelector("#sourceInput").value.length
      ) {
        console.log(" ===== finished =====");
        break;
      }
    }

    return syllables;
  }catch (e) {
    console.log("error caught while breaking words", e)
  }

};

const syllabify = (word) => {
  try {
    //Gambari : Ga-n-ba-ri
    // console.log("word", word)
    let wordToSyllabify = word.replace(/ /g, "-");
    const isJointWordNoun = wordToSyllabify.includes("-");
    if (isJointWordNoun) {
      const wordTokens = wordToSyllabify.split("-");
      const syllables = wordTokens
          .map((word) => runSyllabification(word).toString())
          .toString();

      return syllables.split(",");
    } else {
      return runSyllabification(word);
    }
  } catch (e) {
    console.log('error caught in "syllabify"', e)
  }
};
