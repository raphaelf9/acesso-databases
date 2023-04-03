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
        `INSERT INTO products (product, price) VALUES (?,?)`, ['product-test!', 99.22]
      )
      await connection.query(`INSERT INTO categories_products (product_id, category_id) VALUES (?,?) `, [results.insertId, 1])
      console.log('products created!')
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}

run()
