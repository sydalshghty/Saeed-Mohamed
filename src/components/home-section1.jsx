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
import imgDownload from "../assets/icon-download.svg";
import imgProfile from "../assets/Profile photo.svg";
import { Link } from "react-router-dom";
import buttonEmail from "../assets/Button.svg";
import "../css/home-section1.css";
import { motion } from "framer-motion";

function HomeSection1() {
    const allSkills = [
        { id: 1, skill: "html" },
        { id: 2, skill: "css" },
        { id: 3, skill: "tailwind css" },
        { id: 4, skill: "js" },
        { id: 5, skill: "react js" },
        { id: 6, skill: "redux" },
        { id: 7, skill: "react-redux" },
        { id: 8, skill: "redux-toolkit" },
        { id: 9, skill: "git & github" }
    ]

    const h1 = `<h1>`;
    const h2 = `</h1>`;
    const p1 = `<p>`;
    const p2 = `</p>`;

    return (
        <div className="w-full overflow-hidden homeContent-Departament bg-bg1color" id="Home">
            <div className="container w-full h-full pt-16 pb-16">
                <motion.div className="flex w-full developer-col"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col items-center justify-between p-3 rounded-full account-col bg-bg2color ">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full col-one">
                            <img src={imgGrid} alt="icon-Grid" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={imgUser} alt="icon-User" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={imgCode} alt="icon-Code" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={imgMonitor} alt="icon-Monitor" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={imgEdit} alt="icon-Edit" className="w-6 h-6" />
                        </div>
                        <div>
                            <img src={imgEmail} alt="icon-Email" className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full gap-5 heading-developer">
                        <img src={imgdeveloper} />
                    </div>
                </motion.div>
                <div className="flex items-center justify-center w-full gap-10 pt-16 pl-24 overflow-hidden content-col">
                    <motion.div className="p-6 mt-5 content-information"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <div className="flex flex-col items-center justify-center w-full col-person mb-7">
                            <img src={imgProfile} alt="developer" />
                            <h2 className="font-light text-white">saeed</h2>
                            <h4 className="text-lg font-light text-white">Front-End Developer</h4>
                        </div>
                        <div className="content-social">
                            <div className="flex items-center w-full mb-4">
                                <img src={imgemail} alt="img-Email" className="cursor-pointer" />
                                <Link target="_blank" className="ml-3 text-sm font-thin text-textColor" to={"mailto:sydalshghty15@gmail.com"}>sydalshghty15@gmail.com
                                </Link>
                            </div>
                            <div className="flex items-center w-full mb-4">
                                <img src={iconMap} alt="img-home" className="cursor-pointer" />
                                <p className="ml-3 text-sm font-thin text-textColor">Egypt</p>
                            </div>
                            <div className="flex items-center w-full mb-4">
                                <img src={imgWork} alt="img-work" className="cursor-pointer" />
                                <p className="ml-3 text-sm font-thin text-textColor">Full-time / Part-time / Freelancer</p>
                            </div>
                            <div className="flex items-center w-full mb-4">
                                <img src={imgLink} alt="img-link" className="cursor-pointer" />
                                <Link to={"https://sydalshghty.github.io/Saeed-Mohamed/"} target="_blank" className="ml-3 text-sm font-thin text-textColor">www.saeedmohamed.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8 content-skills">
                            {allSkills.map((skill, index) => {
                                return (
                                    <div className="flex items-center justify-center pt-1 pb-1 pl-2 pr-2 rounded-lg bg-brandcolor1 col-skills w-fit h-fit" key={skill.id}>
                                        <p className="text-xs uppercase">{skill.skill}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex items-center justify-center w-full transition-colors duration-200 bg-white rounded-full cursor-pointer download-CV hover:bg-brandcolor1 hover:text-white">
                            <Link target="_blank"
                                to={"https://drive.google.com/file/d/1hkEVH7grQYEQa55hg8U3ixtBppylrLwd/view?usp=sharing"}
                                className="mr-3 text-lg font-medium text-bg1color"
                            >Download CV</Link>
                            <Link target="_blank" to={"https://drive.google.com/file/d/1hkEVH7grQYEQa55hg8U3ixtBppylrLwd/view?usp=sharing"}>
                                <img src={imgDownload} alt="download" className="cursor-pointer" />
                            </Link>
                        </div>
                    </motion.div>
                    <div className="flex gap-10 col-Text-Programming">
                        <motion.div className="ml-10 mr-10 content-text mt-14 mb-14"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div className="mb-5 col-heading">
                                <span className="text-base span-h1 text-brandcolor2">{h1}</span>
                                <h1 className="ml-5 text-3xl text-white">Hey</h1>
                                <h1 className="ml-5 text-3xl text-white">I’m <span className="span-name">saeed</span>,</h1>
                                <div className="flex items-center">
                                    <h1 className="ml-5 text-3xl text-white">Front-End-Developer</h1>
                                    <span className="text-base span-h1 text-brandcolor2">{h2}</span>
                                </div>
                            </div>
                            <div className="col-paragraph">
                                <span>{p1}</span>
                                <p className="mt-3 mb-3 ml-5 text-sm text-white">I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                                <span>{p2}</span>
                            </div>
                            <div className="flex items-center mt-3 ml-2 col-email">
                                <Link className="relative mr-3 text-2xl link-email text-brandcolor1" target="_blank" to={"mailto:saeed10mohamed01271@gmail.com"}>let’s talk</Link>
                                <img src={buttonEmail} alt="img-Email" className="cursor-pointer" />
                            </div>
                        </motion.div>
                        <motion.div className="pt-12 pb-12 pl-8 pr-8 mt-10 content-programming bg-bg2color"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            <div className="flex items-center pb-12 col-div">
                                <span className="mr-4 text-2xl font-bold text-brandcolor1">4</span>
                                <p>Programming
                                    Language</p>
                            </div>
                            <div className="flex items-center pb-12 col-div">
                                <span className="mr-4 text-2xl font-bold text-brandcolor1">6</span>
                                <p>Development
                                    Tools</p>
                            </div>
                            <div className="flex items-center pb-12 col-div">
                                <span className="mr-4 text-2xl font-bold text-brandcolor1">1</span>
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