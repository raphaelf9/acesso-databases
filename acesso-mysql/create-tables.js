const mysql = require('mysql2/promise')

const run = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cat-products',
    })
    try {
      const [results] = await connection.query(
        `SHOW TABLES LIKE  'categories'`
      )
      if(results.length === 0) {
        await connection.query(`
          CREATE TABLE categories(
            id INT NOT NULL AUTO_INCREMENT,
            category VARCHAR(250) NULL DEFAULT NULL,
            PRIMARY KEY(id)
          )
        `)
        await connection.query(`
          CREATE TABLE products(
            id INT NOT NULL AUTO_INCREMENT,
            product VARCHAR(250) NULL DEFAULT NULL,
            price FLOAT,
            PRIMARY KEY(id)
          )
          `)
        await connection.query(`
            CREATE TABLE images(
              id INT NOT NULL AUTO_INCREMENT,
              description VARCHAR(250) NULL DEFAULT NULL,
              url VARCHAR(500) NULL DEFAULT NULL,
              product_id INT NOT NULL,
              PRIMARY KEY(id),
              KEY fk_images_products_index (product_id),
              CONSTRAINT fk_images_products_constraint FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE
            )
          `)
        await connection.query(`
        CREATE TABLE categories_products(          
          product_id INT NOT NULL,
          category_id INT NOT NULL,
          KEY fk_categories_products_index (product_id, category_id),
          CONSTRAINT fk_categories_products_constraint1 FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
          CONSTRAINT fk_categories_products_constraint2 FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
        )`)
        console.log('tables created!')
      }
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}

run()
