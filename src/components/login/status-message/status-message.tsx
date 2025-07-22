import React from "react"

interface StatusMessageProps {
    message: string
    color: string
}

const StatusMessage: React.FC<StatusMessageProps> = ({ message, color }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 w-full">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm flex flex-col items-center">
            <span className={`font-semibold text-lg ${color}`}>{message}</span>
        </div>
    </div>
)

export default StatusMessage 