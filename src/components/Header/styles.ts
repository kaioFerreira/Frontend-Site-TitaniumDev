import styled from 'styled-components';


export const SubHeader = styled.div<MobMenuUserProps>`
    transition: all 0.3s ease;
    height: 54px;   
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
        transform: ${({ isVisible }) => isVisible ? "translate3d(0,0px,0)" : "translate3d(0,-50px,0)" };
    }
`;

interface MobMenuUserProps {
    isVisible: Boolean;
}

export const MobSubHeader = styled.div<MobMenuUserProps>`

    transition: all 0.3s ease;
    svg {
        margin-right: 20px;
    }

    button {
        border: none;
        background: none;
    }

    height: 54px;   
    width: 90%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: none;
    justify-content: flex-end;
    transform: ${({ isVisible }) => isVisible ? "translate3d(0,0px,0)" : "translate3d(0,-50px,0)" };
    opacity: ${({ isVisible }) => isVisible ? 1 : 0 };
    z-index: -100;
    @media (max-width: 900px) {
        display: flex;
        
    }
`;

export const SubHeaderDiv = styled.div`

    height: 100%;   
    width: 90%;
    box-sizing: border-box;
    

    
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        svg {
            height: 23px;
            width: 23px;  
            cursor: default;  
            margin-right: 5px;
        }
        span {
            font-size: 14px;
            color: #ffffffad;
        }
        h1 {
            font-weight: 700;
            margin: 0 8px 0 5px;
            font-size: 22px;
        }
    }
    > ul {
        display: flex;
        align-items: center;
        li {
            transition: all 0.3ms ease;
            cursor: pointer;
            border-radius: 8px;
            &:hover {
                background-color:  #f3f6f947;
            }
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            margin-right: 10px;
            list-style: none;
            svg {
                width: 18px;
                height: 18px;
                color: #FFFFFF;
            }
        }
        > div {
            color: #FFFFFF;

            span {
                font-weight: 400;
                font-size: 13px;
            }
            strong {
                font-weight: 700;
            }
        }
        button {
            width: 40px;
            height: 40px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            
            margin-right: 10px;
            padding: 10px;
            background-color: #f3f6f947;
            margin-left: 14px;
            border-radius: 8px;
            width: 40px;
            height: 40px;
            svg {
                width: 24px;
                height: 24px;
            }
        }
    }
    @media (max-width: 900px) {
        ul {
            li {
                
                display: none;
                
            }
            > div {
                span {
                    display: none;
                }
            }
        }
    }
`;

export const Container = styled.div`

    svg {
        cursor: pointer;
    }
    position: fixed;
    top: 0;
    right: 0;
    height: 80px;
    width: 100vw;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;

    transition: all 0.3s ease;
`;

export const RigthNav = styled.div`
    display: flex;
    svg {
        margin-right: 20px;
    }

    button {
        border: none;
        background: none;
    }

    @media (max-width: 900px) {
        justify-content: flex-end;
        width: 40%;
        > button {
           display: none;
        }
    }
`;

export const MobMenuRigth = styled.div`
    display: none;
    align-items: center;
    > svg {
        display: none;
    }

    @media (max-width: 900px) {
        display: flex;
        > svg {
           display: block;
        }
    }
`;

