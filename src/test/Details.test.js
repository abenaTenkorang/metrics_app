import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/Store';
import Details from '../components/Details/Details';

describe('Details', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>,
    );

    expect(getByTestId(/details/i)).toBeInTheDocument();
  });
});
