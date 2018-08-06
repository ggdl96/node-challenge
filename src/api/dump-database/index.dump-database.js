
const Mongoose = require('mongoose');
const Promise = require('bluebird');

const config = require('../../config/vars');
const ClothingType = require('../models/clothing-type.model');

const Brand = require('../models/brand.model');
const brandsData = require('./data/brand.data');
const clothingTypesData = require('./data/clothing-type.data');

Mongoose.Promise = Promise;

async function loadData() {
  try {
    console.log('Running seeders');
    await Brand.remove({});
    await Brand.create(brandsData);

    await ClothingType.remove({});
    await ClothingType.create(clothingTypesData);
    Mongoose.connection.close();
    console.log('Done');
    process.exit();
  } catch (err) {
    console.log('error: ', err);
  }
}

Mongoose.connect(config.mongo.uri, { useMongoClient: true });
const mongo = Mongoose.connection;

mongo
  .on('error', console.log)
  .once('open', loadData);
