import React, { useState } from "react";

const Carousel = ({ pic1, pic2, pic3, pic4, pic5 }) => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  const cards = [
    {
      header: "Card 1",
      text: "Description for Card 1",
    },
    {
      header: "Card 2",
      text: "Description for Card 2",
    },
    {
      header: "Card 3",
      text: "Description for Card 3",
    },
    {
      header: "Card 4",
      text: "Description for Card 4",
    },
    {
      header: "Card 5",
      text: "Description for Card 5",
    },
  ];

  return (
    <section className="carousel">
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        const picUrl = index === 0 ? pic1 : index === 1 ? pic2 : index === 2 ? pic3 : index === 3 ? pic4 : pic5;
        return (
          <article
            key={card.header}
            className={`carousel-card ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={picUrl} alt={card.header} />
            <div className="content">
              <span className="material-symbols-outlined">photo_camera</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Carousel;
