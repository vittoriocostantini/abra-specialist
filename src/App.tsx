import './themes/App.css'
import NavBarPages from './components/nav-bar/nav-bar-pages'
import RightSidebar from './components/sidebar/right-side-bar'
import { Route, useLocation, Navigate } from 'react-router-dom'
import Login from './pages/public/specialist/login/login'
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'
import { Private } from './pages/private'
import RoutesWithNotFound from './utilities/routes-with-not-found-utility'

function App() {

  const location = useLocation()
  const showSidebar = (
    location.pathname === PrivateRoutes.DASHBOARD ||
    location.pathname === PrivateRoutes.TICKETS ||
    /^\/chat\/[^/]+$/.test(location.pathname)
  )
  return (
    
    <div className="h-screen w-full overflow-hidden bg-[#f5f5f5]">
      <main className="flex h-full">
        <NavBarPages />
        <div className="flex-1 flex min-w-0">
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} replace />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
             <Route element={<AuthGuard />} >
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
             </Route>
          </RoutesWithNotFound>
          {showSidebar && <RightSidebar />}
        </div>
      </main>
    </div>
  )
}

export default App
