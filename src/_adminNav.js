export default {
  items: [
    {
      name: 'DASHBOARD',
      url: '/admin/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Management',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'USERS',
      url: '/admin/users',
      icon: 'cui-people icons'
    },
    {
      name: 'STAGES-QUARTERS',
      url: '/admin/stagesQuarters',
      icon: 'icon-star'
    },
    {
      name: 'SHARES',     // include stage, quarter, person-quarter, share-period
      url: '/admin/shares',
      icon: 'icon-star'
    },
    {
      name: 'PROFITS',    // include stage, quarter, person-quarter, share-period
      url: '/admin/profits',
      icon: 'cui-dollar icons'
    },
    {
      name: 'REFERRALS', // include stage, quarter, person-quarter
      url: '/admin/referrals',
      icon: 'cui-people icons'
    },
    {
      name: 'ROLES',
      url: '/admin/roles',
      icon: 'icon-star'
    },
    {
      title: true,
      name: 'Settings',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'PROFILE',
      url: '/admin/profile',
      icon: 'cui-settings icons'
    },
    {
      name: 'LOG OUT',
      url: '/login',
      icon: 'cui-account-logout icons'
    },
  ],
};
