import { useState, useEffect } from 'react';
// Diccionario de palabras clave para tipos de cóctel
const moodKeywords = {
  Alcoholic: ["celebrar", "fiesta", "fuerte", "con alcohol", "alcohol"],
  Non_Alcoholic: ["suave", "sin alcohol", "ligero", "refrescante", "no alcohol"]
};

function getMoodByKeyword(keyword) {
  keyword = keyword.toLowerCase();
  for (const mood in moodKeywords) {
    if (moodKeywords[mood].some(k => keyword.includes(k))) {
      return mood;
    }
  }
  return null;
}

import Navbar from './components/Navbar';
import Intro from './components/Intro'; // Este es el componente intermedio
import MoodSelector from './components/MoodSelector';
import CocktailList from './components/CocktailList';
import CocktailCard from './components/CocktailCard';
import CocktailDetail from './components/CocktailDetail';
import Footer from './components/Footer';

function App() {
  const [mood, setMood] = useState('Alcoholic');
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setCocktails([]); // Limpia la lista antes de cargar nuevos
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${mood}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los cócteles");
        return res.json();
      })
      .then((data) => {
        if (!data.drinks) {
          setCocktails([]);
        } else {
          setCocktails(data.drinks);
        }
      })
      .catch((err) => {
        console.error("Error cargando cócteles:", err);
        setCocktails([]);
      });
  }, [mood]);

  // Manejar el cambio de palabra clave
  const handleKeywordChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    const detectedMood = getMoodByKeyword(value);
    if (detectedMood) {
      setMood(detectedMood);
    }
  };

  const fetchCocktailDetail = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedCocktail(data.drinks[0]));
  };

  return (
    <div className="app">
      <Navbar />

      {/* Intro Section */}
      <Intro />

      {/* Input para palabras clave */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="¿Qué te apetece? Ej: celebrar, suave, sin alcohol..."
          style={{
            padding: '0.7rem 1.2rem',
            borderRadius: '20px',
            border: '1px solid #e85d75',
            width: '300px',
            fontSize: '1rem'
          }}
        />
      </div>

      <MoodSelector mood={mood} setMood={setMood} />

      {/* Solo mostrar CocktailList si hay palabra clave válida */}
      {getMoodByKeyword(keyword) && (
        <CocktailList
          cocktails={cocktails}
          onSelect={fetchCocktailDetail}
          showImage={mood === 'Alcoholic' || mood === 'Non_Alcoholic'}
        />
      )}

      {cocktails.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No se encontraron cócteles para este estado de ánimo. 🍹😢
        </p>
      )}

      {/* Modal para detalle del cóctel */}
      {selectedCocktail && (
        <div className="modal-overlay">
          <div className="cocktail-detail-content">
            <CocktailDetail cocktail={selectedCocktail} onClose={() => setSelectedCocktail(null)} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
