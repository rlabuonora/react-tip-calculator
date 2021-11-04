export default function InputPeople({nPeople, label, onChangePeople = f => f}) {
    return(
        <label>
            <span>{label}</span>
            <input type="number" 
                onChange={ (e) => {
                    const nPeople = e.target.value;
                    onChangePeople(nPeople);
                }}   
                name="input-persons-total"
                value={nPeople} 
            />

        </label>
    );
}