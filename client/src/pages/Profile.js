// react imports
import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// functionality variables/queries/mutations
import { QUERY_USER } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_WORKOUT } from "../utils/mutations";
import { SavedWorkouts } from "./CreateWorkouts";
// in future {ADD_FRIEND, ADD_LOG, ADD_PROGRESS, ADD_PLAYLIST}


import Auth from '../utils/auth';
import './Styles/Pages.css';


const Profile = () => {
    const { username: userParam } = useParams();
    const { addWorkout } = useMutation(ADD_WORKOUT);    
    const { loading, data } = useQuery(userParam, (QUERY_USER), {
        variables: { username: userParam }
    });
    const userData = data?.user;

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

    const handleClick = async () => {
        // try {
        //     await addWorkout({
        //         variables: { id: user._id },
        //     });
        // } catch (e) {
        //     console.error(e);
        // }
    };

    return (
        <div className="profile-wrapper">
            <div className="profile-contain">
                <h1>Welcome Back {`${userData.user}`}!</h1>
                <div className="profile-nav">
                    <Tabs>
                        <TabList>
                            <Tab>Your Saved Workouts</Tab>
                            <Tab>Edit Your Profile</Tab>
                            <Tab>Goals</Tab>
                            <Tab>Log</Tab>
                            <Tab>Friends</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>
                                {/* list of saved workouts for user */}
                                <SavedWorkouts
                                    workouts={userData.workouts}
                                    title={`${userData.username}'s workouts...`}
                                />
                                {/* button prompt for adding new empty workout -- will be redirected to createWorkout */}
                                {userParam && (
                                    <button className="btn ml-auto" onClick={handleClick}>
                                        Add Workout
                                    </button>
                                )}
                            </h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Coming Soon!</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div >
    );


}

export default Profile;


