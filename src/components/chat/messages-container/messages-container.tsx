function MessagesContainer() {
    return (
        <div className="flex-1 overflow-y-auto  bg-gray-100">
            <div className="h-full bg-white rounded-lg p-4 space-y-4">
                {/* Mensaje recibido */}
                <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                        JD
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm max-w-[70%]">
                        <p className="text-gray-800">Necesito ayuda con mi ticket</p>
                        <span className="text-xs text-gray-500">10:30 AM</span>
                    </div>
                </div>

                {/* Mensaje enviado */}
                <div className="flex items-start justify-end space-x-2">
                    <div className="bg-blue-500 p-3 rounded-lg shadow-sm max-w-[70%]">
                        <p className="text-white">Hola, ¿cómo puedo ayudarte hoy?</p>
                        <span className="text-xs text-blue-100">10:31 AM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesContainer;