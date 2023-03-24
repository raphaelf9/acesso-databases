//criação da base de dados
const sqlite = require('sqlite3').verbose()

const database = new sqlite.Database('database.sqlite3', (err)=>{
  console.error(err, 'init')
})