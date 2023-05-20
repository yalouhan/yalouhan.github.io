// Get the pages
var pages = Array.from(document.querySelectorAll('.page'));

// Keep track of the current page
var currentPage = 0;

// Listen for the wheel event
window.addEventListener('wheel', handleWheel, {passive:false});

document.getElementById('next').addEventListener('click', () => {
    // Check if it's not the last page
    nextPage();
  });

  document.getElementById('previous').addEventListener('click', () => {
    // Check if it's not the first page
    previousPage();
  });

function handleWheel(event) {
  event.preventDefault();

  if (event.deltaY > 0) {
    // Scroll down, turn to the next page
    nextPage();
  } else {
    // Scroll up, turn to the previous page
    previousPage();
  }
}

function nextPage() {
  // Check if it's not the last page
  if (currentPage < pages.length - 1) {
    // Create the animation
    gsap.to(pages[currentPage], {
      duration: 1, // 1 second
      scaleX: 0,
      transformOrigin: "left",
      ease: "power2", // easing function for a smooth animation
      onComplete: () => {
        // Hide the current page
        pages[currentPage].style.display = 'none';

        // Reset the scale for the next animation
        gsap.set(pages[currentPage], {clearProps:"all"});

        // Move to the next page
        currentPage++;
      }
    });
  }
}

function previousPage() {
  // Check if it's not the first page
  if (currentPage > 0) {
    // Move to the previous page
    currentPage--;

    // Show the previous page
    pages[currentPage].style.display = '';

    // Create the animation
    gsap.from(pages[currentPage], {
      duration: 1, // 1 second
      scaleX: 0,
      transformOrigin: "right",
      ease: "power2", // easing function for a smooth animation
    });
  }
}
