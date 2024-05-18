//set footer content and date
// const currrentDate = new Date();
// const yearTag = document.querySelector("#currentyear");
// const lastModifiedTag = document.querySelector("#lastModified");
// const lastModified = document.lastModified;

// yearTag.innerHTML = currrentDate.getFullYear();
// lastModifiedTag.innerHTML = `Last Modification: ${lastModified}`;

// Set footer copyright year
const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('currentyear').innerText = currentYear;

// Set footer last modified date
document.getElementById('lastModified').innerText = document.lastModified;

//set windchill
const temp = document.querySelector("#temperature").textContent;
const windSpeed = document.querySelector("#wind").textContent;
const windChill = document.querySelector("#windChill").textContent;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        calculatedCill = calculateWindChill(temp, windSpeed);
        windChill.textContent = `${Math.round(calculateWindChill(temp, windSpeed))}°F`;
        return 35.74 + (0.6215 * temp) - (35.75 * windSpeed**0.16) + (0.4275 * temp * windSpeed**0.16);
    } 
    
    else {
        return 'NaN';
    }
    
}



// if (tempature <= 50 && wind > 3) {
//     calculatedCill = calculateWindChill(tempature, wind);
//     windChill.textContent = `${Math.round(calculateWindChill(tempature, wind))}°F`;
// } 

// else {
//     windChill.textContent = 'NaN';
// }

