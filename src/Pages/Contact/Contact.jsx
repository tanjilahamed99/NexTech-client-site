import SectionBanner from "../../Shared/sectionBanner/SectionBanner";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <SectionBanner title={"Contact"} subTittle={"Connect with NexTech: Have questions or feedback? Email contact@nextech.com, call +8801996643700, or visit 25/6 Gugulia. For business inquiries: business@nextech.com. Stay updated—subscribe now!"}></SectionBanner>
            <div className="py-10 text-center">
                <h2 className="text-3xl font-bold mb-2">Connect with us</h2>
                <p className="font-medium">
                    Feel free to reach out to us using the options below, and <br /> our dedicated team will respond to your inquiries promptly.
                </p>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;