import './CocktailCard.css';

function CocktailCard({ cocktail, onClick, showImage }) {
  return (
    <div className="cocktail-card" onClick={onClick}>
      {showImage && (
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      )}
      <h3>{cocktail.strDrink}</h3>
    </div>
  );
}

export default CocktailCard;
