import { TYPE_VALUES, COUNT_ADVERTISEMENTS } from './data.js';
import { publishAds } from './mock.js';


const advertContainer = document.querySelector('.map__canvas');
const advertTemplate = document.querySelector('#card').content.querySelector('.popup');

const advert = publishAds(COUNT_ADVERTISEMENTS);

const elementContainerFragment = document.createDocumentFragment();

const hideElement = (elem, selector) => {
  elem.querySelector(selector).style.display = 'none';
};

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

  featuresList.forEach((feature) => {
    const modifier = data.some((item) => feature.classList.contains(`popup__feature--${item}`));

    return !modifier ? feature.remove() : null;

  });
};

const fillElementPhotos = (elem, photos) => {
  const photosContainer = elem.querySelector('.popup__photos');
  const photoElement = elem.querySelector('.popup__photo');
  photosContainer.innerHTML = '';
  photos.forEach((photo) => {
    const image = photoElement.cloneNode(true);
    image.src = photo;
    photosContainer.appendChild(image);
  });
};

advert.forEach(({author, offer}) => {
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

  elementContainerFragment.appendChild(element);

});


advertContainer.appendChild(elementContainerFragment.children[0]);