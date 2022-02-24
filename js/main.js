function getInteger(min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if ( min < 0 || min >= max ) {
    throw new Error(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getInteger(14,25);


function randomNumWithDecimal(min = 0, max = 10, numberOfDecimal = 1) {

  if ( min < 0 || min >= max ) {
    throw new Error(`Значение min: ${min} превышает значение max: ${max} или указано отрицательное число`);
  }
  return Number(Math.floor(Math.random() * (max - min + 1)) + min).toFixed(numberOfDecimal);
}

randomNumWithDecimal(45.8344444, 89.888777, 3);
