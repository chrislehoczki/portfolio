import React from 'react';
import Pages from './pages/Pages'
import { Link } from 'react-router-dom'
import './App.css';

const App = () => (
  <div>
  <Link to='/project/test'>Projects</Link>
  <Pages />
  </div>
);

export default App;
