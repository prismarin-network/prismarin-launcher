import * as electron from "electron";
import React from "react";
import {MdMinimize, MdClose, MdSettings} from "react-icons/md"
import TitleBarButton from "./TitleBarButton";

const TitleBarButtons = () => {
    const ipcRenderer = electron.ipcRenderer || false;

    const minimize = () => {
        if (ipcRenderer) {
            ipcRenderer.send('minimize')
        }
    }

    const close = () => {
        if (ipcRenderer) {
            ipcRenderer.send('close')
        }
    }

    return (
        <div className="flex justify-end items-center p-2 text-center">
            <div className="flex gap-2 items-center text-white">
                <TitleBarButton onClick={minimize}>
                    <MdMinimize size="1.25rem" />
                </TitleBarButton>
                <TitleBarButton>
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
