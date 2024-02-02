import logo from './logo.svg';
import './App.css';
import ResponsiveGrid from './components/container';
import PrimarySearchAppBar from './components/navbar';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <div><br></br></div>
      <ResponsiveGrid/>
    </div>
  );
}

export default App;
