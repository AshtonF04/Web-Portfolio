export default function Contact(){
    return(
        <div class="flex flex-col gap-4">
            <a id="Contact" class="text-2xl font-bold font-courier">05. Contact</a>
            <div class="flex flex-col gap-2 font-mono lg:gap-4">
                <div class="flex items-center gap-2">
                    <img class="size-10" src={require("../images/email-image.png")}></img>
                    <a target="_blank" href="mailto: ashtonfranklin772@gmail.com">ashtonfranklin772@gmail.com</a>
                </div>
                <div class="flex items-center gap-2 w-auto">
                    <img class="size-10" src={require("../images/linkedin-icon.png")}></img>
                    <a class="" target="_blank" href="https://www.linkedin.com/in/ashton-franklin-5a6345288/">Ashton Franklin</a>
                </div>
                <div class="flex items-center gap-2">
                    <img class="size-10" src={require("../images/github-icon.png")}></img>
                    <a class="" target="_blank" href="https://github.com/AshtonF04">AshtonF04</a>
                </div>
            </div>
        </div>
    );
}