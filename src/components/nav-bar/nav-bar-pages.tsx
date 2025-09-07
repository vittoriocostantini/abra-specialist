import { FaUser, FaTicketAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../models'

function NavBarPages() {    
    const location = useLocation()

    return (
        <>

        
        <div className="w-16 bg-[#4d5c77] flex flex-col items-center py-4">
            <div className="flex flex-col items-center space-y-6">
                <Link 
                    to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`}
                    aria-label="Ir al dashboard"
                    className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        location.pathname === `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}` ? 'bg-gray-700' : ''
                    }`}>
                    <FaUser size={20} />
                </Link>
                <Link 
                    to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TICKETS}`}
                    aria-label="Ir a tickets"
                    className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        location.pathname === `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.TICKETS}` ? 'bg-gray-700' : ''
                    }`}>
                    <FaTicketAlt size={20} />
                </Link>
            </div>
            <div className="mt-auto">
                <Link 
                    to="/login"
                    aria-label="Cerrar sesión"
                    className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        location.pathname === `/${PublicRoutes.LOGIN}` ? 'bg-gray-700' : ''
                    }`}>
                    <FaSignOutAlt size={20} />
                </Link>
            </div>
        </div>
        </>
    )
}

export default NavBarPages;