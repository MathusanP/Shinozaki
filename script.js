const btn = document.getElementById('sidebarBtn');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

document.querySelectorAll('.panel, .card').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('is-open');
  });
});