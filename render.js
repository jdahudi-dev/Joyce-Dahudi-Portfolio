/* render.js : transforme content.js en pages. Vous n’avez pas à modifier ce fichier. */
(() => {
  const C = window.CONTENT, $ = s => document.querySelector(s);
  const H = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  const TODO = '<small class="todo">À compléter</small>';

  // Fenêtre d’agrandissement (images et vidéos)
  const box = $('#box');
  const open = n => { box.replaceChildren(H('button', 'x', 'Fermer'), n); box.showModal(); };
  box.addEventListener('click', e => { if (e.target === box || e.target.className === 'x') box.close(); });
  box.addEventListener('close', () => box.replaceChildren());

  // Image, ou image de remplacement si src est vide
  const img = (src, alt, label, cls = '') => {
    if (!src) return H('div', 'ph ' + cls, label + '<br>' + TODO);
    const i = new Image(); i.src = src; i.alt = alt || label; i.loading = 'lazy'; i.decoding = 'async'; i.className = cls;
    i.onerror = () => i.replaceWith(H('div', 'ph ' + cls, 'Fichier introuvable :<br>' + src));
    return i;
  };
  const zoomable = (i, src, alt) => { if (src) { i.classList.add('zm'); i.onclick = () => open(img(src, alt)); } return i; };

  // Vidéo : chargée seulement au clic (MP4 local ou YouTube)
  const yt = u => (u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/) || [])[1];
  const player = v => {
    const id = yt(v.src);
    if (id) { const f = H('iframe'); f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true; f.title = v.titre; return f; }
    const m = H('video'); m.controls = true; m.autoplay = true; m.playsInline = true; m.preload = 'none'; m.poster = v.poster || ''; m.src = v.src; return m;
  };
  const video = v => {
    const f = H('figure', 'vid');
    if (!v.src) { f.append(H('div', 'ph', v.titre + '<br>' + TODO)); return f; }
    const id = yt(v.src), poster = v.poster || (id ? 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg' : '');
    const b = H('button', 'play', '<span aria-hidden="true">▶</span><b>' + v.titre + '</b>');
    b.setAttribute('aria-label', 'Lire la vidéo : ' + v.titre);
    if (poster) b.style.backgroundImage = 'url("' + poster + '")';
    b.onclick = () => f.replaceChildren(player(v));
    const z = H('button', 'zoom', 'Agrandir'); z.onclick = () => open(player(v));
    f.append(b, z); return f;
  };

  // Emplacements simples placés dans index.html
  document.querySelectorAll('[data-v]').forEach(e => e.replaceWith(video(C.videos.find(v => v.id === e.dataset.v) || { titre: 'Vidéo', src: '' })));
  document.querySelectorAll('[data-img]').forEach(e => e.replaceWith(img(C.images[e.dataset.img], '', e.dataset.label)));
  if (C.images.logo) $('.logo').prepend(img(C.images.logo, 'Logo de Joyce Dahudi', '', 'logo-img'));

  // Listes
  const row = (b, s, t) => H('li', '', '<b>' + b + (s ? '<br><small>' + s + '</small>' : '') + '</b><span>' + t + '</span>');
  $('#parcours').append(...C.experiences.map(x => {
    const li = row(x.lieu, x.date, x.texte);
    if (x.photo) li.lastChild.append(zoomable(img(x.photo, x.lieu, '', 'thumb'), x.photo, x.lieu));
    return li;
  }));
  $('#certifs').append(...C.formations.map(f => row(f.lieu, f.date, 'Formation : ' + f.titre + '.')),
    ...C.certifications.map(c => row(c.titre, c.date, (c.organisme || '') + (c.fichier ? ' <a href="' + c.fichier + '" target="_blank" rel="noopener">Voir le document</a>' : ''))));
  if (!C.certifications.length) $('#certifs').append(row('Certifications', '', TODO));

  $('#projets-list').append(...C.projets.map(p => {
    const a = H('article', 'card');
    a.append(zoomable(img(p.image, 'Capture : ' + p.titre, 'Capture d’écran', 'shot sm'), p.image, p.titre), H('span', 'badge', p.badge), H('h3', '', p.titre));
    p.texte.forEach(t => a.append(H('p', '', t)));
    if (p.lien) a.append(H('p', '', '<a class="link" href="' + p.lien + '">' + p.lienTexte + '</a>'));
    return a;
  }));
  $('#videos-list').append(...C.videos.filter(v => v.zone === 'galerie').map(video));
  $('#photos-list').append(...C.photos.map(p => {
    const f = H('figure', 'photo');
    f.append(zoomable(img(p.src, p.legende || p.categorie, p.categorie, 'shot'), p.src, p.legende || p.categorie), H('figcaption', '', p.categorie + (p.legende ? ' : ' + p.legende : '')));
    return f;
  }));
  $('#chrono').append(...C.engagement.map(e => {
    const li = H('li', '', '<time>' + (e.date || '<span class="todo">Date à compléter</span>') + '</time><b>' + e.titre + '</b>');
    if (e.photo) li.append(zoomable(img(e.photo, e.titre, '', 'thumb'), e.photo, e.titre));
    return li;
  }));
  $('#distinctions').append(...C.distinctions.map(d => H('li', '', d)));

  // Coordonnées et réseaux
  const k = C.contact, ICO = { linkedin: 'in', facebook: 'f', instagram: 'ig', tiktok: 'tt', x: 'X', github: 'gh' };
  const item = (ic, nom, url) => H('li', '', '<span class="ico" aria-hidden="true">' + ic + '</span>' + (url ? '<a href="' + url + '" target="_blank" rel="noopener">' + nom + '</a>' : nom + ' : ' + TODO));
  $('#socials').append(item('@', 'E-mail professionnel', k.email && 'mailto:' + k.email), item('wa', 'WhatsApp', k.whatsapp && 'https://wa.me/' + k.whatsapp),
    ...C.social.map(s => item(ICO[s.type] || '#', s.nom, s.url)));
  $('#wa').href = k.whatsapp ? 'https://wa.me/' + k.whatsapp : '#contact';
  $('#cform').action = 'https://formspree.io/f/' + k.formspree;

  // Retour en haut
  const top = $('#top');
  addEventListener('scroll', () => top.classList.toggle('show', scrollY > 600), { passive: true });
  top.onclick = () => scrollTo({ top: 0 });

  // Apparition au défilement (le CSS la désactive si les animations sont réduites)
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll('h2,.card,.rows li,.cols>div,.timeline li,.photo,.vid').forEach(el => { el.classList.add('rv'); io.observe(el); });
})();
