// import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../utils/mutations';
import { QUERY_WORKOUTS } from '../utils/queries';


function Detail() {
    const state = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

  const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
    update(cache, { data: { addExercise } }) {
        try{
        // read what's currently in the cache
       const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
         // add the new exercise to the cache
         cache.writeQuery({
              query: QUERY_WORKOUTS,
                data: { workouts: workouts.concat([addExercise]) },
            });
        } catch (err) {
            console.error(err);
        }
    },
    });

        // prepend the newest thought to the front of the array
        // cache.writeQuery({
        //     query: QUERY_WORKOUTS,
        //     data: { savedWorkouts: [addExercise, ...exercises] }
        // });
//     } catch (e) {
//         console.error(e);
//     }
// }})

   // submit form

    // check if there is anything in cart then display also.
    return (
        <>
            {currentExercise && cart ? (
                <div className="container my-1">
                    <Link to="/plans">← Back to Exercises</Link>

                    <h2>{currentExercise.name}</h2>

                    <p>{currentExercise.description}</p>

                    <p>
                        <strong>Exercise:</strong>
                        <br></br>
                        {currentExercise.target} <br></br>
                    </p>

                    <img src={`${currentExercise.gifUrl}`} alt={currentExercise.name} />
                    <br></br>
                    <br></br>
                    <button onClick={addToCart}>Add to My Workout</button>
                    <br></br>
                    <br></br>

                    <button
                        disabled={!cart.find((p) => p._id === currentExercise._id)}
                        onClick={removeFromCart}
                    >
                        Remove from My Workout Plan
                    </button>
                </div>
            ) : null}
            {loading ? <img src={spinner} alt="loading" /> : null}
            <WorkoutCart />
        </>
    );
}

export default Detail;