import logo from './logo.svg';
import './App.css';
import GroupCard from "./components/GroupCard";
import React,{ useState } from "react";

function App() {
  const [groups ,setGroups] = useState([
    {
      name:"Group 1",
      data:[
        {
         title:"Header",
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
          title:"Header",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
         }
      ]
    },
    {
      name:"Group 2",
      data:[
        {
         title:"Header",
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      ]
    }
  ])
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
      <GroupCard groups={groups}></GroupCard>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
