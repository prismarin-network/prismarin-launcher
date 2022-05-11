import downloadStore from "../../store/download";

interface QueuedDownloadProps {
    game: Game
    canDownload: boolean
}

const QueuedDownload = ({game, canDownload}: QueuedDownloadProps) => {

    const downloadGame = () => {
        downloadStore.removeFromQueue(game.id)
        downloadStore.downloadGame(game)
    }

    return (
        <div className="flex justify-between items-center py-5 px-6 w-full rounded-lg bg-midnight-600">
            <h1 className="text-2xl font-bold text-gray-300">
                {game.name}
            </h1>
            {canDownload ? (
                <button className="btn" onClick={downloadGame}>
                    Download now
                </button>
            ): (
                <button className="btn" disabled>
                    Download now
                </button>
            )}
        </div>
    )
}

export default QueuedDownload
