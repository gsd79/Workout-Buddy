import React, { useEffect } from "react";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import WorkoutCartItem from "../WorkoutCartItem";
import Auth from "../../utils/auth";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";

import { useLazyQuery } from "@apollo/client";
import { QUERY_WORKOUT } from "../../utils/queries";
import { Container, Jumbotron } from "react-bootstrap";

const Cart = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  // // using lazyQuery to be used as part of the checkout function
  const [getWorkout, { data }] = useLazyQuery(QUERY_WORKOUT);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, exercises: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // // // use effect for checkout lazyhook
  useEffect(() => {
    if (data) {
      idbPromise.then((res) => {
        res.redirect({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function submitWorkout() {
    const workoutIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.addingEquipment; i++) {
        workoutIds.push(item._id);
      }
    });

    // getWorkout({
    //   variables: { exercises: workoutIds },
    // });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          &#127947;&#127999;
        </span>
      </div>
    );
  }

  return (
    <Jumbotron>
      <Container>
        <div className="cart">
          <div className="close" onClick={toggleCart}>
            [close]
          </div>

          <section id="cart-add" className="section-p1">
            <div id="workout-name">
              <h3>Enter Workout Name</h3>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name your workout"
                ></input>
              </div>
            </div>
          </section>

          {state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <WorkoutCartItem key={item._id} item={item} />
              ))}
              <div className="flex-row space-between">
                {Auth.loggedIn() ? (
                  <button onClick={submitWorkout}>Save Workout</button>
                ) : (
                  <span>(log in to add them in your profile)</span>
                )}
              </div>
            </div>
          ) : (
            <h3>
              <span role="img" aria-label="shocked">
                😱
              </span>
              You haven't added anything to your Workout Plan yet!
            </h3>
          )}
        </div>
      </Container>
    </Jumbotron>
  );
};

/*
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Workout Buddy</h2>
      <div>
          <CartItem item={{name:'all fours squad stretch', gifUrl:'', target:, addingEquipment:}} />
          <CartItem item={{name:'alternate heel touchers', gifUrl:'', target:, addingEquipment:}} />

          <div className="flex-row space-between">
            <strong>Click Here </strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
    */

export default Cart;
