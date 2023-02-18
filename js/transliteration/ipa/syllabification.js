const syllabify = (word) => {
  let yorubaWord = word.toUpperCase();
  let wordLength = yorubaWord.length;
  const syllables = [];
  let token = "";

  const assertSyllable = (syllableStart, syllableEnd) => {
    token = yorubaWord.slice(syllableStart, syllableEnd);
    syllables.push(token);

    yorubaWord = yorubaWord.slice(syllableEnd);
    wordLength = yorubaWord.length;
  };

  for (let i = 0, j = 1; j <= wordLength; j++) {
    if (isVowelStarter(yorubaWord)) {
      if (yoConsonants.includes(yorubaWord[j])) {
        //todo [FIX]: syllabification exception for intaneeti (internet).
        assertSyllable(i, j);
        i = 0;
        j = 1;
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
          const { consonantIndex, isNasal } = indexAndNasalityOfNextConsonant(
            wordWithoutConsonant,
            indexDeficit
          );
          if (consonantIndex) {
            if (isNasal) {
              assertSyllable(i, consonantIndex + (indexDeficit + 1)); // + 1 to include consonant value
              i = 0;
              j = 1;
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
  }

  return syllables;
};
