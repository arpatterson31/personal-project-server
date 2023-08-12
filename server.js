'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const notFound = require('./src/error-handlers/404.js');
const errorHandler = require('./src/error-handlers/500.js');
const userRoutes = require('./src/routes/userRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.use('*', notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_DB);
app.listen(PORT, () => console.log(`Gurrl we up on: ${PORT}!`));


