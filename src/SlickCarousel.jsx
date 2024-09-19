import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';

const SlickCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 1.66,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
        {list.map(({ id, image, name, title, quote }) => {
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
