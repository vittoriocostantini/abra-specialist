
import DashboardHeader from '../../../components/dashboard/header/dashboard-header';
import MetricsContainer from '../../../components/dashboard/performance-section/metrics-container';
import InfoContainer from '../../../components/dashboard/information-section/info-container';
import ReviewsContainer from '../../../components/dashboard/reviews-section/reviews-container';

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
