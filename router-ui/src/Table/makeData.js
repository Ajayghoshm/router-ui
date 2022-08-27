import { Status } from "../components/Status"
import { Tooltip } from "../components/Tooltip"

export const defaultData = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]


// export type Person = {
//   firstName: string
//   lastName: string
//   age: number
//   visits: number
//   progress: number
//   status: 'relationship' | 'complicated' | 'single'
//   subRows?: Person[]
// }

const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}


export const RenderSubComponent = ({ row }) => {
  let list = Object.entries(row.original)
  let middleIndex = Math.ceil(list.length / 2)
  const firstHalf = list.splice(0, middleIndex);
  const secondHalf = list.splice(-middleIndex);

  return (
    <div className='grid grid-flow-row-dense grid-cols-2 gap-16 px-10 py-4 mx-4 my-6 border border-red-400 rounded-md'>
      {/* <code>{JSON.stringify(row.original, null, 2)}</code> */}
      <div>
      {firstHalf.map(item => {
        return (<div className='flex justify-between w-full px-2 border border-black space-x-'>
          <p className='font-semibold'> {item[0]?.replace(/(?:_| |\b)(\w)/g, function($1){return $1.toUpperCase().replace('_',' ');})}</p>
          <p>{item[0]=="Status"?<Status data={item[1]}/>: <>{item[1]?.length>10?<Tooltip data={item[1]}/>:item[1]}</>}</p>
        </div>)
      })}
      </div>
      <div>
      {secondHalf.map(item => {
        return (<div className='flex justify-between w-full border-black space-x-3border'>
          <p className='font-semibold'> {item[0]?.replace(/(?:_| |\b)(\w)/g, function($1){return $1.toUpperCase().replace('_',' ');})}</p>
          <p>{item[0]=="Status"?<Status data={item[1]}/>: <>{item[1]?.length>10?<Tooltip data={item[1]}/>:item[1]}</>}</p>
        </div>)
      })}
      </div>
    </div>
  )
}

