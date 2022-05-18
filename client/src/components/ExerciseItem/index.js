import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
// commented out in favor of redux logic
//import { useStoreContext } from "../../utils/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_EQUIPMENT } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ExerciseItem(item) {
  // commented out in favor of redux logic
  //const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const { cart } = state;

  // deconstruct item object
  const { gifUrl, name, _id, target, equipment } = item;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_EQUIPMENT,
        _id: _id,
        addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        exercise: { ...item, addingEquipment: 1 },
      });
      idbPromise("cart", "put", { ...item, addingEquipment: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <Link to={`/exercises/${_id}`}>
        <img alt={name} src={`${gifUrl}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>
          {equipment} {pluralize("item", equipment)}
        </div>
        <span>{target}</span>
      </div>
      <button onClick={addToCart}>Add to my workouts</button>
    </div>
  );
}

export default ExerciseItem;
