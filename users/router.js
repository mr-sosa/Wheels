const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('./controller');

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

module.exports = router;
