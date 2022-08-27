import React from 'react'



const Navbar = () => {
    return (
        <div className='w-full h-12 py-6 text-white'>
            <div className='flex p-2 space-x-2'>
                <div className='flex space-x-1 text-lg'>
                    <img src='https://explorer.routerprotocol.com/static/media/router-header-logo.cfaba5fe.svg' width='100' height='100' />
                </div>
                <div className='px-4 font-bold cursor-pointer'>
                    <p>Cross-Chain Swap</p>
                </div>
                <div className='px-2 font-bold cursor-pointer'>
                    <p>Cross Talk</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar