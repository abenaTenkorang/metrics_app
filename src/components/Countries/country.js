import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

export default function Country({ country }) {
  return (
    <>
      <div className="image_container">
        <img className="image" src={country.flag} alt={country.name} />
      </div>
      <div className="nav_link">
        <NavLink to={`/details/${country.name}`}>
          <HiOutlineArrowCircleRight className="circle" />
        </NavLink>
        <h3>{country.name}</h3>
        <span>{country.population}</span>
      </div>
    </>
  );
}

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};
