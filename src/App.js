import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import TopBar from "./components/top-bar";
import MainContent from "./components/main-content";

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        <MainContent></MainContent>
    </div>
  );
}

export default App;
