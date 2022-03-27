/* const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'cars';

const getAllCars = async () => {
  try {
    const cars = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { cars };
  } catch (error) {
    return { error };
  }
};

async function getCarById(id) {
  try {
    const car = await getDbRef()
      .collection(COLLECTION_NAME)
      .findOne({ _id: new ObjectID(id)});
    return car;
  } catch (error) {
    return { error };
  }
};

async function createCar(car) {
    try {    
        const newCar = await getDbRef()
          .collection(COLLECTION_NAME)
          .insertOne(car);
        return newCar;
    
      } catch (error) {
        return { error };
      }
};

async function updateCar(car) {
    try {
        const car = await getDbRef()
            .collection(COLLECTION_NAME)
            .updateOne(
                { "_id": new ObjectID(car._id)}, // Filtro al documento que queremos modificar
                car // El cambio que se quiere realizar -- no estoy segura de que funcione
            )
        return { car };
        } catch (error) {
        return { error };
        }
};

async function deleteCar(id) {
    try {
        const car = await getDbRef()
            .collection(COLLECTION_NAME)
            .deleteOne({  _id: new ObjectID(id) });
        return { car };
        } catch (error) {
        return { error };
        }
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar }; */