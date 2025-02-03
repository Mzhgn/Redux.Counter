const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".inc");

const numberElem = document.querySelector("#num");

// Declare Counter Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "SET_ZERO": {
      return state - state;
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(counterReducer);

// Handle Evenets

decBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
  let newValue = store.getState();
  numberElem.innerHTML = newValue;

  console.log(store.getState());
});
resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "SET_ZERO" });
  let newValue = store.getState();
  numberElem.innerHTML = newValue;
});
incBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
  let newValue = store.getState();
  numberElem.innerHTML = newValue;

  console.log(store.getState());
});
