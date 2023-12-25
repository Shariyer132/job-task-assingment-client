import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerSection = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        axios('Customer.json')
            .then(res => setCarts(res.data))
    }, [])
    console.log(carts);
    return (
        <>
        <div className='text-center py-10'>
            <h2 className='text-5xl font-bold'>Our Community</h2>
            <p className='text-lg font-semibold pt-6'>From innovative developers to strategic corporate professionals, our platform is a hub for diverse expertise.</p>
        </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {carts.map(cart =>
                    <SwiperSlide className='pb-10'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{cart.title}</h2>
                                <p>{cart.description}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                }
            </Swiper>
        </>
    );
};

export default CustomerSection;