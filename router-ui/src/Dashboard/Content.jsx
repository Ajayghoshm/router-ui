import React, { Component, useState } from "react";
// import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import Box from "../Box";
import Tables from "../Table";

const ResponsiveGridLayout = WidthProvider(Responsive);


const Content=({account})=>{

  const [layout,setLayout]=useState({lg:[
    { i: "a", x: 0, y: 0, w: 6, h: 1.5 },
    { i: "b", x: 6, y: 0, w: 6, h: 1.5 },
    // { i: "c", x: 8, y: 0, w: 4, h: 1 },
    // { i: "d", x: 0, y: 1, w: 4, h: 1 },
    // { i: "e", x: 4, y: 1, w: 4, h: 1 },
    // { i: "f", x: 8, y: 1, w: 4, h: 1 },
  ]})


    const removeItemFunction=(index)=>{
      setLayout(state=>{
       let  newStateArray=state.lg.filter(item=>{
          return(item.i!==index)
        })
        return({lg:newStateArray})
      })
    }

    return (
      <div>
        {/* <button style={{ marginLeft: "45%" }} onClick={this.onHandle}>
          {this.state.value === true ? "Increase" : "Decrease"} Grid by 2
          columns
        </button> */}
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={281}
          width={1200}
        >
          {layout.lg.map(item=>{
            return(
              <div key={item.i} key={item.i} className='rounded-lg'>
              <Box removeItem={removeItemFunction} item={item}/>
            </div>
            )
          })}
          {/* <div key="c" >
            <Box />
          </div>
          <div key="d">
            <Box />
          </div>
          <div key="e">
            <Box />
          </div>
         <div key="f">
            <Box  />
          </div> */}
        </ResponsiveGridLayout>
        <Tables account={account}/>
      </div>
    );
}

export default Content
