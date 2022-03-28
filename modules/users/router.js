const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByUserName, createUser, updateUser, deleteUser, getUserCars ,
   getUserCar, deleteCarFromUser, addCarToUser, createTripU, updateTripU, deleteTripU, 
   getUserTrips, getUserTrip, addTripToPassenger } = require('./controller');
//const { getCarById, createCar, updateCar, deleteCar } = require('../cars/controller');
const { getTripByID, deletePassengerToTrip, addPassengerToTrip } = require('../trips/controller');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/* GET user */
router.get('/:username', async function(req, res, next) {
  let username = req.params.username;
  const user = await getUserByUserName(username);
  res.json(user);
});

/** Create user */
/* router.post('/', async function (req, res, next) {
  const response = await createUser(req.body);
  res.json(response);
}); */

/** Update user by id*/
router.put('/:username', async function (req, res, next) {
  let username = req.params.username;
  const response = await updateUser(username, req.body);
  res.json(response);
});

/* DELETE user */
router.delete('/:username', async function(req, res, next) {
  let username = req.params.username;
  const user = await deleteUser(username);
  res.json(user);
});


// Module of Car

/* GET cars listing. */
router.get('/:username/cars/', async function(req, res, next) {
  let username = req.params.username;
  const cars = await getUserCars(username);
  res.json(cars);
});

/* GET car */
router.get('/:username/cars/:idC', async function(req, res, next) {
  let idC = parseInt(req.params.idC);
  let username = req.params.username;
  const car = await getUserCar(username,idC);
  res.json(car);
});

/** Create car */
router.put('/:username/cars/', async function (req, res, next) {
  let username = req.params.username;
  const response = await addCarToUser(username, req.body);
  res.json(response);
});

/** Update car by id*/
// router.put('/:username/cars/:idC', async function (req, res, next) {
//   let idC = req.params.idC;
//   const response = await updateCar(idC, req.body);
//   res.json(response);
// });

/* DELETE car */
router.delete('/:username/cars/:idC', async function(req, res, next) {
  let idC = req.params.idC;
  let username = req.params.username;
  const response = await deleteCarFromUser(username,idC);
  res.json(response);
});

// Module of Trip

/* GET trips listing. Da los ids*/
router.get('/:username/trips/', async function(req, res, next) {
  let username = req.params.username;
  const trips = await getUserTrips(username);
  res.json(trips);
});

/* GET trip */
router.get('/:username/trips/:idT', async function(req, res, next) {
  let idT = parseInt(req.params.idT);
  let username = req.params.username;
  const tripId = await getUserTrip(username,idT);
  const trip = await getTripByID(tripId);
  res.json(trip);
});

/** Create trip */
router.post('/:username/trips/', async function (req, res, next) {
  let username = req.params.username;
  const idT = await createTripU(username, req.body);
  const response = await addTripToPassenger(username,idT);
  res.json(response);
});

/** Update trip by id*/
router.put('/:username/trips/:idT', async function (req, res, next) {
  let idT = req.params.idT;
  let username = req.params.username;
  const tripId = await getUserTrip(username,idT);
  const response = await updateTripU(username, tripId, req.body);
  res.json(response);
});

/* DELETE & cancel trip */
router.delete('/:username/trips/:idT', async function(req, res, next) {
  let idT = req.params.idT;
  let username = req.params.username;
  const tripId = await getUserTrip(username,idT);
  const response1 =await deletePassengerToTrip(tripId, username);
  const response = await deleteTripU(username,tripId);
  res.json(response);
});

/* Reservar trip */
router.put('/:username/trips/:idT/reservar', async function(req, res, next) {
  let idT = req.params.idT;
  let username = req.params.username;
  const response = await addTripToPassenger(username,idT);
  const response1 =await addPassengerToTrip(idT, username);
  res.json(response1);
});


module.exports = router;
