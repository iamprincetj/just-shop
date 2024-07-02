import { useContext, useReducer } from "react";
import cartsReducer from "../reducers/cartsReducer";
import cartsContext from "./cartsContext";

export const useCartsContextValue = () => {
  const value = useContext(cartsContext);
  return value[0];
};

export const useCartsContextDispatch = () => {
  const dispatch = useContext(cartsContext);
  return dispatch[1];
};

const CartsContextProvider = ({ children }) => {
  const [carts, cartsDispatch] = useReducer(cartsReducer, []);

  return (
    <cartsContext.Provider value={[carts, cartsDispatch]}>
      {children}
    </cartsContext.Provider>
  );
};

export default CartsContextProvider;
