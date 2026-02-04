import { cinemas } from './data/cinemas.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  if (header) {
    header.innerHTML = `
      <header id="site-header" class="site-header">
        <a class="brand" href="../index.html">
          <span class="logo">CB</span>
          <h1>Cinema Bookings</h1>
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="../index.html">All cinemas</a>
        </nav>
      </header>
    `;
  }

  const container = document.getElementById('cinema-page');
  const selId = sessionStorage.getItem('selectedCinemaId');
  const cinema = cinemas.find(c => c.id === selId);

  if (!cinema) {
    container.innerHTML = `
      <section class="card">
        <h2>Cinema not found</h2>
        <p class="hint">Return to the list and choose a cinema.</p>
        <a class="btn btn-ghost" href="../index.html">Back to cinemas</a>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="card">
      <div class="cinema-header">
        <div>
          <h2 style="margin:0">${cinema.name}</h2>
          <div class="cinema-meta">${cinema.location} · Rating: ${cinema.rating ?? '—'}</div>
          <div class="small mt-8">${cinema.description ?? ''}</div>
        </div>
        <div class="kicker">Now showing · ${cinema.movies.length} titles</div>
      </div>
    </section>

    <section class="movie-grid mt-12" id="movies-list">
      ${cinema.movies.map(m => `
        <article class="movie-card card" data-movie-id="${m.id}">
          <div class="poster">
            <img src="${m.poster}" alt="${m.title} poster">
          </div>
          <h3>${m.title}</h3>
          <div class="meta">${m.genre} · ${m.duration}</div>
          <div class="mt-8 showtimes" aria-label="Showtimes">
            ${m.screenings.map(s => `<button class="showtime btn-ghost btn-book-now" data-movie-id="${m.id}" data-time="${s.time}">${s.time}</button>`).join('')}
          </div>
        </article>
      `).join('')}
    </section>
  `;

  // attach showtime click handlers
  container.querySelectorAll('.btn-book-now').forEach(btn => {
    btn.addEventListener('click', () => {
      const movieId = btn.getAttribute('data-movie-id');
      const time = btn.getAttribute('data-time');
      if (!movieId || !time) return;
      sessionStorage.setItem('selectedCinemaId', cinema.id);
      sessionStorage.setItem('selectedMovieId', movieId);
      sessionStorage.setItem('selectedShowtime', time);
      window.location.href = '../pages/booking.html';
    });
  });
});