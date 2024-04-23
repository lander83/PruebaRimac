import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/parami/ParaMi.scss';

const ParaMi: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [edad, setEdad] = useState<number>(0);
  const [planes, setPlanes] = useState<any[]>([]);

  useEffect(() => {
    // Realizar la solicitud para obtener los datos del usuario
    axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      // Calcular la edad de Rocío a partir de su fecha de nacimiento
      const birthDate = new Date(user.birthDay);
      const currentDate = new Date();
      const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();
      setEdad(ageDiff);
    }
  }, [user]);

  useEffect(() => {
    // Realizar la solicitud para obtener la lista de planes
    axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json')
      .then(response => {
        // Filtrar los planes de acuerdo con la edad calculada
        const filteredPlanes = response.data.list.filter((plan: any) => plan.age <= edad);
        setPlanes(filteredPlanes);
      })
      .catch(error => {
        console.error('Error al obtener la lista de planes:', error);
      });
  }, [edad]);

  return (
    <div className="card-container">
      {/* Aquí puedes mostrar la lista de planes */}
      {planes.map((plan, index) => (
        <div key={index}>
          <h3>{plan.name}</h3>
          <span>Costo del Plan</span>
          <p>${plan.price}</p>
          <ul>
            {plan.description.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button id='btnSelecionaPlan' className='btnSeleccionaPlan'>
        Seleccionar Plan
      </button>
   
        </div>
        
      ))}
  </div>
        
     
  );
};

export default ParaMi;
