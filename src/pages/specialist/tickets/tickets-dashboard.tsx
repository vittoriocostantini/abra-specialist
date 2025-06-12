import TicketCard from '../../../components/tickets/ticket-card';
import SearchBarTicket from '../../../components/tickets/search-bar-ticket/search-bar-ticket';

function TicketsDashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <header className="shadow-sm">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Tickets(5)</h1>
        </div>
      </header>
      <SearchBarTicket />
      <TicketCard />
    </div>
  );
}

export default TicketsDashboard;