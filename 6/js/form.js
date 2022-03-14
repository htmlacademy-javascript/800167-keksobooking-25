const adForm = document.querySelector('.ad-form');
const adFormElements = Array.from(adForm.children);
const mapForm = document.querySelector('.map__filters');
const mapFormElements = Array.from(mapForm.children);


const toggleStateInactive = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');
  adFormElements.forEach((elem) => elem.setAttribute('disabled', true));
  mapFormElements.forEach((elem) => elem.setAttribute('disabled', true));
};


const toggleStateActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');
  adFormElements.forEach((elem) => elem.setAttribute('disabled', false));
  mapFormElements.forEach((elem) => elem.setAttribute('disabled', false));
};


export { toggleStateInactive, toggleStateActive };
