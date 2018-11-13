import Home from '../pages/Home'
import Projects from '../pages/Projects'
// Static Router
export default [
  {
    path: '/',
    page: Home,
    name: 'Home',
    exact: true
  },
  {
    path: '/project/:id',
    page: Projects,
    name: 'Project',
    exact: true
  }
]
