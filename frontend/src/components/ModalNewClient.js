import { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const NovoClienteModal = ({ showModal, handleCloseModal, fetchDataForClients }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [coordenadaX, setCoordenadaX] = useState(null);
  const [coordenadaY, setCoordenadaY] = useState(null);

  const handleSalvar = async () => {
    try {
      // Faz a chamada para o endpoint de salvar cliente
      const response = await axios.post('http://localhost:3001/clients', {
        name: nome,
        email: email,
        telefone: telefone,
        coord_x: coordenadaX,
        coord_y: coordenadaY,
      });

      // Mostra a resposta do servidor no console
      console.log('Resposta do servidor:', response.data);

      // Atualiza a lista de clientes após salvar
      await fetchDataForClients();

      // Limpar os campos após salvar
      setNome('');
      setEmail('');
      setTelefone('');
      setCoordenadaX('');
      setCoordenadaY('');

      // Fechar o modal
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      // Tratar erros conforme necessário
    }
  };


  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Adicionar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCoordenadaX">
            <Form.Label>Coordenada X</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a coordenada X"
              value={coordenadaX}
              onChange={(e) => setCoordenadaX(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCoordenadaY">
            <Form.Label>Coordenada Y</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a coordenada Y"
              value={coordenadaY}
              onChange={(e) => setCoordenadaY(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleSalvar}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NovoClienteModal;
