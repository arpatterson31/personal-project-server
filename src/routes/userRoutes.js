'use strict';

const express = require('express');
const User = require('../models/userSchema.js');

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);


async function getAllUsers(req, res, next){
  let allUsers = await User.find({})

  res.status(200).send(allUsers);
}

module.exports = userRouter;
