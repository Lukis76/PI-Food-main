const express = require('express')
const { Recipe, Diet } = require('../../db')

const getDbInfo = async () => {
  try {
    const dbData = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    })
    let res = await dbData?.map((el) => {
      return {
        id: el.id,
        name: el.name,
        summary: el.summary,
        score: el.score,
        healthScore: el.healthScore,
        img: el.img,
        steps: el.steps,
        diets: el.diets?.map((el) => el.name),
      }
    })
    return res
  } catch (err) {
    console.error(err)
    return 'error'
  }
}

module.exports = { getDbInfo }
