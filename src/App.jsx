export default function App() {
  const { data: recipes, loading, error } = useQuery("/recipes");
  if (loading) return <p>Loading</p>;
  if (error || !recipes) return <p>{error}</p>;

  return (
    <>
      <h1>Recipes</h1>
      <RecipeColletion recipes={recipes} />
    </>
  );
}
function RecipeColletion({ recipes }) {
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
        {recipe.name}#{recipe.id}
      </h2>
      <figure>
        <img alt={recipe.name} src={recipe.imgUrl} />
      </figure>
      <p>{recipe.description}</p>
    </article>
  );
}
