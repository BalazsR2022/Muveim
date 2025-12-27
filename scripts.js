// Elements
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const infoBox = document.getElementById('info-box');
const infoTitle = document.getElementById('info-title');
const infoSize = document.getElementById('info-size');
const infoPrice = document.getElementById('info-type');

// Lightbox működés minden meglévő képhez
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    infoTitle.textContent = img.dataset.title || '';
    infoSize.textContent = img.dataset.size || '';
    infoPrice.textContent = img.dataset.type || '';
    lightbox.style.display = 'flex';
  });
});

// Lightbox bezárása X-re kattintva
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Lightbox bezárása a háttérre kattintva
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});
