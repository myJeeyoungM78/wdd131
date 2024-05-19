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
    });
       
    });

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
    // Add more temple objects here...
  ];

function createTempleCard() {

    document.querySelector(".res-grid").innerHTML = "";
    
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute ("src", temple.imageUrl);
        img.setAttribute ("alt", `${temple.templeName} Temple`);
        imag.setAttribute ("loading", "lazy");

        card.appendChild (name);
        card.appendChild (location);
        card.appendChild (dedication);
        card.appendChild (area);
        card.appendChild (img);

        document.querySelector(".res-grid").appendChild(card);
    });
};

// const templeContainer = document.getElementById('templeContainer');
// templeContainer.classList.add('temple-container');

// const navItems = document.querySelectorAll('.nav-item');

// function createTempleCard(temple) {
//     const figure = document.createElement('figure');
//     figure.className = 'temple-card';
    
//     const img = document.createElement('img');
//     img.src = temple.imageUrl;
//     img.alt = temple.templeName;
//     img.loading = 'lazy';
//     figure.appendChild(img);
    
//     const figcaption = document.createElement('figcaption');
    
//     const name = document.createElement('h2');
//     name.textContent = temple.templeName;
//     figcaption.appendChild(name);
    
//     const location = document.createElement('p');
//     location.textContent = `Location: ${temple.location}`;
//     figcaption.appendChild(location);
    
//     const dedicated = document.createElement('p');
//     dedicated.textContent = `Dedicated: ${temple.dedicated}`;
//     figcaption.appendChild(dedicated);
    
//     const area = document.createElement('p');
//     area.textContent = `Area: ${temple.area} square feet`;
//     figcaption.appendChild(area);
    
//     figure.appendChild(figcaption);
//     templeContainer.appendChild(figure);
// }
  

// function displayTemples(filteredTemples) {
//     templeContainer.innerHTML = '';
//     filteredTemples.forEach(createTempleCard);
// }

// function filterTemples(criteria) {
//     let filteredTemples = temples;

//     switch (criteria) {
//         case 'Old':
//             filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//             break;
//         case 'New':
//             filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//             break;
//         case 'Large':
//             filteredTemples = temples.filter(temple => temple.area > 90000);
//             break;
//         case 'Small':
//             filteredTemples = temples.filter(temple => temple.area < 10000);
//             break;
//         case 'Home':
//         default:
//             filteredTemples = temples;
//             break;
//     }

//     displayTemples(filteredTemples);
// }

// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         const criteria = item.dataset.criteria;
//         filterTemples(criteria);
//     });
// });


    