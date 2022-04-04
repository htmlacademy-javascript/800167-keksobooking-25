import { TYPE_VALUES } from './data.js';
import { hideElement } from './utils.js';


const advertTemplate = document.querySelector('#card').content.querySelector('.popup');

const fillElementContent = (elem, selector, content) => {
  if (content) {
    elem.querySelector(selector).textContent = content;
  } else {
    hideElement(elem, selector);
  }
};

const fillElementAvatar = (elem, selector, imgSrc) => {
  if (imgSrc) {
    elem.querySelector(selector).src = imgSrc;
  } else {
    hideElement(elem, selector);
  }
};

const fillElementFeatures = (elem, data) => {
  const featuresList = elem.querySelectorAll('.popup__feature');

  if (data) {
    featuresList.forEach((feature) => {
      const modifier = data.some((item) => feature.classList.contains(`popup__feature--${item}`));

      return !modifier ? feature.remove() : null;

    });
  }

};

const fillElementPhotos = (elem, photos) => {
  const photosContainer = elem.querySelector('.popup__photos');
  const photoElement = elem.querySelector('.popup__photo');
  photosContainer.innerHTML = '';
  if (photos && photos.length) {
    photos.forEach((photo) => {
      const image = photoElement.cloneNode(true);
      image.src = photo;
      photosContainer.appendChild(image);
    });
  }

};

const templatePopup = ({author, offer}) => {
  const element = advertTemplate.cloneNode(true);

  fillElementContent(element, '.popup__title', offer.title);
  fillElementContent(element, '.popup__text--address', offer.address);
  fillElementContent(element, '.popup__text--price', `${offer.price} ₽/ночь`);
  fillElementContent(element, '.popup__type', TYPE_VALUES[offer.type]);
  fillElementContent(element, '.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  fillElementContent(element, '.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);

  fillElementFeatures(element, offer.features);

  fillElementContent(element, '.popup__description', offer.description);

  fillElementPhotos(element, offer.photos);
  fillElementAvatar(element, '.popup__avatar', author.avatar);

  return element;

};


export { templatePopup };
