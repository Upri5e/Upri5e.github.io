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
  const note = document.querySelector('[data-contact-note]');
  if (note && document.querySelector('#contact [data-contact]:not([hidden])')) note.hidden = true;
  document.querySelectorAll('[data-poster]').forEach(art => {
    const url = localOrWeb((config.posters || {})[art.dataset.poster]);
    if (!url) return;
    const img = new Image();
    img.alt = ''; // Adjacent project title identifies the image/link.
    img.loading = 'lazy';
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
})();
