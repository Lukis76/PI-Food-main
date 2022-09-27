const { getApiName } = require('./getApiName.js')
const { getDbName } = require('./getDbName')

const getInfoName = async (name) => {
  try {
    const apiName = await getApiName(name)
    const dbName = await getDbName(name)

    return apiName.concat(dbName)
  } catch (err) {
    return 'error'
  }
}

module.exports = {
  getInfoName,
}
