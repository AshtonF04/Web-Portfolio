export default function Project({ name, description, link}){
    return (
        <div class="flex flex-col size-full h-44 border-2 rounded-lg">
            <p class="ml-2 mt-1 font-bold font-courier text-lg">{name}</p>
            <p class="ml-2 font-mono line-clamp-4">{description}</p>
            {link != "" &&
                <a target="_blank" class="ml-2 mt-auto mb-2 text-blue-400 text-center leading-relaxed font-bold border-blue-400 border-2 size-8 w-24" href={link}>Visit</a>
            }
        </div>
    );
}