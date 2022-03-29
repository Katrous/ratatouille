import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
function App() {

  async function getData(){
    let response = await fetch(":5000/api/recipes");
    let data = await response.json()
    return data;
  }
  return (
    <div className="App">
     <Header />
     <Home />
      <Outlet/>
    </div>
  );
}

export default App;
