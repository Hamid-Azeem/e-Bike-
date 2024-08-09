import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import team from "../TeamData"

const Team = () => {
    return (
        <section className="px-8 py-2 " id="teams">
            <div className="max-w-[1300px] mx-auto">
            <h2 className="text-3xl font-bold my-6 text-center pb-5">Our Teams</h2>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    {team.map((oneMember, index) => (
                        <SwiperSlide key={index}>
                            <div className="card bg-slate-100 hover:bg-[crimson] hover:text-white rounded-[6px] py-[45px] px-[35px] text-center overflow-hidden transition-all duration-[0.2s] ease-in">
                                <div className="box flex flex-col justify-center items-center transition-all duration-[0.3s] ease-in">
                                    <img className="h-[150px] w-[150px] object-cover rounded-[50%] border-[5px] border-[crimson] transition-all duration-[0.3s] ease-in" src={oneMember.imgURL} alt="profile_pic" />
                                    <div className="text text-[25px] font-[500] mt-[10px] mb-[7px]">{oneMember.name}</div>
                                    <p className="">{oneMember.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Team;
