import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'

import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Hello Automation Test Ide</h1>
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
