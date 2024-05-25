document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 'fc-1888', name: 'flux capacitor', avgrating: 4.5 },
        { id: 'fc-2050', name: 'power laces', avgrating: 4.7 },
        { id: 'fs-1987', name: 'time circuits', avgrating: 3.5 },
        { id: 'ac-2000', name: 'low voltage reactor', avgrating: 3.9 },
        { id: 'jj-1969', name: 'warp equalizer', avgrating: 5.0 }
    ];

    // constants
const product_select = document.querySelector("#productName");
let numVisits = Number(window.localStorage.getItem("number-vistis")) || 0;
numVisits++;

//function to add Product Options to the select element
addProductOptions();

function addProductOptions(){
    products.forEach(product => {
        let option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        
        product_select.appendChild(option);
    });
}
    // const productSelect = document.getElementById('productName');
    
    // products.forEach(product => {
    //     let option = document.createElement('option');
    //     option.value = product.id;
    //     option.textContent = product.name;
    //     productSelect.appendChild(option);
    // });

    
});

// document.addEventListener('DOMContentLoaded', function() {
//     let reviewCount = localStorage.getItem('reviewCount');
//     reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
//     localStorage.setItem('reviewCount', reviewCount);

//     document.getElementById('reviewCount').textContent = reviewCount;

//     window.location.href = 'review.html';
// });


document.addEventListener('DOMContentLoaded', function() {
    // Set footer copyright year
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    document.getElementById('currentyear').innerText = currentYear;
    
    // Set footer last modified date
    document.getElementById('lastModified').innerText = document.lastModified;
});