import { resetMainPin } from './map.js';
import { resetSliderUi, pristine } from './validation.js';
import { getData, sendData } from './http.js';
import { showErrorMessage, showTypicalMessage } from './alerts.js';
import { drawMap } from './map.js';
import { DICTIONARY } from './dictionary.js';

const adForm = document.querySelector('.ad-form');
const adFormElements = Array.from(adForm.children);
const mapForm = document.querySelector('.map__filters');
const mapFormElements = Array.from(mapForm.children);
const adFormSendButton = document.querySelector('.ad-form__submit');
const adFormResetButton = document.querySelector('.ad-form__reset');

const COUNT_ADVERTISEMENTS = 10;
const RESET_PIN_DELAY = 100;

const toggleUiState = (isActive) => {
  if (isActive) {
    adForm.classList.remove('ad-form--disabled');
    mapForm.classList.remove('map__filters--disabled');
    adFormElements.forEach((elem) => elem.removeAttribute('disabled'));
    mapFormElements.forEach((elem) => elem.removeAttribute('disabled'));
  } else {
    adForm.classList.add('ad-form--disabled');
    mapForm.classList.add('map__filters--disabled');
    adFormElements.forEach((elem) => elem.setAttribute('disabled', true));
    mapFormElements.forEach((elem) => elem.setAttribute('disabled', true));
  }
};

const toggleSendState = (isSend) => {
  if (isSend) {
    adFormSendButton.setAttribute('disabled', true);
    adFormSendButton.textContent = DICTIONARY.FORM.BUTTON_SEND_STATE;
  } else {
    adFormSendButton.removeAttribute('disabled');
    adFormSendButton.textContent = DICTIONARY.FORM.BUTTON_DEFAULT_STATE;
  }
};

const setDefaultStateForm = () => {
  adForm.reset();
  mapForm.reset();
  resetSliderUi();
  setTimeout(()=> {
    resetMainPin();
  }, RESET_PIN_DELAY);
};

getData(
  (adverts) => adverts ? drawMap(adverts.slice(0, COUNT_ADVERTISEMENTS)) : drawMap(),
  () => showErrorMessage(DICTIONARY.HTTP.ERROR_GET)
);

adFormResetButton.addEventListener('click', setDefaultStateForm);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    const formData = new FormData(evt.target);
    toggleSendState(true);
    sendData(
      () => {
        showTypicalMessage('success');
        setDefaultStateForm();
        toggleSendState(false);
      },
      () => {
        showTypicalMessage('error');
        toggleSendState(false);
      },
      formData
    );
  }
});

export { toggleUiState };
