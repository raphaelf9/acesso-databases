const mysql = require('mysql2/promise')

const run = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cat-products',
    })
    try {
      const [results, fields] = await connection.query(
        `SELECT * FROM categories`
      )
      console.log('Categories: ', results)
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}

run()
