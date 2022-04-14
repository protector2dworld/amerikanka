
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header_menu');
const menuContacts = document.querySelector('.contacts__menu');
const menuPhone = document.querySelector('.header__phone');
const menuMail = document.querySelector('.header__mail');
const menuSocial = document.querySelector('.header__social');

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        menuContacts.classList.toggle('active');
        menuPhone.classList.toggle('active');
        menuMail.classList.toggle('active');
        menuSocial.classList.toggle('active');
    })
}
