import { Helmet } from 'react-helmet';
import { Card, Box, Container, Grid, Typography } from '@material-ui/core';

const Dashboard = ({ user }) => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <div style={{ padding: '40px' }}>
      <Card style={{ padding: '20px' }}>
        <Typography fontSize={40}>Hi, {user.name} 👋</Typography>
        <Typography fontSize={20}>
          Welcome to the Education Management Portal
        </Typography>
      </Card>
    </div>
  </>
);

export default Dashboard;
