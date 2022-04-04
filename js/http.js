const GET_DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch(() => onError());
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    POST_DATA_URL,
    {
      method: 'POST',
      body: body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }

  }).catch(() => onError());
};


export { getData, sendData };
