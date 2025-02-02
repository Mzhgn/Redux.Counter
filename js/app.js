const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

// Declare Counter Reducer
const counterReducer = (action) => {
  switch (action) {
    case "INCREMENT": {
    }
    case "DECREMENT": {
    }
    case "SET_ZERO": {
    }
    default: {
    }
  }
};

const store = Redux.createStore(counterReducer);