export const LeftNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    button {
        border: none;
        background: none;
    }

    > ul {
        width: 295px;
    }
    
    box-sizing: border-box;
    img {
        width: 60px;
        margin: 0 30px;
    }

    Input {
        background-color: #F3F6F9;
        box-sizing: border-box;
        border: 0;
        color: #3F4254;    
        font-weight: 400;
        line-height: 1.5;
        font-size: 1rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    align-items: center;

    height: 100%;
    width: 90%;
`;

interface MenuLeftProps {
    isVisible: Boolean;
}

interface MenuSearchProps {
    isVisible: Boolean;
}

export const MenuLeft = styled.div<MenuLeftProps>`
    transition: all 0.3s ease;

    box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
    
    position: fixed;
    top: 0;
    left: ${({ isVisible }) => isVisible ? "0px" : "-295px" };
    bottom: 0;
    height: 100%;

    background: white;
    color: #3F4254;
    z-index: 1001;
    
    svg {
        width: 24px;
    }
    
    div {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        z-index: -1101;
        background: rgba(0, 0, 0, 0.1);
    }
    ul {
        
        z-index: 1101;
        box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
        background: #ffffff;
        width: 295px;
        height: 100%;
        margin: 0;
        list-style: none;
        padding: 15px 0;

        box-sizing: border-box;
        
        a {
            transition: all 0.3s ease;
            &:hover {
                color: #0050cd;
                background-color: #F3F6F9;
            }
            
            &:hover svg g path {
                fill: #9baeff;
            }

            &:hover svg g rect + rect {
                fill: #9baeff;
            }

            cursor: pointer;
            padding: 9px 25px;
            min-height: 44px;
            display: flex;
            align-items: center;

            text-decoration: none;
            position: relative;
            color: #3F4254;
            
            svg {
                margin-right: 20px;
            }

            span {
                font-weight: 400;
                font-size: 15px;
            }
        }

        li {
            transition: all 0.3s ease;
            align-items: center;
            position: relative;
            margin: 0;
            flex-direction: column;
            flex-grow: 1;
            list-style: none;

            h4 {
                font-size: 10px;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.3px;
                margin-left: 30px;
                margin-top: 15px;
                margin-bottom: 15px;
                align-items: center;
            }
        }
    }

    > svg {
        width: 24px;
        margin-right: 15px;
    }
`;

export const MenuSearch = styled.div<MenuSearchProps>`
    transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;

    box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
    
    position: fixed;
    top: 0;
    right: ${({ isVisible }) => isVisible ? "0px" : "-350px" };
    bottom: 0;
    height: 100%;

    background: white;
    color: #3F4254;
    z-index: 1101;


    > svg {
        width: 24px;
    }
    
    
    > ul {
        overflow-y: scroll;
        z-index: 1101;
        box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
        background: #ffffff;
        width: 350px;
        height: 100%;
        margin: 0;
        list-style: none;
        padding: 15px 30px;
        display: flex;
        flex-direction: column;

        box-sizing: border-box;
        span {
            margin-bottom: 50px;
            color: #0050cd;
            font-weight: 700;
            font-size: 12px;
        }
        > section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 10px;
            h3 {
                small {
                    color: #B5B5C3;
                    font-size: 14px;
                    margin-left: 10px;
                    font-weight: 400;
                }
                font-weight: 700;
            }
            a {
                text-decoration: none;
                transition: all 0.3s ease;
                &:hover {
                    background-color: #002ccd6b;
                }
                &:hover svg {
                    color: #FFFF;
                }

                display: flex;
                justify-content: center;
                align-items: center;
                height: 24px;
                width: 24px;
                color: #7E8299;
                background-color: #F3F6F9;
                border-radius: 4px;
                svg {
                    box-sizing: border-box;
                    margin-right: 0px;
                }
            }
        }

        nav {
            display: flex;
            align-items: center;
            margin-top: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #EBEDF3;
            
            input {
                color: #7E8299;
                font-weight: 500;
                border: 0;
            }
        }
        > ul {
            margin-top: 30px;
            li {
                margin-top: 10px;
                display: flex;
                justify-content: start;
                align-items: center;

                div {
                    margin-left: 10px;
                    a {
                        text-decoration: none;
                        &:hover {
                            color: #0050cd;
                        }
                        font-size: 13px;
                        color: #181C32;
                        cursor: pointer;
                        font-weight: 700;
                    }
                    p {
                        font-size: 14px;
                        color: #B5B5C3;
                    }
                }

                img {
                    height: 30px;
                    width: 30px;
                }
            }
        }
    }

    > div {
        position: fixed;
        top: 0;
        right: 0;
        z-index: -1000;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    svg {
        width: 24px;
        margin-right: 15px;
    }
`;

interface QuickActionsProps {
    isVisible: Boolean;
}

export const QuickActions = styled.div<QuickActionsProps>`
    > section {
        z-index: 1101;
        transition: ${({ isVisible }) => isVisible ? "all 0.3s ease" : "all 0s ease" };
        display: block;
        background-color: #FFFFFF;
        position: absolute;
        margin-top: 80px;
        margin-left: -400px;
    
        opacity: ${({ isVisible }) => isVisible ? "1" : "0" };
    
        transform: ${({ isVisible }) => isVisible ? "translate3d(0,0,0)" : "translate3d(0,10px,0)" };
        list-style: none;
        box-sizing: border-box;
        color: #3F4254;
        border-radius: 10px;

        width: 400px;
        display: flex;
        flex-direction: column;

        div {
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 100%;
            background-color: #3E58C9;
            height: 140px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            h1 {
                color: #FFFF;
                font-weight: 700;
                font-size: 23px;
                margin-bottom: 12px;
            }

            a {
                background-color: #1BC5BD;
                padding: 8px 10px;
                border-radius: 8px;
                text-decoration: none;
                color: #FFFF;
                font-size: 12px;
            }
        }

        ul {
            font-family: Poppins, Helvetica, "sans-serif";
            display: flex;
            flex-wrap: wrap;
            li {
                &:hover {
                    background-color: #F3F6F9 !important;
                }

                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                width: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 30px;

                transition: all 0.15s ease;
                cursor: pointer;
                border: 0.9px solid #EBEDF3;

                img {
                    height: 40px;
                    width: 40px;
                }

                h1 {
                    margin-top: 12px;
                    font-size: 18px;
                    font-weight: 500;
                }

                p {
                    margin-top: 7px;
                    color: #7E8299;
                }
            }
        }
    }    

    > div {
        position: fixed;
        top: 0;
        right: 0;

        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 900px) {
        > section {
            margin-top: 117px;
            width: 270px;
            margin-left: -50%;

            div {
                h1 {
                    font-size: 20px;
                }
                a {
                    font-size: 9px;
                }
            }

            ul {
                li {
                    img {
                        height: 35px;
                        width: 35px;
                    }
                    h1 {
                        font-size: 12px;
                    }
                    p {
                        font-size: 9px;
                        margin-top: 0;
                    }
                }
            }
        }
    }
`;

export const User = styled.div`
    transition: all 0.15s ease;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #FFFF;
    padding: 5px 9px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.1);
        border-color: transparent;
    }

    span {
        font-size: 15px;
        & + span {
            font-weight: 700;
        }
    }

    button {
        color: #FFFF;
        font-weight: 700;
        padding: 10px;
        background-color: #f3f6f947;
        margin-left: 14px;
        border-radius: 8px;
        width: 40px;
        height: 40px;
    }
