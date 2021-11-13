import serverApi from "./server";

async function getPokemonList(count) {
  try {
    const { data } = await serverApi.get(`pokemon?limit=18&offset=${count}`);
    const poke_list = data.results.map((p) => p.name);

    let poke_details = poke_list.map((data, index) =>
      getPokemon(count + index)
    );

    for (let i = 0; i < poke_details.length; i++)
      poke_details[i] = await poke_details[i];

    return poke_details;
  } catch (e) {}
  return [];
}

async function getPokemon(id) {
  try {
    const { data } = await serverApi.get(`pokemon/${id + 1}`);

    const details = {};
    details["ability"] = data.abilities.map((a) => a.ability.name);
    details["experience"] = data.base_experience;
    details["height"] = data.height;
    details["moves"] = data.moves.length;
    details["name"] = data.name;
    details["type"] = data.types.map(({ type }) => type.name);
    details["weight"] = data.weight;
    details["id"] = id;

    const { data: poke_data } = await serverApi.get(
      `pokemon-species/${id + 1}`
    );

    details["happiness"] = poke_data.base_happiness;
    details["capture_rate"] = poke_data.capture_rate;
    details["description"] = poke_data.flavor_text_entries[0].flavor_text;
    details["growth"] = poke_data.growth_rate.name;
    details["habitat"] = poke_data.habitat.name;

    return details;
  } catch (error) {}
}

export { getPokemon, getPokemonList };
