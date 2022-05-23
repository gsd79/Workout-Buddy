// react imports
import React from "react";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// functionality variables/queries/mutations
import SavedWorkouts from '../pages/SavedWorkouts';

import Auth from "../utils/auth";

// in future {ADD_FRIEND, ADD_LOG, ADD_PROGRESS, ADD_PLAYLIST}

<<<<<<< HEAD
=======
 
  const user = data?.user || {};
<<<<<<< HEAD
=======
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d

import "./Styles/Profile.css";

<<<<<<< HEAD
const Profile = () => {
    const user = Auth.getProfile();
=======
    // const handleClick = async () => {
    //     try {
    //         await addWorkout({
    //             variables: { name: user.savedWorkouts.name },
    //         });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
>>>>>>> ea10be63558a190f8a7210da8b8657c8884b1d8d

    console.log (user);

<<<<<<< HEAD
  if (!user?.username) {
=======
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
    return (
        <div className="profile-wrapper">
            <div className="profile-contain">
                <h1>Your Profile</h1>
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
                            <SavedWorkouts
                                user={user.data}
                                />
                            <Link as={Link} to= "/plans">
                                <button className="add-workout">Add A Workout</button>
                            </Link>
                    
                                
                            {/* //button prompt for adding new empty workout -- will be redirected to 'Build A Workout'   */}
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

<<<<<<< HEAD
export default Profile;
=======

export default Profile;
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
