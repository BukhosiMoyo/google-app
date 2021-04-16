import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import {MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid";
import Image from "next/image/";
import {SearchIcon} from "@heroicons/react/outline";

export default function Home() {

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full
          hover:bg-gray-100 cursor-pointer transform hover:scale-110
          transtion duration-200 " />

          {/* Avatar */}

          <Avatar url="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />

        </div>
      </header>
      
      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300} />

        <div className="flex w-full mt-5 hover:shadow-lg
         focus-within:shadow-lg max-w-md rounded-full border 
         border-gray-200 px-5 py-3 items-center sm:max-w-lg lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 
        sm:-space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>

          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>

      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
