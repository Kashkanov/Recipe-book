import {useState} from "react";
import AddIngredients from "../../Components/Matchipe/AddIngredients.jsx";
import {matchRecipe} from "../../services/recipeService.js";
import MatchResults from "../../Components/Matchipe/MatchResults.jsx";

const MatchPage = () => {
    const [ingredients, setIngredients] = useState([]);
    const [matchedRecipes, setMatchedRecipes] = useState([
        {
            'Kare-Kare': 1,
            recipe: {
                "_id": {
                    "$oid": "68b016f96b05efcba55b90ba"
                },
                "title": "Kare-Kare",
                "picture": "./public/recipes/kare-kare.jpg",
                "prep_time": 30,
                "cook_time": 90,
                "description": "A traditional Filipino stew made with peanut sauce, oxtail, and vegetables, served with bagoong (fermented shrimp paste).",
                "ingredients": [
                    {
                        "quantity": 2,
                        "unit": "lbs",
                        "name": "oxtail, cut into serving pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "lb",
                        "name": "tripe (optional)"
                    },
                    {
                        "quantity": 1,
                        "unit": "cup",
                        "name": "peanut butter"
                    },
                    {
                        "quantity": 0.25,
                        "unit": "cup",
                        "name": "ground toasted rice"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "annatto seeds (atsuete)"
                    },
                    {
                        "quantity": 2,
                        "unit": "cups",
                        "name": "string beans, cut into 2-inch pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "bundle",
                        "name": "pechay (bok choy)"
                    },
                    {
                        "quantity": 1,
                        "unit": "piece",
                        "name": "eggplant, sliced"
                    },
                    {
                        "quantity": 2,
                        "unit": "cloves",
                        "name": "garlic, minced"
                    },
                    {
                        "quantity": 1,
                        "unit": "",
                        "name": "onion, chopped"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "cooking oil"
                    },
                    {
                        "quantity": 6,
                        "unit": "cups",
                        "name": "water"
                    },
                    {
                        "quantity": "to taste",
                        "unit": "",
                        "name": "salt and pepper"
                    },
                    {
                        "quantity": "to serve",
                        "unit": "",
                        "name": "bagoong (shrimp paste)"
                    }
                ],
                "steps": [
                    "Boil oxtail (and tripe if using) in water until tender, skimming scum as it rises.",
                    "In a separate pan, heat oil and sauté garlic and onion.",
                    "Add peanut butter, ground rice, and annatto water (soaked annatto seeds in warm water).",
                    "Pour mixture into the pot of meat. Simmer until sauce thickens.",
                    "Add vegetables and cook until just tender.",
                    "Season with salt and pepper.",
                    "Serve hot with bagoong on the side."
                ],
                "datetime_added": "2023-10-06T12:00:00Z",
                "uploader": "filipino_foodie"
            }
        },
        {
            'Kare-Kare': 1,
            recipe: {
                "_id": {
                    "$oid": "68b016f96b05efcba55b90ba"
                },
                "title": "Kare-Kare",
                "picture": "./public/recipes/kare-kare.jpg",
                "prep_time": 30,
                "cook_time": 90,
                "description": "A traditional Filipino stew made with peanut sauce, oxtail, and vegetables, served with bagoong (fermented shrimp paste).",
                "ingredients": [
                    {
                        "quantity": 2,
                        "unit": "lbs",
                        "name": "oxtail, cut into serving pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "lb",
                        "name": "tripe (optional)"
                    },
                    {
                        "quantity": 1,
                        "unit": "cup",
                        "name": "peanut butter"
                    },
                    {
                        "quantity": 0.25,
                        "unit": "cup",
                        "name": "ground toasted rice"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "annatto seeds (atsuete)"
                    },
                    {
                        "quantity": 2,
                        "unit": "cups",
                        "name": "string beans, cut into 2-inch pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "bundle",
                        "name": "pechay (bok choy)"
                    },
                    {
                        "quantity": 1,
                        "unit": "piece",
                        "name": "eggplant, sliced"
                    },
                    {
                        "quantity": 2,
                        "unit": "cloves",
                        "name": "garlic, minced"
                    },
                    {
                        "quantity": 1,
                        "unit": "",
                        "name": "onion, chopped"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "cooking oil"
                    },
                    {
                        "quantity": 6,
                        "unit": "cups",
                        "name": "water"
                    },
                    {
                        "quantity": "to taste",
                        "unit": "",
                        "name": "salt and pepper"
                    },
                    {
                        "quantity": "to serve",
                        "unit": "",
                        "name": "bagoong (shrimp paste)"
                    }
                ],
                "steps": [
                    "Boil oxtail (and tripe if using) in water until tender, skimming scum as it rises.",
                    "In a separate pan, heat oil and sauté garlic and onion.",
                    "Add peanut butter, ground rice, and annatto water (soaked annatto seeds in warm water).",
                    "Pour mixture into the pot of meat. Simmer until sauce thickens.",
                    "Add vegetables and cook until just tender.",
                    "Season with salt and pepper.",
                    "Serve hot with bagoong on the side."
                ],
                "datetime_added": "2023-10-06T12:00:00Z",
                "uploader": "filipino_foodie"
            }
        },
        {
            'Kare-Kare': 1,
            recipe: {
                "_id": {
                    "$oid": "68b016f96b05efcba55b90ba"
                },
                "title": "Kare-Kare",
                "picture": "./public/recipes/kare-kare.jpg",
                "prep_time": 30,
                "cook_time": 90,
                "description": "A traditional Filipino stew made with peanut sauce, oxtail, and vegetables, served with bagoong (fermented shrimp paste).",
                "ingredients": [
                    {
                        "quantity": 2,
                        "unit": "lbs",
                        "name": "oxtail, cut into serving pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "lb",
                        "name": "tripe (optional)"
                    },
                    {
                        "quantity": 1,
                        "unit": "cup",
                        "name": "peanut butter"
                    },
                    {
                        "quantity": 0.25,
                        "unit": "cup",
                        "name": "ground toasted rice"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "annatto seeds (atsuete)"
                    },
                    {
                        "quantity": 2,
                        "unit": "cups",
                        "name": "string beans, cut into 2-inch pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "bundle",
                        "name": "pechay (bok choy)"
                    },
                    {
                        "quantity": 1,
                        "unit": "piece",
                        "name": "eggplant, sliced"
                    },
                    {
                        "quantity": 2,
                        "unit": "cloves",
                        "name": "garlic, minced"
                    },
                    {
                        "quantity": 1,
                        "unit": "",
                        "name": "onion, chopped"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "cooking oil"
                    },
                    {
                        "quantity": 6,
                        "unit": "cups",
                        "name": "water"
                    },
                    {
                        "quantity": "to taste",
                        "unit": "",
                        "name": "salt and pepper"
                    },
                    {
                        "quantity": "to serve",
                        "unit": "",
                        "name": "bagoong (shrimp paste)"
                    }
                ],
                "steps": [
                    "Boil oxtail (and tripe if using) in water until tender, skimming scum as it rises.",
                    "In a separate pan, heat oil and sauté garlic and onion.",
                    "Add peanut butter, ground rice, and annatto water (soaked annatto seeds in warm water).",
                    "Pour mixture into the pot of meat. Simmer until sauce thickens.",
                    "Add vegetables and cook until just tender.",
                    "Season with salt and pepper.",
                    "Serve hot with bagoong on the side."
                ],
                "datetime_added": "2023-10-06T12:00:00Z",
                "uploader": "filipino_foodie"
            }
        },
        {
            'Kare-Kare': 1,
            recipe: {
                "_id": {
                    "$oid": "68b016f96b05efcba55b90ba"
                },
                "title": "Kare-Kare",
                "picture": "./public/recipes/kare-kare.jpg",
                "prep_time": 30,
                "cook_time": 90,
                "description": "A traditional Filipino stew made with peanut sauce, oxtail, and vegetables, served with bagoong (fermented shrimp paste).",
                "ingredients": [
                    {
                        "quantity": 2,
                        "unit": "lbs",
                        "name": "oxtail, cut into serving pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "lb",
                        "name": "tripe (optional)"
                    },
                    {
                        "quantity": 1,
                        "unit": "cup",
                        "name": "peanut butter"
                    },
                    {
                        "quantity": 0.25,
                        "unit": "cup",
                        "name": "ground toasted rice"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "annatto seeds (atsuete)"
                    },
                    {
                        "quantity": 2,
                        "unit": "cups",
                        "name": "string beans, cut into 2-inch pieces"
                    },
                    {
                        "quantity": 1,
                        "unit": "bundle",
                        "name": "pechay (bok choy)"
                    },
                    {
                        "quantity": 1,
                        "unit": "piece",
                        "name": "eggplant, sliced"
                    },
                    {
                        "quantity": 2,
                        "unit": "cloves",
                        "name": "garlic, minced"
                    },
                    {
                        "quantity": 1,
                        "unit": "",
                        "name": "onion, chopped"
                    },
                    {
                        "quantity": 2,
                        "unit": "tablespoons",
                        "name": "cooking oil"
                    },
                    {
                        "quantity": 6,
                        "unit": "cups",
                        "name": "water"
                    },
                    {
                        "quantity": "to taste",
                        "unit": "",
                        "name": "salt and pepper"
                    },
                    {
                        "quantity": "to serve",
                        "unit": "",
                        "name": "bagoong (shrimp paste)"
                    }
                ],
                "steps": [
                    "Boil oxtail (and tripe if using) in water until tender, skimming scum as it rises.",
                    "In a separate pan, heat oil and sauté garlic and onion.",
                    "Add peanut butter, ground rice, and annatto water (soaked annatto seeds in warm water).",
                    "Pour mixture into the pot of meat. Simmer until sauce thickens.",
                    "Add vegetables and cook until just tender.",
                    "Season with salt and pepper.",
                    "Serve hot with bagoong on the side."
                ],
                "datetime_added": "2023-10-06T12:00:00Z",
                "uploader": "filipino_foodie"
            }
        }
    ]);
    const [topMatchedRecipe, setTopMatchedRecipe] = useState({
        'Sinigang na Baboy': 1,
        recipe: {
            _id: '68a814f12369bcb5d56931f6',
            title: 'Sinigang na Baboy',
            picture: '/public/recipes/sinigang-baboy.jpg',
            prep_time: 15,
            cook_time: 60,
            description: "A Filipino soup made with pork belly, tomatoes, and a rich tomato-based sauce. It's a popular main dish in the Philippines and is often served with steamed rice.",
            ingredients: [
                {
                    "quantity": 2,
                    "unit": "lbs",
                    "name": "pork belly or ribs"
                },
                {
                    "quantity": 1,
                    "unit": "large",
                    "name": "onion, quartered"
                },
                {
                    "quantity": 2,
                    "unit": "medium",
                    "name": "tomatoes, quartered"
                },
                {
                    "quantity": 1,
                    "unit": "pack",
                    "name": "sinigang mix (tamarind-based)"
                },
                {
                    "quantity": 8,
                    "unit": "cups",
                    "name": "water"
                },
                {
                    "quantity": 1,
                    "unit": "cup",
                    "name": "radish, sliced"
                },
                {
                    "quantity": 1,
                    "unit": "cup",
                    "name": "string beans, cut into 2-inch pieces"
                },
                {
                    "quantity": 1,
                    "unit": "cup",
                    "name": "eggplant, sliced"
                },
                {
                    "quantity": 1,
                    "unit": "cup",
                    "name": "kangkong (water spinach)"
                },
                {
                    "quantity": 2,
                    "unit": "pieces",
                    "name": "green chili peppers (optional)"
                },
                {
                    "quantity": "to taste",
                    "unit": "",
                    "name": "salt or fish sauce"
                }
            ],
            steps: [
                "Boil pork with water in a pot. Skim off scum as it forms.",
                "Add onions and tomatoes. Let simmer for 30 to 40 minutes or until pork is tender.",
                "Add sinigang mix and stir well.",
                "Add radish, eggplant, and string beans. Cook for 5–7 minutes.",
                "Add green chili and kangkong last. Simmer for another 2–3 minutes.",
                "Season with salt or fish sauce as needed.",
                "Serve hot with steamed rice."
            ],
            datetime_added: "2023-10-06T12:00:00.000Z",
            uploader: 'karma_kameleon'
        }
    });

    const handleSubmitIngredients = async (e) => {
        e.preventDefault();
        const response = await matchRecipe(ingredients)
        console.log(response);      //<===
    }

    return (
        <div className="relative flex flex-col items-center justify-start bg-[#DAD7CD] w-full h-screen pb-5 ">
            <img className="absolute w-full h-full top-0 left-0 object-cover opacity-35"
                 alt="matchipeBg"
                 src="../../../public/assets/matchipe_bg.jpeg"
            />

            {(matchedRecipes.length > 0) && topMatchedRecipe ? (
                <MatchResults
                    matchedRecipes={matchedRecipes}
                    topMatchedRecipe={topMatchedRecipe}
                />
            ) : (
                <AddIngredients
                    handleSubmitIngredients={handleSubmitIngredients}
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                />
            )}
        </div>
    )
}

export default MatchPage;