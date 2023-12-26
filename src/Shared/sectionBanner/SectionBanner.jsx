import PropTypes from 'prop-types';
const SectionBanner = ({title,subTittle}) => {
    return (
        <div className="hero h-[100vh] bg-fixed bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/Gndbxzn/images-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="lg:w-[50%] mx-auto">
                    <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
                    <p className="mb-5 text-white">{subTittle}</p>
                </div>
            </div>
        </div>
    );
};



SectionBanner.propTypes = {
    title:PropTypes.string,
    subTittle:PropTypes.string
};


export default SectionBanner;