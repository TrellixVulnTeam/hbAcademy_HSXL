/*
  Some of the following questions will ask you to use
  arrow function syntax. On the problems that don't,
  feel free to practice with any syntax.
*/


////////////////// PROBLEM 1 ////////////////////     -- completed --
/*
  Create a function called helloWorld which simply console logs 'Hello, World!'
  Call the function.
*/
//CODE HERE
const helloWorld = () => {
  console.log("Hello, World!");
};
// helloWorld();
////////////////// PROBLEM 2 ////////////////////   -- completed --
/*
    Write an arrow function called 'jsNinja' that returns the string: 'I am a JavaScript ninja!'
*/
//CODE HERE
const jsNinja = () => {
  return "I am a JavaScript ninja!";
};
// console.log(jsNinja());

////////////////// PROBLEM 3 ////////////////////     -- completed --
/*
  Create a function called printName which takes in a person's name and console logs it.
  Ex. If 'Cameron' were passed in as the argument, Cameron would be console logged.
  Call the function, passing in an argument.
*/
//CODE HERE
const printName =(personName) => {
  console.log(personName);
};
let personName = 'Daniel'; // reusable
// printName(personName);

////////////////// PROBLEM 4 ////////////////////     -- completed --
/*
  Create a function called greeting that
  accepts name as its only parameter.
  greeting should log the string 'Hello, '
  plus the value of the name parameter.
  Ex. If Jake were passed in as the argument, the function would log 'Hello, Jake'
  Make sure to call your function and pass in an argument.
*/
//CODE HERE
const greeting = (name) => {
  console.log(`Hello, ${name}`);
};
// greeting(personName);
////////////////// PROBLEM 5 ////////////////////     -- completed --

/*
    Write an arrow function called 'compareNums' that takes in 2 parameters, 
    which will be numbers. 
    The function should return the bigger number. 
    If the numbers are the same, just return the number.

    Brownie points if you use a ternary statement (only spend significant time on this if you have wiggle room)
*/
//CODE HERE
const compareNums = (num1, num2) => {

  // if(num1 > num2) {
  //   return `${num1}: num1 is bigger yay!`; // NUM1 IS BIGGER
  // } else if(num2 > num1) {
  //   return `${num2}: num2 is bigger`; // NUM2 IS BIGGER
  // } else {
  //   return 'THEY ARE THE SAME'; // they are the SAME
  // }
};

// console.log(compareNums(3, 5));
// console.log(compareNums(10, 3));
////////////////// PROBLEM 6 ////////////////////     -- completed --
/*
  Create a function called add that takes in two parameters 
  Inside, convert the arguments to be numbers (just in case strings get sent in)
  The add function should RETURN the two parameters added together.
  Create a variable outside the function called 'sum' and set it equal to add invoked (called), passing in 2 arguments.
*/
//CODE HERE
const add = (num1, num2) => {
  let number1 = parseInt(num1);
  let number2 = parseInt(num2);
  // let summize = number1 + number2;
  return number1 + number2;
};

let sum = add(3, 3); // expected 6
let sum2 = add('3', '6'); // expected 9
// console.log(sum);
// console.log(sum2);

