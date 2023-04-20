import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Countries from '../components/Countries/countries';

describe('Countries', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByTestId(/Countries/i)).toBeInTheDocument();
  });
});
