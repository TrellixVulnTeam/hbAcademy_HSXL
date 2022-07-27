// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.
const findRange = (arr) => {

    let min = arr[0];
    let max = arr[0];

    let len = arr.length;
    let last = arr[arr.length-1];

    console.log(min, max, len, last);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    console.log(`min: ${min}, max: ${max}`);
}

findRange(array);