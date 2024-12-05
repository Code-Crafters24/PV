import "./About.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png'
import img1 from './prob1.jpg'
import img2 from './prob2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faArrowUp} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fromtop-anim, .fade-effect, .aboutrightsec, .left-img-effect, .right-img-effect");

        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const [showScrollUpButton, setShowScrollUpButton] = React.useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const showButtonThreshold = 200;
  
       setShowScrollUpButton(scrollY > showButtonThreshold);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="about-banner">
                <div className="about-banner-front">
                    <div className="aboutleft"><div className="aboutleftsec fromtop-anim">PrismView</div>
                        <p className="abouleftseccont fade-effect">A web application for immersive augmented reality shopping experiences.</p></div>

                    <img src={gun} className="aboutrightsec" />


                </div>

            </div>
            <div>
                <h1 className="second-head fromtop-anim">Why PrismView ?</h1>
                <div className="prob-box">
                    <img src={img1} className="prob-img left-img-effect" />
                    <div className="about-prob fade-effect">
                        <p className="about-prob-header"><i>Problem</i></p>
                        <p className="about-prob-sol">Traditional e-commerce platforms fail to deliver immersive product experiences,
                            leaving customers uncertain about the look, fit, and functionality of items. This lack of
                            visualization leads to higher return rates as products may not meet expectations. Additionally,
                            customer engagement suffers due to the limited ability to interact with and explore products online.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="prob-box2">

                    <div className="about-prob fade-effect">
                        <p className="about-prob-header" style={{ "padding": "1vh", "width": "70%" }}><i>Solution</i></p>
                        <p className="about-prob-sol2"> With PrismView,customers can visualize products
                            in their own spaces and view all the virtual features more clearly. This empowers
                            customers to make informed decisions, reduces return rates, and enhances
                            engagement, resulting in a more satisfying and immersive shopping journey.</p>
                    </div>
                    <img src={img2} className="prob-img2 right-img-effect" />
                </div>
            </div>
            
          
        </>

    );
};

export default About;
