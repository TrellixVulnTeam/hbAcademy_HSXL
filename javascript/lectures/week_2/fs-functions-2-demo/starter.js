////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => { return num1 + num2 };
const subtract = (num1, num2) => { return num1 - num2 };
const multiply = (num1, num2) => { return num1 * num2 };
const divide = (num1, num2) => { return num1 / num2 };

// expression
const calculator = (num1, num2, callback) => {
    // Convert num1 && num2 into a number
    // Otherwise will return NaN
    // SO if succesful number, do this
    if (+num1 && +num2) {
        // if it is possible to be a number
        if (+num1 && num2) {
            num1 = +num1;
            num2 = +num2;
            // we accept a function as the 
            // 3rd parameter, which is the function
            // of math we want to perform in our calculator.
            return callback(num1, num2);
        } else {
            console.log('input must be numbers')
        }
    }
    // otherwise, not a number do this,
    else {
        return;
    }
};

const result = calculator(1, 2, add);
const otherResult = calculator(3, 4, multiply);
// console.log(result);
// console.log(otherResult);

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
        name: 'leash',
        colors: ['red', 'blue', 'green'],
        category: 1,
        inventory: 30,
        basePrice: 13.99,
        displayPrice: 13.99
    },
    {
        name: 'chew toy',
        colors: ['brown'],
        category: 2,
        inventory: 120,
        basePrice: 6.00,
        displayPrice: 6.00
    },
    {
        name: 'rope',
        colors: ['blue & green', 'red & yellow'],
        category: 2,
        inventory: 75,
        basePrice: 4.99,
        displayPrice: 4.99
    }
]

const catProducts = [
    {
        name: 'mouse toy',
        colors: ['pink', 'grey', 'black'],
        category: 2,
        inventory: 125,
        basePrice: 2.50,
        displayPrice: 2.50
    },
    {
        name: 'cat sweater',
        colors: ['black'],
        category: 1,
        inventory: 15,
        basePrice: 10.00,
        displayPrice: 10.00
    },
    {
        name: 'scratching post',
        colors: ['tan'],
        category: 2,
        inventory: 40,
        basePrice: 22.99,
        displayPrice: 22.99
    }
]
/**
 * you’re given an array of dog products and one of cat products, we’ll be looping these and changing values
 * the base price is the normal price that would be charged, display is how it should show up on the website
 * we want to be able to loop over the arrays separately and apply discounts by percentage (25% off) or by
 * rate ($5 off)
 * we also want to be able to apply these to all products in an array, or according to category (sale on toys specifically), or
 * according to inventory (trying to sell the last little bit to make room for more products, get it while it lasts type of sale)
 * start with the discount functions, these will eventually be called as callbacks, they’ll both take in a product to change
 */
// CODE HERE
const applyPercentDiscount = (product, discount) => {
    // Discount receieved will reflect as decimals
    // 25% = .25
    // Assign the display price with discount
    product.displayPrice = product.basePrice * (1 - discount);
}

const applyFlatRateDiscount = (product, discount) => {
    // Discount will be a dollar amount. 
    // #.##
    // Assign the display price with discount
    product.displayPrice = product.basePrice - discount;
}

const applyDiscountByCategory = (arr, category, callback, discount) => {
    // perform to each product the following
    arr.forEach(product => {
        // callback() - the desired discount to perform
        // product being, EACH element in our array
        if(product.category === category) {    
            callback(product, discount);
        }
    });
};

// === by inventory ===
const applyDiscountByInventory = (arr, amount, callback, discount) => {
    if(+amount) {
        amount = +amount;
    } else {
        return 'not a valid number'
    }
    // perform to each product the following
    arr.forEach(product => {
        // callback() - the desired discount to perform
        // product being, EACH element in our array
        if (product.inventory < amount) {
            callback(product, discount);
        }
    });
};

// ====== test by calling our applyDiscountByCategory ======
// that will take in our (array, the discount, and amount)
// - .25 cents
// applyDiscountByCategory(catProducts, 2, applyFlatRateDiscount, .25);
// - 10%
// applyDiscount(dogProducts, applyPercentDiscount, .1);

// ====== Based as inventory ======
// meaning any inventory with less than 40, we apply the discount
applyDiscountByInventory(dogProducts, 40, applyPercentDiscount, .1);

// console.log(catProducts);
// console.log(dogProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

/** this is somewhat of a silly example, but they’ll be able to practice another in the lab exercise
 * arguably, every sandwich starts with bread, so let’s make a higher order function that returns functions that “make sandwiches” on the specified type of bread
 * the bread type should be a string and the ingredients on the inner function should be an array of strings, even if it’s only one thing
 */
function makeSandwich(bread) {
    // this function has bread as default value and 
    // will return the output of the following
    // function
    return function(ingredients) {
        let order = `Your sandwhich is ready\n${bread} bread with `;
        for(let i = 0; i < ingredients.length; i++) {
            // last ingredient but not the only 1
            if(i === ingredients.length - 1 && i !== 0) {
                order += `and ${ingredients[i]}.`;
                // only 1 ingredient
            } else if(ingredients.length === 1) {
                order += `${ingredients[i]}.`;
                // else there are more ingredients
            } else {
                order += `${ingredients[i]}, `;
            }
        }
        return order;
    }
}

// CODE HERE
const makeWheatSandwhich = makeSandwich('wheat');
const makeRyeSandwhich = makeSandwich('rye');

const sandwhich1 = makeWheatSandwhich(['pickles', 'mayo', 'ham', 'lettuce']);
const sandwhich2 = makeRyeSandwhich(['tomato', 'mustard', 'lettuce', 'onion']);

// console.log(sandwhich1)

////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''

        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
/**there are two provided functions that we’ll be parsing out into 3 functions so that the repeated parts can be taken care

of in one function instead of being repeated

 * 
 * @param {*} arr 
 * @param {*} cb 
 */


// CODE HERE
// Higher Function
const copyArrAndChange = (arr, cb) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i]);
        result.push(newValue);
    }
    return result
}
// Callback Functions
const copyStrToCamelCase = str => {
    // take input and split on space
    const splitStr = str.split(' ');
    let camelCaseStr = '';
    for(let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x];
        word = word.toLowerCase();
        if(x!=0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        camelCaseStr += word;
    }
    return camelCaseStr;
}

const copyStrToSnakeCase = str => {
    str = str.toLowerCase();
    const splitStr = str.split(' ');
    const snakeCaseStr = splitStr.join('_');
    return snakeCaseStr;
}
const lotrCamel = copyArrAndChange(lotr, copyStrToCamelCase);
const lotrSnake = copyArrAndChange(lotr,copyStrToSnakeCase);
console.log(lotrCamel);
console.log(lotrSnake);

////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

// uncomment this
// const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
}

// Call formalGreeting passing in the formalNames array


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

// const placesThatStartWithA // = places.filter()


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
    { receptionist: "James" },
    { programmer: "Steve" },
    { designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
}

// CODE HERE


// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent',
        amount: 1000
    },
    {
        title: 'car payment',
        amount: 250
    },
    {
        title: 'food',
        amount: 300
    }
]

// const remaining // = expenses.reduce(//callback, //initial value)