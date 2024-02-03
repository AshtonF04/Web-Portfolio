function to_top(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default function Footer(){
    return(
        <footer class="py-6 flex flex-col gap-3">
            <button onClick={to_top} class="font-courier border-2 border-blue-400 text-blue-400 size-10 w-32 self-center">Back To Top</button>
            <p class="font-courier mx-8 text-center">Ashton Franklin <span class="text-blue-400">©2024</span></p>
        </footer>
    );
}