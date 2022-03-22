const TITLE_VALUES = [
  'The Ritz London',
  'Rosewood London',
  'The Langham, London',
  'Baglioni Hotel London'
];
const buildingType = {
  flat: {
    key: 'flat',
    title: 'Квартира',
    minPrice: 1000
  },
  bungalow: {
    key: 'bungalow',
    title: 'Бунгало',
    minPrice: 0
  },
  house: {
    key: 'house',
    title: 'Дом',
    minPrice: 5000
  },
  palace: {
    key: 'palace',
    title: 'Дворец',
    minPrice: 10000
  },
  hotel: {
    key: 'hotel',
    title: 'Отель',
    minPrice: 3000
  }
};
const TYPE_VALUES = {
  [buildingType.flat.key]: buildingType.flat.title,
  [buildingType.bungalow.key]: buildingType.bungalow.title,
  [buildingType.house.key]: buildingType.house.title,
  [buildingType.palace.key]: buildingType.palace.title,
  [buildingType.hotel.key]: buildingType.hotel.title,
};
const TYPE_PRICE_VALUES = {
  [buildingType.flat.key]: buildingType.flat.minPrice,
  [buildingType.bungalow.key]: buildingType.bungalow.minPrice,
  [buildingType.house.key]: buildingType.house.minPrice,
  [buildingType.palace.key]: buildingType.palace.minPrice,
  [buildingType.hotel.key]: buildingType.hotel.minPrice,
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
