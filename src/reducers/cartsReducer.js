const cartsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "REMOVE_CART":
      const id = action.payload;
      return state.filter((prod) => prod.id !== id);
    default:
      return state;
  }
};

export default cartsReducer;
