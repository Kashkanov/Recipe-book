import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

const AddIngredients = ({ingredients, setIngredients, handleSubmitIngredients, isValidIngredients}) => {

    const [currIngredient, setCurrIngredient] = useState("");

    const handleAddIngredient = () => {
        setIngredients([...ingredients, currIngredient]);
        document.querySelector('input[name="name"]').value = '';
        setCurrIngredient("");
    }

    useEffect(() => {
        console.log("currIngredient: ", currIngredient)      //<===
    }, [currIngredient]);

    return (
        <form
            className="relative flex items-center justify-center w-5/6 h-5/6 mt-25 gap-2"
            onSubmit={handleSubmitIngredients}
        >
            <div
                className="relative flex flex-col justify-center items-center w-2/6 h-full bg-[#978D84] rounded-lg p-10 gap-y-8 shadow-md shadow-gray-600">
                <h1 className="text-black"><strong><i>Matchipe&#8482;</i></strong></h1>
                <p>
                    Have all the ingredients but don’t know what to make? Worry not! Matchipe™ is the solution for you!
                    All you have to do is type in all the
                    ingredients available in you kitchen. <span className="text-green-400"><strong>Important: Make sure the spelling is correct.</strong></span>
                </p>
                <button
                    type="submit"
                    className="relative flex justify-center items-center bg-[#588157] text-3xl py-3 px-5"
                >
                    Match!
                </button>
                <div className="w-full h-1/12">
                    {!isValidIngredients &&
                        <span className="text-red-400">Ingredients cannot be empty.</span>
                    }
                </div>
            </div>
            <div
                className="relative flex flex-col w-3/6 h-full bg-[#FEF9C3] rounded-lg py-5 px-10 shadow-md shadow-gray-600">
                <div className="text-2xl flex justify-start w-full">
                    <h2 className="text-black"><strong>Ingredients</strong></h2>
                </div>
                <div className="relative w-full h-full flex flex-col justify-between mt-5">
                    {/* Ingredients list */}
                    <div className="flex-[1_1_0] overflow-y-auto ">
                        {ingredients.map((ingredient, index) => (
                            <div
                                key={index}
                                className="w-full h-[5rem] flex flex-row justify-between items-center bg-[#B1CABA] rounded-lg px-5 mb-1"
                            >
                                <span className="text-xl text-black">{ingredient}</span>
                                <button
                                    className="w-10 h-10 flex justify-center items-center text-red-500 text-xl rounded-lg"
                                    type="button"
                                    onClick={() =>
                                        setIngredients(ingredients.filter((_, i) => i !== index))
                                    }
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add new ingredient box */}
                    <div
                        className="w-full flex flex-col justify-between items-center bg-[#D9D9D9] rounded-lg pb-5 mt-2 gap-y-2 border border-black">
                        <div className="w-full">
                            <span className="text-black text-2xl">Name</span>
                        </div>
                        <div className="w-full px-5">
                            <input
                                className="w-full h-10 bg-white rounded-sm border border-black text-black px-2 text-xl"
                                type="text"
                                name="name"
                                onChange={e => setCurrIngredient(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                className={`relative h-10 flex justify-center items-center text-xl px-2 ${currIngredient ? ' bg-[#344E41] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
                                type="button"
                                onClick={handleAddIngredient}
                                disabled={!currIngredient}
                            >
                                Add Ingredient &nbsp; <FontAwesomeIcon icon={faCirclePlus}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddIngredients;