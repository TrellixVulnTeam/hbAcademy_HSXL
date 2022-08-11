/** This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

*/

/** For every number except the first one in the array, I want to check all the
 *  differences between that number and the numbers before it, and I want to store the
 * highest difference in a results array
 * Look at the results array, find the highest number
 * if the number is above 0, return that number, otherwise return 0
 */

const bestValue = (arr) => {
    
    if(arr.length === 1) return console.log('0 possible gains to be made');

    // Want to update to find better gains.
    let maxProfit = 0; 
    
    // We are looking to exit at max profit. We buy aka enter the market: Day 0
    let buy = arr[0]; 

    // Spread operator, copying our possible prices to buy
    let cacheBought = [...arr]; 

    for (let i = 0; i < cacheBought.length; i++) {

        // store our NEW buy price to prepare a swap in array
        if(buy > cacheBought[i]) {
            buy = cacheBought[i]; 
            cacheBought[i] = 0;
        } else {
            maxProfit = Math.max(cacheBought[i] - buy, maxProfit);
        }
    }
    // results edge case, if we have no profit possible return 0
    if (maxProfit === 0) return console.log('0 max profit possible');

    return console.log(`${maxProfit}`)
}


// ====== TESTING =======
bestValue([15, 10, 20, 22, 1, 9]) // return 12

bestValue([1, 2, 3, 4, 5]) // return 4 - buy at $1, sell at $5

bestValue([2, 3, 10, 6, 4, 8, 1]) // return 8 - buy at $2, sell at $10

bestValue([7, 9, 5, 6, 3, 2]) // return 2 - buy at $7, sell at $9

bestValue([0, 100]) // return 100 - buy at $0, sell at $100

bestValue([100, 0]) // return 0 - buy at $100, no profit

bestValue([99]) // return 0 - buy at $99, cannot sell for profit