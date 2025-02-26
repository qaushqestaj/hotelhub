import DashboardLayout from '../features/dashboard/DashboardLayout';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import { useRecentBookings } from '../features/dashboard/useRecentBookings';

function Dashboard() {
  const { bookings, isLoading } = useRecentBookings();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
