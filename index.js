

const websiteDesign = document.getElementById('website-design');
const advertisingVideos = document.getElementById('advertising-videos');
const seeAll = document.getElementById('see-all');

const websiteContent = document.getElementById('website-content');
const advertisingContent = document.getElementById('advertising-content');
const seeallContent = document.getElementById('seeall-content');

websiteDesign.addEventListener('click', () => {
    websiteContent.style.display = 'block';
    advertisingContent.style.display = 'none';
    seeallContent.style.display = 'none';
});

advertisingVideos.addEventListener('click', () => {
    websiteContent.style.display = 'none';
    advertisingContent.style.display = 'block';
    seeallContent.style.display = 'none';
});

seeAll.addEventListener('click', () => {
    websiteContent.style.display = 'none';
    advertisingContent.style.display = 'none';
    seeallContent.style.display = 'block';
});


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.to(".Contact", {
    ScrollTrigger: {
        trigger:".Contact",
        start: "top center",
        marker: true,
        toggleAction: "restart pause reverse pause"
    },
    x: 400,
    duration: 10
})


// // Function to check if an element is in the viewport
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to handle scroll event for the ".amapiano" element
// function animateAmapiano() {
//     const amapianoElement = document.querySelector(".amapiano");
//     if (isElementInViewport(amapianoElement)) {
//         // Add the animation class when the element is in the viewport
//         amapianoElement.classList.add("animate-slide-in");
//         // Remove the scroll event listener to trigger the animation only once
//         window.removeEventListener("scroll", animateAmapiano);
//     }
// }

// // Function to handle scroll event for the ".packages-part" element
// function animatePackages() {
//     const packagesElement = document.querySelector(".packages-part");
//     if (isElementInViewport(packagesElement)) {
//         // Add the animation class to each package element when it's in the viewport
//         const packageElements = document.querySelectorAll(".packages-cont-foot");
//         packageElements.forEach(function(element, index) {
//             setTimeout(function() {
//                 element.classList.add("animate-scale-up-center");
//             }, index * 100); // Add a delay for each package element to create a staggered effect
//         });

//         // Remove the scroll event listener to trigger the animation only once
//         window.removeEventListener("scroll", animatePackages);
//     }
// }

// // Attach the scroll event listeners for both animations
// window.addEventListener("scroll", animateAmapiano);
// window.addEventListener("scroll", animatePackages);


// gsap.to(".amapiano", {
//     scrollTrigger: ".amapiano", // start the animation when ".box" enters the viewport (once)
//     x: 1000
// });
