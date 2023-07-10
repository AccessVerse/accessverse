const urls = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  BLOGS: '/blogs',
  BLOG: (id: string) => `/blogs/${id}`,
  EVENTS: '/events',
  EVENT: (id: string) => `/events/${id}`,
  DOCS: '/docs',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  FEED: '/feed',
  DISCUSSIONS: '/discussions',
};

const routes = {
  HOME: urls.HOME,
  DASHBOARD: urls.DASHBOARD,
  BLOGS: urls.BLOGS,
  BLOG: urls.BLOG(':id'),
  EVENTS: urls.EVENTS,
  EVENT: urls.EVENT(':id'),
  DOCS: urls.DOCS,
  SETTINGS: urls.SETTINGS,
  PROFILE: urls.PROFILE,
  FEED: urls.FEED,
  DISCUSSIONS: urls.DISCUSSIONS,
};

export default routes;
