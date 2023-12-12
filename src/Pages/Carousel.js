
import React from "react";

const Carousel = ()=>{
    return(
        <div>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active">aria-current="Slide 1"</button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="./img/2.jpg" alt="First slide"style={{ maxHeight: '400px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./img/1.jpeg" alt="Second slide"style={{ maxHeight: '400px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./img/3.jpg" alt="Third slide"style={{ maxHeight: '400px', objectFit: 'cover' }} />
    </div>
  </div>
  <button className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" type="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" data-bs-target="#carouselExampleIndicators" type="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>

    )
}
export default Carousel