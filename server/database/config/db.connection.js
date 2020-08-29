const {Pool} = require('pg')

const connectionString = process.env.DATABASE_URL

if(!connectionString){
  throw new Error('set a DATABASE_URL env variable')
}

module.exports = new Pool({
  connectionString: connectionString,
  ssl: true
})



