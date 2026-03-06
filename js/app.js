/* ============================================================
   StageTracker — Navigation & Interactions
   ============================================================ */

// ── Theme toggle ─────────────────────────────────────────
const root = document.documentElement;
let isDark = false;

function toggleTheme() {
  isDark = !isDark;
  root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.querySelector('.theme-toggle').textContent = isDark ? '☀️ Light' : '🌙 Dark';
}

// ── Screen navigation ─────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Update bottom nav
  const navMap = {
    'screen-offers': 'nav-offers',
    'screen-tracker': 'nav-tracker',
    'screen-agenda': 'nav-agenda',
    'screen-profile': 'nav-profile',
  };
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navId = navMap[id];
  if (navId) document.getElementById(navId).classList.add('active');
}

// ── Chip filter behaviour ─────────────────────────────────
function initChips(containerSelector, callback) {
  const chips = document.querySelectorAll(containerSelector + ' .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (callback) callback(chip.dataset.value);
    });
  });
}

// ── Progress bar animation ────────────────────────────────
function animateProgress(el, target) {
  let current = 0;
  const step = target / 30;
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.style.width = current + '%';
    if (current >= target) clearInterval(interval);
  }, 16);
}

// ── Init ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Start on splash
  showScreen('screen-splash');

  // Theme toggle
  document.querySelector('.theme-toggle')
    ?.addEventListener('click', toggleTheme);

  // Chip rows
  initChips('#tracker-status-chips');
  initChips('#tracker-month-chips');
  initChips('#offers-source-chips');

  // Animate progress bar on tracker
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    setTimeout(() => animateProgress(progressFill, 50), 400);
  }
});
