import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Delete Recipe</h3>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
