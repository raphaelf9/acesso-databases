const sqlite = require('sqlite3').verbose()

const initDB = (path) => new Promise((resolve,reject)=>{
  const db = new sqlite.Database(path,(err)=>{
    if(err){
      reject(err)
    }else{
      resolve(db)
    }
  })
})

const queryWithParams =(db, query,values) => new Promise((resolve, reject)=>{
  db.run(query,values, err=>{
    if(err){
      reject(err)
    }else{
      resolve()
    }
  })
})

const query =(db, query) => new Promise((resolve, reject)=>{
  db.all(query, (err, row)=>{
    if(err){
      reject(err)
    }else{
      resolve(row)
    }
  })
})


module.exports ={
  initDB,
  queryWithParams,
  query
}