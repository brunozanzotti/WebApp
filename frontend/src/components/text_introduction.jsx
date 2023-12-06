import React from "react";
import UploadForm from "./upload_image";

const Introduction = () => {
  return (
    <>
      <div className="intro-text ">
        <h2>Bem vindo ao nosso aplicativo de Detecção de Cancer de pele</h2>
        <h6>
          Abaixo você ve alguns exemplos de imagens classificadas pelo nosso
          modelo
        </h6>
        <h6>Teste você mesmo</h6>
      </div>

      <div className="image-container">
        <div className="image-card">
          <img
            src="/images/ISIC_0000029.JPG"
            alt="A malignant skin condition"
          />
          <p
            style={{
              fontSize: "1rem",
              color: "darkred",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Maligno
          </p>
        </div>
        <div className="image-card">
          <img src="/images/ISIC_0000042.JPG" alt="A benign skin condition" />
          <p
            style={{
              fontSize: "1rem",
              color: "green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Benigno
          </p>
        </div>
        <div className="image-card">
          <img
            src="/images/ISIC_0000030.JPG"
            alt="A malignant skin condition 2"
          />
          <p
            style={{
              fontSize: "1rem",
              color: "darkred",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Maligno
          </p>
        </div>
      </div>

      <UploadForm />
    </>
  );
};

export default Introduction;
