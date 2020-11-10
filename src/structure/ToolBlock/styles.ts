import styled from 'styled-components';

interface ToolProps {
    isVisible: Boolean;
    inVisible: Boolean;
}

export const Block = styled.div<ToolProps>`

    div {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        z-index: 1001;
        background: rgba(0, 0, 0, 0.1);
    }

    > ul {
        z-index: 1101;
        transition: ${({ inVisible }) => inVisible ? "all 0s ease" : "all 0.3s ease" };
        display: block;
        background-color: #FFFFFF;
        position: absolute;
        margin-top: 80px;

        opacity: ${({ isVisible }) => isVisible ? "1" : "0" };

        transform: ${({ isVisible }) => isVisible ? "translate3d(0,0,0)" : "translate3d(0,10px,0)" };
        list-style: none;
        box-sizing: border-box;
        color: #3F4254;
        padding: 20px 0px;
        border-radius: 5px;

        > li {
            list-style: none;
            display: ${({ isVisible }) => isVisible ? "flex" : "none" };

            svg {
                width: 25px;
                height: 25px;
                color: #8c8c8c;
            }

            &:hover section {
                opacity: 1;
                transform: translate3d(0,0,0);
                z-index: 1500;
            }
            &:hover {
                background-color: #F3F6F9;
            }
            &:hover > a {
                color: #6993FF;
            }

            &:hover > a section svg g path {
                fill: #6993FF;
            }

            &:hover > a section svg g rect + rect {
                fill: #6993FF;
            }
            
            > section {
                z-index: 1101;
                transition: all 0.3s ease;
                background-color: #FFFFFF;
                position: absolute;
                display: block;

                box-shadow: 0px 15px 50px 0px rgba(82, 63, 105, 0.15);
                left: 282px;
                
                opacity: 0;
                transform: translate3d(0,10px,0);
                box-sizing: border-box;
                color: #3F4254;
                padding: 20px 10px;
                border-radius: 4px;

                > ul {
                    
                    
                    > li {
                        display: flex;
                        align-items: center;
                        width: 250px;
                        
                        a {
                            cursor: pointer;
                            padding: 11px 10px;
                            text-decoration: none;
                            position: relative;
                            color: #3F4254;

                            font-weight: 400;
                            font-size: 14px;
                        }

                        &:hover svg path {
                            fill: #6993FF;
                        }

                        &:hover a {
                            color: #6993FF;
                        }
                    }
                }
            }
            > a {
                cursor: pointer;
                padding: 11px 30px;
                min-height: 44px;
                display: ${({ isVisible }) => isVisible ? "flex" : "none" };
                justify-content: space-between;
                align-items: center;
                width: 280px;

                section {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        margin-right: 20px;
                        
                    }
                }
                
                text-decoration: none;
                position: relative;
                color: #3F4254;

                span {
                    font-weight: 500;
                    font-size: 14px;
                }
            }
            
        }
    }
`;

export const  Container = styled.div`
    
`;
