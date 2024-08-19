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

  