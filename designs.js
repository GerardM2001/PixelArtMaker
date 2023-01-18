// Select color input
// Select size input

//Defining some varibles before I start to make my job easier.
const getSize = document.getElementById('sizePicker')
const canvas = document.getElementById('pixelCanvas')
let getColor = document.getElementById('colorPicker')
let getHeight = document.getElementById('inputHeight')
let getWidth = document.getElementById('inputWidth')

//function to clear grid once Height and Width is set
function clear() {
    const allRows = document.querySelectorAll("tr");
    allRows.forEach((row) => {
      row.remove();
    });
  }

// When size is submitted by the user, call makeGrid()

//function that creates the grid appending columns and rows together
function makeGrid(x) {
    x.preventDefault();
    clear();
    const iHeight = getHeight.value
    const iWidth = getWidth.value
    for (let x = 1; x <= iHeight; x++) {
        const rows = document.createElement('tr');
        for (let y = 1; y <= iWidth; y++) {
            const columns = document.createElement('td');
            columns.id = 'columns(x&y)'
            rows.appendChild(columns)
        }
        canvas.appendChild(rows)
    }
}

//Event that listens to submit button being clicked and creates grid
getSize.addEventListener('submit', makeGrid);
//Event that listens the users click and lets them click a cell of there choice and have there
//color shown
canvas.addEventListener('click', function(x) {
    x.target.style.backgroundColor = getColor.value;
})