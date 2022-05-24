import React from "react";

import { useDispatch } from "react-redux";
import { REMOVE_FROM_CART, UPDATE_CART_EQUIPMENT } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });

      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_EQUIPMENT,
        _id: item._id,
        addingEquipment: parseInt(value),
      });

      idbPromise("cart", "put", {
        ...item,
        addingEquipment: parseInt(value),
      });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`${item.gifUrl}`} alt="" />
      </div>
      <div>
      {item.name}, 
        <div>
          Target: {item.target}
        </div>
        <div>
          <span>Reps:</span>
          <input
            type="number"
            placeholder="1"
            value={item.addingEquipment}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
