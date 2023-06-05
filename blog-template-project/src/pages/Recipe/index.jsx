import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RecipeContainer,
  RecipeIngredients,
  RecipeOverviewContainer,
  RecipePageHeader,
} from "./styles";

import { useLocation } from "react-router-dom";

export function Recipe({ currentRecipe }) {


  const params = useParams();
  const [recipe2, setRecipe] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  // async function getRecipeDetails() {
  //   if (!params.id) return;
  //   setIsLoading(true);
  //   const response = await axios.get(  
  //     `https://api.spoonacular.com/recipes/${params.id}/information`,
  //     { params: { apiKey: import.meta.env.VITE_API_KEY } }
  //   );
  //   setRecipe(response.data);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   getRecipeDetails();
  // }, []);

  return (
    <RecipeContainer>

      {/* <RecipePageHeader title={currentRecipe.title} /> */}
      <RecipeOverviewContainer>
        <img src={currentRecipe.image} alt={currentRecipe.title} />
        <div>
          <p>
            <strong>Hazırlanma:</strong> {currentRecipe.sure} dk
          </p>
          <p>
            <strong>Kaç kişilik? : {currentRecipe.kisi}</strong>
          </p>
          {/* {recipe.cuisines.length > 0 && (
            <p>
              <strong>Cuisine:</strong>
            </p>
          )} */}
        </div>
      </RecipeOverviewContainer>
      <h3>İçindekiler</h3>
      <RecipeIngredients>


      </RecipeIngredients>
      {/* {recipe.instructions && (
          <>
            <h3>Instructions</h3>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </>
        )} */}


    </RecipeContainer>
  );
}
