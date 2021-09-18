import mongoose from 'mongoose';

/**
 * Define the energy schema
 */

const energySchema = mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    score: {type: Number, required: true}
});


/**
 * Compile the model from the schema
 */

const Energy = mongoose.model("Energy", energySchema);

/**
 * Create an energy
 * @param name
 * @param date
 * @param score
 * @returns promise that resolves to json object for the document
 */

const createEnergy = async (name, date, score) => {
    const energy = new Energy({name: name, date: date, score: score})
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
 * @param date
 * @param score
 * @returns promise that resolves to the number of docs modified
 * 
 */

const replaceEnergy = async (_id, name, date, score) => {
    const result = await Energy.replaceOne({_id: _id}, {name:name, date: date, score: score});
    return result.nModified;
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

export {deleteById, replaceEnergy, findEnergy, createEnergy}
