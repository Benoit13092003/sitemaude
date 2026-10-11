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

// Livre d'or : les messages validés sont listés dans guestbook.json
fetch('guestbook.json').then(r => r.json()).then(list => {
  if (!list.length) return;
  const box = document.getElementById('messages');
  box.textContent = '';
  list.forEach(m => {
    const a = document.createElement('article');
    a.className = 'msg';
    const p = document.createElement('p');
    p.textContent = '« ' + m.message + ' »';
    const who = document.createElement('span');
    who.textContent = '— ' + m.nom + (m.date ? ', ' + m.date : '');
    a.append(p, who);
    box.append(a);
  });
}).catch(() => {});

document.getElementById('gform').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = 'mailto:m.lesquerre@outlook.fr?subject=' +
    encodeURIComponent('Livre d’or – message de ' + f.get('nom')) +
    '&body=' + encodeURIComponent(f.get('msg') + '\n\n' + f.get('nom'));
});
