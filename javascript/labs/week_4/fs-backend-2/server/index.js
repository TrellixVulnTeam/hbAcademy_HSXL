// Inside our server folder, set up index.js
/** Setup the basic functionality of your index.js file (express, cors, json, app.listen).
 * Create another file called controller.js and set a module up with the following function signatures: 
 *      - getHouses, deleteHouse, createHouse, updateHouse.
 */
// Part 1 - Step 2 to 3

const express = require('express');
const cors = require('cors');

// create variables with the object's functionality.
const app = express();

app.use(express.json());
app.use(cors());

// destructuring our functions from controller.js file
const {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse
} = require('./controllers/controller.js');
const { create } = require('domain');

// === ENDPOINTS ===
app.get('/api/houses', getHouses); // get all houses
app.delete('api/houses/:id', deleteHouse); // delete 1 existing house
app.post('/api/houses', createHouse); // create 1 new house
app.put('/api/houses/:id', updateHouse) // update 1 existing house

app.listen(4004, () => console.log('running on 4004'));
