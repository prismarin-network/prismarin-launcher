import AuthLayout from "../../layouts/AuthLayout";
import Link from "next/link";
import Logo from "../../components/common/Logo";

const Login = () => {
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
                <form className="flex flex-col mt-16 space-y-3 w-[300px]">
                    <input type="text" placeholder="Username" className="w-full input"/>
                    <input type="password" placeholder="Password" className="w-full input"/>
                    <Link href="/" passHref={true}>
                        <button className="btn">Login</button>
                    </Link>
                    <div className="mt-4 text-sm">
                        <p className="text-gray-400">
                            Do not have an account yet?
                        </p>
                        <a className="text-blue-400" href="#">Create one now</a>
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
}

export default Login
