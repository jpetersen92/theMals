const malApp = {};

malApp.mobile = () => {
    const barMenu = document.getElementById('mobile');
    const mobileNav = document.querySelector('nav ul');

    barMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('show')
    })
}

malApp.init = () => {
    malApp.mobile()
};

malApp.init();