import { FaUser, FaEnvelope, FaPhone, FaCircle, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function InfoSideBarClient() {
    const navigate = useNavigate()
    return (
        <div className="w-100 bg-white flex flex-col">
        <header className="p-4 border-b border-gray-200 flex items-center gap-2">
          <button onClick={() => navigate('/private/tickets')} className="w-10 h-10 flex items-center justify-center text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <FaArrowLeft className="text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Información del Contacto</h1>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col space-y-6">
            <div className="w-22 h-22 rounded-full bg-[#62929E] flex items-center justify-center text-white text-4xl">
              JD
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FaUser className="mr-2" /> Nombre Completo
                </h3>
                <p className="text-lg text-gray-900">Juan Doe</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FaEnvelope className="mr-2" /> Correo Electrónico
                </h3>
                <p className="text-lg text-gray-900">juan.doe@ejemplo.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 flex items-center">
                  <FaPhone className="mr-2" /> Teléfono
                </h3>
                <p className="text-lg text-gray-900">+1 (555) 123-4567</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Estado
                </h3>
                <p className="text-lg text-green-600 flex items-center">
                  <FaCircle className="mr-1 text-green-500" /> En línea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default InfoSideBarClient;