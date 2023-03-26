const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('novobanco.sqlite3',err=>{
  console.log(err, 'init')
})

const initDB = database => new Promise((resolve,reject)=>{
  const db = new sqlite.Database(database,err=>{
    if(err){
      reject(err)
    }else{
      resolve(db)
    }
  })
})

const queryWithParams = (db, query) => new Promise((resolve, reject)=>{
  db.run(query,values, err=>{
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
})

module.exports ={
  initDB,
  queryWithParams
}