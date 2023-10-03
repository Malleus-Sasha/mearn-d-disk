import React, {useState} from 'react';
import './authorization.scss'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">LogIn</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Password..."/>
            <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>LogIn</button>
        </div>
    );
};

export default Login;
