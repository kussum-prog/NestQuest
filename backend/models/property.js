const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: String,
  location: String,
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true,
    },
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

propertySchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Property', propertySchema);
