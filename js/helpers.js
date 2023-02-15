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

const onTransliterateClick = (
  sourceLang,
  targetLang,
  inputValue,
  route,
  method
) => {
  if (!inputValue) return; //alert(`Enter a ${sourceLangText} proper noun.`);
  if (sourceLang === "yo") {
    if (route === "direct") {
      if (method === "rules") {
        populateYo_LT_Rules()
          .then(() => {
            const { transliteration, essentialTheories } =
              processTranscription(inputValue);
            if (transliteration) {
              const sl = sourceLang === "yo" ? "Yoruba" : "Lithuanian";
              setResultOutput(transliteration, sl, inputValue);
            }
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
      const intermediateOption = document.querySelector("#routeOptions").value;
      if (intermediateOption === "ipa") {
      } else if (intermediateOption === "english") {
      } else {
        // Georgian
      }
    }
  } else {
    // source language is LT
  }
};
