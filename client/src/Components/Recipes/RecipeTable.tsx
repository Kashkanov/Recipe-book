import RecipeCard from "./RecipeCard.js";
import {type FC} from "react";
import type {recipe} from "../../types/recipe";
import {motion} from "motion/react";

type AppProps = {
    recipes: recipe[];
}

const RecipeTable: FC<AppProps> = ({recipes}) => {


    return (
        <motion.div
            className="w-4/6 grid grid-cols-3 gap-y-3 gap-x-7"
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.2}}
        >
            {recipes.map((recipe) => {
                    return (
                        <RecipeCard key={recipe._id} recipe={recipe}/>
                    )
                })
            }
        </motion.div>
    )
}

export default RecipeTable;

