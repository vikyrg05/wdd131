const footerYear = document.getElementById('footer-year');
const footerModified = document.getElementById('footer-modified');

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()}`;

if (footerYear) {
footerYear.textContent = `\u00A9 ${currentYear} Virginia Rocha - Daily Student Wellness Page`;
}
    
if (footerModified) {
footerModified.textContent = `Last Modification: ${formattedDate}`;
}
    
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.querySelector("#nav-menu ul");

if (toggleButton && navMenu){
    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("formResponse");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        responseMessage.textContent = `Thank you, ${name}! Your message has been received.`

        form.reset();
    });

    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({ name: name });

    localStorage.setItem("messages", JSON.stringify(messages));
}