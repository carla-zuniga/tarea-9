import './CocktailList.css';
import CocktailCard from './CocktailCard';

function CocktailList({ cocktails, onSelect, showImage }) {
  if (!cocktails || cocktails.length === 0) {
    return <p className="cocktail-list__empty">No se encontraron cócteles</p>;
  }

  return (
    <section className="cocktail-list">
      {cocktails.map((cocktail) => (
        <CocktailCard
          key={cocktail.idDrink}
          cocktail={cocktail}
          onClick={() => onSelect(cocktail.idDrink)}
          showImage={showImage}
        />
      ))}
    </section>
  );
}

export default CocktailList;
