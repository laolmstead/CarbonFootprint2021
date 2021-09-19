import * as energy from '../models/energyModel.js';
import express from 'express';

const energyRouter = express();
energyRouter.use(express.json());

/**
 * Creates a new energy with the name, date, vehicleScore, naturalGasScore, electricityScore, fuelScore, propaneScore, and totalScore provided
 */
energyRouter.post('/energy', (req, res) => {
    energy.createEnergy(req.body.name, req.body.date, req.body.vehicleScore, req.body.naturalGasScore, req.body.electricityScore, req.body.fuelScore, req.body.propaneScore, req.body.totalScore)
    .then(energy => {
        res.status(201).json(energy)
    })
    .catch(error => {
        console.error(error)
        res.status(400).json({Error: 'Request failed'})
    });
});

/**
 * Retrieve all energy based on filter. If filter is not specified, then it will
 * return all energy that has been posted
 */
energyRouter.get('/energy', (req, res) => {
    if (req.query._id === undefined && req.query.name === undefined && req.query.date === undefined) {
        const filter = {}
        energy.findEnergy(filter, '', 0)
            .then(energy => {
                console.log(energy)
                res.send(energy)
            })
            .catch(error => {
                console.error(error)
                res.send({error: 'Request failed'});
            });
    } else if (req.query.name != undefined) {
        const filter = {name: req.query.name};
        energy.findEnergy(filter, '', 0)
            .then(energy => {
                console.log(energy)
                res.status(200).json(energy)
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({Error: 'Request failed'})
            });
    } else if (req.query.date != undefined) {
        const filter = {date: req.query.date};
        energy.findEnergy(filter, '', 0)
            .then(energy => {
                console.log(energy)
                res.status(200).json(energy)
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({Error: 'Request failed'})
            });
    }
});

/**
 * Update the energy whose id is provided in the parameters and
 * set its name and cost
 */

energyRouter.put('/energy', (req, res) => {
    if (req.query._id != undefined && req.query.name != undefined && req.query.date != undefined && req.query.vehicleScore != undefined && req.query.naturalGasScore != undefined && req.query.electricityScore != undefined && req.query.fuelScore != undefined && req.query.propaneScore != undefined && req.query.totalScore != undefined) {
        const filter = {_id: req.query._id}
        energy.replaceEnergy(filter, req.query.name, req.query.date, req.query.vehicleScore, req.query.naturalGasScore, req.query.electricityScore, req.query.fuelScore, req.query.propaneScore, req.query.totalScore)
            .then(nModified => {
                console.log(nModified)
                res.status(200).json(energy)
            })
            .catch(Error => {
                console.error(Error);
                res.send({Error: 'Not Found'})
            })
    } else {
        const filter = {_id: req.query._id}
        let items_id = {}
        let items_name = {}
        let items_date = {}
        let items_vehicleScore = {}
        let items_naturalGasScore = {}
        let items_electricityScore = {}
        let items_fuelScore = {}
        let items_propaneScore = {}
        let items_totalScore = {}
        let items = {}
        for (const property in req.query) {
            console.log(`${property}: ${req.query[property]}`)
            if (req.query[property] != undefined) {
                if ([property] == '_id') {
                    items_id[[property]] = req.query[property]
                    Object.assign(items, items_id)
                } else if ([property] == 'name') {
                    items_name[[property]] = req.query[property]
                    Object.assign(items, items_name)
                } else if ([property] == 'date') {
                    items_date[[property]] = req.query[property]
                    Object.assign(items, items_date)
                } else if ([property] == 'vehicleScore') {
                    items_vehicleScore[[property]] = req.query[property]
                    Object.assign(items, items_vehicleScore)
                } else if ([property] == 'naturalGasScore') {
                    items_naturalGasScore[[property]] = req.query[property]
                    Object.assign(items, items_naturalGasScore)
                } else if ([property] == 'electricityScore') {
                    items_electricityScore[[property]] = req.query[property]
                    Object.assign(items, items_electricityScore)
                } else if ([property] == 'fuelScore') {
                    items_fuelScore[[property]] = req.query[property]
                    Object.assign(items, items_fuelScore)
                } else if([property] == 'propaneScore') {
                    items_propaneScore[[property]] = req.query[property]
                    Object.assign(items, items_propaneScore)
                } else if ([property] == 'totalScore') {
                    items_totalScore[[property]] = req.query[property]
                    Object.assign(items, items_totalScore)
                }
            }
        }
        console.log(items)
        const updateValues = {$set: items}
        energy.updateEnergy(filter, updateValues)
        .then(nModified => {
            console.log(nModified)
            res.status(200).json(energy)
        })
        .catch(Error => {
            console.error(Error)
            res.send({Error: 'Not found'})
        })
    }
});

/**
 * Delete the energy whose id is provided in the query parameters
 */
energyRouter.delete('/energy/:_id', (req, res) => {
    energy.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(deletedCount)
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