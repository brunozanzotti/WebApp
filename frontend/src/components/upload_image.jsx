import React, { useState } from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState();
  const [prediction, setPrediction] = useState();

  const onFileChange = (e) => {
    setPrediction();
    setFile(e.target.files[0]);

    const fileURL = URL.createObjectURL(e.target.files[0]);
    setPreview(fileURL);
  };

  const handleResponse = (resp) => {
    console.log(resp.data);
    if (resp.data?.prediction) {
      const binaryPrediction = resp.data.prediction[0];
      if (binaryPrediction == 0) {
        setPrediction("benign");
      } else if (binaryPrediction == 1) {
        setPrediction("malignant");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    axios
      .post("http://localhost:8000/app/upload/", formData)
      .then((response) => {
        handleResponse(response);
      });
  };

  return (
    <div className="container card p-2" style={{ marginTop: "5vh" }}>
      <h4 className="p-2" style={{ textAlign: "center" }}>
        Escolha uma imagem para detecção de cancer de pele
      </h4>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="row" style={{ justifyContent: "center" }}>
          <input
            type="file"
            name="image"
            onChange={onFileChange}
            className="form-control"
            style={{
              width: "40vw",
            }}
          />
        </div>
        {preview && (
          <div className="row" style={{ justifyContent: "center" }}>
            <Image
              src={preview}
              fluid
              className="mt-3"
              style={{ height: "50vh", width: "40vw" }}
            />
          </div>
        )}
        {file && !prediction && (
          <div
            className="row"
            style={{ justifyContent: "center", marginBottom: "50px" }}
          >
            <button
              type="submit"
              className="btn btn-success mt-3"
              style={{ width: "20vw" }}
            >
              Enviar
            </button>
          </div>
        )}
        {prediction && (
          <div
            className="row"
            style={{
              textAlign: "center",
              marginBottom: "50px",
              marginTop: "10px",
              background: prediction === "benign" ? "lightgreen" : "red",
            }}
          >
            <h4 style={{ color: prediction === "benign" ? "black" : "white" }}>
              {prediction === "malignant"
                ? "Possível Maligno"
                : "Possível Benigno"}
            </h4>
            <p style={{ color: prediction === "benign" ? "black" : "white" }}>
              Isso não é um diagnóstico, por favor, consulte um especialista
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default UploadForm;
