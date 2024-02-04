import { useState } from "react";



export default function Nav_Bar(){
    const [active, set_active] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400){
            set_active(true);
        } else {
            set_active(false);
        }
      });

    return(
        <div class={`hidden lg:block bg-black/50 w-screen h-14 fixed ${active ? 'visible' : 'invisible'}`}>

            <div className="flex flex-row items-center gap-8 px-8 text-xl text-white font-mono h-full">
                <a rel="noopener" href="#top" class="transition ease-in-out hover:text-slate-400 underline-effect">Home</a>
                <a rel="noopener" href="#About" class="transition ease-in-out hover:text-slate-400 underline-effect">About</a>
                <a rel="noopener" href="#Projects" class="transition ease-in-out hover:text-slate-400 underline-effect">Projects</a>
                <a rel="noopener" href="#Contact" class="transition ease-in-out hover:text-slate-400 underline-effect">Contact</a>
            </div>
            
        </div>
    );
}