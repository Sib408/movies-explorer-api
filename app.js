require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiterSetting } = require('./utils/const');

const { PORT = 3000, DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(requestLogger);

const limiter = rateLimit(limiterSetting);
app.use(limiter);

mongoose.connect(DB_ADDRESS, {});
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://api.sib408.movies.nomoredomains.xyz',
    'https://sib408.movies.nomoredomains.xyz',
  ],
  credentials: true,
  maxAge: 300,
}));
app.use(router);
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT);
