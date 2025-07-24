import imgGrid from "../assets/icon-grid.svg";
import imgUser from "../assets/icon-user.svg";
import imgCode from "../assets/icon-code.svg";
import imgMonitor from "../assets/icon-monitor.svg";
import imgEdit from "../assets/icon-edit.svg";
import imgEmail from "../assets/icon-mail.svg";
import imgdeveloper from "../assets/developer.svg";
import imgemail from "../assets/icon-mail1.svg";
import iconMap from "../assets/icon-map-pin.svg";
import imgWork from "../assets/icon-briefcase.svg";
import imgLink from "../assets/icon-link.svg";
import imgHtml from "../assets/HTML.svg";
import imgCss from "../assets/CSS.svg";
import imgJs from "../assets/JS.svg";
import imgReact from "../assets/REACT.svg";
import imgDownload from "../assets/icon-download.svg";
import imgProfile from "../assets/Profile photo.svg";
import { Link } from "react-router-dom";
import buttonEmail from "../assets/Button.svg";
import "../css/home-section1.css";
//import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function HomeSection1(){

  /*  const { ref, inView } = useInView({ triggerOnce: true });
    ref={ref}
    initial={{ opacity: 0, y: 80 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1 }}*/

    const h1 = `<h1>`;
    const h2 = `</h1>`;
    const p1 = `<p>`;
    const p2 = `</p>`;

    return(
        <div className="homeContent-Departament w-full bg-bg1color overflow-hidden">
            <div className="container w-full h-full pt-16 pb-16">
                <motion.div className="developer-col w-full flex"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="account-col rounded-full p-3 bg-bg2color flex flex-col justify-between items-center ">
                        <div className="col-one cursor-pointer w-10 h-10 bg-white flex justify-center items-center rounded-full">
                            <img src={imgGrid} alt="icon-Grid" className="cursor-pointer w-6 h-6"/>
                        </div>
                        <div>
                            <img src={imgUser} alt="icon-User" className="cursor-pointer w-6 h-6"/>
                        </div>
                        <div>
                            <img src={imgCode} alt="icon-Code" className="cursor-pointer w-6 h-6"/>
                        </div>
                        <div>
                            <img src={imgMonitor} alt="icon-Monitor" className="cursor-pointer w-6 h-6"/>
                        </div>
                        <div>
                            <img src={imgEdit} alt="icon-Edit" className="cursor-pointer w-6 h-6"/>
                        </div>
                        <div>
                            <img src={imgEmail} alt="icon-Email" className="cursor-pointer w-6 h-6"/>
                        </div>
                    </div>
                    <div className="heading-developer w-full flex justify-center">
                        <img src={imgdeveloper}/>
                    </div>
                </motion.div>
                <div className="content-col w-full flex justify-center items-center pt-16 pl-24 overflow-hidden">
                    <motion.div className="content-information p-6 mt-5"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="col-person flex w-full flex-col justify-center items-center mb-7">
                            <img src={imgProfile} alt="developer"/>
                            <h2 className="font-light text-white">saeed</h2>
                            <h4 className="text-lg font-light text-white">Front-End Developer</h4>
                        </div>
                        <div className="content-social">
                            <div className="flex items-center mb-4 w-full">
                                <img src={imgemail} alt="img-Email" className="cursor-pointer"/>
                                <Link target="_blank" className="text-sm font-thin ml-3 text-textColor" to={"mailto:sydalshghty15@gmail.com"}>sydalshghty15@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-center mb-4 w-full">
                                <img src={iconMap} alt="img-home" className="cursor-pointer"/>
                                <p className="text-sm font-thin ml-3 text-textColor">Egypt</p>
                            </div>
                            <div className="flex items-center mb-4 w-full">
                                <img src={imgWork} alt="img-work" className="cursor-pointer"/>
                                <p className="text-sm font-thin ml-3 text-textColor">Full-time / Freelancer</p>
                            </div>
                            <div className="flex items-center mb-4 w-full">
                                <img src={imgLink} alt="img-link" className="cursor-pointer"/>
                                <Link to={"www.saeedmohamed.com"} className="text-sm font-thin ml-3 text-textColor">www.saeedmohamed.com</Link>
                            </div>
                        </div>
                        <div className="content-skills flex mb-8">
                            <img src={imgHtml} alt="img-Html" className="mr-5"/>
                            <img src={imgCss} alt="img-Css" className="mr-5"/>
                            <img src={imgJs} alt="img-Js" className="mr-5"/>
                            <img src={imgReact} alt="img-React" className="mr-5"/>
                        </div>
                        <div className="download-CV bg-white rounded-full flex justify-center items-center cursor-pointer hover:bg-brandcolor1 hover:text-white transition-colors duration-200">
                            <Link target="_blank" 
                            to={"https://drive.google.com/file/d/19MBjhA1nGhRmpwOmfpaa9fC-Zv5mXfQB/view?usp=sharing"}
                            className="text-lg font-medium text-bg1color mr-3"
                            >Download CV</Link>
                            <Link target="_blank" to={"https://drive.google.com/file/d/19MBjhA1nGhRmpwOmfpaa9fC-Zv5mXfQB/view?usp=sharing"}>
                                <img src={imgDownload} alt="download" className="cursor-pointer"/>
                            </Link>
                        </div>
                    </motion.div>
                    <div className="col-Text-Programming flex">
                        <motion.div className="content-text mt-14 mb-14 ml-10 mr-10"
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                            <div className="col-heading mb-5">
                                <span className="span-h1 text-brandcolor2 text-base">{h1}</span>
                                <h1 className="text-white ml-5 text-3xl">Hey</h1>
                                <h1 className="text-white ml-5 text-3xl">I’m <span className="span-name">saeed</span>,</h1>
                                <div className="flex items-center">
                                    <h1 className="text-white ml-5 text-3xl">Front-End Developer</h1>
                                    <span className="span-h1 text-brandcolor2 text-base">{h2}</span>
                                </div>
                            </div>
                            <div className="col-paragraph">
                                <span>{p1}</span>
                                <p className="ml-5 text-sm text-white mt-3 mb-3">I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                                <span>{p2}</span>
                            </div>
                            <div className="col-email flex items-center mt-3 ml-2">
                                <Link className="link-email relative text-2xl text-brandcolor1 mr-3" target="_blank" to={"mailto:saeed10mohamed01271@gmail.com"}>let’s talk</Link>
                                <img src={buttonEmail} alt="img-Email" className="cursor-pointer"/>
                            </div>
                        </motion.div>
                        <motion.div className="content-programming bg-bg2color pt-12 pb-12 pl-8 pr-8 mt-10"
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.6 }}
                            >
                            <div className="col-div flex items-center pb-12">
                                <span className="text-brandcolor1 text-2xl font-bold mr-4">4</span>
                                <p>Programming
                                Language</p>
                            </div>
                            <div className="col-div flex items-center pb-12">
                                <span className="text-brandcolor1 text-2xl font-bold mr-4">6</span>
                                <p>Development
                                Tools</p>
                            </div>
                            <div className="col-div flex items-center pb-12">
                                <span className="text-brandcolor1 text-2xl font-bold mr-4">1</span>
                                <p>Years of
                                Experience</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeSection1;