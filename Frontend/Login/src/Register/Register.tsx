import { createSignal, type Component } from "solid-js";
import imageSrc from '../assets/image/person2.png';
import gambar1 from '../assets/image/logo.png';
import { login } from "../Service/Service";
import { api } from "../Api/Api";


const App: Component = () => {
  const [image, setImage] = createSignal(imageSrc);
  const [logo, setImage1] = createSignal(gambar1);
  const [inputValue , setInputValue] = createSignal('');
  const [inputValue1, setInputValue1 ] = createSignal('');


  const hasil= async() =>{
    console.log('email ->',inputValue())
    console.log('password ->',inputValue1())
    login({'email':inputValue(),'password':inputValue1()}).then((data : any) =>{
      console.log('result-login ->',data);
    })
  }



  return (

    <div>
      <div class="background"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      
      <div class="kaca"></div>

      <img src={logo()} alt="ALternative Text" class="logo" elementtiming={""} fetchpriority={"high"} />

      <div class="login"></div>
      <div class="login">
        <div class="login2">
          <img src={image()} alt="Alternative Text" class="person2" elementtiming={""} fetchpriority={"high"} />
          <div class="email">
            <p>Email</p>
            <input type="text" placeholder="Masukan Email" id="email-field" name="email" onChange={(e=>{setInputValue(e.target.value)})}/>
            <p>Password</p>
            <input type="password" placeholder="Masukan Password" id="password-field" name="password" onChange={(f=>{setInputValue1(f.target.value)})}/>
            <h1>Forgot Password?</h1>
          </div>
          <button class="btn" onclick={hasil}>Button</button>
          <div class="gambar"></div>
        </div>
      </div>
    </div>
  
  );
};

export default App;


