console.log('javascript has loaded')

const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');

// counter
const counterText = document.querySelector("#counter");

const resetBtn = document.querySelector("#reset-btn");

const themeBtns = document.querySelectorAll("#theme-buttons");

const inputBox = document.querySelector("#input-box");
const inputBtn = document.querySelector("#input-submit")

let count = 0;

function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}

function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;
}

function reset() {
    count = 0;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event) {
    //accessing the event functionality
    // grabs our devmount default stuff
    console.log(event.target.textContent);
    // change styling
    let theme = event.target.textContent;

    document.querySelector('body').className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

function logInputValue() {
    console.log(inputBox.value);
}


// STEP 3: ELEMENT and FUNCITON with event listenner
plusBtn.addEventListener("click", increase);

minusBtn.addEventListener("click", decrease);

resetBtn.addEventListener("click", reset);

resetBtn.addEventListener("click", logInputValue);

// event 
for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener("click", selectTheme);
}