// import logo from './logo.svg';
import './App.css';
import {Header1,Header2} from './components/header';
import List from './components/points';

function App() {
    const mobileOS = ["Anroid","Blackberry", "iPhone","Windows"];
    const mobileManuf = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">

     <div>

      <Header1></Header1>

      <List data = {mobileOS}/>

      <Header2></Header2>

      <List data= {mobileManuf} />
     </div>
      
    </div>
  );
}

export default App;
