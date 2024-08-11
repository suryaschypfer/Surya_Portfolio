let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks. forEach(links => {
                links.classList. remove('active'); 
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}



// document.addEventListener('DOMContentLoaded', function() {
//     // Initial setup: display loading screen and hide home page
//     document.querySelector('.loading-container').style.display = 'block';
//     document.getElementById('home-page').style.display = 'none';

//     // Simple animation to show words and then display home page
//     let tl = gsap.timeline({
//         onComplete: function() {
//             // Hide the loading screen and show the main content
//             document.querySelector('.loading-container').style.display = 'none';
//             document.getElementById('home-page').style.display = 'block';
//         }
//     });

//     // Animate the words one by one
//     tl.to('.home-active-first', { opacity: 1, duration: 0.5, delay: 0.5 })
//       .to('.home-active-first', { opacity: 0, duration: 0.5 })
//       .to('.home-active', { opacity: 1, duration: 0.5, stagger: 0.5 })
//       .to('.home-active', { opacity: 0, duration: 0.5, stagger: 0.5, delay: 0.5 }, "-=4") // Adjusting timing
//       .to('.home-active-last', { opacity: 1, duration: 0.5 })
//       .to('.home-active-last', { opacity: 0, duration: 0.5, onComplete: showHomePage });

//     function showHomePage() {
//         // Fade out loading screen and fade in home page
//         gsap.to('.loading-container', { opacity: 0, duration: 0.5, onComplete: function() {
//             document.querySelector('.loading-container').style.display = 'none';
//             document.getElementById('home-page').style.display = 'block';
//             gsap.to('#home-page', { opacity: 1, duration: 0.5 });
//         }});
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    
    // Start with the loading words animation
    const tl = gsap.timeline({
        onComplete: function() {
            // Hide the loading screen and show the main page content
            document.querySelector('.loading-container').style.display = 'none';
            document.getElementById('home-page').style.display = 'block';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });

    tl.set(".loading-words", {opacity: 1, y: 0});

    // Animate the words sequentially
    tl.to('.home-active-first', {opacity: 1, duration: 0.3})  // Further reduced duration
      .to('.home-active', {opacity: 1, duration: 0.15, stagger: 0.15})  // Further reduced duration and stagger
      .to('.home-active', {opacity: 0, duration: 0.15, stagger: 0.15}, "-=0.8")  // Adjusted timing
      .to('.home-active-last', {opacity: 1, duration: 0.1}, "-=0.25")  // Further reduced duration
      .to('.home-active-last', {opacity: 0, duration: 0.1, onComplete: showHomePage });

      function showHomePage() {
        // Step 1: Trigger the rounded-div animation
        gsap.to('.rounded-div-wrap.bottom', {
            height: '150vh', // Increase the height to create the covering effect
            duration: 0.3, // Duration for the upward animation
            ease: 'power4.out',
            onComplete: revealHomePage // Call revealHomePage after this animation completes
        });
    }
    
    function revealHomePage() {
        // Step 2: Reveal the home page after the rounded-div animation
        gsap.set('#home-page', {
            y: '100%',
            opacity: 0,
            scale: 0.5,
            borderRadius: '50%', // Start with an oval shape
            overflow: 'hidden'
        });
    
        gsap.to('#home-page', {
            y: '0%',
            opacity: 1,
            scale: 1,
            borderRadius: '0%', // Remove the border-radius to transition to full view
            duration: 1,
            ease: 'power4.out'
        });
    }
    
});


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

