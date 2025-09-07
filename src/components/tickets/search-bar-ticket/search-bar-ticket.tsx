import { useSearchParams } from "react-router-dom"

function SearchBarTicket() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") || "";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev)
            if (e.target.value) {
                params.set("name", e.target.value)
            } else {
                params.delete("name")
            }
            return params
        })
    }

    return (
<>
    <main className="w-full">
        <nav className=" shadow-sm mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Buscar tickets..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={handleInputChange}
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Todos los estados</option>
                <option value="open">Abierto</option>
                <option value="pending">Pendiente</option>
              </select>
            </div>
          </div>
        </nav>
    </main>
</>
    )
}

export default SearchBarTicket;