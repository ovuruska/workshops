const {model} = require("mongoose")
const schema = require("../schemas")

const NumberModel = model("numbers",schema)

module.exports = NumberModel