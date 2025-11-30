import WorksImg from "../assets/Works.png";
import ScrollImg from "../assets/Scroll.svg";
import LineImg from "../assets/Line 22.svg";
import "../css/works.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import projectBG from "../assets/Container.png"
import ToolstoreBG from "../assets/Toolstore-bg.png";
import UnitedHangerBG from "../assets/united-hangers.png";
import MyPortofolioBG from "../assets/My-Portofolio-bg.png";
import DashboardBG from "../assets/dashboard-bg.png";
import iconMouse from "../assets/icon-mouse-pointer.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
function WorksDepartament() {
    const { ref, inView } = useInView({ triggerOnce: true });
    //
    const allProjects = [
        { id: 1, img: UnitedHangerBG, link: "https://www.unitedhanger.com/" },
        { id: 2, img: DashboardBG, link: "https://dashboard-unitedhangers-production.up.railway.app/" },
        { id: 3, img: MyPortofolioBG, link: "https://sydalshghty.github.io/Saeed-Mohamed/" },
        { id: 4, img: ToolstoreBG, link: "https://sydalshghty.github.io/ToolStore-Website/" }
    ]
    return (
        <div className="relative flex flex-col items-center justify-center w-full Works-Departament" id="Works">
            <img className="absolute object-cover w-full h-full works-background" src={WorksImg} alt="works" />
            <div className="container w-full h-full pt-16 pb-16">
                <motion.div className="flex flex-col items-center justify-center works-Title"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="mt-10 mb-2 scroll-img" src={ScrollImg} alt="Scroll-img" />
                    <div className="flex flex-col items-center justify-center col-title">
                        <h1 className="mb-5 text-5xl capitalize text-brandcolor1 projects-title">my Projects</h1>
                        <img src={LineImg} alt="line-Works" className="mb-5 line-img" />
                        <p className="text-center text-white p-projects">I had the pleasure of working with these awesome projects</p>
                    </div>
                </motion.div>
                <Swiper
                    className="mt-10"
                    modules={[Navigation, EffectFade, Autoplay]}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    loop={true}
                    effect="fade"
                    speed={1200}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1000
                    }}
                >
                    <div className="flex justify-center w-full h-full gap-10 all-projects">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full cursor-pointer left-btn custom-prev">
                            <FaChevronLeft className="text-2xl text-white" />
                        </div>
                        {allProjects.map((project, index) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <div className="flex items-center justify-center gap-40 text-center col-project">
                                        <div className="flex gap-10 images-project content-project">
                                            <img src={projectBG} className="bg-img view-code-img" alt="project-bg" />
                                            <div className="flex flex-col information-project">
                                                <div className="flex justify-end gap-2 mt-10 mb-4 mr-6 cursor-pointer view-website">
                                                    <a href={project.link} target="_blank" className="capitalize text-brandcolor1">view website</a>
                                                    <img src={iconMouse} alt="icon-mouse" />
                                                </div>
                                                <div className="cursor-pointer col-img-project">
                                                    <img src={project.img} alt="img-project" className="img-project" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        <div className="flex items-center justify-center w-16 h-16 rounded-full cursor-pointer right-btn custom-next">
                            <FaChevronRight className="text-2xl text-white" />
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
export default WorksDepartament;
