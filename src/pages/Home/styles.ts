import styled from 'styled-components';


import signUpBackgroundImg from '../../assets/home_background.jpg';

export const Conteiner = styled.div`
    height: 100vh;
    background: #FFFF;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;

    width: 100%;
    max-width: 900px;

    h1 {
        font-size: 22px;
        margin-bottom: 10px;
        font-weight: 700;
        color: #3F4254;
    }
    p {
        color: #B5B5C3;
        font-weight: 500;
        margin-bottom: 80px;
    }

    input {
        background-color: #F3F6F9;
        border-color: #F3F6F9;
        color: #3F4254;
        transition: all 0.15s ease;
        padding: 1.25rem;
        width: 300px;
        font-size: 16px;
        font-weight: 400;
        background-clip: padding-box;
        border: none;
        margin-bottom: 20px;
        border-radius: 0.42rem;
        overflow: visible;
        
    }

    nav {
        width: 350px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        
        a {
            cursor: pointer;
            color: #B5B5C3;
            background-color: trasnparent;
            transition: all 0.15s ease;
            font-weight: 400;
            padding: 0.65rem 1rem;
            user-select: none;
            font-size: 13px;
            text-decoration: none;
            border-radius: 0.42rem;

            & + a {
                padding: 10px 15px;
                font-weight: 400;
                font-size: 13px;
                color: #FFFFFF;
                background-color: #6993FF;
                border-color: #6993FF;
                &:hover {
                    color: #FFFFFF;
                    background-color: #4A7DFF;
                }
            }

            &:hover {
                color: #6993FF;
            }
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center;
    background-size: cover;
`;
