export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="alert alert-error">
        <div className="flex-1">
          <div>Errorr</div>
          <label>{message}</label>
        </div>
      </div>
    );
  }
  