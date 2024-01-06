import SectionBanner from "../../Shared/sectionBanner/SectionBanner";
import AboutBAnner from "./AboutBAnner";
import ContactAbout from "./ContactAbout";
import OurTeam from "./OurTeam";

const About = () => {
    return (
        <div className="">
            <SectionBanner title={"About"}></SectionBanner>
            <AboutBAnner></AboutBAnner>
            <OurTeam></OurTeam>
            <ContactAbout></ContactAbout>
        </div>
    );
};

export default About;