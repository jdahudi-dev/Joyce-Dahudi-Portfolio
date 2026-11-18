// Menu mobile
const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });

// Courbes du courant triphasé (3 phases déphasées de 120°), dessinées une seule fois au chargement
const svg = document.getElementById('wave'), colors = ['#2f6bff', '#ffc933', '#ffffff'];
colors.forEach((c, k) => {
  const pts = [];
  for (let x = 0; x <= 600; x += 5) pts.push(x + ',' + (100 - 70 * Math.sin(x / 600 * 4 * Math.PI + k * 2 * Math.PI / 3)).toFixed(1));
  const p = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  p.setAttribute('points', pts.join(' ')); p.setAttribute('stroke', c);
  svg.appendChild(p);
});

// Année du pied de page
document.getElementById('yr').textContent = new Date().getFullYear();
