# Profile Card — HNG Internship

A responsive, accessible, and luxurious profile card built with vanilla **HTML5, CSS3, and JavaScript**. This project features a sophisticated aesthetic profile card, optimized for both desktop and mobile experiences.

## Features

- **Luxurious Design**: High-end Onyx and Gold color palette with refined typography and smooth animations.
- **Dynamic Content**: Profile data is centralized in `data.js` for easy updates.
- **Live Clock**: Real-time display of epoch time in milliseconds, updated live for accessibility.
- **Avatar Upload**: Interactive avatar support allowing users to upload and preview their own profile photos.
- **Accessibility**: Built with semantic HTML, WCAG AA contrast ratios, and ARIA labels.
- **No-Build Setup**: Pure vanilla implementation that runs directly in any modern browser.

## Project Structure

```
profile-card/
├── data.js       ← Centralized profile data & social icons
├── favicon.svg   ← Custom SVG favicon
├── index.html    ← Semantic HTML5 structure
├── script.js     ← Rendering logic & interactive features
├── song.jpg      ← Primary profile image
├── style.css     ← Premium CSS design system
└── README.md     ← Documentation
```

## Getting Started

Since this is a vanilla project with ES Modules, it is recommended to run it using a local static server to allow modules to load correctly.

### Option 1: Using Node.js (npx)

```bash
npx serve .
```

Once running, open the provided URL (e.g., `http://localhost:3000` ) in your browser.

## Required `data-testid` Map

For automated testing and grading, the following `data-testid` attributes are implemented:

| Element                    | `data-testid`               |
| -------------------------- | --------------------------- |
| Card root (`<article>`)    | `test-profile-card`         |
| Name (`<h1>`)              | `test-user-name`            |
| Biography (`<p>`)          | `test-user-bio`             |
| Epoch time (ms)            | `test-user-time`            |
| Avatar (`<img>`)           | `test-user-avatar`          |
| Social links list (`<ul>`) | `test-user-social-links`    |
| Twitter link               | `test-user-social-twitter`  |
| GitHub link                | `test-user-social-github`   |
| LinkedIn link              | `test-user-social-linkedin` |
| Hobbies list (`<ul>`)      | `test-user-hobbies`         |
| Dislikes list (`<ul>`)     | `test-user-dislikes`        |

## Accessibility Checklist

- [x] Meaningful `alt` text on the avatar image.
- [x] `aria-live="polite"` on the epoch clock for screen reader updates.
- [x] All links have descriptive `aria-label` tags.
- [x] External links include `target="_blank"` and `rel="noopener noreferrer"`.
- [x] Keyboard-navigable with visible focus states.
- [x] Color contrast ratios meet WCAG AA standards.

## Deployment

This project can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages) by simply uploading the root directory. No build step is required.

## License

MIT
