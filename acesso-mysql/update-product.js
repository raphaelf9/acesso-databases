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
        `UPDATE products SET product =?, price=? WHERE id=?`, ['New product', 69.06,4]
      )
      console.log(results, fields)
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}

run()
