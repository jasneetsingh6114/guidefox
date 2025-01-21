const constants = require('../src/utils/constants.helper');
const userRole = constants.ROLE;

module.exports = {
  user: {
    role: {
      admin: userRole.ADMIN,
      member: userRole.MEMBER,
    },
    roleEnum: [userRole.ADMIN, userRole.MEMBER],
    roleName: {
      [userRole.ADMIN]: 'admin',
      [userRole.MEMBER]: 'member',
    },
  },
  team: {
    permissions: {
      invite: [userRole.ADMIN],
      removeUser: [userRole.ADMIN],
      update: [userRole.ADMIN],
      changeRole: [userRole.ADMIN],
      setOrg: [userRole.ADMIN],
      serverUrl: [userRole.ADMIN],
      popups: [userRole.ADMIN],
      hints: [userRole.ADMIN],
      banners: [userRole.ADMIN],
      links: [userRole.ADMIN],
      tours: [userRole.ADMIN],
      helpers: [userRole.ADMIN],
    },
  },
  tour: {
    triggeringFrequency: [
      'just once',
      'once in every session',
      'once every day',
      'once every week',
      'once every month',
      'always',
    ],
    pageTargeting: ['equals to', 'is different from'],
    themes: ['default theme'],
  },
  hint: {
    action: ['no action', 'open url', 'open url in a new tab'],
    tooltipPlacement: ['top', 'right', 'bottom', 'left'],
  },
};
