const GET_DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch(GET_DATA_URL)
    .then((response) => response.ok ?  response.json() : onError())
    .then((adverts) => onSuccess(adverts))
    .catch(() => onError());
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    POST_DATA_URL,
    {
      method: 'POST',
      body: body,
    },)
    .then((response) => response.ok ? onSuccess() : onError())
    .catch(() => onError());
};


export { getData, sendData };
