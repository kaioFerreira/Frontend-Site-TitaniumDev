import React, { useState} from 'react';

import { 
    Conteiner, 
    Body,
    ConteinerFooter,
    FooterFixo,
    FooterAnimado1,
    FooterAnimado2
} from './styles';

import { 
    BsFillGearFill, 
    BsInfo,
    BsFillPersonFill,
    BsStopwatch,
    BsHammer,
    BsNewspaper,
    BsBook,
    BsPlus
} from 'react-icons/bs';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const Acompanhamento: React.FC = () => {
    const [visibleFixo, setVisibleFixo] = useState(false);
    const [visibleAnimado1, setVisibleAnimado1] = useState(false);
    const [visibleAnimado2, setVisibleAnimado2] = useState(false);

    const [clickAnimado1, setClickAnimado1] = useState(false);
    const [clickAnimado2, setClickAnimado2] = useState(false);

    function handleClickAnimado1(){
        setClickAnimado1(!clickAnimado1);
    }

    function handleClickAnimado2(){
        setClickAnimado2(!clickAnimado2);
    }

    function handleVisibleFixo(){
        setVisibleFixo(true);
        setVisibleAnimado1(false);
        setVisibleAnimado2(false);
    }

    function handleVisibleAnimado1(){
        setVisibleFixo(false);
        setVisibleAnimado1(true);
        setVisibleAnimado2(false);
    }

    function handleVisibleAnimado2(){
        setVisibleFixo(false);
        setVisibleAnimado1(false);
        setVisibleAnimado2(true);
    }

    return (
        
        <Conteiner>
            <Header/>
            <Body>
                <section>
                    
                </section>

                <div>
                    <section>
                        <a onClick={handleVisibleFixo}>FIXO</a>
                        <a onClick={handleVisibleAnimado1}>Animado 01</a>
                        <a onClick={handleVisibleAnimado2}>Animado 02</a>
                    </section>
                    
                    <span>Acompanhamento</span>
                </div>

            </Body>
            <ConteinerFooter>

                <FooterFixo isVisible={visibleFixo}>
                    <ul>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Anexar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Garantias
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Acompanhamento
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsFillGearFill/>
                                Alterar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsInfo size={20}/>
                                Informações do Autor
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <BsFillPersonFill/>
                                Responsáveis
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Audiência
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsHammer/>
                                Jurimetria
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsNewspaper/>
                                Sentença
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsBook/>
                                Agenda
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Histórico
                            </Link>
                        </li>
                    </ul>
                </FooterFixo>

                <FooterAnimado1 isVisible={visibleAnimado1}  isClick={clickAnimado1}>
                    
                    <ul>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Anexar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Garantias
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Acompanhamento
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsFillGearFill/>
                                Alterar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsInfo size={20}/>
                                Informações do Autor
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <BsFillPersonFill/>
                                Responsáveis
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Audiência
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsHammer/>
                                Jurimetria
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsNewspaper/>
                                Sentença
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsBook/>
                                Agenda
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Histórico
                            </Link>
                        </li>
                    </ul>
                    <a onClick={handleClickAnimado1}>
                        <BsFillGearFill size={25}/>
                    </a>
                </FooterAnimado1>

                <FooterAnimado2 isVisible={visibleAnimado2}  isClick={clickAnimado2}>
                    
                    <ul>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Anexar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Garantias
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsPlus size={18}/>
                                Acompanhamento
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsFillGearFill/>
                                Alterar Processo
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsInfo size={20}/>
                                Informações do Autor
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <BsFillPersonFill/>
                                Responsáveis
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Audiência
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsHammer/>
                                Jurimetria
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsNewspaper/>
                                Sentença
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsBook/>
                                Agenda
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsStopwatch/>
                                Histórico
                            </Link>
                        </li>
                    </ul>
                    <a onClick={handleClickAnimado2}>
                        <BsFillGearFill size={20}/>
                    </a>
                </FooterAnimado2>
            </ConteinerFooter>

        </Conteiner>
    )};

export default Acompanhamento;