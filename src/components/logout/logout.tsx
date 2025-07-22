import { clearLocalStorage } from "../../utilities"
import { UserKey } from "../../redux/states/user"
import { resetUser } from "../../redux/states/user"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { AppStore } from "../../redux/store"

function Logout() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const user = useSelector((state: AppStore) => state.user);
    const hasUser = Boolean(user && user.email);
    
    const logOut = () => {
      if (!hasUser) return;
      setLoading(true);
      setTimeout(() => {
        clearLocalStorage(UserKey);
        dispatch(resetUser());
        setLoading(false);
      }, 1200); // Simula un proceso async
    };
    return (
      <button
        onClick={logOut}
        className={`w-full bg-red-500 ${hasUser ? 'hover:bg-red-600' : ''} text-white p-2 rounded-md flex items-center justify-center ${!hasUser ? 'opacity-50' : ''}`}
        disabled={loading || !hasUser}
      >
        {loading && (
          <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        )}
        {loading ? 'Cerrando sesión...' : 'Log Out'}
      </button>
    );
  }
  export default Logout;
  