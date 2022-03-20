import { ROOMS_OPTIONS } from './data.js';

const adForm = document.querySelector('.ad-form');
const adFormTitle = adForm.querySelector('#title');
const adFormRooms = adForm.querySelector('#room_number');
const adFormCapacity = adForm.querySelector('#capacity');


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error',
});


const validateTitle = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(adFormTitle, validateTitle, 'От 30 до 100 символов', 2);

const validateCapacity = () => ROOMS_OPTIONS[adFormRooms.value].includes(adFormCapacity.value);
const errorTextCapacity = () => Number(adFormRooms.value) === 100 ? 'Комнаты не для гостей' : 'Недостаточно мест, выберите другео значение';


pristine.addValidator(adFormCapacity, validateCapacity, errorTextCapacity);

adFormRooms.addEventListener('change', () => {
  pristine.validate(adFormCapacity);
});


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  return isValid ? 'valid' : 'invalid';
});
