import backgroundSkills from "../assets/Skills@2x.png";
import imgScroll from "../assets/Scroll.svg";
import imgTitle from "../assets/Title.svg";
import imgLine22 from "../assets/Line 22.svg";
import imgTag from "../assets/_.svg";
import imgWeb from "../assets/Icon.svg";
import imgApp from "../assets/Icon-App.svg";
import imgHtml from "../assets/Icon-Html.svg";
import HtmlText from "../assets/Text-Html.svg";
import imgCSS from "../assets/Icon-Css.svg";
import CSSText from "../assets/Text-CSS.svg";
import imgJs from "../assets/Icon-Js.svg";
import JsText from "../assets/Text-JS.svg";
import imgReact from "../assets/Icon-React.svg";
import ReactText from "../assets/Text-React.svg";
import "../css/Skills-content.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function SkillSContent(){
    const { ref, inView } = useInView({ triggerOnce: true });
    const [titleRef, titleInView] = useInView({ triggerOnce: true });
    const [headingRef, headingInView] = useInView({ triggerOnce: true });
    const [htmlRef, htmlInView] = useInView({ triggerOnce: true });
    const [cssRef, cssInView] = useInView({ triggerOnce: true });
    const [jsRef, jsInView] = useInView({ triggerOnce: true });
    const [reactRef, reactInView] = useInView({ triggerOnce: true });

    return(
        <div className="relative flex justify-center w-full skills-departament">
            <img className="absolute w-full h-full skills-background" src={backgroundSkills} alt="img-skills"/>
            <div className="container absolute top-0 w-full h-full pt-16 pb-16">
                <motion.div className="relative w-full col-skills"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex flex-col items-center justify-center w-full skills-Title">
                        <img className="mb-2 img-scroll" src={imgScroll} alt="img-Scroll"/>
                        <div className="flex flex-col items-center justify-center col-title">
                            <img className="pb-3 mb-2 img-title" src={imgTitle}  alt="img-Title"/>
                            <img className="pb-3 mb-2 img-line" src={imgLine22} alt="img-Line22"/>
                            <p className="text-white">I am striving to never stop learning and improving</p>
                        </div>
                    </div>
                    <img className="img-tag" src={imgTag} alt="img-skills"/>
                </motion.div>
                <div className="flex justify-center w-full mt-20 content-Development">
                    <motion.div className="flex flex-col items-center justify-center h-32 pt-4 pb-4 pl-6 pr-6 text-center rounded-md web-development w-72 bg-brandcolor2"
                        ref={titleRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <img src={imgWeb} alt="web-development" className="mb-1"/>
                        <h3 className="mb-2 text-xl font-medium">web developement</h3>
                        <p className="text-base font-light">HTML·CSS·JS·REACT</p>
                    </motion.div>
                    <motion.div className="flex flex-col items-center justify-center h-32 pt-4 pb-4 pl-6 pr-6 text-center rounded-md app-development w-72 bg-brandcolor2"
                        ref={headingRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <img src={imgApp} alt="app-development" className="mb-1"/>
                        <h3 className="mb-2 text-xl font-medium">App developement</h3>
                        <p className="text-base font-light">React Native</p>
                    </motion.div>
                </div>
                <div className="flex items-center justify-center w-full mt-20 content-skills">
                    <div className="flex mr-32 Html-Css">
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <img src={imgHtml} alt="Html-Language"/>
                            <img src={HtmlText} alt="Html-Text" className="html-img"/>
                        </motion.div>
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={cssRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={cssInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.9 }}
                        >
                            <img src={imgCSS} alt="CSS-Language"/>
                            <img src={CSSText} alt="CSS-Text" className="css-img"/>
                        </motion.div>
                    </div>
                    <div className="flex JS-React">
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={jsRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={jsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2.3 }}
                        >
                            <img src={imgJs} alt="JS-Language"/>
                            <img src={JsText} alt="JS-Text" className="js-img"/>
                        </motion.div>
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={reactRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={reactInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2.7 }}
                        >
                            <img src={imgReact} alt="React-Language"/>
                            <img src={ReactText} alt="React-Text" className="react-img"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillSContent;