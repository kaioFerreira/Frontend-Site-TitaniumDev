import styled from 'styled-components';

import Background from '../../assets/bg-10.jpg';
export const Conteiner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

export const Body = styled.div`

scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    height: 100%;
    width: 100%;


    section {
        height: 250px;
        width: 100%;
        background-image: url(${Background});
        
        
    }

    > div {
        width: 100%;
        height: fit-content;
        
    }
    
`;

export const TableUsers = styled.div`

    max-width: 1000px;
    width: 90%;
    height: fit-content;

    box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
    border: 1px solid #EBEDF3;
    background-color: #FFFF;
    border-radius: 6px;

    margin: 10px;
    margin-bottom: 100px;
    padding: 30px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

