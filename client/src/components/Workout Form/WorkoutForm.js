import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { QUERY_WORKOUT } from '../../utils/queries';
// import SavedWorkouts from '../../pages/SavedWorkouts';

const WorkoutForm = () => {

    const [name, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
        update(cache, { data: { addWorkout } }) {
            try{
            // read what's currently in the cache
            const { workout } = cache.readQuery({ query: QUERY_WORKOUT });

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_WORKOUT,
                data: { workout: [addWorkout, ...workout] }
            });
        } catch (e) {
            console.error(e);
        }
    }
    
    });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addWorkout({
                variables: { name },
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <p
                className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
            >

                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Shiny New Workout"
                    value={name}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default WorkoutForm;
