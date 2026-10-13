(() => {
  "use strict";
  const config = window.PORTFOLIO || {};
  const root = document.body.dataset.root || "";
  const localOrWeb = value => {
    if (typeof value !== "string" || !value.trim()) return null;
    value = value.trim();
    if (/^https:\/\//i.test(value)) return value;
    if (/^[\w.-]+(?:\/[\w .-]+)*$/.test(value) && !value.split('/').includes('..')) return root + value;
    return null;
  };
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll('[data-contact]').forEach(link => {
    const key = link.dataset.contact;
    const value = config[key];
    if (typeof value !== 'string' || !value.trim()) return;
    let url;
    if (key === 'email') {
      if (!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(value.trim())) return;
      url = 'mailto:' + value.trim();
    } else if (key === 'cv') { url = localOrWeb(value); }
    else if (/^https:\/\//i.test(value.trim())) { url = value.trim(); }
    if (!url) return;
    link.href = url;
    link.hidden = false;
    if (key === 'cv') link.setAttribute('download', '');
  });
  const projectsGrid = document.querySelector('.project-grid');
  const projects = Array.isArray(config.projects) ? config.projects : [];
  const escapeHTML = value =>
    String(value ?? '').replace(/[&<>"']/g, character => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);

if (projectsGrid) {
  
    projectsGrid.replaceChildren();

    projects.forEach((project, index) => {
      if (!project || typeof project !== 'object') return;

      if (typeof project.id !== 'string' || !/^[a-z0-9-]+$/.test(project.id)) return;

      const pageURL = `${root}projects/${project.id}.html`;
      const number = String(index + 1).padStart(2, '0');
      const colour = ['lime', 'purple', 'blue', 'orange'].includes(project.colour) ? project.colour : "blue";
      const tags = Array.isArray(project.tags) ? project.tags : [];

      const article = document.createElement('article');
      article.className = 'project-card';
      article.innerHTML = `
        <a class="art-link" href="${pageURL}" aria-label="Read about ${escapeHTML(project.title)}">
         <div class="project-art ${colour}" data-poster="${project.id}">
              <div class="art-grid" aria-hidden="true"></div><span class="art-index" aria-hidden="true">HK /
                ${escapeHTML(project.id.toUpperCase())}</span>
              <div class="art-symbol" aria-hidden="true">${escapeHTML(project.symbol || '◇')}</div><span class="art-label">${escapeHTML(project.engine)}</span><span
                class="art-note">Project artwork · footage to add</span>
            </div>
          </a>
          <div class="card-body">
            <p class="eyebrow">${number} / ${escapeHTML(project.category)}</p>
            <h3><a href="${pageURL}"> ${escapeHTML(project.title)}<span aria-hidden="true">↗</span></a></h3>
            <p>${escapeHTML(project.description)}</p>
            <div class="tags">
            ${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}
            </div>
          </div>
      `;

      projectsGrid.append(article);
    });
}
const note = document.querySelector('[data-contact-note]');
if (note && document.querySelector('#contact [data-contact]:not([hidden])')) note.hidden = true;
document.querySelectorAll('[data-poster]').forEach(art => {
  const url = localOrWeb((config.posters || {})[art.dataset.poster]);
  if (!url) return;
  const img = new Image();
  img.alt = ''; // Adjacent project title identifies the image/link.
  img.loading = 'eager';
  img.addEventListener('load', () => art.replaceChildren(img));
  img.src = url;
});
document.querySelectorAll('[data-video]').forEach(figure => {
  const key = figure.dataset.video;
  const id = (config.videos || {})[key];
  if (typeof id !== 'string' || !/^[A-Za-z0-9_-]{11}$/.test(id)) return;
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + id;
  frame.title = document.querySelector('h1').textContent + ' — project video';
  frame.loading = 'lazy';
  frame.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  const caption = document.createElement('figcaption');
  caption.textContent = (config.videoCaptions || {})[key] || 'Project demonstration.';
  figure.replaceChildren(frame, caption);
});
const project = document.querySelector('[data-video]');
const entries = project && (config.media || {})[project.dataset.video];
if (Array.isArray(entries)) {
  let gallery;
  entries.forEach(item => {
    if (!item || typeof item !== 'object') return;
    const figure = document.createElement('figure');
    figure.className = 'inline-media';
    let media;
    if (item.type === 'youtube' && /^[A-Za-z0-9_-]{11}$/.test(item.id || '')) {
      media = document.createElement('iframe');
      media.src = 'https://www.youtube-nocookie.com/embed/' + item.id;
      media.title = item.caption || item.section || 'Project demonstration';
      media.loading = 'lazy';
      media.allow = 'encrypted-media; picture-in-picture; fullscreen';
      media.allowFullscreen = true;
      media.referrerPolicy = 'strict-origin-when-cross-origin';
    } else if (item.type === 'image') {
      const url = localOrWeb(item.src);
      if (!url) return;
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      const img = new Image();
      img.src = url;
      img.alt = item.alt || item.caption || 'Project screenshot';
      img.loading = 'lazy';
      link.append(img);
      media = link;
    } else return;
    figure.append(media);
    if (item.caption) {
      const caption = document.createElement('figcaption');
      caption.textContent = item.caption;
      figure.append(caption);
    }
    const section = [...document.querySelectorAll('.case-section')].find(el =>
      el.querySelector('h2')?.textContent === item.section);
    if (section) section.querySelector('div').append(figure);
    else {
      if (!gallery) {
        gallery = document.createElement('section');
        gallery.className = 'media-gallery';
        const heading = document.createElement('h2');
        heading.textContent = 'Project footage & screenshots';
        gallery.append(heading);
        project.after(gallery);
      }
      gallery.append(figure);
    }
  });
}
const jamGrid = document.querySelector('.jam-grid');
const gameJams = Array.isArray(config.gameJams) ? config.gameJams : [];
if (jamGrid) jamGrid.replaceChildren();
gameJams.forEach((jamEntry, index) => {
  if (!jamGrid || !jamEntry || typeof jamEntry !== 'object') return;

  const card = document.createElement('article');
  card.className = 'jam-card';
  card.dataset.jam = String(index);
  card.innerHTML = `
      <div class="jam-video"><span>Video coming soon</span></div>
      <h3>Game jam project ${index + 1}</h3>
      <p data-jam-description hidden></p>
    `;
  jamGrid.append(card);
  const jam = (config.gameJams || [])[Number(card.dataset.jam)];
  if (!jam || typeof jam !== 'object') return;
  if (typeof jam.title === 'string' && jam.title.trim()) card.querySelector('h3').textContent = jam.title;
  const description = card.querySelector('[data-jam-description]');
  if (typeof jam.description === 'string' && jam.description.trim()) {
    description.textContent = jam.description;
    description.hidden = false;
  }
  if (Array.isArray(jam.links)) {
    const links = document.createElement('div');
    links.className = 'actions jam-links';
    jam.links.forEach(item => {
      if (!item || typeof item.label !== 'string' || !item.label.trim() || typeof item.url !== 'string') return;
      let url;
      try { url = new URL(item.url.trim()); } catch { return; }
      if (!['https:', 'http:'].includes(url.protocol)) return;
      const link = document.createElement('a');
      link.className = 'button';
      link.textContent = item.label.trim() + ' ↗';
      link.href = url.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      links.append(link);
    });
    if (links.childElementCount) card.append(links);
  }
  if (typeof jam.videoId !== 'string' || !/^[A-Za-z0-9_-]{11}$/.test(jam.videoId)) return;
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/' + jam.videoId;
  frame.title = card.querySelector('h3').textContent + ' — gameplay video';
  frame.loading = 'lazy';
  frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  card.querySelector('.jam-video').replaceChildren(frame);
});
}) ();
