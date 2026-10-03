import Hero from '../components/Hero.jsx';

function HomePage() {
  return (
    <>
      <Hero
        title="Tech that fits your world."
        subtitle="Discover carefully selected gadgets designed for work, play, and everything in between."
        ctaText="Shop Featured Products"
      />

      <section className="intro-section">
        <div className="section-heading">
          <p className="eyebrow">Why Shop With Us?</p>
          <h2>Technology Made Simple</h2>
          <p>
            ComponentCorner makes it easy to find useful technology for
            school, work, gaming, and everyday life. We carefully select
            products that combine quality, style, and value.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
