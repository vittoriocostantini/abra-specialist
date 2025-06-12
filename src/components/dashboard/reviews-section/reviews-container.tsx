import { FaUser, FaStar } from 'react-icons/fa';

function ReviewsContainer() {
    return (
        <>
        <div className="rounded-lg shadow bg-white">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Reseñas y Calificaciones</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className="w-4 h-4 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(1 reseña)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-4 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <FaUser className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Usuario</h4>
                        <div className="flex items-center gap-2 mt-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar
                              key={index}
                              className="w-4 h-4 text-yellow-400"
                            />
                          ))}
                          <span className="text-sm text-gray-500">Categoría</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">Fecha</span>
                    </div>
                    <p className="text-gray-600 mt-2">Comentario de la reseña</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}

export default ReviewsContainer;