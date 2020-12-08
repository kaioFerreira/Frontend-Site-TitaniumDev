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

    > section {
        height: 300px;
        width: 100%;
        background-image: url(${Background});
    }

    div {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 50vh;

        section {
            span {
                margin: 10px;
                cursor: pointer;
                background: #006aff;
                padding: 5px 10px;
                font-size: 12px;
                border-radius: 4px;
                text-decoration: none;
                color: #FFFF;
            }
        }
        span {
            font-size: 40px;
            font-weight: 700;
            color: black;
        }
    }
    
`;

export const ConteinerFooter = styled.div`
    position: fixed;
    bottom: 10px;
    right: 0;
    display: flex;
    justify-content: flex-end;
`;

interface FixoPros {
    isVisible: Boolean;
}

export const FooterFixo = styled.div<FixoPros>`
    ul {
        list-style: none;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        flex-wrap: wrap;
        width: 60vw;
        justify-content: space-around;
        box-sizing: border-box;
        margin-right: 10px;
        place-content: center;
        li {
            cursor: pointer;
            background: #006aff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            padding: 5px 10px;
            box-sizing: border-box;
            margin: 1px;
            a {
                color: #FFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

interface AnimadoPros {
    isVisible: Boolean;
    isClick: Boolean;
}

export const FooterAnimado1 = styled.div<AnimadoPros>`

    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    align-items: flex-end;
    > span {
        cursor: pointer;
        transition: 0.3s;
        margin-right: 20px;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #006aff;
        box-sizing: border-box;

        svg {
            color: #FFFF;
        }

        transform: ${({ isClick }) => isClick ? "rotate(0grad)" : "rotate(50grad)" };
    }
    ul {
        transition: 0.3s;
        list-style: none;
        display: flex;
        visibility: ${({ isClick }) => isClick ? "visible" : "hidden" };
        transform: ${({ isClick }) => isClick ? "translate3d(0,0,0)" : "translate3d(0,200px,0)" };

        flex-wrap: wrap;
        width: 60vw;
        justify-content: space-around;
        box-sizing: border-box;
        margin-right: 10px;
        place-content: center;
        li {
            cursor: pointer;
            background: #006aff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            padding: 5px 10px;
            box-sizing: border-box;
            margin: 1px;
            a {
                color: #FFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

interface Animado2Pros {
    isVisible: Boolean;
    isClick: Boolean;
}

export const FooterAnimado2 = styled.div<Animado2Pros>`

    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    align-items: flex-end;
    flex-direction: column;
    > span {
        cursor: pointer;
        transition: 0.3s;
        margin-right: 10px;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #006aff;
        box-sizing: border-box;

        svg {
            color: #FFFF;
        }

        transform: ${({ isClick }) => isClick ? "rotate(0grad)" : "rotate(50grad)" };
    }
    ul {
        transition: 0.3s;
        list-style: none;
        display: flex;
        visibility: ${({ isClick }) => isClick ? "visible" : "hidden" };
        transform: ${({ isClick }) => isClick ? "translate3d(0,0,0)" : "translate3d(200px,0,0)" };
        flex-direction: column;

        flex-wrap: wrap;
        
        justify-content: space-around;
        box-sizing: border-box;
        margin-right: 4px;
        margin-bottom: 4px;
        place-content: flex-end;
        li {
            align-self: flex-end;
            cursor: pointer;
            background: #006aff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            padding: 5px 10px;
            box-sizing: border-box;
            margin: 1px;
            width: max-content;
            a {
                color: #FFFF;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

