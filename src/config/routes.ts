const urls = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  CREATEPROFILE: '/createprofile',
  BLOGS: '/blogs',
  BLOG: (id: string) => `/blogs/${id}`,
  EVENTS: '/events',
  EVENT: (id: string) => `/events/${id}`,
  DOCS: '/docs',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  FEED: '/feed',
  DISCUSSIONS: '/discussions',
  NEW_EVENT: '/events/new',
  NEW_BLOG: '/blogs/new',
};

const routes = {
  HOME: urls.HOME,
  DASHBOARD: urls.DASHBOARD,
  CREATEPROFILE: urls.CREATEPROFILE,
  BLOGS: urls.BLOGS,
  BLOG: urls.BLOG(':id'),
  EVENTS: urls.EVENTS,
  EVENT: urls.EVENT(':id'),
  DOCS: urls.DOCS,
  SETTINGS: urls.SETTINGS,
  PROFILE: urls.PROFILE,
  FEED: urls.FEED,
  DISCUSSIONS: urls.DISCUSSIONS,
  NEW_EVENT: urls.NEW_EVENT,
  NEW_BLOG: urls.NEW_BLOG,
};

export default routes;
