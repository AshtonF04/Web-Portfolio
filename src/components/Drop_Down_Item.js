export default function Drop_Down_Item({item_name, link}){
    return(
        <div class="text-black">
            <a rel="noopener" href={link} class="mx-4 text-lg font-mono font-bold">{item_name}</a>
        </div>
    );
}