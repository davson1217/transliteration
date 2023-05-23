/*
  Abiọdun => A.BI.JO.DUN (JO) BECAUSE OF THE GLIDE IN VOWELS DURING PRONUNCIATION
* */
function populateRulesYO_EN() {
    return new Promise((resolve, reject) => {
        //Contexts where <A> may be pronounced as in <ON> due to nasal consonant <N>
        addEntry("", "", "", "", "N", "A", "", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "D", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "G", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "I", "H", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "K", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "R", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "S", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "Ṣ", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "T", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "A", "Y", "A", "N", "N", "", "", "", 3, "A", 1, 1, "");
        addEntry("", "", "", "A", "Y", "A", "N", "", "", "", "", 3, "O", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        // Long A sounds based on sequence of the letter or stress detection
        addEntry("", "", "", "", "", "A", "A", "", "", "", "", 3, "", 1, 1);
        //Loan Word stress removal to facilitate english adaptation
        addEntry("", "", "", "", "", "A", "A", "B", "U", "", "", 3, "", 1, 1, "The long A sound in 'AABU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "D", "U", "", "", 3, "", 1, 1, "The long A sound in 'AADU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "F", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAFU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "G", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAGU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "GB", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAGBU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "H", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAHU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "J", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAJU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "K", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAKU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "L", "U", "", "", 3, "", 1, 1, "The long A sound in 'AALU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "M", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAMU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "N", "U", "", "", 3, "", 1, 1, "The long A sound in 'AANU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "P", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAPU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "R", "U", "", "", 3, "", 1, 1, "The long A sound in 'AARU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "Ṣ", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAṢU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "S", "U", "", "", 3, "", 1, 1, "The long A sound in 'AASU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "T", "U", "", "", 3, "", 1, 1, "The long A sound in 'AATU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "W", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAWU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "Y", "U", "", "", 3, "", 1, 1, "The long A sound in 'AAYU' is coalesced to 'A' for anglicization");

        addEntry("", "", "", "", "", "A", "A", "B", "I", "", "", 3, "", 1, 1, "The long A sound in 'AABU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "D", "I", "", "", 3, "", 1, 1, "The long A sound in 'AADU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "F", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAFU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "G", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAGU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "GB", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAGBU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "H", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAHU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "J", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAJU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "K", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAKU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "L", "I", "", "", 3, "", 1, 1, "The long A sound in 'AALU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "M", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAMU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "N", "I", "", "", 3, "", 1, 1, "The long A sound in 'AANU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "P", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAPU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "R", "I", "", "", 3, "", 1, 1, "The long A sound in 'AARU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "Ṣ", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAṢU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "S", "I", "", "", 3, "", 1, 1, "The long A sound in 'AASU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "T", "I", "", "", 3, "", 1, 1, "The long A sound in 'AATU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "W", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAWU' is coalesced to 'A' for anglicization");
        addEntry("", "", "", "", "", "A", "A", "Y", "I", "", "", 3, "", 1, 1, "The long A sound in 'AAYU' is coalesced to 'A' for anglicization");
        //Loan Word stress removal to facilitate english adaptation

        // addEntry("", "", "", "", "A", "A", "", "", "", "", "", 3, "AA", 1, 1, "Long 'A' sound");
        addEntry("", "", "", "", "I", "A", "", "", "", "", "", 3, "AH", 1, 1, "Long A due to stress detection in vowel glide");
        addEntry("", "", "", "", "U", "A", "", "", "", "", "", 3, "AH", 1, 1, "Long A due to stress detection in vowel glide");
        // End of A context rules
        addEntry("", "", "", "", "", "A", "", "", "", "", "", 3, "A", 1, 1);
        // End of A rules
        addEntry("", "", "", "", "", "B", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "", "", "", "D", "", "", "", "", "", 3, "D", 1, 1);
        addEntry("", "", "", "", "Y", "E", "", "", "", "", "", 3, "I", 1, 1);
        addEntry("", "", "", "", "", "E", "Ṣ", "", "", "", "", 3, "E", 1, 1);

        addEntry("", "", "", "", "B", "E", "E", "", "", "", "", 3, "A", 1, 1);//BEELI
        addEntry("", "", "", "", "D", "E", "E", "", "", "", "", 3, "A", 1, 1);//DEETI
        addEntry("", "", "", "", "F", "E", "E", "", "", "", "", 3, "A", 1, 1);//FEELI
        addEntry("", "", "", "", "G", "E", "E", "", "", "", "", 3, "A", 1, 1);//GEETI
        addEntry("", "", "", "", "GB", "E", "E", "", "", "", "", 3, "A", 1, 1);//GBEEKI
        addEntry("", "", "", "", "H", "E", "E", "", "", "", "", 3, "A", 1, 1);//HEETI
        addEntry("", "", "", "", "J", "E", "E", "", "", "", "", 3, "A", 1, 1);//JEELI
        addEntry("", "", "", "", "K", "E", "E", "", "", "", "", 3, "A", 1, 1);//KEESI
        addEntry("", "", "", "", "L", "E", "E", "", "", "", "", 3, "A", 1, 1);//LEESI
        addEntry("", "", "", "", "M", "E", "E", "", "", "", "", 3, "A", 1, 1);//MEEDI
        addEntry("", "", "", "", "N", "E", "E", "", "", "", "", 3, "A", 1, 1);//NEELI
        addEntry("", "", "", "", "P", "E", "E", "", "", "", "", 3, "A", 1, 1);//PEEDI
        addEntry("", "", "", "", "R", "E", "E", "", "", "", "", 3, "A", 1, 1);//REESI
        addEntry("", "", "", "", "Ṣ", "E", "E", "", "", "", "", 3, "A", 1, 1);//ṢEEDI
        addEntry("", "", "", "", "S", "E", "E", "", "", "", "", 3, "A", 1, 1);//SEELI
        addEntry("", "", "", "", "T", "E", "E", "", "", "", "", 3, "A", 1, 1);//TEEPU
        addEntry("", "", "", "", "W", "E", "E", "", "", "", "", 3, "A", 1, 1);//WEELI
        addEntry("", "", "", "", "Y", "E", "E", "", "", "", "", 3, "A", 1, 1);//YEEDI


        // addEntry("", "", "", "", "", "E", "E", "", "", "", "", 3, "", 1, 1);//BEELI
        addEntry("", "", "", "", "B", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "D", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "F", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "G", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "GB", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "H", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "J", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "K", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "L", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "M", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "N", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "P", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "R", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "Ṣ", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "S", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "T", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "W", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "Y", "E", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "", "E", "", "", "", "", "", 3, "E", 1, 1);

        addEntry("", "", "", "", "", "Ẹ", "Ẹ", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "", "A", "K", "Ẹ", "", "", "", "", "", 3, "EH", 1, 1);
        addEntry("", "", "", "", "Ẹ", "Ẹ", "", "", "", "", "", 3, "EH", 1, 1, "/ẸẸ/ coalesced to form /ɛ:/");
        addEntry("", "", "", "", "", "Ẹ", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "", "", "", "F", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "", "", "", "G", "", "", "", "", "", 3, "G", 1, 1);
        addEntry("", "", "", "", "", "GB", "", "", "", "", "", 3, "GB", 1, 1, "Learn to pronounce /GB/");
        addEntry("", "", "", "", "", "H", "", "", "", "", "", 3, "H", 1, 1);

        //Stress removal on borrowed words with <i> ending e.g GEETI
        addEntry("", "", "A", "A", "B", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "D", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "F", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "G", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "GB", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "H", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "J", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "K", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "L", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "M", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "N", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "P", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "R", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "S", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "Ṣ", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "T", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "W", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "Y", "I", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "E", "E", "D", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "F", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "G", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "GB", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "J", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "K", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "L", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "M", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "N", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "P", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "R", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "Ṣ", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "S", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "T", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "W", "I", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "Y", "I", "", "", "", "", "", 3, "E", 1, 1);

        addEntry("", "", "Ẹ", "Ẹ", "B", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "D", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "F", "I", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "G", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "GB", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "J", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "K", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "L", "I", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "M", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "N", "I", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "P", "I", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "R", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "Ṣ", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "S", "I", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "T", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "W", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "Y", "I", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "I", "I", "B", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "I", "I", "D", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "F", "I", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "I", "I", "G", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "GB", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "I", "I", "J", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "K", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "L", "I", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "I", "I", "M", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "N", "I", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "I", "I", "P", "I", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "I", "I", "R", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "Ṣ", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "S", "I", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "I", "I", "T", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "W", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "Y", "I", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "O", "O", "B", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "O", "O", "D", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "F", "I", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "O", "O", "G", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "GB", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "O", "O", "J", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "K", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "L", "I", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "O", "O", "M", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "N", "I", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "O", "O", "P", "I", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "O", "O", "R", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "Ṣ", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "S", "I", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "O", "O", "T", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "W", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "Y", "I", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "Ọ", "Ọ", "B", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "D", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "F", "I", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "G", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "GB", "I", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "J", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "K", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "L", "I", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "M", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "N", "I", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "P", "I", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "R", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "Ṣ", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "S", "I", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "T", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "W", "I", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "Y", "I", "", "", "", "", "", 3, "", 1, 1);
        //End of Stress removal on borrowed words with <i> ending

        addEntry("", "", "", "", "", "I", "I", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "", "", "I", "I", "", "", "", "", "", 3, "EE", 1, 1);
        addEntry("", "", "", "", "", "I", "O", "", "", "", "", 3, "EO", 1, 1);
        addEntry("", "", "", "", "", "I", "E", "", "", "", "", 3, "EAI", 1, 1);
        addEntry("", "", "", "", "", "I", "", "", "", "", "", 3, "I", 1, 1);
        // END OF <I> RULES

        addEntry("", "", "", "", "", "J", "", "", "", "", "", 3, "J", 1, 1);
        addEntry("", "", "", "", "", "K", "", "", "", "", "", 3, "K", 1, 1);
        addEntry("", "", "", "", "", "L", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "", "", "", "M", "", "", "", "", "", 3, "M", 1, 1);
        addEntry("", "", "", "", "", "N", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "", "", "", "O", "", "", "", "", "", 3, "O", 1, 1);
        addEntry("", "", "", "", "", "Ọ", "", "", "", "", "", 3, "O", 1, 1);
        addEntry("", "", "", "", "", "P", "", "", "", "", "", 3, "KP", 1, 1);
        addEntry("", "", "", "", "", "R", "", "", "", "", "", 3, "R", 1, 1);
        addEntry("", "", "", "", "", "Ṣ", "", "", "", "", "", 3, "SH", 1, 1);
        addEntry("", "", "", "", "", "S", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "", "", "", "T", "", "", "", "", "", 3, "T", 1, 1);

        //BEGINNING OF <U> RULES
        //Stress removal on borrowed words with <u> ending e.g., Jiimu
        addEntry("", "", "A", "A", "B", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "D", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "F", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "G", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "GB", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "H", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "J", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "K", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "L", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "M", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "N", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "P", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "R", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "S", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "Ṣ", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "T", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "A", "A", "Y", "U", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "E", "E", "B", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "D", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "F", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "G", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "GB", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "J", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "K", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "L", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "M", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "N", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "P", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "R", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "Ṣ", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "S", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "T", "U", "", "", "", "", "", 3, "E", 1, 1);
        addEntry("", "", "E", "E", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "E", "E", "Y", "U", "", "", "", "", "", 3, "E", 1, 1);

        addEntry("", "", "Ẹ", "Ẹ", "B", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "D", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "F", "U", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "G", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "GB", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "J", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "K", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "L", "U", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "M", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "N", "U", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "P", "U", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "R", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "Ṣ", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "S", "U", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "T", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ẹ", "Ẹ", "Y", "U", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "I", "I", "B", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "I", "I", "D", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "F", "U", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "I", "I", "G", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "GB", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "I", "I", "J", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "K", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "L", "U", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "I", "I", "M", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "N", "U", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "I", "I", "P", "U", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "I", "I", "R", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "Ṣ", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "S", "U", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "I", "I", "T", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "I", "I", "Y", "U", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "O", "O", "B", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "O", "O", "D", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "F", "U", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "O", "O", "G", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "GB", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "O", "O", "J", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "K", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "L", "U", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "O", "O", "M", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "N", "U", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "O", "O", "P", "U", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "O", "O", "R", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "Ṣ", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "S", "U", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "O", "O", "T", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "O", "O", "Y", "U", "", "", "", "", "", 3, "", 1, 1);

        addEntry("", "", "Ọ", "Ọ", "B", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "D", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "F", "U", "", "", "", "", "", 3, "F", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "G", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "GB", "U", "", "", "", "", "", 3, "B", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "J", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "K", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "L", "U", "", "", "", "", "", 3, "L", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "M", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "N", "U", "", "", "", "", "", 3, "N", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "P", "U", "", "", "", "", "", 3, "P", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "R", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "Ṣ", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "S", "U", "", "", "", "", "", 3, "S", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "T", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "W", "U", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "Ọ", "Ọ", "Y", "U", "", "", "", "", "", 3, "", 1, 1);
        //End of Stress removal on borrowed words with <u> ending
        //END OF <U> RULES

        addEntry("", "", "", "", "", "U", "U", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "", "", "", "U", "N", "", "", "", "", 3, "OO", 1, 1);
        addEntry("", "", "", "", "U", "U", "", "", "", "", "", 3, "OO", 1, 1, "/UU/ coalesced to form /o:/");
        addEntry("", "", "", "", "", "U", "", "", "", "", "", 3, "U", 1, 1);


        addEntry("", "", "", "", "", "W", "", "", "", "", "", 3, "W", 1, 1);
        addEntry("", "", "", "", "", "Y", "", "", "", "", "", 3, "Y", 1, 1);

        resolve()
    })
}
