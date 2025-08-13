import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json";
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const foundRecipe = data.find((recipe) => String(recipe.id) === id);
    setRecipe(foundRecipe);
  }, [id]);
  if (!recipe) {
    return <div className="text-center text-gray-500">Recipe not found!</div>;
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-gray-500 mt-10">{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      <section className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-semibold mt-6 mb-2">Instructions</h3>
        <ol className="text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
export default RecipeDetail;
