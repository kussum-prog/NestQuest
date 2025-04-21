// models/Room.js
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  title: String,
  location: String,
  coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
});

RoomSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Room', RoomSchema);
