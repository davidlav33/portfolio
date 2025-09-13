// Typing animation for intro
const namePhrases = ['Divakar Lav', 'E‑commerce Manager', 'Digital Marketing Specialist'];
let idx = 0, char = 0, forward = true;
const target = document.getElementById('typed-name');
function type() {
  const current = namePhrases[idx];
  if(forward) {
    char++;
    target.textContent = current.slice(0,char);
    if(char === current.length) { forward = false; setTimeout(type, 800); return; }
  } else {
    char--;
    target.textContent = current.slice(0,char);
    if(char === 0) { forward = true; idx = (idx+1) % namePhrases.length; setTimeout(type, 200); return; }
  }
  setTimeout(type, 60);
}
if(target) type();

// Reveal on scroll
const obs = new IntersectionObserver(entries=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting) ent.target.classList.add('reveal');
  });
},{threshold:0.15});
document.querySelectorAll('.card').forEach(c=>obs.observe(c));

// Theme toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
function applyTheme(t){
  if(t === 'dark') { document.documentElement.setAttribute('data-theme','dark'); themeIcon.textContent='☀️'; }
  else { document.documentElement.removeAttribute('data-theme'); themeIcon.textContent='🌙'; }
}
let current = localStorage.getItem('site-theme') || 'light';
applyTheme(current);
themeToggle.addEventListener('click', ()=>{
  current = (current === 'light') ? 'dark' : 'light';
  localStorage.setItem('site-theme', current);
  applyTheme(current);
});
// Smooth nav scroll
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}); }));
