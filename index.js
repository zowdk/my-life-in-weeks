const width = 52;
const grid = document.querySelector(".grid");

let squares = [];

// 52 * 100 = 5200
// 0 - week spent
// 1 - week open
// 2 - accomplishments
// 3 - in school
// 4 - working
// 5 - training gymnastics
// 6 - learning french
// 7 - learning danish
// 8 - learning coding
// 9 - living in US
// 9b - living in CA
// 9c - living in Denmark

// const layout = [];
// a map of classes (keys) and functions as values
// for each class/function pair, set the class on the square
// if the function returns true for fn(i)
const states = {
  "week-spent": (i) => i < 500,
};

//create grid
function createGrid() {
  squares = [];
  grid.innerHTML = "";
  for (i = 0; i < 5200; i++) {
    //create a square
    const square = document.createElement("div");
    //put square into grid
    grid.appendChild(square);
    //put square in squares array
    squares.push(square);
    squares[i].classList.add("week-spent");
  }

  //     if (layout[i] === 0) {
  //       squares[i].classList.add("week-spent");
  //     } else if (layout[i] === 1) {
  //       squares[1].classList.add("week-open");
  //     }
  //   }
}
createGrid();
