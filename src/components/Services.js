import Title from "./Title";
import { services } from "./data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        <article className="service">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <div className="center" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Services;
