import { cinemas } from './data/cinemas.js';
import { getCurrentUser, logout } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderCinemas();
});

function renderHeader(){
  const header = document.getElementById('header');
  const user = getCurrentUser();
  if (!header) return;

  header.innerHTML = `
    <header id="site-header" class="site-header auth-header">
      <div class="container header-inner">
        <a class="brand" href="./index.html">
          <span class="logo">CB</span>
          <h1>Cinema Bookings</h1>
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="./index.html">Home</a>
          <a href="./pages/locations.html">Locations</a>
        </nav>
        <div class="auth-area">
          ${user ? `
            <div class="profile">
              <span class="avatar">${user.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</span>
              <span class="username">Hi, ${user.name}</span>
              <button id="btn-logout" class="btn btn-ghost small">Log out</button>
            </div>
          ` : `
            <a class="btn btn-ghost small" href="./pages/login.html">Log in</a>
            <a class="btn btn-primary small" href="./pages/register.html">Register</a>
          `}
        </div>
      </div>
    </header>
  `;

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout){
    btnLogout.addEventListener('click', () => {
      logout();
      renderHeader();
    });
  }
}

function renderCinemas(){
  const container = document.getElementById('cinemas');
  if (!container) return;
  container.innerHTML = cinemas.map(cinema => `
    <article class="cinema-overview card stylized" data-id="${cinema.id}" tabindex="0" role="button" aria-label="${cinema.name}">
      <div class="cinema-info">
        <div class="brand-row">
          <div class="logo-sm">${cinema.name.split(' ').slice(0,2).map(n=>n[0]).join('')}</div>
          <div>
            <h3 class="cinema-title">${cinema.name}</h3>
            <div class="cinema-meta">${cinema.location} · Rating: ${cinema.rating ?? '—'}</div>
          </div>
        </div>
        <p class="cinema-desc">${cinema.description ?? ''}</p>
      </div>
      <div class="cinema-actions">
        <button class="btn btn-primary view-movies" data-id="${cinema.id}">View movies</button>
      </div>
    </article>
  `).join('');

  // clicks
  container.querySelectorAll('.cinema-overview').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = el.getAttribute('data-id');
      if (id) {
        sessionStorage.setItem('selectedCinemaId', id);
        window.location.href = './pages/cinema.html';
      }
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });

  container.querySelectorAll('.view-movies').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      if (id) {
        sessionStorage.setItem('selectedCinemaId', id);
        window.location.href = './pages/cinema.html';
      }
    });
  });
}