export default function CustomTip({label, tip, onChangeTip = f => f}) {

    return(
      <label className="custom-tip">
        <span>{label}</span>
        <input
            onBlur={(e) => {
              const newVal=e.target.value.replace(/%$/,"");
              onChangeTip(newVal / 100);
              e.target.value = `${newVal}%`;
            }} 
            type="text" 
            placeholder="Custom" 
            className="custom" 
        />
      </label>
    );

}