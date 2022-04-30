import { ModalWrapper, Reoverlay } from 'reoverlay';
import React from "react";

const BaseModal = ({children}: {children: React.ReactNode}) => {
    const closeModal = () => {
        Reoverlay.hideModal();
    }

    return (
        <ModalWrapper animation="zoom">
            <div className="relative p-7 w-full rounded-lg bg-base-100 min-w-[450px]">
                <label htmlFor="my-modal-3" className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={closeModal}>✕</label>
                {children}
            </div>
        </ModalWrapper>
    )
}

export default BaseModal
