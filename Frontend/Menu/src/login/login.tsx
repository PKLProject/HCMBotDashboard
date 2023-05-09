import { createSignal, type Component } from 'solid-js';
import imageSrc from '../assets/wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/robot.png'


const App: Component = () => {
  const [image, setImage] = createSignal(imageSrc);
  const [imagee, setimage] = createSignal(imagesrc);
  const [imageee, setimagee] = createSignal(imageeSrc);
  return (
    <section class="background">
    <div>
      <div class="back"> </div>
      <div class="circle"></div>
      
      <img src={image()} alt="Alternative Text" class="wong" elementtiming={''} fetchpriority={'high'}/>
      <img src={imagee()} alt="Alternative Text" class="logo" elementtiming={''} fetchpriority={'high'}/>
      <img src={imageee()} alt="Alternative Text" class="robot" elementtiming={''} fetchpriority={'high'}/>
      <span class="hi">Hi, Glad To See You Back!</span>
      <span class="hii">Let's Login First</span>
      <span class="forget">Forget Password?</span>
      <div>
        <p><input type="text" placeholder="Username" class="username" /></p>
      </div>
      <div>
        <p><input type="text" placeholder="Password" class="password" /></p>
      </div>
      <div class=''>
      <button class="btn btn-wide bg">Sign In </button>
      </div>
      <div>
      <button class="btn btn-outline butt">Or Sign Up</button>
      </div>
    </div>
    </section>
  );
};

export default App;
