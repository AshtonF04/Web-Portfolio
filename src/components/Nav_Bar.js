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
        <div class={`hidden lg:block bg-black w-screen h-14 fixed ${active ? 'opacity-25' : 'opacity-0'}`}>
        </div>
    );
}