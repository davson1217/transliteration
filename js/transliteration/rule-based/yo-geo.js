//Consider writing rule theories
function populateRulesGE() {
    return new Promise(resolve => {
        addEntry("", "", "", "", "", "A", "N", "", "", "", "", 3, "ო", 1, 1);
        addEntry("", "", "", "", "N", "A", "", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "D", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "G", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "I", "H", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "K", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "R", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "S", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "Ṣ", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "", "T", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");
        addEntry("", "", "", "A", "Y", "A", "N", "N", "", "", "", 3, "ა", 1, 1, "");
        addEntry("", "", "", "A", "Y", "A", "N", "", "", "", "", 3, "ო", 1, 1, "Letter A between consonants triggers a nasal vowel /o/ sound as in 'Bran'");

        addEntry("", "", "", "", "Y", "A", "", "", "", "", "", 3, "ია", 1, 1);
        addEntry("", "", "", "", "", "A", "", "", "", "", "", 3, "ა", 1, 1);
        addEntry("", "", "", "", "", "B", "", "", "", "", "", 3, "ბ", 1, 1);
        addEntry("", "", "", "", "", "D", "", "", "", "", "", 3, "დ", 1, 1);
        addEntry("", "", "", "", "Y", "E", "", "", "", "", "", 3, "იე", 1, 1);
        addEntry("", "", "", "", "", "E", "", "", "", "", "", 3, "ე", 1, 1);
        addEntry("", "", "", "", "Y", "Ẹ", "", "", "", "", "", 3, "იე", 1, 1);
        addEntry("", "", "", "", "", "Ẹ", "", "", "", "", "", 3, "ე", 1, 1);
        addEntry("", "", "", "", "", "F", "", "", "", "", "", 3, "ფ", 1, 1);
        addEntry("", "", "", "", "", "G", "", "", "", "", "", 3, "გ", 1, 1);
        addEntry("", "", "", "", "", "GB", "", "", "", "", "", 3, "ბ", 1, 1);
        addEntry("", "", "", "", "", "H", "", "", "", "", "", 3, "ჰ", 1, 1);
        addEntry("", "", "", "", "", "I", "", "", "", "", "", 3, "ი", 1, 1);
        addEntry("", "", "", "", "", "J", "", "", "", "", "", 3, "ჯ", 1, 1);
        addEntry("", "", "", "", "", "K", "", "", "", "", "", 3, "კ", 1, 1); // has up to 3 variants
        addEntry("", "", "", "", "", "L", "", "", "", "", "", 3, "ლ", 1, 1);
        addEntry("", "", "", "", "", "M", "", "", "", "", "", 3, "მ", 1, 1);
        addEntry("", "", "", "", "N", "N", "", "", "", "", "", 3, "", 1, 1);
        addEntry("", "", "", "", "", "N", "", "", "", "", "", 3, "ნ", 1, 1);
        addEntry("", "", "", "", "Y", "O", "", "", "", "", "", 3, "იო", 1, 1);
        addEntry("", "", "", "", "", "O", "", "", "", "", "", 3, "ო", 1, 1);
        addEntry("", "", "", "", "Y", "Ọ", "", "", "", "", "", 3, "იო", 1, 1);
        addEntry("", "", "", "", "", "Ọ", "", "", "", "", "", 3, "ო", 1, 1);
        addEntry("", "", "", "", "", "P", "", "", "", "", "", 3, "პ", 1, 1);
        addEntry("", "", "", "", "", "R", "", "", "", "", "", 3, "რ", 1, 1);
        addEntry("", "", "", "", "", "Ṣ", "", "", "", "", "", 3, "შ", 1, 1);
        addEntry("", "", "", "", "", "S", "", "", "", "", "", 3, "ს", 1, 1);
        addEntry("", "", "", "", "", "T", "", "", "", "", "", 3, "თ", 1, 1); //Has other variants

        addEntry("", "", "", "", "", "U", "A", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");
        addEntry("", "", "", "", "", "U", "E", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");
        addEntry("", "", "", "", "", "U", "Ẹ", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");
        addEntry("", "", "", "", "", "U", "I", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");
        addEntry("", "", "", "", "", "U", "O", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");
        addEntry("", "", "", "", "", "U", "Ọ", "", "", "", "", 3, "ვ", 1, 1, "/w/ as in 'choir'");

        addEntry("", "", "", "", "", "U", "", "", "", "", "", 3, "უ", 1, 1);
        addEntry("", "", "", "", "", "W", "", "", "", "", "", 3, "ვ", 1, 1);
        addEntry("", "", "", "", "", "Y", "", "", "", "", "", 3, "", 1, 1);

        resolve()
    })

}