import React from 'react';
import { connect } from 'react-redux';
import LoginUserForm from './LoginUserForm';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = ({ user = {} }) => {
    return (
        <>
            <LoginUserForm />
            {user.isLoggedIn ? <h1>logged in</h1> : <h1>Not logged in</h1>}
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, null)(User);