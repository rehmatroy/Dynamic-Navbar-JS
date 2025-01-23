let navbar = document.getElementById('navbar');

let logDiv = document.createElement('div');
logDiv.classList.add('logo-div');

let logo = document.createElement('img');
logo.classList.add('img-logo')
logo.src = 'img/logo.jpg'
logo.alt = 'logo-image'

logDiv.appendChild(logo)

let navList = document.createElement('ul');
navList.classList.add('nav-list')

// create an array for listitems

let listItems = [
    {name: 'Home', url: '#' },
    {name: 'About', url: '#About'},
    {name: 'Services', url: '#Services'},
    {name: 'Contact', url: '#Contact'}
]

navList.innerHTML = listItems.map(pages => 
    `<li> 
        <a href='${pages.url}'> ${pages.name}</a>
    </li>`
).join('')

navbar.appendChild(logDiv);
navbar.appendChild(navList)