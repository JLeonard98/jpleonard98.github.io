
/* ===== GENERAL SETTINGS ===== */

:root {
  --background: #07182f;
  --surface: #102b4a;
  --blue: #3b82f6;
  --light-blue: #60a5fa;
  --text: #f8fafc;
  --muted: #b9cbe3;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

/* ===== NAVIGATION ===== */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8%;
  background: #091d38;
  border-bottom: 1px solid #1e3a5f;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  color: var(--text);
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
}

.logo span,
.accent {
  color: var(--light-blue);
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--light-blue);
}

/* ===== HERO / PROFILE ===== */

.hero {
  text-align: center;
  padding: 85px 20px 100px;
  background:
    radial-gradient(
      circle at top,
      #153e6b 0%,
      var(--background) 65%
    );
}

.profile-frame {
  width: 155px;
  height: 155px;
  margin: 0 auto 24px;
  padding: 5px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #60a5fa,
    #2563eb,
    #93c5fd
  );
  box-shadow: 0 0 35px #3b82f644;
}

.profile-picture {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 4px solid var(--background);
}

.eyebrow {
  color: var(--light-blue);
  letter-spacing: 4px;
  font-size: 0.85rem;
  font-weight: bold;
}

.hero h1 {
  font-size: clamp(2.3rem, 6vw, 4rem);
  line-height: 1.15;
  margin: 10px 0;
}

.hero-description {
  color: var(--muted);
  max-width: 500px;
  margin: 20px auto 30px;
}

/* ===== BUTTONS ===== */

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  font: inherit;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.2s,
    background 0.2s,
    box-shadow 0.2s;
}

.button:hover {
  transform: translateY(-3px);
}

.primary-button {
  background: var(--blue);
  color: white;
}

.primary-button:hover {
  background: #2563eb;
  box-shadow: 0 6px 20px #3b82f644;
}

.secondary-button {
  border-color: var(--light-blue);
  color: white;
  background: transparent;
}

.secondary-button:hover {
  background: #173b68;
}

/* ===== CONTENT SECTIONS ===== */

.section,
.fun-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 75px 24px;
  text-align: center;
}

.section h2,
.fun-section h2 {
  font-size: 2rem;
  margin-top: 0;
}

.section-description {
  color: var(--muted);
  max-width: 650px;
  margin: 0 auto 35px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 35px;
}

.info-card {
  padding: 28px 22px;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid #24476d;
  transition:
    transform 0.2s,
    border-color 0.2s;
}

.info-card:hover {
  transform: translateY(-6px);
  border-color: var(--light-blue);
}

.card-icon {
  font-size: 2rem;
}

.info-card h3 {
  margin-bottom: 10px;
}

.info-card p {
  color: var(--muted);
  margin-bottom: 0;
}

/* ===== FUN FACT ===== */

.fun-section {
  max-width: none;
  background: #0c2341;
  padding: 60px 24px;
}

.fun-section > p {
  color: var(--muted);
}

.fact-text {
  color: var(--light-blue) !important;
  font-weight: bold;
  min-height: 30px;
  margin-top: 22px;
}

/* ===== CONTACT ===== */

.contact-section {
  padding-bottom: 90px;
}

/* ===== FOOTER ===== */

.footer {
  padding: 25px 8%;
  background: #091d38;
  border-top: 1px solid #1e3a5f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.footer p {
  color: var(--muted);
}

.top-button {
  color: var(--light-blue);
  background: transparent;
  border: 1px solid #315579;
  border-radius: 8px;
  padding: 9px 14px;
  cursor: pointer;
}

.top-button:hover {
  background: var(--surface);
}

/* ===== MOBILE LAYOUT ===== */

@media (max-width: 650px) {
  .navbar {
    padding: 16px 5%;
    flex-wrap: wrap;
    gap: 12px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 0.9rem;
  }

  .hero {
    padding: 60px 18px 75px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .footer {
    justify-content: center;
    text-align: center;
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
