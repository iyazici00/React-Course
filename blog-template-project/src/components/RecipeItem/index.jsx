import { RecipeImageContainer, RecipeItemContainer } from "./styles";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export function RecipeItem({ recipe }) {
  return (
    <RecipeItemContainer  >
      <RecipeImageContainer>

        <img src={recipe.image} alt={recipe.title} />
      </RecipeImageContainer>
      <p>{recipe.title}</p>

    </RecipeItemContainer>
  );
}
