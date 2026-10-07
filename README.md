# Hassan Khazal — gameplay programming portfolio

A lightweight, responsive static site: plain HTML, CSS and JavaScript. No installation, framework, paid fonts or build step. All project text is in HTML and remains readable without JavaScript. JavaScript adds configured media and contact links.

## Preview

Extract this ZIP, then double-click `index.html`. Keep the folder structure intact. Open project pages by clicking their cards. Videos need an internet connection; YouTube may restrict embeds when opened through file://. To test those locally, run `python -m http.server 8000` from this folder and visit http://localhost:8000, or use VS Code Live Server.

## Personalise before sharing

1. Open `config.js` in VS Code or another text editor.
2. Add your email, LinkedIn and GitHub URLs. Blank links are hidden, so there are no links to invented accounts.
3. Add your CV PDF to `assets/` and enter its relative path in `cv`.
4. Add screenshots to `assets/` and enter their paths under `posters` (for example `assets/minimap.jpg`). 1600 × 900 is a useful size. The default project visuals are abstract placeholders, not game screenshots.
5. Add YouTube video IDs under `videos`. For `https://www.youtube.com/watch?v=XXXXXXXXXXX`, use only `XXXXXXXXXXX`. Videos appear on their project pages. Use videos that permit embedding. Update `videoCaptions` as needed.
6. Review `index.html` and every file in `projects/`. The draft uses the experience you described; verify spelling of your name, dates, roles and contribution descriptions before applying. The Pixoul page now covers your AI work, Battle Rush encounters and development leadership on Pixoul Recon. No performance figures or extra credits have been invented.
7. Check mobile layout and click every contact link after configuration.

For no-JavaScript contact support, add your real email as a normal `mailto:` link in `index.html`, replacing the existing `<noscript>` message.

## Put it on GitHub Pages

1. Create a public repository named `YOURUSERNAME.github.io`, using your actual GitHub username.
2. Upload the CONTENTS of this extracted folder into the repository root. `index.html` must sit directly at the root, not inside an extra `portfolio` folder. Keep `projects/` and `assets/` as folders.
3. Commit the files to `main`.
4. In the repository, open Settings → Pages. Under Build and deployment, choose Deploy from a branch, then `main` and `/ (root)`, and Save.
5. Wait for the Pages deployment to complete. Visit `https://YOURUSERNAME.github.io/`.

An empty `.nojekyll` is included. If uploading with the GitHub website does not include that hidden file, you can create it there using Add file → Create new file. The HTML/CSS/JS works without a build step.

GitHub's publishing instructions:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The site also uses relative links, so it can run in a repository subdirectory URL such as `https://YOURUSERNAME.github.io/portfolio/`.

## Files

- `index.html`: homepage, about, work, experience and contact.
- `projects/plastic-battlegrounds.html`: multiplayer VR case study.
- `projects/minimap-plugin.html`: minimap plugin case study.
- `projects/vehicles.html`: Plastic Battlegrounds vehicle and tank case study, linked from its parent project.
- `projects/pixoul.html`: Pixoul Planet AI, Battle Rush encounters and Pixoul Recon development leadership.
- `projects/cry-of-athena.html`: physical catapult using Unreal physics constraints.
- `style.css`: layout, colours, responsive styles and print styling.
- `config.js`: your links, screenshots, videos and captions.
- `script.js`: media and contact configuration behaviour.
- `assets/favicon.svg`: HK browser icon; place screenshots and CV alongside it.
- `.nojekyll`: static hosting marker.

To change the accent colour, edit `--accent` at the start of `style.css`. To change the name, use your editor's Find in Files to replace `Hassan Khazal`. Update the initials in the header and favicon if needed.

This package creates files only; it does not create a GitHub repository or publish a website.

## Latest content update

Includes ProTube and simulator API integration for Pixoul Recon, additional résumé-backed gameplay contributions, and a training section with the Technical Art certificate and Sumo Evolve completion banner. Email and LinkedIn are populated from the supplied résumé; check that they remain current. The old résumé itself is not included as a public CV download. Add an updated PDF and set `cv` when ready.

## Add multiple videos and pictures

Use `media` in `config.js`. Each project's array accepts any number of entries. Copy and uncomment the examples already inside `pixoul`.

- YouTube: `{ type: "youtube", id: "YOUR_11_CHAR_ID", section: "Battle Rush", caption: "Explain what the clip shows and what you implemented." }`
- Picture: `{ type: "image", src: "assets/pixoul-recon.jpg", alt: "Describe the picture", section: "Pixoul Recon", caption: "Your contribution." }`

For `section`, copy the exact heading from the project page. Omit `section` to show media in a gallery below the main project video; unrecognised section headings also fall back to that gallery. Add a comma between entries. Screenshots open at full size when clicked. Put image files in `assets/`; use YouTube IDs for embedded video. The original `posters` and `videos` entries still control the card image and main project video.

For Pixoul, lead with footage of AI behaviour, the Battle Rush train boss and Pixoul Recon. Keep other contributions as brief supporting evidence. A useful caption says what is happening and which part you built.
