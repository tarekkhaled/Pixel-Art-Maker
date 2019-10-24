// Select color 
const colorPicked = document.querySelector('#colorPicker') // color picked 
// Select height  input
const heightPicked = document.querySelector('#inputHeight') // this will be tr in table 
// Select width input
const widthPicked = document.querySelector('#inputWidth') // this will be td  in table 
// Select table parent 
const tableParent = document.querySelector('#pixelCanvas')

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit',makeGrid) 

function makeGrid(e) {
    // Prevent Default Refershing After submitted button clicked
    e.preventDefault();

    // Create The Table with height,width entered by the user
    createTheTable();
    
    // Use Event Delegation to reduce the number of event listeners by Selecting the parent element
    tableParent.addEventListener('click',updateBoxColor);
}

    // Check if the user clicked on the row then update it's color
const updateBoxColor = ({target : {nodeName,style}}) =>{
    if (nodeName == "TD") {
        style.background = `${colorPicked.value}`
    }

} 

const createTheTable = () => {
    for (let i = 0 ; i < heightPicked.value ; i++) {
        let tableRow = document.createElement('tr') // number of columns
        for (let j = 0 ; j < widthPicked.value ; j++) {
            let tableData = document.createElement('td')
            tableRow.append(tableData) 
        }
        tableParent.appendChild(tableRow)
    }
}


