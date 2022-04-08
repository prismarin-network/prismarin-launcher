import AuthLayout from "../../layouts/AuthLayout";
import Link from "next/link";
import Logo from "../../components/common/Logo";

const Login = () => {
    return (
        <AuthLayout>
            <div className="flex flex-col justify-center items-center h-full">
                <Link href="/">
                    <a className="flex items-center space-x-2">
                        <Logo height="100px" width="100px" />
                        <div className="leading-3">
                            <h1 className="text-3xl text-center">
                                Prismarin
                            </h1>
                            <h3 className="text-lg text-gray-300">
                                Game Launcher
                            </h3>
                        </div>
                    </a>
                </Link>

                <form>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Login
