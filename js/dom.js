
const setResult = (data) => {
    const resultContainer = document.querySelector(".result");
    let table = document.querySelector("table");
    for (const [key, value = ''] of Object.entries(data)) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td = document.createElement('td');
        const headerText = document.createTextNode(key.replace("_", " "));
        th.appendChild(headerText);
        const dataText = document.createTextNode(value)
        td.appendChild(dataText)
        tr.appendChild(th)
        tr.appendChild(td)
        table.appendChild(tr);

        console.log(tr)
    }
}