const PORT = process.env.PORT || 3088
const DB_USER = process.env.DB_USER || 'lucas'
const DB_HOST = process.env.DB_HOST || 'localhost' // 'localhost:7777'
const DB_PORT = process.env.DB_PORT || 5432
const DB_PASSWORD = process.env.DB_PASSWORD || 'mano76'
const DB_NAME = process.env.DB_NAME || 'food'
const API_URL_ONE = 'https://api.spoonacular.com/recipes/complexSearch?'
const API_URL_TWO = 'https://api.spoonacular.com/recipes/'
const API_EXTRA = '&addRecipeInformation=true&number=100'
//////////////////////////////////////////////////////////////
// esta es una clave invalida para pruebas
// const API_KEY='apiKey=554206c77b4c480eba5024e99485370b'
////////////////////////////////////////////////////////////////
const API_KEY = 'apiKey=93d3ada6455a48c7bf4a6efcce71126a'
// const API_KEY = 'apiKey=ceb9596ab176468383c7e383a025c794'
// const API_KEY='apiKey=554206c77b4c480eba5024e99475370b'
// const API_KEY='apiKey=0f838b873de6487ab11dcb409331156a'
// const API_KEY='apiKey=a2e8d83672c34baba942597611ed7b5d'
// const API_KEY='apiKey=32c5dee4b72d494cb8e13383a41c18b9'
module.exports = {
  PORT,
  DB_USER,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_NAME,
  API_URL_ONE,
  API_URL_TWO,
  API_EXTRA,
  API_KEY,
}
