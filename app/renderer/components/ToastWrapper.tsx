import {ToastContainer} from "react-toastify";

const ToastWrapper = () => {
    return <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        limit={5}
    />
}

export default ToastWrapper
