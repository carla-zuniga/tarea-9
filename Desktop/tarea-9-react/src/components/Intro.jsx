import './intro.css';


function Intro() {
  return (
    <section className="intro">
      <div className="intro__contenido">
        <h2 className="intro__titulo">Bienvenidos a Brewhaus</h2>
        <p className="intro__texto">
          En Brewhaus creemos que el café es una experiencia sensorial y emocional. 
          No solo seleccionamos los mejores granos de origen y los tostamos con precisión artesanal, 
          sino que también diseñamos cada rincón de nuestro espacio para que te sientas como en casa.
          <br /><br />
          Aquí puedes tomarte una pausa del día, compartir ideas, conectar con otros o simplemente disfrutar tu momento.
          Nuestra carta está pensada para sorprender, con variedades de café de especialidad, infusiones y repostería fresca hecha en casa
        </p>
        <button className="intro__boton">Conoce nuestro menú</button>
      </div>
    </section>
  );
}

export default Intro;
