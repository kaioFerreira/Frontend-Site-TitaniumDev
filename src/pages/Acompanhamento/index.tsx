import React from 'react';

import {
    BsDot
}
from 'react-icons/bs';

import { 
    Conteiner, 
    Body,
    LinkPoints,
    Autos,
    Partes,
    OutrasInformacoes,
    Movimentacoes
} from './styles';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

import Header from '../../components/Headers/HeaderAcompanhamento';
import { Link } from 'react-router-dom';

const Acompanhamento: React.FC = () => {
    return (
        
        <Conteiner>
            <Header/>
            <Body>
                <section/>

                <LinkPoints>
                    <BsDot/>
                        <Link to="#">AUTOS</Link>
                    <BsDot/>
                        <Link to="#">PARTE ATIVA</Link>
                    <BsDot/>
                        <Link to="#">PARTE PASSIVA</Link>
                    <BsDot/>
                        <Link to="#outrasInformacoes">OUTRAS INFORMAÇÕES</Link>
                    <BsDot/>
                        <Link to="#movimentacoes">MOVIMENTAÇÕES</Link>
                    <BsDot/>
                </LinkPoints>
            
                <Autos>
                    <h1 id="autos">AUTOS</h1>
                    <h3>Legenda de autos...</h3>
                    <div>
                        <strong>Número CNJ: <span>0800315-97.2017.8.14.0045</span></strong>
                        <strong>Origem: <span></span></strong>
                        <strong>Autor: <span>Arzivan Lopes Luz</span></strong>
                        <strong>Status: <h5>Arquivado Definitivamente</h5></strong>
                        <strong>Divisão: <span></span></strong>
                    </div>
                    <div>
                        <strong>Grau: <span></span></strong>
                        <strong>Sequencial: <span>696/2017--22</span></strong>
                        <strong>Carteira: <span>VIVO</span></strong>
                        <strong>Segredo de justiça: <span></span></strong>
                    </div>
                </Autos>

                <Partes>
                    <section>
                        <h1 id="partes" >PARTE ATIVA</h1>
                        <h3>Legenda parte...</h3>
                        <div>
                            <strong>Nome: <span>ARZIVAN LOPES LUZ</span></strong>
                            <strong>CPF/CNPJ: <span>29588472253</span></strong>
                        </div>
                        <h2>ADVOGADOS</h2>
                        <div>
                            <strong>Nome: <span>GIORGY WILLIAN GOMES LUZ</span></strong>
                            <strong>Ações: <span>12</span></strong>
                        </div>
                    </section>

                    <section>
                        <h1>PARTE PASSIVA</h1>
                        <h3>Legenda parte...</h3>
                        <div>
                            <strong>Nome: <span>TELEFÔNICA BRASIL S.A</span></strong>
                            <strong>Nome: <span>TELEFÔNICA BRASIL S.A</span></strong>
                            <strong>CPF/CNPJ: <span>02.558.157/0001-62</span></strong>
                            <strong>CPF/CNPJ: <span>02.558.157/0019-91</span></strong>
                        </div>
                        
                    </section>
                </Partes>


                <OutrasInformacoes>
                    <h1 id="outrasInformacoes">OUTRAS INFORMAÇÕES</h1>
                    <h3>Informações do processo e partes...</h3>
                    <div>
                        <strong>Assunto: <span>Responsabilidade Civil (10431)</span></strong>
                        <strong>Localização: <span>PARA - REDENCAO - Redençao - JEC</span></strong>
                        <strong>Serventia: <span>Vara do Juizado Especial Cível de Redenção</span></strong>
                        <strong>Fase: <h5>Conhecimento</h5></strong>
                        <strong>Data da distribuição: <span>06/06/2017</span></strong>
                    </div>
                    <div>
                        <strong>Estado: <span>PA</span></strong>
                        <strong>Comarca: <span>Redençao</span></strong>
                        <strong>Classe: <span>PROCEDIMENTO DO JUIZADO ESPECIAL CÍVEL (436)</span></strong>
                        <strong>Valor da Causa: <span>15.000,00</span></strong>
                    </div>
                </OutrasInformacoes>
            
                <Movimentacoes>
                    <h1 id="movimentacoes">MOVIMENTAÇÕES</h1>
                    <h3><strong>Processo:</strong>696/2017--22</h3>
                    <div>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="processum (4)">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tipo</th>
                                            <th>Especificação</th>
                                            <th>Data Evento</th>
                                            <th>Prazo</th>
                                            <th>Audiência</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Arquivamento</td>
                                            <td>Sentença improcedente</td>
                                            <td>07/08/2018 00:00</td>
                                            <td>14/08/2018 00:00</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Sentença</td>
                                            <td>Improcedente</td>
                                            <td>08/06/2018 00:00</td>
                                            <td>13/06/2018 00:00</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Audiência</td>
                                            <td>Conciliação/Intrução e Julgamento</td>
                                            <td>25/01/2018 00:00</td>
                                            <td></td>
                                            <td>25/01/2018 10:30</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Audiência</td>
                                            <td>Conciliação</td>
                                            <td>13/09/2017 00:00</td>
                                            <td>13/09/2017 00:00</td>
                                            <td>13/09/2017 09:00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="profile" title="pje (3)">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        {Array.from({ length: 20 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>
                            
                            <Tab eventKey="extra1" title="Extra1">
                                <Table responsive>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <th key={index}>Table heading</th>
                                        ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <td key={index}>Table cell {index}</td>
                                        ))}
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                            </Tab>
                            <Tab eventKey="contact" title="Tribunal (0)" disabled>
                            </Tab>
                        </Tabs>
                    </div>
                </Movimentacoes>
            
            </Body>
        </Conteiner>
    )};

export default Acompanhamento;