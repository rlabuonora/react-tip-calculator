import './App.css';
import logo from "./images/logo.svg";

function App() {
  return (
    <>
    <header>
      <img src={logo} alt="Splitter Logo" />
    </header>
    <main>
      <div className="input-col">
      <form>
        <h2>Bill</h2>
        <input type="numeric" 
               name="input-bill-total"
               value={142.55} />
        <h2>Select Tip %</h2>
        <button>5%</button>
        <button>10%</button>
        <button className="active">15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="text" 
               placeholder="Custom" 
               className="custom" />
        <h2>Number of People</h2>
        <input type="numeric" 
               name="input-persons-total" 
               value={5} />
      </form>
    </div>
    <div className="output-col">
      <div className="output-item">
        <div className="output-label">
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>
        <p className="output-number">$4.27</p>
      </div>
      <div className="output-item">
        <div className="output-label">
          <h2>Total</h2>
          <p>/ person</p>
        </div>
        <p className="output-number">$32.79</p>
      </div>
      <div className="output-item">
        <button className="reset">
          Reset
        </button>
      </div>
    </div>
    </main>
    </>
  );
}

export default App;