`;

export const Profile = styled.div<ProfileUserProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    padding: 30px 30px;

    img {
        border-radius: 8px;
        width: 60px;
    }

    h1 {
        color: #181C32;
        margin-right: 60px;
        font-size: 1.25rem;
        font-weight: 400;
        font-family: Poppins, Helvetica, "sans-serif";
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        font-size: 12px;
        color: #1BC5BD;
        background-color: #C9F7F5;
        padding: 0.9rem 0.75rem;
        border-radius: 0.42rem;
    }
`;

interface ProfileUserProps {
    isVisible: Boolean;
}

export const ProfileUser = styled.div<ProfileUserProps>`
    display: flex;
    > section {
        top: 80px;

        cursor: default;
        z-index: 1101;
        transition: ${({ isVisible }) => isVisible ? "all 0.3s ease" : "all 0s ease" };
        display: ${({ isVisible }) => isVisible ? "block" : "none" };
        background-color: #FFFFFF;
        position: absolute;
        
        margin-left: -400px;
    
        opacity: ${({ isVisible }) => isVisible ? "1" : "0" };
    
        transform: ${({ isVisible }) => isVisible ? "translate3d(0,0,0)" : "translate3d(0,10px,0)" };
        list-style: none;
        box-sizing: border-box;
        color: #3F4254;
        border-radius: 10px;

        width: 400px;
        display: flex;
        flex-direction: column;

        > div {
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: space-between;
            align-items: center;
            
            margin-bottom: 10px;
            border-bottom: 1px solid #EBEDF3;

            h3 {
                small {
                    color: #B5B5C3;
                    font-size: 14px;
                    margin-left: 10px;
                    font-weight: 400;
                }
                font-weight: 700;
            }
            a {
                transition: all 0.3s ease;
                &:hover {
                    background-color: #0050cd;
                }

                display: flex;
                justify-content: center;
                align-items: center;
                height: 24px;
                width: 24px;
                color: #7E8299;
                background-color: #F3F6F9;
                border-radius: 4px;
                svg {
                    box-sizing: border-box;
                    margin-right: 0px;
                }
            }
        }

        ul {
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            flex-wrap: wrap;
            align-items: center;
            justify-content: start;
            padding: 0 20px;
            border-bottom: 1px solid #EBEDF3;

            li {
                padding: 0.75rem 1.5rem;
                width: 100%;
                list-style: none;
                display: flex;
                align-items: center;

                img {
                    height: 18px;
                    width: 18px;
                }

                div {
                    margin-left: 20px;
                    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                    flex-direction: column;
                    align-items: start;
                    justify-content: center;

                    a {
                        &:hover {
                            color: #6993FF;
                        }
                        cursor: pointer;
                        color: #3F4254;
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
                    p {
                        color: #B5B5C3;
                        span {
                            color: #F64E60;
                            background-color: #FFE2E5;
                            padding: 0.15rem 0.75rem;
                            border-radius: 0.42rem;
                            margin-left: 4px;
                            font-size: 0.8rem;
                            height: 20px;
                            font-weight: 500;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }  

        nav {
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: space-around;
            padding: 20px;
            
            a {
                cursor: pointer;
                color: #6993FF;
                background-color: #E1E9FF;
                transition: all 0.15s ease;
                font-weight: 700;
                padding: 0.65rem 1rem;
                user-select: none;
                font-size: 13px;
                text-decoration: none;
                border-radius: 0.42rem;

                & + a {
                    font-weight: normal;
                    color: #B5B5C3;
                    background-color: transparent;
                    &:hover {
                        color: #6993FF;
                        background-color: #F3F6F9;
                    }
                }

                &:hover {
                    color: #FFFFFF;
                    background-color: #6993FF;
                }
            }
        }
    }

    > div {
        position: fixed;
        top: 0;
        right: 0;

        cursor: default;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 900px) {
        > section {
            margin-top: 53px;
            width: 300px;
            margin-left: -57%;
            > ul {
                li {
                    img {
                        height: 25px;
                        width: 25px;
                    }
                    div {
                        p {
                            font-size: 10px;
                        }
                    }
                }
            }
            > div {
                h1 {
                    margin-right: 15px;
                }
            }
        }
    }
    
`;

