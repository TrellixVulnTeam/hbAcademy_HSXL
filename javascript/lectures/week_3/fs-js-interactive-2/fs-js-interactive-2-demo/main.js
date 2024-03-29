// const { default: axios } = require("axios")

const { default: axios } = require("axios")
const { response } = require("express")

console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = "http://localhost:4000";

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

/** Sending a GET request to our server to grab all charactrs
 * Writing an axios.get request to our /characters endpoint on the server.js
 */
// Works ===
function getAllChars() {
  axios.get(`${baseURL}/characters`)
    .then((response) => {
      console.log(response.data);
      // let's store our response.data into a variable to keep track of it.
      const characterArr = response.data;
      // iterate through our characters array
      for (let i = 0; i < characterArr.length; i++) {
        // call the function for each returned character
        createCharacterCard(characterArr[i]);
      }
    })
}

function getOneChar(event) {
  clearCharacters();

  axios.get(`${baseURL}/character/${event.target.id}`)
    .then((response) => {
      console.log(response.data);
      const characterObj = response.data;
      createCharacterCard(characterObj);
    })
};

function createNewChar(event) {
  event.preventDefault();

  clearCharacters();
  let newLikes = [...newLikesText.value/split(',')];
}

// Step 3: Assign Event Listeners
getAllBtn.addEventListener("click", getAllChars);

for(let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener("click", getOneChar);
}