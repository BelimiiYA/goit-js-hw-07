import { galleryItems } from "./gallery-items.js";

const paletteGallery = document.querySelector(".gallery");
const galleryCardMarkup = createGalleryCardMarkup(galleryItems);

paletteGallery.insertAdjacentHTML("beforeend", galleryCardMarkup);

function createGalleryCardMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
        </a>
        </li>
    `;
  });

  return markup.join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
