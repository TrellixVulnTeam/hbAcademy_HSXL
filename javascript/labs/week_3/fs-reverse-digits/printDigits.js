/** 
 * Write a function called printDigits that takes in one argument, num. When given an integer, 
 * the function should print (console.log) each digit in reverse order, starting with the ones place. 
 * Do not do this by just turning the number into a string and reversing it. Solve the problem using math. 
 * (Hint: look up while loops, and don’t forget about the % operator.)
 * For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:
 * printDigits(1)
 * // 1
 * printDigits(314)
 * // 4
 * // 1
 * // 3
 * // 2
 * // 1
 * 
 * ========= Psuedocode
 *  lastInt = Integer % 10
 *       Divides the integer by 10, storing with the last digit for use
 *  (Which was seen as a decimal that we * 10).
 *  where at each loop
 * use i = Math.floor(Integer/10), will drop the decimal place or last value.
 * 
 */

const printDigits = (number) => {

        if (!+number) return console.log(false);
        // reverse will be to add on the current (i) iterations last digit.
        let reverse = 0;

        // i is updated from equaling number, to the rounded down version of
        for (let i = number; i >= 1; i = Math.floor(i / 10)) {
            reverse = reverse * 10 + i % 10;
        }~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // return true if it is a palindrome.
        return console.log(reverse);
    }

printDigits(12); // 21
printDigits(413); // 314
printDigits(1); // 1
printDigits(645) // 654
printDigits('ad') // 654