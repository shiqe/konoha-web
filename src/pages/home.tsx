import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../store/user/user.actions';

const Home = ({ setLogout }: typeof actionAsProps): JSX.Element => {
    return (
        <>
            <h3>Homepage</h3>
            <button
                onClick={() => {
                    console.log('logout function clicked');
                    setLogout();
                }}
            >
                Logout
            </button>
        </>
    );
};

const actionAsProps = {
    setLogout: logout,
};

const stateAsProps = (reducers: any) => {
    return {
        posts: reducers.post.posts,
    };
};

export default connect(stateAsProps, actionAsProps)(Home);
