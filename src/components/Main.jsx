import { data } from "../../data";
import { Route, Routes } from "react-router-native";
import ProductsItem from "./ProductsItems";
import Checkout from "./Checkout";
import Successful from "./Successful";

const Main = () => {
  const items = data.map((product) => product);

  return (
    <Routes>
      <Route path='/' element={<ProductsItem item={items} />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/successful' element={<Successful />} />
    </Routes>
  );
};

export default Main;
