document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function changeActiveLink() {
        let currentSection = "home"; // Começa com Home ativo

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    // Chamar função ao carregar para manter o "Home" ativo no início
    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});