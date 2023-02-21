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
  A: "a",
  B: "b",
  D: "d",
  E: "e",
  Ẹ: "ɛ",
  F: "f",
  G: "g",
  GB: "g͡b",
  H: "h",
  I: "i",
  J: "d͡ʒ",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  U: "u",
  O: "o",
  Ọ: "ɔ",
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
const nasalChecker = ["_AN", "_ẸN", "_IN", "_ỌN", "_UN"];
const yoDigraph = "GB";

const isVowelStarter = (word) => yoVowels.includes(word.charAt(0));

const indexAndNasalityOfNextConsonant = (word, indexDeficit) => {
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

const isTokenNasal = (token = "") => {};

const mapTokenToIPA = (token = "", tokensIpa = "", nasal = false) => {
  let ipa = tokensIpa;
  token.split("").map((char) => {});
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
        console.log("land")
        token
          .split("")
          .map((char) => {
            tokensIPA += alphaIPA[char];
          });
      }

      tokensIPA += " ";
    }
  });

  return tokensIPA;
};
