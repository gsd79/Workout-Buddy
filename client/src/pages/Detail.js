import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../utils/mutations';
import { QUERY_WORKOUTS } from '../utils/queries';


function Detail() {

  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
        try{
        // read what's currently in the cache
        const { exercises } = cache.readQuery({ query: QUERY_WORKOUTS });

        // prepend the newest thought to the front of the array
        cache.writeQuery({
            query: QUERY_WORKOUTS,
            data: { savedWorkouts: [addExercise, ...exercises] }
        });
    } catch (e) {
        console.error(e);
    }
}})

   // submit form
   const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        await addExercise({
            variables: { _id:workout._id, exerciseid:user.exercises._id },
        });

        // clear form value
        setText('');
        setCharacterCount(0);
    } catch (e) {
        console.error(e);
    }
};

//   const state = useSelector((state) => {
//     return state;
//   });
//   const dispatch = useDispatch();

//   const { id } = useParams();

//   const [currentExercise, setCurrentExercise] = useState({});

//   const { loading, data } = useQuery(QUERY_EXERCISES);

//   const { exercises, workout } = state;

//   useEffect(() => {
//     // already in global store
//     if (exercises.length) {
//       setCurrentExercise(exercises.find((exercise) => exercise._id === id));
//     }
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_EXERCISES,
//         exercises: data.exercises,
//       });


//   const addToWorkout = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === id);
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_EQUIPMENT,
//         _id: id,
//         addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
//       });
//       idbPromise("cart", "put", {
//         ...itemInCart,
//         addingEquipment: parseInt(itemInCart.addingEquipment) + 1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         exercise: { ...currentExercise, addingEquipment: 1 },
//       });
//       idbPromise("cart", "put", { ...currentExercise, addingEquipment: 1 });
//     }
//   };

//   const removeFromCart = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: currentExercise._id,
//     });

//     idbPromise("cart", "delete", { ...currentExercise });
//   };

//   // check if there is anything in cart then display also.
//   return (
//     <>
//       {currentExercise && cart ? (
//         <div className="container my-1">
//           <Link to="/plans">← Back to Exercises</Link>

//           <h2>{currentExercise.name}</h2>

//           <p>{currentExercise.description}</p>

//           <p>
//             <strong>Exercise:</strong>
//             <br></br>
//             {currentExercise.target} <br></br>
//           </p>

//           <img src={`${currentExercise.gifUrl}`} alt={currentExercise.name} />
//           <br></br>
//           <br></br>
//           <button onClick={addToCart}>Add to My Workout</button>
//           <br></br>
//           <br></br>

//           <button
//             disabled={!cart.find((p) => p._id === currentExercise._id)}
//             onClick={removeFromCart}
//           >
//             Remove from My Workout Plan
//           </button>
//         </div>
//       ) : null}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//       <WorkoutCart />
//       </>
// )
}

export default Detail;
