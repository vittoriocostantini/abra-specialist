import { FaPaperPlane } from 'react-icons/fa'

interface ChatInputMessageProps {
  value: string
  onChange: (v: string) => void
  onSend: () => void
}

function ChatInputMessage({ value, onChange, onSend }: ChatInputMessageProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSend()
  }
  return (
    <footer className="p-4 bg-white border-t border-gray-200 rounded-lg mt-2">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 p-2 rounded-lg bg-gray-100 focus:outline-none "
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          onClick={onSend}
        >
          <FaPaperPlane />
        </button>
      </div>
    </footer>
  )
}

export default ChatInputMessage;