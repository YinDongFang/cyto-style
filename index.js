const getMaxValue = require('./getMaxValue')
const isEvenNumber = require('./isEvenNumber')
const toLowerCase = require('./toLowerCase')
const generateUUID = require('./generateUUID')

module.exports = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }