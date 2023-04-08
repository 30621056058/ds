const mysql = require("mysql")
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"answer"
})
// console.log(connection)

module.exports = connection
