/* @refresh reload */
import { render } from 'solid-js/web';
import Hcm from './hcm/menu';
import './index.css';
// import App from './App';
// import './login/login.css';
import './hcm/menu.css';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

// render(() => <App />, root!);
// render(() => <Login />, root!);
render(() => <Hcm />, root!);
