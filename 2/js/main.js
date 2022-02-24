function getInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( min >= 0 && min <= max ) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // eslint-disable-next-line no-alert
  alert(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
}

getInteger(8,25);


function randomNumWithDecimal(min, max, numberOfDecimal) {

  if ( min >= 0 && min <= max ) {
    return Number(Math.floor(Math.random() * (max - min + 1)) + min).toFixed(numberOfDecimal);
  }
  // eslint-disable-next-line no-alert
  alert(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
}

randomNumWithDecimal(45.8344444,89.888777, 3);
