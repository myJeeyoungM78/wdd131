document.addEventListener('DOMContentLoaded', function() {
// Set footer copyright year
const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('currentyear').innerText = currentYear;

// Set footer last modified date
document.getElementById('lastModified').innerText = document.lastModified;

// Add event listener to the menu button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', function() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    // document.querySelector('.close-icon').classList.toggle('open');
});

// document.getElementById("menu").addEventListener("click", function() {
//     var menu = document.getElementById('menu');
//     this.classList.toggle('active');
//     if (menu.style.display == 'block') {
//         menu.style.displaylay = 'none';
//         }
//     else {
//         menu.style.display = 'block';
//     }
    
});

