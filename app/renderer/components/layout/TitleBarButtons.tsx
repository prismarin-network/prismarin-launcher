import * as electron from "electron";
import React from "react";
import {MdMinimize, MdClose, MdSettings} from "react-icons/md"
import TitleBarButton from "./TitleBarButton";
import { Reoverlay } from 'reoverlay';
import CloseModal from "../modals/CloseModal";
import SettingsModal from "../modals/SettingsModal";
import authStore from "../../store/auth";

const TitleBarButtons = () => {
    const ipcRenderer = electron.ipcRenderer || false;

    const minimize = () => {
        if (ipcRenderer) {
            ipcRenderer.send('minimize')
        }
    }

    const showSettings = () => {
        Reoverlay.showModal(SettingsModal, {})
    }

    const close = () => {
        Reoverlay.showModal(CloseModal, {
            confirmText: "Are you sure you want to close the launcher?",
            close: () => {
                if (ipcRenderer) {
                    ipcRenderer.send('close')
                }
            },
            logout: () => {
                authStore.logout()
            }
        })
    }

    return (
        <div className="flex justify-end items-center p-2 text-center titleBar">
            <div className="flex gap-2 items-center text-white">
                <TitleBarButton onClick={minimize}>
                    <MdMinimize size="1.25rem" />
                </TitleBarButton>
                <TitleBarButton onClick={showSettings}>
                    <MdSettings className="pt-[1.5px]" size="1.25rem" />
                </TitleBarButton>
                <TitleBarButton onClick={close}>
                    <MdClose className="pt-[1.5px]" size="1.25rem" />
                </TitleBarButton>
            </div>
        </div>
    )
}

export default TitleBarButtons
