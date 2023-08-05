'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_DB);
require('./src/server.js').start(PORT);
