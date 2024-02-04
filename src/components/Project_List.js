import Project from "./Project";

export default function Project_List(){
    return (
        <div>
            <a id="Projects" class="text-2xl font-bold font-courier">02. Projects</a>
            <div class="flex flex-col mt-4 gap-y-5 lg:grid lg:grid-cols-2 lg:gap-8">
                <Project 
                    name={"Pixel Draw"}
                    description={"A web based pixel art editor developed using HTML, CSS, and JavaScript."}
                    link={"https://ashtonf04.github.io/pixel-draw/"}
                />
                <Project 
                    name={"Portfolio Website"}
                    description={`The website you are currently viewing! Developed using HTML, ReactJS, and TailWind
                    CSS.`}
                    link={"https://github.com/"}
                />
            </div>
        </div>
    );
}