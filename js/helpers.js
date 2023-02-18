const setResultOutput = (transcription, sourceLanguage, sourceValue) => {
  const resultBlock = document.querySelector(".result");
  const textElement = document.getElementById("text");
  const sourceNameElement = document.getElementById("sourceName");
  const targetValue = document.getElementById("targetName");

  resultBlock.style.display = "block";
  textElement.textContent = `The ${sourceLanguage} name`;
  sourceNameElement.textContent = `${sourceValue.toUpperCase()}`;
  targetValue.textContent = `${transcription}`;
};

const onSourceLangChange = (event, targetLanguage, route, routeOptions) => {
  const sourceLangValue = event.target.value;
  if (sourceLangValue === "yo") {
    targetLanguage.value = "Lithuanian";
    route.disabled = false;
  } else {
    route.value = "direct";
    route.disabled = true;
    route.style = "#fff";
    targetLanguage.value = "Yoruba";
    if (routeOptions) {
      routeOptions.style.display = "none";
    }
  }
};

const onSourceInputChange = (event, sourceInput) => {
  const { value } = event.target;
  if (/\d/.test(value)) {
    alert("Only alphabets allowed");
    sourceInput.value = "";
    return false;
  }
};

const onRouteChangeHandler = (event, routeOptions, routeValue) => {
  routeValue = event.target.value;
  if (routeValue === "intermediate") {
    routeOptions.style.display = "block";
  } else {
    routeOptions.style.display = "none";
  }
};

const onRouteOptionChange = (event) => {
  console.log(event.target.value);
};

const onTransliterateClick = (
  sourceLang,
  targetLang,
  inputValue,
  route,
  method
) => {
  console.log("route", route);
  if (!inputValue) return;
  if (sourceLang === "yo") {
    if (route === "direct") {
      if (method === "rules") {
        populateYo_LT_Rules()
          .then(() => {
            console.log("calling here");
            const { transliteration, essentialTheories } =
              processTranscription(inputValue);
            const sl = sourceLang === "yo" ? "Yoruba" : "Lithuanian";
            setResultOutput(transliteration, sl, inputValue);
          })
          .catch((error) =>
            console.log("Error while transcribing Yoruba to Lithuanian", error)
          );
        return;
      } else {
        // call ml direct yoruba to LT function
      }
      return true;
    } else {
      console.log(sourceLang, targetLang, inputValue, route, method);
      const intermediateOption = document.querySelector("#routeOptions").value;
      console.log("intermediateOption", intermediateOption);
      if (intermediateOption === "ipa") {
        if (method === "rules") {
          console.log("Rule based method #IPA", inputValue);
          const tokens = syllabify(inputValue);
          console.log("tokens", tokens);
        } else {
          console.log("machine learning method #IPA");
        }
        return true;
      } else if (intermediateOption === "english") {
        console.log(sourceLang, targetLang, inputValue, route, method);
        console.log("intermediateOption", intermediateOption);
        if (method === "rules") {
          console.log("Rule based method #English");
          populateRulesYO_EN()
            .then(() => {
              const { transliteration, essentialTheories } =
                processTranscription(inputValue);
              return transliteration;
            })
            .then((english) => {
              console.log("english", english);
              RulesEntry = [];
              populateRulesEN_LT();

              return english;
            })
            .then((english) => {
              const { transliteration, essentialTheories } =
                processTranscription(english);
            })
            .catch((error) =>
              console.log(
                "Error while transcribing English to Lithuanian",
                error
              )
            );
        } else {
          //ML
          console.log("machine learning method #English");
        }
      } else {
        console.log(sourceLang, targetLang, inputValue, route, method);
        console.log("intermediateOption", intermediateOption);

        if (method === "rules") {
          console.log("Rule based method #Georgian");
          populateRulesGE()
            .then(() => {
              const { transliteration, essentialTheories } =
                processTranscription(inputValue);
              return transliteration;
            })
            .then((georgian) => {
              console.log("georgian", georgian);
              RulesEntry = [];
              populateRulesGE_LT();

              return georgian;
            })
            .then((georgian) => {
              const { transliteration, essentialTheories } =
                processTranscription(georgian);
              console.log("LT transliteration", transliteration);
            })
            .catch((error) =>
              console.log(
                "Error while transcribing Georgian to Lithuanian",
                error
              )
            );
        } else {
          //ML
          console.log("machine learning method #Georgian");
        }
      }
    }
  } else {
    // source language is LT
  }
};
