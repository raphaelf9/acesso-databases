const db = require('./db')

const init = database => {

const create = async(data)=>{
  const dbConn = await db.initDB(database)
  await db.queryWithParams(dbConn,`INSERT INTO categories (id,category) VALUES (?,?)`, data)
}

const findAll = async ()=>{
    const dbConn = await db.initDB(database)
    return db.query(dbConn, `SELECT * FROM categories`)
}

const remove = async(id)=>{
  const dbConn = await db.initDB(database)
  await db.queryWithParams(dbConn, `DELETE FROM categories WHERE ID =?`, [id])
}

const update = async(id, data)=>{
  const dbConn = await db.initDB(database)
  await db.queryWithParams(dbConn , `UPDATE categories set CATEGORY = ? WHERE id = ? `,[...data, id])
}

const findAllPaginated = async ({pageSize=1, currentPage=0})=>{
  const dbConn = await db.initDB(database)
  const records = await db.query(dbConn, `SELECT * FROM categories limit ${currentPage*pageSize}, ${pageSize+1}`)
  if(records.length>pageSize){
    records.pop()
  }
  return {
    data: records,
    hasnext :records.length > pageSize
  }
}
return {
  findAll,
  findAllPaginated,
  remove,
  create,
  update
 }
}




module.exports= init