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

    tbody {
        tr {
            &:hover {
                cursor: pointer;
                background: #e8e8e8;
            }
        }
    }
`;

interface DadosUserProps {
    isVisible: Boolean;
    activeUser: Boolean;
    activeCredenciaisUser: Boolean;
}

export const DadosUser = styled.div<DadosUserProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: calc(50% - 450px);
    width: 900px;
    box-sizing: border-box;


    section {
        z-index: 1101;
        border-radius: 5px;

    }
    .conteiner {
        border-radius: 5px;
        background: #FFFF;
        width: 100%;
        padding: 15px;
        height: 520px;

        > div {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
            button {
                outline-style: none;
                font-size: 12px;
                color: #fff;
                background-color: #384ad7;
                border: 1px solid transparent;
                border-radius: 4px;
                padding: 8px 10px;

                &:not(:last-child) {
                    margin-right: 15px;
                    background-color: transparent;
                    color: #6c7293;
                    border: 1px solid #e2e5ec;
                }
                svg {
                    margin-right: 5px;
                }
            }
        }
    }
    .div-topo {
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1 {
                font-weight: 250;
                font-size: 22px;
            }
            svg {
                cursor: pointer;
                color: #ff0000;
            }
        }
    }
    .conteiner-dados {
        display: flex;
        padding: 17px;
        height: 400px;
        overflow-y: scroll;
        background: #f8f8f8;
    }

    .div-nav {
        background: #FFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        height: 450px;
        margin: 0 15px 0 0;

        > div {
            display: flex;
            width: 120px;
            height: 120px;
            align-items: center;
            justify-content: center;
            background: #ccb5c4;
            font-size: 40px;
            font-weight: bold;
            color: #FFF;
            padding-top: 9%;
            position: relative;
            div {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: -10px;
                background: #FFFF;
                right: -10px;
                width: 30px;
                height: 30px;
                border-radius: 50%;

                &:hover {
                    
                    background-color: #6c5173;
                    svg {
                        path {
                            transition: all 0.3s;
                            color: #FFFF;
                        }
                    }
                }
            }
        }

        h2 {
            text-align: center;
            font-size: 14px;
            color: #464457;
            font-weight: 400;
            padding: 10px 0;
        }

        > section {
            transition: all 0.3s ease;
            border: 2px solid #dee3eb;
            width: 54px;
            height: 31px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            padding: 2px;

            position: relative;
            div {
                transition: all 0.3s ease;
                position: absolute;
                left: ${({ activeUser }) => activeUser ? "24px" : "1px" };
                cursor: pointer;
                background-color: #1dc9b7;
                color: #ffffff;
                height: 25px;
                border-radius: 50%;
                display: flex;
                width: 25px;
                align-items: center;
                justify-content: center;
            }
        }

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 25px;
            li {
                padding: 0 15px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 38px;
                margin: 2px 0px;
                border: 1px solid transparent;
                border-radius: 4px;
                background: #fafafa;
                color: #6c5173;
                div {
                    width: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    h3 {
                        font-weight: 400;
                        font-size: 12px;
                        margin: 0;
                    }
                }
                &:hover {
                    cursor: pointer;
                    background: #e8e8e8;
                }
            }
        }
    }
    
    .div-infos {
        background: #FFFF;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        > h1 {
            width: 100%;
            font-weight: 400;
        }
        > div {
            display: flex;
        }
    }
    .div-dataCadastro {
        padding: 20px 20px 0 0;
        h2 {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
            &:not(:first-child) {
                margin-top: 30px;
            }
        }
        div {
            padding: 0 10px;
            background-color: #f7f8fa;
            border: 1px solid #e2e5ec;
            border-radius: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 38px;
            min-width: 149px;
            width: fit-content;
            p {
                font-weight: 400;
                font-size: 11px;
                margin-bottom: 0;
            }
        }
    }
    .div-grupo {
        padding: 20px 20px 0 0;
        h2 {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
            &:not(:first-child) {
                margin-top: 30px;
            }
        }
        div {
            padding: 0 10px;
            background-color: #f7f8fa;
            border: 1px solid #e2e5ec;
            border-radius: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 38px;
            min-width: 149px;
            width: fit-content;
            p {
                font-weight: 400;
                font-size: 11px;
                margin-bottom: 0;
            }
        }
    }

    .div-areasAcesso {
        padding: 20px 20px 0 0;
        h2 {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
            &:not(:first-child) {
                margin-top: 30px;
            }
        }
        div {
            padding: 0 10px;
            background-color: #f7f8fa;
            border: 1px solid #e2e5ec;
            border-radius: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 38px;
            min-width: 149px;
            width: fit-content;
            p {
                font-weight: 400;
                font-size: 11px;
                margin-bottom: 0;
            }
        }
    }

    .div-extras {
        display: flex;
        flex-wrap: wrap;
        background: #FFFF;
        margin-left: -10px;
        padding: 10px;
        h2 {
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
            
            margin-top: 30px;
        }
        div {
            margin-right: 30px;
            div {
                padding: 0 10px;
                background-color: #f7f8fa;
                border: 1px solid #e2e5ec;
                border-radius: 4px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                height: 38px;
                min-width: 149px;
                width: fit-content;
                p {
                    font-weight: 400;
                    font-size: 11px;
                    margin-bottom: 0;
                }
            }
        }
        
    }
    .endereco {
        min-width: 366px;
        div {
            width: 100% !important;
        }
    }

    .div-credenciais {
        background: #FFFF;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        > h1 {
            width: 100%;
            font-weight: 400;
        }
        > h3 {
            width: 100%;
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
        }
        > div {
            padding: 0 10px;
            background-color: #f7f8fa;
            border: 1px solid #e2e5ec;
            border-radius: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 38px;
            min-width: 203px;
            width: fit-content;
            p {
                font-weight: 400;
                font-size: 11px;
                margin-bottom: 0;
            }
        }
        > h2 {
            width: 100%;
            font-weight: 400;
            margin-top: 30px;
        }
    }

    .div-atuacao {
        background: #FFFF;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        > h1 {
            width: 100%;
            font-weight: 400;
        }
    }

    .div-empresa {
        background: #FFFF;
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        > h1 {
            width: 100%;
            font-weight: 400;
        }
        > h3 {
            width: 100%;
            font-weight: 400;
            font-size: 12px;
            margin-bottom: 7px;
        }
        > div {
            padding: 0 10px;
            background-color: #f7f8fa;
            border: 1px solid #e2e5ec;
            border-radius: 4px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 38px;
            min-width: 203px;
            width: fit-content;
            p {
                font-weight: 400;
                font-size: 11px;
                margin-bottom: 0;
            }
        }
    }
    > div {
        cursor: default;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1001;
        width: 100%;
        height: 100%;
        background: rgb(0 0 0 / 38%);
    }

    .div-alterarSenha {
        display: flex;
        justify-content: flex-start;

        div {
            &:not(:last-child){
                margin-right: 20px;
            }
            h2 {
                font-weight: 400;
                font-size: 12px;
                margin-bottom: 7px;
            }
            div {
                padding: 0 10px;
                background-color: #f7f8fa;
                border: 1px solid #e2e5ec;
                border-radius: 4px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                height: 38px;
                min-width: 203px;
                width: fit-content;
                p {
                    font-weight: 400;
                    font-size: 11px;
                    margin-bottom: 0;
                }
            }
        }
    }

    .div-btnForce {
        section {
            transition: all 0.3s ease;
            border: 2px solid #dee3eb;
            width: 54px;
            height: 31px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            padding: 2px;

            position: relative;
            div {
                transition: all 0.1s ease;
                position: absolute;
                left: ${({ activeCredenciaisUser }) => activeCredenciaisUser ? "24px" : "1px" };
                cursor: pointer;
                background-color: ${({ activeCredenciaisUser }) => activeCredenciaisUser ? "#1dc9b7" : "#006e63cf" };
                color: #ffffff;
                height: 25px;
                border-radius: 50%;
                display: flex;
                width: 25px;
                align-items: center;
                justify-content: center;
            }
        }
        h2 {
            width: 100%;
            font-weight: 400;
            margin-top: 30px;
        }
    }

`;
