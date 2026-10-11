document.getElementById('y').textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get('msg')}\n\n${f.get('nom')}${f.get('tel') ? ' – ' + f.get('tel') : ''}`;
  location.href = 'mailto:m.lesquerre@outlook.fr?subject=' +
    encodeURIComponent('Demande – La Dame de Cœur') + '&body=' + encodeURIComponent(body);
});
