import React, { useState } from "react"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../../services"
import { createUser } from "../../../redux/states/user"
import { PrivateRoutes   } from "../../../models"
import Logout from "../../logout/logout"
import { AppStore } from "../../../redux/store"

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: AppStore) => state.user);
    const hasUser = Boolean(user && user.email);

    const LoginUser = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(async () => {
            try {
                const user = await loginUser({ email, password })
                dispatch(createUser({ ...user }))
                navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
            } catch (error) {
                alert("Credenciales inválidas")
            } finally {
                setLoading(false)
            }
        }, 1200) // Simula un proceso async
    }

    return (
        <form className="flex flex-col gap-5 w-full" onSubmit={LoginUser}>
            {!hasUser && (
                <>
                    <div className="flex flex-col gap-1">
                        <input
                            id="email"
                            type="email"
                            autoFocus
                            placeholder="agente@abra.com"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none  transition"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="relative">
                            <input
                                required
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none  transition w-full"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500"
                                onClick={() => setShowPassword((v) => !v)}
                                tabIndex={-1}
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            >
                                {showPassword ? <HiEyeOff /> : <HiEye />}
                            </button>
                        </div>
                    </div>
                </>
            )}
            {!hasUser && (
                <button
                    onClick={LoginUser}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-md shadow transition flex items-center justify-center"
                    disabled={loading}
                >
                    {loading && (
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                    )}
                    {loading ? 'Ingresando...' : 'Ingresar'}
                </button>
            )}
            <Logout />
        </form>
    )
}

export default LoginForm