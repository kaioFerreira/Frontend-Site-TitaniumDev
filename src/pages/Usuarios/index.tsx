import React, { useState, useEffect } from 'react';

import { Conteiner, Body, TableUsers } from './styles';

import api from '../../services/api';

import Header from '../../components/Headers/HeaderUsuarios';

import Table from 'react-bootstrap/Table';

const Usuarios: React.FC = () => {

    const [ users, setUsers ] = useState<any[]>([]);

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
                                    <tr key={user.usr_id}>
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
    </Conteiner>
    )};

export default Usuarios;
