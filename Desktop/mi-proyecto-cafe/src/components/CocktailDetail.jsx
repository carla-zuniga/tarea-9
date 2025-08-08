import './CocktailDetail.css';

function CocktailDetail({ cocktail, onClose }) {
  if (!cocktail) return null;

  // Extraer ingredientes dinámicamente
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure || ''} ${ingredient}`.trim());
    }
  }

  return (
    <div className="cocktail-detail">
      <div className="cocktail-detail__card">
        <button className="cocktail-detail__close" onClick={onClose}>✕</button>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <h2>{cocktail.strDrink}</h2>
        <h4>Ingredientes:</h4>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>🍹 {item}</li>
          ))}
        </ul>
        <h4>Instrucciones:</h4>
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  );
}

export default CocktailDetail;
