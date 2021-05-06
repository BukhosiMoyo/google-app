import Image from "next/image";
import {useRouter} from "next/router";
import {useRef} from "react";
import {XIcon, MicrophoneIcon, SearchIcon} from "@heroicons/react/outline";
import Avatar from "../components/Avatar"
import {ViewGridIcon} from "@heroicons/react/solid"
import HeaderOptions from "./HeaderOptions";

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
            <div className="flex w-full p-6 items-center">
                <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                height={40}
                width={120}
                onClick={() => router.push("/")}
                className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                    <input className="flex-grow w-full focus:outline-none" ref={searchInputRef} type="text" />
                    <XIcon 
                    className="h-6 sm:mr-3 text-gray-500 cursor-pointer transion duration-100 transform hover:scale-125"
                    onClick={() =>(searchInputRef.current.value="")}
                    />
                    
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 cursor-pointer border-l-2 pl-3 border-gray-300"/>
                    <SearchIcon className="h-6 text-blue-500 cursor-pointer hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        search
                    </button>
                </form>
                {/* Icon */}
                <ViewGridIcon
                    className="h-10 w-10 mr-auto p-2 rounded-full
                hover:bg-gray-100 text-gray-700 hidden sm:inline-flex cursor-pointer transform hover:scale-110
                transtion duration-200 "
                />
                <Avatar className="ml-auto hidden sm:inline-flex"
                url="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                />
            </div>
            <HeaderOptions />
        </header>
    );
}
export default Header;