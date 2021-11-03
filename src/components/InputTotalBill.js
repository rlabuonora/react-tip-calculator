export default function InputTotalBill({ totalBill, setTotalBill = f => f }) {

 
    return(
        <input type="number" 
               name="input-bill-total"
               value={totalBill}
               
               onChange={
                   (e) => {
                       setTotalBill(e.target.value);
                   }
               }

        />
    );
}