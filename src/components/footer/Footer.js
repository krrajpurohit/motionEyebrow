import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-nav">
        <ul className="footer-nav-list">
          <li>Privacy</li>
          <li>Terms</li>
          <li></li>
          <li></li>
          <li></li>
          <li>contact@motioneyebrow</li>
          <li>Instagram</li>
          <li>Behance</li>
        </ul>
      </section>
    <section className="footer-branding">
      <div>
        <h1>
          <span>Motion</span>Eyebrow
        </h1>
        <p>&#169; 2021 Motion Eyebrow. All right reserved.</p>
      </div>
      <div>
        <p>Design by MotionEyebrow</p>
      </div>
    </section>
    </footer>
  );
};

export default Footer;
