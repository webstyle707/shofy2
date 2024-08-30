import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Footerhome() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Now we're on the client side
  }, []);

  return (
    <div className="h-[201px] w-full relative bg-[#0989FF]">
      <div className='w-[608px] h-full relative md:block hidden'>
        <div>
          <Image className='' src={'/Assets/FooterHome/subscribe-shape-1.png'} width={700} height={700} alt='' />
        </div>

        {isClient && (
          <div className='absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center pt-20 space-y-9'>
            <Image className='w-20' src={'/Assets/FooterHome/subscribe-shape-2.png'} width={700} height={700} alt='' />
            <Image className='w-7 translate-x-2' src={'/Assets/FooterHome/subscribe-shape-3.png'} width={700} height={700} alt='' />
          </div>
        )}
      </div>
      <div className='bg-[#0989FF] w-full h-full absolute left-0 top-0 bg-opacity-90 2xl:pl-[9px] 2xl:pr-[12px] xl:px-20 lg:px-10 md:pl-8 md:pr-12 px-4'>
        <div className='mx-auto max-w-[1320px] h-full flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6'>
          <div>
            <p className='text-white font-semibold uppercase md:text-lg'>Sale 20% off all store</p>
            <h1 className='text-white font-bold xl:text-4xl lg:text-3xl md:text-2xl text-2xl'>Subscribe our Newsletter</h1>
          </div>
          <div>
            <div className='xl:text-base text-sm flex items-center focus:outline-none 2xl:w-[556px] xl:w-[500px] lg:w-[400px] md:w-[300px] 2xl:h-[60px] xl:h-[56px] lg:h-[52px] h-[44px] lg:rounded-lg rounded z-30 sticky'>
              <input className='bg-white h-full md:w-[413.44px] w-full lg:rounded-l-lg rounded-l pl-5 pr-4 focus:outline-none text-gray-600' type='text' placeholder='Enter Your Email' alt='' />
              <button className='bg-[#010F1C] h-full px-2.5 lg:px-0 lg:w-[142.56px] lg:rounded-r-lg rounded-r text-white font-semibold'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {isClient && (
        <div className='absolute left-0 top-0 z-20 w-[90%] justify-end md:flex items-center hidden'>
          <div>
            <Image className='w-12 -translate-y-16 translate-x-6' src="/Assets/FooterHome/plane.png" width={600} height={600} alt='' />
          </div>

          <div className=''>
            <svg
              width="399"
              height="110"
              className="d-none d-sm-block"
              viewBox="0 0 399 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22"
                stroke="white"
                strokeOpacity="0.5"
                strokeDasharray="3 3"
                className="path-animation"
              ></path>
            </svg>
          </div>

          <div>
            <Image className='w-32 -translate-y-5' src="/Assets/FooterHome/subscribe-shape-4.png" width={600} height={600} alt='' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Footerhome;

