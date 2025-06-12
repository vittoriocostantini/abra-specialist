import { FaTelegram, FaInstagram, FaDocker, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import React from 'react';


interface Ticket {
    id: number;
    title: string;
    app: 'telegram' | 'instagram' | 'docker' | 'whatsapp' | 'github';
    description: string;
    status: 'open' | 'pending';
    createdAt: string;
    customer: string;
  }
  
const appIcons = {
    telegram: FaTelegram,
    instagram: FaInstagram,
    docker: FaDocker,
    whatsapp: FaWhatsapp,
    github: FaGithub,
  };
  
  const mockTickets: Ticket[] = [
    {
      id: 1,
      title: "Error en el sistema de pagos",
      app: 'telegram',
      description: "Los usuarios no pueden completar sus pagos",
      status: 'open',
      createdAt: '2024-03-20',
      customer: 'Juan Pérez'
    },
    {
      id: 2,
      title: "Problema con la sincronización",
      app: 'instagram',
      description: "Los datos no se están sincronizando correctamente",
      status: 'pending',
      createdAt: '2024-03-19',
      customer: 'María García'
    },
    {
      id: 3,
      title: "Solicitud de nueva funcionalidad",
      app: 'docker',
      description: "Necesitamos agregar un nuevo campo al formulario",
      status: 'open',
      createdAt: '2024-03-18',
      customer: 'Guzman López'
    },
    {
      id: 4,
      title: "Problema con la aplicación",
      app: 'whatsapp',
      description: "La aplicación no se está cargando correctamente",
      status: 'pending',
      createdAt: '2024-03-18',
      customer: 'Juan Pérez'
    },
    {
      id: 5,
      title: "Error al iniciar sesión en la aplicación",
      app: 'github',
      description: "No puedo iniciar sesión en la aplicación",
      status: 'pending',
      createdAt: '2024-03-18',
      customer: 'Stiven Guzman'
    }
  ];

function TicketCard() {
    const navigate = useNavigate();

    const handleTicketClick = (ticketId: number) => {
      navigate(`/chat/${ticketId}`);
    };
    return (
        <>
             <section className="shadow-sm bg-gray-100">
          <div className="divide-y divide-gray-200">
            {mockTickets.map((ticket) => (
              <article 
                key={ticket.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleTicketClick(ticket.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    {React.createElement(appIcons[ticket.app], {
                      className: "text-3xl text-gray-600"
                    })}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-semibold">{ticket.title}</h2>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{ticket.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Cliente: {ticket.customer}</span>
                      <span>Fecha: {ticket.createdAt}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        </>
    )
}

export default TicketCard;