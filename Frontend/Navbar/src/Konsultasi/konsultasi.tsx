import { createSignal, type Component } from 'solid-js';



import telkom from '../assets/Telkom.png';

const App: Component = () => {
    const [image, setimage] = createSignal(telkom);
    
  return (
   <div>
    <div class="nav">
            <div class="logo">
                <img src={image()} alt="" elementtiming={""} fetchpriority={"high"} />
            </div>
            <div class="avatar">
              <h1>Agus Mustofa</h1>
            </div>
            <h1>Dashboard</h1>
        </div>
   </div>
  );
};

export default App;
