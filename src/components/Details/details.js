import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../../redux/countries/countriesSlice';
import Detail from './detail';
import '../../details-styles.css';

export default function Details() {
  const { countries, status, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { id } = useParams();

  const list = countries.find((country) => country.name === id);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="homepage" data-testid="details">
      {status === 'loading' && <h3>loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {list && <Detail country={list} key={list.id} />}
    </div>
  );
}
