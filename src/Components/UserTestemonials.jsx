import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Slide } from 'react-awesome-reveal';
import ClientSlider from './ClientSlider';

const clients = [
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 3,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name: "John Michel",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const UserTestemonials = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ));

    return (
        <div id="client" className="w-4/5 max-w-screen-xl mx-auto py-16">
            <Slide direction="left">
                <span className="font-bold uppercase text-green-500">testimonials</span>
                <h1 className="pt-4 capitalize text-2xl font-semibold">what clients say</h1>
            </Slide>
            <div className="mt-8 relative">
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <div className="absolute right-2 bottom-[-2rem] flex space-x-2">
                    <button onClick={() => arrowRef.current.slickPrev()} className="text-green-500 text-xl">
                        {/* <IoIosArrowBack /> */}
                        <p>icon</p>
                    </button>
                    <button onClick={() => arrowRef.current.slickNext()} className="text-green-500 text-xl">
                        {/* <IoIosArrowForward /> */}
                        <p>icon</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTestemonials;
