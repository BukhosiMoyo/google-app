import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";
import {XIcon, MicrophoneIcon, SearchIcon} from "@heroicons/react/outline";


function Header() {
    const router = useRouter();
    const searchInputRef = useRef();

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        
        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return(
        <header className="sticky top-0 bg-white">
            <div>
                <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                height={40}
                width={120}
                onClick={() => router.push("/")}
                className="cursor-pointer"
                />
                <form className="flex px-6 py-3 mt-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input className="flex-grow w-full focus:outline-none" ref={searchInputRef} type="text" />
                    <XIcon 
                    className="h-6 sm:mr-3 text-gray-500 cursor-pointer transion duration-100 transform hover:scale-125"
                    onClick={() =>(searchInputRef.current.value="")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-4 border-gray-300"/>
                    <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        search
                    </button>
                </form>
            </div>
        </header>
    );
}
export default Header;