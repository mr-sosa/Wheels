const express = require('express');
const router = express.Router();
const { getAllTrips, getTripByID, createTrip, updateTrip, deleteTrip, addPassengerToTrip, deletePassengerToTrip } = require('./controller');

/* GET trips listing. */
router.get('/', async function(req, res, next) {
  const trips = await getAllTrips();
  res.json(trips);
});

/* GET trip */
router.get('/:id', async function(req, res, next) {
  let id = req.params.id;
  const trip = await getTripByID(id);
  res.json(trip);
});

/** Create trip */
router.post('/', async function (req, res, next) {
  const response = await createTrip(req.body);
  res.json(response);
});

/** Update trip by id*/
router.put('/:id', async function (req, res, next) {
  let id = req.params.id;
  const response = await updateTrip(id, req.body);
  res.json(response);
});

/* DELETE trip */
router.delete('/:id', async function(req, res, next) {
  let id = req.params.id;
  const trip = await deleteTrip(id);
  res.json(trip);
});

/** PUT a passenger */
router.put('/:id/passenger/', async function (req, res, next) {
    let id = req.params.id;
    const response = await addPassengerToTrip(id, req.body);
    res.json(response);
});

/* DELETE a passenger */
router.delete('/:id/passenger/', async function(req, res, next) {
    let id = req.params.id;
    const trip = await deletePassengerToTrip(id, req.body);
    res.json(trip);
  });

module.exports = router;
