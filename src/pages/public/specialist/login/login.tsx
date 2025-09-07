import { LoginForm } from '../../../../components/login'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 w-full">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm flex flex-col items-center">
                <LoginForm />

            </div>
        </div>
    )
}

export default Login