interface UserNotificationsProps {
    isVisible: Boolean;
}

export const UserNotifications = styled.div<UserNotificationsProps>`
    > section {
        z-index: 1101;
        transition: ${({ isVisible }) => isVisible ? "all 0.3s ease" : "all 0s ease" };
        background-color: #FFFFFF;
        position: absolute;
        margin-top: 80px;
        margin-left: -400px;
    
        opacity: ${({ isVisible }) => isVisible ? "1" : "0" };
    
        transform: ${({ isVisible }) => isVisible ? "translate3d(0,0,0)" : "translate3d(0,10px,0)" };
        list-style: none;
        box-sizing: border-box;
        color: #3F4254;
        border-radius: 10px;

        width: 400px;
        display: flex;
        flex-direction: column;

        > div {
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            border-bottom: 5px solid #E4E6EF;
            width: 100%;
            background-color: #3E58C9;
            height: 140px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            h1 {
                display: flex;
                align-items: center;
                color: #FFFF;
                font-weight: 700;
                font-size: 23px;
                margin-bottom: 12px;
                span {
                    font-size: 11px;
                    padding: 10px;
                    background-color: #1BC5BD;
                    border-radius: 8px;
                    margin-left: 10px;
                }
            }

            > div {
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: flex-end;

                button {
                    color: #ffffff9e;
                    padding: 20px;
                    font-size: 12px;
                    font-weight: 700;
                    border-bottom-color: rgba(255, 255, 255, 0.7);

                    &:hover {
                        color: #FFFF;
                    }
                }
            }
        }

        > ul {
            font-family: Poppins, Helvetica, "sans-serif";
            display: flex;
            flex-wrap: wrap;
            li {
                &:hover {
                    background-color: #F3F6F9 !important;
                }

                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                width: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 30px;

                transition: all 0.15s ease;
                cursor: pointer;
                border: 0.9px solid #EBEDF3;

                img {
                    height: 40px;
                    width: 40px;
                }

                h1 {
                    margin-top: 12px;
                    font-size: 18px;
                    font-weight: 500;
                }

                p {
                    margin-top: 7px;
                    color: #7E8299;
                }
            }
        }
    }    

    > div {
        position: fixed;
        top: 0;
        right: 0;

        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 900px) {
        > section {
            margin-top: 117px;
            width: 270px;
            margin-left: -50%;

            div {
                h1 {
                    font-size: 15px;
                    span {
                        padding: 6px;
                        font-size: 8px;
                    }
                }

                div {
                    button {
                        font-size: 10px;
                    }
                }
            }

            > ul {
                li {
                    img {
                        width: 35px;
                        height: 35px;
                    }
                    div {
                        a {
                            font-size: 12px;
                        }
                        p {
                            font-size: 11px;
                        }
                    }
                }
            }
        }
        
    }
`;

