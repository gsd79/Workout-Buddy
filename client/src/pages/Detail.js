import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import WorkoutCart from "../components/WorkoutCart";
import { useDispatch, useSelector } from "react-redux";
import {
    REMOVE_FROM_CART,
    UPDATE_CART_EQUIPMENT,
    ADD_TO_CART,
    UPDATE_EXERCISES,
} from "../utils/actions";
import { QUERY_EXERCISES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/img/spinner.gif";
import "./Styles/Detail.css";

function Detail() {
    const state = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

    const { id } = useParams();

    const [currentExercise, setCurrentExercise] = useState({});

    const { loading, data } = useQuery(QUERY_EXERCISES);

    const { exercises, cart } = state;

    useEffect(() => {
        // already in global store
        if (exercises.length) {
            setCurrentExercise(exercises.find((exercise) => exercise._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_EXERCISES,
                exercises: data.exercises,
            });

            data.exercises.forEach((exercise) => {
                idbPromise("exercises", "put", exercise);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise("exercises", "get").then((indexedExercises) => {
                dispatch({
                    type: UPDATE_EXERCISES,
                    exercises: indexedExercises,
                });
            });
        }
    }, [exercises, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_EQUIPMENT,
                _id: id,
                addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
            });
            idbPromise("cart", "put", {
                ...itemInCart,
                addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                exercise: { ...currentExercise, addingEquipment: 1 },
            });
            idbPromise("cart", "put", { ...currentExercise, addingEquipment: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentExercise._id,
        });

        idbPromise("cart", "delete", { ...currentExercise });
    };

    // check if there is anything in cart then display also.
    return (
        <>
    {currentExercise && cart ? (
        <div className="detail-wrapper">
            <div className="detail-contain">

                    
                    <h2><Link to="/plans">← Back to Exercises</Link></h2>

                    <div className="detail-card">
                    <h2>{currentExercise.name}</h2>

                    <p>{currentExercise.description}</p>

                    <p>
                        <strong>Target:</strong>                        
                        {currentExercise.target} <br></br>
                    </p>

                    <img src={`${currentExercise.gifUrl}`} alt={currentExercise.name} />
                    <br></br>
                    <br></br>
                    <button onClick={addToCart}>Add to My Workout</button>
                    <br></br>
                    <br></br>

                    {/* <button
                        disabled={!cart.find((p) => p._id === currentExercise._id)}
                        onClick={removeFromCart}
                        >
                        Remove from My Workout Plan
                    </button> */}

                    </div>
                </div>
            </div>            
        
        ) : null}
            {loading ? <img src={spinner} alt="loading" /> : null}
            <WorkoutCart />
        </>
    );
}

export default Detail;