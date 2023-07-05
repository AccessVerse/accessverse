const urls = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  BLOGS: '/blog',
  BLOG: (id: string) => `/blog/${id}`,
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
  DOCS: urls.DOCS,
  SETTINGS: urls.SETTINGS,
  PROFILE: urls.PROFILE,
  FEED: urls.FEED,
  DISCUSSIONS: urls.DISCUSSIONS,
};

export default routes;
