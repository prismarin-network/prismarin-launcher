import {observer} from "mobx-react-lite";
import DefaultLayout from "../../layouts/DefaultLayout";
import Container from "../../components/common/Container";
import ActiveDownload from "../../components/downloads/ActiveDownload";
import AuthWrapper from "../../components/AuthWrapper";
import downloadStore from "../../store/download";
import QueuedDownload from "../../components/downloads/QueuedDownload";

const IndexPage = observer(() => {
    return (
        <AuthWrapper>
            <DefaultLayout fullHeight={false}>
                <div className="pt-4">
                    <Container>
                        <ActiveDownload
                            status={downloadStore.status}
                            currentItem={downloadStore.currentItem}
                            downloadProgress={downloadStore.downloadProgress}
                        />

                        {downloadStore.queue.length > 0 && (
                            <>
                                <h1 className="my-5 ml-1 text-2xl font-bold text-gray-300">
                                    Queued downloads:
                                </h1>
                                <div className="flex flex-col space-y-3">
                                    {downloadStore.queue.map((game, index) => (
                                        <QueuedDownload key={index} game={game} canDownload={downloadStore.status === undefined} />
                                    ))}
                                </div>
                            </>
                        )}
                    </Container>
                </div>
            </DefaultLayout>
        </AuthWrapper>
    )
})

export default IndexPage
