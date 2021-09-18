// Test route to check calculations. Change name once complete
import express from 'express';

const calcScore = express();
calcScore.use(express.json());

calcScore.post('/calcScore', (req, res) => {
    console.log(req)
});

