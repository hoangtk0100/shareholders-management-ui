import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
// import AdminLayout from './containers/AdminLayout';
// import Loadable from 'react-loadable'

// const AdminDashboard = Loadable({
//   loader: () => import('./views/Admin/Dashboard'),
// });

// const Users = Loadable({
//   loader: () => import('./views/Admin/Users/Users'),
// });

// const User = Loadable({
//   loader: () => import('./views/Admin/Users/User'),
// });

// const StagesQuartes = Loadable({
//   loader: () => import('./views/Admin/StagesQuarters'),
// });

// const AdminShares = Loadable({
//   loader: () => import('./views/Admin/Shares'),
// });

// const AdminProfits = Loadable({
//   loader: () => import('./views/Admin/Profits'),
// });

// const AdminReferrals = Loadable({
//   loader: () => import('./views/Referrals'),
// });

// const Roles = Loadable({
//   loader: () => import('./views/Admin/Roles'),
// });

// const Dashboard = Loadable({
//   loader: () => import('./views/Dashboard'),
// });

// const Shares = Loadable({
//   loader: () => import('./views/Shares'),
// });

// const Profits = Loadable({
//   loader: () => import('./views/Profits'),
// });

// const Refferals = Loadable({
//   loader: () => import('./views/Referrals'),
// });

// const Profile = Loadable({
//   loader: () => import('./views/Profile'),
// });

const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const Users = React.lazy(() => import('./views/Admin/Users/Users'));
// const User = React.lazy(() => import('./views/Admin/Users/User'));

// Admin path routes
const AdminDashboard = React.lazy(()=> import('./views/Admin/Dashboard'));
const Users =React.lazy(() => import('./views/Admin/Users/Users'));
const User = React.lazy(() => import('./views/Admin/Users/User'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout }, 
  // { path: '/admin', exact: true, name: 'Admin', component: AdminLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', component: AdminDashboard },
  { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  { path: '/admin/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
