
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
Brand Schema
 */
const BrandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
  },
  {
    collection: 'brand',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
);

BrandSchema.index({ name: 'text' });

module.exports = mongoose.model('Brand', BrandSchema);
