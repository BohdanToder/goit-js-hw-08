import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const createImageMarkup = (items) => {
    return items.map(({ original, preview, description }) => {
        return `<div>
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div>`
    }).join('');
};

const imageMarkup = createImageMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
