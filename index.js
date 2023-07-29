const websiteDesign = document.getElementById('website-design');
const advertisingVideos = document.getElementById('advertising-videos');
const seeAll = document.getElementById('see-all');
console.log("see-all")

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