import InfoSideBarClient from '../../components/chat/side-bar/info-side-bar-client'
import HeaderChat from '../../components/chat/header-chat/header-chat'
import MessagesContainer from '../../components/chat/messages-container/messages-container'
import ChatInputMessage from '../../components/chat/chat-input-message/chat-input-message'

function ClientsChat() {
  return (
    <>
      <InfoSideBarClient />
      <div className="flex-1 flex flex-col p-2">
        <HeaderChat />
        <MessagesContainer />
        <ChatInputMessage />
      </div>
    </>
  )
}

export default ClientsChat;