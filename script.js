const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu-mobile');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

const navLinks = document.querySelectorAll('#nav-menu-mobile a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
