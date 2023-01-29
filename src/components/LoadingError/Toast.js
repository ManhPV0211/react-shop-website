import { ToastContainer } from "react-toastify";

function Toast() {
    return (
        <div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                autoClose={4000}
            />
            <ToastContainer />
        </div>
    )
};

export default Toast;