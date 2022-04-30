import React from 'react';
import { Reoverlay } from 'reoverlay';
import BaseModal from "./BaseModal";

const ConfirmModal = ({ confirmText, onConfirm }: {confirmText: string, onConfirm: () => void}) => {

    const closeModal = () => {
        Reoverlay.hideModal();
    }

    return (
        <BaseModal>
            <p className="text-lg text-gray-400">
                {confirmText}
            </p>
            <div className="flex justify-end items-center mt-8 space-x-3">
                <button className="text-xs btn btn-ghost" onClick={closeModal}>No, cancel</button>
                <button className="py-1 text-xs btn btn-primary" onClick={onConfirm}>Yes, confirm</button>
            </div>
        </BaseModal>
    )
}

export default ConfirmModal
