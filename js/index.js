window.onload = () => {
  const sourceLanguage = document.querySelector("#sourceLang");
  const sourceInputEl = document.querySelector("#sourceInput");
  const route = document.querySelector("#route");
  const targetLanguage = document.querySelector("#targetLang");
  const routeOptions = document.querySelector("label.routeOptionsLabel");
  const transliterateBtn = document.querySelector(".transliteration button");
  const methodEl = document.querySelector("#method");
  const resultBlock = document.querySelector(".result");

  let targetLangValue = targetLanguage.value;
  let routeValue = route.value;
  let methodValue = methodEl.value;

  //  ================
  route.addEventListener("change", (e) =>
    onRouteChangeHandler(e, routeOptions, routeValue)
  );

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
        routeValue,
        methodValue
      );
    }
  });

  transliterateBtn.addEventListener("click", () =>
    onTransliterateClick(
      sourceLanguage.value,
      targetLangValue,
      sourceInputEl.value,
      routeValue,
      methodValue
    )
  );

  routeOptions.style.display = "none";
  resultBlock.style.display = "none";
};
