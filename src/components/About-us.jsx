import imgBackground from "../assets/About me.png";
import scrollImg from "../assets/Scroll.svg";
import imgTitle from "../assets/Title.svg";
import imgLine from "../assets/Line 22.svg";
import imgAbout from "../assets/About-us-image.png";
import "../css/About-us.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AboutUs(){
    const { ref, inView } = useInView({ triggerOnce: true });

    const p1 = `<p>`;
    const p2 = `</p>`;

    return(
        <div className="about-departament relative w-full flex justify-center items-center overflow-hidden">
            <div className="col-img absolute w-full h-full left-0 top-0 z-auto overflow-hidden">
                <img className="img-background w-full h-full" src={imgBackground} alt="About-me"/>
            </div>
            <div className="container w-full h-full pt-16 pb-16 absolute mt-16 z-50">
                <motion.div className="col-Title w-full flex flex-col justify-center items-center"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="scroll-img mb-2" src={scrollImg} alt="img-title"/>
                    <div className="content-Title">
                        <div className="col w-full flex flex-col justify-center items-center">
                            <img src={imgTitle} alt="img-Title" className="mb-2 pb-3"/>
                            <img src={imgLine} alt="img-line" className="mb-2 pb-3"/>
                        </div>
                        <p className="text-white">I had the pleasure of working with these awesome Projects</p>
                    </div>
                </motion.div>
                <div className="content-Aboutme mt-20 flex w-full">
                    <div className="col-Aboutme">
                        <motion.div className="heading bg-bg1color text-center flex justify-center items-center mb-7"
                            ref={ref}
                            initial={{ opacity: 0, y: 80 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.8}}
                        >
                            <h1 className="text-3xl text-white">About me</h1>
                        </motion.div>
                        <motion.div className="content-information bg-bg1color pt-6 pb-6 pl-10 pr-10 rounded-3xl mr-20"
                            ref={ref}
                            initial={{ opacity: 0, y: 80 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <span className="span-p p-one pb-4">{p1}</span>
                            <h2 className="text-brandcolor1  mb-4">Hello!</h2>
                            <p className="text-white mb-4">My name is Sinan and I specialize in web developement that utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>, and <span>REACT</span> etc.</p>
                            <p className="text-white mb-4">I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                            <p className="text-white mb-4">When I'm not coding, I am <span>writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography</span>.</p>
                            <p className="text-white mb-4">I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                            <span className="span-p">{p2}</span>
                        </motion.div>
                    </div>
                    <motion.div className="col-image"
                        ref={ref}
                        initial={{ opacity: 0, y: 80 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <img src={imgAbout} alt="About-me"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;