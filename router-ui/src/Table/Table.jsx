import React, { Fragment, useEffect, useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    getExpandedRowModel,
    ColumnDef,
    flexRender,
    Row,
    getSortedRowModel,
} from '@tanstack/react-table'
import className from 'classnames'


import { RenderSubComponent } from './makeData'
import PopoverComponent, { PopOver, SelectComponent } from '../components/select'



const Table = ({
    data,
    columns,
    renderSubComponent,
    getRowCanExpand,
    account
}) => {

    const [sorting, setSorting] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})
    console.debug("myaccount",account)

    const table = useReactTable({
        data,
        columns,
        getRowCanExpand,
        state: {
            sorting,
            columnVisibility,
        },
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
    })



    return (
        <div className="p-2">
            <div className="flex justify-end text-white border border-black rounded shadow">
                <div className="flex justify-end w-full px-1 border-b border-black">
                    <PopoverComponent body= {table.getAllLeafColumns().map(column => {
                    return (
                        <div key={column.id} className="p-2 bg-white">
                            <label>
                                <input
                                    {...{
                                        type: 'checkbox',
                                        checked: column.getIsVisible(),
                                        onChange: column.getToggleVisibilityHandler(),
                                    }}
                                />{' '}
                                {column.id}
                            </label>
                        </div>
                    )
                })} button={(<div className='ri-tools-line'></div>)}/>
                </div>
            </div>
            <table className='table text-white bg-black border border-red-500'>
                <thead>
                    {table?.getHeaderGroups()?.map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                console.debug("sort", headerGroup)
                                return (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div className='cursor-pointer' onClick={header.column.getToggleSortingHandler()}>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {
                                                    header.id != 'expander' && header.column.getCanSort() && header.column.getIsSorted() ? <i class="ri-arrow-up-line"></i> : <i class="ri-arrow-down-line"></i>}

                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <Fragment key={row.id}>
                                <tr>
                                    {/* first row is a normal row */}
                                    {row.getVisibleCells().map(cell => {
                                        console.debug("highlight",row.original?.highlight)
                                        return (
                                            <td key={cell.id} className={className(['items-center'],{'bg-red-500':row.original?.highlight})}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                                {row.getIsExpanded() && (
                                    <tr>
                                        {/* 2nd row is a custom 1 cell row */}
                                        <td colSpan={row.getVisibleCells()?.length}>
                                            {RenderSubComponent({ row })}
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table


