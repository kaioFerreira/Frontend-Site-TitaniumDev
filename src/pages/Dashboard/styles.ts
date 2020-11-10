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
        
        > div {
            width: 100%;
            display: flex;

            > div {
                width: 100%;

                color: #FFFF;
                padding: 0 220px;
                margin-top: 150px;

                h1 {
                    margin-bottom: 10px;
                }
                div {
                    display: flex;
                    svg {
                    
                    }
                    span {
                        font-weight: 400;
                        font-size: 14px;
                        margin-left: 10px;
                    }
                }
                
            }
        }
    }
    
`;
