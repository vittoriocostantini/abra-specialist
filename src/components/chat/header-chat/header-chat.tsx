import { FaCircle, FaEllipsisH, FaTicketAlt } from 'react-icons/fa'

function HeaderChat() {
    return (
        <>
            <header className="p-10 bg-gray-100">
       <div className="flex items-center space-x-3">
         <div className=" flex-col">
           <div className="flex items-center space-x-3">
             <div className="w-20 h-20 rounded-full bg-[#62929E] flex items-center justify-center text-white">
               JD
             </div>
             <div className="flex flex-col">
               <h2 className="font-semibold text-gray-900 text-4xl">Juan Doe</h2>
               <div className="flex items-center space-x-2">
                 <p className="text-2xl text-green-500 flex items-center">
                   <FaCircle size={10} className="mr-1" /> En línea
                 </p>
                 <span className="text-1xl text-amber-500 flex items-center border border-amber-500 rounded-lg px-2 py-1 ml-2">
                   <FaTicketAlt className="mr-1" />#54321
                 </span>
               </div>
             </div>
           </div>
         </div>
         <button className="bg-[#62929E] text-white px-4 py-2 rounded-lg hover:bg-[#4d757e] transition-colors ml-auto">
           Cambiar Estado
         </button>
         <button  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors ">
           <FaEllipsisH className="inline-block" />
         </button>
       </div>
     </header>
        </>
    )
}

export default HeaderChat;