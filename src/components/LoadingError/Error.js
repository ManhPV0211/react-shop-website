function ErrorMessage({variant = "alert-info", children}) {
    return (
        <div className={`alert ${variant}`}>{children}</div>
    )
};

export default ErrorMessage;