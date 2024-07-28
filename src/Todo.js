
import React, { useState } from 'react'


function Todo() {
  const [activity, setActivity] = useState("")
    const [listdata, setListdata] = useState([])
    function addActiv() {
        // setListdata([...listdata, activity])
        // console.log(listdata)
        setListdata((listdata) => {
            const updateList = [...listdata, activity]
            console.log(updateList)
            setActivity('')
            return updateList
        })
    }

    function remove(i) {
        const updateeeee = listdata.filter((elem, id) => {
            return i !== id;
        })
        setListdata(updateeeee);
    }

    function removeAll() {
        setListdata([])
     }
  return (
    <>

    <div>
        <div className='font-bold uppercase text-3xl text-white py-2'>Todo List</div>
        <input className='px-[10px] py-[5px]' placeholder='Add Activity' size={50} type='text' value={activity} onChange={(e) => {
            setActivity(e.target.value)
        }} />
        <button className='bg-green-700 text-white py-[6px] px-4' onClick={addActiv} >Add</button>
        <p className='text-white py-2'>✅ List Your Activity....</p>
        {listdata !== [] && listdata.map((data, i) => {
            return (
                <>
                    <div className='flex  justify-between'>
                        <p className='bg-gray-700 rounded-sm pl-2 my-2 ' key={i}>
                            <div className='text-white m-1 my-2 w-max pr-4 '> <span className='pr-2'>📌 </span> {data}</div>
                        </p>
                        <button key={i} className='bg-red-600  my-2 px-4 text-white' onClick={() => {
                            remove(i)
                        }} >Remove</button>
                    </div>
                </>
            )
        })}
        {listdata.length >= 1 && <button onClick={removeAll} className='bg-red-600 text-white px-4 rounded-md py-1'>Remove All</button>}
    </div>
    

</>
  )
}

export default Todo