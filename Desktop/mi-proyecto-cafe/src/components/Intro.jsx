import './Intro.css';
function Intro() {
  return (
    <section className="intro">
      <div className="intro__contenido">
        <h2 className="intro__titulo">¡Brinda con nosotros!</h2>
        <p className="intro__texto">
          En Brinda creemos que cada cóctel es más que una bebida: es una experiencia para disfrutar, compartir y celebrar.
Seleccionamos cuidadosamente las recetas y te ayudamos a descubrir la mezcla perfecta según tu ánimo, momento o compañía.

          <br /><br />
          Esta app está pensada para acompañarte en esa pausa del día, una conversación especial o simplemente para darte un gusto.
Explora sabores, guarda tus favoritos y deja que Brinda te inspire con cócteles únicos, sin importar si prefieres algo con o sin alcohol.

        </p>
        <button className="intro__boton">Coctelería</button>
      </div>
    </section>
  );
}

export default Intro;
