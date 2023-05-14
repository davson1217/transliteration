const getSyllablesText = (tokens) => {
  return tokens.toString().replaceAll(",", " - ");
};

const setResult = (data, resultType = "") => {
  const resultContainer = document.querySelector(".result");
  let table = document.querySelector("table");
  for (const [key, value = ""] of Object.entries(data)) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const td = document.createElement("td");
    if (resultType === "IPA") {
      let headerText = key.replaceAll("_", " ");
      let headerTextNode = document.createTextNode(headerText);
      let dataText = document.createTextNode(value);

      if (headerText === "Syllables") {
        headerText += ` (${value.length})`;
        headerTextNode = document.createTextNode(headerText);
        dataText = document.createTextNode(getSyllablesText(value));
      } else if (headerText === "Transcription") {
        dataText = document.createTextNode(value.toUpperCase());
      } else if (headerText === "Execution Time") {
        dataText = document.createTextNode(parseFloat(value).toFixed(2));
      }

      th.appendChild(headerTextNode);
      td.appendChild(dataText);
      tr.appendChild(th);
      tr.appendChild(td);
      table.appendChild(tr);
    }
  }
};
