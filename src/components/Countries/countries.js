/* eslint react/prop-types: 0 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from '../../redux/countries/countriesSlice';
import Header from '../Header/Header';
import Country from './country';
import map from '../map.png';

export default function Countries() {
  const { countries, status, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const listCountries = countries.map((country) => (
    <li className="country_list" key={country.id}>
      <Country country={country} />
    </li>
  ));

  return (
    <>
      <Header />
      <div className="homepage">
        <div className="top-section">
          <div>
            <img src={map} alt="globe" />
          </div>
          <div className="circle">
            <h3>World Globe</h3>
            <p className="circle">
              8.2B
            </p>
          </div>
        </div>
        <p className="stats-text">STATS BY COUNTRY</p>
        {status === 'loading' && <h3>loading...</h3>}
        {error && <h3>{error.message}</h3>}
        {countries && <ul className="list">{listCountries}</ul>}
      </div>
    </>
  );
}
