import { DashboardHeader, MetricsContainer, InfoContainer, ReviewsContainer } from "../../../components/dashboard";

function AgentProfileDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6">
      <DashboardHeader />
        <div className="space-y-6">
            <MetricsContainer />
                <InfoContainer />
        <ReviewsContainer />
      </div>
    </div>
  );
};

export default AgentProfileDashboard;
