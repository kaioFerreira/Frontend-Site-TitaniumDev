import React, { useCallback, useRef } from 'react';
import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';

import {Conteiner, Content, Background} from './styles';

const SignUp: React.FC = () => {

    return (
        <Conteiner>
            <Background />
            <Content>
                    <h1>Login Account</h1>
                    <p>Enter your username and password</p>

                    <input type="password" placeholder="User"/>
                    <input type="password" placeholder="Password"/>

                    <nav>
                        <a href="#">Forgot Password</a>
                        <a href="dashboard">Sign In</a>
                    </nav>
            </Content>
        </Conteiner>
    )
};

export default SignUp;
