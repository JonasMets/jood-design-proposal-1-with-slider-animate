$(document).ready(function () {

    // owl owl.carousel och owl.theme.default
    var owl = $('#slider1');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
        // ändrar antal som ska visas responsivt
        , responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })

    var owl2 = $('#slider2');
    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 70,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
        // ,autoWidth:true
        , center: true
        // ändrar antal som ska visas responsivt
        , responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    })

// ajax/libs/wow/1.1.2/wow.min använder animate.css
// plugin för att använda keyframes /scroll 
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();


    // jquery.counterup använder jquery.waypoints
    // räknar upp från x till det värde som sätts i taggen tex. <strong class="header-Statistics-text mycounter" >1430</strong>
    // hämtar värde från class eller id med jquery
    let mycounter1 = $('.mycounter');
    mycounter1.counterUp({
        delay: 100,
        time: 1000,
        offset: 100,
        beginAt: 0,
        });
    

});


// javascript
//   my counter
// const counters = document.querySelectorAll('.mycounter');
// const speed = 200; // The lower the slower

// counters.forEach(mycounter => {
//     const updateCount = () => {
//         const target = +mycounter.getAttribute('data-target');
//         const count = +mycounter.innerText;

//         // Lower inc to slow and higher to slow
//         const inc = target / speed;
//         // Check if target is reached
//         if (count < target) {
//             // Add inc to count and output in counter
//             mycounter.innerText = count + inc;
//             // Call function every ms
//             setTimeout(updateCount, 1);
//         } else {
//             mycounter.innerText = target;
//         }
//     };

//     updateCount();

// });
