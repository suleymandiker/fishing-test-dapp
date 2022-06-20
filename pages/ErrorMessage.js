export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="alert alert-error">
        <div className="flex-1">
          <div>Error</div>
          <label>{message}</label>
        </div>
      </div>
    );
  }
  