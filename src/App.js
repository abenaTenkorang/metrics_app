import './App.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/countries';
import Details from './components/Details/details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
