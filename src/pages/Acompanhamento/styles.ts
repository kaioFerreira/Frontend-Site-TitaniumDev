import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    > section {
        height: 250px;
        width: 100%;
        background-image: url(${Background});
    }
`;

export const LinkPoints = styled.div`
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 40px;

    border-radius: 6px;

    margin-top: 20px;

    font-weight: 400;
    font-size: 14px;
    svg {
        margin: 0 10px;
    }
    a {
        text-decoration: none;
        color: #00000042;
        font-style: none;
        &:hover {
            cursor: pointer;
            font-size: 16px;
            color: #000000ad;
            font-weight: 700;

        }
    }
    
    @media (max-width: 900px) {
        font-size: 12px;
    }

    @media (max-width: 560px) {
        display: none;
    }
`;

export const Autos = styled.div`
    max-width: 1000px;
    width: 90%;
    height: fit-content;

    box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
    border: 1px solid #EBEDF3;
    background-color: #FFFF;
    border-radius: 6px;

    margin: 10px;
    margin-bottom: 12.5px;
    padding: 30px;

    display: flex;
    flex-wrap: wrap;

    h1 {
        font-weight: 700;
        font-family: 'Roboto'; 
    }
    h1,h3 {
        width: 100%;
    }
    h3 {
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 15px;
        margin-top: -5px;
        color: #B5B5C3;
    }
    div {
        font-family: "Open Sans",sans-serif;
        
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;

        width: 50%;
        font-size: 14px;
        strong {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 10px;
            font-weight: 500;
            width: 100%;
            border-left: solid 1px #C0C0C0;

            span {
                margin-left: 5px;
                font-weight: 400;
                font-style: italic;
            }
            h5 {
                margin-left: 5px;
                font-weight: 400;
                font-style: italic;
                color: red;
                font-size: 14px;
            }
        }
    }
    @media (max-width: 900px) {
        > div {
            width: 100%;
            strong {
                font-weight: 700;
                font-size: 12px;
            }
        }
    }
`;

export const Partes = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    section {
        height: fit-content;

        margin: 12.5px 0;

        margin-right: 12.5px;

        & + section {
            margin-right: 0;
            margin-left: 12.5px;
        }
        width: 40%;
        min-width: 365px;
        box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
        border: 1px solid #EBEDF3;
        background-color: #FFFF;
        border-radius: 6px;

        padding: 30px;
        
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;

        h1 {
            font-weight: 700;
        }
        h2 {
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: 700;
        }
        h1,h3 {
            width: 100%;
        }
        
        h3 {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 15px;
            margin-top: -5px;
            color: #B5B5C3;
        }
        
        div {
            font-family: "Open Sans",sans-serif;
            
            & + div {
                margin-left: 0;
            }
            
            display: flex;
            align-content: center;
            justify-content: center;
            flex-wrap: wrap;

            width: 100%;
            font-size: 14px;
            strong {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding-left: 10px;
                font-weight: 500;
                width: 100%;
                border-left: solid 1px #C0C0C0;

                span {
                    margin-left: 5px;
                    font-weight: 400;
                    font-style: italic;
                }
                h5 {
                    margin-left: 5px;
                    font-weight: 400;
                    font-style: italic;
                    color: red;
                    font-size: 14px;
                }
            }
        }
    }

    @media (max-width: 854px) { 
        section {
            width: 100%;
            margin-right: 0px;
            min-width: fit-content;
            & + section {
                margin-left: 0;
            }
            > div {
            width: 100%;
            strong {
                    font-weight: 700;
                    font-size: 12px;
                }
            }
            
        }
    }
`;

export const OutrasInformacoes = styled.div`

    max-width: 1000px;
    width: 90%;
    height: fit-content;

    box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
    border: 1px solid #EBEDF3;
    background-color: #FFFF;
    border-radius: 6px;

    margin: 10px;
    margin-bottom: 12.5px;
    padding: 30px;

    display: flex;
    flex-wrap: wrap;

    h1 {
        font-weight: 700;
    }
    h1,h3 {
        width: 100%;
    }
    h3 {
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 15px;
        margin-top: -5px;
        color: #B5B5C3;
    }
    div {
        font-family: "Open Sans",sans-serif;
        
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;

        width: 50%;
        font-size: 14px;
        strong {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            padding-left: 10px;
            font-weight: 500;
            width: 100%;
            border-left: solid 1px #C0C0C0;

            span {
                margin-left: 5px;
                font-weight: 400;
                font-style: italic;
            }
            h5 {
                margin-left: 5px;
                font-weight: 400;
                font-style: italic;
                color: red;
                font-size: 14px;
            }
        }
    }

    @media (max-width: 900px) {
        > div {
            width: 100%;
            strong {
                    font-weight: 700;
                    font-size: 12px;
                }
            }
        }
    }
`;

export const Movimentacoes = styled.div`

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

    h1 {
        font-weight: 700;
    }

    h3 {
        font-weight: 400;
        font-size: 12px;
        margin-bottom: 15px;
        margin-top: -5px;
        color: #B5B5C3;
    }

    > div {
        width: 100%;
        height: fit-content;
    }
`; 