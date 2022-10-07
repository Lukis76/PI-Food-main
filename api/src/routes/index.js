const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const apiInfo = require('./utils/apiInfo.js')
const details = require('./details.js')
const recipe = require('./recipe.js')
const diet = require('./type.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/details', details)
router.use('/recipes', recipe)
router.use('/types', diet)


module.exports = router;
