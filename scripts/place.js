const footerYear = document.getElementById('footer-year');
const footerModified = document.getElementById('footer-modified');

const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()}`;

footerYear.textContent = `\u00A9 ${currentYear} Virginia Rocha - Bolivia Page`;
footerModified.textContent = `Last Modification: ${formattedDate}`;

const temperatureC = 10;
const windSpeedKmh = 20;

function calculateWindchill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const wc = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
        return `${Math.round(wc)} \u00B0C`;
    } else {
        return 'N/A';
    }
}

const windchillElement = document.getElementById('windchill');
windchillElement.textContent = calculateWindchill(temperatureC, windSpeedKmh);