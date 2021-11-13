const pokeColor = {
  rock: "#945151",
  ghost: "#f7f7f7",
  electric: "#ffffa1",
  bug: "#F6D6A7",
  poison: "#e4c2f1",
  normal: "#F4F4F4",
  fairy: " #ffc0cb",
  fire: "#FBE3DF",
  grass: "#E2F9E1",
  water: "#E0F1FD",
  flying: "#8bc0ebed",
  ground: "#9d7b4a",
  normal: "#ebf1da",
  fighting: "#e6e792",
  psychic: "#d3efce",
};

const pokeBadgeColor = {
  rock: "#753333",
  ghost: "#b8b4b4",
  electric: "#d4d410",
  bug: "#f1ad45",
  poison: "#565058",
  normal: "#47d4aa",
  fairy: " #ca6677",
  fire: "#c55744",
  grass: "#008300",
  water: "#0d11f0",
  flying: "#2d98f0",
  ground: "#855512",
  fighting: "#ecef1c",
  psychic: "#75bb69",
};

function capitlaize(str) {
  if (!str) return;
  return str[0].toUpperCase() + str.slice(1);
}

export { pokeColor, pokeBadgeColor, capitlaize };
