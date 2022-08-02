/** Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.
 * For example:
 * [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
 * [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
 * [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
 */

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12] // true
let array1 = [1, 4, 11, 2, 37, -4]; // true
let array2 = [0, 21, 33, 6, 0, -9]; // true
let array3 = [0, 1, 2, 3, 4, 5]; // false
let target = 0                      // stored for testing different values with ease.


const addToZero = (nums, target) => {
    let flag = false;
    // Write your solution below:
    for (let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                flag = true;
                console.log(`${flag}, ( ${nums[i]} + ${nums[j]} ) = target: ${target}, input: ${nums}`);
                return;
            }
        }
    }
    console.log(`${flag}, no pair matching our target value: ${target} in the array: ${nums}`);
}

addToZero(array, target);
addToZero(array1, target);
addToZero(array2, target);
addToZero(array3, target);

/** Possible to begin with searching for the compliment of a already iterated value 
 * utilizing a hashtable for O(1) time complexity. 
 * while the space complexity remains O(n) - by the input array size
 *  
 * */ 

// const addToZeroHT = (nums, target) => {
//     let hashTable = {};
//     let consoleTrue = true;
//     let consoleFalse = false;

//     for (let i = 0; i < nums.length; i++) {
//         let storedValue = nums[i];

//         // (else statement) if value does not exist in our map / hash table, insert it
//         // otherwise we found the pair whose sum creates our target.
//         if(hashTable[storedValue] !== undefined && hashTable[storedValue] + nums[i] === target) {
//             console.log(`${consoleTrue}, val1:${hashTable[storedValue]} + ${nums[i]}:val2 = target: ${target}`);
//         } else 
//             hashTable[nums[i]] = i;
//     }
// }

// addToZeroHT(array, target);
// addToZeroHT(array1, target);
// addToZeroHT(array2, target);