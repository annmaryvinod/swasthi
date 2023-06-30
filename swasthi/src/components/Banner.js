const Banner = () => {
    return ( 

        <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-xl-5">
                    <div className="banner_text">
                        <div className="banner_text_iner">

                            <h1>Swasthi</h1>
                            <h5>It's Okay To Be Not Okay</h5>
                            <a href="register.html" className="btn_2">Make an appointment</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner_img">
                        <img src="https://annmaryvinod.github.io/swasthi-one/images/banner1.jpg" alt="banner image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Banner;