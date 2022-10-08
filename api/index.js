//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { PORT } = require('./config.js')
const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { apiDiets } = require('./src/routes/utils/getCreateDietsdb.js')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(` 🚀 %s listening at ${PORT}`) // eslint-disable-line no-console
    await apiDiets()
  })
})
