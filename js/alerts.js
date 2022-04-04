import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');

const SHOW_TIME_DELAY = 3000;

const showErrorMessage = (text) => {
  document.body.insertAdjacentHTML('beforeend', `<div class="error-message">${text}</div>`);
  const errorTemplate = document.querySelector('.error-message');
  setTimeout(() => {
    errorTemplate.remove();
  }, SHOW_TIME_DELAY);
};

const showTypicalMessage = (type) => {
  const isTypeError = type === 'error';
  const closeTemplateButton = isTypeError && bodyElement.querySelector('.error__button');
  const typeMessage = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const typeMessageTemplate = typeMessage.cloneNode(true);

  bodyElement.appendChild(typeMessageTemplate);

  const closeMessageTemplate = () => {
    typeMessageTemplate.removeEventListener('mousedown', closeMessageTemplate);
    if (isTypeError) {
      closeTemplateButton.removeEventListener('click', closeMessageTemplate);
    }
    bodyElement.removeChild(typeMessageTemplate);
  };

  const onDocumentKeydownEsc = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessageTemplate();
      bodyElement.removeEventListener('keydown', onDocumentKeydownEsc);
    }
  };

  bodyElement.addEventListener('keydown', onDocumentKeydownEsc);
  typeMessageTemplate.addEventListener('mousedown', closeMessageTemplate);
  if (isTypeError) {
    closeTemplateButton.addEventListener('click', closeMessageTemplate);
  }
};

export { showErrorMessage, showTypicalMessage };
