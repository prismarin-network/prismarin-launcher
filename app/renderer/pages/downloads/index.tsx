import {observer} from "mobx-react-lite";
import DefaultLayout from "../../layouts/DefaultLayout";
import Container from "../../components/common/Container";
import ActiveDownload from "../../components/downloads/ActiveDownload";
import AuthWrapper from "../../components/AuthWrapper";
import downloadStore from "../../store/download";
import electron from "electron";
import {useEffect} from "react";

const IndexPage = observer(() => {
    const ipcRenderer = electron.ipcRenderer || false;

    const download = () => {
        downloadStore.download("https://api.prismar.in/games/dungeon_outlast/download")
    }

    useEffect(() => {
        if (ipcRenderer) {
            ipcRenderer.on("downloadOnProgress", (event, progress: GameProgress) => {
                downloadStore.updateProgress(progress)
            });
        }
    }, [ipcRenderer])

    return (
        <AuthWrapper>
            <DefaultLayout fullHeight={false}>
                <div className="pt-4">
                    <Container>
                        <ActiveDownload progress={downloadStore.progress} status={downloadStore.status} />
                    </Container>
                </div>
                <button className="btn" onClick={download}>
                    Test
                </button>
            </DefaultLayout>
        </AuthWrapper>
    )
})

export default IndexPage
