import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>


      <div className="carousel-inner">

        <div className="carousel-item active">
          <Image src="0000027901.jpg" className="d-block w-100" alt="Primeiro Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primeiro Slide</h5>
            <p>Texto de descrição do primeiro slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <Image src="7c4bd311038460f3168336281708453e.jpeg" className="d-block w-100" alt="Segundo Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo Slide</h5>
            <p>Texto de descrição do segundo slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <Image src="1_photo_2024_08_16_19_15_48-39474786.jpg" className="d-block w-100" alt="Terceiro Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Terceiro Slide</h5>
            <p>Texto de descrição do terceiro slide.</p>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carousel;
