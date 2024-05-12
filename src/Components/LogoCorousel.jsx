import Slider from 'react-infinite-logo-slider';
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo(2).png';
import logo3 from '../assets/logos/logo(3).png';
import logo4 from '../assets/logos/logo(4).png';
import logo5 from '../assets/logos/logo(5).png';
import logo6 from '../assets/logos/logo(6).png';
import logo7 from '../assets/logos/logo(7).png';
import logo8 from '../assets/logos/logo(8).png';
import logo9 from '../assets/logos/logo(9).png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const LogoCarousel = () => {
    return (
        <div className=' mb-10'>

        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            {logos.map((logo, index) => (
                <Slider.Slide key={index}>
                    <img src={logo} alt={`logo${index + 1}`} className='w-36' />
                </Slider.Slide>
            ))}
        </Slider>
        </div>
    );
};

export default LogoCarousel;
