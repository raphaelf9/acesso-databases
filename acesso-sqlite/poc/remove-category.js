const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject)=>{
  const db =  new sqlite.Database('database.sqlite3',(err)=>{
    if(err){
      reject(err)
    }else{
      resolve(db)
    }
  })
})

const run =(db, query,values) => new Promise((resolve, reject)=>{
    db.run(query,values, err=>{
      if(err){
        reject(err)
      }else{
        resolve()
      }
    })
})

const deleteCategories = async()=>{
  const db = await initDB('database.sqlite3')
  console.log('Tabelas criadas com sucesso!')
  await run(db, `DELETE FROM categories WHERE id = ? `,[8])
}
deleteCategories().catch(err=>{
  console.log(err)
})