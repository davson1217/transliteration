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

const renderDecisionTreePrediction = (result, previousPrediction = "") => {
  document.querySelector(".result").style.display = "block";

  const mlWrapper = document.querySelector("#machineLearningResult");
  if (previousPrediction) {
    document.getElementById("_prediction").innerHTML = `Prediction: ${result.prediction}`;
    document.getElementById("_depthNode").innerHTML = `Tree Depth: ${result.depth}`;
    document.getElementById("_leavesNode").innerHTML = `Decision Leaves: ${result.leaves}`;
    return
  }
  //Depth
  const depthNode = document.createElement('p')
  depthNode.setAttribute("id", "_depthNode")
  const depthText = document.createTextNode(`Tree Depth: ${result.depth}`);
  depthNode.appendChild(depthText);
  //Prediction
  const predictionNode = document.createElement('p')
  predictionNode.setAttribute("id", "_prediction");
  const predictionText = document.createTextNode(`Prediction: ${result.prediction}`);
  predictionNode.appendChild(predictionText);
  //Leaves
  const leavesNode = document.createElement('p')
  leavesNode.setAttribute("id", "_leavesNode");
  const leavesText = document.createTextNode(`Decision Leaves: ${result.leaves}`);
  leavesNode.appendChild(leavesText);
  // Viz Button
  const vizBtn = document.createElement('button');
  vizBtn.setAttribute("id", "_vizBtn")
  const btnText = document.createTextNode("Visualize Tree");
  vizBtn.appendChild(btnText)
  vizBtn.addEventListener('click', visualizeTree)

  //Append Nodes to ML result placeholder
  mlWrapper.appendChild(predictionNode)
  mlWrapper.appendChild(depthNode)
  mlWrapper.appendChild(leavesNode)
  mlWrapper.appendChild(vizBtn)
}

const updateUIForRequest = (prediction, error, previousPrediction) => {
  // hide previous result on screen if there is one
  if (previousPrediction) {
    document.getElementById("_prediction").style.display = 'none';
    document.getElementById("_depthNode").style.display = 'none';
    document.getElementById("_leavesNode").style.display = 'none';
    // document.getElementById("_vizBtn").style.display = 'none';
  }else {
    if (document.getElementById("_prediction"))document.getElementById("_prediction").style.display = 'block';
    if (document.getElementById("_depthNode"))document.getElementById("_depthNode").style.display = 'block';
    if (document.getElementById("_leavesNode"))document.getElementById("_leavesNode").style.display = 'block';
    // if (document.getElementById("_vizBtn"))document.getElementById("_vizBtn").style.display = 'block';
  }

  if (prediction) {
    document.querySelector("#machineLearningResult #loading").style.display = 'none'
    return;
  }else if (error) {
    document.querySelector("#machineLearningResult #loading").textContent= 'The CART server could not process a prediction'
    return;
  }
  document.querySelector("#machineLearningResult #loading").style.display = 'block'
}