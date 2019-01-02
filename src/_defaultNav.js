export default {
  items: [
    {
      name: 'DASHBOARD',
      url: '/dashboard',
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
      name: 'SHARES', // include stage, quarter, person-quarter, share-period
      url: '/shares',
      icon: 'icon-star'
    },
    {
      name: 'PROFITS', // include stage, quarter, profit, person-profit
      url: '/profits',
      icon: 'cui-dollar icons'
    },
    {
      name: 'REFERRALS', // include stage, quarter, person-quarter
      url: '/referrals',
      icon: 'cui-people icons'
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
      url: '/profile',
      icon: 'cui-settings icons'
    },
    {
      name: 'LOG OUT',
      url: '/login',
      icon: 'cui-account-logout icons',
    },
  ],
};
