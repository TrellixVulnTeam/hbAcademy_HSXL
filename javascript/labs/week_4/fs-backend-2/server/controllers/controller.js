// require the database in our server folder (./db.json)
const houses = require('./db.json');

// create a variable to track upcoming house id: 4. Already exists 3 houses.
let globalId = 4;

module.exports = {
    // get all houses === 
    getHouses: (req, res) => res.status(200).send(houses),
    // delete 1 house ===
    deleteHouse: (req, res) => {
        // find house to delete
        let index = houses.findIndex(elem => elem.id === +req.params.id);
        // delete with .splice
        houses.splice(index, 1);
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        // destructure and store POSTED house data from userinput
        let {address, price, imageURL} = req.body;
        // create our json object to pass to database
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        };
        houses.push(newHouse);
        res.status(200).send(houses);
        // increment newID variable counter after successful creation
        globalId++;
    },
    updateHouse: (req, res) => {
        // destructure to find house for updating
        let { id } = req.params;
        let { type } = req.body;
        // search id and find where to replace with current params
        let index = houses.findIndex(elem => elem.id === +id);

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0;
            res.status(200).send(houses);
        } else if (type === 'plus') {
            houses[index].price += 10000;
            res.status(200).send(houses);
        } else if (type === 'minus') {
            houses[index].price -= 10000;
            res.status(200).send(houses);
        } else {
            res.sendStatus(400);
        }
    }
}