export default function CustomTip({tip, onChangeTip = f => f}) {

    return(
        <input
            onBlur={(e) => {
              const newVal=e.target.value.replace(/%$/,"");
              onChangeTip(newVal / 100);
              e.target.value = `${newVal}%`;
            }} 
            type="text" 
            placeholder="Custom" 
            className="custom" />
    );

}