import { cinemas } from './data/cinemas.js';
import { getCurrentUser } from './auth.js';

const ROWS = ['A','B','C','D','E','F'];
const COLS = 8;
const PRICE_PER_SEAT = 10; // demo price
const PERSIST_KEY = 'cinemas_state';

function loadTakenMap(){
  try { return JSON.parse(localStorage.getItem(PERSIST_KEY) || '{}'); } catch { return {}; }
}
function saveTakenMap(map){ localStorage.setItem(PERSIST_KEY, JSON.stringify(map)); }

function createSeatButton(id, state){
  const btn = document.createElement('button');
  btn.className = 'seat';
  btn.textContent = id;
  btn.dataset.seatId = id;
  btn.disabled = state === 'taken';
  if(state === 'taken') btn.classList.add('taken');
  return btn;
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  if (header) header.innerHTML = `<header class="site-header"><a class="brand" href="../index.html"><span class="logo">CB</span><h1>Cinema Bookings</h1></a></header>`;
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="hint">© ${new Date().getFullYear()}</div></footer>`;

  const container = document.getElementById('booking-page');
  const cinemaId = sessionStorage.getItem('selectedCinemaId');
  const movieId = sessionStorage.getItem('selectedMovieId');
  const time = sessionStorage.getItem('selectedShowtime');

  const cinema = cinemas.find(c => c.id === cinemaId);
  const movie = cinema?.movies.find(m => m.id === movieId);
  const screening = movie?.screenings.find(s => s.time === time);

  if (!cinema || !movie || !screening) {
    container.innerHTML = `
      <section class="card">
        <h2>Selection missing</h2>
        <p class="hint">Please choose a cinema, movie and showtime first.</p>
        <a class="btn btn-ghost" href="../index.html">Back to cinemas</a>
      </section>
    `;
    return;
  }

  // Merge persisted taken seats into the screening
  const takenMap = loadTakenMap();
  const persistedTaken = (((takenMap[cinemaId] || {})[movieId] || {})[time]) || [];
  screening.taken = Array.from(new Set([...(screening.taken || []), ...persistedTaken]));

  // render booking UI
  container.innerHTML = `
    <section class="card">
      <h2 style="margin:0">${movie.title}</h2>
      <div class="cinema-meta mt-8">${cinema.name} · ${cinema.location} · ${time}</div>
      <div class="hr"></div>

      <div id="seat-area" class="mt-12">
        <div class="hint">Select seats (click to toggle). Price: $${PRICE_PER_SEAT} / seat</div>
        <div id="seat-map" style="margin-top:12px;display:grid;gap:8px"></div>
        <div class="mt-12">
          <div class="small">Selected: <span id="selected-count">0</span></div>
          <div class="price">Total: $<span id="selected-total">0</span></div>
        </div>

        <div class="mt-12">
          <button id="confirm-booking" class="btn btn-primary">Confirm booking</button>
          <a class="btn btn-ghost" href="../pages/cinema.html">Back to movies</a>
        </div>
      </div>
    </section>
  `;

  const seatMapEl = document.getElementById('seat-map');
  const selected = new Set();
  const takenSet = new Set(screening.taken || []);

  // layout: grid with row labels
  if (seatMapEl) {
    seatMapEl.style.gridTemplateColumns = `repeat(${COLS + 1}, auto)`; // +1 for row label
    // build rows
    ROWS.forEach(row => {
      // row label cell
      const label = document.createElement('div');
      label.textContent = row;
      label.style.alignSelf = 'center';
      label.style.fontWeight = '700';
      seatMapEl.appendChild(label);

      for (let col = 1; col <= COLS; col++){
        const id = `${row}${col}`;
        const state = takenSet.has(id) ? 'taken' : 'free';
        const btn = createSeatButton(id, state);
        btn.style.margin = '0';
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          if (selected.has(id)){
            selected.delete(id);
            btn.classList.remove('selected');
          } else {
            selected.add(id);
            btn.classList.add('selected');
          }
          updateSelectionUI();
        });
        seatMapEl.appendChild(btn);
      }
    });
  }

  function updateSelectionUI(){
    const countEl = document.getElementById('selected-count');
    const totalEl = document.getElementById('selected-total');
    const count = selected.size;
    if (countEl) countEl.textContent = String(count);
    if (totalEl) totalEl.textContent = String(count * PRICE_PER_SEAT);
  }

  // confirm booking
  const confirmBtn = document.getElementById('confirm-booking');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const currentUser = getCurrentUser();
      if (!currentUser) {
        // store pending booking and require login
        const pending = {
          cinemaId: cinema.id,
          movieId: movie.id,
          time,
          seats: Array.from(selected)
        };
        sessionStorage.setItem('pendingBooking', JSON.stringify(pending));
        window.location.href = '../pages/login.html';
        return;
      }

      if (selected.size === 0) {
        alert('Select at least one seat to continue.');
        return;
      }

      const seats = Array.from(selected);

      // append booking to localStorage, associate with current user
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const booking = {
        id: `bkg-${Date.now()}`,
        userId: currentUser.id,
        userName: currentUser.name,
        cinemaId: cinema.id,
        cinemaName: cinema.name,
        movieId: movie.id,
        movieTitle: movie.title,
        time,
        seats,
        total: seats.length * PRICE_PER_SEAT,
        createdAt: new Date().toISOString()
      };
      bookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));

      // persist taken seats so they cannot be booked again
      const map = loadTakenMap();
      map[cinema.id] = map[cinema.id] || {};
      map[cinema.id][movie.id] = map[cinema.id][movie.id] || {};
      map[cinema.id][movie.id][time] = Array.from(new Set([...(map[cinema.id][movie.id][time] || []), ...seats]));
      saveTakenMap(map);

      // mark seats as taken in-memory for this session
      screening.taken = Array.from(new Set([...(screening.taken || []), ...seats]));

      // show confirmation
      container.innerHTML = `
        <section class="card">
          <h2>Booking confirmed</h2>
          <p class="small">Thank you — booking saved to your account (demo).</p>
          <div class="hr"></div>
          <div class="mt-8"><strong>${movie.title}</strong></div>
          <div class="small mt-4">${cinema.name} · ${cinema.location}</div>
          <div class="mt-8">Showtime: <strong>${time}</strong></div>
          <div class="mt-8">Seats: <strong>${seats.join(', ')}</strong></div>
          <div class="mt-8">Total: <strong>$${booking.total}</strong></div>
          <div class="mt-12">
            <a class="btn btn-primary" href="../index.html">Back to cinemas</a>
            <a class="btn btn-ghost" href="../pages/cinema.html">Back to movies</a>
          </div>
        </section>
      `;
    });
  }
})