/** Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
 * (That is, do not repeat any numbers in the returned list.)
 * You can trust that this function will never be called with n < 0 or n > 10.
 * For example:
 * 
 *      luckyNumbers(2)
 *              returns (3, 7)
 * 
 *      luckyNumbers(6)
 *              returns (1, 7, 9, 6, 5, 2)
 */

// Write your code below this line.
// Constraints number between 0 and 10 inclusive

/** SO WE WANT ONLY 1 - 10, inclusive, no 0. Figure out how to make Math.random() be that
 * Math.floor(Math.random() * 11) + 1);  <------ output 1 - 10
 *      Step 1 : Create an array for our values that we generate
 *      Step 2 : For loop that goes that amount of our loopAmount parameter
 *          Each loop, will generate a new random number
 *          MAYBE!!! We will need a while loop here, because the for loop is finite.
 *      STEP 2:
 *      Possibly: let count = 0 While(count != loopAmount)
 *                  Step 3:
 *                  generate a random number...
 *                  check that random number if it exists in our array? with a for loop?
 *                  a while loop with a for loop inside that is the size of the current array we created?
 *                  Step 4:
 *                      inside the for loop, 
 *                  Step 5
 *                      we do an if statement to see if it exists?
 *                      if we find the value:
 *                  Step 6:
 *                          generate a new number, 
 *                          increase the counter, 
 *                          break out of the for loop to run again?
 *                  return our array
 */


const findLuckyNum = (loopAmount) => {
    // Step 1: empty array to push random numbers, loopAmount of times
    let newArray = [];
    let rand; // intialized our random variable to use later
    // Step 2: While loop, we need a counter to check loopAmount of times

    while(newArray.length < loopAmount) {
        // Step 3: Generate a random number within our constraints
        let rand = Math.floor(Math.random() * 11) + 1; // generate our random number between 1 - 10
        // Step 4: FOR loop through our newArray size.
            if(!newArray.includes(rand)) {
                newArray.push(rand);
            }
    }
    // don't forget to return!
    return newArray;
}

console.log(findLuckyNum(3));






const findLuckyNumbers = (number) => {
    // random variable that will store the value 
    let rand; // returned from math.floor(math.random * number between 0 and our number)
    let list = []
    for(let i = 0; i < number; i++) {
        // We want to generate a number between 0 and 10 inclusive.
        rand = Math.floor(Math.random() * 11); 
        list.push(rand);
    }
    return list;
}

// console.log(findLuckyNumbers(10));