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

export { TYPE_VALUES, TYPE_PRICE_VALUES };
