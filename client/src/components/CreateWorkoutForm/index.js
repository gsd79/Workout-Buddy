import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
const CreateWorkoutForm = () => {
const [addWorkout, { error }] = useMutation(ADD_WORKOUT);



    return (
<form>
    <textarea
        placeholder="Workout Name Here"
        className="form-input col-12 col-md-9"
    ></textarea>
    <button className="btn col-12 col-md-3" type="submit">
        Submit
    </button>
</form>
       
    )
    
};

export default CreateWorkoutForm;