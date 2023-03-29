const setResultOutput = (
  transcription,
  sourceLanguage,
  sourceValue,
  method,
  params
) => {
  const resultBlock = document.querySelector(".result");
  const langProcedure = document.querySelector("#langProcedure");
  const textElement = document.getElementById("text");
  const sourceNameElement = document.getElementById("sourceName");
  const targetValue = document.getElementById("targetName");
  const ipaProcedure = document.querySelector("#ipaProcedure");
  resultBlock.style.display = "block";

  if (method === "ipa") {
    const { tokens, sipa, tipa, target, execTime } = params;
    ipaProcedure.style.display = "block";
    document.getElementById("syllables").textContent = `The source word has ${
      tokens.length
    } syllables: ${tokens.toString().replaceAll(",", " - ")}`;
    document.getElementById("sipa").textContent = `Source IPA:  ${sipa.replace(
      "s/g",
      ""
    )}`;
    document.getElementById("tipa").textContent = `Target IPA:  ${tipa}`;
    document.getElementById(
      "tg"
    ).textContent = `Transcription:  ${target.toUpperCase()}`;
  } else {
    langProcedure.style.display = "block";
    textElement.textContent = `The ${sourceLanguage} name`;
    sourceNameElement.textContent = `${sourceValue.toUpperCase()}`;
    targetValue.textContent = `${transcription}`;
  }
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
  if (!inputValue) return;
  //create error handler on input. e.g throw error if invalid input.
  let startTime;
  let endTime;
  if (sourceLang === "yo") {
    const sl = sourceLang === "yo" ? "Yoruba" : "Lithuanian";
    if (route === "direct") {
      if (method === "rules") {
        startTime = performance.now();
        populateYo_LT_Rules()
          .then(() => {
            const { transliteration, essentialTheories } =
              processTranscription(inputValue);
            endTime = performance.now();
            const execTime = endTime - startTime;
            console.log("Performance", execTime);
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
      const intermediateOption = document.querySelector("#routeOptions").value;
      if (intermediateOption === "ipa") {
        if (method === "rules") {
          startTime = performance.now();
          const tokens = syllabify(inputValue);
          const sipa = mapTokensToIPA(tokens);
          const { tipa, tgIndices } = mapSipaTipa(sipa.TIPAIndices);
          const target = mapTipaTarget(tgIndices);
          endTime = performance.now();
          const execTime = endTime - startTime;
          // console.log("tokens", tokens);
          console.log("SIPA", sipa.ipaValues.toUpperCase());
          // console.log("Tipa", tipa);
          // console.log("Performance", execTime);
          const data = {
            source_ipa: sipa.ipaValues,
            target_ipa: tipa,
            execution_time: execTime,
            syllables: tokens,
            transcription: target
          };
          setResult(data);
          setResultOutput("", sl, inputValue, intermediateOption, {
            sipa: sipa.ipaValues.replace("s/g", ""), //.toUpperCase(),
            tipa, //: tipa.toUpperCase(),
            execTime,
            tokens,
            target,
          });
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
