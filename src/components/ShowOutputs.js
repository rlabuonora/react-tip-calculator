import { calculatePerPerson, calculateTip} from "../helpers";
import ResetButton from "./ResetButton";


export default function ShowOutputs({totalBill, tipPercent, nPeople, onReset = f => f}) {

  const tip = calculateTip(totalBill, tipPercent);

  const perPerson = calculatePerPerson(totalBill, tipPercent, nPeople);
  console.log(perPerson);
  

  return(
    <div className="output-col">
    <div className="output-item">
      <div className="output-label">
        <h2>Tip Amount</h2>
        <p>/ person</p>
      </div>
      <p className="output-number">{totalBill === 0 ? 0 :  tip}</p>
    </div>
    <div className="output-item">
      <div className="output-label">
        <h2>Total</h2>
        <p>/ person</p>
      </div>
      <p className="output-number">
        {nPeople === 0 ? 0 :  perPerson}</p>
    </div>
    <ResetButton onReset={onReset}/>
  </div>

   ); 
}