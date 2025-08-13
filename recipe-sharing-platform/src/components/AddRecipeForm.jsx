import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const validate = (recipeData) => {
    const newErrors = [];
    if (!recipeData) {
      newErrors.push("Recipe data is required.");
    } else {
      if (!recipeData.title) newErrors.push("Title is required.");
      if (!recipeData.summary) newErrors.push("Summary is required.");
      if (!recipeData.image) newErrors.push("Image URL is required.");
      if (
        !Array.isArray(recipeData.ingredients) ||
        recipeData.ingredients.length < 2
      )
        newErrors.push("At least two ingredients are required.");
      if (
        !Array.isArray(recipeData.instructions) ||
        recipeData.instructions.length < 2
      )
        newErrors.push("At least two instructions are required.");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  useEffect(() => {
    const foundRecipe = data.find((recipe) => String(recipe.id) === id);
    setRecipe(foundRecipe);
    validate(foundRecipe);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id,
      title,
      summary,
      image,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split(",").map((steps) => step.trim()),
    };
    console.log("New recipe:", newRecipe);
  };

  if (errors.length > 0) {
    return (
      <div className="max-w-md mx-auto p-6 bg-red-100 text-red-700 rounded-lg shadow-md">
        {errors.map((err, idx) => (
          <p key={idx}>{err}</p>
        ))}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <label
        htmlFor="title"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label
        htmlFor="summary"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Summary
      </label>
      <textarea
        id="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      ></textarea>

      <label
        htmlFor="image"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Image URL
      </label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label
        htmlFor="ingredients"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Ingredients (comma separated)
      </label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label
        htmlFor="instructions"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Instructions (comma separated)
      </label>
      <input
        type="text"
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
