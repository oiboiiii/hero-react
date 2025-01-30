import React from "react";
import "./styles.css";

function ListGroup() {
  const items = [
    {
      nameHero: "Человек-Паук",
      image: "/images/spiderman.webp",
      attributes: {
        сила: 85,
        ловкость: 95,
        интеллект: 90,
        выносливость: 80,
      },
      description:
        "Питер Паркер получил свои сверхспособности после укуса радиоактивного паука. Он обладает суперсилой, ловкостью, способностью цепляться за стены и паучьим чутьем.",
    },
    {
      nameHero: "Бэтмен",
      image: "/images/betmenletit-500x500.png",
      attributes: {
        сила: 75,
        ловкость: 85,
        интеллект: 100,
        выносливость: 90,
      },
      description:
        "Брюс Уэйн — миллиардер и гениальный детектив, посвятивший свою жизнь борьбе с преступностью. Использует высокотехнологичное снаряжение и обладает непревзойденными боевыми навыками.",
    },
    {
      nameHero: "Железный Человек",
      image: "/images/square_1280_625c94a6fcbf9fa99ddb7126f66bc72a.jpg",
      attributes: {
        сила: 80,
        ловкость: 75,
        интеллект: 100,
        выносливость: 85,
      },
      description:
        "Тони Старк — гениальный изобретатель и миллиардер, создавший мощный экзоскелетный костюм, позволяющий ему сражаться с преступниками и инопланетными угрозами.",
    },
  ];

  return (
    <div className="container">
      {items.map((hero, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h2>{hero.nameHero}</h2>
            <img src={hero.image} alt={hero.nameHero} width="200" />
            <div>
              {Object.entries(hero.attributes).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}</strong>: {value}
                </div>
              ))}
            </div>
            <div>{hero.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListGroup;
