import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

//const ul = document.querySelector('gallery');

const markup = galleryItems.map((g) => `<li class="gallery__item">
<a class="gallery__link" href="${g.original}">
<img class="gallery__image" src="${g.preview}" data-source="${g.original}" 
alt="${g.description}"></a></li>`).join("");

const ulGallery = document.querySelector('.gallery');
ulGallery.insertAdjacentHTML('afterbegin',markup);

ulGallery.addEventListener('click', (e) => { 
    if (e.target.nodeName !== 'IMG') return;
    e.preventDefault();
    
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="${screenWidth}" height="${screenHeight}">
`);
    instance.show();

});

