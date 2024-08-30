import React from 'react';
import Image from 'next/image';
import { SlSocialInstagram } from 'react-icons/sl';

function Instagram() {
  return (
    <div className='2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-9 px-4'>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
        <div>
          <div className="relative group">
            <Image
              className="rounded-lg"
              src="/Assets/instagram-1.jpg"
              width={600}
              height={600}
              alt=""
            />
            <div className="absolute rounded-lg w-full h-full left-0 top-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>

            <div className="z-20 absolute flex items-center justify-center rounded-lg w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button className="focus:outline-none p-2.5 rounded-lg border border-gray-400 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <SlSocialInstagram className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="relative group">
            <Image
              className="rounded-lg"
              src="/Assets/instagram-2.jpg"
              width={600}
              height={600}
              alt=""
            />
            <div className="absolute rounded-lg w-full h-full left-0 top-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>
            
            <div className="z-20 absolute flex items-center justify-center rounded-lg w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button className="focus:outline-none p-2.5 rounded-lg border border-gray-400 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <SlSocialInstagram className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="relative group">
            <Image
              className="rounded-lg"
              src="/Assets/instagram-3.jpg"
              width={600}
              height={600}
              alt=""
            />
            <div className="absolute rounded-lg w-full h-full left-0 top-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>
            
            <div className="z-20 absolute flex items-center justify-center rounded-lg w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button className="focus:outline-none p-2.5 rounded-lg border border-gray-400 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <SlSocialInstagram className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="relative group">
            <Image
              className="rounded-lg"
              src="/Assets/instagram-4.jpg"
              width={600}
              height={600}
              alt=""
            />
            <div className="absolute rounded-lg w-full h-full left-0 top-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>
            
            <div className="z-20 absolute flex items-center justify-center rounded-lg w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button className="focus:outline-none p-2.5 rounded-lg border border-gray-400 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <SlSocialInstagram className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="relative group">
            <Image
              className="rounded-lg"
              src="/Assets/instagram-5.jpg"
              width={600}
              height={600}
              alt=""
            />
            <div className="absolute rounded-lg w-full h-full left-0 top-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>
            
            <div className="z-20 absolute flex items-center justify-center rounded-lg w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <button className="focus:outline-none p-2.5 rounded-lg border border-gray-400 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <SlSocialInstagram className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
