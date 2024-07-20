// index.js
import { getData } from "../services/fetchAPI.js";

const fetchData = async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

fetchData();
