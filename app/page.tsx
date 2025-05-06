export default function Home() {
  return (
    <div className="container">
   <div className="hero">
  <img src="/hero.jpg" alt="Hero" />
  <header>
    <h1>מתחילים מחדש 🚀</h1>
    <nav>
      <a href="#about">אודות</a> | <a href="#features">פיצ'רים</a> | <a href="#contact">צור קשר</a>
    </nav>
  </header>
</div>



      <section id="about">
        <h2>אודות</h2>
        <p>ברוכים הבאים לאתר שלנו! כאן תמצאו מידע עלינו ומה שאנחנו עושים.</p>
      </section>

      <section id="features">
        <h2>פיצ'רים</h2>
        <p>אנחנו מציעים המון גרפיקה, אנימציות קטנות וחוויית משתמש מדהימה.</p>
      </section>

      <section id="contact">
        <h2>צור קשר</h2>
        <p>נשמח לשמוע מכם! מלאו את הטופס או שלחו לנו מייל.</p>
        <a href="mailto:contact@example.com" className="button">שלח מייל</a>
      </section>

      <footer>
        <p>&copy; 2025 האתר שלי - כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}
