const fs = require('fs')
const path = require('path')

const dbConnection = require('./db.connection')

const sql = fs.readFileSync(path.join(__dirname,'db.build.sql')).toString()
const sql2 = fs.readFileSync(path.join(__dirname, 'DummyData.sql')).toString()


const runDbBuild = () => {
  return dbConnection
  .query(sql)
  .then((res) => {
    dbConnection.query(sql2)})
  .catch((err)=> console.log(err))
}

module.exports = runDbBuild