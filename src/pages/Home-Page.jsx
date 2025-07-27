import Header from "../components/header";
import HomeSection1 from "../components/home-section1";
import AboutUs from "../components/About-us";
import SkillSContent from "../components/Skills-content";
import WorksDepartament from "../components/works";
function HomePage(){
    return(
        <>
            <Header/>
            <HomeSection1/>
            <AboutUs/>
            <SkillSContent/>
            <WorksDepartament/>
        </>
    )
}
export default HomePage;