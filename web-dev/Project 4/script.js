

// Dark and Light Mode
var colorMode = "light";

function changeMode() {
    var bodyElement = document.getElementById("body");
    
    // Toggle the color mode
    colorMode = (colorMode === "dark") ? "light" : "dark";
    bodyElement.setAttribute("data-bs-theme", colorMode);
    
}

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
      if (isElementInViewport(element)) {
        element.classList.add('visible'); // Add visible class when in viewport
      } else {
        element.classList.remove('visible'); // Remove visible class when out of viewport
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
