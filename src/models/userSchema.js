'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  firstName: {type: String },
  email: { type: String},
  nickname: { type: String},
  picture: { type: String },
  user_id: { type: String },
  username: { type: String },
  projects: { type: Array },
  techStack: { type: Array }
});

// add a space for friends?

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
