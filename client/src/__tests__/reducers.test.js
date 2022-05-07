// import actions

import {
    UPDATE_USER,
    UPDATE_WORKOUTS,    
    
} from '../utils/actions';
import { reducer } from '../utils/reducers';

// sample test of global state

const initialState ={
    workoutPlan: [],
    workouts: [{deadlift}]
}


test('UPDATE_WORKOUTPLAN', () => {
    let newState = reducer(initialState, {
        type: 'UPDATE_WORKOUTPLAN',
        workouts: [{}, {}]
    })
    
    expect(newState.workouts.length).toBe(2);
    expect(initialState.workouts.length).toBe(0);
});
