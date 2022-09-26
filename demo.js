const searchInfoRecipe = async(name) => {
  console.log("🚀 ~ file: index.js ~ line 5 ~ searchInfoRecipe ~ name =>", name)
  const llamada = await fetch(`http://localhost:3088/recipes?name=${name}`)
  console.log("🚀 ~ file: index.js ~ line 7 ~ searchInfoRecipe ~ llamada", llamada)
  const js = await llamada.json()
  console.log("🚀 ~ file: index.js ~ line 9 ~ searchInfoRecipe ~ js", js)
  return js.results

}