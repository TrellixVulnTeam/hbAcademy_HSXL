// Write your solution below this line:
/** Write a program that counts from 1 to 50 in fizzbuzz fashion.
 * To do so, loop from 1 to 50 (inclusive). Each time through, 
 * if the number is evenly divisible by 3, say ‘fizz’. 
 * If the number is evenly divisible by 5, say ‘buzz’. 
 * If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. 
 * Otherwise say the number
 * */

let number = 15;

    for(let i = 1; i <= number; i++) {
        if (i % 15 == 0) {
            console.log("fizzbuzz");
        } else if(i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else console.log(i);
    }

    // ternary operators, not as ACCURATE!
// for (let i = 0; i < number;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i );

