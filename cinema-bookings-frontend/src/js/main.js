import { cinemas } from './data/cinemas.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cinemas');
  if (!container) return;

  container.innerHTML = cinemas.map(cinema => {
    const moviesHtml = cinema.movies.map(movie => {
      const timesHtml = movie.times.map(t => `<span class="showtime" role="button" aria-pressed="false">${t}</span>`).join('');
      return `
        <article class="movie-card card" data-movie-id="${movie.id}">
          <div class="poster">
            <img src="${movie.poster}" alt="${movie.title} poster">
          </div>
          <h3>${movie.title}</h3>
          <div class="meta">${movie.genre} • ${movie.duration}</div>
          <div class="showtimes" aria-label="Showtimes">${timesHtml}</div>
        </article>
      `;
    }).join('');

    return `
      <section class="cinema-card card" data-cinema-id="${cinema.id}">
        <div class="cinema-header">
          <div>
            <h2 style="margin:0">${cinema.name}</h2>
            <div class="cinema-meta">${cinema.location} • ${cinema.movies.length} titles</div>
          </div>
          <div class="kicker">Now showing</div>
        </div>

        <div class="movie-grid">
          ${moviesHtml}
        </div>
      </section>
    `;
  }).join('');

  console.log('Cinemas and movies rendered (visual only).');
});