import { getInteger, randomNumWithDecimal, getRandomArrayElement, createArr } from './utils.js';
import { TITLE_VALUES, TYPE_VALUES, TIME_VALUES, FEATURE_VALUES, DESCRIPTION_VALUES, PHOTO_VALUES } from './data.js';

let userId = 0;

const getOfferObj = (lat, lng) => ({
  title: getRandomArrayElement(TITLE_VALUES),
  address: `${lat}, ${lng}`,
  price: getInteger(100, 500),
  type: getRandomArrayElement(Object.keys(TYPE_VALUES)),
  rooms: getInteger(1, 4),
  guests: getInteger(1, 10),
  checkin: getRandomArrayElement(TIME_VALUES),
  checkout: getRandomArrayElement(TIME_VALUES),
  features: createArr(FEATURE_VALUES),
  description: getRandomArrayElement(DESCRIPTION_VALUES),
  photos: createArr(PHOTO_VALUES)
});

const createAd = () => {
  const lat = randomNumWithDecimal(35.65000, 35.70000, 5);
  const lng = randomNumWithDecimal(139.70000, 139.80000, 5);
  userId++;
  return {
    author : {
      avatar: `img/avatars/user${userId < 10 ? `0${userId}` : userId}.png`
    },
    offer: getOfferObj(lat, lng),
    location: {
      lat,
      lng
    }
  };
};

const publishAds = (count) => Array.from({length : count}, createAd);

export { publishAds };
