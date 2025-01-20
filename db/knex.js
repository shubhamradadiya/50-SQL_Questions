let enviroment = process.env.NODE_ENV || "development";
let config = require("../knexfile")[enviroment];
// console.log(config);
module.exports = require("knex")(config);
