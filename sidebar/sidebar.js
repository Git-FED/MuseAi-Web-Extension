const MUSE_URL = 'https://muse.ai/';
const openButton = document.querySelector('#openMuseButton');
const refreshButton = document.querySelector('#refreshButton');
const statusText = document.querySelector('#statusText');

function openMuse() {
  chrome.tabs.create({ url: MUSE_URL });
  statusText.textContent = 'Muse AI opened in a new tab.';
  openButton.classList.add('is-open');
  window.setTimeout(() => openButton.classList.remove('is-open'), 900);
}

openButton.addEventListener('click', openMuse);
refreshButton.addEventListener('click', () => {
  statusText.textContent = 'Connection ready. Muse AI is one click away.';
  refreshButton.classList.add('spin');
  window.setTimeout(() => refreshButton.classList.remove('spin'), 500);
});
