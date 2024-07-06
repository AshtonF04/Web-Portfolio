import Project from "./Project";

export default function Project_List(){
    return (
        <div>
            <a id="Projects" class="text-2xl font-bold font-courier">04. Projects</a>
            <div class="flex flex-col mt-4 gap-y-5 lg:grid lg:grid-cols-3 lg:gap-8">
                <Project 
                    name={"Pixel Draw"}
                    description={"A web based pixel art editor developed using HTML, CSS, and JavaScript."}
                    link={"https://ashtonf04.github.io/pixel-draw/"}
                />
                <Project 
                    name={"Portfolio Website"}
                    description={`The website you are currently viewing! Developed using HTML, ReactJS, and TailWind
                    CSS.`}
                    link={"https://github.com/AshtonF04/Web-Portfolio"}
                />
                <Project
                    name={"Todo App"}
                    description={'A todo list app for IOS and Android developed using React Native. Allows the user to create and keep track of completed tasks within the app.'}
                    link={'https://github.com/AshtonF04/todo-app'}
                />
            </div>
        </div>
    );
}