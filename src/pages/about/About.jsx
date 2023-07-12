import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";
import image from "./../../images/banner-img.png";
const About = () => {
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="about__slider-next-arrow">
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z"
            fill="#000"
          ></path>
        </svg>
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="about__slider-prev-arrow">
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM1 9H27V7H1V9Z"
            fill="#000"
          ></path>
        </svg>
      </button>
    );
  }
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <main className="about">
      <h1 className="about__title">О компании</h1>
      <div className="about__text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          saepe non quibusdam ad dicta tempore placeat, itaque neque corrupti
          voluptate, laboriosam maxime ipsum iste? Dolorem rem laudantium vitae
          iusto sint.
        </p>
        <br />
        <p>
          Рецептуру средств разработали итальянские технологи. Первые партии
          также были произведены в Италии из европейского сырья. Однако затраты
          на логистику делали косметику достаточно дорогой для украинского
          рынка.
        </p>
        <br />
        <p>
          Для снижения стоимости доставки производство было перенесено в
          Украину. Формулы средств, технологии изготовления и поставщики сырья
          остались прежними.
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          explicabo eaque modi odio. Eveniet, porro amet laboriosam autem
          deleniti dolores molestiae ipsum officiis ab voluptate vitae deserunt
          voluptas fugiat doloremque!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam
          non possimus, aut sapiente, reprehenderit, nostrum sit at magni facere
          minus amet debitis quam assumenda?
        </p>
        <br />
        <p>«Jambla Lamba»: МНОГООБРАЗИЕ УХОДОВ</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          architecto placeat nostrum repellendus alias explicabo, possimus
          labore, omnis eos libero praesentium beatae, voluptatibus blanditiis
          officiis earum quis quia minus esse ducimus vero similique doloremque.
          Nesciunt aliquid cupiditate provident tempora nulla minus accusantium
          quos modi ducimus.
        </p>
        <br />
        <p>
          «EpilProfi – это визит в косметический салон, не выходя из дома, без
          лишних усилий и трат»
        </p>
        <br />
        <p>
          На следующем этапе компания сосредоточилась на создании средств для
          ухода за молодой кожей. Был запущен бренд Sentenslab – косметика,
          решающая сразу две задачи: борьбу с несовершенствами и восполнение
          потребностей кожи.
        </p>

        <br />
        <p>
          «У 85% людей в возрасте до 24 лет жирная кожа лица, склонная к
          образованию акне, комедонов, раздражений. Формулы Sentenslab
          разработаны специально для ухода за такой кожей: устраняют
          несовершенства и раскрывают её естественную красоту»
        </p>
        <br />
        <p>
          Вдохновившись идеалами осознанной красоты, компания «Jamba Lamba»
          создала бренд L`AVANT laboratory. Формулы содержат максимальное
          количество натуральных компонентов.
        </p>
      </div>

      <div className="about__slider">
        <Slider {...settings}>
          <img className="ablout__slider-img" src={image} alt="" />
          <img className="ablout__slider-img" src={image} alt="" />
          <img className="ablout__slider-img" src={image} alt="" />
        </Slider>
      </div>
    </main>
  );
};

export default About;
