function menu_clicked(){
    window.alert("Clicked Menu");
}

export default function Header(){
    return(
        <header class="flex justify-end">
            <button onClick={menu_clicked}><img class="size-14" src={require("../images/menu.png")}></img></button>
        </header>
    );
}