const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const apiInfo = require('./utils/apiInfo.js')
const recipe = require('./recipe.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/info', recipe)


module.exports = router;
