export default function Contact(){
    return(
        <div>
            <a id="Contact" class="text-2xl font-bold font-courier mb-4">03. Contact</a>
            <div class="flex flex-col gap-2 font-mono">
                <div class="flex items-center gap-2">
                    <img class="size-10" src={require("../images/email-image.png")}></img>
                    <h1>ashtonfranklin772@gmail.com</h1>
                </div>
                <div class="flex items-center gap-2">
                    <img class="size-10" src={require("../images/linkedin-icon.png")}></img>
                    <a class="underline" target="_blank" href="https://www.linkedin.com/in/ashton-franklin-5a6345288/">Ashton Franklin</a>
                </div>
                <div class="flex items-center gap-2">
                    <img class="size-10" src={require("../images/github-icon.png")}></img>
                    <a class="underline" target="_blank" href="https://github.com/AshtonF04">AshtonF04</a>
                </div>
            </div>
        </div>
    );
}