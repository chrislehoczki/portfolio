export default {
  port: process.env.RAZZLE_PORT || '3002',
  domain: 'http://songhi.com',
  forumUrl: process.env.NODE_ENV === 'production' ? 'https://forum.songhi.com' : 'http://localhost:4567',
  api: {
    subscriptions: process.env.RAZZLE_CORE_SUBSCRIPTIONS || 'ws://localhost:3000/socket',
    cms: process.env.RAZZLE_CMS || 'http://localhost:3002/cms',
    core: process.env.RAZZLE_CORE_API || 'http://localhost:3000',
    coreSSR: process.env.RAZZLE_CORE_SSR_API || 'http://localhost:3000',
    files: process.env.RAZZLE_FILES_API || 'http://localhost:3003',
    graphql: '/graphql',
    uploads: '/api/uploads'
  }
}
