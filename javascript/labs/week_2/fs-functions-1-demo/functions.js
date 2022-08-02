// In this file, we'll continue with our soccer simulation.
/**
 * So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?
 * 
 * This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses.
 * 
 * First, let’s practice with data types and string methods. Then we’ll get into writing functions.
 */

// Create a variable that tracks the Eagles’ morale.
let eaglesMorale = 100;
let str = Boolean(eaglesMorale);
// console.log(str);

// Let’s create a string that declares a winner.The winner should be the Dragons.
let theWinnerIs = "Dragons are winners";
let newWinner = theWinnerIs.replace('Dragons', "Eagles");

// Now let’s just confirm that our string contains ‘The Eagles’
// console.log(newWinner.includes('Eagles'));

// Now we have to convert our string to kebab case
let kebabCase = newWinner.toLowerCase().split(" ").join("-");
    // let kebabCase2 = newWinner.toLowerCase()
    //     .split(" ")
    //     .join("-");
    // console.log(kebabCase);
    // console.log(kebabCase2);
// let kebabStep = newWinner.toLowerCase();
// kebabStep = kebabStep.split(" ");
// kebabStep = kebabStep.join("-");
// console.log(kebabCase);

// Now, let’s create a simple function to see if the Emerald Eagles still have morale left, and then console.log the result.
const checkMorale = () => {
    if(morale > 0) {
        console.log('They have morale');
    } else {
        console.log('where the morale');
    }
}

// checkMorale(eaglesMorale);

// So we have written this function, but you might notice, it has not actually run yet.This is because functions do not run until they are called.Let’s call the above function.
// checkMorale(0);

// Now, let’s create a function that can be used every time the Eagles lose a match.
const reduceMorale = (amountToReduce) => {
    if (checkMorale(amountToReduce) === true) {
        eaglesMorale -= amountToReduce;
        console.log(eaglesMorale);
    } else {
        return;
    }
};

// At this point the Emerald Eagles have lost a few times.It would probably be a good time to check and make sure they are still up for matches.Call your doEaglesHaveMorale function.

// It is important to know that functions can be set up to have as many parameters as you would like.In this next function, we will use two.


// Let’s create another function that allows 2 teams to shake hands with each other.