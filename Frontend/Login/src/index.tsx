/* @refresh reload */
import { render } from 'solid-js/web';


import './Register/Register.css'; 
import Adib from './Register/Register';


import './Dasboard/Dasboard.css';
import Db from './Dasboard/Dasboard';





const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}


render(() => <Db/>, root!);

