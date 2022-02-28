const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
console.log("process.env",process.env)

module.exports = {
  url: process.env.URL
};
