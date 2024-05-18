// Set footer copyright year
const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('currentyear').innerText = currentYear;

// Set footer last modified date
document.getElementById('lastModified').innerText = document.lastModified;

//set windchill
const temp = document.querySelector("#temperature").textContent;
const windSpeed = document.querySelector("#wind").textContent;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        const windChillCelsius = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
        return windChillCelsius.toFixed(1);
    } 
    
    else {
        return 'NaN';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const windChillElement = document.getElementById("windChill");

    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = windChill;
    });


