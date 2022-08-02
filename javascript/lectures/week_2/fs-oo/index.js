let person = {
    firstName: "Daniel",
    lastName: "Martinez",
    age: 28,
    // advanced, using object for multiples
    // use for each or for in
    favorites: {
        movies: ['Bruce Almighty', 'Prometheus'],
        artists: ["Beethoven", "Bach", "Mozart"]
    },
    greeting: () => {
        console.log("Hello");
    }
}

class Dog {
    // constructor for initializing
    constructor(name, breed, age) {
        // this. is referring to itself, this specific
        // object's keys/values for assignment.
        this.name = name;
        this.breed = breed;
        this.age = age;
        // booleans can be set by default
        this.isCute = true;
    }

    greeting() {
        if(this.age < 3) {
            console.log(`Hi I am ${this.name} and am a puppy with ${this.age} years of wisdom`);
        } else {
            console.log(`Hello, I am ${this.name} and am ${this.age} in years of wisdom`);
        }
    }
}

class Puppy extends Dog {
    constructor(name, breed, age, isTeething) {
        // super to inherit its extended Dog class functionality
        // will be the puppy's attributes into the Dog
        // that way the puppy class will have access to 
        // the Dog class (ex: the greeting)
        super(name, breed, age)
        // new variable user defined for puppy
        this.isTeething = isTeething;
        // new default for puppy
        this.trainLevel = 1;
    }
}

let fido = new Dog('Fido', 'Husky', 8);
let pupper = new Puppy('Lucky', 'Siberian', 2);
pupper.greeting();
fido.greeting();
console.log(pupper);


// ====== COMPLETED TESTING =======
/** 
 * console.log(person.firstName); // .notation
 * console.log(person['firstName']); // bracket notation
 */
/** Accessing our objects's arrays
 * === view all data in our favorites object.
 * console.log(person.favorites) 
 * === view all movies in our movies array that lives inside of our favorites object.
 * console.log(person.favorites.movies)
 * === view the second movie in our movies array that is
 * === inside of our favorites objects
 * console.log(person['favorites']['movies'][1])
 * === same way to do the above
 * console.log(person.favorites.movies[1])
 * console.log(person.favorites.artists[1])
 * === call our function within our object
 * person.greeting()
 * 
 * Destructuring, must match our key in our object
 * let {lastName} = person; // stores as a lastName variable
 * console.log(lastName)
 * 
 * Destructuring our function in our object
 * let {greeting} = person;
greeting()
console.log(greeting) // will tell you this is a function named greeting()
* === destructuring + rename
* let {firstName, lastName, age: yearsOfWisdom} = person;
console.log(firstName, lastName, yearsOfWisdom);

* FOR EACH PRACTICE

for(const prop in person) {
    console.log(`the property of ${prop} has a value of ${person[prop]}`)
}

* ASSIGNMENT(ADDING VALUES) AND REASSIGNING
person.job = "Instructor"; // if it does not exist, create and assign. If it DOES EXIST, reassign it.
console.log(person.job)

* removing / deleting property
delete person.job;

 */
