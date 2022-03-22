const TITLE_VALUES = [
  'The Ritz London',
  'Rosewood London',
  'The Langham, London',
  'Baglioni Hotel London'
];
const TypeValuesEn = {
  FLAT: 'flat',
  BUNGALOW: 'bungalow',
  HOUSE: 'house',
  PALACE: 'palace',
  HOTEL: 'hotel',
};
const TypeValuesRu = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const TypeMinPrices = {
  FLAT: 1000,
  BUNGALOW: 0,
  HOUSE: 5000,
  PALACE: 10000,
  HOTEL: 3000,
};

const TYPE_VALUES = {
  [TypeValuesEn.FLAT]: [TypeValuesRu.FLAT],
  [TypeValuesEn.BUNGALOW]: [TypeValuesRu.BUNGALOW],
  [TypeValuesEn.HOUSE]: [TypeValuesRu.HOUSE],
  [TypeValuesEn.PALACE]: [TypeValuesRu.PALACE],
  [TypeValuesEn.HOTEL]: [TypeValuesRu.HOTEL],
};
const TYPE_PRICE_VALUES = {
  [TypeValuesEn.FLAT]: TypeMinPrices.FLAT,
  [TypeValuesEn.BUNGALOW]: TypeMinPrices.BUNGALOW,
  [TypeValuesEn.HOUSE]: TypeMinPrices.HOUSE,
  [TypeValuesEn.PALACE]: TypeMinPrices.PALACE,
  [TypeValuesEn.HOTEL]: TypeMinPrices.HOTEL,
};
const TIME_VALUES = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURE_VALUES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const DESCRIPTION_VALUES = [
  'Food and beverage credit to be used during your stay',
  'Property credit to be used during your stay',
  'Beverage to be used during your stay',
  'Food to be used during your stay',
  '$100 to be used during your stay'
];
const PHOTO_VALUES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const COUNT_ADVERTISEMENTS = 10;

export { TITLE_VALUES, TYPE_VALUES, TIME_VALUES, FEATURE_VALUES, DESCRIPTION_VALUES, PHOTO_VALUES, COUNT_ADVERTISEMENTS, TYPE_PRICE_VALUES };
