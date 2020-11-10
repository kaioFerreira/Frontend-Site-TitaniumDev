import React, { useState, HtmlHTMLAttributes } from 'react';
import {
GrMenu,
GrFormClose
} from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';

import Button from '../Button';
import ToolBlock from '../../structure/ToolBlock';
import {
Container,
Nav,
LeftNav,
MenuLeft,
MenuSearch,
QuickActions,
ProfileUser,
User,
Profile,
UserNotifications,
AlertNotification,
EventsNotification,
LogsNotification,
RigthNav
} from './styles';

import Logo from '../../assets/logo.png';
import Doc from '../../assets/doc.png';
import Pdf from '../../assets/Pdf.png';
import Xml from '../../assets/Xml.png';

import IconProfile from '../../assets/icons/my_profile.png';
import IconMessages from '../../assets/icons/messages.png';
import IconActivities from '../../assets/icons/rocket.png';
import IconTask from '../../assets/icons/tasks.png';

import Ban from '../../assets/Ban.jpg';
import Milena from '../../assets/Mia.jpg';
import Meliodas from '../../assets/Nanatsu.jpg';

import PhotoProfile from '../../assets/kaio.jpg';

import File1 from '../../assets/files.png';
import File2 from '../../assets/files2.png';
import File3 from '../../assets/files3.png';


import { boolean } from 'yup';
import { getAllByDisplayValue } from '@testing-library/react';

