import PropTypes from 'prop-types';
const SectionBanner = ({title,subTittle}) => {
    return (
        <div className="hero h-[500px] bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/Gndbxzn/images-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
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