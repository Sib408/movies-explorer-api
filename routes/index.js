const router = require('express').Router();
const { errors } = require('celebrate');
const { NotFoundError } = require('../utils/errors/index');
const { validateRegister, validateLogin } = require('../utils/validation');
const { login, createUser } = require('../controllers/users');
const validateToken = require('../middlewares/auth');

const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.post('/signin', validateLogin, login);
router.post('/signup', validateRegister, createUser);

router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

router.use('/users', validateToken, usersRouter);
router.use('/movies', validateToken, moviesRouter);
router.use('/*', validateToken, (req, res, next) => next(new NotFoundError('Данная страница не найдена')));
router.use(errors());

module.exports = router;
