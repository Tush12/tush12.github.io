document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('a'); // Select all links in the nav menu

  // Toggle the mobile menu
  mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // Toggle 'show' on #nav-menu
    mobileMenu.classList.toggle('active'); // Add active class to hamburger
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !navMenu.contains(event.target) && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      mobileMenu.classList.remove('active');
    }
  });

  // Hide the menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show'); // Hide the menu
      mobileMenu.classList.remove('active'); // Reset hamburger icon
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  // Add a scroll event listener
  window.addEventListener('scroll', function() {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.style.top = `-${header.offsetHeight}px`; // Hide the header
    } else {
      // Scrolling up
      header.style.top = '0'; // Show the header
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  });

  // Add a mousemove event listener to detect when the mouse is near the top
  window.addEventListener('mousemove', function(event) {
    if (event.clientY <= 50) {
      // Mouse is near the top of the page (within 50px)
      header.style.top = '0'; // Show the header
    }
  });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY === 0) {
    header.style.top = '0';
  } else {
    header.style.top = '-50px';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Animate on scroll
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      this.reset();  // Reset the form after submission
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
});

// Typewriter effect
  const typedText = document.getElementById("typed-text");
  const words = ["Tushar Bhavnani", "a Developer", "a Data Analyst"];
  let wordIndex = 0, charIndex = 0, isDeleting = false;
  function type() {
    let word = words[wordIndex];
    if (isDeleting) {
      typedText.textContent = word.substring(0, charIndex--);
    } else {
      typedText.textContent = word.substring(0, charIndex++);
    }
    if (!isDeleting && charIndex === word.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 80 : 150);
    }
  }
  type();
