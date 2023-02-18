const yoConsonants = ["B", "D", "F", "G", "GB", "H", "J", "K", "L", "M", "N", "P", "R", "S", "Ṣ", "T", "W", "Y"];
const yoVowels = ["A", "E", "Ẹ", "I", "O", "Ọ", "U"];
const yoNasalVowels = ["A", "Ẹ", "I", "Ọ", "U"];
const yoNasals = ["AN", "ẸN", "IN", "ỌN", "UN"];
const yoDigraph = "GB";

const isVowelStarter = (word) => yoVowels.includes(word.charAt(0));

const indexAndNasalityOfNextConsonant = (word, indexDeficit) => {
    const response = {
        consonantIndex: 0,
        isNasal: false,
        vowelSequence: ''
    }
    console.log(word, word.length)
    for (let i = 0; i <= word.length; i++) {
        if (yoConsonants.includes(word[i])) {
            const combo = word[i-1] + word[i];
            response.consonantIndex = i;
            response.isNasal = yoNasals.includes(combo);//word[i] === 'N';

            break;
        } else response.vowelSequence = word;
    }

    console.log(response);

    return response
}