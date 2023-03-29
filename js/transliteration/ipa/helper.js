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
  A: ["a", 1],
  AA: ["aː", 2],
  B: ["b", 3],
  D: ["d", 4],
  E: ["e", 5],
  EE: ["eː", 6],
  Ẹ: ["ɛ", 7],
  ẸẸ: ["ɛː", 8],
  F: ["f", 9],
  G: ["g", 10],
  GB: ["g͡b", 11],
  H: ["h", 12],
  I: ["i", 13],
  II: ["iː", 14],
  J: ["d͡ʒ", 15],
  K: ["k", 16],
  L: ["l", 17],
  M: ["m", 18],
  N: ["n", 19],
  U: ["u", 20],
  UU: ["uː", 21],
  O: ["o", 22],
  OO: ["oː", 23],
  Ọ: ["ɔ", 24],
  ỌỌ: ["ɔː", 25],
  P: ["k͡p", 26],
  R: ["r", 27],
  Ṣ: ["ʃ", 28],
  S: ["s", 29],
  T: ["t", 30],
  W: ["w", 31],
  Y: ["j", 32],
  //Nasals
  AN: ["ã", 33],
  ẸN: ["ɛ̃", 34],
  IN: ["ĩ", 35],
  ỌN: ["ɔ̃", 36],
  UN: ["ũ", 37],
};
const nasals = ["AN", "ẸN", "IN", "ỌN", "UN"];
const nasalChecker = ["_AN", "_ẸN", "_IN", "_ỌN", "_UN"];
const yoDigraph = "GB";
//A diphthong, also known as a gliding vowel, is a combination of two adjacent vowel sounds within the same syllable.
// Technically, a diphthong is a vowel with two different targets: that is, the tongue moves during the
// pronunciation of the vowel. e.g., Jamiu. Nofiu. Rabiu.
const glides = {};

//=============== Lithuanian Orthography =====================//
const S_IPA_T_IPA = {
  1: "a",
  2: "aː",
  3: "b",
  4: "d",
  5: "e",
  6: "eː",
  7: "ɛ",
  8: "ɛː",
  9: "f",
  10: "g",
  11: "gb",
  12: "ɣ",
  13: "i",
  14: "iː",
  15: "dʒ",
  16: "k",
  17: "ɫ",
  18: "m",
  19: "n",
  20: "u",
  21: "u:",
  22: "o",
  23: "oː",
  24: "ɔ",
  25: "ɔ",
  26: "kp",
  27: "r",
  28: "ʃ",
  29: "s",
  30: "t",
  31: "v",
  32: "j",
  //Nasals
  33: "ɔŋ", //"ã",
  34: "ɛŋ", //"ɛ̃",
  35: "iŋ", //"ĩ",
  36: "ɔŋ", //"ɔ̃",
  37: "uŋ", //"ũ",
};
const ipaAlphaLT = {
  1: "a",
  2: "ą",
  3: "b",
  4: "d",
  5: "ei", // as in pay
  6: "ei", //as in pain
  7: "e", // as in pet
  8: "ė", // as in pair
  9: "f",
  10: "g",
  11: "gb",
  12: "h",
  13: "i",
  14: "y",
  15: "dž",
  16: "k",
  17: "l",
  18: "m",
  19: "n",
  20: "u",
  21: "ū",
  22: "o",
  23: "o",
  24: "o",
  25: "o",
  26: "kp",
  27: "r",
  28: "š",
  29: "s",
  30: "t",
  31: "v",
  32: "j",
  //Nasals
  33: "on", //"ã",
  34: "en", //"ɛ̃",
  35: "in", //"ĩ",
  36: "on", //"ɔ̃",
  37: "un", //"ũ",
};
//========== Methods =========

const isVowelStarter = (word) => yoVowels.includes(word.charAt(0));

