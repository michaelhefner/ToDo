import React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from './actions';
import LoginUserForm from './LoginUserForm';


import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = ({ user = {}, onLoginPressed, onLogoutPressed }) => {
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
const mapDispatchToProps = dispatch => ({
    onLoginPressed: text => dispatch(loginUser(text)),
    onLogoutPressed: text => dispatch(logoutUser(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(User);