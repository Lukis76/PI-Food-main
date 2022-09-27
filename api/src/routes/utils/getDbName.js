const { getDbInfo } = require('./getDbInfo.js')

const getDbName = async (name) => {
  try {
    const dbInfo = await getDbInfo()
    const filterName = dbInfo.filter((el) => el.name.includes(name))
    return filterName
  } catch (err) {
    return 'error'
  }
}

module.exports = { getDbName }
