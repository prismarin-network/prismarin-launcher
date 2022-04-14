import AuthLayout from "../../layouts/AuthLayout";
import Link from "next/link";
import Logo from "../../components/common/Logo";
import ConfirmEmailModal from "../../components/views/auth/ConfirmEmailModal";
import {FormEvent, useState} from "react";
import {createEmailVerificationCode, registerUser, verifyEmailVerificationCode} from "../../core/auth";
import {useRouter} from "next/router";
import {toast} from "react-toastify";

const Register = () => {
    const router = useRouter()

    const [username, setUsername] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const [openConfirmModal, setOpenConfirmModal] = useState(false)

    const sendVerificationCode = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!username || !email || !password) {
            toast.warn("Please enter a username, email and password.")
            return;
        }
        setOpenConfirmModal(true)
        createEmailVerificationCode(email).catch(() => {
            setOpenConfirmModal(false)
        })
    }

    const verifyCode = (code: string): Promise<void> => {
        return new Promise((resolve => {
            verifyEmailVerificationCode(code).then(() => {
                registerUser(username, email, password, code).then(() => {
                    toast.success("Your account was successfully created! You can now login.")
                    router.push("/auth/login").catch(error => console.error(error))
                })
            }).catch(() => {
                toast.error("This code is not valid. Please try again or request a new code.")
            }).finally(() => {
                resolve()
            })
        }))
    }

    return (
        <div>
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
                    <form className="flex flex-col mt-16 space-y-3 w-[300px]" onSubmit={sendVerificationCode}>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full input"
                            onChange={event => setUsername(event.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full input"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full input"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <button className="btn" type="submit">
                            Register
                        </button>
                        <div className="mt-4 text-sm">
                            <p className="text-gray-400">
                                Already have an account?
                            </p>
                            <Link href={"/auth/login"} passHref={true}>
                                <a className="text-blue-400" href="#">Sign in here</a>
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
            <ConfirmEmailModal
                isOpen={openConfirmModal}
                email={email}
                verifyCode={verifyCode}
            />
        </div>
    )
}

export default Register
