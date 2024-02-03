function Title(){
    return (
        <div class="flex flex-col lg:justify-center lg:mx-auto lg:h-screen">
            <a id="Home" class="font-courier lg:text-3xl">Hi, my name is</a>
            <h1 class="text-4xl font-bold font-mono lg:text-7xl">Ashton</h1>
            <h1 class="text-xl font-bold text-slate-400 font-mono lg:text-3xl">I code things.</h1>
            <button onClick={() => {window.scrollTo({top: 750, behavior: "smooth"})}} class="size-16 self-center absolute bottom-32"><img class="hidden lg:block size-16 text-center" src={require('../images/down-arrow.png')}></img></button>
        </div>
    );
}

export default Title;