const malApp = {};

malApp.preloader = () => {
    window.addEventListener('load', () => {
        console.log('I am loaded')
        const preloader = document.querySelector('.preloader')
        preloader.classList.add('preloaderFinish')
    });
}

malApp.mobile = () => {
    const barMenu = document.getElementById('mobile');
    const mobileNav = document.querySelector('nav ul');

    barMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('show')
    })
}

malApp.init = () => {
    malApp.preloader()
    malApp.mobile()
};

malApp.init();