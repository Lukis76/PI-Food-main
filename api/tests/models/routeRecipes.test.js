/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session')
//
const server = require('../../src/app.js')
//
const app = session(server)
////////////////////////////////////////////////////////////////////////////////////
test(' test prueba conflicto expext de chia (mocha), two plus two is four', () => {
  expect(2 + 2).toBe(4)
})
///////////////////////////////////////////////////////////////////////////////////
//
/*----------------------------------------------------------------------------- */
xdescribe('GET /recipes', () => {
  /////////////////////////////////////////////////////////////////////////
  test('get all recipes, response status 200', async () => {
    await app.get('/recipes').send().expect(200)
  })
  //////////////////////////////////////////////////////////////////////////
  test('get recipe query=name(rice) response status 200', async () => {
    await app.get('/recipes?name=rice').expect(200)
  })
  //////////////////////////////////////////////////////////////////////////
  test('get recipe query=name(calamardo) response status 204', async () => {
    const res = await app.get('/recipes?name=calamardo').send()
    expect(res.status).toBe(204)
  })
  //////////////////////////////////////////////////////////////////////////
})
/*----------------------------------------------------------------------------------------------------------------------------------------- */
/*----------------------------------------------------------------------------------------------------------------------------------------- */
describe('POST /recipes', () => {
  /*-------------------------------- */
  /*-------------------------------- */
  xdescribe('post not content', () => {
    ///////////////////////////////////////////////////////////////////////////
    test('post body recipe not constent, response status 400 ', async () => {
      const res = await app.post('/recipes').send()
      expect(res.status).toBe(400)
    })
    //////////////////////////////////////////////////////////////////////////////
    test('post body recipe not constent, response obj content msg ', async () => {
      const res = await app.post('/recipes').send()
      expect(res.body.msg).toBeDefined()
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('post body recipe not constent, response { msg: "Deve ingresar el name para la receta con almenos 5 characters" }', async () => {
      const res = await app.post('/recipes').send()
      expect(res.body.msg).toBe(
        'Deve ingresar el name para la receta con almenos 5 characters'
      )
    })
  })
  /*------------------------------------------------------- */
  /*------------------------------------------------------- */
  describe('post content name and summary and steps', () => {
    ///////////////////////////////////////////////////////////////////////////
    xtest('name < 6 characters not pass,respons obj content msg', async () => {
      const res = await app.post('/recipes').send({ name: 'pera' })
      expect(res.body.msg).toBeDefined()
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    xtest('name < 6 characters not pass response { msg: "Deve ingresar el name para la receta con almenos 5 characters" }', async () => {
      const res = await app.post('/recipes').send({ name: 'uva' })
      expect(res.body.msg).toBe(
        'Deve ingresar el name para la receta con almenos 5 characters'
      )
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    xtest('name > 5 charcters pass  name not summary response obj constent msg', async () => {
      const res = await app.post('/recipes').send({ name: 'la guayava loca' })
      expect(res.body.msg).toBeDefined()
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    xtest('name > 5 charcters pass name not summary respons { msg: "Deve ingresar el summary para la receta con almenos 10 characters" } ', async () => {
      const res = await app.post('/recipes').send({ name: 'la guayava loca' })
      expect(res.body.msg).toBe(
        'Deve ingresar el summary para la receta con almenos 10 characters'
      )
    })
    //////////////////////////////////////////////////////////////////////////////////////////////
    xtest('summary < 11 characters and name > 5 characters, respons obj content msg', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'pollo naranja', summary: 'orange' })
      expect(res.body.msg).toBeDefined()
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    xtest('summary < 11 characters and name > 5 characters, respons { msg: "Deve ingresar el summary para la receta con almenos 10 characters" }', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'papas asadas', summary: 'crocantes' })
      expect(res.body.msg).toBe(
        'Deve ingresar el summary para la receta con almenos 10 characters'
      )
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////
    xtest('summary > 10 characters and name > 5 characters, respons obj content msg', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'milanesas', summary: 'doracas y crocantes' })
      expect(res.body.msg).toBeDefined()
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('summary > 10 characters and name > 5 characters, respons { msg: "deves proprsionar almenos un step o no estas proporsionando los steps"}', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'tamalindo', summary: 'zumo de tamalindo' })
      expect(res.body.msg).toBe(
        'deves proprsionar almenos un step valido o no estas proporsionando los steps'
      )
    })
    ///////////////////////////////////////////////////////////////////////////
  })
})
/*----------------------------------------------------------------------------- */
// GUIA ejemplo: para arrays
// test('sould respond with an array', async () => {
//   const response = await app.get('/task').send()
//   expect(response.body).toBeInstanceOf(Array)
// })
// GUIA ejemplo: res content post
// test('should have a content-type: application/json in header', async () => {
//   const response = await app.post('/task').send()
//   expect(response.headers["content-type"]).toEqual(
//     expect.stringContaining("json")
//   )
// })
// GUIA ejemplo: res content post id
// test('should respond with an task ID', async () => {
//   const response = await app.post('/task').send()
//   expect(response.body.id).toBeDefined()
// })
/*----------------------------------------------------------------------------- */
