// // /* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session')

const server = require('../../src/app.js')

const app = session(server)
/*----------------------------------------------------------------------------- */
describe('GET /recipes', () => {
  ///////////////////////////////////////////////////////////////////////////////
  test('get all recipes, response status 200', async () => {
    await app.get('/recipes').send().expect(200)
  })
  //////////////////////////////////////////////////////////////////////////////
  xtest('get recipe query=name(rice) response status 200', async () => {
    await app.get('/recipes?name=rice').expect(200)
  })
  //////////////////////////////////////////////////////////////////////////////
  test('get recipe query=name(calamardo) response status 204', async () => {
    const res = await app.get('/recipes?name=calamardo').send()
    expect(res.statusCode).toBe(205)

  })
  //////////////////////////////////////////////////////////////////////////////
})
/*----------------------------------------------------------------------------- */
/*----------------------------------------------------------------------------- */

test('two plus  two is four', () => {
  expect(2 + 2).toBe(4)
})

// afterAll(() => {
//   server.close()
// })