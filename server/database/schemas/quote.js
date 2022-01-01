const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { QuoteEntity } = require('../entities')
const { UseMongooseDelete } = require('../../plugins')

const QuoteSchema = new Schema(QuoteEntity, { timestamp: true });

UseMongooseDelete(QuoteSchema, {
    overrideMethods: "all"
})

module.exports = QuoteSchema;