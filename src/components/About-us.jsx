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
    const [titleRef, titleInView] = useInView({ triggerOnce: true });
    const [headingRef, headingInView] = useInView({ triggerOnce: true });
    const [infoRef, infoInView] = useInView({ triggerOnce: true });
    const [imageRef, imageInView] = useInView({ triggerOnce: true });

    const p1 = `<p>`;
    const p2 = `</p>`;

    return(
        <div className="relative flex items-center justify-center w-full overflow-hidden about-departament">
            <div className="absolute top-0 left-0 z-auto w-full h-full overflow-hidden col-img">
                <img className="w-full h-full img-background" src={imgBackground} alt="About-me"/>
            </div>
            <div className="container absolute z-50 w-full h-full pt-16 pb-16 mt-16">
                <motion.div className="flex flex-col items-center justify-center w-full col-Title"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="mb-2 scroll-img" src={scrollImg} alt="img-title"/>
                    <div className="content-Title">
                        <div className="flex flex-col items-center justify-center w-full col">
                            <img src={imgTitle} alt="img-Title" className="pb-3 mb-2"/>
                            <img src={imgLine} alt="img-line" className="pb-3 mb-2"/>
                        </div>
                        <p className="text-white">I had the pleasure of working with these awesome Projects</p>
                    </div>
                </motion.div>
                <div className="flex w-full mt-20 content-Aboutme">
                    <div className="col-Aboutme">
                        <motion.div className="flex items-center justify-center text-center heading bg-bg1color mb-7"
                            ref={titleRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={titleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.8}}
                        >
                            <h1 className="text-3xl text-white">About me</h1>
                        </motion.div>
                        <motion.div className="pt-3 pb-6 pl-10 pr-10 mr-20 content-information bg-bg1color rounded-3xl"
                            ref={headingRef}
                            initial={{ opacity: 0, y: 80 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <span className="pb-4 span-p p-one">{p1}</span>
                            <h2 className="mb-4 text-brandcolor1">Hello!</h2>
                            <p className="mb-4 text-white">My name is Saeed and I specialize in web developement that utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>, and <span>REACT Js</span>, <span>Tailwind Css</span>, <span>Redux</span>, <span>React-Redux</span>, <span>Redux-Toolkit</span>, <span>Git&Github </span>etc.</p>
                            <p className="mb-4 text-white">I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                            <p className="mb-4 text-white">When I'm not coding, I am <span>writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography</span>.</p>
                            <p className="mb-4 text-white">I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                            <span className="span-p">{p2}</span>
                        </motion.div>
                    </div>
                    <motion.div className="col-image"
                        ref={infoRef}
                        initial={{ opacity: 0, y: 80 }}
                        animate={ infoInView? { opacity: 1, y: 0 } : {}}
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