type HeaderProps = HtmlHTMLAttributes<HTMLElement>;

    const Header: React.FC <HeaderProps> = () => {
        const [visibleMenu, setVisibleMenu] = useState(false);
        const [visibleSearch, setVisibleSearch] = useState(false);
        const [visibleQuick, setVisibleQuick] = useState(false);
        const [visibleProfileUser, setVisibleProfileUser] = useState(false);
        const [visibleUserNotifications, setVisibleUserNotifications] = useState(false);
        const [visibleAlertNotifications, setVisibleAlertNotifications] = useState(false);
        const [visibleEventsNotifications, setVisibleEventsNotifications] = useState(false);
        const [visibleLogsNotifications, setVisibleLogsNotifications] = useState(false);

        function handleVisibleMenu(){
        setVisibleMenu(!visibleMenu);
        }

        function handleVisibleSearch(){
        setVisibleSearch(!visibleSearch);
        }

        function handleVisibleQuick(){
        setVisibleQuick(!visibleQuick);
        }

        function handleVisibleProfileUser(){
        setVisibleProfileUser(!visibleProfileUser);
        }

        function handleVisibleUserNotifications(){
        setVisibleUserNotifications(!visibleUserNotifications);
        setVisibleAlertNotifications(!visibleAlertNotifications);
        }

        function handleVisibleAlertNotifications(){
        setVisibleAlertNotifications(true);
        setVisibleEventsNotifications(false);
        setVisibleLogsNotifications(false);
        }

        function handleVisibleEventsNotifications(){
        setVisibleEventsNotifications(true);
        setVisibleLogsNotifications(false);
        setVisibleAlertNotifications(false);
        }

        function handleVisibleLogsNotifications(){
        setVisibleLogsNotifications(true);
        setVisibleAlertNotifications(false);
        setVisibleEventsNotifications(false);
        }

        return (
        <Container>
            <Nav>
                <LeftNav className="left-nav">

                    <MenuLeft isVisible={visibleMenu}>
                        <ul>
                            <li>
                                <a href="#">
                                    <svg width="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path
                                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                                fill="#8c8c8c" fill-rule="nonzero"></path>
                                            <path
                                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                                fill="#8c8c8c" opacity="0.3"></path>
                                        </g>
                                    </svg>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <h4>CUSTOM</h4>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                <rect fill="#8c8c8c" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                                <path
                                                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                                    fill="#8c8c8c" opacity="0.3"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>Applications</span>
                                </a>
                            </li>
                            <li>
                                <h4>LAYOUT</h4>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                <path
                                                    d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                                    fill="#8c8c8c"></path>
                                                <rect fill="#8c8c8c" opacity="0.3"
                                                    transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                                                    x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>Builder</span>
                                </a>
                            </li>

                            <li>
                                <h4>FEATURES</h4>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"></rect>
                                                <path
                                                    d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                                                    fill="#8c8c8c"></path>
                                                <path
                                                    d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                                                    fill="#8c8c8c" opacity="0.3"></path>
                                            </g>
                                        </svg>
                                    </span>
                                    <span>Bootstrap</span>
                                </a>
                            </li>
                        </ul>
                        { visibleMenu && <div onClick={handleVisibleMenu}></div> }
                    </MenuLeft>

                    <button onClick={handleVisibleMenu}>
                        <svg width="30px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="30" height="30"></rect>
                                <rect fill="#FFFFFF" opacity="0.3" x="4" y="5" width="16" height="2" rx="1"></rect>
                                <rect fill="#FFFFFF" opacity="0.3" x="4" y="13" width="16" height="2" rx="1"></rect>
                                <path
                                    d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                    fill="#FFFFFF"></path>
                            </g>
                        </svg>
                    </button>
                    <img src={Logo} alt="Logo" />
                    <Button>Dashboard</Button>

                    <ToolBlock />

                </LeftNav>
                <RigthNav>
                    <MenuSearch isVisible={visibleSearch}>
                        <ul>
                            <section>
                                <h3>Search
                                    <small>files, reports, members</small>
                                </h3>
                                <a onClick={handleVisibleSearch}>
                                    <GrFormClose />
                                </a>
                            </section>
                            <nav>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <path
                                            d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                            fill="#c7c8ce" fill-rule="nonzero" opacity="0.3"></path>
                                        <path
                                            d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                            fill="#989898" fill-rule="nonzero"></path>
                                    </g>
                                </svg>

                                <input type="text" placeholder="Search..." />
                            </nav>
                            <ul>
                                <span>DOCUMENTS</span>
                                <li>
                                    <img src={Doc} alt="Documento" />
                                    <div>
                                        <a>AirPlus Requirements</a>
                                        <p>by Grog John</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Pdf} alt="PDF" />
                                    <div>
                                        <a>TechNav Documentation</a>
                                        <p>by Mary Broun</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Xml} alt="XML" />
                                    <div>
                                        <a>All Framework Docs</a>
                                        <p>by Nick Stone</p>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <span>MEMBERS</span>
                                <li>
                                    <img src={Milena} alt="Milena Gibson" />
                                    <div>
                                        <a>Milena Gibson</a>
                                        <p>UI Designer</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Meliodas} alt="Stefan JohnStefan" />
                                    <div>
                                        <a>Stefan JohnStefan</a>
                                        <p>Marketing Manager</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Ban} alt="Nick Bold" />
                                    <div>
                                        <a>Nick Bold</a>
                                        <p>Project Coordinator</p>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <span>FILES</span>
                                <li>
                                    <img src={File1} alt="79 PSD files generated" />
                                    <div>
                                        <a>79 PSD files generated</a>
                                        <p>by Grog John</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={File2} alt="$2900 worth products sold" />
                                    <div>
                                        <a>$2900 worth products sold</a>
                                        <p>Total 234 items</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={File3} alt="4 New items submitted" />
                                    <div>
                                        <a>4 New items submitted</a>
                                        <p>Marketing Manager</p>
                                    </div>
                                </li>
                            </ul>
                        </ul>

                        { visibleSearch && <div onClick={handleVisibleSearch}></div> }
                    </MenuSearch>
                    <button onClick={handleVisibleSearch}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                    d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                    fill="#FFFFFF" fill-rule="nonzero" opacity="0.3"></path>
                                <path
                                    d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                    fill="#FFFFFF" fill-rule="nonzero"></path>
                            </g>
                        </svg>
                    </button>

                    <UserNotifications isVisible={visibleUserNotifications}>
                        <section>
                            <div>
                                <h1>
                                    User Notifications
                                    <span>23 News</span>
                                </h1>
                                <div>
                                    <button onClick={handleVisibleAlertNotifications}>Alerts</button>
                                    <button onClick={handleVisibleEventsNotifications}>Events</button>
                                    <button onClick={handleVisibleLogsNotifications}>Logs</button>
                                </div>
                            </div>
                            <AlertNotification isVisible={visibleAlertNotifications}>
                                <ul>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                </ul>
                            </AlertNotification>

                            <EventsNotification isVisible={visibleEventsNotifications}>
                                <ul>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>New report has been received</a>
                                            <p>23 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Finance report has been generated</a>
                                            <p>25 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>New order has been received</a>
                                            <p>2 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>System reboot has been successfully completed</a>
                                            <p>12 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Finance report has been generated</a>
                                            <p>25 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS"/>
                                        <div>
                                            <a>New user feedback received</a>
                                            <p>8 hrs ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </EventsNotification>

                            <LogsNotification isVisible={visibleLogsNotifications}>
                                <ul>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS"/>
                                        <div>
                                            <a>Briviba SaaS</a>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </LogsNotification>
                        </section>

                        { visibleUserNotifications && <div onClick={handleVisibleUserNotifications}></div> }
                    </UserNotifications>
                    <button onClick={handleVisibleUserNotifications}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g id="Stockholm-icons-/-Code-/-Compiling" stroke="none" stroke-width="1" fill="none"
                                fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path
                                    d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                                    id="Combined-Shape" fill="#FFFF" opacity="0.3"></path>
                                <path
                                    d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                                    id="Combined-Shape" fill="#FFFF"></path>
                            </g>
                        </svg>
                    </button>

                    <QuickActions isVisible={visibleQuick}>
                        <section>
                            <div>
                                <h1>Quick Actions</h1>
                                <a href="">23 tasks pending</a>
                            </div>
                            <ul>
                                <li>
                                    <img src={Pdf} alt="Files" />
                                    <h1>Accounting</h1>
                                    <p>eCommerce</p>
                                </li>
                                <li>
                                    <img src={Pdf} alt="Files" />
                                    <h1>Administration</h1>
                                    <p>Console</p>
                                </li>
                                <li>
                                    <img src={Pdf} alt="Files" />
                                    <h1>Projects</h1>
                                    <p>Pending Tasks</p>
                                </li>
                                <li>
                                    <img src={Pdf} alt="Files" />
                                    <h1>Customers</h1>
                                    <p>Latest cases</p>
                                </li>
                            </ul>
                        </section>

                        { visibleQuick && <div onClick={handleVisibleQuick}></div> }
                    </QuickActions>
                    <button onClick={handleVisibleQuick}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <rect fill="#FFFFFF" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5"></rect>
                                <rect fill="#FFFFFF" x="8" y="9" width="3" height="11" rx="1.5"></rect>
                                <rect fill="#FFFFFF" x="18" y="11" width="3" height="9" rx="1.5"></rect>
                                <rect fill="#FFFFFF" x="3" y="13" width="3" height="7" rx="1.5"></rect>
                            </g>
                        </svg>
                    </button>

                    <User>
                        <span>Hi,</span>
                        <span>Kaio</span>
                        <button onClick={handleVisibleProfileUser}>K</button>

                        <ProfileUser isVisible={visibleProfileUser}>
                            <section>
                                <Profile isVisible={visibleProfileUser}>
                                    <img src={PhotoProfile} alt="Kaio Souza" />
                                    <h1>Kaio Souza</h1>
                                    <span>3 messages</span>
                                </Profile>
                                <ul>
                                    <li>
                                        <img src={IconProfile} alt="My Profile" />
                                        <div>
                                            <a>My Profile</a>
                                            <p>Account settings and more
                                                <span>update</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconMessages} alt="My Messages" />
                                        <div>
                                            <a>My Messages</a>
                                            <p>Inbox and tasks</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconActivities} alt="My Activities" />
                                        <div>
                                            <a>My Activities</a>
                                            <p>Logs and notifications</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconTask} alt="My Tasks" />
                                        <div>
                                            <a>My Tasks</a>
                                            <p>latest tasks and projects</p>
                                        </div>
                                    </li>
                                </ul>
                                <nav>
                                    <a href="Home">Sign Out</a>
                                    <a href="">Upgrade Plan</a>
                                </nav>
                            </section>
                            { visibleProfileUser && <div onClick={handleVisibleProfileUser}></div> }
                        </ProfileUser>
                    </User>
                </RigthNav>
            </Nav>
        </Container>
        )
        };

        export default Header;
