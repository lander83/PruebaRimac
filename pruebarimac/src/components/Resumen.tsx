import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/resumen/Resumen.scss';
import Volver from './Volver';
import Planes from './Planes';
import User from '../interfaces/User';
import Plans, { Plan } from '../interfaces/Plans'; 

const Resumen: React.FC = () => {
    const [user, setUser] = useState<User | null>(null); 
    const [edad, setEdad] = useState<number>(0);
    const [plan, setPlan] = useState<Plan | null>(null); 

    useEffect(() => {
        // Obtener los datos del usuario
        axios.get<User>('https://rimac-front-end-challenge.netlify.app/api/user.json')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos del usuario:', error);
            });
    }, []);

    useEffect(() => {
        // Calcular la edad del usuario
        if (user) {
            const birthDate = new Date(user.birthDay);
            const currentDate = new Date();
            const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();
            setEdad(ageDiff);
        }
    }, [user]);

    useEffect(() => {
        // Obtener los planes y seleccionar el plan más cercano a la edad del usuario
        if (edad !== 0) {
            axios.get<Plans>('https://rimac-front-end-challenge.netlify.app/api/plans.json')
                .then(response => {
                    let minDiff = Infinity;
                    let closestPlan: Plan | null = null; // Utiliza la interfaz Plan

                    response.data.list.forEach((plan: Plan) => { // Utiliza la interfaz Plan
                        const diff = Math.abs(edad - plan.age);
                        if (diff < minDiff) {
                            minDiff = diff;
                            closestPlan = plan;
                        }
                    });

                    setPlan(closestPlan);
                })
                .catch(error => {
                    console.error('Error al obtener los planes:', error);
                });
        }
    }, [edad]);

    return (
        <div>
            <Planes />
            <Volver />
            <div className="user-plans-form">
                <div className="form-column">
                    <div className="form-row">
                        <label>Nombre:</label>
                        <span>{user ? `${user.name} ${user.lastname}` : 'Cargando...'}</span>
                    </div>
                    <div className="form-row">
                        <label>Edad:</label>
                        <span>{edad}</span>
                    </div>
                    <div className="form-row">
                        <label>Plan seleccionado:</label>
                        <span>{plan ? plan.name : 'Cargando...'}</span>
                    </div>
                    <div className="form-row">
                        <label>Precio:</label>
                        <span>{plan ? `$${plan.price}` : 'Cargando...'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resumen;
