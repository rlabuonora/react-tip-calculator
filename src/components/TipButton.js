export default function TipButton({ rate, selected, onChangeTip = f => f }) {
    return(
        <button 
            onClick={() => 
            onChangeTip(rate)}
            className={selected ? "active": null}>
            { rate * 100}%
        </button>

    );
}
