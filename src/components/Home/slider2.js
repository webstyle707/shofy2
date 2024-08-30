import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function Slider2() {
  return (
    <div className="">
          <div className="flex shadow items-center md:h-[178.59px] rounded-lg overflow-hidden relative">
            <Image className="w-full" src="/Assets/7.png" width={500} height={500} alt=""/>
            <div className="absolute text-white top-0 left-0 h-full w-full pl-8 flex flex-col justify-center">
              <p className="text-sm font-bold">Only $99.00</p>
              <div className="text-xl font-bold">
                <Link href="/">Selected novelty <br/> Products</Link>
              </div>
            </div>
          </div>
      {/* <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex shadow items-center h-[178.59px] rounded-lg overflow-hidden relative">
            <Image className="w-full" src="/Assets/7.png" width={500} height={500} alt=""/>
            <div className="absolute text-white top-0 left-0 h-full w-full pl-8 flex flex-col justify-center">
              <p className="text-sm font-bold">Only $99.00</p>
              <div className="text-xl font-bold">
                <Link href="/">Selected novelty <br/> Products</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex shadow items-center h-[178.59px] rounded-lg overflow-hidden relative">
            <Image className="w-full" src="/Assets/6.png" width={500} height={500} alt=""/>
            <div className="absolute text-white top-0 left-0 h-full w-full pl-8 flex flex-col justify-center">
              <p className="text-sm font-bold">Only $55.00</p>
              <div className="text-xl font-bold">
                <Link href="/">Top Rated <br/> Products</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
