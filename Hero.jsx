import './Hero.css';

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-eyebrow">Welcome to ComponentCorner</p>
        <h1>{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a className="hero-button" href="#products">
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default Hero;
