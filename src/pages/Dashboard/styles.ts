import styled from 'styled-components';

import Background from '../../assets/bg-10.jpg';
export const Conteiner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const Body = styled.div`

    height: 100%;
    width: 100%;

    section {
        height: 300px;
        width: 100%;
        background-image: url(${Background});
        
        
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50vh;
        span {
            font-size: 40px;
            font-weight: 700;
            color: black;
        }
    }
    
`;
