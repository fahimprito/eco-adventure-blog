import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import banner5 from "../../assets/banner5.jpg"

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
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;