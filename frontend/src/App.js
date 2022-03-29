import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './components/Header'
function App() {

  async function getData(){
    let response = await fetch(":5000/api/recipes");
    let data = await response.json()
    return data;
  }
  return (
    <div className="App">
     <Header />
     <div>
       {getData().then(data => console.log(data))}
     </div>
      <Outlet/>
    </div>
  );
}

export default App;
