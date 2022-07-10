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

//store weeks-spent in a variable
//create a function that updates weeks-spent based on current date

const startDate = new Date("1990-05-29");
const currentDate = new Date();
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
const milisecondsPerSecond = 1000;
const daysPerWeek = 7;

const milisecondsSpent = currentDate.valueOf() - startDate.valueOf();

//calculate miliseconds per day to convert miliseconds to weeks spent
const daysSpent =
  milisecondsSpent /
  (hoursPerDay * minutesPerHour * secondsPerMinute * milisecondsPerSecond);

const weeksSpent = daysSpent / daysPerWeek;

const states = {
  "week-spent": (i) => i < weeksSpent,
  "week-open": (i) => !states["week-spent"](i),
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

    // for (let k of Object.keys(states)) {
    //   if (states[k](i)) {
    //     square.classList.add(k);
    //   }
    // }
    if (states["week-spent"](i)) {
      square.classList.add("week-spent");
    }
    if (states["week-open"](i)) {
      square.classList.add("week-open");
    }
  }

  //     if (layout[i] === 0) {
  //       squares[i].classList.add("week-spent");
  //     } else if (layout[i] === 1) {
  //       squares[1].classList.add("week-open");
  //     }
  //   }
}
createGrid();
