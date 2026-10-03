import './Footer.css';

function Footer({ storeName, email, phone, address }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div>
          <h2>{storeName}</h2>
          <p>Simple, useful technology for your everyday life.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#top">Home</a>
          <a href="#products">Products</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {storeName}. Built with React and Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