////////////////// PROBLEM 7 ////////////////////

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaim = function(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
// console.log('declaration')

// console.log('expression'); // answer



////////////////// PROBLEM 8 ////////////////////   -- COMPLETED --

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

const exclaimTwo = str => {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow') // answer
// console.log('declaration')
// console.log('expression')

/*
  Rewrite exclaimTwo to be a single line.
  Call your new function exclaimThree

  Brownie points if you use a template string
*/
const exclaimThree = str => {return `${str.toUpperCase()} + !!!`}
// console.log(exclaimThree('HELLLLOOOOOO'));


////////////////// PROBLEM 9 ////////////////////   -- completed --

/*
  Which syntax was used to create the function below?
  Uncomment the correct `console.log` underneath.
*/

function exclaimFour(str) {
  return str.toUpperCase() + '!!!'
}

// console.log('arrow')
// console.log('declaration'); // I HOPE SO TOOO
// console.log('expression')


////////////////// PROBLEM 10 ////////////////////    -- completed --
/*
  Write a function called nameCheck that takes in a name parameter.
  nameCheck should check if the name equals 'Steven'. If it does, return 'What is up Steven?'
  If the name parameter is equal to Bryan, return 'Hey Bryan!'
  If the name parameter is anything else, return 'Cool name, NAMEPARAM' (with NAMEPARAM being the value of the name parameter being passed in).
  Create a variable called 'nameGreeting' and set it equal to your function invoked (called) passing in an argument.
*/

//CODE HERE
function nameCheck (NAMEPARAM) {
  if(NAMEPARAM === 'Steven') {
    return 'What is up Steven?';
  } else if(NAMEPARAM === 'Bryan') {
    return 'HEYYY Bryan!';
  } else {
    return `Cool name, ${NAMEPARAM}`
  }
}
let nameGreeting = nameCheck('Daniel');
// console.log(nameGreeting);

////////////////// PROBLEM 11 ////////////////////    -- completed --
/*
  Write a function called faveColorFinder that takes in one parameter called color (which will be a string).
  If the passed in color equals 'red', return 'red is a great color'
  If the passed in color equals 'green', return 'green is a solid favorite color'
  If the passed in color equals 'black', return 'so trendy'
  Otherwise, you should return the string 'you need to evaluate your favorite color choice'
  Create a variable called 'colorRating' and set it equal to faveColorFinder invoked (called), passing in an argument.
*/

//CODE HERE
const faveColorFinder = (color) => {
  if(color === 'red') return 'red is a great color';
  else if(color === 'green') return 'green is a solid favorite color';
  else if (color === 'black') return 'so trendy! oououo lala';
  else return 'you need to evaluate your favorite color choice';
};

let colorRating = faveColorFinder('purple');
// console.log(colorRating);


////////////////// PROBLEM 12 ////////////////////    -- compelted --
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']
/*
  Create a function called printAllNames that takes 
  in a single argument (an array of names).
  Using a for loop, iterate over that array and console log each name.
  Call the function, passing in the `namesArr` array (above).
*/
const printAllNames = (arrayStuff) => {
  for(let i = 0; i < arrayStuff.length; i++) {
    console.log(arrayStuff[i]) // this refers to each name in the array
  }
}

// printAllNames(namesArr);

//CODE HERE


////////////////// PROBLEM 13 ////////////////////
/*
  Create a function called thatsOdd that takes in a single argument (a number).
  Using conditional logic, if the number is even, return 'That's not odd!'
  Otherwise, return 'That is odd indeed!'
  Outside the function, create a variable called `oddChecker` and set it equal to your function invoked, making sure to pass in an argument.
*/
// I guess my microphone is not working, but I wil type to you, so helloooooo hahaha
//CODE HERE


////////////////// PROBLEM 14 ////////////////////    -- completed!--
// yeah it is pretty similar to the other things we have done :D

/*
    Write a one line arrow function called 'bestMovie' that takes in one parameter,
    which will be a string of a movie title. 
    The function should return the string: 'MOVEIEPARAM is the best movie ever!'. 
    For example, if we passed in 'Sharknado', 
    we would expect the function to return 'Sharknado is the best movie ever!'
*/
//CODE HERE, hahahah wow thank you did not see that!
const bestMovie = (MOVEIEPARAM) => {
  return `${MOVEIEPARAM} is the best movie ever! MAybe`;
}
// console.log(bestMovie('Finding Nemo'));

////////////////// PROBLEM 15 ////////////////////    -- completed --
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr',  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. 
  Return the answers array inside of the function to a variable called `arrayEvaluator`.
*/
// we are creating a new array, this will LIVE inside the new function and only in there
// we then will store inside that NEW array the word 'big' for every time the number is > 100
// if smaller, we store 'small', 1 array but it will store 'big' or 'small' depending on our if statements
//CODE HERE
// for loop? yesssss lets do it!
const bigOrSmall = (arr) => {
  let answers = [] // this is the empty array for our 'big' or 'small'
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 100) {
      answers.push('big'); // if bigger, push big into answers array
    } else {
      answers.push('small') // else it is === 100 or smaller, so push 'small'
    }
  }
  return answers // we have to now return our new array? oh wait, I did not need to copy the original array
  // so we learned something new for no reason :D

};
// console.log(bigOrSmall(bigOrSmallArray));
// passing the array from line 248.

