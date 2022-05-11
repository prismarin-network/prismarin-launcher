import {MdOutlinePause, MdClose} from "react-icons/md"
import {formatBytes} from "../../helpers/formatBytes";
import downloadStore from "../../store/download";
import Link from "next/link"

interface ActiveDownloadProps {
    status: 'DOWNLOADING' | 'DECOMPRESSING' | 'RECLAIMING' | 'COMPLETE',
    currentItem: Game,
    downloadProgress: DownloadProgress
}

const ActiveDownload = ({status, currentItem, downloadProgress}: ActiveDownloadProps) => {
    return (
        <div className="flex items-center py-5 px-6 space-x-5 w-full rounded-lg bg-midnight-600">
            {currentItem ? (
                <>
                    <div className="bg-cover rounded-lg h-[200px] w-[155px]"
                         style={{backgroundImage: "url('/posters/inverted_souls.png')"}}/>
                    <div className="flex flex-col flex-grow space-y-4">
                        <h1 className="text-3xl font-bold text-gray-300">
                            {currentItem.name}
                        </h1>
                        <div className="flex items-center space-x-4">
                            {(downloadProgress && status === 'DOWNLOADING') ? (
                                <progress className="h-4 w-[400px] progress" value={downloadProgress.percent} max={1}/>
                            ) : (
                                <progress className="h-4 w-[400px] progress" value={1} max={1}/>
                            )}

                            {status === 'DOWNLOADING' ? (
                                <div className="flex items-center space-x-2">
                                    <button className="btn btn-square btn-sm" onClick={() => downloadStore.pause()}>
                                        <MdOutlinePause size="1.25rem"/>
                                    </button>
                                    <button className="btn btn-square btn-active btn-sm"
                                            onClick={() => downloadStore.cancel()}>
                                        <MdClose size="1.25rem"/>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <button disabled className="btn btn-square btn-sm">
                                        <MdOutlinePause size="1.25rem"/>
                                    </button>
                                    <button disabled className="btn btn-square btn-active btn-sm">
                                        <MdClose size="1.25rem"/>
                                    </button>
                                </div>
                            )}
                        </div>
                        <div id="statusUpdate">
                            <p className="text-sm text-gray-400">
                                {status}
                            </p>
                            {downloadProgress && (
                                <p className="text-sm text-gray-600">
                                    {formatBytes(downloadProgress.transferredBytes)} / {formatBytes(downloadProgress.totalBytes)}
                                </p>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="py-5 w-full text-center">
                    <h1 className="text-3xl text-gray-400">
                        There is nothing downloading right now!
                    </h1>
                    <p className="text-lg text-gray-500">
                        Find something to download on our games page.
                    </p>
                    <Link href="/" passHref={true}>
                        <a>
                            <button className="mt-6 btn">
                                Visit games page
                            </button>
                        </a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ActiveDownload
