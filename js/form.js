import { drawMap, drawCommonPins, resetMainPin } from './map.js';
import { resetSliderUi, pristine } from './validation.js';
import { getData, sendData } from './http.js';
import { showErrorMessage, showTypicalMessage } from './alerts.js';
import { DICTIONARY } from './dictionary.js';
import { activateFilters, toggleFiltersStateUi } from './filters.js';
import { debounce } from './utils.js';
import { addPictureUploadListeners } from './preview.js';

const adForm = document.querySelector('.ad-form');
const adFormElements = Array.from(adForm.children);
const mapForm = document.querySelector('.map__filters');
const adFormSendButton = adForm.querySelector('.ad-form__submit');
const adFormResetButton = adForm.querySelector('.ad-form__reset');
const uploadAvatarInput = adForm.querySelector('.ad-form-header__input');
const formAvatarField = adForm.querySelector('.ad-form-header__avatar');
const uploadPhotoInput = adForm.querySelector('.ad-form__input');
const formPhotoField = adForm.querySelector('.ad-form__photo');

const RESET_PIN_DELAY = 100;
const RERENDER_DELAY = 500;

const toggleUiState = (isActive) => {
  if (isActive) {
    adForm.classList.remove('ad-form--disabled');
    adFormElements.forEach((elem) => elem.removeAttribute('disabled'));
  } else {
    adForm.classList.add('ad-form--disabled');
    adFormElements.forEach((elem) => elem.setAttribute('disabled', true));
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
  (adverts) => {
    if (adverts)  {
      drawMap(adverts);
      toggleFiltersStateUi(true);
      activateFilters(debounce(
        () => drawCommonPins(adverts),
        RERENDER_DELAY));
    } else {
      drawMap();
    }
  },
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

addPictureUploadListeners(uploadAvatarInput, formAvatarField);
addPictureUploadListeners(uploadPhotoInput, formPhotoField, true);

export { toggleUiState };
