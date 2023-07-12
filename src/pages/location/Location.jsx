import "./location.css";
import mallImg from "./../../images/mallImg.png";
import metroImg from "./../../images/metro.png";
const Location = () => {
  return (
    <main className="location">
      <aside className="location__about">
        <h1 className="location__title">Киев</h1>
        <div className="location__block">
          <img src={mallImg} alt="" className="loaction__img" />
          <div className="location__info">
            <h2 className="location__info-title">ТЦ Глобус-1</h2>
            <div className="location__info-status">
              <p className="location__info-working">Магазин работает</p>
              <p className="location__info-name">MAKEUP</p>
            </div>

            <p className="location__info-way">
              Майдан Незалежности 1, 2 этаж
            </p>

            <p className="location__time-work">Время работы:</p>
            <p className="location__time-work">пн-чт, вск: 10:00 - 22:00</p>
            <p className="location__time-work">пт, сб: 10:00 - 23:00</p>

            <div className="location__metro">
              <img src={metroImg} alt="" className="location__metro-img" />
              <p className="location__metro-text">Майдан Незалежности</p>
            </div>

            <a
              href="https://goo.gl/maps/akkz9PaMrqdN9Sn87"
              target="_blank"
              className="location__info-link"
            >
              Смотреть на карте
            </a>
          </div>
        </div>
      </aside>
      <iframe
        className="location__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300725.088613498!2d28.215812393750003!3d50.450810200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce505f2c2b6f%3A0x3c708bc302925049!2z0KLQpiDQk9C70L7QsdGD0YEtMQ!5e0!3m2!1sru!2sua!4v1689156735471!5m2!1sru!2sua"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </main>
  );
};

export default Location;
