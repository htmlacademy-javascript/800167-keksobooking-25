import { TYPE_PRICE_VALUES } from './data.js';

const adForm = document.querySelector('.ad-form');
const adFormTitle = adForm.querySelector('#title');
const adFormRooms = adForm.querySelector('#room_number');
const adFormCapacity = adForm.querySelector('#capacity');
const adFormPrice = adForm.querySelector('#price');
const adFormType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const adFormSlider = document.querySelector('.ad-form__slider');

const PRICE_MAX_VALUE = 100000;
const TITLE_LENGTH = {
  MIN: 30,
  MAX: 100
};
const RoomsCount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  HUNDRED: '100'
};
const GuestsCount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  UNAVAILABLE: '0'
};
const ROOM_GUEST_CAPACITY = {
  [RoomsCount.ONE]: GuestsCount.ONE,
  [RoomsCount.TWO]: [GuestsCount.ONE, GuestsCount.TWO],
  [RoomsCount.THREE]: [GuestsCount.ONE, GuestsCount.TWO, GuestsCount.THREE],
  [RoomsCount.HUNDRED]: GuestsCount.UNAVAILABLE
};
const SLIDER_STEP_VALUE = 1000;

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error',
});


const validateTitle = (value) => value.length >= TITLE_LENGTH.MIN && value.length <= TITLE_LENGTH.MAX;
const validatePrice = (value) => value <= PRICE_MAX_VALUE && value >= TYPE_PRICE_VALUES[adFormType.value];
const validateCapacity = () => ROOM_GUEST_CAPACITY[adFormRooms.value].includes(adFormCapacity.value);
const getErrorTextCapacity = () => Number(adFormRooms.value) === Number(RoomsCount.HUNDRED) ? 'Комнаты не для гостей' : 'Недостаточно мест, выберите другое значение';
const getErrorTextPrice = () => Number(adFormPrice.value) < TYPE_PRICE_VALUES[adFormType.value] ? `Минимальная цена: ${TYPE_PRICE_VALUES[adFormType.value]}` : 'Максимальная цена 100 000';

pristine.addValidator(adFormTitle, validateTitle, 'От 30 до 100 символов');
pristine.addValidator(adFormPrice, validatePrice, getErrorTextPrice);
pristine.addValidator(adFormCapacity, validateCapacity, getErrorTextCapacity);

adFormRooms.addEventListener('change', () => pristine.validate(adFormCapacity));

adFormType.addEventListener('change', (evt) => {
  const typeValue = TYPE_PRICE_VALUES[evt.target.value];
  adFormPrice.placeholder = typeValue;
  adFormPrice.setAttribute('min', typeValue);
  adFormSlider.noUiSlider.updateOptions({
    range: {
      min: typeValue,
      max: PRICE_MAX_VALUE,
    },
    step: SLIDER_STEP_VALUE,
  });
  pristine.validate(adFormPrice);
});

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

noUiSlider.create(adFormSlider, {
  range: {
    min: TYPE_PRICE_VALUES[adFormType.value],
    max: PRICE_MAX_VALUE,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => parseFloat(value),
  }
});

adFormSlider.noUiSlider.on('change', () => {
  adFormPrice.value = adFormSlider.noUiSlider.get();
  pristine.validate(adFormPrice);
});

adFormPrice.addEventListener('change', () => {
  adFormSlider.noUiSlider.set(adFormPrice.value);
});


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});
