import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const addIngredients = ({ingredients, setIngredients}) => {

    console.log(window.screen.width, window.screen.height);

    return (
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
            <div className="w-full flex flex-col justify-between items-center bg-[#D9D9D9] rounded-lg pb-5 mt-2 gap-y-2 border border-black">
                <div className="w-full">
                    <span className="text-black text-2xl">Name</span>
                </div>
                <div className="w-full px-5">
                    <input
                        className="w-full h-10 bg-white rounded-sm border border-black text-black px-2 text-xl"
                        type="text"
                        name="name"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <button
                        className="relative h-10 flex justify-center items-center bg-[#344E41] text-xl px-2"
                        type="button"
                        onClick={() => {
                            setIngredients([...ingredients, document.querySelector('input[name="name"]').value]);
                            document.querySelector('input[name="name"]').value = '';
                        }}
                    >
                        Add Ingredient &nbsp; <FontAwesomeIcon icon={faCirclePlus}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default addIngredients;