// /* eslint-disable import/no-extraneous-dependencies */

test('two plus  two is four', () => {
  expect(2 + 2).toBe(4)
})

const supertest = require('supertest')
// const server = require('../../src/app')
const { conn } = require('../../src/db')
// const app = require('../../src/app')
// const session = require('supertest-session');
const app = require('../../src/app.js');
const server = require('../../src/app.js')

// const api = session(app);



const api = supertest(app)

// describe('rutas de recipes en localhost:3388', () => {
  test('get router recipe', async () => {
    await api
      .get('/recipes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
// })


afterAll(() => {
  conn.close(server)
})