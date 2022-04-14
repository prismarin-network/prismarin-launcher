import {observer} from "mobx-react-lite";
import DefaultLayout from "../layouts/DefaultLayout";
import BackgroundImageWithGradientBottom from "../components/common/background/BackgroundImageWithGradientBottom";

const IndexPage = observer(() => {

    return (
        <DefaultLayout>
            <BackgroundImageWithGradientBottom classes="h-[625px]" imageSRC="/images/dungeon.jpeg">
                <div className="flex flex-col justify-end px-10 space-y-4 h-full pb-[100px]">
                    <div>
                        <h1 className="text-5xl">
                            Dungeon Masters
                        </h1>
                        <div className="flex items-center mt-3 space-x-2">
                            <div className="badge badge-primary">NEW</div>
                            <div className="badge badge-error">ADVENTURE</div>
                            <div className="badge badge-info">MULTIPLAYER</div>
                        </div>
                    </div>
                    <p className="max-w-2xl text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis luctus mauris ac tempor.
                        Ut in odio ligula. Nulla facilisi. Fusce non sodales nibh. Aenean a nulla varius mi scelerisque
                        placerat ac a lacus. Nulla dignissim auctor mi vel vulputate. Vestibulum orci dui, convallis vel
                        pretium eu, commodo ac felis. Nam sit amet volutpat libero, at eleifend est.
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className="btn">More information</button>
                        <button className="btn btn-primary">Install Now!</button>
                    </div>
                </div>
            </BackgroundImageWithGradientBottom>
        </DefaultLayout>
    )
})

export default IndexPage
