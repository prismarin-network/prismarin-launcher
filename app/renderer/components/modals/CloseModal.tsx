import BaseModal from "./BaseModal";
import React from "react";
import { Reoverlay } from 'reoverlay';

const CloseModal = ({ close, logout }: {logout: () => void, close: () => void}) => {

    const closeAndCloseModal = () => {
        Reoverlay.hideModal();
        close()
    }

    const logoutAndCloseModal = () => {
        Reoverlay.hideModal();
        logout()
    }

    return (
        <BaseModal>
            <div className="text-center">
                <h1 className="text-2xl font-bold">
                    Exit now?
                </h1>
                <p className="text-lg text-gray-400">
                    Do you want to exit the client or logout?
                </p>
                <div className="flex justify-center items-center mt-5 space-x-3">
                    <button className="btn btn-secondary" onClick={closeAndCloseModal}>
                        Close
                    </button>
                    <button className="btn btn-error" onClick={logoutAndCloseModal}>
                        Logout
                    </button>
                </div>
            </div>
        </BaseModal>
    )
}

export default CloseModal
