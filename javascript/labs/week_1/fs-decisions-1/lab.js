////////// PROBLEM 1 //////////    - COMPLETED
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
  // let lovesCode = true;
  // if(lovesCode === true) {
  //   console.log('I love to code!');
  // } else {
  //   console.log('Coding has its challenges');
  // }

// For problems 2-3 use the following lines of code:      - COMPLETED
let amyName = 'Amy'; // added for desired console.log
var amysAge = 29;
var amysBirthYear = 1991;
let brittanName = 'Brittan'; // added for desired console.log
var brittanisAge = 34;
var brittanisBirthYear = 1991;
////////// PROBLEM 2 //////////     - completed
/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/
//CODE HERE
  // if(amysAge > brittanisAge) {
  //   console.log(`${amyName} is older!`);
  // } else if(brittanisAge > amysAge) {
  //   console.log(`${brittanName} is older!`);
  // } else console.log(`They are the same age!`);

////////// PROBLEM 3 //////////           - completed
/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/
//CODE HERE
  // if(amysBirthYear === brittanisBirthYear) {
  //   console.log(`${amyName} & ${brittanName} were born in the same year!`)
  // } else {
  //   console.log(`${amyName} & ${brittanName} were not born in the same year!`)
  // }

////////// PROBLEM 4 //////////     -- cOMPLETED

let temperature = 81;
let rain = true;
let message = ""; // for custom output instead of using console logs per each statement

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees INCLUSIVE or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 NOT INCLUSIVE and 80 degrees NOT INCLUSIVE??, and raining, one should wear a rain-jacket. 
  If it is 60 degrees INCLUSIVE or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/
//CODE HERE
/** PSUEDO CODE FOR OBJECTIVES
 * if above 80 degrees (not inclusive) AND raining, wear a t-shirt AND take an umbrella?
 * else if it is between 60 and 80 degrees AND raining, wear a rain-jacket
 * else if it is <= 60 degrees, wear a jacket and carry and umbrella.
 *  bonus? come up with your own output for clothing when not raining 
 */
    // if(temperature >= 80 && rain === true) {
    //   message += 'one should wear a t-shirt and take an umbrella!';
    // } else if(60 < temperature && temperature < 80 && rain === true) {
    //   message += 'one should wear a rain-jacket!';
    //   } else {
    //       message += 'one should wear a jacket and carry and umbrella!';
    //     }
        
    // return console.log(message);


////////// PROBLEM 5 //////////       --- completed
/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/
//CODE HERE
/** PSUEDO
 * so we want to display HELLO 10 times
 * start iterator at 1, and the statement becomes untrue and thus does not console.log when
 * the iterator becomes 11. thus only consoling 10 times total.
 */
    // for(let i = 1; i < 11; i++) {
    //   console.log(`Hello, the count is: ${i}`);
    // }

////////// PROBLEM 6 //////////     -- completed

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/
//CODE HERE
    // for (let i = 1; i < 11; i++) {
    //   console.log(`${i}`);
    // }

////////// PROBLEM 7 //////////   -- COMPLETED
/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/
/** PSUEDO
 * count down from 10 all the way to 0, so display 10 9 8 ... 0
 * start at 10, each iteration reduce the number by 1 and then consoloe.log
 * debugged: the statement I originally put was i < 0, 10 IS NOT LESS THAN 0, so no execution.
 * fixed: i > 0, the statement 10 > 0 is true, and will execute as desired.  
 * bonus: desired output was INCLUSIVE 0, 10 >= 0 will do this in our if statement.
 */
    // for(let i = 10; i >= 0; i--) {
    //   console.log(`${i}`);
    // }
//CODE HERE

////////// PROBLEM 8 //////////     -- completed

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/
/** PSUEDO 
 * WHILE SCORE IS < PASSINGSCORE: CONSOLE(score not high enough)
 *    increment the score by 1 after console.
 * expected: run a total of 7 times.
*/
//CODE HERE
    // console.log('required to pass, a score of: ', passingScore)
    // while(score < passingScore) {
    //   console.log(`your score: ${score} is not high enough to pass yet`);
    //   score++;
    // }
    // console.log(`your score: ${score} is now high enough to pass, congratulations!`);


////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.
*/
/** PSUEDO 
 * we create a variable and SET TO TRUUUUEEE
 * IF check if it is TRUUUEEE, if true, set to false.
 * IF FALSE set to TRUUUUEE
*/
//CODE HERE
    // let changeMyMind = true; // starts as true on program run
    // // no more ternary for now lol
    // if(changeMyMind === true) {
    //   changeMyMind = false;
    //   console.log(changeMyMind);
    // }
    // else {
    //   changeMyMind = true;
    //   console.log(changeMyMind);
    // }

/// wait a minute every time I run the program .. it starts as TRUE, so I am correct
// I am simply restarting the same program, and it is only running once.... WOOOOOWWWWWWWW :D
// TO TEST WE COULD CREATE INTO A FUNCTION AND STORE THOSE VALUES. but we won't now.


////////// PROBLEM 10 //////////      -- COMPLETED
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).
/** PSUEDO
 * USING !changeMyMind, change to true if set to false at the start 
 * (which it should be after running once).
 * console.log the new variable
 */
//CODE HERE so it is false, and we are saying if the if statement RETURNS FALSE, change the var to true
    // if(!changeMyMind) {
    //   changeMyMind = true;
    //   console.log(changeMyMind);
    // }
////////// ADVANCED PROBLEMS //////////
////////// PROBLEM 11 //////////        --- completed

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.
/** PSUEDO
 * sounds like we are creating a variable Z that is A HIGH NUMBER
 * we want to make it decrement aka perform Z - 1 until Z = 0 
 * OHHH 2 WHILE LOOPS???
 * STARTS AT 5, counts down to 1, and we want it to loop again
 * OKAY makes sense .... LOG THE WHILE AND INSIDE A FOR LOOOP
 */
//CODE HERE
while (z > 0) {
  console.log(z);
  z--;
  for (let i = z; i > 0; i--) {
    console.log(i);
  }
}