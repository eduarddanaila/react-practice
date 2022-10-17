import logo from './logo.svg';
import './App.css';
import Person from "../src/personAbcd.jsx";
import MyComponent from "../src/mycomponent.jsx";
import PropComp from "../src/newFile.jsx";
import MilesAhead from "../src/MilesAhead.jsx";
import Login from "../src/userPassword.jsx"
import Car from "../src/carsComponent.jsx"
import LoginControl from "../src/loginControl.jsx"
import Content from "../src/Content"
import SubContent from "../src/subContent.jsx"
import EmployeeInfo from "../src/EmployeeInfo.jsx"
import FilmReq from "../src/FilmRequest.jsx"
import OMDB from "../src/FilmSearch"


const App = () => {
  return (
    <>
      {/* <PropComp />,
      <Person />,
      <MyComponent />
      <MilesAhead /> 
      <Login />
      <br />
      <Car /> 
      <LoginControl /> 
      <Content />
      <SubContent />
      <EmployeeInfo />
      <FilmReq />*/}
      <OMDB />
    </>
  )
}
export default App;