interface AlertNotificationProps {
    isVisible: Boolean;
}

export const AlertNotification = styled.section<AlertNotificationProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #FFFF;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    > ul {
        overflow-y: scroll;
        max-height: 300px;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        li {
            padding: 10px 30px;
            margin-top: 10px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: start;
            align-items: center;

            img {
                width: 30px;
                height: 30px;
            }

            div {
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 10px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 13px;
                    color: #181C32;
                    cursor: pointer;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }
        }
    }
`;

interface EventsNotificationProps {
    isVisible: Boolean;
}

export const EventsNotification = styled.section<EventsNotificationProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #FFFF;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    > ul {
        overflow-y: scroll;
        max-height: 300px;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        li {
            padding: 10px 30px;
            margin-top: 10px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: start;
            align-items: center;

            img {
                width: 30px;
                height: 30px;
            }

            div {
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 10px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 13px;
                    color: #181C32;
                    cursor: pointer;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }
        }
    }
`;

interface LogsNotificationProps {
    isVisible: Boolean;
}

interface QuickPanelProps {
    isVisible: Boolean;
    PAL: Boolean;
    PN: Boolean;
    PS: Boolean;
}

export const QuickPanel = styled.div<QuickPanelProps>`
    transition: left 0.3s ease, right 0.3s ease, bottom 0.3s ease, top 0.3s ease;

    box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
    
    position: fixed;
    top: 0;
    right: ${({ isVisible }) => isVisible ? "0px" : "-395px" };
    bottom: 0;
    height: 100%;

    background: white;
    color: #3F4254;
    z-index: 1101;
    
    .btn-qp-al {
        color: ${({ PAL }) => PAL ? "#6993FF" : "#7E8299" };
        border-bottom: ${({ PAL }) => PAL ? "#6993FF 3px solid" : "#6993ff00 3px solid"};
    }

    .btn-qp-n {
        color: ${({ PN }) => PN ? "#6993FF" : "#7E8299" };
        border-bottom: ${({ PN }) => PN ? "#6993FF 3px solid" : "#6993ff00 3px solid"};
    }

    .btn-qp-s {
        color: ${({ PS }) => PS ? "#6993FF" : "#7E8299" };
        border-bottom: ${({ PS }) => PS ? "#6993FF 3px solid" : "#6993ff00 3px solid"};
    }

    > section {
        
        z-index: 1101;
        box-shadow: 0px 1px 9px -3px rgba(0, 0, 0, 0.75);
        background: #ffffff;
        width: 395px;
        height: 100%;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        > div {
            border-bottom: 3px solid #E4E6EF;
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            > div {
                margin-top: 10px;
                > button {
                    padding: 0.85rem 0;
                    font-size: 15px;
                    font-weight: 500;
                    margin: 0 1rem -3px 1rem;
                }
            }

            > button {
                color: #7E8299;
                background-color: #F3F6F9;
                border-color: #F3F6F9;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 24px;
                width: 24px;
                border-radius: 0.42rem;
                user-select: none;
                transition: all 0.15s ease;
                &:hover {
                    background-color: #6993FF;
                }

                svg {
                    margin: 0;
                }
            }

        }
    }

    > div {
        position: fixed;
        top: 0;
        right: 0;
        z-index: -1000;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
    }

    
`;

