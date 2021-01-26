import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { loginUser } from './actions';


const LoginUserForm = ({ user, onLoginPressed }) => {
    const [email, setEmail] = useState('default');
    const [password, setPassword] = useState('default');
    const checkCredential = () =>{
        if (password === "test" && email === "test"){
            onLoginPressed(true);
            setEmail('');
            setPassword('');
        } else {
            onLoginPressed(false);
        }
    }
    return (
        <>
            <h1>User Form</h1>
            <aside className="container row m-4">
                <input
                    className="col-9"
                    type="email"
                    placeholder="Enter new todo"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className="col-9"
                    type="password"
                    placeholder="Password"

                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className="submit col"
                    onClick={checkCredential}
                >Login</button>
            </aside>
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    onLoginPressed: text => dispatch(loginUser(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserForm);