export default function InputPeople({nPeople, onChangePeople = f => f}) {
    return(
        <input type="number" 
            onChange={ (e) => {

                const nPeople = e.target.value;
                onChangePeople(nPeople);

            }}   
            name="input-persons-total"
            value={nPeople} 
        />
    );
}