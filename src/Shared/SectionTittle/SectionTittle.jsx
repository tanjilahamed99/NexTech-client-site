import PropTypes from 'prop-types';

const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className='text-center space-y-2'> 
            <h2 className='text-sm font-bold'>{subTittle}</h2>
            <h2 className='text-2xl font-semibold'>{tittle}</h2>
        </div>
    );
};

SectionTittle.propTypes = {
    tittle: PropTypes.any,
    subTittle: PropTypes.any
};

export default SectionTittle;