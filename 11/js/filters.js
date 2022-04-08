import { map } from './map.js';

const mapForm = document.querySelector('.map__filters');
const mapFormElements = Array.from(mapForm.children);
const housingType = mapForm.querySelector('#housing-type');
const housingPrice = mapForm.querySelector('#housing-price');
const housingRooms = mapForm.querySelector('#housing-rooms');
const housingGuests = mapForm.querySelector('#housing-guests');
const housingFeatures = mapForm.querySelector('.map__features');


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

const filterType = (elem, type) => elem === type || type === DEFAULT_VALUE_ANY;
const filterPrice = (elem, price) => elem >= RANGE_PRICES[price].MIN_PRICE && elem <= RANGE_PRICES[price].MAX_PRICE;
const filterRooms = (elem, rooms) => elem === Number(rooms) || rooms === DEFAULT_VALUE_ANY;
const filterGuests = (elem, guests) => elem === Number(guests) || guests === DEFAULT_VALUE_ANY;
const filterFeatures = (elem) => {
  const checkedFeatures = Array.from(housingFeatures.querySelectorAll(':checked'));
  const featureValue = checkedFeatures.map((feature) => feature.value);
  if (!checkedFeatures.length) {
    return true;
  }
  if (elem) {
    return featureValue.every((feature) => elem.includes(feature));
  }
};

const filterAdvertisements = ({offer}) => filterType(offer.type, String(housingType.value)) &&
    filterPrice(offer.price, String(housingPrice.value)) &&
    filterRooms(offer.rooms, housingRooms.value) &&
    filterGuests(offer.guests, housingGuests.value) &&
    filterFeatures(offer.features);

const activateFilters = (cb) => {
  mapForm.addEventListener('change', () => {
    map.closePopup();
    cb();
  });
};

export { activateFilters, filterAdvertisements, toggleFiltersStateUi };
