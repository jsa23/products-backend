const express = require('express');
const dotenv = require('dotenv');
const massive = require('massive');
require("dotenv").config();

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance);
})
    .catch(err => console.log(err));


app.use(express.json());

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});