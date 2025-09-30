const lemmatizer = require('wink-lemmatizer');

function lemmatizeWord(word) {

    const loWord = word.toLowerCase();
    const lem = lemmatizer.noun(loWord);
    // console.log(`lemmatized word ${lem}`)
    return lem;
}

function isIncluded(ingredient, recipeIngredients) {
    for(let ing of recipeIngredients){
        let ingSplit = ing.split(/[-\s,\.]+/);
        let lemmatizedIngSplit = ingSplit.map(ing => lemmatizeWord(ing))
        // console.log(`ingredient: ${ingredient}, ingSplit: ${lemmatizedIngSplit} \\ ${lemmatizedIngSplit.includes(ingredient)}`)     //<===
        if(lemmatizedIngSplit.includes(ingredient))
            return 1
    }
    return 0
}

function simScore(ingredients, recipeIngredients){
    let score = 0;
    ingredients.forEach((ing)=>{
        score += isIncluded(ing, recipeIngredients)
    })
    score /= ingredients.length;
    // console.log(`score = ${score}`)     //<===
    return parseFloat(score.toFixed(2));
}

function matchRecipe(ingredients, recipes) {

    const lemmatizedIngredients = ingredients.map(ing => lemmatizeWord(ing));
    let simScores = []

    recipes.forEach((recipe) => {
        let ingRecipeNames = recipe.ingredients.map(ing => ing.name);
        let simScoreObj = {};
        simScoreObj[recipe.title] = simScore(lemmatizedIngredients, ingRecipeNames)
        simScores.push(simScoreObj);
    })

    return simScores;
}

module.exports = {
    lemmatizeWord,
    isIncluded,
    simScore,
    matchRecipe
}