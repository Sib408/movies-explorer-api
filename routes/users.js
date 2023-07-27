const usersRouter = require('express').Router();

const {
  getUserById, editUser,
} = require('../controllers/users');

const { validateEditUser } = require('../utils/validation');

usersRouter.get('/me', getUserById);
usersRouter.patch('/me', validateEditUser, editUser);

module.exports = usersRouter;
