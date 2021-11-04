export default function InputTotalBill({label, totalBill, setTotalBill = f => f }) {

 
    return(
        <label>
            <span>{label}</span>
            <input type="number" 
                   name="input-bill-total"
                   value={totalBill}
                   
                   onChange={
                       (e) => {
                           setTotalBill(e.target.value);
                       }
                   }
            />
        </label>
    );
}