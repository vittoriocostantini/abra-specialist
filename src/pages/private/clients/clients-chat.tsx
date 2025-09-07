import { useState } from 'react'
import { InfoSideBarClient, HeaderChat, MessagesContainer, ChatInputMessage } from '../../../components/chat'

// Definir el tipo Message igual que en messages-container
interface Message {
  id: number
  text: string
  sender: 'client' | 'agent'
  time: string
  initials: string
}

function ClientsChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return
    setMessages(prev => [
      ...prev,
      { id: prev.length + 1, text: input, sender: 'agent', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), initials: 'JD' }
    ])
    setInput('')
  }

  return (
    <>
      <InfoSideBarClient />
      <div className="flex-1 flex flex-col p-2">
        <HeaderChat />
        <MessagesContainer messages={messages} />
        <ChatInputMessage value={input} onChange={setInput} onSend={handleSend} />
      </div>
    </>
  )
}

export default ClientsChat;