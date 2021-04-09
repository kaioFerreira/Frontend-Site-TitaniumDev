import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/home_background.jpg';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width: 100%;
    max-width: 700px;

    background: var(--secondColor);

`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;
    img {
        margin-bottom: 50px;
    }

    form {
        margin-bottom: 40px;
        width: 340px;
        text-align: center;
        h1 {
            margin-bottom: 30px;
            font-size: 22px;
            font-weight: 700;
            color: rgb(63, 66, 84);
        }

        input {
            color: rgb(63, 66, 84);
        }
        a {
            color: rgb(63, 66, 84);
            display: flex;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;
            place-content: center;
            align-items: center;

            &:hover {
                color: ${shade(0.2, 'rgb(63, 66, 84)')};
            }

            svg {
                margin-right: 16px;
            }
        }
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px rgb(243, 246, 249) inset;
        -webkit-text-fill-color: rgb(63, 66, 84);
    }
`;

export const Background = styled.div`
    flex: 1;

    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
