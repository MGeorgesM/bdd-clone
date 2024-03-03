window.onscroll = () => {
    let navbar = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    let logoAltern = document.getElementById("logo-altern");

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        logo.style.display = "none";
        logoAltern.style.display = "block";
    } else {
        navbar.classList.remove('scrolled');
        logo.style.display = "block";
        logoAltern.style.display = "none";
    }
};

