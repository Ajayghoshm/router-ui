import Table from "./Table"
import React, { useEffect, useState } from 'react'
import {getTokenList, getTransactionList} from './apiCall'
import { Status } from "../components/Status"

const columns = [
    {
        accessorKey: 'Time',
        header: 'Time',
        cell: ({ row, getValue }) => (
            <div
                className='flex justify-center p-2'
            >
                {getValue()}
            </div>
        ),
    },
    {
        accessorKey: 'From',
        id: 'From',
        cell: ({ row, getValue }) => (
            <div
                className='flex justify-center overflow-hidden text-ellipsis'
            >
                {getValue()}
            </div>
        ),
        header: 'From',
    },

    {
        accessorKey: 'To',
        header: () => 'To',
        footer: props => props.column.id,
        cell: ({ row, getValue }) => (
            <div
                className='flex justify-center'
            >
                {getValue()}
            </div>
        ),
    },
    {
        accessorKey: 'Status',
        header: () => <span>Status</span>,
        footer: props => props.column.id,
        cell: ({ row, getValue }) => (
            <Status data={getValue()}/>
        ),
    },
    {
        id: 'expander',
        header: () => null,
        cell: ({ row }) => {
            return row.getCanExpand() ? (
                <button
                    {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: 'pointer' },
                    }}
                >
                    {!row.getIsExpanded() ? <div className='flex justify-center space-x-1'>
                        <p>More details</p>
                        <i class="ri-arrow-right-s-fill"></i>
                        </div> : 
                        <div className='flex space-x-1'>
                        <p>Less details</p>
                        <i class="ri-arrow-left-s-line"></i>
                        </div>}
                </button>
            ) : (
                '🔵'
            )
        },
    },
]


function TableComponent({account}) {
    const [data,setData] = React.useState([])
    const [tokenList,setTokenList]=useState([])


    useEffect(()=>{
        getTransactionList().then((data,account)=>{
            console.debug("data",data)
            setData(data)
        })
    },[])




    return (
        <Table
            data={data}
            columns={columns}
            getRowCanExpand={() => true}
            account={account}
        />
    )
}

export default TableComponent


