const { getApiInfo } = require('./getApiInfo.js')
const { getDbInfo } = require('./getDbInfo.js')
//
const getAllInfo = async () => {
  try {
    const apiInfo = await getApiInfo()
    //////////////////////////////////
    if(apiInfo.response?.data) return apiInfo.response.data
    ///////////////////////////////////////////////////////
    const dbInfo = await getDbInfo()
    return apiInfo.concat(dbInfo)
    ////////////////////////////
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getAllInfo }
