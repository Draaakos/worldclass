import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <div>Contacto</div>
      </div>
      <div className="footer__element">
        <div className="footer__email">areainformatica@worldms.cl</div>
        <div className="footer__element-icon"><a href="https://www.facebook.com/worldclassms.limitada.7" className="facebook"><i className="fab fa-facebook"></i></a></div>
        <div className="footer__element-icon"><a href="https://www.instagram.com/worldclassms/" className="instagram"><i className="fab fa-instagram"></i></a></div>
        <div className="footer__element-icon"><a href="https://wa.me/+56965876294" className="whatsapp"><i className="fab fa-whatsapp"></i></a></div>
      </div>
    </footer>
  );  
}

export default Footer;