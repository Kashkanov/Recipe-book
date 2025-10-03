const recipes = require('../recipe_book.recipes.json');

const lemmatizeWord = require('../../services/recipe/recipeMatch.js').lemmatizeWord;
const isIncluded = require('../../services/recipe/recipeMatch.js').isIncluded;
const simScore = require('../../services/recipe/recipeMatch.js').simScore;
const matchRecipe = require('../../services/recipe/recipeMatch.js').matchRecipe;

test('Check lemmatizer', ()=>{
    expect(lemmatizeWord('Tomatoes')).toBe('tomato')
})

test('Check detect included ingredient', ()=>{
    expect(isIncluded('tomato', ['tomatoes finely chopped'])).toBe(1)
})

test('Check detect not included ingredient', ()=>{
    expect(isIncluded('eggplant', ['Eggplant(optional)'])).toBe(0)
})

test('Check sim score should be 0.33', () => {
    ingredients = ['tomato', 'potatoes', 'egg']
    recipeIngredients = ['finely chopped tomatoes', "garlic, diced", "soy sauce"]

    expect(simScore(ingredients, recipeIngredients)).toBe(0.33);
})

test('Check all sim scores if matches 5 or more', ()=> {
    ingredients = ['Tomatoes', 'Eggs', 'Potato']
    topFive = [
        {
            "Beef Kaldereta": 0.67,
            "recipe": {
                "_id": { "$oid": "68a814f12369bcb5d56931f8" },
                "cook_time": 75,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A flavorful tomato-based meat stew, usually beef or goat, cooked with liver spread, potatoes, and bell peppers.",
                "ingredients": [
                    { "name": "beef chuck, cubed", "quantity": 2, "unit": "lbs" },
                    { "name": "tomato sauce", "quantity": 1, "unit": "cup" },
                    { "name": "liver spread", "quantity": 0.25, "unit": "cup" },
                    { "name": "grated cheese", "quantity": 0.5, "unit": "cup" },
                    { "name": "beef broth or water", "quantity": 1, "unit": "cup" },
                    { "name": "potatoes, cubed", "quantity": 2, "unit": "medium" },
                    { "name": "carrot, sliced", "quantity": 1, "unit": "medium" },
                    { "name": "red bell pepper, sliced", "quantity": 1, "unit": "" },
                    { "name": "green bell pepper, sliced", "quantity": 1, "unit": "" },
                    { "name": "onion, chopped", "quantity": 1, "unit": "" },
                    { "name": "garlic, minced", "quantity": 4, "unit": "cloves" },
                    { "name": "cooking oil", "quantity": 2, "unit": "tablespoons" },
                    { "name": "salt and pepper", "quantity": "to taste", "unit": "" }
                ],
                "picture": "/public/recipes/kaldereta.jpg",
                "prep_time": 20,
                "steps": [
                    "Heat oil in a pot and sauté garlic and onion until fragrant.",
                    "Add beef cubes and cook until browned.",
                    "Pour in tomato sauce and broth. Cover and simmer for 1 hour or until beef is tender.",
                    "Add liver spread and cheese. Stir until well blended.",
                    "Add potatoes and carrots. Cook until vegetables are tender.",
                    "Add bell peppers and cook for 5 more minutes.",
                    "Season with salt and pepper to taste.",
                    "Serve hot with rice."
                ],
                "title": "Beef Kaldereta",
                "uploader": "jRizz1230"
            }
        },
        {
            "Menudo": 0.67,
            "recipe": {
                "_id": { "$oid": "68a814f12369bcb5d56931f9" },
                "cook_time": 45,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A hearty Filipino stew made with pork, liver, potatoes, and carrots simmered in a savory tomato sauce.",
                "ingredients": [
                    { "name": "pork", "quantity": 2, "unit": "lbs" },
                    { "name": "pig liver", "quantity": 0.25, "unit": "lb" },
                    { "name": "potatoes, diced", "quantity": 1, "unit": "cup" },
                    { "name": "carrot, cubed", "quantity": 1, "unit": "piece" },
                    { "name": "soy sauce", "quantity": 0.5, "unit": "cup" },
                    { "name": "lemon", "quantity": 0.5, "unit": "piece" },
                    { "name": "onion, chopped", "quantity": 1, "unit": "piece" },
                    { "name": "garlic, minced", "quantity": 3, "unit": "cloves" },
                    { "name": "sugar", "quantity": 1, "unit": "teaspoon" },
                    { "name": "tomato sauce", "quantity": 0.75, "unit": "cup" },
                    { "name": "water", "quantity": 1, "unit": "cup" },
                    { "name": "hotdogs, sliced diagonally", "quantity": 4, "unit": "pieces" },
                    { "name": "cooking oil", "quantity": 2, "unit": "tablespoons" },
                    { "name": "dried bay leaves", "quantity": "2 to 3", "unit": "pieces" },
                    { "name": "salt and pepper", "quantity": "to taste", "unit": "" }
                ],
                "picture": "/public/recipes/menudo.jpg",
                "prep_time": 15,
                "steps": [
                    "Combine pork, soy sauce, and lemon in a bowl. Marinate for at least 1 hour.",
                    "Heat oil in a pan.",
                    "Sauté garlic and onion.",
                    "Add the marinated pork. Cook for 5 to 7 minutes.",
                    "Pour in tomato sauce and water and then add the bay leaves. Let boil and simmer for 30 minutes to an hour depending on the toughness of the pork. Note: Add water as necessary.",
                    "Add-in the liver and hot dogs. Cook for 5 minutes.",
                    "Put-in potatoes, carrots, sugar, salt, and pepper. Stir and cook for 8 to 12 minutes.",
                    "Serve. Share and enjoy!"
                ],
                "title": "Menudo",
                "uploader": "fluff06"
            }
        },
        {
            "Sinigang na Baboy": 0.33,
            "recipe": {
                "_id": { "$oid": "68a814f12369bcb5d56931f6" },
                "cook_time": 60,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A Filipino soup made with pork belly, tomatoes, and a rich tomato-based sauce. It's a popular main dish in the Philippines and is often served with steamed rice.",
                "ingredients": [
                    { "name": "pork belly or ribs", "quantity": 2, "unit": "lbs" },
                    { "name": "onion, quartered", "quantity": 1, "unit": "large" },
                    { "name": "tomatoes, quartered", "quantity": 2, "unit": "medium" },
                    { "name": "sinigang mix (tamarind-based)", "quantity": 1, "unit": "pack" },
                    { "name": "water", "quantity": 8, "unit": "cups" },
                    { "name": "radish, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "string beans, cut into 2-inch pieces", "quantity": 1, "unit": "cup" },
                    { "name": "eggplant, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "kangkong (water spinach)", "quantity": 1, "unit": "cup" },
                    { "name": "green chili peppers (optional)", "quantity": 2, "unit": "pieces" },
                    { "name": "salt or fish sauce", "quantity": "to taste", "unit": "" }
                ],
                "picture": "/public/recipes/sinigang-baboy.jpg",
                "prep_time": 15,
                "steps": [
                    "Boil pork with water in a pot. Skim off scum as it forms.",
                    "Add onions and tomatoes. Let simmer for 30 to 40 minutes or until pork is tender.",
                    "Add sinigang mix and stir well.",
                    "Add radish, eggplant, and string beans. Cook for 5–7 minutes.",
                    "Add green chili and kangkong last. Simmer for another 2–3 minutes.",
                    "Season with salt or fish sauce as needed.",
                    "Serve hot with steamed rice."
                ],
                "title": "Sinigang na Baboy",
                "uploader": "karma_kameleon"
            }
        },
        {
            "Pancit Canton": 0.33,
            "recipe": {
                "_id": { "$oid": "68b016f96b05efcba55b90b6" },
                "cook_time": 30,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A Filipino stir-fried noodle dish with vegetables, meat, and soy-based sauce.",
                "ingredients": [
                    { "name": "egg noodles (canton)", "quantity": 2, "unit": "packs" },
                    { "name": "chicken breast, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "pork, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "Chinese sausage, sliced", "quantity": 2, "unit": "pieces" },
                    { "name": "cabbage, shredded", "quantity": 1, "unit": "cup" },
                    { "name": "carrots, julienned", "quantity": 1, "unit": "cup" },
                    { "name": "green beans, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "soy sauce", "quantity": 2, "unit": "tablespoons" },
                    { "name": "oyster sauce", "quantity": 1, "unit": "tablespoon" },
                    { "name": "chicken broth", "quantity": 2, "unit": "cups" },
                    { "name": "garlic, minced", "quantity": 4, "unit": "cloves" },
                    { "name": "onion, chopped", "quantity": 1, "unit": "" },
                    { "name": "cooking oil", "quantity": 2, "unit": "tablespoons" },
                    { "name": "salt and pepper", "quantity": "to taste", "unit": "" }
                ],
                "picture": "./public/recipes/pancit-canton.jpg",
                "prep_time": 20,
                "steps": [
                    "Heat oil in a wok and sauté garlic and onion.",
                    "Add chicken, pork, and Chinese sausage. Cook until lightly browned.",
                    "Add soy sauce, oyster sauce, and chicken broth. Bring to a boil.",
                    "Stir in vegetables and cook for 3 minutes.",
                    "Add noodles and toss until well combined and broth is absorbed.",
                    "Season with salt and pepper to taste.",
                    "Serve hot with calamansi on the side."
                ],
                "title": "Pancit Canton",
                "uploader": "cookpinoy"
            }
        },
        {
            "Arroz Caldo": 0.33,
            "recipe": {
                "_id": { "$oid": "68b016f96b05efcba55b90b8" },
                "cook_time": 45,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A comforting Filipino rice porridge flavored with ginger, garlic, and chicken, often topped with boiled egg and toasted garlic.",
                "ingredients": [
                    { "name": "glutinous rice", "quantity": 1, "unit": "cup" },
                    { "name": "regular rice", "quantity": 0.5, "unit": "cup" },
                    { "name": "chicken pieces", "quantity": 1, "unit": "lb" },
                    { "name": "chicken broth", "quantity": 8, "unit": "cups" },
                    { "name": "ginger, sliced", "quantity": 1, "unit": "thumb" },
                    { "name": "garlic, minced", "quantity": 4, "unit": "cloves" },
                    { "name": "onion, chopped", "quantity": 1, "unit": "" },
                    { "name": "fish sauce", "quantity": 2, "unit": "tablespoons" },
                    { "name": "boiled eggs", "quantity": "to serve", "unit": "" },
                    { "name": "spring onions and toasted garlic", "quantity": "to garnish", "unit": "" }
                ],
                "picture": "./public/recipes/arroz-caldo.jpg",
                "prep_time": 10,
                "steps": [
                    "Heat oil in a pot and sauté garlic, onion, and ginger.",
                    "Add chicken and cook until lightly browned.",
                    "Add rice and stir to coat with flavors.",
                    "Pour in chicken broth and bring to a boil.",
                    "Simmer until rice is cooked and porridge-like consistency is achieved.",
                    "Season with fish sauce.",
                    "Serve hot, topped with boiled egg, spring onions, and toasted garlic."
                ],
                "title": "Arroz Caldo",
                "uploader": "comfort_foods"
            }
        }
    ]


    expect(matchRecipe(ingredients, recipes)).toEqual(topFive)
})


test('Check all sim scores if matches less than 5', ()=> {
    ingredients = ['Eggplant']
    topFive = [
        {
            "Sinigang na Baboy": 1,
            "recipe": {
                "_id": { "$oid": "68a814f12369bcb5d56931f6" },
                "cook_time": 60,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A Filipino soup made with pork belly, tomatoes, and a rich tomato-based sauce. It's a popular main dish in the Philippines and is often served with steamed rice.",
                "ingredients": [
                    { "name": "pork belly or ribs", "quantity": 2, "unit": "lbs" },
                    { "name": "onion, quartered", "quantity": 1, "unit": "large" },
                    { "name": "tomatoes, quartered", "quantity": 2, "unit": "medium" },
                    { "name": "sinigang mix (tamarind-based)", "quantity": 1, "unit": "pack" },
                    { "name": "water", "quantity": 8, "unit": "cups" },
                    { "name": "radish, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "string beans, cut into 2-inch pieces", "quantity": 1, "unit": "cup" },
                    { "name": "eggplant, sliced", "quantity": 1, "unit": "cup" },
                    { "name": "kangkong (water spinach)", "quantity": 1, "unit": "cup" },
                    { "name": "green chili peppers (optional)", "quantity": 2, "unit": "pieces" },
                    { "name": "salt or fish sauce", "quantity": "to taste", "unit": "" }
                ],
                "picture": "/public/recipes/sinigang-baboy.jpg",
                "prep_time": 15,
                "steps": [
                    "Boil pork with water in a pot. Skim off scum as it forms.",
                    "Add onions and tomatoes. Let simmer for 30 to 40 minutes or until pork is tender.",
                    "Add sinigang mix and stir well.",
                    "Add radish, eggplant, and string beans. Cook for 5–7 minutes.",
                    "Add green chili and kangkong last. Simmer for another 2–3 minutes.",
                    "Season with salt or fish sauce as needed.",
                    "Serve hot with steamed rice."
                ],
                "title": "Sinigang na Baboy",
                "uploader": "karma_kameleon"
            }
        },
        {
            "Kare-Kare": 1,
            "recipe": {
                "_id": { "$oid": "68b016f96b05efcba55b90ba" },
                "cook_time": 90,
                "datetime_added": "2023-10-06T12:00:00Z",
                "description": "A traditional Filipino stew made with peanut sauce, oxtail, and vegetables, served with bagoong (fermented shrimp paste).",
                "ingredients": [
                    { "name": "oxtail, cut into serving pieces", "quantity": 2, "unit": "lbs" },
                    { "name": "tripe (optional)", "quantity": 1, "unit": "lb" },
                    { "name": "peanut butter", "quantity": 1, "unit": "cup" },
                    { "name": "ground toasted rice", "quantity": 0.25, "unit": "cup" },
                    { "name": "annatto seeds (atsuete)", "quantity": 2, "unit": "tablespoons" },
                    { "name": "string beans, cut into 2-inch pieces", "quantity": 2, "unit": "cups" },
                    { "name": "pechay (bok choy)", "quantity": 1, "unit": "bundle" },
                    { "name": "eggplant, sliced", "quantity": 1, "unit": "piece" },
                    { "name": "garlic, minced", "quantity": 2, "unit": "cloves" },
                    { "name": "onion, chopped", "quantity": 1, "unit": "" },
                    { "name": "cooking oil", "quantity": 2, "unit": "tablespoons" },
                    { "name": "water", "quantity": 6, "unit": "cups" },
                    { "name": "salt and pepper", "quantity": "to taste", "unit": "" },
                    { "name": "bagoong (shrimp paste)", "quantity": "to serve", "unit": "" }
                ],
                "picture": "./public/recipes/kare-kare.jpg",
                "prep_time": 30,
                "steps": [
                    "Boil oxtail (and tripe if using) in water until tender, skimming scum as it rises.",
                    "In a separate pan, heat oil and sauté garlic and onion.",
                    "Add peanut butter, ground rice, and annatto water (soaked annatto seeds in warm water).",
                    "Pour mixture into the pot of meat. Simmer until sauce thickens.",
                    "Add vegetables and cook until just tender.",
                    "Season with salt and pepper.",
                    "Serve hot with bagoong on the side."
                ],
                "title": "Kare-Kare",
                "uploader": "filipino_foodie"
            }
        }
    ]

    expect(matchRecipe(ingredients, recipes)).toEqual(topFive)
})

// test('Check all sim scores if matches are less than 5', ()=> {