// it makes sense yes? We have done these things, we are putting them together
// yes!


////////////////// PROBLEM 16 ////////////////////    -- completed -- hahaha
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/
// so I have to look up how SPLICE works, split, is different. I don't know splice though it is okay 
// return the new contestant array WITHOUT Glimmer.
//CODE HERE
const theEliminator = (contestants, loser) => {
  
  for(let i = 0; i < contestants.length; i++) {
    if(contestants[i] === loser) {
      // remove that name from array somehow with .splice()
      // start or where to split?
      // contestants[i] === Glimmer, so we know the index position i is where Glimmer exists.
      // So we want to go into the array and go to that exact position, to cut it out of there.
      // It may or may not work, we have to test it haha, NOOOOOOOO
      // reading the thing more, maybe it replaces it? maybe I leave it empty
      // yes maybe this deletes it, YAYAYAYAYA, no more Glimmer we didi it!!
      contestants.splice(i, 1); // I shall have to remember this now
    }
  }
  // this will now be modified, I am looking it up haha
  //splice(start, deleteCount, item1)
  return contestants 
}
// console.log(theEliminator(contestants, loser));


////////////////// PROBLEM 17 ////////////////////    -- completed --
let sampleString = "Hi, my name is Kylo."
/*
  Write a function that takes in one argument, a string. The function should then console.log that string, in entirely uppercase characters.
  Invoke the function, passing in the sampleString (above).
*/

//CODE HERE,      its no problemooo
const newString = (sample) => {
  console.log(sample.toUpperCase());
}
// so it should print it out ALL UPPER CASE, wohoo 
// ready to continue?? okiedoke! let me check if they are calling us back on discord
// i asked them, we will see what they say whenever they message me
// newString(sampleString);

////////////////// PROBLEM 18 ////////////////////    -- completed --
/*
  Write a function called emailCheck that takes in
  one parameter - email.
  Inside the function, convert the email param into 
  a string and trim off any excess whitespace.
  Check to make sure the email contains an '@' symbol.
  If it does, return 'email verified' and if doesn't, 
  return 'must provide a valid email address'
*/
//CODEHERE
// * it wants us to use .trim(), to delete the whitespace or ' '
// * it wants us to check if it .includes('@')
// if true, return email verified
// else  return 'must provide a valid email address'.
const emailCheck = (email) => {
  //aaaaah, okay parseInt and String are the things. That is important
  // convert the email input into a string, may be to trim off the whitespace
  // I am storing the string version inside of the variable temp,
  let temp = String(email);
  // It looks like .trim() does it automatically, removes extra spaces IF they are there
  temp.trim();
  // .includes('@'), brb I am looking that up tooooo
  if(temp.includes('@')) {
    return 'email verified';
  } else return 'must provide a valid email address';
}
// okay lets test an easy one, and then do a weird one
// console.log(emailCheck('test@test.com')) // return email verifed
// console.log(emailCheck('testtest.com')) // return email verifed
// it looks like we are completed

// yes i agree, plenty of Google searching helps!


////////////////// PROBLEM 19 ////////////////////     -- completed -
/*
  Write a function, naming it whatever you believe to be appropriate, that buys as many chocolate frogs as possible with a certain amount of gold. Each chocolate frog costs 3 gold. Your function should take in a single parameter, which is the amount of gold you are willing to spend. Your function should return a total amount of chocolate frogs you were able to purchase.
  Create a variable called `totalFrogs` and set it equal to your function invoked, passing in the amount of gold you are willing to spend. // here is what it is asking for
*/
//CODE HERE
/**
 * 1) our parameter = the money we want to spend
 * 2) the function has a default variable of frog = 3, we are lucky it is a default value given! wooho
 * it looks like we are doing ourMoney / frog
 * 3) return that amount we are able to buy, return ourMoney / frog. should be how many frogs we can buy
 * we are ready, I like to do psuedocode for the harder stuff, we talk it out
 * that is sudo code, we reaad what we have, and we understand what we need to d
 * then we code it. it is our list if things, so really we can break it down into steps
 * 4) technically is the let totalFrogs
 */
