import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { QUERY_USER } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import './Styles/Pages.css';


const Profile = (props) => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile"/>;
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
    
    return (
        <div className="profile-wrapper">
            <h1>Welcome Back,{userParam `${user.username}`}</h1>
        </div>

    );
}
export default Profile;


