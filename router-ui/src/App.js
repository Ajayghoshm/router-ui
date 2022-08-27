import logo from './logo.svg';
import './App.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import 'remixicon/fonts/remixicon.css'
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";

function App() {

  function getLibrary(provider) {
    console.log("getting library") 
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
  
  return (
    <div className="w-full h-screen overflow-auto bg-black">
      <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
      <Dashboard />
      </Router>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
