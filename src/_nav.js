import API from './api.js';

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
      {
        name: 'Connect Console',
        url: 'https://burningtimber.auth0.com/samlp/IXfZthb3neyoDHUfB27Mc8bNMzQQuTWI?RelayState=https://us-east-1.console.aws.amazon.com/connect/federate/ff9e0789-24dc-4723-90e6-d9d2a6dc4b19',
        icon: 'cui-contact-phone',
        attributes: { target: '_blank', rel: 'noreferrer noopener', },
      }
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
