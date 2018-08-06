const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
Clothing Type Schema
 */
const ClothingTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
    },
  },
  {
    collection: 'clothingType',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },
);

ClothingTypeSchema.index({ name: 'text' });

module.exports = mongoose.model('ClothingType', ClothingTypeSchema);
