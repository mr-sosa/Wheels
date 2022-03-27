const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'trips';
let jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { ObjectId } = require('mongodb');
const jwtKey = process.env.JSON_TOKEN;
const { getUserByUserName } = require('../users/controller')

async function getAllTrips(){
  try {
    const trips = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { trips };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

async function getTripByID(id) {
  try {
    const trip = await getDbRef()
      .collection(COLLECTION_NAME)
      .findOne({ _id: ObjectId(id) });
    return trip;
  } catch (error) {
    console.error(error);
    return { error };
  }
}

async function createTrip(trip) {
    try {
        const user = await getUserByUserName(trip.driver);
        if(user.isDriver===true){
            const tripC = await getDbRef().collection(COLLECTION_NAME).insertOne(trip);
            return {
                success: true,
                data: {
                    id: tripC.insertedId
                },
            };
        } else {
            return {
                success: false,
                msg: 'El usuario no es conductor'
            };
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            msg: 'Internal error',
        };
    }
};

async function updateTrip(id,trip) {
    try {
        const tripC = await getDbRef()
            .collection(COLLECTION_NAME)
            .updateOne(
                { _id: ObjectId(id)}, // Filtro al documento que queremos modificar
                { $set: trip} // El cambio que se quiere realizar -- no estoy segura de que funcione
            )
        return { tripC };
    } catch (error) {
        console.error(error);
        return { error };
    }
};

async function deleteTrip(id) {
    try {
        const trip = await getDbRef()
            .collection(COLLECTION_NAME)
            .deleteOne({ _id: ObjectId(id) });

        if (trip.deletedCount == 0){
            return {
                success: false,
                msg: 'ID no existe',
            };
        } else{
            return { 
                success: true,
                msg: 'Trip deleted - ' + id,
            };
        }        
    } catch (error) {
        console.error(error);
        return { error };
    }
};

async function addPassengerToTrip(idTrip, passenger) {
    try {  
        const trip = await getTripByID(idTrip);
        if(trip.passengers.length < trip.quotas){
            await getDbRef()
                .collection(COLLECTION_NAME)
                .update(
                { _id : ObjectId(idTrip) },
                { $push: { passengers: passenger}}
            );
            
            return { 
                success: true,
                data: {
                    idTrip,
                    passenger
                }
            };
        } else {
            return { 
                success: false,
                msg: 'Número de cupos completo',
            };
        }
    } catch (error) {
        console.error(error);
        return { error };
    }
};

async function deletePassengerToTrip(idTrip, passenger) {
    try {        
        await getDbRef()
            .collection(COLLECTION_NAME)
            .update(
            { _id : ObjectId(idTrip) },
            { $pull: { passengers: passenger}}
        );
        
        return { 
            success: true,
            data: {
                idTrip,
                passenger
            }
        };
    } catch (error) {
        console.error(error);
        return { error };
    }
}

module.exports = { getAllTrips, getTripByID, createTrip, updateTrip, deleteTrip, addPassengerToTrip, deletePassengerToTrip };
