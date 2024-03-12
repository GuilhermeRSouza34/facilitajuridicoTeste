import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';


export const Tabela = ({ clients }) => {

    const [filtro, setFiltro] = useState('');

    console.log(filtro);

    const [selectedClientsIds, setSelectedClientsIds] = useState([]);
    const [clientesFiltrados, setClientesFiltrados] = useState([]);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleCheckboxChange = (clientId) => {
        // Verifique se o usuário já está na lista de IDs selecionados
        if (selectedClientsIds.includes(clientId)) {
          // Se estiver, remova-o
          setSelectedClientsIds(prevIds => prevIds.filter(id => id !== clientId));
        } else {
          // Se não estiver, adicione-o
          setSelectedClientsIds(prevIds => [...prevIds, clientId]);
        }
      };

    const onFiltroChange = () => {
        console.log(filtro);
        const clientesFiltrados = clients?.filter((c) =>
            c?.name?.toLowerCase().includes(filtro?.toLowerCase())
        );
        
        // Faça algo com os clientes filtrados, por exemplo, atualizar o estado
        // ou chamar uma função que atualiza o estado da tabela
        setClientesFiltrados(clientesFiltrados);
    };

    const onNovoClick = () => {
        setShow(true);
      };
    
    const onExcluirClick = async () => {
      try {
        // Faça uma solicitação para excluir usuários selecionados
        const response = await axios.delete('http://localhost:3001/clients', {
          data: { selectedClientsIds }, // Enviar IDs dos clientes a serem excluídos no corpo da solicitação
        });
  
        const data = response.data;
  
        if (data.success) {
          console.log('Clientes excluídos com sucesso:', data.message);
          // Atualize o estado da sua aplicação ou faça outras ações necessárias
        } else {
          console.error('Erro ao excluir cliente:', data.message);
        }
      } catch (error) {
        console.error('Erro ao excluir cliente:', error);
      }
    };

    return (
      <div>

        <div className="d-flex justify-content-between mb-3">
            <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Busca por nome" 
            onChange={(e) => setFiltro(e.target.value)} />
            <div className="input-group-append">
                <button className="btn btn-light" onClick={onFiltroChange}>Filtrar</button>
                <button className="btn btn-primary ms-1" onClick={onNovoClick}>Novo</button>
                <button className="btn btn-danger ms-1" onClick={onExcluirClick}>Excluir</button>
            </div>
            </div>
        </div>

        <table className="table table-striped">
            <thead>
            <tr>
                <th>Cliente</th>
                <th>Email</th>
                <th>Telefone</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {clientesFiltrados.map(client => (
                <tr key={client.id}>
                <td>
                    <label htmlFor={client.id}>
                        <input
                        className="form-check-input"
                        type="checkbox"
                        id={client.id}
                        checked={selectedClientsIds.includes(client.id)}
                        onChange={() => handleCheckboxChange(client.id)}
                        />
                        &emsp;{client.name}
                    </label>

                </td>
                <td>{client.email}</td>
                <td>{client.telefone}</td>
                <td><i className="fas fa-edit"></i></td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
  };
