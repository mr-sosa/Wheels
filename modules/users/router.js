const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByUserName, createUser, updateUser, deleteUser, getUserCars , getUserCar, deleteCarFromUser, addCarToUser } = require('./controller');
const { getCarById, createCar, updateCar, deleteCar } = require('../cars/controller');

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
router.post('/', async function (req, res, next) {
  const response = await createUser(req.body);
  res.json(response);
});

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
  const cars = await getUserCars(username)
  res.json(cars);
});

/* GET car */
router.get('/:username/cars/:idC', async function(req, res, next) {
  let idC = parseInt(req.params.idC);
  let username = req.params.username;
  const car = await getUserCar(username,idC)
  res.json(car);
});

/** Create car */
router.put('/:username/cars/', async function (req, res, next) {
  let username = req.params.username;
  const response = await addCarToUser(username, req.body);
  res.json(response);
});

/** Update car by id*/
router.put('/:username/cars/:idC', async function (req, res, next) {
  let idC = req.params.idC;
  const response = await updateCar(idC, req.body);
  res.json(response);
});

/* DELETE car */
router.delete('/:username/cars/:idC', async function(req, res, next) {
  let idC = req.params.idC;
  let username = req.params.username;
  const response = await deleteCarFromUser(username,idC);
  res.json(response);
});

module.exports = router;
