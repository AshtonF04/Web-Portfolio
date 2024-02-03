export default function About(){
    return (
        <div>
            <a id="About" class="text-2xl font-bold font-courier mb-4">01. About</a>
            <div class="flex flex-col items-center gap-4">
                <img class="rounded-full size-60" src={require("../images/profile-image.jpg")}></img>
                <p class="font-mono text">
                    I'm a second year student currently completing my bachelors of <strong>Computer Science</strong> at 
                    <strong> Western University</strong>, in London Ontario.
                </p>
                <p class="font-mono text">
                    Outside of school I enjoy watching <strong>anime</strong>, playing <strong>games</strong>,
                    and <strong>coding</strong> things like this website!
                </p>
            </div>
        </div>
    );
}