const db = require('./db')

const create = async(data)=>{
  const dbConnection = await db.initDB('./database.sqlite3')
  await db.queryWithParams(dbConnection,`INSERT INTO categories (id,category) VALUES (?,?)`,data)
}

module.exports={
  //findAll,
  //findAllPaginated,
  //remove,
  create,
  //update
}