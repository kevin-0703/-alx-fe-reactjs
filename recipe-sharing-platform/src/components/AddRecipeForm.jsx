import { useState, useEffect } from "react";
function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const handleSubmit = (e) => {
    e.preventdefault();
    const newRecipe = {
      id,
      title,
      summary,
      image,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split(",").map((step) => item.trim()),
    };
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <label
        for="title"
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
        for="summary"
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
        for="image"
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
        for="ingredients"
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
        for="instructions"
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
