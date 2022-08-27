import React, { useState } from 'react'
import { Charts } from './Charts'
import useChartOptions from './Charts.utils';
import { Resizable } from 'react-resizable';


const Box=({removeItem,item})=>{


    

    const chartOptions = useChartOptions ();
    
    return(<div className='h-full px-2 bg-black border border-red-500'>
        <div className='flex justify-end text-white'>
        <div></div>
        <div className='flex space-x-1'>
        <div className="cursor-pointer ri-fullscreen-line" />
        <div className='cursor-pointer ri-close-line' onClick={()=>removeItem(item.i)}></div>
        </div>
        </div>
        <div className='pt-8'>
        <Charts option={chartOptions} />
        </div>
    </div>)
}


export default Box 


