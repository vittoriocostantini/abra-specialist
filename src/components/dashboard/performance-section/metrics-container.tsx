import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function MetricsContainer() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container-metrics ">
          <div className="rounded-lg shadow p-4 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Tickets Resueltos</p>
                <p className="text-2xl font-bold mt-1">0</p>
              </div>
              <div className="flex items-center text-green-500">
                <FaArrowUp />
                <span className="ml-1 text-sm">0%</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow p-4 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Satisfacción</p>
                <p className="text-2xl font-bold mt-1">0</p>
              </div>
              <div className="flex items-center text-green-500">
                <FaArrowUp />
                <span className="ml-1 text-sm">0%</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow p-4 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Tickets Activos</p>
                <p className="text-2xl font-bold mt-1">0</p>
              </div>
              <div className="flex items-center text-red-500">
                <FaArrowDown />
                <span className="ml-1 text-sm">0%</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow p-4 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Tiempo de Trabajo</p>
                <p className="text-2xl font-bold mt-1">0</p>
              </div>
              <div className="flex items-center text-red-500">
                <FaArrowDown />
                <span className="ml-1 text-sm">0%</span>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default MetricsContainer;