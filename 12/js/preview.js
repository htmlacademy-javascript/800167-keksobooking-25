const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const previewPicture = (inputUpload, previewField, background = false) => {
  inputUpload.addEventListener('change', () => {
    const file = inputUpload.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((type) => fileName.endsWith(type));
    if (matches) {
      if (background) {
        previewField.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
      } else {
        previewField.src = URL.createObjectURL(file);
      }
    }

  });
};

export { previewPicture };
