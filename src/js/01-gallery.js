import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);

function render(parentSelector, arrayContent) {
	const gallaryItem = arrayContent.map(element => {
		return `
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>
	`;
	}).join('');
	parentSelector.innerHTML = gallaryItem;

}
render(gallery, galleryItems);

// var змінено на const
const lightbox = new SimpleLightbox('.gallery a', {
	captionDelay: 250
});
