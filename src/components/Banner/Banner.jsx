import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'animate.css';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                loop={true}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={banner1} alt="Banner 1" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate__animated animate__flipInX px-4">
                            Explore the Future of Adventure
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={banner2} alt="Banner 2" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate__animated animate__flipInX px-4">
                            Mountain Trekking Adventure
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={banner3} alt="Banner 3" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate__animated animate__flipInX px-4">
                            Embrace the Eco-Spirit
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={banner4} alt="Banner 4" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate__animated animate__flipInX px-4">
                            Journey into Nature’s Wonders
                        </h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={banner5} alt="Banner 5" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold animate__animated animate__flipInX px-4">
                            Vibrant Escapes Await You
                        </h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
