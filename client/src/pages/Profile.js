// react imports
import React from "react";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// functionality variables/queries/mutations
import SavedWorkouts from '../pages/SavedWorkouts';
import WorkoutForm from "../components/Workout Form";
import Auth from "../utils/auth";

// in future {ADD_FRIEND, ADD_LOG, ADD_PROGRESS, ADD_PLAYLIST}


import "./Styles/Profile.css";

const Profile = () => {
    const user = Auth.getProfile();

    console.log (user);

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
                    
                                {/* <WorkoutForm/> */}
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


export default Profile;