import React from 'react'

import { Conteiner, Body } from './styles';

import { RiHome3Line } from 'react-icons/ri';

import Header from '../../components/Header';

const Home: React.FC = () => {

return (

<Conteiner>
    <Header />

    <Body>

        <section>
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <div>
                        <RiHome3Line></RiHome3Line>
                        <span>Dashboard</span>
                    </div>

                </div>
            </div>
        </section>

        <div>

        </div>

    </Body>
</Conteiner>
)
};

export default Home;
