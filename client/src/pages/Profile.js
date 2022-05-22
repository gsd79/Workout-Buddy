// react imports
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// functionality variables/queries/mutations
import { QUERY_USER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../utils/mutations";
import CreateWorkoutForm from '../components/CreateWorkoutForm';
import SavedWorkouts from '../components/savedWorkouts';
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
<<<<<<< HEAD
=======

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
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6


<<<<<<< HEAD
  if (!user?.username) {
=======
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
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
                            

                            {/* //button prompt for adding new empty workout -- will be redirected to createWorkout   */}
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

<<<<<<< HEAD
export default Profile;
=======

export default Profile;
>>>>>>> d9c376c1afe6ae0e49ae5e60e79b2b4c379cadf6
