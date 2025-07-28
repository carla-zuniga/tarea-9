import './pilares.css';

function Pilares() {
  return (
    <section className="pilares">
      <h2 className="pilares__title">Nuestros Pilares</h2>
      <div className="pilares__contenedor">
      <div className="pilar">
      <img src="/public/pilar1.jpg" alt="Pilar1" className='Pilar__imagen'/>

          <h3 className="pilar__titulo">Innovación</h3>
          <p className="pilar__texto">Buscamos nuevas ideas.</p>
        </div>
        <div className="pilar">
        <img src="/public/pilar2.jpg" alt="Pilar2" className='Pilar__imagen'/>


          <h3 className="pilar__titulo">Calidad</h3>
          <p className="pilar__texto">Ofrecemos lo mejor.</p>
        </div>
        <div className="pilar">
          <img src="/public/pilar3.jpg" alt="Pilar3" className='Pilar__imagen'/>

          <h3 className="pilar__titulo">Compromiso</h3>
          <p className="pilar__texto">Nos preocupamos por ti.</p>
        </div>
      </div>
    </section>
  );
}

export default Pilares;
