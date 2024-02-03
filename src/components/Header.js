import React from "react";
import Drop_Down_Item from "./Drop_Down_Item"
import { useState } from "react";

export default function Header(){
    const [active, set_active] = useState(false);

    return(
        <header className="flex flex-col items-end sticky top-0">
            <button onClick={() => set_active(!active)}><img className="mx-4 size-12 lg:hidden" src={require("../images/menu.png")}></img></button>
            
            <div className={`mx-4 mt-2 bg-white size-36 h-40 rounded-lg ${active ? '' : 'hidden'} fixed top-10`}>
                <div className="my-2 flex flex-col gap-2">
                    <Drop_Down_Item item_name="Home" link="#Home" />
                    <Drop_Down_Item item_name="About" link="#About" />
                    <Drop_Down_Item item_name="Projects" link="#Projects" />
                    <Drop_Down_Item item_name="Contact" link="#Contact" />
                </div>
            </div>
        </header>
    );
}