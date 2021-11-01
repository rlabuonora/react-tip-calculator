import { calculatePerPerson, calculateTip} from "../helpers";
import ResetButton from "./ResetButton";


export default function ShowOutputs({totalBill, tipPercent, nPeople, onReset = f => f}) {

  const tip = calculateTip(totalBill, tipPercent);

  const tipPerson = calculatePerPerson(tip, nPeople);
  

  return(
    <div className="output-col">
    <div className="output-item">
      <div className="output-label">
        <h2>Tip Amount</h2>
        <p>/ person</p>
      </div>
      <p className="output-number">{isNaN(tip) ? "" :  tip}</p>
    </div>
    <div className="output-item">
      <div className="output-label">
        <h2>Total</h2>
        <p>/ person</p>
      </div>
      <p className="output-number">
        {isNaN(tipPerson) ? "" :  tipPerson}</p>
    </div>
    <ResetButton onReset={onReset}/>
  </div>

   ); 
}