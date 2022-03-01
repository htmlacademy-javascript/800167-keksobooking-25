const TITLE_VALUES = [
  'The Ritz London',
  'Rosewood London',
  'The Langham, London',
  'Baglioni Hotel London'
];
const TYPE_VALUES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
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
let userId = 0;

const getInteger = (min = 0, max = 10) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( min < 0 || min >= max ) {
    throw new Error(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const randomNumWithDecimal = (min = 0, max = 10, numberOfDecimal = 1) => {

  if ( min < 0 || min >= max ) {
    throw new Error(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
  }
  return Number(Math.floor(Math.random() * (max - min + 1)) + min).toFixed(numberOfDecimal);
};

const getRandomArrayElement = (elements) => elements[getInteger(0, elements.length - 1)];
console.log(FEATURE_VALUES);
const createArr = (source) => Array.from(
  { length: getInteger(1, source.length) },
  () => source.splice(0, 1)[0]
);

// const getAuthorObj = (digit) => ({

// });

const getOfferObj = (lat, lng) => ({
  title: getRandomArrayElement(TITLE_VALUES),
  address: `${lat}, ${lng}`,
  price: randomNumWithDecimal(100, 500),
  type: getRandomArrayElement(TYPE_VALUES),
  rooms: randomNumWithDecimal(1, 4),
  guests: randomNumWithDecimal(1, 10),
  checkin: getRandomArrayElement(TIME_VALUES),
  checkout: getRandomArrayElement(TIME_VALUES),
  features: createArr(FEATURE_VALUES),
  description: '',
  photos: ['111','222']
});

const getLocationObj = (lat, lng) => ({
  lat,
  lng
});

const createAds = () => {
  const lat = randomNumWithDecimal(35.65000, 35.70000, 5);
  const lng = randomNumWithDecimal(139.70000, 139.80000, 5);
  userId++;
  return {
    author : {
      avatar: `img/avatars/user${userId < 10 ? `0${userId}` : userId}.png`
    },
    offer: getOfferObj(lat, lng),
    location: getLocationObj(lat, lng)
  };
};


const arr = Array.from({length : 10}, createAds);
console.log(arr);

console.log(createArr(FEATURE_VALUES));

