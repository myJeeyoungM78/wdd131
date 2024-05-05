document.addEventListener('DOMContentLoaded', function() {

const currentYear = new Date().getFullYear();
console.log(currentYear);
document.getElementById('currentyear').innerText = currentYear;
document.getElementById('lastModified').innerText = document.lastModified;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', function() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('.close-icon').classList.toggle('show');
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

