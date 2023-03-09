// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// import of galleryItems
import { galleryItems } from './gallery-items';

console.log(galleryItems);
// Change code below this line

const parentItemsRef = document.body.querySelector('.gallery');
// console.log('parentItemsRef:', parentItemsRef);

galleryItemsMarkup(galleryItems, parentItemsRef);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function galleryItemsMarkup(arrItems, parentRef) {
    const itemsMarkup = arrItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
             </div>`;
        })
        .join('');

    return (parentRef.innerHTML = itemsMarkup);
}

console.log(lightbox);

