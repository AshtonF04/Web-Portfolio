function Title(){
    return (
        <div class="flex flex-col lg:justify-center lg:mx-auto lg:h-screen">
            <a class="font-courier lg:text-3xl">Hi, my name is</a>
            <h1 class="transition ease-in-out text-4xl font-bold font-mono lg:text-7xl hover:scale-105 underline-effect">Ashton</h1>
            <h1 class="text-xl font-bold text-slate-400 font-mono lg:text-3xl lg:mt-1">I code things.</h1>
            <a href="#About" rel="noopener" class="animate-bounce transition ease-in-out size-16 self-center absolute bottom-32"><img class="hidden lg:block size-16 text-center" src={require('../images/down-arrow.png')}></img></a>
        </div>
    );
}

export default Title;