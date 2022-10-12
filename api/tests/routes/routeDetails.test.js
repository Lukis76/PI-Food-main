const session = require('supertest-session')
//
const server = require('../../src/app.js')
const { conn, Recipe } = require('../../src/db.js')
//
const app = session(server)
////////////////////////////////////////////////////////////////////////////////////
describe('GET ID details recipe', () => {
  //////////////////////////////////////////
  test('detail content name', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.name).toBeDefined()
    expect(res.body.name).toBe(
      'Cauliflower, Brown Rice, and Vegetable Fried Rice'
    )
  })
  //////////////////////////////////////////
  test('detail content summary', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.summary).toBeDefined()
    expect(
      res.body.summary.includes(
        'This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has'
      )
    ).toBe(true)
  })
  //////////////////////////////////////////
  test('detail content img', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.img).toBeDefined()
    expect(res.body.img.includes('jpg')).toBe(true)
  })
  //////////////////////////////////////////
  test('detail content apiID', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.apiID).toBeDefined()
    expect(res.body.apiID).toBe(716426)
  })
  //////////////////////////////////////////
  test('detail content healthScore', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.healthScore).toBeDefined()
    expect(res.body.healthScore).toBe(76)
  })
  //////////////////////////////////////////
  test('detail content diets x4', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.diets).toBeDefined()
    expect(res.body.diets.length).toBe(4)
  })
  //////////////////////////////////////////
  test('detail content steps x9', async () => {
    const res = await app.get(`/details/716426`).send()
    expect((res) => res.body.steps).toBeDefined()
    expect(res.body.steps.length).toBe(9)
  })
})
/*----------------------------------------------------------------------- */
/*----------------------------------------------------------------------- */
/*----------------------------------------------------------------------- */
const { recipeHelp, recipeHel } = require('../helpers/recipes')
describe('DELETE recipes db', () => {
  beforeAll(() => conn.authenticate().catch((err) => console.error(err)))
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create({ ...recipeHel }))
  )

  test('create recipes in db and delete one recipe', async () => {
    // const {name, summary, healthScore, img} = recipeHel
    await Recipe.create(recipeHel)
  })
})
