/** In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

Start by creating a function called decoder that has a single parameter called code.

Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

Here are a few more examples:
 * 
 */

// ====== Examples ======
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

const popIt = (arr, number) => {

}


const stringDecoder = (code) => {

    let current;
    // this will always start with a number or skip amount
    let temp = []
    
    for (let i = 0; i < code.length; i++) {
        // first will always be a number
        current = +code[i];
        if(!isNaN(current)) {
            // display a valid number and it's index            
                i = i + current
            } else {
                temp.push(code[i])
            }

            // decided to push into an array rather than remove from msg array
            // break;
    }
    
    return console.log(`Decoded msg is: ${temp.join('')}`)
}
console.log('=== Testing ===')
stringDecoder('0h2xce5ngbrdy'); // expected 'hey'
console.log('========= MOAAAR TESTING ================')
stringDecoder('3vdfn'); // expected 'n'
console.log('========= MOAAAR TESTING ================')
stringDecoder('0r'); // expected 'r'
console.log('========= MOAAAR TESTING ================')
stringDecoder('2bna0p1mp2osl0e'); // expected 'apple'
console.log('=== Done Testing ===')
// stringDecoder('0y4akjfe0s');
