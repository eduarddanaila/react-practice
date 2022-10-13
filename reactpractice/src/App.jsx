import logo from './logo.svg';
import './App.css';
import Person from "../src/person.jsx";
import MyComponent from "../src/mycomponent.jsx";
import PropComp from "../src/newFile.jsx";

const App = () => {
  return (
    <>
      <PropComp />,
      <Person />,
      <MyComponent />
    </>
  )
}



export default App;

