import react from "react";
import "./about.css";
import imgcv from "../../assets/imgcv.png";
import AdinaMartiniucCV from "../../assets/AdinaMartiniucCV.pdf";
import Info from "./Info";

const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
            <img src={imgcv} alt="" className="about__img" />
            
            <div className="about__data">
                <Info />

                <p className="about__description">
                    Software developer, I create, modify and develop web pages. I have 4 years of experience
                    and many clients are happy with the projects carried out.
                </p>
                <a download="" href={AdinaMartiniucCV} className="button button-about">Download CV</a>
            </div>
            </div>
        </section>
    )
}

export default About