function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    function setActiveLink() {
        let index = sections.length;

        if (window.scrollY === 0) {
            index = 0;
        } else {
            while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        }
    
        menuItems.forEach((link) => link.classList.remove('active'));
        const activeLink = [...menuItems].find((link) => link.getAttribute('href') === `#${sections[index]?.id}`);
        if (activeLink) {
            activeLink.classList.add('active');
        } else if (index === 0) {
            menuItems[0].classList.add('active');
        }
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                menuItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    window.addEventListener('load', setActiveLink);
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fadein');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll('.article-container article a');
    const projects = document.querySelectorAll('.article-container article');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            projects.forEach(project => project.classList.remove('highlight'));

            const targetProjectId = this.getAttribute('href').substring(1);
            const targetProject = document.getElementById(targetProjectId);
            
            if (targetProject) {
                targetProject.classList.add('highlight');
                targetProject.scrollIntoView({ behavior: 'smooth' });

                                setTimeout(() => {
                    targetProject.classList.remove('highlight');
                }, 10000); 
        }});
    });
});

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

 //Script to make the page automatically go the top when a user refreshes the page
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    });

  document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll('.img-box img, .about-img img, img.projects');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.remove('zoom-animate');
        void img.offsetWidth;
        img.classList.add('zoom-animate');
        img.addEventListener('animationend', () => {
          img.classList.remove('zoom-animate');
        }, { once: true });
      }
    });
  }, {
    threshold: 0.5 
  });

  zoomImages.forEach(img => {
    observer.observe(img);
  });
});

  document.addEventListener("DOMContentLoaded", function () {
  const zoomImages = document.querySelectorAll('.article-container article img.icon');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.remove('zoom-article-animate');
        void img.offsetWidth;
        img.classList.add('zoom-article-animate');
        img.addEventListener('animationend', () => {
          img.classList.remove('zoom-article-animate');
        }, { once: true });
      }
    });
  }, {
    threshold: 0.5 
  });

  zoomImages.forEach(img => {
    observer.observe(img);
  });
});



  document.getElementById("year").textContent = new Date().getFullYear();