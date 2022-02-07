import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>QStack OS</h1>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </Provider>
  );
}
