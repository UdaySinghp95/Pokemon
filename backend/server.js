import axios from "axios";

const serverApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

export default serverApi;
