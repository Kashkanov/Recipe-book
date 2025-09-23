const isIncluded = require('../../services/recipe/recipeMatch.js').isIncluded;
const simScore = require('../../services/recipe/recipeMatch.js').simScore;

test('Check detect included ingredient', ()=>{
    expect(isIncluded('tomato', ['tomatoes finely chopped'])).toBe(1)
})

test('Check detect not included ingredient', ()=>{
    expect(isIncluded('potato', ['tomatoes finely chopped'])).toBe(0)
})

test('Check sim score should be 0.33', () => {
    ingredients = ['tomato', 'potatoes', 'egg']
    recipeIngredients = ['finely chopped tomatoes', "garlic, diced", "soy sauce"]

    expect(simScore(ingredients, recipeIngredients)).toBe(0.33);
})

// test('Check all sim scores'), ()=> {
//     ingredients = ['tomatoes', 'potatoes', 'egg']
//     recipeIngredients = [
//         {'qty': 2, 'unit': 'pcs', 'name':'finely chopped tomatoes'},
//         {"garlic, diced"},
//         "soy sauce"]
// }