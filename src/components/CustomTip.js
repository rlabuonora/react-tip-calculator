export default function CustomTip({onChangeTip = f => f}) {

    return(
        <input
            onBlur={(e) => {
            const val = e.target.value;
            onChangeTip(val / 100);
            e.target.value = `${val}%`;
            }} 
            type="text" 
            placeholder="Custom" 
            className="custom" />
    );

}