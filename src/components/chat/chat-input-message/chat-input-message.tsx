import { FaPaperPlane } from 'react-icons/fa'

function ChatInputMessage() {
    return (
  <>
    <footer className="p-4 bg-white border-t border-gray-200  rounded-lg mt-2">
       <div className="flex items-center space-x-2">
         <input
           type="text"
           placeholder="Escribe un mensaje..."
           className="flex-1 p-2 rounded-lg  bg-gray-100 focus:outline-none "/>
         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
           <FaPaperPlane />
         </button>
       </div>
    </footer>
  </>
    )
}

export default ChatInputMessage;