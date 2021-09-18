import * as energy from '../models/energyModel.js';
import express from 'express';

const energyRouter = express();
energyRouter.use(express.json());

/**
 * Creates a new energy with the name, date, and score provided
 */
energyRouter.post('/energy', (req, res) => {
    energy.createEnergy(req.body.name, req.body.date, req.body.score)
    .then(energy => {
        res.status(201).json(energy)
    })
    .catch(error => {
        console.error(error)
        res.status(400).json({Error: 'Request failed'})
    });
});

/**
 * Retrieve all energy
 */
energyRouter.get('/energy', (req, res) => {
    let filter = {};
    energy.findEnergy(filter, '', 0)
        .then(energy => {
            res.status(200).json(energy)
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request failed'})
        });
});

/**
 * Update the energy whose id is provided in the parameters and
 * set its name and cost
 */

energyRouter.put('/energy/:_id', (req, res) => {
    energy.replaceEnergy(req.params._id, req.body.name, req.body.date, req.body.score)
        .then(nModified => {
            if (nModified === 1) {
                res.status(200).json({_id: req.params._id, name: req.params.name, date: req.params.date, score: req.params.score})
            } else {
                res.status(404).json({Error: 'Request failed'})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request failed'})
        })
});

/**
 * Delete the energy whose id is provided in the query parameters
 */
energyRouter.delete('/energy/:_id', (req, res) => {
    energy.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'Resource not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.send({Error: 'Request failed'})
        });
});

export {energyRouter}