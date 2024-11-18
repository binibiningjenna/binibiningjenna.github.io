
// PLANET'S INFROMATION 

// Array of planets and their information
var planets = [
  { name: 'Mercury', type: 'inner planet', image: 'img/mercury.png', description: 'Smallest planet, closest to the Sun, extreme temperature variations.' },
  { name: 'Venus', type: 'inner planet', image: 'img/venus.png', description: 'Second planet from the Sun, known for its thick atmosphere and high temperatures.' },
  { name: 'Earth', type: 'inner planet', image: 'img/earth.png', description: 'Our home planet, the third from the Sun, with liquid water and life.' },
  { name: 'Mars', type: 'inner planet', image: 'img/mars.png', description: 'Known as the Red Planet, with a thin atmosphere and the largest volcano in the solar system.' },
  { name: 'Jupiter', type: 'outer planet', image: 'img/jupiter.png', description: 'The largest planet in the solar system, a gas giant with a famous Great Red Spot.' },
  { name: 'Saturn', type: 'outer planet', image: 'img/saturn.png', description: 'Famous for its stunning ring system and being the second largest planet.' },
  { name: 'Uranus', type: 'outer planet', image: 'img/uranus.png', description: 'The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system.' },
  { name: 'Neptune', type: 'outer planet', image: 'img/neptune.png', description: 'The farthest planet from the Sun, known for its deep blue color and strong winds.' },
  { name: 'Pluto', type: 'dwarf planet', image: 'img/pluto.png', description: 'A dwarf planet, once considered the ninth planet in the solar system.' }
];

// Get the container element
var container = document.getElementById('planet-container');

// Loop
for (var i = 0; i < planets.length; i++) {
  var planetHTML = 
    '<div class="row justify-content-center">' +
      '<div class="col-12">' +
        '<div class="row d-flex align-items-center">' +
          '<div class="col-12 col-md-3 text-center text-md-center">' +
            '<h2 class="heading my-5 scroll-animate">' + planets[i].type + ' ' +'<span class="heading" style="color:#ff7300">' + planets[i].name + '</span></h2>' +
          '</div>' +
          '<div class="col-12 col-md-6 text-center py-3">' +
            '<img src="' + planets[i].image + '" class="img-fluid mx-auto rotating-image" alt="' + planets[i].name + '">' +
          '</div>' +
          '<div class="col-12 col-md-3 text-center text-md-center">' +
            '<h5 class="subheading text-center scroll-animate">' + planets[i].description + '</h5>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  container.innerHTML += planetHTML;
}

// SCROLL ANIMATION

// Function to check if the element is in the viewport
function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Function to handle the scroll event
function handleScroll() {
const elements = document.querySelectorAll('.scroll-animate');
elements.forEach((element) => {
    if (isElementInViewport(element) && !element.classList.contains('visible')) {
        element.classList.add('visible'); // Add 'visible' class to animate
    }
});
}

// Listen for scroll events only once for the initial animation
window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", function () {
AOS.init({
    duration: 2000,  
    once: true, 
    offset: 200,         
});
});

// STAR ANIMATION 

document.addEventListener('DOMContentLoaded', function () {
const galaxyBackground = document.querySelector('.galaxy-background');

// Function to create a random star
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const x = Math.random() * 100;  
    const y = Math.random() * 100; 
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    
    // Random animation duration and direction
    const duration = Math.random() * 10 + 10;  
    const direction = Math.random() * 360; 
    star.style.animationDuration = `${duration}s`;
    star.style.animationTimingFunction = `linear`;
    
    galaxyBackground.appendChild(star);
}

// Create 300 stars
for (let i = 0; i < 300; i++) {
    createStar();
}
});
