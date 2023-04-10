const categories = require('./categories')('./database.sqlite3')

const test = async()=>{
  //await categories.create([4, 'categoria4'])
  //await categories.remove(1)
  //await categories.update(2,['Categoria atualizada'])
  //const cats = await categories.findAll()
  //const cats = await categories.findAllPaginated({pageSize:2,currentPage: 0})
  console.log(await categories.findAll())
  console.log('cp 0: ', await categories.findAllPaginated({pageSize:2, currentPage:0}))
  console.log('cp 1: ', await categories.findAllPaginated({pageSize:2, currentPage:1}))
  console.log('cp 2: ', await categories.findAllPaginated({pageSize:2, currentPage:2}))
}

test()