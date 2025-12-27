const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });


}


navSlide();

const highlightActiveLink = () => {
    const links = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;

    links.forEach(link => {
        // Robust check: Exact match OR pathname match (ignoring query/hash)
        if (link.href === currentUrl || link.pathname === currentPath) {
            link.classList.add('active');
        }
        // Special handling for root '/' matching 'index.html'
        if ((currentPath === '/' || currentPath.endsWith('/')) && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

highlightActiveLink();
