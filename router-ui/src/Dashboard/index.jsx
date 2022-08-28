import React,{useEffect} from 'react'
import Content from './Content'
import Navbar from './Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useWeb3React } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'



const Dashboard = () => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React()

     const injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42],
    })

    useEffect(()=>{
        console.debug("acount",account)
    },[account])

    async function connect() {
        try {
            await activate(injected)
            localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
            console.log(ex)
        }
    }


  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }
  
    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem('isWalletConnected') === 'true' && !active) {
                try {
                    await activate(injected)
                    localStorage.setItem('isWalletConnected', true)
                } catch (ex) {
                    console.log(ex)
                }
            }
        }
        connectWalletOnPageLoad()
    }, [])


    return (<div>
        <Navbar />
        <div className='flex justify-center w-full py-4 text-3xl font-extrabold text-white'>Bridge Explorer</div>
        <div className='flex justify-end m-2 space-x-2'>
        <div className='w-32 p-2 text-xs font-bold bg-red-500 rounded-md cursor-pointer '>
            Launch Voyager
            </div> 
        <div className='w-32 p-2 text-xs font-bold bg-red-500 rounded-md cursor-pointer '>
        {!active ?
            <div onClick={() => connect()} >Connect to My meta mask</div>
            : <div onClick={() => disconnect()}>Disconnect My meta mask
            </div>}
        </div>

        </div>
        <div  className='flex justify-end m-2'>
        {account &&  <div className='self-end text-xs text-white'>{account}</div>}
        </div>


        <Routes>
            <Route exact path="/" element={<Content account={account} />} />
            <Route exact path="/crosstalk" element={<Content />} />
        </Routes>
    </div>)
}

export default Dashboard