document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(".reveal-up, .reveal-scale");
    elementsToReveal.forEach(el => {
        revealObserver.observe(el);
    });

    const menuBtn = document.getElementById("mobile-menu-btn");
    const navigation = document.querySelector(".main-header__navigation");
    const navLinks = document.querySelectorAll(".main-header__nav-link");

    if(menuBtn && navigation) {
        menuBtn.addEventListener("click", () => {
            navigation.classList.toggle("is-active");
            const icon = menuBtn.querySelector("i");
            if(navigation.classList.contains("is-active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
            menuBtn.blur();
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("is-active");
                const icon = menuBtn.querySelector("i");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            });
        });
    }
});

window.addEventListener("load", () => {
    const splashScreen = document.getElementById("splash-screen");
    
    setTimeout(() => {
        splashScreen.classList.add("is-hidden");
        
        setTimeout(() => {
            document.body.classList.add("is-loaded");
            splashScreen.remove();
        }, 800);
    }, 600); 
});