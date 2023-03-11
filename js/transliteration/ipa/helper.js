//=============== Yoruba Orthography =====================//
const yoVowels = ["A", "E", "Ẹ", "I", "O", "Ọ", "U"];
const yoConsonants = [
  "B",
  "D",
  "F",
  "G",
  "GB",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "R",
  "S",
  "Ṣ",
  "T",
  "W",
  "Y",
];
const alphaIPA = {
  //Long sounds missing in chart
  A: "a",
  AA: "a:",
  B: "b",
  D: "d",
  E: "e",
  EE: "e:",
  Ẹ: "ɛ",
  ẸẸ: "ɛ:",
  F: "f",
  G: "g",
  GB: "g͡b",
  H: "h",
  I: "i",
  II: "i:",
  J: "d͡ʒ",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  U: "u",
  UU: "u:",
  O: "o",
  OO: "o:",
  Ọ: "ɔ",
  ỌỌ: "ɔ:",
  P: "k͡p",
  R: "r",
  Ṣ: "ʃ",
  S: "s",
  T: "t",
  W: "w",
  Y: "j",
};
const nasalIPA = {
  AN: "ã",
  ẸN: "ɛ̃",
  IN: "ĩ",
  ỌN: "ɔ̃",
  UN: "ũ",
};
const nasals = ["AN", "ẸN", "IN", "ỌN", "UN"];
const longSound = ["AA", "EE", "ẸẸ", "II", "OO", "ỌỌ", "UU"];
const nasalChecker = ["_AN", "_ẸN", "_IN", "_ỌN", "_UN"];
const yoDigraph = "GB";

//=============== Lithuanian Orthography =====================//

const S_IPA_T_IPA = {
  "a": "a",
  "a:": "a:",
  "b": "b",
  "d": "d",
  "e": "ai",
  "e:": "ai",
  "ɛ": "ɛ",
  "ɛ:": "ɛ:",
  "f": "f",
  "g": "g",
  "g͡b": "gb",
  "h": "ɣ",
  "i": "i",
  "i:": "y",
  "d͡ʒ": "dʒ",
  "k": "k",
  "l": "ɫ",
  "m": "m",
  "n": "n",
  "u": "u",
  "u:": "u:",
  "o": "au",
  "o:": "au",
  "ɔ": "o",
  "ɔ:": "o",
  "k͡p": "kp",
  "r": "r",
  "ʃ": "ʃ",
  "s": "s",
  "t": "t",
  "w": "v",
  "j": "j",
};
const isVowelStarter = (word) => yoVowels.includes(word.charAt(0));

const indexAndNasalityOfNextConsonant = (word) => {
  const response = {
    consonantIndex: 0,
    isNasal: false,
    vowelSequence: "",
  };

  for (let i = 0; i <= word.length; i++) {
    if (yoConsonants.includes(word[i])) {
      const combo = word[i - 1] + word[i];
      response.consonantIndex = i;
      response.isNasal = nasals.includes(combo); //word[i] === 'N';

      break;
    } else response.vowelSequence = word;
  }

  return response;
};

const possibleNasalSoundsForToken = (token = "") => {
  return nasalChecker.map((nasal) => {
    if (token.slice(0, 2) === yoDigraph) {
      nasal = nasal.replace("_", yoDigraph);
    } else {
      nasal = nasal.replace("_", token[0]);
    }
    return nasal;
  });
};

const mapTokensToIPA = (tokens = [""]) => {
  //missing glides detector i.e., iu (iju) in Jamiu.
  let tokensIPA = "";
  tokens.forEach((token) => {
    const nasalSounds = possibleNasalSoundsForToken(token);
    if (nasalSounds.includes(token)) {
      if (token.slice(0, 2) === yoDigraph) {
        const digraph = token.slice(0, 2);
        tokensIPA += alphaIPA[digraph].concat(token.slice(2));
      } else {
        tokensIPA += alphaIPA[token[0]].concat(nasalIPA[token.slice(1)]);
      }
      tokensIPA += " ";
    } else {
      if (token.slice(0, 2) === yoDigraph) {
        const digraph = token.slice(0, 2);
        tokensIPA += alphaIPA[digraph].concat(alphaIPA[token.slice(2)]);
      } else {
        const longSoundPattern = /AA|EE|ẸẸ|II|OO|ỌỌ|UU/i;
        const longSoundMatch = longSoundPattern.exec(token.toString());
        if (longSoundMatch) {
          const longSound = longSoundMatch[0];
          if (longSoundMatch.index === 0) {
            //token is long vowel as in word AARẸ i.e [AA, RẸ];
            tokensIPA += alphaIPA[longSound];
          } else {
            // e.g [BEE] in BEELI
            tokensIPA += alphaIPA[token[0][0]].concat(alphaIPA[longSound]);
          }
        } else {
          token.split("").map((char) => (tokensIPA += alphaIPA[char]));
        }
      }

      tokensIPA += " ";
    }
  });

  return tokensIPA;
};

const map_S_IPA_T_IPA = (sourceIPA = "") => {
  const sipa = sourceIPA.replace(/\s/g, ""); //remove all whitespace
  let tipa = "";
  sipa.split("").map((char) => (tipa += S_IPA_T_IPA[char]));

  return tipa;
};
