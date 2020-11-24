const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelSchema = new Schema({
  name: String,
  id: String
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Exercise;