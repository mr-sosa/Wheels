const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('./controller');
const { getAllCars, getCar, createCar, updateCar, deleteCar } = require('../cars/controller');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/* GET user */
router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  const user = await getUser(id);
  res.json(user);
});

/** Create user */
router.post('/', async function (req, res, next) {
  const response = await createUser(req.body);
  res.json(response);
});

/** Update user by id*/
router.put('/:id', async function (req, res, next) {
  let id = req.params.id;
  const response = await updateUser(id, req.body);
  res.json(response);
});

/* DELETE user */
router.delete('/:id', async function(req, res, next) {
  let id = req.params.id;
  const user = await deleteUser(id);
  res.json(user);
});


// Module of Car

/* GET cars listing. */
router.get('/:id/cars/', async function(req, res, next) {
  let id = req.params.id;
  const cars = await getAllCars();
  res.json(cars);
});

/* GET car */
router.get('/:id/cars/:idC', async function(req, res, next) {
  let id = req.params.id;
  let idC = req.params.idC;
  const car = await getCar(idC);
  res.json(car);
});

/** Create car */
router.post('/:id/cars/', async function (req, res, next) {
  let id = req.params.id;
  const response = await createCar(req.body);
  res.json(response);
});

/** Update car by id*/
router.put('/:id/cars/:idC', async function (req, res, next) {
  let id = req.params.id;
  let idC = req.params.idC;
  const response = await updateCar(idC, req.body);
  res.json(response);
});

/* DELETE car */
router.delete('/:id/cars/:idC', async function(req, res, next) {
  let id = req.params.id;
  let idC = req.params.idC;
  const car = await deleteCar(idC);
  res.json(car);
});

module.exports = router;
