import { useState } from "react";
import Card from "../Card/Card";
import style from "./collectionCards.module.scss";
import Popup from "../Popup/Popup";

const CollectionCards = ({ data }) => {
  const [active, setActive] = useState(false);
  const [cardData, setCardData] = useState({});

  return (
    <>
      {active && (
        <Popup cardData={cardData} call={(value) => setActive(value)} />
      )}
      <div className={style.box}>
        {data.map((cardData, i) => {
          return (
            <Card
              cardData={cardData}
              call={(data, active) => {
                setCardData(data);
                setActive(active);
              }}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default CollectionCards;
