window.onload = () => {
  const sourceLanguage = document.querySelector("#sourceLang");
  const sourceInputEl = document.querySelector("#sourceInput");
  const route = document.querySelector("#route");
  const targetLanguage = document.querySelector("#targetLang");
  const routeOptions = document.querySelector("label.routeOptionsLabel");
  const transliterateBtn = document.querySelector(".transliteration button");
  const methodEl = document.querySelector("#method");
  const resultBlock = document.querySelector(".result");
  const langProcedure = document.querySelector("#langProcedure");
  const ipaProcedure = document.querySelector("#ipaProcedure");
  let currentResult = '';

  let targetLangValue = targetLanguage.value;
  let routeValue = route.value;

  //  ================
  route.addEventListener("change", (e) =>
    onRouteChangeHandler(e, routeOptions, routeValue)
  );

  routeOptions.addEventListener("change", onRouteOptionChange);

  sourceLanguage.addEventListener("change", (e) =>
    onSourceLangChange(e, targetLanguage, route, routeOptions)
  );

  sourceInputEl.addEventListener("keyup", (e) => {
    onSourceInputChange(e, sourceInputEl);
    if (e.keyCode === 13) {
      onTransliterateClick(
        sourceLanguage.value,
        targetLangValue,
        sourceInputEl.value,
        route.value,
        methodEl.value
      );
    }
  });

  transliterateBtn.addEventListener("click", () =>
    onTransliterateClick(
      sourceLanguage.value,
      targetLangValue,
      sourceInputEl.value,
      route.value,
      methodEl.value
    )
  );

  ipaProcedure.style.display = "none";
  routeOptions.style.display = "none";
  resultBlock.style.display = "none";
  langProcedure.style.display = "none";
};
