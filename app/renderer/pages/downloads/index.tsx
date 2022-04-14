import {observer} from "mobx-react-lite";
import DefaultLayout from "../../layouts/DefaultLayout";
import Container from "../../components/common/Container";
import ActiveDownload from "../../components/downloads/ActiveDownload";
import PastDownload from "../../components/downloads/PastDownload";

const IndexPage = observer(() => {

    return (
        <DefaultLayout fullHeight={false}>
            <div className="pt-4 h-full bg-midnight-400">
                <Container>
                    <ActiveDownload />
                    <h1 className="mt-8 text-2xl font-bold text-gray-200">
                        Completed downloads:
                    </h1>
                    <div className="my-2 divider" />
                    <div className="flex flex-col space-y-4">
                        <PastDownload />
                        <PastDownload />
                    </div>
                </Container>
            </div>
        </DefaultLayout>
    )
})

export default IndexPage
