import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { energyRouter } from './routes/energy.js';
import * as path from 'path';


/* wasnt sure what body-parser and cors were for but can add them later as imports
 
 const bodyParser = require('body-parser')
 const cors = require('cors')

 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(cors())
 app.use(bodyParser.json()) */

const app = express()

// process.env.PORT is for mongo compass usage. links to .env file which contains url
const PORT = process.env.PORT || 3000

// database connection
mongoose.connect(
    process.env.MONGO_DB_CONNECTION_STRING || "mongodb://localhost:27017/carbon_db",
    {useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));

const db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose")
});

// routes
app.use('/', energyRouter)

app.post('/calcScore', (req, res) => {
    console.log(req);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
