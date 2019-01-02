import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const AdminDashboard = Loadable({
  loader: () => import('./views/Admin/Dashboard'),
  loading: loading,
});

const Users = Loadable({
  loader: () => import('./views/Admin/Users'),
  loading: loading,
});

const User = Loadable({
  loader: () => import('./views/Admin/Users/User'),
  loading: loading,
});

// const StagesQuartes = Loadable({
//   loader: () => import('./views/Admin/StagesQuarters'),
//   loading: loading,
// });

// const AdminShares = Loadable({
//   loader: () => import('./views/Admin/Shares'),
// loading: loading,
// });

// const AdminProfits = Loadable({
//   loader: () => import('./views/Admin/Profits'),
// loading: loading,
// });

const AdminReferrals = Loadable({
  loader: () => import('./views/Referrals/Referrals'),
  loading: loading,
});

// const Roles = Loadable({
//   loader: () => import('./views/Admin/Roles'),
// loading: loading,
// });

const AdminProfile = Loadable({
  loader: () => import('./views/Profile/Profile'),
  loading: loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: loading,
});

// const Shares = Loadable({
//   loader: () => import('./views/Shares'),
// loading: loading,
// });

// const Profits = Loadable({
//   loader: () => import('./views/Profits'),
// loading: loading,
// });

const Referrals = Loadable({
  loader: () => import('./views/Referrals/Users'),
  loading: loading,
});

const Profile = Loadable({
  loader: () => import('./views/Profile/Profile'),
  loading: loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout }, 
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', component: AdminDashboard },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/user/:id', exact: true, name: 'User Details', component: User },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/referrals', exact: true, name: 'Referrals', component: Referrals },
  { path: '/admin/referrals', exact: true, name: 'Admin Referrals', component: AdminReferrals },
  { path: '/admin/profile', exact: true, name: 'Admin Profile', component: AdminProfile },
];

export default routes;
