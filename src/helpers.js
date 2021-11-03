export const calculateTip = (bill, rate) => {
    const tip = bill * rate;
    return tip.toFixed(2);
 }
  
export const calculatePerPerson = (total, tipPercent, n_people) => {
    const perPerson = (total * (1 + tipPercent)) / n_people;
    return perPerson.toFixed(2);
}