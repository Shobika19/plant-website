import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import cr1 from "./images/cr1.png";
import cr2 from "./images/cr2.png";
import cr3 from "./images/cr3.png";
import cr4 from "./images/cr4.png";
import p1 from "./images/p1.webp";
import p2 from "./images/p2.webp";
import p3 from "./images/p3.webp";
import p4 from "./images/p4.webp";
import p5 from "./images/p5.jpeg";
import p6 from "./images/p6.webp";
import b1 from "./images/b1.webp";
import f2 from "./images/f2.webp";
import f3 from "./images/f3.webp";
import f4 from "./images/f4.webp";
import s1 from "./images/s1.webp";
import s2 from "./images/s2.webp";
import s3 from "./images/s3.webp";
import s4 from "./images/s4.webp";
import a1 from "./images/a1.webp";
import a2 from "./images/a2.webp";
import a3 from "./images/a3.webp";
import a4 from "./images/a4.webp";
import y1 from "./images/y1.webp";
import x1 from "./images/x1.png";
import testimonial from "./images/testimonial.jpg";
import about from "./images/about.webp";
import about2 from "./images/about2.webp";

const Home = () => {
  return (
    <div>
      <br />
      <Carousel interval={3000} pause="hover" controls={true}>
        {[cr1, cr2, cr3, cr4].map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <img src={imgSrc} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <h1 style={{ textAlign: 'center', color: "green", marginTop: "50px", fontStyle: "italic" }}>
        Shop Our Green Delights
      </h1>

      <div style={{ display: "flex", textAlign: "center", marginTop: "50px", justifyContent: "center" }}>
        {[p1, p2, p3, p4, p5, p6].map((imgSrc, index) => (
          <div key={index} style={{ marginLeft: index === 0 ? "0" : "30px" }}>
            <img src={imgSrc} style={{ width: "130px", height: "130px" }} alt={`Product ${index + 1}`} />
            <h5 style={{ color: "grey", marginTop: "20px" }}>{['Succulents', 'Cactus', 'Miniatures', 'Pots & Planters', 'Seeds', 'Gardening essentials'][index]}</h5>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: 'center', color: "brown", marginTop: "100px", fontStyle: "italic" }}>
        Our Best Sellers
      </h3><br />

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {[b1, f2, f3, f4].map((imgSrc, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: "0 15px" }}>
            <img src={imgSrc} className="card-img-top" alt={`Product ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title">{['Laxmi Kamal', 'String of Pearls', 'Crassula Jade plant', 'Othonna capensis-Ruby'][index]}</h5>
              <p className="card-text">Rs: {['50.00', '150.00', '250.00', '100.00'][index]}</p>
              <a href="#" className="btn btn-warning">Buy Now</a>
              <a href="#" className="btn btn-danger" style={{ marginLeft: "30px" }}>Add to Cart</a>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Products */}
      <h3 style={{ textAlign: 'center', color: "brown", marginTop: "100px", fontStyle: "italic" }}>
        Beautiful Variegation Plants
      </h3><br />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {[s1, s2, s3, s4].map((imgSrc, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: "0 15px" }}>
            <img src={imgSrc} className="card-img-top" alt={`Product ${index + 5}`} />
            <div className="card-body">
              <h5 className="card-title">{['Brazilian Wood Plant', 'Echinopsis Chamaecereus', 'Sanseveria Hybrid', 'Variegated Jade plant'][index]}</h5>
              <p className="card-text">Rs: {['50.00', '150.00', '250.00', '100.00'][index]}</p>
              <a href="#" className="btn btn-warning">Buy Now</a>
              <a href="#" className="btn btn-danger" style={{ marginLeft: "30px" }}>Add to Cart</a>
            </div>
          </div>
        ))}
      </div><br /><br /><br />

      <div className="card mb-3" style={{ maxWidth: "1500px", margin: "auto", marginTop: "40px", backgroundColor: "lightsalmon", maxHeight: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={y1} className="img-fluid rounded-start" alt="Additional Content" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Care tips</h5>
              <p className="card-text">
                1. After receiving the plants, open the box 📦 as soon as possible.<br /><br />
                2. Air dry the plants for 2-3 hours in fresh air.<br /><br />
                3. Plant in well-drained soil (30% sand + 30% soil + 20% vermicompost + 20% perlite).<br /><br />
                4. Water plants after 2-3 days and don’t give direct sunlight to newly planted succulents for at least 10 days.<br/><br />
                Note: Always water succulents when the top layer of soil feels dry at the roots rather than the leaves.
              </p>
            </div>
          </div><br /><br />
        </div>
      </div><br /><br />
      <h3 style={{ textAlign: 'center', color: "brown", marginTop: "60px", fontStyle: "italic" }}>
        House Plant
      </h3><br />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        {[a1, a2, a3, a4].map((imgSrc, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: "0 15px" }}>
            <img src={imgSrc} className="card-img-top" alt={`Product ${index + 5}`} />
            <div className="card-body">
              <h5 className="card-title">{['Brazilian Wood Plant', 'Echinopsis Chamaecereus', 'Sanseveria Hybrid', 'Variegated Jade plant'][index]}</h5>
              <p className="card-text">Rs: {['50.00', '150.00', '250.00', '100.00'][index]}</p>
              <a href="#" className="btn btn-warning">Buy Now</a>
              <a href="#" className="btn btn-danger" style={{ marginLeft: "30px" }}>Add to Cart</a>
            </div>
          </div>
        ))}
      </div><br /><br /><br /><br />
      <div>
        {/* Other sections of your component */}

        
      <div className="container my-5">
        <h1 className="mb-4">Wild Crafted & Organic Ingredients</h1>
        <hr></hr>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={about} className="img-fluid" alt="Wild Crafted & Organic Ingredients" />
          </div>
          <div className="col-md-6">
            <p className="fs-4">
              Shankara sources all natural ingredients in a responsible manner.<br />
              Shankara is a natural line that sources (ALL OF THE)<br />
              best natural ingredients in a responsible manner.<br />
              Shankara is not a chemical or a chemical-based line.
            </p>
          </div>
        </div>
      </div><br /><br />

      <div className="container my-5">
        <h1 className="mb-4">Our Formulation</h1>
        <hr></hr>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <p className="fs-4">
              Shankara sources all natural ingredients in a responsible manner.<br />
              Shankara is a natural line that sources (ALL OF THE)<br />
              best natural ingredients in a responsible manner.<br />
              Shankara is not a chemical or a chemical-based line.
            </p>
          </div>
          <div className="col-md-6">
            <img src={about2} className="img-fluid" alt="Our Formulation" />
          </div>
        </div>
      </div><br /><br />
      <div className="end">
          <h4 style={{ textAlign: 'center', color: 'brown', marginTop: '150px' }}>Our Testimonials</h4>
          <h1 style={{ textAlign: 'center', color: 'rgb(87, 83, 83)' }}>Our Client Saying</h1>
        </div><br/><br/>

        <section id="testimonials" className="py-5">
          <div className="container">
            <div className="row">
              {/* Testimonial 1 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Ross Lee" />
                      <p className="customer-name mt-2 mb-0">Ross Lee</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Amelia Watson" />
                      <p className="customer-name mt-2 mb-0">Amelia Watson</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Ben Roy" />
                      <p className="customer-name mt-2 mb-0">Ben Roy</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div><br/><br/><br/>
      <div>
        <img src={x1} alt="Extra Content" style={{ width: "1300px" }} />
      </div><br/><br/><br/>

      <footer className="text-center text-lg-start text-black" style={{ backgroundColor: 'lightsalmon' }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>
                Shop Name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>Products</h6>
              <p><a className="text-black" href="#">MDBootstrap</a></p>
              <p><a className="text-black" href="#">MDWordPress</a></p>
              <p><a className="text-black" href="#">BrandFlow</a></p>
              <p><a className="text-black" href="#">Bootstrap Angular</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration:'underline' }}>
                Useful Links
              </h6>
              <p><a className="text-black" href="#">Your Account</a></p>
              <p><a className="text-black" href="#">Become an Affiliate</a></p>
              <p><a className="text-black" href="#">Shipping Rates</a></p>
              <p><a className="text-black" href="#">Help</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold" style={{ textDecoration: 'underline' }}>Contact</h6>
              <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
          </div>
          <hr className="my-3" />
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2024 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDFShankara.com</a>
              </div>
            </div>
            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                <i class="fab fa-google"></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>

  );
};

export default Home;


