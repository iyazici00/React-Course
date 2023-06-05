import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { Recipes } from "./pages/Recipes";
import { RecipeItem } from "./components/RecipeItem"


import AddRecipe from "./components/AddRecipe/AddRecipe";

import React, { Component } from 'react';


export default class Router extends Component {

  state = {
    recipes: [],
    currentRecipe: "",
  };

  addToRecipeList = (recipe) => {
    let newRecipes = this.state.recipes;
    newRecipes.push(recipe);
    this.setState({ recipes: newRecipes });

    /*
     console.log(this.state.kullanicilar) 
    */
  };


  getRecipe = (recipeid) => {

    let findrecipe = this.state.recipes.find(recipe => recipe.id === recipeid)
    this.setState({ currentRecipe: findrecipe });

  }



  render() {



    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes recipes={this.state.recipes} getRecipe={this.getRecipe} />} />
        <Route path="/recipess" element={<RecipeItem getRecipe={this.getRecipe} />} />
        <Route path="/recipe" element={<Recipe currentRecipe={this.state.currentRecipe} />} />
        <Route path="/addrecipe" element={<AddRecipe addToRecipeList={this.addToRecipeList} />} />
      </Routes >
    );
  }
}