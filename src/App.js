// import logo from './logo.svg';
// import './App.css';
import SampleFunctional from './components/SampleFunctional';
import SampleClassBased from './components/SampleClassBased';

function App() {
  return (
    <>
      <h1>Samples</h1>
      <div className="sampleContainer">
        <SampleFunctional />
        <SampleClassBased />
      </div>
    </>
  );
}

export default App;
