const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const addPictureUploadListeners = (inputUpload, previewField, background = false) => {
  inputUpload.addEventListener('change', () => {
    const file = inputUpload.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
    if (!matches) {
      throw new Error(`Недопустимый формат. Список доступных: ${FILE_TYPES}`);
    }
    if (background) {
      previewField.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    } else {
      previewField.src = URL.createObjectURL(file);
    }
  });
};

export { addPictureUploadListeners };
