import { FaUser, FaEnvelope, FaPhone, FaCircle } from 'react-icons/fa'

function InfoSideBarClient() {
    return (
        <div className="w-100 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Información del Contacto</h1>
        </div>
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