import React from 'react';

import { Conteiner } from './styles';
import { Link } from 'react-router-dom';
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

const Acompanhamento: React.FC = () => {

return (
    <Conteiner>
        <ul>
            <li>
                <Link to="">
                    <BsPlus size={18}/>
                    Anexar Processo
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsPlus size={18}/>
                    Garantias
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsPlus size={18}/>
                    Acompanhamento
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsFillGearFill/>
                    Alterar Processo
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsInfo size={20}/>
                    Informações do Autor
                </Link>
            </li>

            <li>
                <Link to="">
                    <BsFillPersonFill/>
                    Responsáveis
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsStopwatch/>
                    Audiência
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsHammer/>
                    Jurimetria
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsNewspaper/>
                    Sentença
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsBook/>
                    Agenda
                </Link>
            </li>
            <li>
                <Link to="">
                    <BsStopwatch/>
                    Histórico
                </Link>
            </li>
        </ul>
    </Conteiner>
)};

export default Acompanhamento;