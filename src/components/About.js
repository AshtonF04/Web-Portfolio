export default function About(){
    return (
        <div id="About">
            <h1 class="text-2xl font-bold font-courier mb-4 lg:mt-20">01. About</h1>
            <div class="flex flex-col items-center gap-4 lg:flex-row lg:mt-12">

                <img class="transition ease-in-out rounded-full size-60 lg:size-72 hover:rotate-3 hover:scale-110" src={require("../images/profile-image.jpg")}></img>

                <div class="flex flex-col gap-4 lg:ml-16 lg:mr-80">
                    <p class="font-mono text">
                        I'm a third year student currently completing my bachelors of <strong>Computer Science</strong> at 
                        <strong> Western University</strong>, in London Ontario.
                    </p>
                    <p class="font-mono text">
                        Outside of school I enjoy watching <strong>anime</strong>, playing <strong>games</strong>,
                        and <strong>coding</strong> things like this website!
                    </p>
                </div>

            </div>
        </div>
    );
}