import { cinemas } from './data/cinemas.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize header/footer (reuse existing header rendering on index; keep minimal here)
  const header = document.getElementById('header');
  if (header) header.innerHTML = '';

  // Center map on Dublin
  const dublin = [53.3498, -6.2603];
  const map = L.map('map', { scrollWheelZoom: false }).setView(dublin, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for each cinema
  cinemas.forEach(cinema => {
    if (typeof cinema.lat !== 'number' || typeof cinema.lng !== 'number') return;
    const marker = L.marker([cinema.lat, cinema.lng]).addTo(map);
    const popupHtml = `
      <div style="min-width:180px">
        <strong>${cinema.name}</strong><br/>
        <small class="hint">${cinema.location} · Rating: ${cinema.rating ?? '—'}</small>
        <div style="margin-top:8px">
          <a href="#" class="btn btn-ghost view-marker" data-id="${cinema.id}">View movies</a>
          <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${cinema.lat},${cinema.lng}" class="btn btn-ghost">Directions</a>
        </div>
      </div>
    `;
    marker.bindPopup(popupHtml);
  });

  // delegate clicks on popup links to set selected cinema and navigate
  map.on('popupopen', (e) => {
    const popupNode = e.popup.getElement();
    if (!popupNode) return;
    const viewLink = popupNode.querySelector('.view-marker');
    if (viewLink) {
      viewLink.addEventListener('click', (ev) => {
        ev.preventDefault();
        const id = viewLink.getAttribute('data-id');
        if (id) {
          sessionStorage.setItem('selectedCinemaId', id);
          window.location.href = '../pages/cinema.html';
        }
      });
    }
  });

  // also render a simple list below map
  const list = document.getElementById('locations-list');
  if (list) {
    list.innerHTML = cinemas.map(c => `
      <div class="cinema-overview card" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div>
          <strong>${c.name}</strong><br/><small class="hint">${c.location} · Rating: ${c.rating ?? '—'}</small>
        </div>
        <div>
          <button class="btn btn-ghost view-list" data-id="${c.id}">View</button>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('.view-list').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (id) {
          sessionStorage.setItem('selectedCinemaId', id);
          window.location.href = '../pages/cinema.html';
        }
      });
    });
  }
});