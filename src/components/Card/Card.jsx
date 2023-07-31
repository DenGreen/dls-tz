import style from "./card.module.scss";

const Card = ({ cardData, call }) => {
  const { autor, date, img, img_2x, tags, text, title, views } = cardData;

  return (
    <article className={style.box}>
      <div className={style.boxOfWidth} onClick={() => call(cardData, true)}>
        <img
          className={style.img}
          src={img}
          alt={title}
          srcSet={`${img_2x} 2x`}
        />
        <span className={style.tags}>{tags}</span>
        <h2 className={style.title}>{title}</h2>
        <div className={style.wrapper}>
          <span className={style.autor}>{autor}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
          </svg>
          <span className={style.date}>{date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="4"
            viewBox="0 0 3 4"
            fill="none"
          >
            <circle cx="1.5" cy="2" r="1.5" fill="#D7D7D7" />
          </svg>
          <span className={style.views}>{views} Views</span>
        </div>
        <p className={style.text}>{text}</p>
      </div>
    </article>
  );
};

export default Card;
