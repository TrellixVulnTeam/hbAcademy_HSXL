// Given a word, return true if that word contains only unique characters.
// Return false otherwise.

// For example:



// hashTable = {}; // store our unique letters


/** We can use .includes('each specific character') 
 * We want unique characters, and that means uppercase and lowercase would be unique
 * We can iterate through the input string, to view each character.
 * As we view each character, we can store that information somewhere
 * From then on, if we see the same character 
 * return false,  ( it must be stored in our (array, set, map??? or just use .includes()) )
 * otherwise that means we did not see that character yet, so return true
 * 
 * The includes() method determines whether an array includes a certain value among its entries, 
 * returning true or false as appropriate.
 * 
 * Step 1 : Make a copy of our input string, use .slice('') to store each character as an array..
 * hmmm .. for loop seems weird here in looking up .. with .includes('${character[i]}')
*/

const hasUniqueChars = (inputString) => {

    // make copy of input as a character array
    // let temp = inputString.split(''); // not needed to split up, iterate through each char of string
    let hasSeen = []
    // let hasSeen = {}
    // let uniqueChars = new Set(inputString)
    // return uniqueChars.size === inputString.length 
    
    for(let i = 0; i < inputString.length; i++) {
        // if our array that stores previous values does not have a character..
        if(!hasSeen.includes(`${inputString[i]}`)) {
            // then it must be unique, and we insert it to use in future look up
            hasSeen.push(inputString[i]);
        } else if(hasSeen.includes(`${inputString[i]}`)) {
            // it must exist already, so we are false
            return false
        }
    }
    // after the loop is complete, assuming we are unique, we return true;
    return true;
}

console.log(hasUniqueChars("Monday"));
// returns true
console.log(hasUniqueChars("Moonday"));
// returns false
// Uppercase and lowercase letters should be considered separately:
console.log(hasUniqueChars("Bob"));
// returns true