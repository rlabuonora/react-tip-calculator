export const calculateTip = (bill, rate) => {
    const tip = bill * rate;
    return tip.toFixed(2);
 }
  
export const calculatePerPerson = (tip_amount, n_people) => {
    const per_person = tip_amount / n_people;
    return per_person.toFixed(2);
}