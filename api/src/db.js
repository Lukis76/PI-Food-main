const { Sequelize } = require('sequelize')
//-----------------------------------------
const fs = require('fs')
const path = require('path')
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB,
  DATABASE_URL
} = require('../config')

let sequelize = undefined
if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    protocol: 'postgres',
  })
} else {
  console.log("como =>>>>>>>>> ")
  sequelize = new Sequelize(DB_USER, DB_PASSWORD, DB_NAME, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB,
    database: DB_NAME,
    
  })
}

const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//----------------------------------------------------------------
////////////////////////////////////////////////
const { Recipe, Diet, Steps } = sequelize.models
/////////////////////////////////////////////////////
Recipe.belongsToMany(Diet, { through: 'recipe_diet' })
Diet.belongsToMany(Recipe, { through: 'recipe_diet' })
////////////////////////////////////////////////////////////
Recipe.hasMany(Steps, { as: 'steps', foreignKey: 'recetaId' })
Steps.belongsTo(Recipe, { as: 'receta' })
//////////////////////////////////////
//----------------------------------------------------------------

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
