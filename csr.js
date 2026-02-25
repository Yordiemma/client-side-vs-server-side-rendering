
const DATA = {
  testimonials: [
    {
      avatar: "👩",
      name: "Sarah M.",
      role: "Mum of two, London",
      lead: "My kids haven't put it down!",
      quote:
        '"The Dino Dig Kit was a huge hit. My 5-year-old learned so much and had a blast."',
      color: "card--purple",
    },
    {
      avatar: "👨",
      name: "Marcus T.",
      role: "Dad, Manchester",
      lead: "Fast delivery, brilliant quality.",
      quote:
        '"Ordered Thursday, arrived Friday. Packaging was adorable and the toy is solid."',
      color: "card--orange",
    },
    {
      avatar: "👩‍🦱",
      name: "Priya K.",
      role: "Mum, Bristol",
      lead: "Safe materials I can trust.",
      quote:
        '"As a parent I worry about safety. WonderToys uses only certified non-toxic materials."',
      color: "card--green",
    },
    {
      avatar: "👴",
      name: "Jim & Carol",
      role: "Grandparents, Edinburgh",
      lead: "Perfect gift, every time.",
      quote:
        '"We\'ve ordered four times now. Our grandchildren light up when a WonderToys parcel arrives!"',
      color: "card--lilac",
    },
  ],
};

// ─── TEMPLATE HELPERS ────────────────────────────────────────────────────────

function renderTestimonialCard(t) {
  return `
    <li class="card ${t.color}">
      <div class="card-header">
        <div class="avatar" aria-hidden="true">${t.avatar}</div>
        <div>
          <h3 class="card-name">${t.name}</h3>
          <p class="card-role">${t.role}</p>
        </div>
        <div class="stars" aria-label="5 out of 5 stars" role="img">★★★★★</div>
      </div>
      <p class="card-lead">${t.lead}</p>
      <p class="card-quote">${t.quote}</p>
    </li>
  `;
}

// ─── MAIN RENDER ─────────────────────────────────────────────────────────────

function render() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <!-- SKIP LINK -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- HEADER -->
    <header class="page-header" role="banner">
      <div class="logo" aria-label="WonderToys home">
        <span class="logo-icon" aria-hidden="true">🧸</span>
        <span class="logo-text">WonderToys</span>
      </div>

      <button
        class="nav-toggle"
        aria-expanded="false"
        aria-controls="main-nav"
        aria-label="Open navigation menu"
      >
        <span aria-hidden="true">☰</span>
      </button>

      <nav id="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#testimonials">Reviews</a>
      </nav>
    </header>

    <!-- MAIN -->
    <main id="main-content">
      <!-- HERO -->
      <section id="home" class="hero" aria-labelledby="hero-heading">
        <div class="hero-content">
          <div class="badge">✨ New arrivals just landed!</div>
          <h1 id="hero-heading" class="hero-title">
            Toys that make<br />
            <span class="accent">kids go WOW!</span>
          </h1>
          <p class="hero-desc">
            Safe, colourful, and packed with fun  our toys spark imagination
            and keep little ones smiling all day long.
          </p>
          <div class="hero-actions">
            <a href="#testimonials" class="btn btn-outline">See Reviews ⭐</a>
          </div>
          <p class="hero-note">
            🔒 All toys meet EU & UK safety standards &nbsp;|&nbsp; 🚚 Free
            delivery over £30
          </p>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="blob"></div>
          <div class="floating-emojis">
            <span style="--d:0s; --x:10%; --y:15%">🎠</span>
            <span style="--d:.4s; --x:75%; --y:10%">🚀</span>
            <span style="--d:.8s; --x:20%; --y:70%">🦕</span>
            <span style="--d:1.2s; --x:65%; --y:65%">🎨</span>
            <span style="--d:.6s; --x:45%; --y:40%">⭐</span>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <div class="section-inner">
          <h2 id="testimonials-heading" class="section-title">
            Parents Love Us ❤️
          </h2>
          <p class="section-sub">Real reviews from real families</p>

          <ul class="testimonials-grid" role="list">
            ${DATA.testimonials.map(renderTestimonialCard).join("")}
          </ul>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer" role="contentinfo">
      <p class="footer-logo">🧸 WonderToys</p>
      <p>© 2026 WonderToys Ltd. All rights reserved.</p>
      <p class="footer-note">
        This page uses <strong>Client-Side Rendering (CSR)</strong> — all
        content is injected by JavaScript after page load.
      </p>
    </footer>
  `;

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
}



document.addEventListener("DOMContentLoaded", render);