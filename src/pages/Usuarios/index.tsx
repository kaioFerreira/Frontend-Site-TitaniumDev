import React, { useState, useEffect } from 'react';

import { Conteiner, Body, TableUsers, DadosUser } from './styles';

import api from '../../services/api';

import Header from '../../components/Headers/HeaderUsuarios';

import Table from 'react-bootstrap/Table';

import { GrFormClose } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaDatabase, FaBuilding } from 'react-icons/fa';
import { RiRoadMapLine } from 'react-icons/ri';
import { MdFingerprint, MdAttachMoney, MdEdit } from 'react-icons/md';

const Usuarios: React.FC = () => {

    const [ users, setUsers ] = useState<any[]>([]);
    const [visibleDadosUser, setVisibleDadosUser] = useState(false);
    const [activeUser, setActiveUser] = useState(true);
    const [visibleDataUser, setVisibleDataUser] = useState(true);
    const [visibleCredenciais, setVisibleCredenciais] = useState(false);
    const [activeAtuacao, setActiveAtuacaoUser] = useState(false);
    const [activeEmpresa, setActiveEmpresa] = useState(false);

    const [activeCredenciaisUser, setActiveCredenciaisUser] = useState(true);

    function handleVisibleDadosUser(){
        setVisibleDadosUser(!visibleDadosUser);
    }

    function handleActiveDadosUser(){
        setVisibleDataUser(true);
        setVisibleCredenciais(false);
        setActiveAtuacaoUser(false);
        setActiveEmpresa(false);
    }

    function handleActiveCredenciais(){
        setVisibleCredenciais(true);
        setVisibleDataUser(false);
        setActiveAtuacaoUser(false);
        setActiveEmpresa(false);
    }

    function handleActiveAtuacao(){
        setActiveAtuacaoUser(true);
        setVisibleCredenciais(false);
        setVisibleDataUser(false);
        setActiveEmpresa(false);
    }

    function handleActiveEmpresa(){
        setActiveEmpresa(true);
        setActiveAtuacaoUser(false);
        setVisibleCredenciais(false);
        setVisibleDataUser(false);
    }

    function handleActiveCredenciaisUser(){
        setActiveCredenciaisUser(!activeCredenciaisUser);
    }

    function handleActiveUser(){
        setActiveUser(!activeUser);
    }

    useEffect(() => {
        api.get('/users').then(response => {
            setUsers(response.data);
        });
    }, []);
return (
    <Conteiner>
        <Header/>

        <Body>

            <section/>

            <TableUsers>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Grupo</th>
                                <th>Cadastro</th>
                                <th>Estados de Atuação</th>
                            </tr>
                        </thead>
                        <tbody>
                                {   users.map( user =>
                                    <tr key={user.usr_id} onClick={handleVisibleDadosUser}>
                                        <td>{user.usr_id}</td>
                                        <td>{user.usr_nome}</td>
                                        <td>{user.usr_grp_id === 1 ? "Administrador" : "Gerente"}</td>
                                        <td>{user.usr_data_cadastro != null ? (user.usr_data_cadastro.split('T', 1)) : "" }</td>
                                        <td>{user.usr_cidade}</td>
                                    </tr>
                                )}
                        </tbody>
                    </Table>
            </TableUsers>

        </Body>

        <DadosUser isVisible={visibleDadosUser} activeUser={activeUser} activeCredenciaisUser={activeCredenciaisUser}>
            <section className="conteiner">
                <section className="div-topo">
                    <div>
                        <h1>Editar Usuário</h1>
                        <GrFormClose size={22} onClick={handleVisibleDadosUser}/>
                    </div>

                </section>

                <section className="conteiner-dados">
                    <div className="div-nav">
                        <div>
                            <div>
                                <MdEdit size={14} color="#6c5173"/>
                            </div>
                            <p>M</p>
                        </div>
                        <h2>Maria Oliveira</h2>
                        <section>
                            <div onClick={handleActiveUser}>
                                <AiOutlineCheck size={14} />
                            </div>
                        </section>
                        <ul>
                            <li onClick={handleActiveDadosUser}>
                                <FaDatabase size={16}/>
                                <div>
                                    <h3>Dados</h3>
                                </div>
                            </li>
                            <li onClick={handleActiveCredenciais}>
                                <MdFingerprint size={16}/>
                                <div>
                                    <h3>Credenciais</h3>
                                </div>
                            </li>
                            <li>
                                <MdAttachMoney size={16}/>
                                <div>
                                    <h3>Financeiro</h3>
                                </div>
                            </li>
                            <li onClick={handleActiveAtuacao}>
                                <RiRoadMapLine size={16}/>
                                <div>
                                    <h3>Atuação</h3>
                                </div>
                            </li>

                            <li onClick={handleActiveEmpresa}>
                                <FaBuilding size={16}/>
                                <div>
                                    <h3>Empresa</h3>
                                </div>
                            </li>

                        </ul>
                    </div>

                    { visibleDataUser &&
                    <div className="div-infos">
                        <h1>Dados</h1>
                        <div>
                            <div className="div-dataCadastro">
                                <h2>Data de Cadastro:</h2>
                                <div>
                                    <p>05/11/2019 15:11</p>
                                </div>
                                <h2>Nome:</h2>
                                <div>
                                    <p>Maria Oliveria</p>
                                </div>
                                <h2>Telefone:</h2>
                                <div>
                                    <p>Maria Oliveria</p>
                                </div>
                            </div>
                            <div className="div-grupo">
                                <h2>Grupo:</h2>
                                <div>
                                    <p>Administrador</p>
                                </div>
                                <h2>Apelido:</h2>
                                <div>
                                    <p>Maria Oliveria</p>
                                </div>
                                <h2>Email:</h2>
                                <div>
                                    <p>maria@advocaciamaciel.adv.br</p>
                                </div>
                            </div>
                            <div className="div-areasAcesso">
                                <h2>Áreas de Acesso:</h2>
                                <div>
                                    <p>Cívil</p>
                                </div>
                                <h2>CPF/CNPJ:</h2>
                                <div>
                                    <p>234.234.255-66</p>
                                </div>
                                <h2>OAB:</h2>
                                <div>
                                    <p>OAB</p>
                                </div>
                            </div>

                        </div>
                        <div className="div-extras">
                            <div className="endereco">
                                <h2>Endereço:</h2>
                                <div>
                                    <p>Endereço</p>
                                </div>
                            </div>
                            <div>
                                <h2>Complemento:</h2>
                                <div>
                                    <p>Complemento</p>
                                </div>
                            </div>
                            <div>
                                <h2>Estado:</h2>
                                <div>
                                    <p>Estado</p>
                                </div>
                            </div>
                            <div>
                                <h2>Cidade:</h2>
                                <div>
                                    <p>Cidade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                    { visibleCredenciais &&
                        <div className="div-credenciais">
                            <h1>Credenciais</h1>
                            <h3>Login:</h3>
                            <div>
                                <p>teste2</p>
                            </div>
                            <h2>Alterar Senha</h2>
                            <section className="div-alterarSenha">
                                <div>
                                    <h2>Nova Senha:</h2>
                                    <div>
                                        <p>Nova Senha</p>
                                    </div>
                                </div>
                                <div>
                                    <h2>Repita a Nova Senha:</h2>
                                    <div>
                                        <p>Repita a Nova Senha</p>
                                    </div>
                                </div>
                            </section>
                            <section className="div-btnForce">
                                <h2>Forçar troca de senha no próximo login</h2>
                                <section>
                                    <div onClick={handleActiveCredenciaisUser}>
                                    </div>
                                </section>
                            </section>
                        </div>
                    }

                    { activeAtuacao &&
                        <div className="div-atuacao">
                            <h1>Credenciais</h1>
                            <section className="div-alterarSenha">
                                <div>
                                    <h2>Carteiras:</h2>
                                    <div>
                                        <p>Todas</p>
                                    </div>
                                </div>
                                <div>
                                    <h2>Estados:</h2>
                                    <div>
                                        <p>Nada selecionado</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    }

                    { activeEmpresa &&
                        <div className="div-empresa">
                            <h1>Empresas</h1>
                            <h3>Empresas:</h3>
                            <div>
                                <p>EDE, Advocacia Maciel</p>
                            </div>
                        </div>
                    }

                </section>
                <div>
                    <button>
                        <GrFormClose size={20}/>
                        <span>Cancelar</span>
                    </button>
                    <button>
                        <AiOutlineCheck size={16}/>
                        <span>Salvar</span>
                    </button>
                </div>
            </section>
            { visibleDadosUser && <div onClick={handleVisibleDadosUser}></div> }
        </DadosUser>
    </Conteiner>
    )};

export default Usuarios;
