// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields.");
    }

});