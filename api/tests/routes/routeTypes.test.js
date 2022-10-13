const session = require('supertest-session')
//
const server = require('../../src/app.js')
//
const app = session(server)
//
/*------------------------------------------------------ */
/*------------------------------------------------------ */
xdescribe('GET /types', () => {
  ////////////////////////////////////////////////////////
  test('get all diets types / recipes 100', async() => {
    await app.get('/types').send().expect(200)
  })
  test('get respons 10 element ', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.length).toBe(10)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "gluten free"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('gluten free')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "lacto ovo vegetarian"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('lacto ovo vegetarian')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "dairy free"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('dairy free')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "paleolithic"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('paleolithic')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "vegan"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('vegan')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "primal"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('primal')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "whole 30"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('whole 30')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "pescatarian"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('pescatarian')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "fodmap friendly"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('fodmap friendly')).toBe(true)
  })
  ////////////////////////////////////////////////////////
  test('get respons array include => "ketogenic"', async () => { 
    const res = await app.get('/types').send()
    expect(res.body.includes('ketogenic')).toBe(true)
  })

})
/*------------------------------------------------------ */
/*------------------------------------------------------ */
