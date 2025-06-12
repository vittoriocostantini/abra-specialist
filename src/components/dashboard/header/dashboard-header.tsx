import { FaUser, FaBell, FaCog, FaEllipsisV } from 'react-icons/fa';

function DashboardHeader() {
    return (
 <>
    <div className="rounded-lg shadow mb-6 bg-white">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUser className="w-12 h-12 text-gray-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">Nombre del Agente</h1>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    En línea
                  </span>
                </div>
                <p className="text-gray-600 mt-1">Rol del Agente</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <FaBell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <FaCog className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <FaEllipsisV className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
    </div>
</>
    )
}

export default DashboardHeader;