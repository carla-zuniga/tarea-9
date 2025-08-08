import './MoodSelector.css';

function MoodSelector({ mood, setMood }) {
  return (
    <div className="mood-selector">
      <div className="mood-buttons">
        <button
          className={mood === 'Alcoholic' ? 'active' : ''}
          onClick={() => setMood('Alcoholic')}
        >
          Alcohólico 🍸
        </button>
        <button
          className={mood === 'Non_Alcoholic' ? 'active' : ''}
          onClick={() => setMood('Non_Alcoholic')}
        >
          Sin alcohol 🍹
        </button>
      </div>
    </div>
  );
}

export default MoodSelector;
