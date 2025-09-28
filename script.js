//hamburger menu
const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.navbar-rechts');
        const navLinks = document.querySelectorAll('.nav-menu a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        //close wanneer je op een link klikt
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });