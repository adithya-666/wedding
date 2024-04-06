// This is an example with default parameters
    // You'll always have to call simplyCountdown using ID's, no classes.

    simplyCountdown('.simply-countdown', {
        year: 2025, // required
        month: 6, // required
        day: 28, // required
        hours: 8, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'Hari', plural: 'Hari' },
            hours: { singular: 'Jam', plural: 'Jam' },
            minutes: { singular: 'Menit', plural: 'Menit' },
            seconds: { singular: 'Detik', plural: 'detik' }
        },
        
});

const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');


offcanvas.addEventListener('show.bs.offcanvas', function () {
   stickyTop.style.overflow = 'visible'; 
});

offcanvas.addEventListener('hidden.bs.offcanvas', function () {
   stickyTop.style.overflow = 'hidden'; 
});




AOS.init();

