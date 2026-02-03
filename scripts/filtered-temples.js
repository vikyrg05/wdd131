const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Adelaide city, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-675332-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Anchorage City, Alaska",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/320x180/anchorage-temple-lds-253274-wallpaper.jpg"
    },
    {
        templeName: "Billings Montana",
        location: "Billings City, Montana",
        dedicated: "1999, November, 20",
        area: 33800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/02-Billings-Montana-Temple-1572044.jpg"
    }
    // Add more temple objects here...
];

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});

const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const gallery = document.getElementById("temples-gallery");

function displayTemples(templeArray) {
    gallery.innerHTML = "";

    templeArray.forEach((temple) => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `Photo of ${temple.templeName} temple`;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
    `;
        figure.appendChild(img);
        figure.appendChild(caption);

        gallery.appendChild(figure);
    });
}

displayTemples(temples);

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;

        switch (filter) {
            case "old":
                displayTemples(temples.filter(t => {
                    const year = parseInt(t.dedicated.split(",")[0]);
                    return year < 1900;
                }));
                break;

            case "new":
                displayTemples(temples.filter(t => {
                    const year = parseInt(t.dedicated.split(",")[0]);
                    return year > 2000;
                }));
                break;

            case "large":
                displayTemples(temples.filter(t => t.area > 90000));
                break;

            case "small":
                displayTemples(temples.filter(t => t.area < 10000));
                break;

            default:
                displayTemples(temples);
        }
    });
});