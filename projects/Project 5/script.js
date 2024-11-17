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
