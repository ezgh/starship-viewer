import axios from "axios";

export const client = axios.create({
  baseURL: `https://swapi.dev/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Endpoint to list all starships
export const getAllStarships = () => client.get("/starships");

// Endpoint to get starship by its ID
export const getStarshipById = (id) => client.get(`/starships/${id}`);