interface AuditLogsProps {
    isVisible: Boolean;
}

export const AuditLogsSystem = styled.section<AuditLogsProps>`
    > ul {
        > span {
            color: #3F4254;
            font-weight: 700;
            font-size: 15px;
        }
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        li {

            > span {
                background-color: #F3F6F9;
                border-color: #F3F6F9;
                cursor: pointer;
                transition: all 0.15s ease;
                color: #7E8299;
                font-weight: 500;
                padding: 0.55rem 0.75rem;
                font-size: 12px;
                border-radius: 0.42rem;
            }

            margin-top: 15px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            
            .c-default {
                cursor: default;
                width: 50px;
                height: 50px;
                margin-left: 0;
            }
            
            div + span {
                padding: 5px 10px;
                &:hover {
                    background-color: #7e829945;
                }
            }
            span {
                margin-left: auto;
                    
                img {
                    width: 30px;
                    height: 30px;
                }
            }

            div {
                width: 166px;
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 10px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 12px;
                    color: #3F4254;
                    cursor: pointer;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    text-decoration: none;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }   
        }
    }
    @media (max-width: 900px) {
        > ul {
            li {
                div {
                    a {
                        font-size: 12px;
                    }

                    span {
                        font-size: 10px;
                    }
                }
            }
        }
    }
    
`;

export const AuditLogsNotifications = styled.section<AuditLogsProps>`

    .bc-1 {
        background-color: #FFF4DE;
        span {
           
        }
        path {
            fill: #FFA800;
        }
        path + rect {
            fill: #FFA800;
        }
        div + span {
            color: #FFA800;
            font-weight: 700;
        }
    }
    .bc-2 {
        background-color: #C9F7F5;
        span {
           
        }
        path {
            fill: #1BC5BD;
        }
        path + rect {
            fill: #1BC5BD;
        }
        div + span {
            color: #1BC5BD;
            font-weight: 700;
        }
    }
    .bc-3 {
        background-color: #FFE2E5;
        span {
           
        }
        path {
            fill: #F64E60;
        }
        path + rect {
            fill: #F64E60;
        }
        div + span {
            color: #F64E60;
            font-weight: 700;
        }
    }
    .bc-4 {
        background-color: #EEE5FF;
        span {
           
        }
        path {
            fill: #8950FC;
        }
        path + rect {
            fill: #8950FC;
        }
        div + span {
            color: #8950FC;
            font-weight: 700;
        }
    }
    > ul {
        > span {
            margin-top: 40px;
            color: #3F4254;
            font-weight: 700;
            font-size: 15px;
        }
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        li {

            > span {
                
                width: auto;
                height: auto;
                cursor: pointer;
                transition: all 0.15s ease;
                color: #7E8299;
                font-weight: 500;
                padding: 0.55rem 0.75rem;
                font-size: 14px;
                border-radius: 0.42rem;
            }

            margin-top: 15px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            
            padding: 10px;
            border-radius: 4px;
            .c-default {
                cursor: default;
                margin-left: 0;
            }
            
            span {
                margin-left: auto;
                    
                svg {
                    cursor: default;
                    height: 20px;
                    width: 20px;
                }
            }

            div {
                width: 166px;
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 10px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 14px;
                    color: #3F4254;
                    cursor: pointer;
                    font-weight: 400;
                    margin-bottom: 0.25rem;
                    text-decoration: none;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }
        }
    }
`;

export const AuditLogs = styled.section<AuditLogsProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #FFFF;
    flex-direction: column;
    overflow-y: scroll;
    padding: 15px 30px;
    padding-top: 230px;
    
    @media (max-width: 900px) {
        padding-top: 60px;
        
    }
`;

export const LogsNotification = styled.section<LogsNotificationProps>`

    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #FFFF;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    > ul {
        overflow-y: scroll;
        max-height: 300px;
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;

        li {
            padding: 10px 30px;
            margin-top: 10px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: start;
            align-items: center;

            img {
                width: 30px;
                height: 30px;
            }

            div {
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 10px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 13px;
                    color: #181C32;
                    cursor: pointer;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }
        }
    }
