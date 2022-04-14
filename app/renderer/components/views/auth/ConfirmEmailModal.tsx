import Modal from "../../common/Modal";
import PinCode from "../../common/inputs/PinCode";
import {useState} from "react";

interface ConfirmEmailModalProps {
    isOpen: boolean,
    email: string,
    verifyCode: (code: string) => Promise<void>,
}

const ConfirmEmailModal = ({isOpen, email, verifyCode}: ConfirmEmailModalProps) => {
    const [loading, setLoading] = useState(false)

    const verifyPin = (value: string) => {
        setLoading(true)
        verifyCode(value).then(() => {
            setLoading(false)
        })
    }

    return (
        <Modal isOpen={isOpen} maxWidth="max-w-lg">
            <div className="py-10 px-4 w-full text-center rounded-lg bg-midnight-600">
                <div className="flex flex-col pb-8 space-y-3">
                    <h1 className="text-3xl font-bold">
                        Please confirm your email
                    </h1>
                    <h2 className="text-sm text-gray-200">
                        We sent an email to <kbd className="kbd">{email}</kbd>. Please check your inbox for your confirmation code.
                    </h2>
                </div>
                <div className="divider">
                    <PinCode
                        disabled={loading}
                        onComplete={verifyPin}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmEmailModal
