import data from "../data/starshipImages.json";

export const isActualNumber = (str) => {
  const n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n > 0;
};

export const getStarshipImageByRoute = (route) => {
  // if no route or invalid route is entered, send "No Image" image
  if (!data[route] || !route) return "/images/no-image.svg";
  return data[route];
};
