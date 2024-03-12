
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Pathways = () => {
    
    const [clients, setClients] = useState({})

    const [coordenadas, SetCoordenadas] = useState({})

    const [resultado, setResultado] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3001/clients')
          .then(response => setClients(response.data))
          .catch(error => console.error(error));
      }, []); 


    const handleClick = async () => {
      // Dados fictícios, substitua pelos seus clientes reais
      const pontos = clients.map(({ coord_x, coord_y }) => ({ coord_x, coord_y }));

      try {
        const response = await axios.post('http://localhost:3001/solve-tsp', { pontos });
        setResultado(response.data);
      } catch (error) {
        console.error('Erro ao resolver o TSP:', error);
      }
    };
  
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>Resolver TSP</button>
        <th/>
        {resultado && (
          <div>
            <th/>
            <p >Melhor Caminho: {JSON.stringify(resultado.melhorCaminho)}</p>
            <p>Distância Total: {resultado.distanciaTotal}</p>
          </div>
        )}
      </div>
    );
};

export default Pathways;
