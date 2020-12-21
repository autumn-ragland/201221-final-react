// import logo from './logo.svg';
// import './App.css';

// import child components from components directory
import SampleFunctional from './components/SampleFunctional';
import SampleClassBased from './components/SampleClassBased';

function App() {
  return (
    // Fragment to group elements
    <>
      <h1>Samples</h1>
      {/* unused styling */}
      <div className="sampleContainer">
        {/* render child components */}
        <SampleFunctional />
        <SampleClassBased />
      </div>
    </>
  );
}

export default App;
