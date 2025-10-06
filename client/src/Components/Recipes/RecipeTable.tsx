import RecipeCard from "./RecipeCard.js";
import type {FC} from "react";
import type {recipe} from "../../types/recipe";

type AppProps = {
    recipes: recipe[];
}

const RecipeTable: FC<AppProps> = ({recipes}) => {

    return (
        <div className="w-4/6 grid grid-cols-3 gap-4">
            {recipes.map((recipe) => {
                    return (
                        <RecipeCard key={recipe._id} recipe={recipe}/>
                    )
                })
            }
        </div>
    )
}

export default RecipeTable;

