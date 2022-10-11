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
/*----------------------------------------------------------------------------- */
/*----------------------------------------------------------------------------- */
describe('GET /recipes', () => {
  ///////////////////////////////////////////////////////////
  test('get all recipes, response status 200', async () => {
    await app.get('/recipes').send().expect(200)
  })
  //////////////////////////////////////////////////////////////////////
  test('get recipe query=name(rice) response status 200', async () => {
    await app.get('/recipes?name=rice').expect(200)
  })
  ///////////////////////////////////////////////////////////////////////////
  test('get recipe query=name(calamardo) response status 204', async () => {
    const res = await app.get('/recipes?name=calamardo').send()
    expect(res.status).toBe(204)
  })
  //////////////////////////////////////////////////////////////////////////
})
/*----------------------------------------------------------------------- */
/*----------------------------------------------------------------------- */
describe('POST /recipes', () => {
  /*-------------------------------- */
  /*-------------------------------- */
  describe('post not content', () => {
    //////////////////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  /*------------------------------------------------------------------------------------------------------------------------------------- */
  /*------------------------------------------------------------------------------------------------------------------------------------- */
  describe('post content name and summary and steps', () => {
    ///////////////////////////////////////////////////////////////////////////
    test('name < 6 characters not pass,respons obj content msg', async () => {
      const res = await app.post('/recipes').send({ name: 'pera' })
      expect(res.body.msg).toBeDefined()
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('name < 6 characters not pass response { msg: "Deve ingresar el name para la receta con almenos 5 characters" }', async () => {
      const res = await app.post('/recipes').send({ name: 'uva' })
      expect(res.body.msg).toBe(
        'Deve ingresar el name para la receta con almenos 5 characters'
      )
    })
    //////////////////////////////////////////////////////////////////////////////////////////
    test('name > 5 charcters pass  name not summary response obj constent msg', async () => {
      const res = await app.post('/recipes').send({ name: 'la guayava loca' })
      expect(res.body.msg).toBeDefined()
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('name > 5 charcters pass name not summary respons { msg: "Deve ingresar el summary para la receta con almenos 10 characters" } ', async () => {
      const res = await app.post('/recipes').send({ name: 'la guayava loca' })
      expect(res.body.msg).toBe(
        'Deve ingresar el summary para la receta con almenos 10 characters'
      )
    })
    //////////////////////////////////////////////////////////////////////////////////////////////
    test('summary < 11 characters and name > 5 characters, respons obj content msg', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'pollo naranja', summary: 'orange' })
      expect(res.body.msg).toBeDefined()
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('summary < 11 characters and name > 5 characters, respons { msg: "Deve ingresar el summary para la receta con almenos 10 characters" }', async () => {
      const res = await app
        .post('/recipes')
        .send({ name: 'papas asadas', summary: 'crocantes' })
      expect(res.body.msg).toBe(
        'Deve ingresar el summary para la receta con almenos 10 characters'
      )
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////
    test('summary > 10 characters and name > 5 characters, respons obj content msg', async () => {
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
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('1 steps contain less than 10 characters, response {msg: "alguno de los steps de proposionados no contiene mas de 10 characters"}', async () => {
      const res = await app.post('/recipes').send({
        name: 'tamalindo',
        summary: 'zumo de tamalindo',
        steps: [{ number: 1, step: 'revolver' }],
      })
      expect(res.body.msg).toBe(
        'alguno de los steps de proposionados no contiene mas de 10 characters'
      )
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('4 steps contain less than 10 characters, response {msg: "alguno de los steps de proposionados no contiene mas de 10 characters"}', async () => {
      const res = await app.post('/recipes').send({
        name: 'tamalindo',
        summary: 'zumo de tamalindo',
        steps: [
          { number: 1, step: 'revolver' },
          { number: 2, step: 'revolver' },
          { number: 3, step: 'revolver' },
          { number: 4, step: 'revolver' },
        ],
      })
      expect(res.body.msg).toBe(
        'alguno de los steps de proposionados no contiene mas de 10 characters'
      )
    })
    ////////////////////////////////////////////////////////////////////////////////
    test('1 steps with more than 10 characters, response status 201', async () => {
      const res = await app.post('/recipes').send({
        name: 'tamalindo',
        summary: 'zumo de tamalindo',
        steps: [{ number: 1, step: 'revolver a punto caramelo' }],
      })
      expect(res.status).toBe(201)
    })
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('4 steps, two with < 10 characters and two with more than 10 characters, response {msg: "alguno de los steps de proposionados no contiene mas de 10 characters"}', async () => {
      const res = await app.post('/recipes').send({
        name: 'tamalindo',
        summary: 'zumo de tamalindo',
        steps: [
          { number: 1, step: 'revolver a punto caramelo' },
          { number: 2, step: 'revolver' },
          { number: 3, step: 'revolver a punto caramelo' },
          { number: 4, step: 'revolver' },
        ],
      })
      expect(res.body.msg).toBe(
        'alguno de los steps de proposionados no contiene mas de 10 characters'
      )
    })
    ///////////////////////////////////////////////////////////////////////////
  })
})
/*----------------------------------------------------------------------------- */
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
