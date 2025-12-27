document.addEventListener(('DOMContentLoaded'),()=>{
    let imageURL = sessionStorage.getItem('FileImage');
    let link = window.location.search;
    let image = document.querySelector('.img-avatar');
    let queryStringName = new URLSearchParams(link).get('name');
    let queryStringEmail = new URLSearchParams(link).get('email');
    let queryStringUsername = new URLSearchParams(link).get('username');
    let paragrafUsername = document.querySelector('.subheading');
    let nameParagraf = document.querySelector('.name-span');
    let spanNumber = document.querySelector('.relative-span');
    let emailParagraf = document.querySelector('.name-secondary');
    let nameHeading = document.querySelector('.heading');
    
    nameParagraf.innerHTML = queryStringName;
    emailParagraf.innerHTML = queryStringEmail;
    nameHeading.innerHTML = queryStringName;
    paragrafUsername.innerHTML = queryStringUsername;
    image.src = `images/${imageURL}`;    
    let min = 1000;
    let max = 2000;
    let randomNumber = Math.floor(Math.random() * (max-min) + min);
    spanNumber.innerHTML = `#0${randomNumber}`;
})