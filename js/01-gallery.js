import { galleryItems } from "./gallery-items.js";

const refGallery = document.querySelector(".gallery");

const elements = galleryItems.map((option) => {
  const elementList = document.createElement("li");
  elementList.classList.add("gallery__item");

  const elementLink = document.createElement("a");
  elementLink.classList.add("gallery__link");
  7;
  elementLink.href = option.original;

  const elementLinkImg = document.createElement("img");
  elementLinkImg.classList.add("gallery__image");
  elementLinkImg.src = option.preview;
  elementLinkImg.alt = option.description;
  elementLinkImg.dataset.source = "large-image.jpg";

  elementLink.append(elementLinkImg);
  elementList.append(elementLink);

  return elementList;
});

refGallery.append(...elements);

refGallery.addEventListener("click", selectImg);

function selectImg(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const parentImg = evt.target.closest(".gallery__link");
  const hrefImgOriginal = parentImg.href;

  const instance = basicLightbox.create(`
    <img src="${hrefImgOriginal}">
`);
  instance.show();

  document.addEventListener("keydown", (evt) => {
    const keyName = evt.key;
    // console.log(evt.key);
    if (keyName !== "Escape") {
      return;
    }
    instance.close();
  });
}
