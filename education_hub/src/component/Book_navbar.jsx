import React from "react";

export default function Book_navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BOOK_SEARCH</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousal">
          <div class="carousel-caption d-none d-md-block" style={{zIndex:"2"}}>
            <form class="d-flex" role="search">
              <p>“A reader lives a thousand lives before he dies . . . ...</p>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://w0.peakpx.com/wallpaper/379/521/HD-wallpaper-girl-reading-book.jpg"
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(50%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/896349530/photo/female-reading-book-on-bed-at-night.jpg?s=612x612&w=0&k=20&c=bp1nhTrSmiBTtTcyrmg9MdjOsiWGtaQlqOyJH34aMQA="
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(50%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7B3nQ8sm1RhRaFT1tm779E0lUydNX6ePmWHF_72h4B-eWQJhc1sMnkh68wK4Qre3u8_I&usqp=CAU"
              className="d-block w-100"
              alt="..."
              style={{filter:"brightness(50%)"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
