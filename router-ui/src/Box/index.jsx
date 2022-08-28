import React, { useState } from 'react'
import { Charts } from './Charts'
import useChartOptions from './Charts.utils';
import { Resizable } from 'react-resizable';
import PopoverComponent from '../components/select';


const Box=({removeItem,item})=>{

    const [ChartType,setChartType]=useState('Bar')


    const onChartChange=(value)=>{
        console.debug("chartType",value)
        setChartType(value)
    }
    

    const chartOptions = useChartOptions(ChartType);
    
    return(<div className='h-full px-2 bg-black border border-red-500'>
        <div className='flex justify-end text-white'>
        <div></div>
        <div className='flex space-x-1'>
        <div className="cursor-pointer ri-fullscreen-line" />
        <div className='cursor-pointer ri-close-line' onClick={()=>removeItem(item.i)}></div>
        <PopoverComponent body= {
                        <div  className="p-2 bg-white">
                            
                                <div className='cursor-pointer' onClick={()=>onChartChange("Bar")}>Bar chart</div>
                                <div className='cursor-pointer' onClick={()=>onChartChange("Line")}>Line chart</div>
                          
                        </div>
                    
                } button={(<div className='ri-tools-line'></div>)}/>
        </div>
        </div>
        <div className='pt-8'>
        <Charts option={chartOptions} />
        </div>
    </div>)
}


export default Box 


