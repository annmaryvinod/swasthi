const About = () => {
    return ( 

        <section className="about_us padding_top">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-lg-6">
                    <div className="about_us_img">
                        <img src="https://annmaryvinod.github.io/swasthi-one/images/banner2.avif" alt="image"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <h2>About us</h2>
                        <p>Swasthi is for people who doubt their mental wellbeing, for patients who could not reach out
                            for medical aid due to social stigma , for patients who could not resume consulting the
                            doctor
                            due to physical distance and for everyone who needs help in this matter.
                            Swasthi is an interface to connect users to psychologists,psychiatrists all over the globe.
                            The consultation process can be made fully online.</p>
                        <a className="btn_2 " href="#">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default About;