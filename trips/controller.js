const Trip = require('./model');


/* Busca y devuelve todos los viajes */
async function getAllTrips(){
    const trips = await Trip.findAll();
    return { status: 200, trips: trips};
};

/* Busca y devuelve el viaje por Id*/
async function getTrip(id){
    const trip = await Trip.findOne({where: {id: id}});
    if(trip == null) {
        console.log('Trip not found, carId: ' + id);
        return { status: 404, error: 'Trip not found, carId: ' + id };
    }
    return { status: 200, trip: trip};
}

/* Crea un nuevo viaje */
async function createTrip(trip){
    try {
        const carSaved = await Trip.create(trip);
        return { status: 201, carId: carSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Actualiza el viaje por Id */
async function updateTrip(id, trip){
    try {
        const carSaved = await Trip.update(trip, {where: {id: id}});
        return { status: 200,  carId: carSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Elimina el viaje por Id*/
async function deleteTrip(id){
    try {
        const trip = await Trip.destroy({where: {id: id}});
        if(trip == null) {
            console.log('Trip not found, carId: ' + id);
            return { status: 404, error: 'Trip not found, carId: ' + id };
        }
        return { status: 200, trip: trip};
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

module.exports = { getAllTrips, getTrip, createTrip, updateTrip, deleteTrip };