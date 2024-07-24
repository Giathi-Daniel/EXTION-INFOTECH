const menuOpen = document.querySelector('#menuOpen')
const menuClose = document.querySelector('#menuClose')
const navLinks = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav li a');


document.addEventListener('DOMContentLoaded', function() {
    const numStars = 1000; // Number of stars to generate
    const container = document.querySelector('.stars-container');
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Randomize position and size of stars
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      
      // Add a custom property for animation delay
      star.style.setProperty('--star-index', i);
  
      container.appendChild(star);
    }
});

menuOpen.addEventListener('click', () => {
    navLinks.classList.add('active')
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
})

menuClose.addEventListener('click', () => {
    navLinks.classList.remove('active')
    menuOpen.style.display = 'block'
    menuClose.style.display = 'none'
})

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    });
});

window.addEventListener('scroll', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    }
});