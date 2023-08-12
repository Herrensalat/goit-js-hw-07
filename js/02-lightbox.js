import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const markup = galleryItems.map((g) => `<li class="gallery__item">
<a class="gallery__link" href="${g.original}">
<img class="gallery__image" src="${g.preview}"  
alt="${g.description}"></a></li>`).join("");

const ulGallery = document.querySelector('.gallery');
ulGallery.insertAdjacentHTML('afterbegin',markup);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

ulGallery.addEventListener('click', (e) => { 
    if (e.target.nodeName !== 'IMG') return;
    e.preventDefault();
    lightbox.open;
});

