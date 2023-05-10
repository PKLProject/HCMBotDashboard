import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Menu from './sidebar/menu';

const App: Component = () => {
  return (
  <Menu />
  );
};

export default App;
