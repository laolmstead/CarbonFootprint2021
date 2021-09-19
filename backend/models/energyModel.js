import mongoose from 'mongoose';

/**
 * Define the energy schema
 */

const energySchema = mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    vehicleScore: {type: Number, required: true},
    naturalGasScore: {type: Number, required: true},
    electricityScore: {type: Number, required: true},
    fuelScore: {type: Number, required: true},
    propaneScore: {type: Number, required: true},
    totalScore: {type: Number, required: true}
});


/**
 * Compile the model from the schema
 */

const Energy = mongoose.model("Energy", energySchema);

/**
 * Create an energy
 * @param name
 * @param date
 * @param vehicleScore
 * @param naturalGasScore
 * @param electricityScore
 * @param fuelScore
 * @param propaneScore
 * @param totalScore
 * @returns promise that resolves to json object for the document
 */

const createEnergy = async (name, date, vehicleScore, naturalGasScore, electricityScore, fuelScore, propaneScore, totalScore) => {
    const energy = new Energy(
        {name: name, date: date, vehicleScore: vehicleScore, naturalGasScore: naturalGasScore, electricityScore: electricityScore, fuelScore: fuelScore, propaneScore: propaneScore, totalScore: totalScore})
    return energy.save()
}

/**
 * Retrieve energy based on the filter, project and limit params
 * @param filter
 * @param projection
 * @param limit
 * @returns
 */

const findEnergy = async (filter, projection, limit) => {
    const query = Energy.find(filter)
        .select(projection)
        .limit(limit)
    return query.exec();
}

/**
 * Replace the name, date, score properties of the energy with the
 * id value provided
 * @param _id
 * @param name
 * @param vehicleScore
 * @param naturalGasScore
 * @param electricityScore
 * @param fuelScore
 * @param propaneScore
 * @param totalScore
 * @returns promise that resolves to the number of docs modified
 * 
 */

const replaceEnergy = async (_id, name, date, vehicleScore, naturalGasScore, electricityScore, fuelScore, propaneScore, totalScore) => {
    const result = await Energy.replaceOne({_id: _id}, {name: name, date: date, vehicleScore: vehicleScore, naturalGasScore: naturalGasScore, electricityScore: electricityScore, fuelScore: fuelScore, propaneScore: propaneScore, totalScore: totalScore});
    return result.nModified;
}

/**
 * Update the user based on the filter
 * @param param
 * @param updatedValues
 * @returns nMofified
 */
const updateEnergy = async(filter, updateValues) => {
    const result = await Energy.updateOne(filter, updateValues);
    return result.nModified
}

/**
 * Deletes the energy with the provided id value
 * @param _id
 * @returns promise that resolves to the count of deleted documents
 * 
 */

const deleteById = async (_id) => {
    const result = await Energy.deleteOne({_id: _id});
    return result.deletedCount;
}

export {deleteById, replaceEnergy, findEnergy, createEnergy, updateEnergy}
