/* eslint react/prop-types: 0 */
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import Header from '../Header/Header';

export default function Detail({ country }) {
  return (
    <>
      <Header returnpage />
      <div className="HomeCard">
        <div className="card">
          <img className="image" src={country.flag} alt={country.name} />
          <div className="circle">
            <h3>{country.name}</h3>
            <span>{country.population}</span>
          </div>
        </div>
        <h3>City / Town Breakdown - 2023</h3>
        <ul className="detail-list">
          <li className="description">
            <h3>Name</h3>
            <p>
              {country.name}
              <NavLink>
                <HiOutlineArrowCircleRight className="circle" />
              </NavLink>
            </p>
          </li>
          <li className="description">
            <h3>Capital</h3>
            <p>
              {country.capital}
              <NavLink>
                <HiOutlineArrowCircleRight className="circle" />
              </NavLink>
            </p>
          </li>
          <li className="description">
            <h3>Subregion</h3>
            <p>
              {country.subregion}
              <NavLink>
                <HiOutlineArrowCircleRight className="circle" />
              </NavLink>
            </p>
          </li>
          <li className="description">
            <h3>Region</h3>
            <p>
              {country.region}
              <NavLink>
                <HiOutlineArrowCircleRight className="circle" />
              </NavLink>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
