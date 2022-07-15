gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".content").forEach(section => {
    gsap.to( section.querySelectorAll('h1, h3, p'), {
        scrollTrigger: section,
        opacity:1,
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        y:0,
        duration: 1.2
    })
});
