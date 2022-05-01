import {MdOutlinePause, MdClose, MdOutlinePlayArrow} from "react-icons/md"
import {formatBytes} from "../../helpers/formatBytes";
import downloadStore from "../../store/download";

const ActiveDownload = ({progress, status}: {progress?: GameProgress, status?: string}) => {
    return (
        <div className="flex items-center py-5 px-6 space-x-5 w-full rounded-lg bg-midnight-600">
            <div className="bg-cover rounded-lg h-[200px] w-[155px]" style={{backgroundImage: "url('/posters/inverted_souls.png')"}} />
            <div className="flex flex-col flex-grow space-y-3">
                <h1 className="text-3xl font-bold text-gray-300">
                    Inverted Souls
                </h1>
                <div className="flex items-center space-x-4">
                    {progress && (
                        <progress className="h-4 w-[400px] progress"  value={progress.percent} max={1} />
                    )}
                    <div className="flex items-center space-x-2">
                        <button className="btn btn-square btn-sm" onClick={() => downloadStore.togglePause()}>
                            {status === 'PAUSED' ? (
                                <MdOutlinePlayArrow size="1.25rem" />
                            ): (
                                <MdOutlinePause size="1.25rem" />
                            )}
                        </button>
                        <button className="btn btn-square btn-active btn-sm" onClick={() => downloadStore.cancel()}>
                            <MdClose size="1.25rem" />
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400">
                        {status}
                    </p>
                    {progress && (
                        <p className="text-sm text-gray-600">
                            {formatBytes(progress.transferredBytes)} / {formatBytes(progress.totalBytes)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ActiveDownload
