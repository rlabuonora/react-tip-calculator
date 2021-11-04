import './App.css';
import logo from "./images/logo.svg";

import { useState } from "react";
import TipButton from './components/TipButton';
import CustomTip from './components/CustomTip';
import InputTotalBill from './components/InputTotalBill';
import InputPeople from './components/InputPeople';
import ShowOutputs from './components/ShowOutputs';




function App() {

  const [tipPercent, setTip] = useState(0.1);
  const [totalBill, setTotalBill] = useState(0);
  const [nPeople, setPeople] = useState(0);
  
  return (
    <div class="container">
      <header>
        <img src={logo} alt="Splitter Logo" />
      </header>
      <main>
        <div className="input-col">
          <section>
            <InputTotalBill 
              label={'Bill'} 
              totalBill={totalBill}
              setTotalBill={setTotalBill}
            />
          </section>
          <section>
            <h2>Select Tip %</h2>
            { [.05, .1, .15, .25, .5].map(
              p => <TipButton
                    selected={tipPercent === p}
                    rate={p}
                    onChangeTip={setTip}
                    />
            )}
            <CustomTip 
              label={'Custom Tip'}
              tip={tipPercent}
              onChangeTip={setTip}
            />
          </section>
          <section>
            <InputPeople 
              label={"Number of People"}
              nPeople={ nPeople }
              onChangePeople={ setPeople }
            />
          </section>
      </div>

      <ShowOutputs 
          totalBill={totalBill}
          tipPercent={tipPercent}
          nPeople ={nPeople}
          onReset = {() => {

            setPeople(0);
            setTip(0.1);
            setTotalBill(0);

          }
          }
      />
      </main>
    </div>
  );
}

export default App;
