import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import "./scss/reset.scss";
import axios from "axios";

const App = () => {
  const [dataStore, setDataStore] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((respons) => {
        setDataStore(respons.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header setSearchData={(data) => setData(data)} data={dataStore} />
      <main>
        <Main data={data.length === 0 ? dataStore : data} />
      </main>
    </>
  );
};

export default App;
