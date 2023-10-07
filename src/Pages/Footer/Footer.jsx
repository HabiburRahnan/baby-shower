import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 rounded text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact Us
          </Link>
          <Link to="about" className="link link-hover">
            About Us
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link to="twitter"></Link>
            <Link to="youtube.com"></Link>
            <Link to="facebook.com"></Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
