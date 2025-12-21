//menu toggle script

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

// Dark - Light mode toggle script (SCROLL-SAFE)
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

const enableDarkMode = () => {
  body.classList.add('dark-mode');
};

const disableDarkMode = () => {
  body.classList.remove('dark-mode');
};

darkModeButton.addEventListener('change', () => {
  // ✅ Save current scroll position
  const scrollY = window.scrollY;

  // Temporarily disable smooth scroll
  document.documentElement.style.scrollBehavior = 'auto';

  if (darkModeButton.checked) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }

  // ✅ Restore scroll position
  window.scrollTo(0, scrollY);

  // Re-enable smooth scroll
  document.documentElement.style.scrollBehavior = 'smooth';
});

//Multiple text animation script
const typed = new Typed('.multiple', {
    strings: ['Software Engineer','SDET Engineer','Java Developer', 'Spring Boot Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 1000,
    loop: true
});

// Prevent Home scroll jump when already on Home
const homeLink = document.querySelector('a[href="#home"]');

homeLink.addEventListener('click', (e) => {
  const homeSection = document.getElementById('home');
  const rect = homeSection.getBoundingClientRect();

  // If home is already in view (top aligned)
  if (Math.abs(rect.top) < 5) {
    e.preventDefault();
  }
});

// Auto update footer year
document.getElementById("year").textContent = new Date().getFullYear();


// Initialize EmailJS and handle form submission
document.addEventListener("DOMContentLoaded", () => {

  // Clear textarea on page load (fix hidden content issue)
  const textarea = document.querySelector(".contact-form textarea");
  if (textarea) {
    textarea.value = "";
  }
 
  emailjs.init("qDl_nShAz1Cxy6XSJ");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "var(--color)";

    emailjs.sendForm(
      "service_elip4hj",  
      "template_nbh0c08",  
      this
    )
    .then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();

      // 👇 hide after 10 seconds
      setTimeout(() => {
        status.textContent = "";
      }, 10000);
    })
    .catch(() => {
      status.textContent = "Failed to send message. Please try again.";
      status.style.color = "red";

      // 👇 hide after 10 seconds
      setTimeout(() => {
        status.textContent = "";
      }, 10000);
    });
  });
});

// Open external links in a new tab
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    // Ignore internal page links (#home, #about, etc.)
    if (
      link.getAttribute("href").startsWith("http") ||
      link.getAttribute("href").startsWith("https")
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
