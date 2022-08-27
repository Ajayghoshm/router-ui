import React from 'react'


export const Status=({data})=>{
    return(<div className='flex justify-center w-32 text-xs bg-green-400 rounded-md'>
        {data}
    </div>)
}