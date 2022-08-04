// Write your code below

/** Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
*/

/** We can traverse our string and start at the front and the end
 * at the same time, so even sized words would work perfect
 * if not the same 
 *      return false, 
 * else full iteration through for loop
 *      should return true.
 * we can also divide by / 2. --- think about how much of the word we need.
 */

const isPalindrom = (word) => {

    // edge case: 1 character === true
    if(word.length === 1) return console.log(`${word}: single char is palindrom, true`);

    // HINT HINT HINT HINT: how much of the word do we
    let len = word.length/2; // traverse half the word, saves run time
    // a palindrome should be the same at it's halfway point.

    // i starts at front, and j starts at end. in 1 for loop.
    let j = word.length-1;
    for (let i = 0; i < len; i++) {
        if(word[i] === word[j]) j--;
        else return console.log(`${word}: not palindrom. false`);
    }
    // after full word traversal, we assume it is true
    // as our comparison did not fail.
    return console.log(`${word}: is palindrom. true`)
}

isPalindrom("a"); // true
isPalindrom("noon") // true
isPalindrom("hello") // expected false
isPalindrom("Racecar") // expected false
isPalindrom("racecar") // expected true
isPalindrom("1111") // true
isPalindrom("1101") // false
isPalindrom("101") // true