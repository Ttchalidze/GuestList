import { useEffect, useState } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2412-TK";
const RESOURCE = "/recipes";
const API = BASE_URL + COHORT + RESOURCE;
export default function app() {
  const [recipe, setRecipes] = useState([
    {
      id: 1,
      name: "Pizza",
      description: "A delicious pizza",
      imageUrl: "https://loremflickr.com/320/240/food,pizza",
    },
  ]);
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) throw Error("ERROR !!!!!!!!");
        const result = await response.json();
        setRecipes(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    getRecipes();
  }, []);
  return (
    <>
      <h1>Reciepes</h1>
      <RecipeCollection recipes={recipe} />
    </>
  );
}
function RecipeCollection({ recipes }) {
  return (
    <article className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </article>
  );
}
function RecipeCard({ recipe }) {
  return (
    <article className="recipe">
      <h2>
        {recipe.name} #{recipe.id}
      </h2>
      <figure>
        <img alt={recipe.name} src={recipe.imgUrl} />
      </figure>
      <p>{recipe.description}</p>
    </article>
  );
}
