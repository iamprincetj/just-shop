import axios from "axios";
import { baseUrl } from "../../utils";

export const getProduct = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};
