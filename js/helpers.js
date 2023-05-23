const setResultOutput = (
  transcription,
  sourceLanguage,
  sourceValue,
  method,
  params,
  clearResults
) => {
  const resultBlock = document.querySelector(".result");
  const langProcedure = document.querySelector("#langProcedure");
  const intermediateAdaptation = document.getElementById("hubAdaptation");
  const targetValue = document.getElementById("targetName");
  const ipaProcedure = document.querySelector("#ipaProcedure");
  let syllables = document.getElementById("syllables");
  let sipa = document.getElementById("sipa");
  let tipa = document.getElementById("tipa");
  let tg = document.getElementById("tg");
  resultBlock.style.display = "block";

  if (clearResults) {
    targetValue.textContent = '';
    intermediateAdaptation.textContent = '';
    syllables.textContent = '';
    sipa.textContent = '';
    tipa.textContent = '';
    tg.textContent = '';

    return
  }

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
    if (method !== 'direct') {//i.e., Intermediate Languages
      intermediateAdaptation.textContent = `${method} adaptation: ${params.hubValue}`;
      targetValue.textContent = `Final adaptation: ${transcription}`;
    }else {
      targetValue.textContent = `${transcription}`;
    }
  }
};

const onSourceLangChange = (event, targetLanguage, route, routeOptions) => {
  const sourceLangValue = event.target.value;
  if (RulesEntry.length) RulesEntry = [];
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
  console.log("__CHANGE__")
  const { value } = event.target;
  if (/\d/.test(value)) {
    alert("Only alphabets allowed");
    sourceInput.value = "";
    return false;
  }
  if (RulesEntry.length) {
    RulesEntry = []
  }
};

const onRouteChangeHandler = (event, routeOptions, routeValue) => {
  RulesEntry = [];
  routeValue = event.target.value;
  if (routeValue === "intermediate") {
    routeOptions.style.display = "block";
  } else {
    routeOptions.style.display = "none";
  }
};
const onRouteOptionChange = () => {};
const onTransliterateClick = async (
  sourceLang,
  targetLang,
  inputValue,
  route,
  method
) => {
  if (!inputValue || inputValue === sessionStorage.getItem("currentResult")) return;
  RulesEntry = [];
  setResultOutput('','','','',{}, true)
  //create error handler on input.
  // const normalizedInput = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const glyph = /[\u0300-\u036f]/g;
  const normalizedInput = inputValue.replaceAll(glyph, '');
  console.log("normalizedInput ==>>", normalizedInput);
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
              processTranscription(normalizedInput);
            endTime = performance.now();
            const execTime = endTime - startTime;
            setResultOutput(transliteration, sl, inputValue, 'direct');
          })
          .catch((error) =>
            console.log("Error while transcribing Yoruba to Lithuanian", error)
          );
        return;
      } else {
        console.log("=====Direct Route | Machine Learning ====")
        if (document.querySelector("#machineLearningResult p")) {
          return
        }
        const response = await httpRequest({name: normalizedInput}, 'direct');
        renderDecisionTreePrediction(response)
      }
      return true;
    } else {
      const intermediateOption = document.querySelector("#routeOptions").value;
      if (intermediateOption === "ipa") {
        if (method === "rules") {
          startTime = performance.now();
          console.log("input value ___", inputValue)
          const tokens = syllabify(normalizedInput);
          const sipa = mapTokensToIPA(tokens);
          const { tipa, tgIndices } = mapSipaTipa(sipa.TIPAIndices);
          let target = mapTipaTarget(tgIndices);
          console.log("TARGET", target)
          if (yoConsonants.includes(target[target.length - 1].toUpperCase())) {
            target += "AS"
          }
          sessionStorage.setItem("currentResult", target);
          endTime = performance.now();
          const execTime = endTime - startTime;
          const data = {
            Source_IPA: sipa.ipaValues,
            Target_IPA: tipa,
            Syllables: tokens,
            Transcription: target,
            Execution_Time: execTime,
          };
          // setResult(data, "IPA");
          setResultOutput("", sl, inputValue, intermediateOption, {
            sipa: sipa.ipaValues.replace("s/g", ""),
            tipa,
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
        if (method === "rules") {
          let englishAdaptation = ''
          populateRulesYO_EN()
            .then(() => {
              const { transliteration, essentialTheories } =
                processTranscription(normalizedInput);
              englishAdaptation = transliteration;

              return transliteration;
            })
            .then((english) => {
              console.log("english transliteration ==>> ", englishAdaptation)
              RulesEntry = [];
              populateRulesEN_LT();

              return english;
            })
            .then((english) => {
              const { transliteration, essentialTheories } =
                processTranscription(english);
              console.log("final transliteration", transliteration)
              setResultOutput(transliteration, sl, inputValue, 'English', {hubValue: englishAdaptation});
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
        console.log("___Georgian___")
        console.log(sourceLang, targetLang, inputValue, route, method);

        if (method === "rules") {
          populateRulesGE()
            .then(() => {
              const { transliteration, essentialTheories } =
                processTranscription(normalizedInput);
              RulesEntry = [];

              return transliteration;
            })
            .then((georgian) => {
              populateRulesGE_LT();

              console.log("georgian transliteration__", georgian);

              return georgian;
            })
            .then((georgian) => {
              const { transliteration, essentialTheories } =
                processTranscription(georgian, 'Georgian');
              console.log("transliteration__", transliteration)
              setResultOutput(transliteration, sl, inputValue,'Georgian', {hubValue: georgian})
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
