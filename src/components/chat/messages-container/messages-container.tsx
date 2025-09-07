import { Virtuoso } from 'react-virtuoso'

interface Message {
  id: number
  text: string
  sender: 'client' | 'agent'
  time: string
  initials: string
}

interface MessagesContainerProps {
  messages: Message[]
}

function MessagesContainer({ messages }: MessagesContainerProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <div className="h-full bg-white rounded-lg p-4">
        <Virtuoso
          style={{ height: '100%' }}
          data={messages}
          itemContent={(_, msg) => (
            msg.sender === 'client' ? (
              <div className="flex items-start space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">{msg.initials}</div>
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm max-w-[70%]">
                  <p className="text-gray-800">{msg.text}</p>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-end space-x-2 mb-2">
                <div className="bg-blue-500 p-3 rounded-lg shadow-sm max-w-[70%]">
                  <p className="text-white">{msg.text}</p>
                  <span className="text-xs text-blue-100">{msg.time}</span>
                </div>
              </div>
            )
          )}
        />
      </div>
    </div>
  )
}

export default MessagesContainer;