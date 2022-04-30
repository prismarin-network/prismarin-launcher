import { Reoverlay, ModalContainer } from 'reoverlay';
import ConfirmModal from "./ConfirmModal";

// Here you pass your modals to Reoverlay
Reoverlay.config([
    {
        name: "ConfirmModal",
        component: ConfirmModal
    },
])

const ModalWrapper = () => {
    return <ModalContainer />
}

export default ModalWrapper