// step 1 completed
const buyingChocolates = (bankAccount) => {
  // step 2
  eachFrog = 3; // cost 3 gold
  // step 3
  return bankAccount / eachFrog; // should return the amount we can purchase, 30 / 3 = 10
}

// amount of frogs we can purchase, good catch!!!
// step 4
let totalFrogs = buyingChocolates(30); // expected 10 frogs; or 10. 30/3=10 
console.log(`I can buy ${totalFrogs} frogs`); // nice!

// run it again?
// if you want to, I have no problems with that, no worries!

////////////////// PROBLEM 20 ////////////////////    -- completed --
/*
  You might have noticed a slight bug in the previous problem. If you were to pass in 4 gold, the function would return to you 1.3333... However, you can't really go to a store and by 1.333 products. You would just be able to purchase 1 product. Re-write the function you used in the previous problem (give it the same name, just add a 2 to the end of it) that fixes this bug. Invoke the function and store the returned value to a variable called `totalFrogs2`.
*/
/** if our bank account === 4, and we do 4/3 === 1.333 and we cannot buy 1 and 1/3 of something
 * so to fix that, they say if 4, we do (4+2)/3 === 2; to fix it?
 * I guess we can do that, even though I would do something else
 */

// Sure that's no problem with me! I'm gonna be doing them with the stream, we have 20 minutes before the Zoom
// I named it Chocolato and Froggos 
//CODE HERE
const buyingChocolato = (bankAccount) => {
  // step 2
  eachFrog = 3; // cost 3 gold
  // step 3
  let temp = 0;
  if (bankAccount === 4) {
    return (bankAccount+2) / eachFrog
  } // otherwise this will not happen and we solve the regular way
  return bankAccount / eachFrog;
  // return bankAccount / eachFrog; // should return the amount we can purchase, 30 / 3 = 10
}

// amount of frogs we can purchase, good catch!!!
// step 4
let totalFroggos = buyingChocolato(4); // expected 10 frogs; or 10. 30/3=10 
// looks like it is fixed
console.log(`I can buy ${totalFroggos} frogs`); // nice!



////////////////// PROBLEM 21 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9] // expected false, 4,7,5,6,8
// sorted it becomes 4,5,6,7,8
/*
  Write a function that takes in an array of numbers as an argument. In the body of the function, write logic to determine if the array is in ascending order. The function should return true, if it is sorted in ascending order, false if it is not. Create a variable, `arrayIsAscending` and set it equal to your function invoked. Use the sample array to test this function.
*/
/** Parameter is an array, we want to check if it is in ascending oreder, sounds sorted...
 * if it is ascending, return true (now says if sorted in ascending order)
 * else return false 
 * variable set equal to the function. 
 */
//CODE HERE
const sortedArray = (arr) => {
  // to check if it is sorted, we can use JavaScript.
  // we can use .. well it is in an array already, so we can use sort
  // we can make a copy of the array and sort that array, then compare the new array to the original.
  // if the same, then true, else false
  // let me look up .sort()
  // .sorteD() returns the reference of the area, NOW SORTED, so we make a copy first;
  // me tooo no worries
  newArray = arr.slice(); // storing out given array

  newArray.sort(); // this will sort the array for us. So the sorted version is now newArray
  // MY NEXT GUESS WOULD BE .. TO SORT THEM .. THEN CREATE A FOR LOOP LIKE WE DID THIS MORNING
  // that would be the fix, but we also have class soon
  if(arr === newArray) {
    return true 
  }
  else {
    return false
  }
  // yeah you are right, it starts now! We made great progres! Good job!
  // No problem! I had fun, thank you for coding with me! See you in class! Bye!
}
// i think we are ready to test if we are corect or not
// hmmm hmmmmmm

let arrayIsAscending = sortedArray(sampleArray); 
console.log(arrayIsAscending) // expected false, using stored variable -- wrong .. hmm ..
// maybe true because of the sort() what is returned
let sampleArray2 = [1,2,3,5] // (sorted) => 1,2,3,5 != 1,2,5,3 <== ( original )
console.log(sortedArray(sampleArray2)) // expected true, using function invoking with our new array

////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

/*
  There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck.
  All within different scopes.
  Given the functions and variables above, edit the arrays below to contain only the appropriate variable names (as strings).
*/

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = []

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = []

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = []

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = []