export default function ResetButton({ onReset = f => f}) {
    return(
      <div className="output-item">
        <button
            onClick={onReset} 
            className="reset">
            Reset
        </button>
    </div>
    );
}