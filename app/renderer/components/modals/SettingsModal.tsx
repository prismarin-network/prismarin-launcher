import BaseModal from "./BaseModal";

const SettingsModal = () => {
    return (
        <BaseModal>
            <h1 className="text-2xl font-bold">
                Client Settings
            </h1>
            <div className="my-1 divider" />
            <div className="flex gap-5">
                <ul className="w-48 menu">
                    <li className="bordered"><a>General</a></li>
                    <li><a>Notifications</a></li>
                    <li><a>Social</a></li>
                    <li><a>Download</a></li>
                    <li><a>About</a></li>
                </ul>
                <div className="flex overflow-y-auto flex-col space-y-5 w-[550px] h-[480px]">
                    <div className="flex justify-between items-center">
                        <label>
                            Window size:
                        </label>
                        <select className="w-full max-w-xs select select-bordered">
                            <option disabled>1280 x 720</option>
                            <option selected>1600 x 900</option>
                            <option disabled>1920 x 1080</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <label>
                            Window size:
                        </label>
                        <select className="w-full max-w-xs select select-bordered">
                            <option disabled>1280 x 720</option>
                            <option selected>1600 x 900</option>
                            <option disabled>1920 x 1080</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="btn">
                    Close and save
                </button>
            </div>
        </BaseModal>
    )
}

export default SettingsModal
