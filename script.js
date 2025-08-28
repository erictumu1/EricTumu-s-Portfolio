function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");

  function setActiveLink() {
    let index = sections.length;

    if (window.scrollY === 0) {
      index = 0;
    } else {
      while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
    }

    menuItems.forEach((link) => link.classList.remove("active"));
    const activeLink = [...menuItems].find(
      (link) => link.getAttribute("href") === `#${sections[index]?.id}`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    } else if (index === 0) {
      menuItems[0].classList.add("active");
    }
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        menuItems.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  window.addEventListener("load", setActiveLink);
  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fadein");

  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
    appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(
    ".article-container article a"
  );
  const projects = document.querySelectorAll(".article-container article");

  projectLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      projects.forEach((project) => project.classList.remove("highlight"));

      const targetProjectId = this.getAttribute("href").substring(1);
      const targetProject = document.getElementById(targetProjectId);

      if (targetProject) {
        targetProject.classList.add("highlight");
        targetProject.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          targetProject.classList.remove("highlight");
        }, 10000);
      }
    });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//Script to make the page automatically go the top when a user refreshes the page
window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll(
    ".img-box img, .about-img img, img.projects"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.remove("zoom-animate");
          void img.offsetWidth;
          img.classList.add("zoom-animate");
          img.addEventListener(
            "animationend",
            () => {
              img.classList.remove("zoom-animate");
            },
            { once: true }
          );
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  zoomImages.forEach((img) => {
    observer.observe(img);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll(
    ".img-box img .article-container article img.icon"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.remove("zoom-article-animate");
          void img.offsetWidth;
          img.classList.add("zoom-article-animate");
          img.addEventListener(
            "animationend",
            () => {
              img.classList.remove("zoom-article-animate");
            },
            { once: true }
          );
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  zoomImages.forEach((img) => {
    observer.observe(img);
  });
});

window.addEventListener("load", () => {
  gsap.from(".home-content h1", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power4.out",
  });

  gsap.from(".home-content h3", {
    duration: 1,
    delay: 0.2,
    y: 30,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".btn-box", {
    duration: 1,
    delay: 0.4,
    y: 50,
    opacity: 0,
    ease: "power2.out",
  });
  gsap.to(".img-box", {
    duration: 1.2,
    opacity: 1,
    scale: 1,
    ease: "power4.out",
  });
});

//Function to handle the home screen text animation
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: ["FullStack Developer.", "FrontEnd Enthusiast.", "Tech Explorer."],
    typeSpeed: 45,
    backSpeed: 25,
    loop: true,
  });
});

//Function to animate my sentence in the about section
document.addEventListener("DOMContentLoaded", function () {
  const paragraphContent = `
  My full names are <span class="aboutinfo" data-index="0">Eric Tumu Muheki</span>, a graduate holding a Bachelors Degree in Computer Science from the University of Windsor.<br><br>
  I am enthusiastic about everything software related and would love to apply my skills and knowledge in FullStack development to contribute effectively as a <span class="aboutinfo" data-index="1">Full Stack Developer</span>.<br><br>
  With a strong foundation in programming languages such as <span class="aboutinfo" data-index="2">Java</span> and <span class="aboutinfo" data-index="3">Python</span>, to sufficient knowledge in frameworks like <span class="aboutinfo" data-index="4">React</span>, <span class="aboutinfo" data-index="5">Django</span>, and <span class="aboutinfo" data-index="6">Flutter</span>, I am eager to collaborate on innovative projects that push boundaries and solve real world problems.<br><br>
  My academic background, together with my hands on experience in app and web development, has equipped me with a solid understanding of software engineering principles and a passion for continuous learning.<br><br>
  I am committed to delivering high quality work, and efficiently collaborating with your team to contribute positively toward your company’s success.
  `;

  const aboutSection = document.getElementById("about");
  let typedStarted = false;

  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !typedStarted) {
          typedStarted = true; // To prevent multiple initializations
          new Typed("#typed-paragraph", {
            strings: [paragraphContent],
            typeSpeed: 20,
            backSpeed: 0,
            smartBackspace: false,
            showCursor: false,
            loop: false,
            html: true,
          });
          observer.unobserve(aboutSection); // This stops observing once started
        }
      });
    },
    {
      threshold: 0.2, // triggers the animation to start when 20% of About section visible
    }
  );

  observer.observe(aboutSection);
});

//Javascript to handle light and dark mode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const logoElements = document.querySelectorAll(".logo");

  // Function to apply theme
  function applyTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);
    logoElements.forEach((logo) => {
      if (isDark) {
        logo.classList.add("logo-shadow");
      } else {
        logo.classList.remove("logo-shadow");
      }
    });
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  // Set initial theme: saved or system preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
  applyTheme(initialDark);

  // Toggle theme function
  function toggleTheme() {
    const isDark = !body.classList.contains("dark-mode");
    applyTheme(isDark);
  }

  // Click event on logo to toggle
  logoElements.forEach((logo) => {
    logo.addEventListener("click", toggleTheme);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
