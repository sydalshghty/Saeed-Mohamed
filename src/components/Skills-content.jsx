import backgroundSkills from "../assets/Skills@2x.png";
import imgScroll from "../assets/Scroll.svg";
import imgLine22 from "../assets/Line 22.svg";
import imgTag from "../assets/_.svg";
import imgWeb from "../assets/Icon.svg";
import imgApp from "../assets/Icon-App.svg";
import "../css/Skills-content.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function SkillSContent() {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [titleRef, titleInView] = useInView({ triggerOnce: true });
    const [headingRef, headingInView] = useInView({ triggerOnce: true });
    const [htmlRef, htmlInView] = useInView({ triggerOnce: true });

    return (
        <div className="relative flex justify-center w-full skills-departament" id="Skills">
            <img className="absolute object-cover w-full h-full skills-background" src={backgroundSkills} alt="img-skills" />
            <div className="container absolute top-0 w-full h-full pt-16 pb-16">
                <motion.div className="relative w-full col-skills"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="flex flex-col items-center justify-center w-full skills-Title">
                        <img className="mb-2 img-scroll" src={imgScroll} alt="img-Scroll" />
                        <div className="flex flex-col items-center justify-center col-title">
                            <h1 className="mb-5 text-5xl uppercase text-brandcolor1">skills</h1>
                            <img className="pb-3 mb-2 img-line" src={imgLine22} alt="img-Line22" />
                            <p className="text-center text-white">I am striving to never stop learning and improving</p>
                        </div>
                    </div>
                    <img className="img-tag" src={imgTag} alt="img-skills" />
                </motion.div>
                <div className="flex justify-center w-full mt-20 content-Development">
                    <motion.div className="flex flex-col items-center justify-center pt-4 pb-4 pl-6 pr-6 text-center rounded-md h-36 web-development w-72 bg-brandcolor2"
                        ref={titleRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <img src={imgWeb} alt="web-development" className="mb-1" />
                        <h3 className="mb-2 text-xl font-medium">web developement</h3>
                        <p className="text-base font-light">HTML·CSS·Tailwind Css.JS·REACT js</p>
                    </motion.div>
                    <motion.div className="flex flex-col items-center justify-center pt-4 pb-4 pl-6 pr-6 text-center rounded-md h-36 app-development w-72 bg-brandcolor2"
                        ref={headingRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        <img src={imgApp} alt="app-development" className="mb-1" />
                        <h3 className="mb-2 text-xl font-medium">App developement</h3>
                        <p className="text-base font-light">React Native</p>
                    </motion.div>
                </div>
                <div className="flex items-center justify-center w-full mt-20 content-skills">
                    <div className="flex items-center justify-center w-full Html-Css">
                        <motion.div className="flex flex-col items-center justify-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#E54F26" }}>
                                <FaHtml5 className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl uppercase" style={{ color: "#E54F26" }}>html</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center justify-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#0C73B8" }}>
                                <IoLogoCss3 className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl uppercase" style={{ color: "#0C73B8" }}>css</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center justify-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#E7A020" }}>
                                <DiJavascript className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl uppercase" style={{ color: "#E7A020" }}>js</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center justify-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#0C73B8" }}>
                                <RiTailwindCssFill className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl text-center uppercase" style={{ color: "#0C73B8" }}>tailwind</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center justify-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#28A9E0" }}>
                                <RiReactjsFill className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl text-center uppercase" style={{ color: "#28A9E0" }}>reactjs</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#0C73B8" }}>
                                <SiRedux className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl text-center uppercase" style={{ color: "#0C73B8" }}>redux</h1>
                        </motion.div>
                        <motion.div className="flex flex-col items-center mr-32 col-img"
                            ref={htmlRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={htmlInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <div className="flex items-center justify-center col-skill" style={{ backgroundColor: "#E7A020" }}>
                                <FaGithub className="text-5xl text-white icon" />
                            </div>
                            <h1 className="text-2xl text-center uppercase" style={{ color: "#E7A020" }}>Github</h1>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillSContent;