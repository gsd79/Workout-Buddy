import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { QUERY_USER, QUERY_USER_BRIEF } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import './Styles/Pages.css';


const Profile = (props) => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_USER_BRIEF, {
        variables: { username: userParam },
    });
    const user = data?.user;

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }

    return (
        <div className="profile-wrapper">
            <div className="profile-contain">
                <h1>Viewing {userParam ? `${user.username}'s` : 'your'} profile</h1>
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
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
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
        </div>
    );


}

export default Profile;


