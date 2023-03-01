// import './App.css';
import ShippingGrid from './ShippingGrid/shippingGrid';
import data from "./testShippingData.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShippingGrid data={data}></ShippingGrid>
      </header>
    </div>
  );
}

export default App;
