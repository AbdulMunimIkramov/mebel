import { useEffect, useState } from 'react'
import './Clients.scss'
import { getAllClients } from '../../api/Clients.api';

export const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const resp = await getAllClients();
                setClients(resp.data);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };
        fetchClients();
    }, []);

    return (
        <>
            <div className='container card_clients'>
                <div className='cards'>
                    {
                        clients.slice(0, 50).map(product => (
                            <div className="card">
                                <p className='name'>{product.username}</p>
                                <p className='mail'>{product.email}</p>
                                <br />
                                <p className='number'>{product.phone}</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}