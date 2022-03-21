
const adForm = document.querySelector('.ad-form');
const adFormTitle = adForm.querySelector('#title');
const adFormRooms = adForm.querySelector('#room_number');
const adFormCapacity = adForm.querySelector('#capacity');
const adFormPrice = adForm.querySelector('#price');

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

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__text-error',
});


const validateTitle = (value) => value.length >= TITLE_LENGTH.MIN && value.length <= TITLE_LENGTH.MAX;
const validatePrice = (value) => value < PRICE_MAX_VALUE;
const validateCapacity = () => ROOM_GUEST_CAPACITY[adFormRooms.value].includes(adFormCapacity.value);
const getErrorTextCapacity = () => Number(adFormRooms.value) === Number(RoomsCount.HUNDRED) ? 'Комнаты не для гостей' : 'Недостаточно мест, выберите другое значение';

pristine.addValidator(adFormTitle, validateTitle, 'От 30 до 100 символов');
pristine.addValidator(adFormPrice, validatePrice, 'Максимальная цена 100 000');
pristine.addValidator(adFormCapacity, validateCapacity, getErrorTextCapacity);

adFormRooms.addEventListener('change', () => pristine.validate(adFormCapacity));


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});