const indexAndNasalityOfNextConsonant = (word) => {
  // console.log("indexAndNasalityOfNextConsonant of => ", word);
  const response = {
    consonantIndex: 0,
    isNasal: false,
    vowelSequence: "",
  };

  for (let i = 0; i <= word.length; i++) {
    if (yoConsonants.includes(word[i])) {
      // const combo = word[i - 1] + word[i];
      response.consonantIndex = i;
      const nasalTester = word.slice(0, i + 1);
      // console.log("nasalTester", nasalTester);
      if (nasals.includes(nasalTester.toUpperCase())) {
        response.isNasal = true;
        const nextCharacter = word[i + 1];
        if (yoVowels.includes(nextCharacter) && nextCharacter !== "O") {
          // ALAO, AKANO, ADIO
          //e.g., AJ[ANI] should not be considered to have nasal sound because the vowel [I] must be pronounced
          response.isNasal = false;
          break;
        }
      } else {
        if (i + 1 >= word.length) {// avoid leaving last character in source word. e,g., Kiniun
          response.vowelSequence = word.slice(0);
        } else {
          response.vowelSequence = word.slice(0, i);
        }
      }
      break;
    } //else response.vowelSequence = word;

    // console.log(response);
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

function getIPAValueAndIndices() {
  let phonemes = [...arguments];
  console.log("phonemes", phonemes)
  let ipaValues = "";
  let TIPAIndices = "";
  if (phonemes.includes("noSplit")) {
    const token = phonemes.filter((phoneme) => phoneme !== "noSplit");
    token[0].split("").forEach((phoneme) => {
      const [ipa, index] = alphaIPA[phoneme];
      // console.log("input___", ipa);
      ipaValues += ipa;
      TIPAIndices += ":" + index;
    });
  } else {
    phonemes.forEach((phoneme) => {
      const [ipa, index] = alphaIPA[phoneme];
      ipaValues += ipa;
      TIPAIndices += ":" + index;
    });

    TIPAIndices += " ";
  }

  return { ipaValues, TIPAIndices };
}

// The procedure of converting source syllables to their IPA equivalent. i.e., SG -> SIPA.
// Returns source IPA
const mapTokensToIPA = (tokens = [""]) => {
  //missing glides detector i.e., iu (iju) in Jamiu.
  let SIPA = { ipaValues: "", TIPAIndices: "" };
  tokens.forEach((token) => {
    const nasalSounds = possibleNasalSoundsForToken(token);
    if (nasalSounds.includes(token)) {
      // e.g GBAN, KAN
      if (token.slice(0, 2) === yoDigraph) {
        const digraph = token.slice(0, 2);
        const tokenRemainder = token.slice(2);
        const values = getIPAValueAndIndices(digraph, tokenRemainder);
        SIPA.ipaValues = SIPA.ipaValues + values.ipaValues;
        SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices;
      } else {
        const values = getIPAValueAndIndices(token[0], token.slice(1));
        SIPA.ipaValues = SIPA.ipaValues + values.ipaValues;
        SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices;
      }
      SIPA.ipaValues = SIPA.ipaValues + " ";
    } else {
      // No Nasals
      if (token.slice(0, 2) === yoDigraph) {
        const digraph = token.slice(0, 2);
        const tokenRemainder = token.slice(2);
        const values = getIPAValueAndIndices(digraph, tokenRemainder);
        SIPA.ipaValues = SIPA.ipaValues + values.ipaValues;
        SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices;
      } else {
        const longSoundPattern = /AA|EE|ẸẸ|II|OO|ỌỌ|UU/i;
        const longSoundMatch = longSoundPattern.exec(token.toString());
        if (longSoundMatch) {
          const longSound = longSoundMatch[0];
          if (longSoundMatch.index === 0) {
            //token is long vowel as in word AARẸ i.e [AA, RẸ];
            const tokenRemainder = token.slice(longSound.length);
            const values = getIPAValueAndIndices(longSound);
            const remainderValues = getIPAValueAndIndices(tokenRemainder, "noSplit")
            SIPA.ipaValues = (SIPA.ipaValues + values.ipaValues).concat(remainderValues.ipaValues);
            console.log("remainderValues", remainderValues)
            SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices.concat(remainderValues.TIPAIndices);
          } else {
            // e.g [BEE] in BEELI
            const values = getIPAValueAndIndices(token[0][0], longSound);
            SIPA.ipaValues = SIPA.ipaValues + values.ipaValues;
            SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices;
          }
        } else {
          const values = getIPAValueAndIndices(token, "noSplit"); //token entities should be treated as one to keep syllable structure in SIPA
          SIPA.ipaValues = SIPA.ipaValues + values.ipaValues;
          SIPA.TIPAIndices = SIPA.TIPAIndices + values.TIPAIndices;
        }
      }
      SIPA.ipaValues = SIPA.ipaValues + " ";
    }
  });
  SIPA.TIPAIndices = SIPA.TIPAIndices.slice(1); // Removing starting ':' added in getIPAValueAndIndices()

  return SIPA;
};

const mapSipaTipa = (tipaIndices = "") => {
  tipaIndices = tipaIndices.trim();
  const indices = tipaIndices.split(" ").map((jointIndices) => {
    if (jointIndices.indexOf(":") === 0) {
      jointIndices = jointIndices.slice(1);
    }

    return jointIndices;
  });
  let tipa = " ";
  indices.forEach((jointIpa) => {
    jointIpa.split(":").map((tipaIndex) => {
      tipa += S_IPA_T_IPA[tipaIndex];
    });

    tipa += " ";
  });
  const tgIndices = indices.join(":");

  return { tipa, tgIndices };
};

const mapTipaTarget = (tipa) => {
  console.log("tipa to transcribe", tipa);
  let target = "";
  // Create indexed YO/IPA -> LT/IPA mapping as exemplified in e.g., S_IPA_T_IPA.
  // So, this function should receive tipa indices as argument.
  tipa.split(":").forEach((ipaIndex) => (target += ipaAlphaLT[ipaIndex]));

  console.log("final target", target.toUpperCase());

  return target;
};
