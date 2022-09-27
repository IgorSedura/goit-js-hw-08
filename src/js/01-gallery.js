// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryCards = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', galleryMarkup);
function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `

  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>

      `;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
