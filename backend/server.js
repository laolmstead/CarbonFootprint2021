import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import * as path from 'path';

/* wasnt sure what body-parser and cors were for but can add them later as imports
 
 const bodyParser = require('body-parser')
 const cors = require('cors')

 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(cors())
 app.use(bodyParser.json()) */

const app = express()

// process.env.PORT is for mongo compass usage. links to .env file which contains url
const PORT = 3000

// database connection
mongoose.connect(
    "mongodb://localhost:27017/carbon_db",
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));

const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose")
});

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
