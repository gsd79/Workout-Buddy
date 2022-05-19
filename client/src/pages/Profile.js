// react imports
import React from "react";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// functionality variables/queries/mutations
import { QUERY_USER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../utils/mutations";
// import CreateWorkoutForm from '../components/CreateWorkoutForm';
import SavedWorkouts from '../pages/SavedWorkouts';
// in future {ADD_FRIEND, ADD_LOG, ADD_PROGRESS, ADD_PLAYLIST}

// import Auth from "../utils/auth";
import "./Styles/Profile.css";

const Profile = () => {
    const { username: userParam } = useParams();
    // const [addWorkout] = useMutation(ADD_WORKOUT);
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

 
  const user = data?.user || {};

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }

    // const handleClick = async () => {
    //     try {
    //         await addWorkout({
    //             variables: { name: user.savedWorkouts.name },
    //         });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    
    return (

        <div className="profile-wrapper">
            <div className="profile-contain">
                <h1>Welcome Back {`${user.username}`}!</h1>
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
                            {/* Saved Workouts to appear here */}
                            <SavedWorkouts/>

                            {/* //button prompt for adding new empty workout -- will be redirected to 'Build A Workout'   */}
                            <Link as={Link} to= "/plans">
                                <button className="add-workout">Add Workout</button>
                            </Link>

                        </TabPanel>
                        <TabPanel>
                            <h2> Edit Profile Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Goal Setting Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Logs Coming Soon!</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Social Coming Soon!</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            
        </div >
    );
    }


export default Profile;