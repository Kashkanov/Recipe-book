import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsRotate} from "@fortawesome/free-solid-svg-icons/faArrowsRotate";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";

const addIngredients = ({matchedRecipes, topMatchedRecipe}) => {

    return (
        <div
            className="relative flex flex-col items-center justify-center bg-[#8E5F5F] w-5/6 h-5/6 mt-25 rounded-xl gap-2 p-5">
            <div className="flex w-full h-1/6 justify-between items-center">
                <h1 className="text-3xl text-white"><strong>Results</strong></h1>
                <button className="text-2xl cursor-pointer">Retry&nbsp;<FontAwesomeIcon icon={faArrowsRotate}/></button>
            </div>
            <div className="flex w-full h-5/6 justify-center p-2">
                <div className="relative flex flex-col justify-end items-center w-4/6 h-full">
                    <div
                        className="absolute flex top-0 justify-center items-center h-1/6 bg-white text-3xl text-black z-10 p-5 text-mogra gap-2">
                        <span>Best Match</span>
                        <div className="h-full flex items-start pb-13">
                            <img src="../../../public/icons/thumbs-up.png" alt="like" className="w-10 h-10"/>
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col justify-between items-center w-full h-11/12 shadow-md shadow-black rounded-lg overflow-hidden">
                        <button className="relative flex flex-col w-full h-full justify-between items-center">
                            <img className="w-full h-full object-cover" src={topMatchedRecipe.recipe.picture}
                                 alt="recipe"/>
                            <div className="absolute bottom-5 w-[100px] h-[100px] bg-[#FEF9C3] z-10 rotate-45"></div>
                            <div
                                className="absolute flex justify-center items-center bottom-0 text-2xl h-[70px] w-full text-black bg-[#FEF9C3] z-10">
                                {topMatchedRecipe.recipe.title} - <strong>{(topMatchedRecipe[topMatchedRecipe.recipe.title] * 100).toFixed(2)}%</strong>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-3/6 h-full pl-3">
                    <div className="relative flex flex-col w-full h-11/12 gap-y-2">
                        {matchedRecipes && matchedRecipes.map((recipe, index) => {
                            const count = index + 2;
                            return (
                                <div key={recipe.recipe._id} className="flex justify-between items-center h-1/4 w-full bg-[#FEF9C3] rounded-lg text-black text-3xl p-5">
                                    <span className="text-mogra">{count}</span>
                                    <span className="">{recipe.recipe.title}</span>
                                    <span className=""> - {recipe[recipe.recipe.title] * 100} % <strong><i>Match</i></strong></span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addIngredients;