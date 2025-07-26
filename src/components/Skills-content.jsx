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
        <div className="skills-departament relative flex justify-center w-full">
            <img className="skills-background absolute w-full h-full" src={backgroundSkills} alt="img-skills"/>
            <div className="container w-full h-full pt-16 pb-16 absolute top-0">
                <motion.div className="col-skills relative w-full"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="skills-Title w-full flex flex-col justify-center items-center">
                        <img className="img-scroll mb-2" src={imgScroll} alt="img-Scroll"/>
                        <div className="col-title flex flex-col justify-center items-center">
                            <img className="img-title mb-2 pb-3" src={imgTitle} alt="img-Title"/>
                            <img className="img-line mb-2 pb-3" src={imgLine22} alt="img-Line22"/>
                            <p className="text-white">I am striving to never stop learning and improving</p>
                        </div>
                    </div>
                    <img className="img-tag" src={imgTag} alt="img-skills"/>
                </motion.div>
                <div className="content-Development w-full flex justify-center mt-20">
                    <motion.div className="web-development w-72 h-32 bg-brandcolor2 pt-4 pb-4 pl-6 pr-6 rounded-md text-center flex flex-col justify-center items-center"
                        ref={titleRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <img src={imgWeb} alt="web-development" className="mb-1"/>
                        <h3 className="text-xl font-medium mb-2">web developement</h3>
                        <p className="text-base font-light">HTML·CSS·JS·REACT</p>
                    </motion.div>
                    <motion.div className="app-development w-72 h-32 bg-brandcolor2 pt-4 pb-4 pl-6 pr-6 rounded-md text-center flex flex-col justify-center items-center"
                        ref={headingRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <img src={imgApp} alt="app-development" className="mb-1"/>
                        <h3 className="text-xl font-medium mb-2">App developement</h3>
                        <p className="text-base font-light">React Native</p>
                    </motion.div>
                </div>
                <div className="content-skills w-full flex justify-center items-center mt-20">
                    <div className="Html-Css flex mr-32">
                        <motion.div className="col-img flex flex-col items-center mr-32"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <img src={imgHtml} alt="Html-Language"/>
                            <img src={HtmlText} alt="Html-Text"/>
                        </motion.div>
                        <motion.div className="col-img flex flex-col items-center mr-32"
                            ref={cssRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={cssInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.9 }}
                        >
                            <img src={imgCSS} alt="CSS-Language"/>
                            <img src={CSSText} alt="CSS-Text"/>
                        </motion.div>
                    </div>
                    <div className="JS-React flex">
                        <motion.div className="col-img flex flex-col items-center mr-32"
                            ref={jsRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={jsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2.3 }}
                        >
                            <img src={imgJs} alt="JS-Language"/>
                            <img src={JsText} alt="JS-Text"/>
                        </motion.div>
                        <motion.div className="col-img flex flex-col items-center mr-32"
                            ref={reactRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={reactInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 2.7 }}
                        >
                            <img src={imgReact} alt="React-Language"/>
                            <img src={ReactText} alt="React-Text"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillSContent;