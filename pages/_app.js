import { useEffect, useState } from "react";
import "../styles/globals.css";
import PokeStore from "./../context/PokeStore";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [poke_list, setPokeList] = useState([]);

  useEffect(AOS.init, []);
  return (
    <PokeStore.Provider value={{ poke_list, setPokeList }}>
      <Component {...pageProps} />
    </PokeStore.Provider>
  );
}

export default MyApp;
