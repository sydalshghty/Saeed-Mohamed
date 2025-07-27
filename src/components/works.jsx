import WorksImg from "../assets/Works.png";
import ScrollImg from "../assets/Scroll.svg";
import TitleWorks from "../assets/Title-Works.svg";
import LineImg from "../assets/Line 22.svg";
import buttonLeft from "../assets/Button-L.svg";
import buttonRight from "../assets/Button-R.svg";
import dualScreen from "../assets/Dual-screen.png";
import imgCoding from "../assets/Web 1.svg";
import iconmouse from "../assets/icon-mouse-pointer.svg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ExcluisveImg from "../assets/screencapture-e-commerce-excluisve-netlify-app-Home-2025-05-10-14_23_15.svg";
import StaticWebsite from "../assets/screencapture-sydalshghty-github-io-Project-HTML-And-CSS-2025-05-10-15_36_34.svg";
import "../css/works.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function WorksDepartament() {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [titleRef, titleInView] = useInView({ triggerOnce: true });

        const  settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnHover: true,
        speed: 3000,
        arrows: false
    };

    const [sliderRef,setsliderRef] = useState(null);

    const goToPrev = () => {
        if(sliderRef){
            sliderRef.slickPrev();
        }
    }

    const goToNext = () => {
        if(sliderRef){
            sliderRef.slickNext();
        }
    }

    return(
        <div className="Works-Departament">
            <img className="works-background" src={WorksImg} alt="works"/>
            <div className="container w-full h-full pt-16 pb-16">
                <motion.div className="works-Title"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="scroll-img mb-2" src={ScrollImg} alt="Scroll-img"/>
                    <div className="col-title">
                        <img src={TitleWorks} alt="heading-Works"/>
                        <img src={LineImg} alt="line-Works"/>
                        <p>I had the pleasure of working with these awesome projects</p>
                    </div>
                </motion.div>
                <motion.div className="works-content"
                    ref={titleRef}
                    initial={{ opacity: 0, y: 80 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="col-button">
                        <img onClick={goToPrev} className="img-left" src={buttonLeft} alt="button-left"/>
                        <img onClick={goToNext} className="img-right" src={buttonRight} alt="button-right"/>
                    </div>
                    <div className="all-projects">
                            <Slider {...settings} ref={setsliderRef}>
                                <div>
                                    <div className="content-website">
                                        <div className="view-website">
                                            <Link to={"https://sydalshghty.github.io/e-commerce-app/"} target="_blank">view Website</Link>
                                            <img src={iconmouse} alt="img-mouse"/>
                                        </div>
                                        <div className="images-website">
                                            <img className="dualScreen-img" src={dualScreen} alt="main-img"/>
                                            <div className="col-img">
                                                <img className="Coding-img" src={imgCoding} alt="img-coding"/>
                                                <img className="Website-img" src={ExcluisveImg} alt="img-website"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="content-website">
                                        <div className="view-website">
                                            <Link to={"https://sydalshghty.github.io/Project-HTML-And-CSS/"} target="_blank">view Website</Link>
                                            <img src={iconmouse} alt="img-mouse"/>
                                        </div>
                                        <div className="images-website">
                                            <img className="dualScreen-img" src={dualScreen} alt="main-img"/>
                                            <div className="col-img">
                                                <img className="Coding-img" src={imgCoding} alt="img-coding"/>
                                                <img className="Website-img" src={StaticWebsite} alt="img-website"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default WorksDepartament;