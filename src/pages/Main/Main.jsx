import style from "./main.module.scss";
import CollectionCards from "../../components/CollectionCards/CollectionCards";

const Main = ({ data }) => {
  return (
    <section className={style.box}>
      <CollectionCards data={data} />
    </section>
  );
};

export default Main;
