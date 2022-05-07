// import actions

import {
    UPDATE_USER,
    UPDATE_WORKOUTS,    
    
} from '../utils/actions';
import { reducer } from '../utils/reducers';

// sample test of global state

const initialState ={
    workouts: []
}


test('UPDATE_WORKOUTS', () => {
    let newState = reducer(initialState, {
        type: 'UPDATE_WORKOUTS',
        workouts: [{}, {}]
    })
    
    expect(newState.workouts.length).toBe(2);
    expect(initialState.workouts.length).toBe(0);
});
