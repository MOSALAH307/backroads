import Title from "./Title";
import { tours } from "./data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center feature-center">
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, cost } =
            tour;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} alt="tour-img-1" className="tour-img" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map" />
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
