const malApp = {};
gsap.registerPlugin(ScrollTrigger);

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

malApp.scroll = () => {

    // ABOUT SECTION
    gsap.from('h1', {
        scrollTrigger: {
            trigger: 'h1',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#aboutImage', {
        scrollTrigger: {
            trigger: '#aboutImage',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: -100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('.aboutDetails h2', {
        scrollTrigger: {
            trigger: '.aboutDetails h2',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('.aboutDetails #aboutBio', {
        scrollTrigger: {
            trigger: '.aboutDetails #aboutBio',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: 100, 
        opacity: 0, 
        duration: 1.5})

        gsap.from('.aboutDetails .socials', {
            scrollTrigger: {
                trigger: '.aboutDetails .socials',
                start: "top 95%",
                toggleActions: 'restart none none reverse'
            }, 
            y: 100, 
            x: 100, 
            opacity: 0, 
            duration: 1.5})

    // PARTNERS SECTION
    gsap.from('#partners h2', {
        scrollTrigger: {
            trigger: '#partners h2',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#partner1', {
        scrollTrigger: {
            trigger: '#partner1',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: -100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#partner2', {
        scrollTrigger: {
            trigger: '#partner2',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: 100, 
        opacity: 0, 
        duration: 1.5})

    // CONTACTS SECTION
    gsap.from('#contacts h2', {
        scrollTrigger: {
            trigger: '#contacts h2',
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#contacts h3', {
        scrollTrigger: {
            trigger: '#contacts h3',
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#social1', {
        scrollTrigger: {
            trigger: '#social1',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: -100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#social2', {
        scrollTrigger: {
            trigger: '#social2',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: -50, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#social3', {
        scrollTrigger: {
            trigger: '#social3',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: 50, 
        opacity: 0, 
            duration: 1.5})

    gsap.from('#social4', {
        scrollTrigger: {
            trigger: '#social4',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        x: 100, 
        opacity: 0, 
        duration: 1.5})

    gsap.from('#contactImage', {
        scrollTrigger: {
            trigger: '#contactImage',
            start: "top 95%",
            toggleActions: 'restart none none reverse'
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1.5})
}

malApp.init = () => {
    malApp.preloader()
    malApp.mobile()
    malApp.scroll()
};

malApp.init();