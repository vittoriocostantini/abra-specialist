import { FaCalendarAlt } from 'react-icons/fa';

function InfoContainer() {
    return (
        <>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-lg shadow bg-white">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Información del Agente</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Departamento</p>
                  <p className="font-medium">Departamento</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fecha de Ingreso</p>
                  <p className="font-medium">Fecha</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estado</p>
                  <p className="font-medium text-green-600">Estado</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Próximo Turno</p>
                  <p className="font-medium">Turno</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Especialidades</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Especialidad
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow bg-white">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Próximas Actividades</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Actividad 1</p>
                    <p className="text-sm text-gray-600">Horario</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default InfoContainer;