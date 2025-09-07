import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models"
import RoutesWithNotFound from '../../utilities/routes-with-not-found-utility.tsx';
import AgentProfileDashboard from "./dashboard/agent-profile-dashboard.tsx";
import TicketsDashboard from "./tickets/tickets-dashboard.tsx";
import ClientsChat from "./clients/clients-chat.tsx";

function Private() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<AgentProfileDashboard />} />
            <Route path={PrivateRoutes.TICKETS} element={<TicketsDashboard />} />
            <Route path={PrivateRoutes.CHAT} element={<ClientsChat />} />
        </RoutesWithNotFound>
    )
}

export default Private  