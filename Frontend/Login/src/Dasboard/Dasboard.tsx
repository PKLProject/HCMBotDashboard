import { createSignal, type Component } from "solid-js";
import logo1 from '../assets/image/logo.png'  ;



const App: Component = () => {
    const [logo, setLogo] = createSignal(logo1);
 
  return (
    <div>
        <div class="nav">
            <div class="logo">
                <img src={logo()} alt="" elementtiming={""} fetchpriority={"high"} />
            </div>
            <h1>Dashboard</h1>
        </div>
    </div> 


  );
};

export default App;