`;

interface QPNotificationsProps {
    isVisible: Boolean;
}

export const QPNotifications = styled.section<QPNotificationsProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #FFFF;
    flex-direction: column;
    overflow-y: scroll;
    padding: 15px 40px;

    > ul {
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        flex-wrap: wrap;
        padding-top: 204px;
        li {

            margin-top: 20px;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            
            span {
                    
                img {
                    width: 20px;
                    height: 20px;
                }
            }

            div {
                
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                flex-direction: column;
                margin-left: 20px;
                a {
                    &:hover {
                        color: #0050cd;
                    }
                    font-size: 12px;
                    color: #3F4254;
                    cursor: pointer;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    text-decoration: none;
                }
                p {
                    font-size: 14px;
                    color: #B5B5C3;
                }
            }
        }
    }

   @media (max-width: 900px) {
       > ul {
            margin-top: 30px;
            padding-top: 0;
       }
   }
    
`;

interface QPSettingsProps {
    isVisible: Boolean;
    qpsNotification: Boolean;
    qpsTracking: Boolean;
    qpsPortal: Boolean;
    qpsReports: Boolean;
    qpsExport: Boolean;
    qpsCollection: Boolean;
    qpsSingup: Boolean;
    qpsFeedback: Boolean;
    qpsCPortal: Boolean;
}

export const QPSettings = styled.section<QPSettingsProps>`
    display: ${({ isVisible }) => isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #FFFF;
    flex-direction: column;
    overflow-y: scroll;
    padding: 15px 40px;
    justify-content: space-around;
    height: 100vh;

    .qps-active-cportal {
        background-color: #6993FF;
        div {
            left: ${({ qpsCPortal }) => qpsCPortal ? "15px" : "0"};
            background-color: ${({ qpsCPortal }) => qpsCPortal ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-feedback {
        background-color: #6993FF;
        div {
            left: ${({ qpsFeedback }) => qpsFeedback ? "15px" : "0"};
            background-color: ${({ qpsFeedback }) => qpsFeedback ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-singup {
        background-color: #6993FF;
        div {
            left: ${({ qpsSingup }) => qpsSingup ? "15px" : "0"};
            background-color: ${({ qpsSingup }) => qpsSingup ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-collection {
        background-color: #F64E60;
        div {
            left: ${({ qpsCollection }) => qpsCollection ? "15px" : "0"};
            background-color: ${({ qpsCollection }) => qpsCollection ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-export {
        background-color: #F64E60;
        div {
            left: ${({ qpsExport }) => qpsExport ? "15px" : "0"};
            background-color: ${({ qpsExport }) => qpsExport ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-reports {
        background-color: #F64E60;
        div {
            left: ${({ qpsReports }) => qpsReports ? "15px" : "0"};
            background-color: ${({ qpsReports }) => qpsReports ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-notification {
        div {
            left: ${({ qpsNotification }) => qpsNotification ? "15px" : "0"};
            background-color: ${({ qpsNotification }) => qpsNotification ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-tracking {
        div {
            left: ${({ qpsTracking }) => qpsTracking ? "15px" : "0"};
            background-color: ${({ qpsTracking }) => qpsTracking ? "#FFFF" : "#ffffffa6"};
        }
    }

    .qps-active-portal {
        div {
            left: ${({ qpsPortal }) => qpsPortal ? "15px" : "0"};
            background-color: ${({ qpsPortal }) => qpsPortal ? "#FFFF" : "#ffffffa6"};
        }
    }

    > div {
        display: ${({ isVisible }) => isVisible ? "flex" : "none" };
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        flex-direction: column;
        h5 {
            font-size: 17px;
            font-weight: 500;
        }
        section {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            div{
                h1 {
                   
                    font-weight: 400;
                }
                margin-top: 15px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                
                div {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    

                    margin: 2px 0;
                    height: 24px;
                    width: 40px;
                    border-radius: 12px;
                    background-color: #1BC5BD;
                    padding: 2px;

                    div {
                        transition: all 0.3s ease;
                        position: relative;
                        margin: 2px 0;
                        height: 20px;
                        width: 20px;
                        border-radius: 12px;
                        background-color: #F1F1F1;
                    }
                    
                }
                    
            }
        }
        
    }
    
`;



