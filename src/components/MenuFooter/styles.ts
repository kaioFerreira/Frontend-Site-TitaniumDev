import styled from 'styled-components';

export const Conteiner = styled.div`
    position: fixed;
    bottom: 10px;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    ul {
        list-style: none;
        display: flex;
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