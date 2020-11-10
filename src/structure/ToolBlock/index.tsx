import React, { HtmlHTMLAttributes, useState } from 'react';
import {
Container,
Block
} from './styles';

import { RiArrowDropRightLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';

import Button from '../../components/Button';

type ToolsProps = HtmlHTMLAttributes<HTMLElement>;

    const Tools: React.FC<ToolsProps> = () => {
        const [visibleTools, setVisibleTools] = useState(false);

        function handleVisibleTools(){
            setVisibleTools(!visibleTools);
        }

        return (
        <Container>
            <Block isVisible={visibleTools} inVisible={!visibleTools}>
                <ul>
                    <li>
                        <a href="#">
                            <section>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-Design-/-Pen&amp;ruller" stroke="none" stroke-width="1"
                                        fill="none" fill-rule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                        <path
                                            d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                                            id="Combined-Shape" fill="#8c8c8c" opacity="0.3"></path>
                                        <path
                                            d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                                            id="Rectangle-102-Copy" fill="#8c8c8c"></path>
                                    </g>
                                </svg>
                                <span>Inputs</span>
                            </section>
                            <RiArrowDropRightLine/>
                        </a>
                        <section >
                            <ul>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Autocomplete</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Buttons</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Checkboxes</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Pickers</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Radio Buttons</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Selects</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Switches</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Text Fields</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Transfer List</a>
                                </li>
                            </ul>
                        </section>
                    </li>

                    <li>
                        <a href="#">
                            <section>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-Navigation-/-Arrow-from-left" stroke="none" stroke-width="1"
                                        fill="none" fill-rule="evenodd">
                                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                        <rect id="Rectangle" fill="#adadad" opacity="0.3"
                                            transform="translate(14.000000, 12.000000) rotate(-90.000000) translate(-14.000000, -12.000000) "
                                            x="13" y="5" width="2" height="14" rx="1"></rect>
                                        <rect id="Rectangle-199-Copy" fill="#8c8c8c" opacity="0.3" x="3" y="3" width="2"
                                            height="18" rx="1"></rect>
                                        <path
                                            d="M11.7071032,15.7071045 C11.3165789,16.0976288 10.6834139,16.0976288 10.2928896,15.7071045 C9.90236532,15.3165802 9.90236532,14.6834152 10.2928896,14.2928909 L16.2928896,8.29289093 C16.6714686,7.914312 17.281055,7.90106637 17.675721,8.26284357 L23.675721,13.7628436 C24.08284,14.136036 24.1103429,14.7686034 23.7371505,15.1757223 C23.3639581,15.5828413 22.7313908,15.6103443 22.3242718,15.2371519 L17.0300721,10.3841355 L11.7071032,15.7071045 Z"
                                            id="Path-94" fill="#8c8c8c" fill-rule="nonzero"
                                            transform="translate(16.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-16.999999, -11.999997) ">
                                        </path>
                                    </g>
                                </svg>
                                <span>Navigation</span>
                            </section>
                            <RiArrowDropRightLine/>
                        </a>
                        <section>
                            <ul>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Bottom Navigation</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Breadcrumbs</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Drawers</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">NavLinks</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Menus</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Steppers</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Taps</a>
                                </li>
                            </ul>
                        </section>
                    </li>

                    <li>
                        <a href="#">
                            <section>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-Layout-/-Layout-left-panel-1" stroke="none" stroke-width="1"
                                        fill="none" fill-rule="evenodd">
                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                        <rect id="Rectangle-7-Copy" fill="#8c8c8c" x="9" y="5" width="13" height="14"
                                            rx="1.5">
                                        </rect>
                                        <rect id="Rectangle-7-Copy-2" fill="#8c8c8c" opacity="0.3" x="2" y="5" width="5"
                                            height="14" rx="1"></rect>
                                    </g>
                                </svg>
                                <span>Surfaces</span>
                            </section>
                            <RiArrowDropRightLine/>
                        </a>
                        <section>
                            <ul>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">App Bar</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Paper</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Cards</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Expansion Panels</a>
                                </li>
                            </ul>
                        </section>
                    </li>

                    <li>
                        <a href="#">
                            <section>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g id="Stockholm-icons-/-General-/-Half-star" stroke="none" stroke-width="1" fill="none"
                                        fill-rule="evenodd">
                                        <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                        <path
                                            d="M12,4.25932872 C12.1488635,4.25921584 12.3000368,4.29247316 12.4425657,4.36281539 C12.6397783,4.46014562 12.7994058,4.61977315 12.8967361,4.81698575 L14.9389263,8.95491503 L19.5054023,9.61846284 C20.0519472,9.69788046 20.4306287,10.2053233 20.351211,10.7518682 C20.3195865,10.9695052 20.2170993,11.1706476 20.0596157,11.3241562 L16.7552826,14.545085 L17.5353298,19.0931094 C17.6286908,19.6374458 17.263103,20.1544017 16.7187666,20.2477627 C16.5020089,20.2849396 16.2790408,20.2496249 16.0843804,20.1472858 L12,18 L12,4.25932872 Z"
                                            id="Combined-Shape" fill="#8c8c8c" opacity="0.3"></path>
                                        <path
                                            d="M12,4.25932872 L12,18 L7.91561963,20.1472858 C7.42677504,20.4042866 6.82214789,20.2163401 6.56514708,19.7274955 C6.46280801,19.5328351 6.42749334,19.309867 6.46467018,19.0931094 L7.24471742,14.545085 L3.94038429,11.3241562 C3.54490071,10.938655 3.5368084,10.3055417 3.92230962,9.91005817 C4.07581822,9.75257453 4.27696063,9.65008735 4.49459766,9.61846284 L9.06107374,8.95491503 L11.1032639,4.81698575 C11.277344,4.464261 11.6315987,4.25960807 12,4.25932872 Z"
                                            id="Combined-Shape" fill="#8c8c8c"></path>
                                    </g>
                                </svg>
                                <span>Feedback</span>
                            </section>
                            <RiArrowDropRightLine/>
                        </a>
                        <section>
                            <ul>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Progress</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Dialogs</a>
                                </li>
                                <li>
                                    <BsDot size={20}/>
                                    <a href="#">Snackbars</a>
                                </li>
                            </ul>
                        </section>
                    </li>
                </ul>
                { visibleTools && <div onClick={handleVisibleTools}></div> }
            </Block>
            <Button onClick={handleVisibleTools}>Material UI</Button>

        </Container>
        )

        };

        export default Tools;
