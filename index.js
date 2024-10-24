let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home .content h1 .heading', { origin:'top' });
ScrollReveal().reveal('.img-box, projects-container, .contact form',{ origin:'bottom' });
ScrollReveal().reveal('.content h2, .content h3, .about-img',{ origin:'left' });
ScrollReveal().reveal('.content p, .about-content',{ origin:'right' });



