const CartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total_items: state.total_items + 1,
        total_amount: state.total_amount + action.payload.price,
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        total_items: state.total_items > 0 ? state.total_items - 1 : 0,
        total_amount:
          state.total_amount -
          (action.payload.price > 0 ? action.payload.price : 0),
      };

    case "ADD_TO_CART":
      const addToCartReducer = (state, payload) => {
        const { product, id } = payload;
        const newItem = { ...product, amount: 1 };

        const cartItem = state.cart.find((item) => item.id === id);

        if (cartItem) {
          const newCart = state.cart.map((item) =>
            item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
          );

          return { ...state, cart: newCart };
        } else {
          return { ...state, cart: [...state.cart, newItem] };
        }
      };
      return addToCartReducer(state, action.payload);
  }
};

export default CartReducer;
