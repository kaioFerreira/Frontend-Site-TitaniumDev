import styled, { css } from 'styled-components'



export const  Container = styled.div`
    background: #F3F6F9;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;

    border: 2px solid #F3F6F9;
    color: #666360;

    & + div {
        margin-top: 8px;
    }
    
    input {
        color: #3F4254;
        flex: 1;
        background: transparent;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
