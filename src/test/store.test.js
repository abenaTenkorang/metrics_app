import store from '../redux/Store';
import { fetchCountries } from '../redux/countries/countriesSlice';

describe('store', () => {
  test('initialState', () => {
    const initialState = store.getState().countries;
    expect(initialState).toEqual({
      countries: [],
      status: 'idle',
      error: null,
    });
  });
  test('loading State', () => {
    store.dispatch(fetchCountries());
    const loading = store.getState().countries.status;
    expect(loading).toBe('loading');
  });
  test('change State', () => {
    const newState = [{ name: 'Ghana', population: 3000000 }];
    store.dispatch(fetchCountries());
    store.dispatch({ type: 'country/fetchCountries/fulfilled', payload: newState });
    const updatedState = store.getState().countries;
    expect(updatedState).toEqual({
      countries: newState,
      status: 'completed',
      error: null,
    });
  });
});
