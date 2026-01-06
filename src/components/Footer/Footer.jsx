import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a className="iconBox tripadvisor" href="#" aria-label="Tripadvisor">
          <img src="/src/assets/tripadvisor.png" alt="Tripadvisor" />
        </a>

        <a className="iconBox getguide" href="#" aria-label="GetYourGuide">
          <img src="/src/assets/getyourguide.png" alt="GetYourGuide" />
        </a>

        <a className="iconBox facebook" href="#" aria-label="Facebook">
          <img src="/src/assets/facebook.png" alt="Facebook" />
        </a>

        <a className="iconBox instagram" href="#" aria-label="Instagram">
          <img src="/src/assets/instagram.png" alt="Instagram" />
        </a>
      </div>

      <div className="footer-bar">
        <button
          className="toTop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          aria-label="Back to top"
        >
          ▲
        </button>

        <p className="copy">
          Copyright © 2026 Agadir activities - Powered by Creative Themes
        </p>
      </div>
    </footer>
  );
}
