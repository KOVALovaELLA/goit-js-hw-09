import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const pictureContainer = document.querySelector('.gallery')
const pictureMarkup = createPicturesMarkup(galleryItems)

function createPicturesMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
        <a
        class="gallery__link"
        href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      
      alt="${description}"
        />
    </a>
    </li>
        `
    }).join('');
}

pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup)


document.addEventListener("DOMContentLoaded", onLoad )
function onLoad() {
   

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });

    
};