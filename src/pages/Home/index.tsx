import React from 'react';

import { Link } from 'react-router-dom';
import {Conteiner, Content, Background} from './styles';

const Home: React.FC = () => {

    return (
        <Conteiner>
            <Background />
            <Content>
                    <h1>Login Account</h1>
                    <p>Enter your username and password</p>

                    <input type="text" placeholder="User"/>
                    <input type="password" placeholder="Password"/>

                    <nav>
                        <Link to="#">Forgot Password</Link>
                        <Link to="/Dashboard">Sign In</Link>
                    </nav>
            </Content>
        </Conteiner>
    )
};

export default Home;
