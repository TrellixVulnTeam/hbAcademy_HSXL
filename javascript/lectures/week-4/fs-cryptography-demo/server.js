// import required packages
const express = require("express");
const cors = require("cors");

// invoke express
const app = express();

// write out our middleware
app.use(express.json());
app.use(cors());

app.listen(4004, () => {
    console.log('server listening on 4004');
});