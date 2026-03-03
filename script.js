document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.stopPropagation(); // évite effets secondaires

        const content = this.querySelector(".content");

        content.classList.toggle("active");
    });
});

const scrollBtn = document.getElementById("scrollup");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    const headerBottom = header.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    // Si on est dans le header
    if (headerBottom > 0) {
        scrollBtn.style.display = "none";
    }
    // Si on est dans le footer
    else if (footerTop < windowHeight) {
        scrollBtn.style.display = "none";
    }
    // Sinon on l'affiche
    else {
        scrollBtn.style.display = "block";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});