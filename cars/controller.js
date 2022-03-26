const Car = require('./model');


/* Busca y devuelve todos los carros */
async function getAllCars(){
    const cars = await Car.findAll();
    return { status: 200, cars: cars};
};

/* Busca y devuelve el carro por Id*/
async function getCar(id){
    const car = await Car.findOne({where: {id: id}});
    if(car == null) {
        console.log('Car not found, carId: ' + id);
        return { status: 404, error: 'Car not found, carId: ' + id };
    }
    return { status: 200, car: car};
}

/* Crea un nuevo carro */
async function createCar(car){
    try {
        const carSaved = await Car.create(car);
        return { status: 201, carId: carSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Actualiza el carro por Id */
async function updateCar(id, car){
    try {
        const carSaved = await Car.update(car, {where: {id: id}});
        return { status: 200,  carId: carSaved.id };
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

/* Elimina el carro por Id*/
async function deleteCar(id){
    try {
        const car = await Car.destroy({where: {id: id}});
        if(car == null) {
            console.log('Car not found, carId: ' + id);
            return { status: 404, error: 'Car not found, carId: ' + id };
        }
        return { status: 200, car: car};
    } catch (error) {
        console.log(error);
        return { status: 500, error: error };
    }
}

module.exports = { getAllCars, getCar, createCar, updateCar, deleteCar };