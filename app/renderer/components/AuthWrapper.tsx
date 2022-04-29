import React from "react";
import authStore from "../store/auth";
import {observer} from "mobx-react-lite";
import LoginPage from "../pages/auth/login";

const AuthWrapper = observer(({children}: {children: React.ReactNode}) => {
    if (!authStore.user) {
        return <LoginPage />
    }

    return (
        <>
            {children}
        </>
    )
})

export default AuthWrapper
