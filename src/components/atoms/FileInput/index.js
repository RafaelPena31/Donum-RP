import React from "react";
import "../../../styles/stylePrincipal.css";

const FileInput = () => {
  const saveImage = () => {
    var data = new FormData();
    var imagedata = document.querySelector('input[type="file"]').files[0];
    data.append("data", imagedata);

    fetch("https://donum-backend.herokuapp.com/images", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "formData",
      },
      body: data,
    }).then(
      function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status === 401) {
          alert("Oops! ");
        }
      },
      function (e) {
        alert(e);
      }
    );
  };

  return <input onChange={() => saveImage()} type="file"></input>;
};

export default FileInput;
