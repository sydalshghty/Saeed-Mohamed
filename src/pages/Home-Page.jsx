import Header from "../components/header";
import HomeSection1 from "../components/home-section1";
import AboutUs from "../components/About-us";
import SkillSContent from "../components/Skills-content";
import WorksDepartament from "../components/works";
import BlogsContentHome from "../components/blogs-Content-Home";
import ContactUs from "../components/Contact-us";
import Footer from "../components/Footer";
function HomePage(){
    return(
        <>
            <Header/>
            <HomeSection1/>
            <AboutUs/>
            <SkillSContent/>
            <WorksDepartament/>
            <BlogsContentHome/>
            <ContactUs/>
            <Footer/>
        </>
    )
}
export default HomePage;