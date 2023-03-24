# Modelo de dados

- Categories: id, category
- Products: id, product, price
- Images: id, description, url

- Category has many Products
- Product has and belongs to many Categories
- Product has many Images

# Category <> N:M <> Product
- Product 1:N Image

# Operações
- CRUD: para todos
- buscar todos os produtos por 01 categoria
- buscar um produto -> trazer as imagens(pelo menos a primeira)
- paginado