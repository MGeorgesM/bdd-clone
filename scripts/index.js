const header = document.querySelector('header');
const toggler = document.querySelector('.toggler-open');
const togglerHeader = document.getElementById('toggler-header');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const logoAltern = document.getElementById('logo-altern');
const scroller = document.getElementById('scroller');

const heroImages = ['/assets/hero0.jpg', '/assets/hero1.jpg'];
let index = 0;


console.log(header)

function changeHeroImages() {
    header.style.backgroundImage = `linear-gradient(rgba(34, 34, 34, 0.3),
    rgba(34, 34, 34, 0.3)), url(${heroImages[index]})`;
    index = (index + 1) % heroImages.length
}

setInterval(() => {
    changeHeroImages()
}, 3000);

toggler.addEventListener('click', () => {
    toggler.classList.toggle('fa-bars');
    toggler.classList.toggle('fa-xmark');
    togglerHeader.classList.toggle('hidden');
})

scroller.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        logo.style.display = 'none';
        logoAltern.style.display = 'block';
        togglerHeader.style.top = '80px';
        scroller.classList.toggle('hidden');
    } else {
        navbar.classList.remove('scrolled');
        logo.style.display = 'block';
        logoAltern.style.display = 'none';
        togglerHeader.style.top = '160px';
        scroller.classList.toggle('hidden');
    }
};