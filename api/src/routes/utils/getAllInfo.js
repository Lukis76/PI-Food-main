const { getApiInfo } = require('./getApiInfo.js')
const { getDbInfo } = require('./getDbInfo.js')

const getAllInfo = async () => {
  try {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()

    const result = apiInfo.concat(dbInfo)

    return result
  } catch (err) {
    console.error(err)
    return 'error'
  }
}

module.exports = { getAllInfo }
