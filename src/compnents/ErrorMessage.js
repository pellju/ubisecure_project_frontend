const ErrorMessage = ({ message }) => {
    
    if (!message) {
        return (
            <div></div>
        )
    } else {
        return (
            <div>
                <b>Error: {message}</b>
            </div>
        )
    }
}

export default ErrorMessage