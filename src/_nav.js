export const devops_nav = [
  {
    name: 'DevOps',
    url: '#devops',
    icon: 'cui-code',
    children: [
      {
        name: 'AWS Console',
        url: 'https://burningtimber.auth0.com/samlp/IXfZthb3neyoDHUfB27Mc8bNMzQQuTWI',
        icon: 'cui-cloud',
        attributes: { target: '_blank', rel: 'noreferrer noopener', },
      },
    ],
  },
];

export const authenticated_nav = [
  {
    name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'secondary',
        text: 'NEW',
      },
  }
];

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'secondary',
        text: 'NEW',
      },
    },
    {
      name: 'DevOps',
      url: '#devops',
      icon: 'cui-code',
      children: [
        {
          name: 'AWS Console',
          url: 'https://burningtimber.auth0.com/samlp/IXfZthb3neyoDHUfB27Mc8bNMzQQuTWI',
          icon: 'cui-cloud',
          attributes: { target: '_blank', rel: 'noreferrer noopener', },
        },
      ]
    }
  ]
};
