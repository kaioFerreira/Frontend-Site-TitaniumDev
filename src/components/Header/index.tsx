import React, { useState, HtmlHTMLAttributes } from 'react';
import {
GrFormClose
} from 'react-icons/gr';

import { Link } from 'react-router-dom';
import { TiDownload } from 'react-icons/ti';
import { RiPagesLine } from 'react-icons/ri';
import { 
    BsDot, 
    BsCollectionFill, 
    BsTextRight, 
    BsFillXDiamondFill 
} from 'react-icons/bs';

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
QuickPanel,
AuditLogs,
AuditLogsSystem,
AuditLogsNotifications,
QPNotifications,
QPSettings,
RigthNav,
SubHeader,
SubHeaderDiv,
MobMenuRigth,
MobSubHeader,
SubHeaderMob
} from './styles';

import Logo from '../../assets/logo.png';
import Doc from '../../assets/doc.png';
import Pdf from '../../assets/Pdf.png';
import Xml from '../../assets/Xml.png';

import Plurk from '../../assets/svg/006-plurk.svg';
import Telegram from '../../assets/svg/015-telegram.svg';
import Puzzle from '../../assets/svg/003-puzzle.svg';
import Bebo from '../../assets/svg/005-bebo.svg';
import Kickstarter from '../../assets/svg/014-kickstarter.svg';

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
        const [visibleQuickPanel, setVisibleQuickPanel] = useState(false);
        const [visibleMobUserMenu, setVisibleMobUserMenu] = useState(false);


        const [visibleAuditLogs, setVisibleAuditLogs] = useState(true);
        const [visibleQPNotifications, setVisibleQPNotifications] = useState(false);
        const [visibleQPSettings, setVisibleQPSettings] = useState(false);

        
        const [activeQPNotification, setActiveQPNotification] = useState(false);
        const [activeQPTracking, setActiveQPTracking] = useState(false);
        const [activeQPPortal, setActiveQPPortal] = useState(false);

        const [activeQPSReports, setActiveQPSReports] = useState(false);
        const [activeQPSExport, setActiveQPSExport] = useState(false);
        const [activeQPSCollection, setActiveQPSCollection] = useState(false);

        const [activeQPSSingup, setActiveQPSSingup] = useState(false);
        const [activeQPSFeedback, setActiveQPSFeedback] = useState(false);
        const [activeQPSCPortal, setActiveQPSCPortal] = useState(false);

        
        function handleVisibleMobUserMenu(){
            setVisibleMobUserMenu(!visibleMobUserMenu);
        }

        function handleQPSCPortal(){
            setActiveQPSCPortal(!activeQPSCPortal);
        }

        function handleQPSFeedback(){
            setActiveQPSFeedback(!activeQPSFeedback);
        }

        function handleQPSSingup(){
            setActiveQPSSingup(!activeQPSSingup);
        }

        function handleQPSExport(){
            setActiveQPSExport(!activeQPSExport);
        }

        function handleQPSCollection(){
            setActiveQPSCollection(!activeQPSCollection);
        }

        function handleQPSReports(){
            setActiveQPSReports(!activeQPSReports);
        }

        function handleQPPortal(){
            setActiveQPPortal(!activeQPPortal);
        }

        function handleQPSNotification(){
        setActiveQPNotification(!activeQPNotification);
        }

        function handleQPTracking(){
        setActiveQPTracking(!activeQPTracking);
        }

        function handleVisibleAuditLogs(){
        setVisibleAuditLogs(true);
        setVisibleQPSettings(false);
        setVisibleQPNotifications(false);
        }

        function handleVisibleQPNotifications(){
        setVisibleQPNotifications(true);
        setVisibleAuditLogs(false);
        setVisibleQPSettings(false);
        }
        function handleVisibleQPSettings(){
        setVisibleQPNotifications(false);
        setVisibleAuditLogs(false);
        setVisibleQPSettings(true);
        }

        function handleVisibleQuickPanel(){
        setVisibleQuickPanel(!visibleQuickPanel);
        }

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
                                <Link to="#">
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
                                </Link>
                            </li>
                            <li>
                                <h4>CUSTOM</h4>
                            </li>
                            <li>
                                <Link to="#">
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
                                </Link>
                            </li>
                            <li>
                                <h4>LAYOUT</h4>
                            </li>
                            <li>
                                <Link to="#">
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
                                </Link>
                            </li>

                            <li>
                                <h4>FEATURES</h4>
                            </li>
                            <li>
                                <Link to="#">
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
                                </Link>
                            </li>
                        </ul>
                        { visibleMenu && <div onClick={handleVisibleMenu}></div> }
                    </MenuLeft>

                    <button className="disable-mbl" onClick={handleVisibleMenu}>
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
                    

                    <ToolBlock></ToolBlock>

                </LeftNav>
                <RigthNav>

                    <MenuSearch isVisible={visibleSearch}>
                        <ul>
                            <section>
                                <h3>Search
                                    <small>files, reports, members</small>
                                </h3>
                                <Link to="#" onClick={handleVisibleSearch}>
                                <GrFormClose />
                                </Link>
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
                                        <Link to="#">AirPlus Requirements</Link>
                                        <p>by Grog John</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Pdf} alt="PDF" />
                                    <div>
                                        <Link to="#">TechNav Documentation</Link>
                                        <p>by Mary Broun</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Xml} alt="XML" />
                                    <div>
                                        <Link to="#">All Framework Docs</Link>
                                        <p>by Nick Stone</p>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <span>MEMBERS</span>
                                <li>
                                    <img src={Milena} alt="Milena Gibson" />
                                    <div>
                                        <Link to="#">Milena Gibson</Link>
                                        <p>UI Designer</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Meliodas} alt="Stefan JohnStefan" />
                                    <div>
                                        <Link to="#">Stefan JohnStefan</Link>
                                        <p>Marketing Manager</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Ban} alt="Nick Bold" />
                                    <div>
                                        <Link to="#">Nick Bold</Link>
                                        <p>Project Coordinator</p>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <span>FILES</span>
                                <li>
                                    <img src={File1} alt="79 PSD files generated" />
                                    <div>
                                        <Link to="#">79 PSD files generated</Link>
                                        <p>by Grog John</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={File2} alt="$2900 worth products sold" />
                                    <div>
                                        <Link to="#">$2900 worth products sold</Link>
                                        <p>Total 234 items</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={File3} alt="4 New items submitted" />
                                    <div>
                                        <Link to="#">4 New items submitted</Link>
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
                        <span>Quick search</span>
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
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                </ul>
                            </AlertNotification>

                            <EventsNotification isVisible={visibleEventsNotifications}>
                                <ul>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">New report has been received</Link>
                                            <p>23 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Finance report has been generated</Link>
                                            <p>25 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">New order has been received</Link>
                                            <p>2 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">System reboot has been successfully completed</Link>
                                            <p>12 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Finance report has been generated</Link>
                                            <p>25 hrs ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Doc} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">New user feedback received</Link>
                                            <p>8 hrs ago</p>
                                        </div>
                                    </li>
                                </ul>
                            </EventsNotification>

                            <LogsNotification isVisible={visibleLogsNotifications}>
                                <ul>
                                    <li>
                                        <img src={Pdf} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
                                            <p>PHP, SQLite, Artisan CLIмм</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={Xml} alt="Briviba SaaS" />
                                        <div>
                                            <Link to="#">Briviba SaaS</Link>
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
                        <span>User Notifications</span>
                    </button>

                    <QuickActions isVisible={visibleQuick}>
                        <section>
                            <div>
                                <h1>Quick Actions</h1>
                                <Link to="#">23 tasks pending</Link>
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
                        <span>Quick Actions</span>
                    </button>

                    <QuickPanel isVisible={visibleQuickPanel} PAL={visibleAuditLogs} PN={visibleQPNotifications} PS={visibleQPSettings}>
                        <section>
                            <div>
                                <div>
                                    <button className="btn-qp-al" onClick={handleVisibleAuditLogs}>Audit Logs</button>
                                    <button className="btn-qp-n" onClick={handleVisibleQPNotifications}>Notifications</button>
                                    <button className="btn-qp-s" onClick={handleVisibleQPSettings}>Settings</button>
                                </div>
                                <button onClick={handleVisibleQuickPanel}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                        height="1em" width="1em">
                                        <path fill="none" stroke="#000" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7">
                                        </path>
                                    </svg>
                                </button>
                            </div>

                            <AuditLogs isVisible={visibleAuditLogs}>
                                <AuditLogsSystem isVisible={visibleAuditLogs}>
                                    <ul>
                                        <span>System Messages</span>
                                        <li>
                                            <span className="c-default">
                                                <img src={Plurk} alt="Documento" />
                                            </span>
                                            <div>
                                                <Link to="#">Top Authors</Link>
                                                <p>Most Successful Fellas</p>
                                            </div>
                                            <span>+82$</span>
                                        </li>
                                        <li>
                                            <span className="c-default">
                                                <img src={Telegram} alt="PDF" />
                                            </span>
                                            <div>
                                                <Link to="#">Popular Authors</Link>
                                                <p>Most Successful Fellas</p>
                                            </div>
                                            <span>+280$</span>
                                        </li>
                                        <li>
                                            <span className="c-default">
                                                <img src={Puzzle} alt="XML" />
                                            </span>
                                            <div>
                                                <Link to="#">New Users</Link>
                                                <p>Most Successful Fellas</p>
                                            </div>
                                            <span>+4500$</span>
                                        </li>
                                        <li>
                                            <span className="c-default">
                                                <img src={Bebo} alt="XML" />
                                            </span>
                                            <div>
                                                <Link to="#">Active Customers</Link>
                                                <p>Most Successful Fellas</p>
                                            </div>
                                            <span>+4500$</span>
                                        </li>
                                        <li>
                                            <span className="c-default">
                                                <img src={Kickstarter} alt="XML" />
                                            </span>
                                            <div>
                                                <Link to="#">Bestseller Theme</Link>
                                                <p>Most Successful Fellas</p>
                                            </div>
                                            <span>+4500$</span>
                                        </li>
                                    </ul>
                                
                                </AuditLogsSystem>
                                <AuditLogsNotifications isVisible={visibleAuditLogs}>
                                    <ul>
                                        <span>Notifications</span>
                                        <li className="bc-1">
                                            <span className="c-default">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Home-/-Library" stroke="none"
                                                        stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <path
                                                            d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                                            id="Combined-Shape" fill="#000000"></path>
                                                        <rect id="Rectangle-Copy-2" fill="#000000" opacity="0.3"
                                                            transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                                                            x="16.3255682" y="2.94551858" width="3" height="18" rx="1">
                                                        </rect>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div>
                                                <Link to="#">Another purpose persuade</Link>
                                                <p>Due in 2 Days</p>
                                            </div>
                                            <span>+28%</span>
                                        </li>
                                        <li className="bc-2">
                                            <span className="c-default">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Communication-/-Write" stroke="none"
                                                        stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <path
                                                            d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                            id="Path-11" fill="#000000" fill-rule="nonzero"
                                                            transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) ">
                                                        </path>
                                                        <path
                                                            d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                            id="Path-57" fill="#000000" fill-rule="nonzero"
                                                            opacity="0.3"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div>
                                                <Link to="#">Would be to people</Link>
                                                <p>Due in 2 Days</p>
                                            </div>
                                            <span>+50%</span>
                                        </li>
                                        <li className="bc-3">
                                            <span className="c-default">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-Communication-/-Group-chat" stroke="none"
                                                        stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <path
                                                            d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                                            id="Combined-Shape" fill="#000000"></path>
                                                        <path
                                                            d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                                            id="Combined-Shape" fill="#000000" opacity="0.3"></path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div>
                                                <Link to="#">Purpose would be to persuade</Link>
                                                <p>Due in 2 Days</p>
                                            </div>
                                            <span>-27%</span>
                                        </li>
                                        <li className="bc-4">
                                            <span className="c-default">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                    <g id="Stockholm-icons-/-General-/-Attachment2" stroke="none"
                                                        stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                        <path
                                                            d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                                                            id="Combined-Shape" fill="#000000" opacity="0.3"
                                                            transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) ">
                                                        </path>
                                                        <path
                                                            d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                                                            id="Combined-Shape-Copy" fill="#000000"
                                                            transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) ">
                                                        </path>
                                                        <path
                                                            d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                                                            id="Combined-Shape" fill="#000000" opacity="0.3"
                                                            transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) ">
                                                        </path>
                                                        <path
                                                            d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                                                            id="Combined-Shape-Copy-2" fill="#000000" opacity="0.3"
                                                            transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) ">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div>
                                                <Link to="#">The best product</Link>
                                                <p>Due in 2 Days</p>
                                            </div>
                                            <span>+8%</span>
                                        </li>
                                    </ul>
                                </AuditLogsNotifications>
                            </AuditLogs>

                            <QPNotifications isVisible={visibleQPNotifications}>

                                <ul>
                                    <li>
                                        <span>
                                            <img src={Plurk} alt="Documento" />
                                        </span>
                                        <div>
                                            <Link to="#">5 new user generated report</Link>
                                            <p>Reports based on sales</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Telegram} alt="PDF" />
                                        </span>
                                        <div>
                                            <Link to="#">2 new items submited</Link>
                                            <p>by Grog John</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Puzzle} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">79 PSD files generated</Link>
                                            <p>Reports based on sales</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Bebo} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">$2900 worth producucts sold</Link>
                                            <p>Total 234 items</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Kickstarter} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">4.5h-avarage response time</Link>
                                            <p>Fostest is Barry</p>
                                        </div>
                                    </li>

                                    <li>
                                        <span>
                                            <img src={Plurk} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">3 Defence alerts</Link>
                                            <p>40% less alerts thar last week</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Bebo} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">Avarage 4 blog posts per author</Link>
                                            <p>Most posted 12 time</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Puzzle} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">16 authors joined last week</Link>
                                            <p>9 photodrapehrs, 7 designer</p>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <span>
                                            <img src={Plurk} alt="Documento" />
                                        </span>
                                        <div>
                                            <Link to="#">2 new items have been submited</Link>
                                            <p>by Grog John</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Telegram} alt="PDF" />
                                        </span>
                                        <div>
                                            <Link to="#">2.8 GB-total downloads size</Link>
                                            <p>Mostly PSD end AL concepts</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Puzzle} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">$2900 worth producucts sold</Link>
                                            <p>Total 234 items</p>
                                        </div>
                                    </li>

                                    <li>
                                        <span>
                                            <img src={Kickstarter} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">7 new user generated report</Link>
                                            <p>Reports based on sales</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <img src={Telegram} alt="XML" />
                                        </span>
                                        <div>
                                            <Link to="#">4.5h-avarage response time</Link>
                                            <p>Fostest is Barry</p>
                                        </div>
                                    </li>
                                </ul>

                            </QPNotifications>
                       
                            <QPSettings 
                                isVisible={visibleQPSettings} 
                                qpsNotification={activeQPNotification} 
                                qpsTracking={activeQPTracking} 
                                qpsPortal={activeQPPortal}
                                qpsReports={activeQPSReports}
                                qpsExport={activeQPSExport}
                                qpsCollection={activeQPSCollection}
                                qpsFeedback={activeQPSFeedback}
                                qpsSingup={activeQPSSingup}
                                qpsCPortal={activeQPSCPortal}
                                >
                                <div>
                                    <h5>Customer Care</h5>
                                    <section>
                                        <div>
                                            <h1>Enable Notifications:</h1>
                                            <div className="qps-active-notification" onClick={handleQPSNotification}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Enable Case Tracking:</h1>
                                            <div className="qps-active-tracking" onClick={handleQPTracking}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Support Portal:</h1>
                                            <div className="qps-active-portal" onClick={handleQPPortal}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div>
                                    <h5>Reports</h5>
                                    <section>
                                        <div>
                                            <h1>Generate Reports:</h1>
                                            <div className="qps-active-reports" onClick={handleQPSReports}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Enable Report Export:</h1>
                                            <div className="qps-active-export" onClick={handleQPSExport}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Allow Data Collection:</h1>
                                            <div className="qps-active-collection" onClick={handleQPSCollection}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div>
                                    <h5>Members</h5>
                                    <section>
                                        <div>
                                            <h1>Enable Member singup:</h1>
                                            <div className="qps-active-singup" onClick={handleQPSSingup}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Allow User Feedbacks:</h1>
                                            <div className="qps-active-feedback" onClick={handleQPSFeedback}>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1>Enable Customer Portal:</h1>
                                            <div className="qps-active-cportal" onClick={handleQPSCPortal}>
                                                <div></div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            </QPSettings>
                        </section>

                        { visibleQuickPanel && <div onClick={handleVisibleQuickPanel}></div> }
                    </QuickPanel>
                    <button onClick={handleVisibleQuickPanel}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g id="Stockholm-icons-/-Layout-/-Layout-4-blocks" stroke="none" stroke-width="1"
                                fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <rect id="Rectangle-7" fill="#FFFFFF" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                                <path
                                    d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                    id="Combined-Shape" fill="#FFFFFF" opacity="0.3"></path>
                            </g>
                        </svg>
                        <span>Quick Panel</span>
                    </button>

                    <User  onClick={handleVisibleProfileUser}>
                        <span className="disable-mbl">Hi,</span>
                        <span className="disable-mbl">Kaio</span>
                        <button className="disable-mbl">K</button>

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
                                            <Link to="#">My Profile</Link>
                                            <p>Account settings and more
                                                <span>update</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconMessages} alt="My Messages" />
                                        <div>
                                            <Link to="#">My Messages</Link>
                                            <p>Inbox and tasks</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconActivities} alt="My Activities" />
                                        <div>
                                            <Link to="#">My Activities</Link>
                                            <p>Logs and notifications</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src={IconTask} alt="My Tasks" />
                                        <div>
                                            <Link to="#">My Tasks</Link>
                                            <p>latest tasks and projects</p>
                                        </div>
                                    </li>
                                </ul>
                                <nav>
                                    <Link to="/Home">Sign Out</Link>
                                    <Link to="#">Upgrade Plan</Link>
                                </nav>
                            </section>
                            { visibleProfileUser && <div onClick={handleVisibleProfileUser}></div> }
                        </ProfileUser>
                    </User>
                
                    <MobMenuRigth isVisible={visibleMobUserMenu}>
                        <BsTextRight onClick={handleVisibleMenu} size={30} color="#ffff"></BsTextRight>
                        <button onClick={handleVisibleMobUserMenu}>
                            <BsFillXDiamondFill color="#FFFF" size={30}/>
                        </button>

                    </MobMenuRigth>
                </RigthNav>
            </Nav>
            <MobSubHeader isVisible={visibleMobUserMenu}>
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

                <button onClick={handleVisibleQuickPanel}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="Stockholm-icons-/-Layout-/-Layout-4-blocks" stroke="none" stroke-width="1"
                            fill="none" fill-rule="evenodd">
                            <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                            <rect id="Rectangle-7" fill="#FFFFFF" x="4" y="4" width="7" height="7" rx="1.5"></rect>
                            <path
                                d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                id="Combined-Shape" fill="#FFFFFF" opacity="0.3"></path>
                        </g>
                    </svg>
                </button>

                <User onClick={handleVisibleProfileUser}>
                    <span>Hi,</span>
                    <span>Kaio</span>
                    <button>K</button>
                </User>
            
            </MobSubHeader>
            <SubHeader isVisible={visibleMobUserMenu}>
                <SubHeaderDiv >
                    <div>
                        <h1>Dashboard</h1>
                        <BsDot color="#ffffffad"/>
                        <span>Settings</span>
                    </div>
                    <ul>
                        <li>
                            <RiPagesLine/>
                        </li>
                        <li>
                            <TiDownload/>
                        </li>
                        <li>
                            <BsCollectionFill/>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#FFFF"></path>
                                </g>
                            </svg>
                        </li>
                        <div>
                            <span> Today: <strong>Nov 23</strong></span>
                        </div>
                        <button>
                            <svg viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#FFFF"></path>
                                </g>
                            </svg>
                        </button>

                    </ul>
                </SubHeaderDiv>
                <SubHeaderMob>
                    <ul>
                        <li>
                            <RiPagesLine/>
                        </li>
                        <li>
                            <TiDownload/>
                        </li>
                        <li>
                            <BsCollectionFill/>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#FFFF"></path>
                                </g>
                            </svg>
                        </li>
                        <div>
                            <span> Today: <strong>Nov 23</strong></span>
                        </div>
                        <button>
                            <svg viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#FFFF"></path>
                                </g>
                            </svg>
                        </button>

                    </ul>
                </SubHeaderMob>
            </SubHeader>
            
        </Container>
        )
        };

        export default Header;
