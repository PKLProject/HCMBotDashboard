import { createSignal, type Component } from 'solid-js';


import imageSrc from './assets/ERP Finance.png';
import iimageSrc from './assets/orang.png';

const App: Component = () => {
    const [image, setimage] = createSignal(imageSrc);
    const [iimage, ssetimage] = createSignal(iimageSrc);
  return (
   <>
   <div class="nav"></div>
    
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
    <li><a>Marcus</a></li>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
            <img src={iimage()} alt="Alternative Text" class="wong" elementtiming={''} fetchpriority={'high'} />
                
        </div>
        
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        

   </>
  );
};

export default App;