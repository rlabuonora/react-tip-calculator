export default function InputPeople({nPeople, onChangePeople = f => f}) {
    return(
        <input type="number" 
            autocomplete="off"
            onChange={ (e) => {

                const nPeople = e.target.value;
                onChangePeople(nPeople);
                e.target.talue = nPeople;

            }}   
            name="input-persons-total" 
        />
    );
}