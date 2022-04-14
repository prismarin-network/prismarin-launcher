import {MdOutlinePause, MdClose} from "react-icons/md"
import {HiOutlineClock} from "react-icons/hi"

const ActiveDownload = () => {
    return (
        <div className="flex items-center py-5 px-6 space-x-5 w-full rounded-lg bg-midnight">
            <div className="bg-cover rounded-lg h-[200px] w-[155px]" style={{backgroundImage: "url('/posters/inverted_souls.png')"}} />
            <div className="flex flex-col flex-grow space-y-3">
                <h1 className="text-3xl font-bold text-gray-400">
                    Inverted Souls
                </h1>
                <div className="flex items-center space-x-4">
                    <progress className="h-4 w-[400px] progress" />
                    <div className="flex items-center space-x-2">
                        <button className="btn btn-square btn-sm">
                            <MdOutlinePause size="1.25rem" />
                        </button>
                        <button className="btn btn-square btn-active btn-sm">
                            <MdClose size="1.25rem" />
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400">
                        Buffering...
                    </p>
                    <p className="text-sm text-gray-600">
                        0.0/5.2 GB
                    </p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-600">
                    0 mb per second
                </p>
                <p className="flex items-center space-x-1 text-gray-500">
                    <HiOutlineClock className="pt-[2px]" />
                    <span>Unknown time remaining</span>
                </p>
            </div>
        </div>
    )
}

export default ActiveDownload
