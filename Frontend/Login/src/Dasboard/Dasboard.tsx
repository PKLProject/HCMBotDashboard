import { createSignal, type Component } from "solid-js";
import logo1 from '../assets/image/logo.png'  ;
import { Icon } from "@suid/material";




const App: Component = () => {
    const [logo, setLogo] = createSignal(logo1);
 
  return (

    <div>
        <div class="nav">
            <div class="logo">
                <img src={logo()} alt="" elementtiming={""} fetchpriority={"high"} />
            </div>
            <div class="avatar">
              <h1>Agus Mustofa</h1>
            </div>
            <h1>Dashboard</h1>
        </div>
        <div class="frame1">
          <div class="frame1a">
            <h1>Pemberitahuan</h1>
          </div>
        </div>
    </div> 

  );
};

export default App;


