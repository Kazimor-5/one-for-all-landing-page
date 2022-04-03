// ! SIDEBAR

const openSidebarBtn = document.querySelector('.open-sidebar-btn');
const closeSidebarBtn = document.querySelector('.close-sidebar-btn');
const sidebar = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
  openSidebarBtn.style.display = 'none';
  navbar.style.boxShadow = 'none';
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  openSidebarBtn.style.display = 'block';
  navbar.style.boxShadow = 'var(--shadow-2)';
});
