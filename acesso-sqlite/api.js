const categories = require('./categories')

const test = async()=>{
  await categories.create([1,'teste'])
}

test()