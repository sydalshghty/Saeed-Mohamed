import "../css/Menu-Mobile.css";
import { Link } from "react-scroll";
import { useState } from "react";
function MenuMobile() {

    return (
        <div className={`w-full h-full text-white bg-bg2color menu-mobile`}>
            <ul className="flex flex-col justify-between w-full h-full">
                <li>
                    <Link className="cursor-pointer"
                        to="Home"
                        smooth={true}
                        duration={500}
                    >Home</Link>
                </li>
                <li>
                    <Link className="cursor-pointer"
                        to="About-me"
                        smooth={true}
                        duration={500}
                    >About me</Link>
                </li>
                <li>
                    <Link className="cursor-pointer"
                        to="Skills"
                        smooth={true}
                        duration={500}
                    >Skills</Link>
                </li>
                <li>
                    <Link className="cursor-pointer"
                        to="Works"
                        smooth={true}
                        duration={500}
                    >Works</Link>
                </li>
                <li>
                    <Link className="cursor-pointer"
                        to="Blogs"
                        smooth={true}
                        duration={500}
                    >Blogs</Link>
                </li>
                <li>
                    <Link className="cursor-pointer"
                        to="Contact"
                        smooth={true}
                        duration={500}
                    >Contact</Link>
                </li>
            </ul>
        </div>
    )
}
export default MenuMobile;