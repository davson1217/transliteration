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

const visualizeTree = () => {
  sessionStorage.setItem("image", svg_tree);
  window.open('/MT/tree.html','_blank', 'width=800, height=1000');
}

const renderDecisionTreePrediction = (result) => {
  console.log("renderDecisionTreePrediction", result)
  document.querySelector(".result").style.display = "block";

  const mlWrapper = document.querySelector("#machineLearningResult");

  //Depth
  const depthNode = document.createElement('p')
  const depthText = document.createTextNode(`Tree Depth: ${result.depth}`);
  depthNode.appendChild(depthText)
  //Prediction
  const predictionNode = document.createElement('p')
  const predictionText = document.createTextNode(`Prediction: ${result.prediction}`);
  predictionNode.appendChild(predictionText)
  //Leaves
  const leavesNode = document.createElement('p')
  const leavesText = document.createTextNode(`Decision Leaves: ${result.leaves}`);
  leavesNode.appendChild(leavesText)
  // Viz Button
  const vizBtn = document.createElement('button')
  const btnText = document.createTextNode("Visualize Tree");
  vizBtn.appendChild(btnText)
  vizBtn.addEventListener('click', visualizeTree)

  //Append Nodes to ML result placeholder
  mlWrapper.appendChild(predictionNode)
  mlWrapper.appendChild(depthNode)
  mlWrapper.appendChild(leavesNode)
  mlWrapper.appendChild(vizBtn)


}