const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2>Oops! Something went wrong</h2>
      <p className="error-message">{message}</p>
      <button onClick={onRetry} className="btn-primary">
        Try Again
      </button>
    </div>
  )
}

export default ErrorMessage