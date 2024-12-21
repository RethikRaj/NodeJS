// This index file is a form of making the whole folder as a module.

const {sum} = require("./sum.js");
const {multiply} = require("./multiply.js");

module.exports = {sum,multiply};