import Modal from "../../common/Modal";
import PinCode from "../../common/inputs/PinCode";
import {useEffect, useState} from "react";
import {useCountdown} from "../../../hooks/useCountdown";
import {toast} from "react-toastify";

interface ConfirmEmailModalProps {
    isOpen: boolean,
    email: string,
    verifyCode: (code: string) => Promise<void>,
    resendMail: () => void,
}

const RESEND_EMAIL_COUNTDOWN_TIME = 60

const ConfirmEmailModal = ({isOpen, email, verifyCode, resendMail}: ConfirmEmailModalProps) => {
    const [loading, setLoading] = useState(false)
    const {countDown, resetCountDown, setPaused} = useCountdown(RESEND_EMAIL_COUNTDOWN_TIME)

    useEffect(() => {
        if (!isOpen) {
            resetCountDown()
        }
    }, [isOpen, resetCountDown])

    useEffect(() => {
        if (countDown === 0) {
            resetCountDown()
        }
    }, [countDown, resetCountDown])

    const verifyPin = (value: string) => {
        setLoading(true)
        verifyCode(value).then(() => {
            setLoading(false)
        })
    }

    const resendPin = () => {
        setPaused(false)
        resendMail()
        toast.success("A new code has been generated and sent to your inbox.")
    }

    return (
        <Modal isOpen={isOpen} maxWidth="max-w-lg">
            <div className="py-10 px-7 w-full text-center rounded-lg bg-midnight-600">
                <div className="flex flex-col pb-8 space-y-3">
                    <div className="divider">
                        <h1 className="text-3xl font-bold">
                            Please confirm your email
                        </h1>
                    </div>
                    <h2 className="text-sm text-gray-200">
                        We sent an email containing a confirmation code to <b>{email}</b>. The email may be in the spam folder.
                    </h2>
                </div>
                <div className="mb-7">
                    <PinCode
                        disabled={loading}
                        onComplete={verifyPin}
                    />
                </div>
                <button className="btn btn-sm" disabled={!!countDown} onClick={resendPin}>
                    Request new code {countDown && <span className="ml-1">[{countDown}<span className="lowercase">s</span>]</span>}
                </button>
            </div>
        </Modal>
    )
}

export default ConfirmEmailModal
