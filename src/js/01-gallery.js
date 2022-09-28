// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGallery from './creat-gallery';
// Change code below this line

console.log(galleryItems);

const galleryCards = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', galleryMarkup);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
