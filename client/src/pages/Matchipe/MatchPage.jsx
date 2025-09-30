import {useState} from "react";
import AddIngredients from "../../Components/Matchipe/AddIngredients.jsx";
import {matchRecipe} from "../../services/recipeService.js";

const MatchPage = () => {
    const [ingredients, setIngredients] = useState([]);

    function handleSubmitIngredients(){

        matchRecipe(ingredients)
    }

    return (
        <div className="relative flex flex-col items-center justify-start bg-[#DAD7CD] w-full h-screen pb-5 ">
            <img className="absolute w-full h-full top-0 left-0 object-cover opacity-35"
                 alt="matchipeBg"
                 src="../../../public/assets/matchipe_bg.jpeg"
            />


            <form
                className="relative flex items-center justify-center w-5/6 h-5/6 mt-25 gap-2"
                onSubmit={handleSubmitIngredients}
            >
                <div className="relative flex flex-col justify-between items-center w-2/6 h-full bg-[#978D84] rounded-lg p-10 gap-y-8 shadow-md shadow-gray-600">
                    <h1 className="text-black"><strong><i>Matchipe&#8482;</i></strong></h1>
                    <p>
                        Have all the ingredients but don’t know what to make? Worry not! Matchipe™ is the solution for you! All you have to do is type in all the
                        ingredients available in you kitchen. <span className="text-green-400"><strong>Important: Make sure the spelling is correct.</strong></span>
                    </p>
                    <button
                        type="submit"
                        className="relative flex justify-center items-center bg-[#588157] text-3xl py-3 px-5"
                    >
                        Match!
                    </button>
                </div>
                <div className="relative flex flex-col w-3/6 h-full bg-[#FEF9C3] rounded-lg py-5 px-10 shadow-md shadow-gray-600">
                    <div className="text-2xl flex justify-start w-full">
                        <h2 className="text-black"><strong>Ingredients</strong></h2>
                    </div>
                    <AddIngredients
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                    />
                </div>
            </form>
        </div>
    )
}

export default MatchPage;