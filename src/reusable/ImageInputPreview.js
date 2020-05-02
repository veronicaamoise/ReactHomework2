import React from 'react';

function ImageInputPreview(props) {
  const previewFile = () => {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      props.setImage(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

  return (
    <div className="float-container">
      <img src="" height="200" width="200" alt="No file selected" />
      <input type="file"
        id="img"
        name="img"
        accept="image/png, image/jpeg"
        onChange={previewFile} />
    </div>
  );
}

export default ImageInputPreview;