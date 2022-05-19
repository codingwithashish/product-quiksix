import React from "react";
import bannerimg1 from '../images/table1.jpg';
import chair1 from '../images/chair1.png';
const Banner = () => {
    return (<> <section className="hero-banner container-xxl pt-6">
        <div className="row">
            <div className="col-md-7">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bannerimg1} className="d-block w-100" alt="banner image" />
                            
                        </div>
                        <div className="carousel-item">
                            <img src={bannerimg1} className="d-block w-100" alt="banner image"/>
                        </div>
                        <div className="carousel-item">
                            <img src={bannerimg1} className="d-block w-100" alt="banner image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5 h-auto">
                {/* <div className="row h-100">
                    <div className="col-12">
                        <img src={chair1} className="o-cover" alt="Chair1" />
                    </div>
                    <div className="col-12">
                        <img src={chair1} className="o-cover" alt="Chai2" />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </>)
}

export default Banner;