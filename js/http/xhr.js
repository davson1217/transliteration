const path = 'http://davedev1217.pythonanywhere.com/classifier/';
const method = 'POST';
const headers = {'Content-Type': 'application/json'}
let svg_tree = ''

const httpRequest = async (data, adaptationMethod = '') => {
    const endpoint = path + adaptationMethod;
    let result = {}
    await fetch(endpoint, {headers, method, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(responseData => {
            const parsedTree = JSON.parse(responseData.viz);
            svg_tree = parsedTree.svg_image;
            // console.log("svg_tree", svg_tree)
            result = responseData
        })
        .catch(error => console.log("error => ", error))

    return result
}