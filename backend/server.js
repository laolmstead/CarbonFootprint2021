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

// setting .env files on server
let result = dotenv.config({path: '../.env'}) 
console.log(result)
 
const app = express()

// process.env.PORT is for hosting. will use any port available on heroku etc
const PORT = process.env.PORT || 8000

// database connection to mongodb atlas - uses env username and password in the below string
mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.o8qff.mongodb.net/Carbon?retryWrites=true&w=majority`,
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
