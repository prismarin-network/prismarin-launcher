import AuthLayout from "../../layouts/AuthLayout";
import Link from "next/link";
import Logo from "../../components/common/Logo";
import {FormEvent, useState} from "react";
import {toast} from "react-toastify";
import authStore from "../../store/auth";
import {useRouter} from "next/router";
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {
    const router = useRouter()
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const authenticate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!username || !password) {
            toast.warn("Please enter your username and password to continue")
            return;
        }
        try {
            await authStore.authenticateWithLoginDetails(username, password)
            await router.push('/')
        }
        catch {
            toast.warn("The username or password are incorrect.")
        }
    }

    return (
        <AuthLayout>
            <div className="flex relative flex-col items-center h-full pt-[200px]">
                <a className="flex items-center space-x-2">
                    <Logo height="100px" width="100px"/>
                    <div className="leading-3">
                        <h1 className="text-3xl text-center">
                            Prismarin
                        </h1>
                        <h3 className="text-lg text-gray-300">
                            Game Launcher
                        </h3>
                    </div>
                </a>
                <form className="flex flex-col mt-16 space-y-3 w-[300px]" onSubmit={authenticate}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full input"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full input"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className="btn" type="submit">
                        Login
                    </button>
                    <div className="mt-4 text-sm">
                        <p className="text-gray-400">
                            Do not have an account yet?
                        </p>
                        <Link href={"/auth/register"} passHref={true}>
                            <a className="text-blue-400">
                                Create one now
                            </a>
                        </Link>
                    </div>
                </form>
                <div id="PrismarinVersion" className="absolute bottom-4 left-4">
                    <p className="text-gray-600">
                        Version 0.1.1
                    </p>
                </div>
            </div>
        </AuthLayout>
    )
})

export default LoginPage
