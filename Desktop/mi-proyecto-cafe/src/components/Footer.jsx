
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contenedor">
        <div className="footer__columna">
          <h4 className="footer__titulo">Contacto</h4>
          <ul className="footer__lista">
            <li>Email: contacto@brinda.com</li>
            <li>Tel: +56 9 1234 5678</li>
          </ul>
        </div>


        <div className="footer__columna">
          <h4 className="footer__titulo">Preguntas Frecuentes</h4>
          <ul className="footer__lista">
            <li>¿Cómo comprar?</li>
            <li>¿Formas de pago?</li>
            <li>Política de envíos</li>
          </ul>
        </div>


        <div className="footer__columna">
          <h4 className="footer__titulo">Ubicación</h4>
          <ul className="footer__lista">
            <li>Santiago, Chile</li>
          </ul>
        </div>


        <div className="footer__columna">
          <h4 className="footer__titulo">Síguenos</h4>
         <div className="footer__redes">
  <a href="#"><i className="fab fa-instagram"></i></a>
  <a href="#"><i className="fab fa-facebook"></i></a>
  <a href="#"><i className="fab fa-twitter"></i></a>
</div>


        </div>
      </div>


      <div className="footer__copy">
        <p>&copy; 2025 Brinda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}


export default Footer;
