export default function Home() {
  return (
    <div className="container">
   <div className="hero">
  <img src="/hero.jpg" alt="Hero" />
  <header>
    <h1>The Miami Popular Salvation Front</h1>
    <nav>
      <a href="#about">CAUSE</a> | <a href="#features">TOKEN</a> | <a href="#contact">TEAM</a>
    </nav>
  </header>
</div>



      <section id="about">
        <h2>THE CAUSE</h2>
        <p>We, the good citizens of the city of Miami,
          are taking on the fight against the bad image
          that gaming companies are giving our city.</p>
      </section>

      <section id="features">
        <h2>THE TOKEN</h2>
        <p>Our token takes on the race against all the dirty
          gaming coins that defame our good city.</p>
      </section>

      <section id="contact">
        <h2>THE TEAM</h2>
        <p>Our team is a collection of good people and professionals
          who are willing to sacrifice for the good name of Miami.</p>
        <a href="mailto:contact@example.com" className="button">TEAM</a>
      </section>

      <footer>
        <p>&copy; 2025 The Association for Saving the Good Name of Miami - 133 Atlantic Boulevard, Miami</p>
      </footer>
    </div>
  );
}
