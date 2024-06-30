import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mt-20 md:px-20 px-4'>
        <div className='items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl text-slate-700'>We are delight to have you <span className='text-yellow-400'>Here :)</span></h1>
        <p className='mt-12 text-slate-600'>
        Lorem30 debasihs ajsjnjuh njksdbds hkjbddd kjhsuujjs jdjjdjdj jsjsjjjjs  jsjjsjsj  sjjsj Lorem30 debasihs ajsjnjuh njksdbds hkjbddd kjhsuujjs jdjjdjdj jsjsjjjjs  jsjjsjsj  sjjsj
        </p>
        <Link to='/'>
        <button className='hover:bg-yellow-200 bg-yellow-400 text-black px-4 py-2 mt-6 rounded-md'>Back</button>
        </Link>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map( (item) => (
                    <Cards item={item} key={item.id}/>
                ))
            }
        </div>
        </div>
      </div>
    </>
  )
}

export default Course
