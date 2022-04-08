import { drawCommonPins, map } from './map.js';

const mapForm = document.querySelector('.map__filters');
const mapFormElements = Array.from(mapForm.children);
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('.map__features');


const DEFAULT_VALUE_ANY = 'any';
const RANGE_PRICES = {
  any: {
    MIN_PRICE: 0,
    MAX_PRICE: 100000
  },
  low: {
    MIN_PRICE: 0,
    MAX_PRICE: 10000
  },
  middle: {
    MIN_PRICE: 10000,
    MAX_PRICE: 50000
  },
  high: {
    MIN_PRICE: 50000,
    MAX_PRICE: 100000
  }
};

const toggleFiltersStateUi = (isActive) => {
  if (isActive) {
    mapForm.classList.remove('map__filters--disabled');
    mapFormElements.forEach((elem) => elem.removeAttribute('disabled'));
  } else {
    mapForm.classList.add('map__filters--disabled');
    mapFormElements.forEach((elem) => elem.setAttribute('disabled', true));
  }
};

const filterType = ({offer}, type) => offer.type === type || type === DEFAULT_VALUE_ANY;
const filterPrice = ({offer}, price) => offer.price >= RANGE_PRICES[price].MIN_PRICE && offer.price <= RANGE_PRICES[price].MAX_PRICE;
const filterRooms = ({offer}, rooms) => offer.rooms === Number(rooms) || rooms === DEFAULT_VALUE_ANY;
const filterGuests = ({offer}, guests) => offer.guests === Number(guests) || guests === DEFAULT_VALUE_ANY;
const filterFeatures = ({offer}) => {
  const checkedFeatures = Array.from(housingFeatures.querySelectorAll(':checked'));
  const featureValue = checkedFeatures.map((feature) => feature.value);
  if (!checkedFeatures.length) {
    return true;
  }
  if (offer.features) {
    return featureValue.every((feature) => offer.features.includes(feature));
  }
};

const filterAdvertisements = (advertisements) => {
  const filteredAdvertisements = advertisements
    .filter((offer) => filterType(offer, String(housingType.value)))
    .filter((offer) => filterPrice(offer, String(housingPrice.value)))
    .filter((offer) => filterRooms(offer, housingRooms.value))
    .filter((offer) => filterGuests(offer, housingGuests.value))
    .filter((offer) => filterFeatures(offer));

  drawCommonPins(filteredAdvertisements);
};

const activateFilters = (cb) => {
  mapForm.addEventListener('change', () => {
    map.closePopup();
    cb();
  });
};

export { activateFilters, filterAdvertisements, toggleFiltersStateUi };
