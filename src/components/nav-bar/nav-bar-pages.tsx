import { FaUser, FaTicketAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

function NavBarPages() {    
    const location = useLocation();

    return (
        <div className="w-16 bg-[#4d5c77] flex flex-col items-center py-4">
            <div className="flex flex-col items-center space-y-6">
                <Link 
                    to="/dashboard"
                    className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        location.pathname === '/dashboard' ? 'bg-gray-700' : ''
                    }`}>
                    <FaUser size={20} />
                </Link>
                <Link 
                    to="/tickets"
                    className={`w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors ${
                        location.pathname === '/tickets' ? 'bg-gray-700' : ''
                    }`}>
                    <FaTicketAlt size={20} />
                </Link>
            </div>
            <div className="mt-auto">
                <button 
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-gray-700 rounded-lg transition-colors">
                    <FaSignOutAlt size={20} />
                </button>
            </div>
        </div>
    )
}

export default NavBarPages;