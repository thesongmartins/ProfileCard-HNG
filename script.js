import { PROFILE_DATA, SOCIAL_LINKS, HOBBIES, DISLIKES } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderSocialLinks();
  renderLists();
  initClock();
  initAvatarUpload();
});

function renderProfile() {
  document.getElementById('user-name').textContent = PROFILE_DATA.name;
  document.getElementById('user-title').textContent = PROFILE_DATA.title;
  document.getElementById('user-bio').textContent = PROFILE_DATA.bio;
  document.getElementById('user-avatar').src = PROFILE_DATA.avatar;
  
  const skillContainer = document.getElementById('skill-tags');
  skillContainer.innerHTML = PROFILE_DATA.skills.map(skill => `<span class="tag">${skill}</span>`).join('');
  
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  container.innerHTML = SOCIAL_LINKS.map(link => `
    <li>
      <a href="${link.url}" 
         target="_blank" 
         rel="noopener noreferrer" 
         aria-label="Visit ${link.label} profile (opens in a new tab)" 
         class="social-link">
        ${link.icon}
      </a>
    </li>
  `).join('');
}

function renderLists() {
  const hobbiesContainer = document.getElementById('hobbies-list');
  hobbiesContainer.innerHTML = HOBBIES.map(item => `
    <li class="list-item hobbies-item">${item}</li>
  `).join('');

  const dislikesContainer = document.getElementById('dislikes-list');
  dislikesContainer.innerHTML = DISLIKES.map(item => `
    <li class="list-item dislikes-item">${item}</li>
  `).join('');
}

function initClock() {
  const clockElement = document.getElementById('clock-ms');
  setInterval(() => {
    const now = Date.now();
    clockElement.textContent = `${now} ms`;
    clockElement.parentElement.setAttribute('aria-label', `Current epoch time in milliseconds: ${now}`);
  }, 10); // Update frequently for a smooth feel
}

function initAvatarUpload() {
  const fileInput = document.getElementById('avatar-input');
  const uploadBtn = document.getElementById('upload-btn');
  const avatarImg = document.getElementById('user-avatar');

  uploadBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      if (typeof ev.target?.result === 'string') {
        avatarImg.src = ev.target.result;
      }
    };
    reader.readAsDataURL(file);
  });
}
