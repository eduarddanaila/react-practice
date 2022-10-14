import logo from './logo.svg';
import './App.css';
import Person from "../src/person.jsx";
import MyComponent from "../src/mycomponent.jsx";
import PropComp from "../src/newFile.jsx";
import MilesAhead from "../src/MilesAhead.jsx";
import Login from "../src/userPassword.jsx"
import Car from "../src/carsComponent.jsx"
import LoginControl from "../src/loginControl.jsx"


const App = () => {
  return (
    <>
      {/* <PropComp />,
      <Person />,
      <MyComponent />
      <MilesAhead /> 
      <Login />
      <br />
      <Car /> */}
      <LoginControl />
    </>
  )
}
export default App;

