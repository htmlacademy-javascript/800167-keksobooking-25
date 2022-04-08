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

const createArr = ([...source]) => Array.from(
  { length: getInteger(1, source.length) },
  () => source.splice(0, 1)[0]
);

const hideElement = (elem, selector) => {
  elem.querySelector(selector).style.display = 'none';
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce =  (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { getInteger, randomNumWithDecimal, getRandomArrayElement, createArr, hideElement, isEscapeKey, debounce };
